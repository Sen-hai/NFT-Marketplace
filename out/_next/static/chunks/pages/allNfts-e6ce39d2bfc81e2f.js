(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[775],{43800:function(a,b,c){"use strict";var d=c(64836);b.Z=void 0;var e=d(c(64938)),f=c(85893),g=(0,e.default)((0,f.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");b.Z=g},26797:function(a,b,c){"use strict";var d=c(64836);b.Z=void 0;var e=d(c(64938)),f=c(85893),g=(0,e.default)((0,f.jsx)("path",{d:"M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z"}),"ShoppingBag");b.Z=g},89150:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/allNfts",function(){return c(69730)}])},37218:function(a,b,c){"use strict";var d=c(47568),e=c(34051),f=c.n(e),g=c(85893),h=c(67294),i=c(45697),j=c.n(i),k=c(2734),l=c(87357),m=c(15861),n=c(86886),o=c(66242),p=c(44267),q=c(62023),r=c(83321),s=c(83965),t=c(43800),u=c(23795),v=c(26797),w=c(42484),x=c.n(w),y=c(241),z=c(68209),A=c(35553),B=c(39951),C=c(57922),D=c(21737),E=c(93946),F=c(50594),G=function(a){var b=a.loadNFTs,c=a.data,e=a.buttonShow;(0,k.Z)();var i=(0,h.useState)(!1),j=i[0],w=i[1];function G(){return(G=(0,d.Z)(f().mark(function a(c){var d,e,g,h,i,j,k;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=new(x())({network:"mainnet",cacheProvider:!0}),a.next=3,d.connect();case 3:return e=a.sent,h=(g=new y.Q(e)).getSigner(),i=new z.CH("0xe10a8232AD340D6f806a85C061F9c414f2F1B8C3",B.Mt,h),j=A.vz(c.price.toString(),"ether"),a.next=10,i.createMarketSale(c.tokenId,{value:j});case 10:return k=a.sent,a.next=13,k.wait();case 13:return w(!0),a.next=16,b();case 16:case"end":return a.stop()}},a)}))).apply(this,arguments)}return(0,g.jsxs)(l.Z,{children:[(0,g.jsx)(n.ZP,{container:!0,spacing:4,children:(void 0===c?[]:c).map(function(a,b){return(0,g.jsx)(n.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,g.jsx)(l.Z,{display:"block",width:1,height:1,children:(0,g.jsxs)(l.Z,{component:o.Z,width:1,height:1,display:"flex",flexDirection:"column",children:[(0,g.jsx)(s.Z,{title:a.name,image:a.image,sx:{position:"relative",height:{xs:240,sm:340,md:280},overflow:"hidden"},children:(0,g.jsxs)(l.Z,{display:"flex",justifyContent:"space-between",position:"absolute",bottom:0,padding:2,width:1,children:[(0,g.jsx)(l.Z,{padding:1,bgcolor:"background.paper",boxShadow:1,borderRadius:2,children:(0,g.jsxs)(m.Z,{sx:{fontWeight:600},children:[a.price," ETH"]})}),(0,g.jsx)(l.Z,{padding:1,bgcolor:"background.paper",boxShadow:1,borderRadius:2,children:(0,g.jsx)(l.Z,{component:"svg",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:16,height:16,color:"primary.main",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})})})]})}),(0,g.jsxs)(p.Z,{children:[(0,g.jsx)(m.Z,{variant:"h6",align:"left",sx:{fontWeight:700},children:a.name}),(0,g.jsx)(l.Z,{display:"flex",alignItems:"center",marginY:2,children:(0,g.jsx)(m.Z,{variant:"subtitle2",color:"text.secondary",children:a.description})}),(0,g.jsxs)(l.Z,{display:"flex",alignItems:"center",children:[(0,g.jsx)(l.Z,{component:"svg",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:16,height:16,marginRight:1,children:(0,g.jsx)(t.Z,{})}),(0,g.jsx)(m.Z,{variant:"subtitle2",color:"text.secondary",children:(0,g.jsx)(u.Z,{href:a.address,underline:"none",children:"链接到NFT"})})]}),(0,g.jsx)(q.Z,{sx:{justifyContent:"flex-end"},children:e&&(0,g.jsx)(r.Z,{onClick:function(){return function(a){return G.apply(this,arguments)}(a)},startIcon:(0,g.jsx)(l.Z,{component:"svg",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",width:24,height:24,children:(0,g.jsx)(v.Z,{})}),children:"购买"})})]})]},b)})},b)})}),(0,g.jsx)(C.Z,{style:{position:"fixed",left:0,bottom:0,margin:"1pc"},in:j,children:(0,g.jsx)(D.Z,{severity:"info",action:(0,g.jsxs)(E.Z,{onClick:function(){w(!1)},children:[" ",(0,g.jsx)(F.Z,{})]}),sx:{mb:2},children:"交易成功"})})]})};G.propTypes={data:j().array,buttonShow:j().bool},b.Z=G},69730:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return x}});var d=c(85893),e=c(67294),f=c(47568),g=c(34051),h=c.n(g),i=c(87357),j=c(2734),k=c(80008),l=c(33338),m=c(38504),n=c(37218),o=c(9669),p=c.n(o),q=c(40357),r=c(68209),s=c(35553),t=c(39951),u=function(){var a=(0,j.Z)(),b=(0,e.useState)([]),c=b[0],g=b[1],o=(0,e.useState)(!1),u=o[0],v=o[1];function w(){return x.apply(this,arguments)}function x(){return(x=(0,f.Z)(h().mark(function a(){var b,c,d,e;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=new q.r("http://localhost:8545"),c=new r.CH("0xe10a8232AD340D6f806a85C061F9c414f2F1B8C3",t.Mt,b),a.next=4,c.fetchMarketItems();case 4:return d=a.sent,a.next=7,Promise.all(d.map(function(){var a=(0,f.Z)(h().mark(function a(b){var d,e,f,g;return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.tokenURI(b.tokenId);case 2:return d=a.sent,a.next=5,p().get(d);case 5:return e=a.sent,g={price:f=s.bM(b.price.toString(),"ether"),tokenId:b.tokenId.toNumber(),seller:b.seller,owner:b.owner,image:e.data.image,name:e.data.name,description:e.data.description,address:e.data.address},a.abrupt("return",g);case 9:case"end":return a.stop()}},a)}));return function(b){return a.apply(this,arguments)}}()));case 7:g(e=a.sent),v(!0);case 10:case"end":return a.stop()}},a)}))).apply(this,arguments)}return((0,e.useEffect)(function(){w()},[]),u&&!c.length)?(0,d.jsxs)(k.Z,{children:[(0,d.jsx)(i.Z,{position:"relative",marginTop:{xs:4,md:6},sx:{backgroundColor:a.palette.alternate.main},children:(0,d.jsx)(i.Z,{component:"svg",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1920 100.1",sx:{position:"absolute",top:0,left:0,right:0,transform:"translateY(-50%)",zIndex:2,width:1},children:(0,d.jsx)("path",{fill:a.palette.alternate.main,d:"M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"})})}),(0,d.jsx)(l.Z,{children:(0,d.jsx)(m.Z,{})})]}):(0,d.jsxs)(k.Z,{children:[(0,d.jsx)(l.Z,{children:(0,d.jsx)(n.Z,{loadNFTs:w,data:c,buttonShow:!0})}),(0,d.jsxs)(i.Z,{position:"relative",marginTop:{xs:4,md:6},sx:{backgroundColor:a.palette.alternate.main},children:[(0,d.jsx)(i.Z,{component:"svg",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 1920 100.1",sx:{position:"absolute",top:0,left:0,right:0,transform:"translateY(-50%)",zIndex:2,width:1},children:(0,d.jsx)("path",{fill:a.palette.alternate.main,d:"M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"})}),(0,d.jsx)(l.Z,{children:(0,d.jsx)(m.Z,{})})]})]})},v=u,w=function(){return(0,d.jsx)(v,{})},x=w}},function(a){a.O(0,[277,702,765,465,695,112,774,888,179],function(){var b;return a(a.s=89150)}),_N_E=a.O()}])