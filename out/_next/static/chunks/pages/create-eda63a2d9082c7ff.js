(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[417],{40466:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create",function(){return c(4211)}])},41574:function(a,b,c){"use strict";var d=c(85893);c(67294);var e=c(27788),f=c.n(e),g=c(45697),h=c.n(g),i=c(87357),j=c(15861),k=function(a){var b=a.title;return(0,d.jsx)(i.Z,{children:(0,d.jsx)(i.Z,{marginBottom:4,children:(0,d.jsx)(j.Z,{variant:"h3",color:"text.primary",align:"center",sx:{fontWeight:700},children:(0,d.jsx)(f(),{strings:[b],typeSpeed:100,loop:!1})})})})};k.propTypes={title:h().string.isRequired},b.Z=k},4211:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return X}});var d=c(85893),e=c(67294),f=c(87357),g=c(2734),h=c(80008),i=c(33338),j=c(41574),k=c(38504),l=c(47568),m=c(70603),n=c(34051),o=c.n(n),p=c(82175),q=c(74231),r=c(86886),s=c(15861),t=c(57922),u=c(21737),v=c(93946),w=c(94484),x=c(8987),y=c(74900),z=c(26307),A=c(50594),B=c(45697),C=c.n(B),D=c(78262),E=c(83321),F=c(10167),G=function(a){var b=a.open,c=a.onClose,e=a.title,g=a.message,h=a.buttonLink,i=a.buttonText;return(0,d.jsx)(D.Z,{onClose:c,open:b,maxWidth:"sm",sx:{"& .MuiPaper-root":{borderRadius:4}},children:(0,d.jsxs)(f.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",paddingY:{xs:4,sm:10},paddingX:{xs:4,sm:12}},children:[(0,d.jsx)(F.Z,{sx:{fontSize:60}}),(0,d.jsx)(s.Z,{align:"center",children:(0,d.jsx)(s.Z,{component:"span",fontWeight:700,children:e})}),(0,d.jsx)(s.Z,{align:"center",children:(0,d.jsx)(s.Z,{component:"span",fontWeight:500,children:g})}),(0,d.jsx)(r.ZP,{container:!0,spacing:2,sx:{marginY:4},children:(0,d.jsx)(r.ZP,{item:!0,xs:12,children:(0,d.jsx)(E.Z,{href:h,size:"large",variant:"contained",fullWidth:!0,children:i})})}),(0,d.jsx)(s.Z,{align:"center",sx:{textDecoration:"underline",cursor:"pointer"},onClick:c,children:"Close"})]})})};G.propTypes={onClose:C().func.isRequired,open:C().bool.isRequired,title:C().string,message:C().string,buttonText:C().string,buttonLink:C().string};var H=G,I=c(3283),J=c.n(I),K=c(42484),L=c.n(K),M=c(241),N=c(68209),O=c(66428),P=c(34155);console.log("--------------"),console.log(P.env.PINATA_JWT),console.log("amber-adverse-halibut-110.mypinata.cloud");var Q=new O.i({pinataJwt:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjYWUwM2IxZS02ODE0LTQ5NjgtYmViMC05MjQxNWU4OTNmMGEiLCJlbWFpbCI6IjEzOTU2MDE0ODNAcXEuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImJiMjExNzQ2MDEwYTI4MzUwZWQ4Iiwic2NvcGVkS2V5U2VjcmV0IjoiZmI4ODIzN2IwYTdmYzdhOTU4MzYzNGM3YzM5ZDI1MDQyNGRjYTViNmEwOWMwMzI0MGMyNjZjOGNkOTRkZGNiYSIsImV4cCI6MTc1NzQxNzA3MH0.tv9hxT37i26p9_vxdobTjqlRHu1e-FK-bhK9mbDBzAA",pinataGateway:"".concat("amber-adverse-halibut-110.mypinata.cloud")}),R=c(39951),S=c(34155),T=q.Ry({name:q.Z_().trim().min(2,"Name too short").max(50,"Name too long").required("Please specify the name"),description:q.Z_().trim().max(1e3,"Should be less than 1000 chars").required("Please write description"),price:q.Z_().min(0,"Price should be minimum 0").required("Please specify NFT price"),address:q.Z_().min(0,"Price should be minimum 3").matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,"Enter correct url!")}),U=function(){var a,b,c,g,h=(0,p.TA)({initialValues:{name:"",description:"",price:"",address:""},validationSchema:T,onSubmit:function(a){E(!0),_()}}),i=(0,e.useState)(!1),j=i[0],k=i[1],n=(0,e.useState)(!1),q=n[0],B=n[1],C=(0,m.Z)(e.useState(!1),2),D=C[0],E=C[1],F=(0,e.useState)(""),G=F[0],I=F[1],K=(0,e.useState)(!1),O=K[0],P=K[1],U=(0,e.useState)(""),V=U[0],W=U[1],X=(0,e.useRef)(null);function Y(a){return Z.apply(this,arguments)}function Z(){return(Z=(0,l.Z)(o().mark(function a(b){var c,d,e,f,g,i,j,k;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!G){a.next=34;break}return c=new(L())({network:"mainnet",cacheProvider:!0}),a.next=4,c.connect();case 4:return d=a.sent,f=(e=new M.Q(d)).getSigner(),g=J().utils.toWei(h.values.price,"ether"),i=new N.CH("0xe10a8232AD340D6f806a85C061F9c414f2F1B8C3",R.Mt,f),a.next=11,i.getListingPrice();case 11:return j=a.sent,console.log(j),j=j.toString(),console.log(j),a.next=17,i.createToken(b,g,{value:j});case 17:return k=a.sent,a.prev=18,a.next=21,k.wait();case 21:W(k.hash),P(!0),a.next=29;break;case 25:a.prev=25,a.t0=a.catch(18),alert("Error in creating NFT! Please try again."),E(!1);case 29:X.current&&(X.current.value=""),B(!1),h.resetForm(),console.log(G),E(!1);case 34:if(G){a.next=36;break}return a.abrupt("return",B(!0));case 36:case"end":return a.stop()}},a,null,[[18,25]])}))).apply(this,arguments)}function $(){return($=(0,l.Z)(o().mark(function a(b){var c;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:c=b.target.files[0];try{I(c),console.log(c),k(!0)}catch(d){console.log("Error uploading file: ",d),E(!1),k(!1)}case 2:case"end":return a.stop()}},a)}))).apply(this,arguments)}function _(){return aa.apply(this,arguments)}function aa(){return(aa=(0,l.Z)(o().mark(function a(){var b,c,d,e,f,g,i,j,k,l,m,n,p,q;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c=(b=h.values).name,d=b.description,e=b.price,f=b.address,console.log(h.values),!(!c||!d||!e||!G)){a.next=4;break}return a.abrupt("return");case 4:return a.prev=4,(g=new FormData).set("file",G),i=g.get("file"),console.log(Q),a.next=11,Q.upload.file(i);case 11:return j=a.sent,console.log(j),a.next=15,Q.gateways.createSignedURL({cid:j.cid,expires:999999600});case 15:return k=a.sent,console.log(k),l='{\n        "attributes": [\n          {\n            "trait_type": "art",\n            "value": "picture"\n          },\n          {\n            "trait_type": "style",\n            "value": "nature"\n          }\n        ],\n        "description": "'.concat(d,'",\n        "image": "').concat(k,'",\n        "name": "').concat(c,'"\n      }'),m=new File([l],"nft-metadata.json",{type:"text/plain"}),a.next=21,Q.upload.file(m);case 21:return n=a.sent,a.next=24,Q.gateways.createSignedURL({cid:n.cid,expires:999999600});case 24:q=p=a.sent,console.log(p),Y(q),a.next=33;break;case 30:a.prev=30,a.t0=a.catch(4),console.log("Error uploading file: ",a.t0);case 33:case"end":return a.stop()}},a,null,[[4,30]])}))).apply(this,arguments)}return S.env.APIKey,S.env.APISecret,(0,d.jsxs)(f.Z,{children:[(0,d.jsx)("form",{onSubmit:h.handleSubmit,children:(0,d.jsxs)(r.ZP,{container:!0,spacing:4,children:[(0,d.jsxs)(r.ZP,{item:!0,xs:12,sm:6,children:[(0,d.jsxs)(s.Z,{variant:"subtitle2",sx:{marginBottom:2,display:"flex",alignItems:"center"},fontWeight:700,children:[(0,d.jsx)(y.Z,{fontSize:"medium"}),"文件上传 *"]}),(0,d.jsx)("input",{type:"file",name:"file",onChange:function(a){return $.apply(this,arguments)},ref:X}),(0,d.jsx)(t.Z,{in:j,children:(0,d.jsx)(u.Z,{severity:"success",sx:{mt:1},action:(0,d.jsx)(v.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){k(!1)},children:(0,d.jsx)(A.Z,{fontSize:"inherit"})}),children:"NFT上传成功!"})}),(0,d.jsx)(f.Z,{sx:{width:"100%"},children:(0,d.jsx)(t.Z,{in:q,children:(0,d.jsx)(u.Z,{severity:"error",action:(0,d.jsx)(v.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){B(!1)},children:(0,d.jsx)(A.Z,{fontSize:"inherit"})}),sx:{mb:2},children:"Please upload a file!"})})})]}),(0,d.jsxs)(r.ZP,{item:!0,xs:12,sm:6,children:[(0,d.jsx)(s.Z,{variant:"subtitle2",sx:{marginBottom:2},fontWeight:700,children:"NFT 名称"}),(0,d.jsx)(w.Z,{label:"输入NFT名称 *",variant:"outlined",name:"name",fullWidth:!0,onChange:h.handleChange,value:null===(a=h.values)|| void 0===a?void 0:a.name,error:h.touched.name&&Boolean(h.errors.name),helperText:h.touched.name&&h.errors.name})]}),(0,d.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,d.jsx)(s.Z,{variant:"subtitle2",sx:{marginBottom:2},fontWeight:700,children:"描述"}),(0,d.jsx)(w.Z,{label:"NFT描述信息 *",variant:"outlined",name:"description",multiline:!0,rows:3,fullWidth:!0,onChange:h.handleChange,value:null===(b=h.values)|| void 0===b?void 0:b.description,error:h.touched.description&&Boolean(h.errors.description),helperText:h.touched.description&&h.errors.description})]}),(0,d.jsxs)(r.ZP,{item:!0,xs:12,sm:6,children:[(0,d.jsx)(s.Z,{variant:"subtitle2",sx:{marginBottom:2},fontWeight:700,children:"售价"}),(0,d.jsx)(w.Z,{label:" 以ETH计价 *",variant:"outlined",name:"price",fullWidth:!0,onChange:h.handleChange,value:null===(c=h.values)|| void 0===c?void 0:c.price,error:h.touched.price&&Boolean(h.errors.price),helperText:h.touched.price&&h.errors.price})]}),(0,d.jsxs)(r.ZP,{item:!0,xs:12,sm:6,children:[(0,d.jsx)(s.Z,{variant:"subtitle2",sx:{marginBottom:2},fontWeight:700,children:"链接地址"}),(0,d.jsx)(w.Z,{label:"链接至你的NFT",variant:"outlined",name:"address",fullWidth:!0,onChange:h.handleChange,value:null===(g=h.values)|| void 0===g?void 0:g.address,error:h.touched.address&&Boolean(h.errors.address),helperText:h.touched.address&&h.errors.address})]}),(0,d.jsx)(r.ZP,{item:!0,container:!0,xs:12,children:(0,d.jsx)(f.Z,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"stretched",sm:"center"},justifyContent:"space-between",width:1,margin:"0 auto",children:(0,d.jsx)(x.Z,{endIcon:(0,d.jsx)(z.Z,{}),size:"large",variant:"contained",type:"submit",loading:D,loadingPosition:"end",children:"创建"})})})]})}),(0,d.jsx)(H,{open:O,onClose:function(){return P(!1)},title:"耶耶!",message:"NFT 创建成功 交易hash: ".concat(V),buttonText:"去其他地方查看",buttonLink:"https://mumbai.polygonscan.com/tx/".concat(V)})]})},V=U;function W(){var a=(0,g.Z)();return(0,d.jsxs)(h.Z,{children:[(0,d.jsx)(i.Z,{children:(0,d.jsx)(j.Z,{title:"创建和交易的NFT校园积分兑换平台。"})}),(0,d.jsx)(i.Z,{paddingY:"0 !important",children:(0,d.jsx)(V,{})}),(0,d.jsxs)(f.Z,{position:"relative",marginTop:{xs:4,md:6},sx:{backgroundColor:a.palette.alternate.main},children:[(0,d.jsx)(f.Z,{component:"svg",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1920 100.1",sx:{position:"absolute",top:0,left:0,right:0,transform:"translateY(-50%)",zIndex:2,width:1},children:(0,d.jsx)("path",{fill:a.palette.alternate.main,d:"M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"})}),(0,d.jsx)(i.Z,{children:(0,d.jsx)(k.Z,{})})]})]})}var X=function(){return(0,d.jsx)(W,{})}},62859:function(){},75304:function(){},71922:function(){},2363:function(){},96419:function(){},56353:function(){},43503:function(){},41529:function(){},22322:function(){},42009:function(){},87500:function(){},35091:function(){}},function(a){a.O(0,[277,482,714,702,765,788,23,695,112,774,888,179],function(){var b;return a(a.s=40466)}),_N_E=a.O()}])