System.register(["./element-plus-legacy.js","./DialogCroper-legacy.js","./category-legacy.js","./article-legacy.js","./tag-legacy.js","./sys_config-legacy.js","./tinymce-legacy.js","./index-legacy.js","./upload-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./vue-cropper-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./immutable-json-patch-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,t,s,d,i,o,u,r,n,c,m,p,g,f,h,y,v,b,V,_,w,j,x,U,C,k,I,P,A,D,S,$,N,q,T,F,z,O,R,E,L,J,B,M,G,H,K,Q,W,Z,X,Y,ee,le,ae,te;return{setters:[e=>{a=e.s,t=e.t,s=e.u,d=e.r,i=e.v,o=e.q,u=e.w,r=e.x,n=e.y,c=e.A,m=e.a,p=e.B,g=e.C,f=e.D,h=e.f,y=e.n,v=e.F,b=e.G,V=e.H,_=e.I,w=e.J,j=e.p,x=e.K},e=>{U=e._},e=>{C=e.f},e=>{k=e.f,I=e.a,P=e.d,A=e.u},e=>{D=e.s},e=>{S=e.v},e=>{$=e._,N=e.t},e=>{q=e._,T=e.d,F=e.b,z=e.t,O=e.h,R=e.g,E=e.f,L=e.c},e=>{J=e.u,B=e.a},e=>{M=e.ad,G=e.o,H=e.c,K=e.a,Q=e.M,W=e.Q,Z=e.R,X=e.W,Y=e._,ee=e.U,le=e.O,ae=e.a8,te=e.$},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent="[data-v-1b3facc7] .tiny-textarea{height:436px}.cover div[data-v-1b3facc7]{width:120px;height:90px;margin:5px;cursor:pointer}.w-300[data-v-1b3facc7]{width:300px!important}[data-v-1b3facc7] .el-drawer{width:280px!important}[data-v-1b3facc7] .el-drawer__body{padding:0}.imgs-btn[data-v-1b3facc7]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);color:#fff;font-size:20px;cursor:pointer;justify-content:center;align-items:center;gap:30px;display:none;transition:all .3s}.img-item[data-v-1b3facc7]{position:relative;margin-right:10px;cursor:pointer;overflow:hidden;border-radius:5px;border:1px solid #f2f2f2}.img-item:hover .imgs-btn[data-v-1b3facc7]{display:flex}.upload-icon[data-v-1b3facc7]{border:1px dashed #dcdfe6;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;transition:.2s;font-size:28px;color:#8c939d;width:100px;height:100px;text-align:center}\n",document.head.appendChild(l);const se={class:"content-wrap"},de={class:"mr-10 ml-10"},ie={class:"mr-10 ml-10 mb-20"},oe={class:"cover row"},ue={class:"cover flex align-center"},re={class:"pos-r img-item"},ne={class:"imgs-btn"};e("default",q({name:"article-edit",components:{Vue3Tinymce:$,DialogCroper:U},data:()=>({setting:N,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],views:[],autoImg:!1,autoDes:!1,picNum:1,taglist:[],file:null,img:"",params:{id:0,cid:0,subCid:[],title:"",shortTitle:"",tagId:"",attr:[],articleView:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"",status:"0",pv:1,link:""},field:[],fieldParams:{},dialogImageUrl:"",dialogVisible:!1,disabled:!1,paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]},cur:1,keywords:"",drawer:!1,drawerList:["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]}),computed:{},async mounted(){this.setting.images_upload_url=await J()},async created(){this.params.id=this.$route.params.id,await this.detail(),await this.query(),this.searchTag(),this.getviews()},unmounted(){},methods:{async getviews(){try{let e=await S();200===e.code&&(this.views=e.data.filter((e=>{if("404.html"!==e&&"500.html"!==e)return!0})).map((e=>({label:e,value:e}))))}catch(e){console.log(e)}},tinymce(){this.loading=!1},handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},selectCover(e){this.params.img=e},async searchTag(e){try{let l=await D(this.cur,e,100);if(200===l.code){let e=[];l.data.list.forEach((l=>{e.push({label:l.name,value:l.id})})),this.taglist=e}}catch(l){console.log(l)}},async query(){try{let e=await C();if(200===e.code){let l=e.data,a=T(this.params.cid,l);this.categorySelected=a,this.findField(this.params.cid);let t=F(z(l));this.cateList=F(l),this.category=[...t]}}catch(e){console.log(e)}},handleChange(e){-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},async findField(e){try{let l=await k(e);200===l.code&&(l.data.fields.forEach((e=>{if(e.default&&e.default.includes("[{")&&e.default.includes("options")){e.default;let l=JSON.parse(e.default);e.default=l.options||[]}"8"==e.type&&(e.values=[])})),this.field=l.data.fields,this.field.forEach(((e,l)=>{this.fieldParams[e.ename].includes("[{")?e.values=JSON.parse(this.fieldParams[e.ename]):e.values=this.fieldParams[e.ename]})))}catch(l){console.log(l)}},async detail(){try{let e=await I(this.params.id);if(200===e.code){let l=e.data;l.content=O(l.content),l.attr=l.attr?l.attr.split(","):[],l.subCid=l.subCid?l.subCid.split(",").map((e=>Number(e))):[],l.oldTagId=l.tagId,l.tagId=l.tagId?l.tagId.split(",").map((e=>Number(e))):[],l.status=l.status.toString(),l.updatedAt=new Date(l.createdAt),this.params=l,this.fieldParams=l.field,this.loading=!1}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){if(-1===e.type.indexOf("image"))return this.$message("上传文件只能是图片格式"),!1;this.file=e;const l=new FileReader;return l.onload=async e=>{let l;l="object"==typeof e.target.result?window.URL.createObjectURL(new Blob([e.target.result])):e.target.result,this.img=l,this.$refs.dialogCrop.dialogFormVisible=!0},l.readAsArrayBuffer(e),!1},async upload(e=this.file){if(e.size/1024/1024>.2)return this.$message("上传图片必须小于200k"),!1;let l=new FormData;l.append("file",e||this.file);let a=await B(l);200===a.code&&(this.params.img=a.data.path)},beforeUploadPics(e){return-1===e.type.indexOf("image")?(this.$message("上传文件只能是图片格式"),!1):e.size/1024/1024>.2?(this.$message("上传图片必须小于200k"),!1):void 0},async uploadPics(e){const{data:{index:l},file:a}=e;let t=new FormData;t.append("file",a);let s=await B(t);if(200===s.code){const{filename:e,path:a}=s.data;Array.isArray(this.field[l].values)?this.field[l].values.push({name:e,url:a}):this.field[l].values=[{name:e,url:a}]}},async toPreview(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},async handleRemove(e){this.field.forEach(((l,a)=>{Array.isArray(l.values)&&l.values.forEach(((a,t)=>{a.url==e.url&&(this.delfile(e.url),l.values.splice(t,1))}))}))},async delfile(e){try{await P(e)}catch(l){console.log(l)}},async update(){try{let e={...this.params};e.attr=e.attr.toString(),e.subCid=e.subCid.toString(),e.tagId=e.tagId.toString(),!e.img&&this.autoImg&&(e.img=R(e.content)[0]),!e.description&&this.autoDes&&(e.description=E(e.content).substr(0,255)),this.field.map(((e,l)=>{this.fieldParams[e.ename]="object"==typeof e.values?JSON.stringify(e.values):e.values}));let l=await A({...e,field:this.fieldParams});200==l.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:l.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate(((e,l)=>{if(!e)return L(l),!1;0!=this.params.cid?this.update():this.$message({message:"请选择栏目",type:"success"})}))}}},[["render",function(e,l,C,k,I,P){const A=a,D=t,S=s,$=d,N=i,q=o,T=u,F=r,z=n,O=c,R=M("MostlyCloudy"),E=m,L=p,J=g,B=f,ce=h,me=y,pe=v,ge=M("vue3-tinymce"),fe=b,he=V,ye=_,ve=M("ZoomIn"),be=M("Delete"),Ve=w,_e=M("Plus"),we=j,je=U,xe=x;return G(),H(le,null,[K("div",se,[K("div",de,[Q(D,{modelValue:e.activeName,"onUpdate:modelValue":l[0]||(l[0]=l=>e.activeName=l),onTabClick:P.handleClick},{default:W((()=>[Q(A,{label:"基本信息",name:"first"}),Q(A,{label:"扩展信息",name:"second"}),e.field.length>0?(G(),Z(A,{key:0,label:"模型信息",name:"three"})):X("",!0)])),_:1},8,["modelValue","onTabClick"])]),K("div",ie,[Y((G(),Z(we,{ref:"params",model:e.params,"label-width":"90px"},{default:W((()=>[Y(K("div",null,[Q(pe,{gutter:20},{default:W((()=>[Q(N,{sm:24,md:12},{default:W((()=>[Q($,{label:"文章栏目"},{default:W((()=>[Q(S,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":l[1]||(l[1]=l=>e.categorySelected=l),options:e.category,onChange:P.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1})])),_:1}),Q(N,{sm:24,md:12},{default:W((()=>[Q($,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:100,message:"标题不能超过100个字",trigger:"blur"}]},{default:W((()=>[Q(q,{modelValue:e.params.title,"onUpdate:modelValue":l[2]||(l[2]=l=>e.params.title=l)},null,8,["modelValue"])])),_:1})])),_:1}),Q(N,{sm:24,md:12},{default:W((()=>[Q($,{label:"tag标签"},{default:W((()=>[Q(T,{modelValue:e.params.tagId,"onUpdate:modelValue":l[3]||(l[3]=l=>e.params.tagId=l),options:e.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":P.searchTag},null,8,["modelValue","options","remote-method"])])),_:1})])),_:1}),Q(N,{sm:24,md:12},{default:W((()=>[Q($,{label:"内容属性"},{default:W((()=>[Q(z,{modelValue:e.params.attr,"onUpdate:modelValue":l[4]||(l[4]=l=>e.params.attr=l),onChange:P.handleAttr},{default:W((()=>[Q(F,{label:"1",value:"1"},{default:W((()=>[ee("头条")])),_:1}),Q(F,{label:"2",value:"2"},{default:W((()=>[ee("推荐")])),_:1}),Q(F,{label:"3",value:"3"},{default:W((()=>[ee("轮播")])),_:1}),Q(F,{label:"4",value:"4"},{default:W((()=>[ee("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),Q(N,{sm:24,md:12},{default:W((()=>[Q($,{label:"发布时间"},{default:W((()=>[Q(O,{modelValue:e.params.createdAt,"onUpdate:modelValue":l[5]||(l[5]=l=>e.params.createdAt=l),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1})])),_:1}),Q(N,{sm:24,md:12},{default:W((()=>[Q($,{class:"flex",label:"缩略图"},{default:W((()=>[Q(J,{class:"avatar-uploader","http-request":P.upload,"show-file-list":!1,"before-upload":P.beforeUpload},{default:W((()=>[Q(L,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:W((()=>[Q(E,{class:"avatar-uploader-icon"},{default:W((()=>[Q(R)])),_:1})])),_:1})])),_:1},8,["http-request","before-upload"]),e.params.img?(G(),Z(L,{key:0,placement:"right",width:400,trigger:"hover"},{reference:W((()=>[Q(B,{class:"avatar-uploader-icon pointer ml-10",src:e.params.img},null,8,["src"])])),default:W((()=>[Q(B,{style:{width:"100%"},src:e.params.img},null,8,["src"])])),_:1})):X("",!0),Q(ce,{type:"primary",class:"ml-10",onClick:l[6]||(l[6]=l=>e.drawer=!0)},{default:W((()=>[ee(" 默认封面图 ")])),_:1}),Q(me,{modelValue:e.drawer,"onUpdate:modelValue":l[7]||(l[7]=l=>e.drawer=l),title:"默认封面图",class:"w-300","with-header":!1},{default:W((()=>[K("div",oe,[(G(!0),H(le,null,ae(e.drawerList,((e,l)=>(G(),Z(B,{key:l,src:e,onClick:l=>P.selectCover(e),fit:"cover"},null,8,["src","onClick"])))),128))])])),_:1},8,["modelValue"]),Q(q,{class:"ml-10 flex-1",modelValue:e.params.img,"onUpdate:modelValue":l[8]||(l[8]=l=>e.params.img=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),Q($,{label:"内容摘要"},{default:W((()=>[Q(q,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:e.params.description,"onUpdate:modelValue":l[9]||(l[9]=l=>e.params.description=l)},null,8,["modelValue"])])),_:1}),Q($,{label:"文章内容"},{default:W((()=>[Q(ge,{modelValue:e.params.content,"onUpdate:modelValue":l[10]||(l[10]=l=>e.params.content=l),setting:e.setting,onInit:P.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),Q(pe,{gutter:20},{default:W((()=>[Q(N,{sm:24,md:12,lg:8},{default:W((()=>[Q($,{label:"自动封面"},{default:W((()=>[Q(F,{modelValue:e.autoImg,"onUpdate:modelValue":l[12]||(l[12]=l=>e.autoImg=l)},{default:W((()=>[ee(" 文章第 "),Q(q,{modelValue:e.picNum,"onUpdate:modelValue":l[11]||(l[11]=l=>e.picNum=l),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),ee("张图 ")])),_:1},8,["modelValue"])])),_:1})])),_:1}),Q(N,{sm:24,md:12,lg:8},{default:W((()=>[Q($,{label:"提取描述"},{default:W((()=>[Q(F,{modelValue:e.autoDes,"onUpdate:modelValue":l[13]||(l[13]=l=>e.autoDes=l)},{default:W((()=>[ee("提取文章描述")])),_:1},8,["modelValue"])])),_:1})])),_:1}),Q(N,{sm:24,md:12,lg:8},{default:W((()=>[Q($,{label:"是否显示"},{default:W((()=>[Q(fe,{modelValue:e.params.status,"onUpdate:modelValue":l[14]||(l[14]=l=>e.params.status=l),value:"0"},{default:W((()=>[ee("发布")])),_:1},8,["modelValue"]),Q(fe,{modelValue:e.params.status,"onUpdate:modelValue":l[15]||(l[15]=l=>e.params.status=l),value:"1"},{default:W((()=>[ee("不发布")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[te,0==e.activeIndex]]),Y(K("div",null,[Q(pe,{gutter:20},{default:W((()=>[Q(N,{sm:24,md:12},{default:W((()=>[Q($,{label:"短标题",prop:"name"},{default:W((()=>[Q(q,{modelValue:e.params.shortTitle,"onUpdate:modelValue":l[16]||(l[16]=l=>e.params.shortTitle=l)},null,8,["modelValue"])])),_:1})])),_:1}),Q(N,{sm:24,md:12},{default:W((()=>[Q($,{label:"内容模板"},{default:W((()=>[Q(ye,{modelValue:e.params.articleView,"onUpdate:modelValue":l[17]||(l[17]=l=>e.params.articleView=l),placeholder:"请选择模板"},{default:W((()=>[(G(!0),H(le,null,ae(e.views,(e=>(G(),Z(he,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),Q(N,{sm:24,md:12},{default:W((()=>[Q($,{label:"来源"},{default:W((()=>[Q(q,{modelValue:e.params.source,"onUpdate:modelValue":l[18]||(l[18]=l=>e.params.source=l)},null,8,["modelValue"])])),_:1})])),_:1}),Q(N,{sm:24,md:12},{default:W((()=>[Q($,{label:"作者"},{default:W((()=>[Q(q,{modelValue:e.params.author,"onUpdate:modelValue":l[19]||(l[19]=l=>e.params.author=l)},null,8,["modelValue"])])),_:1})])),_:1}),Q(N,{sm:24,md:12},{default:W((()=>[Q($,{label:"外链跳转"},{default:W((()=>[Q(q,{modelValue:e.params.link,"onUpdate:modelValue":l[20]||(l[20]=l=>e.params.link=l),max:"120"},null,8,["modelValue"])])),_:1})])),_:1}),Q(N,{sm:24,md:12},{default:W((()=>[Q($,{label:"浏览数"},{default:W((()=>[Q(q,{modelValue:e.params.pv,"onUpdate:modelValue":l[21]||(l[21]=l=>e.params.pv=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[te,1==e.activeIndex]]),Y(K("div",null,[Q(pe,{gutter:20},{default:W((()=>[(G(!0),H(le,null,ae(e.field,((a,t)=>(G(),Z(N,{key:t,sm:24,md:24,lg:24},{default:W((()=>[["1","7"].includes(a.type)?(G(),Z($,{key:0,label:a.cname},{default:W((()=>[Q(q,{modelValue:a.values,"onUpdate:modelValue":e=>a.values=e,max:"120"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])):["2","9"].includes(a.type)?(G(),Z($,{key:1,label:a.cname},{default:W((()=>[Q(q,{type:"textarea",rows:4,placeholder:"请输入内容",modelValue:a.values,"onUpdate:modelValue":e=>a.values=e},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])):["3","4","5"].includes(a.type)?(G(),Z($,{key:2,label:a.cname},{default:W((()=>[Q(ye,{modelValue:a.values,"onUpdate:modelValue":e=>a.values=e,placeholder:"请选择"},{default:W((()=>[(G(!0),H(le,null,ae(a.default,(e=>(G(),Z(he,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])):"6"===a.type?(G(),Z($,{key:3,label:a.cname},{default:W((()=>[Q(O,{modelValue:a.values,"onUpdate:modelValue":e=>a.values=e,"default-value":new Date,type:"datetime",placeholder:"请选择"},null,8,["modelValue","onUpdate:modelValue","default-value"])])),_:2},1032,["label"])):"8"===a.type?(G(),Z($,{key:4,label:a.cname,class:"flex align-c justify-center"},{default:W((()=>[K("div",ue,[(G(!0),H(le,null,ae(a.values,((e,l)=>(G(),H("div",re,[(G(),Z(B,{key:l,src:e.url,fit:"cover"},null,8,["src"])),K("div",ne,[Q(E,{onClick:l=>P.toPreview(e)},{default:W((()=>[Q(ve)])),_:2},1032,["onClick"]),Q(E,{onClick:l=>P.handleRemove(e)},{default:W((()=>[Q(be)])),_:2},1032,["onClick"])])])))),256))]),Q(Ve,{modelValue:e.dialogVisible,"onUpdate:modelValue":l[22]||(l[22]=l=>e.dialogVisible=l)},{default:W((()=>[Q(B,{"w-full":"",src:e.dialogImageUrl,alt:"Preview Image"},null,8,["src"])])),_:1},8,["modelValue"]),Q(J,{multiple:"","http-request":P.beforeUploadPics,data:{...a,index:t},"before-upload":P.beforeUpload,limit:10,"show-file-list":!1},{default:W((()=>[Q(E,{class:"upload-icon"},{default:W((()=>[Q(_e)])),_:1})])),_:2},1032,["http-request","data","before-upload"])])),_:2},1032,["label"])):X("",!0)])),_:2},1024)))),128))])),_:1})],512),[[te,2==e.activeIndex&e.field.length>0]]),Q($,null,{default:W((()=>[Q(ce,{type:"primary",onClick:l[23]||(l[23]=e=>P.submit("params"))},{default:W((()=>[ee("保存")])),_:1})])),_:1})])),_:1},8,["model"])),[[xe,e.loading]])])]),Q(je,{ref:"dialogCrop",img:e.img,file:e.file,onCrop:P.upload},null,8,["img","file","onCrop"])],64)}],["__scopeId","data-v-1b3facc7"]]))}}}));