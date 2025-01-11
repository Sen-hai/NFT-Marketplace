
<img width="1275" alt="35a8780104dcdf9b5099ab281592d64" src="https://github.com/user-attachments/assets/79f729d0-6ef3-4d28-ab60-a8860e1b2f66" />

<img width="1275" alt="a9b0b291d8e29c6bd774ff780e9f289" src="https://github.com/user-attachments/assets/4005f5ec-d061-4ed1-8398-37a943ad20a7" />

<img width="1275" alt="f9142497424c0de691dc3734593ed6b" src="https://github.com/user-attachments/assets/51ccd7f8-7636-499d-a654-fffbd9644f75" />





### 安装说明

以下是开始使用的步骤：

1. 克隆代码仓库
   ```sh
   git clone https://github.com/Sen-hai/NFT-Marketplace
   ```
2. 安装依赖包
   ```sh
   yarn
   ```
3. 添加环境变量，同时需要从 Infura 获取专用的 IPFS 子域名
   ```sh
   PRIVATE_KEY=
   MUMBAI_URL= https://rpc-mumbai.maticvigil.com/
   INFURA_IPFS_ID=
   INFURA_IPFS_SECRET=
   INFURA_IPFS_DOMAIN=
   ```
4. 部署智能合约
   ```sh
   npx hardhat run scripts/deploy.js --network mumbai
   ```
5. 启动应用程序
   ```sh
   yarn run dev
   ```

### 规格说明

#### Solidity 函数

1. 铸造代币并将其列在市场上

```solidity
  function createToken(string memory tokenURI, uint256 price)
    public
    payable
    returns (uint256)
  {
    _tokenIds.increment();
    uint256 newTokenId = _tokenIds.current();

    _mint(msg.sender, newTokenId);
    _setTokenURI(newTokenId, tokenURI);
    createMarketItem(newTokenId, price);
    return newTokenId;
  }

  function createMarketItem(uint256 tokenId, uint256 price) private {
    require(price > 0, '价格必须至少为 1 wei');
    require(msg.value == listingPrice, '价格必须等于上架价格');

    idToMarketItem[tokenId] = MarketItem(
      tokenId,
      payable(msg.sender),
      payable(address(this)),
      price,
      false
    );

    _transfer(msg.sender, address(this), tokenId);
    emit MarketItemCreated(tokenId, msg.sender, address(this), price, false);
  }
```

2. 创建市场物品的销售并完成所有权转移，同时在各方之间转移资金

```solidity
function createMarketSale(uint256 tokenId) public payable {
    uint256 price = idToMarketItem[tokenId].price;
    address seller = idToMarketItem[tokenId].seller;
    require(
      msg.value == price,
      '请提交商品价格以完成购买'
    );
    idToMarketItem[tokenId].owner = payable(msg.sender);
    idToMarketItem[tokenId].sold = true;
    idToMarketItem[tokenId].seller = payable(address(0));
    _itemsSold.increment();
    _transfer(address(this), msg.sender, tokenId);
    payable(owner).transfer(listingPrice);
    payable(seller).transfer(msg.value);
  }
```

3. 返回未售出的市场物品

```solidity
function fetchMarketItems() public view returns (MarketItem[] memory) {
    uint256 itemCount = _tokenIds.current();
    uint256 unsoldItemCount = _tokenIds.current() - _itemsSold.current();
    uint256 currentIndex = 0;

    MarketItem[] memory items = new MarketItem[](unsoldItemCount);
    for (uint256 i = 0; i < itemCount; i++) {
      if (idToMarketItem[i + 1].owner == address(this)) {
        uint256 currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
    return items;
  }
```

4. 转售已购买的代币

```solidity
  function resellToken(uint256 tokenId, uint256 price) public payable {
    require(
      idToMarketItem[tokenId].owner == msg.sender,
      '只有代币所有者可以进行此操作'
    );
    require(msg.value == listingPrice, '价格必须等于上架价格');
    idToMarketItem[tokenId].sold = false;
    idToMarketItem[tokenId].price = price;
    idToMarketItem[tokenId].seller = payable(msg.sender);
    idToMarketItem[tokenId].owner = payable(address(this));
    _itemsSold.decrement();

    _transfer(msg.sender, address(this), tokenId);
  }
```

5. 只返回用户已购买的物品

```solidity
function fetchMyNFTs() public view returns (MarketItem[] memory) {
    uint256 totalItemCount = _tokenIds.current();
    uint256 itemCount = 0;
    uint256 currentIndex = 0;

    for (uint256 i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].owner == msg.sender) {
        itemCount += 1;
      }
    }

    MarketItem[] memory items = new MarketItem[](itemCount);
    for (uint256 i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].owner == msg.sender) {
        uint256 currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
    return items;
  }
```

6. 只返回用户在市场上列出的物品

```solidity
function fetchItemsListed() public view returns (MarketItem[] memory) {
    uint256 totalItemCount = _tokenIds.current();
    uint256 itemCount = 0;
    uint256 currentIndex = 0;

    for (uint256 i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].seller == msg.sender) {
        itemCount += 1;
      }
    }

    MarketItem[] memory items = new MarketItem[](itemCount);
    for (uint256 i = 0; i < totalItemCount; i++) {
      if (idToMarketItem[i + 1].seller == msg.sender) {
        uint256 currentId = i + 1;
        MarketItem storage currentItem = idToMarketItem[currentId];
        items[currentIndex] = currentItem;
        currentIndex += 1;
      }
    }
    return items;
  }
```

7. 给市场所有者权限更新用户的上架费用

```solidity
function updateListingPrice(uint256 _listingPrice) public payable {
    require(
      owner == msg.sender,
      '只有市场所有者可以更新上架价格'
    );
    listingPrice = _listingPrice;
  }
```

8. 获取合约的上架费用

```solidity
function getListingPrice() public view returns (uint256) {
    return listingPrice;
  }
```

#### JavaScript 函数

1. INFURA IPFS 文件上传器

```javascript
const auth =
  'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
});

async function onChange(e) {
  const file = e.target.files[0];
  try {
    const added = await client.add(file, {
      progress: (prog) => console.log(`接收到的进度: ${prog}`),
    });
    const url = `${infuraDomain}/ipfs/${added.path}`; //来自 Infura 的专用子域名
    console.log(url);
  } catch (error) {
    console.log('上传文件时出错: ', error);
  }
}
```

2. 创建 NFT 并进行上架

```javascript
  async function createSale(url) {
      const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true,
      });
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const price = web3.utils.toWei(formik.values.price, 'ether');
      let contract = new ethers.Contract(
        marketAddress,
        Marketplace.abi,
        signer,
      );
      let listingPrice = await contract.getListingPrice();
      listingPrice = listingPrice.toString();
      let transaction = await contract.createToken(url, price, {
        value: listingPrice,
      });
      try {
        await transaction.wait();
        console.log(transaction.transactionHash);
      } catch (error) {
        alert('创建 NFT 时出错！请再试一次。');
      }
  }

async function createMarket() {
    const { name, description, price, address } = formik.values;
    if (!name || !description || !price || !fileUrl) return;
    /* 首先，上传到 IPFS */
    const data = JSON.stringify({
      name,
      description,
      address,
      image: fileUrl,
    });
    try {
      const added = await client.add(data);
      const url = `${infuraDomain}/ipfs/${added.path}`;
      createSale(url);
    } catch (error) {
      console.log('上传文件时出错: ', error);
    }
  }
```

3. 获取已上架的 NFTs

```javascript
async function loadNFTs() {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://rpc-mumbai.maticvigil.com',
  );
  const marketContract = new ethers.Contract(
    marketAddress,
    Marketplace.abi,
    provider,
  );
  const data = await marketContract.fetchMarketItems();

  const items = await Promise.all(
    data.map(async (i) => {
      const tokenUri = await marketContract.tokenURI(i.tokenId);
      const meta = await axios.get(tokenUri);
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        address: meta.data.address,
      };
      return item;
    }),
  );
  {
    console.log('物品列表: ', items);
  }
}
```

4. 购买 NFT

```javascript
async function buyNft(nft) {
  /* 需要用户签署交易，因此将使用 Web3Provider 并进行签署 */
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const marketContract = new ethers.Contract(
    marketAddress,
    Marketplace.abi,
    signer,
  );
  /* 用户将被提示支付所要求的价格以完成交易 */
  const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
  const transaction = await marketContract.createMarketSale(nft.tokenId, {
    value: price,
  });
  await transaction.wait();
  loadNFTs();
}
```

5. 获取已拥有的 NFTs

```javascript
async function loadNFTs() {
  const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
  });
  const connection = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();
  const marketContract = new ethers.Contract(
    marketAddress,
    Marketplace.abi,
    signer,
  );
  const data = await marketContract.fetchMyNFTs();
  const items = await Promise.all(
    data.map(async (i) => {
      const tokenURI = await marketContract.tokenURI(i.tokenId);
      const meta = await axios.get(tokenURI);
      let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
      let item = {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        tokenURI,
      };
      return item;
    }),
  );
}
```
