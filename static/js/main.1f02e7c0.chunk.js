(this.webpackJsonpreact_web3=this.webpackJsonpreact_web3||[]).push([[0],{320:function(t,n,e){},321:function(t,n,e){},334:function(t,n){},337:function(t,n){},338:function(t,n){},342:function(t,n){},343:function(t,n){},369:function(t,n){},371:function(t,n){},384:function(t,n){},386:function(t,n){},405:function(t,n){},440:function(t,n){},441:function(t,n){},494:function(t,n){},496:function(t,n){},524:function(t,n){},526:function(t,n){},527:function(t,n){},532:function(t,n){},534:function(t,n){},540:function(t,n){},542:function(t,n){},561:function(t,n){},573:function(t,n){},576:function(t,n){},606:function(t,n){},608:function(t,n){},615:function(t,n){},616:function(t,n){},637:function(t,n){},644:function(t,n){},692:function(t,n){},720:function(t,n,e){"use strict";e.r(n);var i,u,c=e(37),o=e.n(c),a=e(310),r=e.n(a),s=(e(320),e(86)),p=(e(321),e(17)),l=e.n(p),f=e(72),d=e(165),y=e.n(d),b=[{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"CrackOpen",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"tokens_",type:"uint256"}],name:"e_AirDrop",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"Units_perNFT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"tokenURI",type:"string"}],name:"Mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Exists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],m=!1,h=function(){var t=Object(f.a)(l.a.mark((function t(){var n,e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"undefined"!==typeof(n=window.ethereum)&&(n.request({method:"eth_requestAccounts"}).then((function(t){i=t[0],console.log("Selected account is ".concat(i)),console.log("here 1!")})).catch((function(t){console.log(t)})),window.ethereum.on("accountsChanged",(function(t){i=t[0],console.log("Selected account changed to ".concat(i)),console.log("Changed!")}))),e=new y.a(n),u=new e.eth.Contract(b,"0xAe35771802cDe63791828b267d1F393cfcb82149"),m=!0;case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(f.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m){t.next=3;break}return t.next=3,h();case 3:return t.abrupt("return",u.methods.Units_perNFT().call().then((function(t){return y.a.utils.fromWei(t)})));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(f.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m){t.next=3;break}return t.next=3,h();case 3:return t.abrupt("return",u.methods.name().call());case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(f.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m){t.next=3;break}return t.next=3,h();case 3:return t.abrupt("return",u.methods.Exists(n).call());case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),g=function(){var t=Object(f.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m){t.next=3;break}return t.next=3,h();case 3:return t.abrupt("return",u.methods.CrackOpen(n).call());case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),w=e(15);var k=function(){var t=Object(c.useState)(""),n=Object(s.a)(t,2),e=n[0],i=n[1],u=e,o=Object(c.useState)(!1),a=Object(s.a)(o,2),r=a[0],p=a[1],l=Object(c.useState)(),f=Object(s.a)(l,2),d=f[0],y=f[1],b=Object(c.useState)(!1),m=Object(s.a)(b,2),h=m[0],k=m[1];return Object(w.jsxs)("div",{className:"App border",children:[Object(w.jsx)("p",{children:" Crack_Open"}),Object(w.jsxs)("p",{children:["NFT id #",e,Object(w.jsx)("span",{id:"crack",children:" to Crack"})]}),Object(w.jsx)("button",{onClick:function(){g(u).then((function(t){g(t),console.log(t)})).catch((function(t){console.log(t),console.log("your have Crack errored!")}))},children:"Crack it"}),Object(w.jsx)("p",{}),Object(w.jsxs)("p",{children:[" Units per NFT are ",r]}),Object(w.jsx)("button",{onClick:function(){j().then((function(t){p(t)})).catch((function(t){console.log(t)}))},children:"Refresh"}),Object(w.jsx)("p",{}),Object(w.jsxs)("p",{children:[" NFT Name ",d]}),Object(w.jsx)("button",{onClick:function(){x().then((function(t){y(t)})).catch((function(t){console.log(t)}))},children:"Get name"}),Object(w.jsx)("p",{}),Object(w.jsxs)("p",{children:["id #",e," ",h,Object(w.jsx)("span",{id:"demo",children:" to Check for"})]}),Object(w.jsx)("input",{id:"userInput",placeholder:"enter id #",type:"text",required:!0,value:e,onChange:function(t){return i(t.target.value,document.getElementById("demo").innerHTML=" check..")}}),Object(w.jsx)("button",{onClick:function(){O(u).then((function(t){k(t),console.log(t),!0===t?(console.log("this is True"),document.getElementById("demo").innerHTML=" does exists!"):document.getElementById("demo").innerHTML=" does NOT exists!"})).catch((function(t){console.log(t),console.log("you've errored")}))},children:"Check Exists"})]})},T=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,724)).then((function(n){var e=n.getCLS,i=n.getFID,u=n.getFCP,c=n.getLCP,o=n.getTTFB;e(t),i(t),u(t),c(t),o(t)}))};r.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(k,{})}),document.getElementById("root")),T()}},[[720,1,2]]]);
//# sourceMappingURL=main.1f02e7c0.chunk.js.map