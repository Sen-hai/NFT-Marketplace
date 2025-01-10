import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Box,
  Grid,
  TextField,
  Typography,
  IconButton,
  Collapse,
  Alert,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import DialogBox from 'components/DialogBox';

import web3 from 'web3';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
//import { create } from 'ipfs-http-client';
import { pinata } from '../../../../utils/pinata';
import Marketplace from 'contracts/Marketplace.sol/Marketplace.json';

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Name too short')
    .max(50, 'Name too long')
    .required('Please specify the name'),
  description: yup
    .string()
    .trim()
    .max(1000, 'Should be less than 1000 chars')
    .required('Please write description'),
  price: yup
    .string()
    .min(0, 'Price should be minimum 0')
    .required('Please specify NFT price'),
  address: yup
    .string()
    .min(0, 'Price should be minimum 3')
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!',
    ),
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      address: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      createMarket();
    },
  });

  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fileUrl, setFileUrl] = useState('');
  const [dialogBoxOpen, setDialogBoxOpen] = useState(false);
  const [hash, setHash] = useState('');
  const fileInputRef = useRef(null);

  const projectId = process.env.APIKey;
  const projectSecret = process.env.APISecret;
  const infuraDomain = process.env.NEXT_PUBLIC_GATEWAY_URL;

  /*const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');
*/
  /* const client = create({
     host: 'ipfs.infura.io',
     port: 5001,
     protocol: 'https',
     headers: {
       authorization: auth,
     },
   });*/

  async function createSale(url) {
    if (fileUrl) {
      const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
      });
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const price = web3.utils.toWei(formik.values.price, 'ether');
      let contract = new ethers.Contract(
        process.env.MARKETPLACE_ADDRESS,
        Marketplace.abi,
        signer,
      );
      let listingPrice = await contract.getListingPrice();
      console.log(listingPrice)

      listingPrice = listingPrice.toString();
      console.log(listingPrice)
      let transaction = await contract.createToken(url, price, {
        value: listingPrice,
      });

      try {
        await transaction.wait();
        setHash(transaction.hash);
        setDialogBoxOpen(true);
      } catch (error) {
        alert('Error in creating NFT! Please try again.');
        setLoading(false);
      }
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // clear the file input
      }
      setAlertOpen(false);
      formik.resetForm();
      console.log(fileUrl);
      setLoading(false);
    }

    if (!fileUrl) return setAlertOpen(true);
  }

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      /*const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `${infuraDomain}/ipfs/${added.path}`; //DEDICATED SUBDOMAIN FROM INFURA
     */
      setFileUrl(file);
      console.log(file);
      setOpen(true);
    } catch (error) {
      console.log('Error uploading file: ', error);
      setLoading(false);
      setOpen(false);
    }
  }

  async function createMarket() {
    const { name, description, price, address } = formik.values;
    console.log(formik.values)
    if (!name || !description || !price || !fileUrl) return;
    /* first, upload to IPFS */
    /* const data = JSON.stringify({
       name,
       description,
       address,
       image: fileUrl,
     });*/
    try {
      const data = new FormData();
      data.set("file", fileUrl);
      const file = data.get("file");
      console.log(pinata)

      const uploadData = await pinata.upload.file(file)
      console.log(uploadData)
      const urlPinata = await pinata.gateways.createSignedURL({
        cid: uploadData.cid,
       expires: 999999600,
      });
      console.log(urlPinata)



      var mateData = `{
        "attributes": [
          {
            "trait_type": "art",
            "value": "picture"
          },
          {
            "trait_type": "style",
            "value": "nature"
          }
        ],
        "description": "${description}",
        "image": "${urlPinata}",
        "name": "${name}"
      }`

      const fileMetaData = new File([mateData], "nft-metadata.json", { type: "text/plain" });
      const uploadMetaData = await pinata.upload.file(fileMetaData);
      const urlPinataMeta = await pinata.gateways.createSignedURL({
        cid: uploadMetaData.cid,
         expires: 999999600,
      });
      //const signedUrl = await urlPinata.json();
      //console.log(signedUrl)
      const url = urlPinataMeta;
      console.log(urlPinataMeta)
      createSale(url);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }

  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2, display: 'flex', alignItems: 'center' }}
              fontWeight={700}
            >
              <AttachFileIcon fontSize="medium" />
              文件上传 *
            </Typography>
            <input
              type="file"
              name={'file'}
              onChange={onChange}
              ref={fileInputRef}
            />
            <Collapse in={open}>
              <Alert
                severity="success"
                sx={{ mt: 1 }}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                NFT上传成功!
              </Alert>
            </Collapse>
            <Box sx={{ width: '100%' }}>
              <Collapse in={alertOpen}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setAlertOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  Please upload a file!
                </Alert>
              </Collapse>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              NFT 名称
            </Typography>
            <TextField
              label="输入NFT名称 *"
              variant="outlined"
              name={'name'}
              fullWidth
              onChange={formik.handleChange}
              value={formik.values?.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              描述
            </Typography>
            <TextField
              label="NFT描述信息 *"
              variant="outlined"
              name={'description'}
              multiline
              rows={3}
              fullWidth
              onChange={formik.handleChange}
              value={formik.values?.description}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              售价
            </Typography>
            <TextField
              label=" 以ETH计价 *"
              variant="outlined"
              name={'price'}
              fullWidth
              onChange={formik.handleChange}
              value={formik.values?.price}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              链接地址
            </Typography>
            <TextField
              label="链接至你的NFT"
              variant="outlined"
              name={'address'}
              fullWidth
              onChange={formik.handleChange}
              value={formik.values?.address}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item container xs={12}>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'center' }}
              justifyContent={'space-between'}
              width={1}
              margin={'0 auto'}
            >
              <LoadingButton
                endIcon={<SendIcon />}
                size={'large'}
                variant={'contained'}
                type={'submit'}
                loading={loading}
                loadingPosition={'end'}
              >
                创建
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      </form>
      <DialogBox
        open={dialogBoxOpen}
        onClose={() => setDialogBoxOpen(false)}
        title={'耶耶!'}
        message={`NFT 创建成功 交易hash: ${hash}`}
        buttonText="去其他地方查看"
        buttonLink={`https://mumbai.polygonscan.com/tx/${hash}`}
      />
    </Box>
  );
};

export default Form;
