import{e as a,A as t}from"./index.js";let c=(c,e="",o=10)=>a({url:"".concat(t.BASE_API,"/api/tag/search?cur=").concat(c,"&pageSize=").concat(o,"&keyword=").concat(e),method:"get"}),e=c=>a({url:"".concat(t.BASE_API,"/api/tag/has?path=").concat(c),method:"get"}),o=c=>a({url:"".concat(t.BASE_API,"/api/tag/create"),method:"post",data:c}),d=c=>a({url:"".concat(t.BASE_API,"/api/tag/delete?id=").concat(c),method:"get"}),s=c=>a({url:"".concat(t.BASE_API,"/api/tag/update"),method:"post",data:c}),n=c=>a({url:"".concat(t.BASE_API,"/api/tag/detail?id=").concat(c),method:"get"});export{d as a,o as c,n as d,e as h,c as s,s as u};