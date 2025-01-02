import{s as e,t as a,u as l,r as t,q as s,H as o,I as r,G as i,Q as m,f as d,p}from"./element-plus.js";import{v as u}from"./sys_config.js";import{f as n,c}from"./category.js";import{_ as h,b as y,t as V,c as g}from"./index.js";import{l as f}from"./model.js";import{p as v}from"./pinyin-pro.js";import{o as j,c as b,a as _,M as w,Q as U,_ as S,O as x,a8 as P,R as k,U as C,$,V as I}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const T={class:"content-wrap"},q={class:"mr-10 ml-10"},z={class:"mr-10 ml-10 mb-20"};const L=h({name:"category-add",data:()=>({categorySelected:[],categorySelectedPath:"",categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],modList:[],views:[],params:{pid:0,seoTitle:"",seoKeywords:"",seoDescription:"",name:"",path:"",pinyin:"",mid:"0",description:"",url:"",orderBy:0,type:"0",target:"0",status:"0",articleView:"article.html",listView:"list.html"}}),created(){this.query(),this.getviews(),this.modelList()},methods:{createPinyin(e){this.params.pinyin=v(e,{toneType:"none"}).replace(/\s+/g,""),this.params.path=this.categorySelectedPath?this.categorySelectedPath+this.params.pinyin:"/"+this.categorySelectedPath+this.params.pinyin},changePath(e){this.params.path=this.categorySelectedPath?this.categorySelectedPath+e:"/"+this.categorySelectedPath+e},handleClick(e){this.activeIndex=e.index},async query(){try{let e=await n();if(200===e.code){let a=y(V(e.data));this.cate=e.data,this.category=[...a]}}catch(e){console.log(e)}},async getviews(){try{let e=await u();200===e.code&&(this.views=e.data.filter((e=>{if("404.html"!==e&&"500.html"!==e)return!0})).map((e=>({label:e,value:e}))))}catch(e){console.log(e)}},handleChange(e){let a=[];Object.values(e).forEach((e=>{this.cate.forEach((l=>{l.id==e&&a.push("/"+l.pinyin)}))})),this.categorySelectedPath=a.join("")+"/",this.params.path=this.categorySelectedPath+this.params.pinyin,-1!=e[0]&&(this.params.pid=e[e.length-1])},async modelList(){try{let e=await f(this.cur);200===e.code&&(this.modList=e.data.list)}catch(e){console.log(e)}},async categoryAdd(){try{let e=await c(this.params);200==e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},checkStrictly(){if("article"==this.params.pinyin)return this.$message({message:"不能使用article作为拼音",type:"success"}),!1;return!!/^[a-zA-Z][a-zA-Z0-9]*$/.test(this.params.pinyin)||(this.$message({message:"拼音只能包含26个字母和数字，且首字母不能是数字",type:"success"}),!1)},submit(e){this.$refs[e].validate(((e,a)=>{if(!e)return g(a),!1;this.checkStrictly()&&this.categoryAdd()}))}}},[["render",function(u,n,c,h,y,V){const g=e,f=a,v=l,L=t,A=s,B=o,D=r,E=i,K=m,N=d,O=p;return j(),b("div",T,[_("div",q,[w(f,{modelValue:u.activeName,"onUpdate:modelValue":n[0]||(n[0]=e=>u.activeName=e),onTabClick:V.handleClick},{default:U((()=>[w(g,{label:"基本信息",name:"first"}),w(g,{label:"SEO设置",name:"second"}),w(g,{label:"扩展信息",name:"third"})])),_:1},8,["modelValue","onTabClick"])]),_("div",z,[w(O,{ref:"params",model:u.params,"label-width":"84px"},{default:U((()=>[S(_("div",null,[w(L,{label:"上级栏目"},{default:U((()=>[w(v,{props:u.categoryProps,"show-all-levels":!1,modelValue:u.categorySelected,"onUpdate:modelValue":n[1]||(n[1]=e=>u.categorySelected=e),options:u.category,onChange:V.handleChange,placeholder:"不选择为顶级栏目"},null,8,["props","modelValue","options","onChange"])])),_:1}),w(L,{label:"栏目名称",prop:"name",rules:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:1,max:50,message:"栏目不能超过50个字",trigger:"blur"}]},{default:U((()=>[w(A,{modelValue:u.params.name,"onUpdate:modelValue":n[2]||(n[2]=e=>u.params.name=e),onChange:V.createPinyin},null,8,["modelValue","onChange"])])),_:1}),w(L,{label:"栏目标识"},{default:U((()=>[w(A,{modelValue:u.params.pinyin,"onUpdate:modelValue":n[3]||(n[3]=e=>u.params.pinyin=e),onChange:V.changePath,placeholder:"注：首页请填写home"},null,8,["modelValue","onChange"])])),_:1}),w(L,{label:"栏目路径"},{default:U((()=>[w(A,{modelValue:u.params.path,"onUpdate:modelValue":n[4]||(n[4]=e=>u.params.path=e),disabled:""},null,8,["modelValue"])])),_:1}),w(L,{label:"列表模板"},{default:U((()=>[w(D,{modelValue:u.params.listView,"onUpdate:modelValue":n[5]||(n[5]=e=>u.params.listView=e),placeholder:"Select"},{default:U((()=>[(j(!0),b(x,null,P(u.views,(e=>(j(),k(B,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),w(L,{label:"内容模板"},{default:U((()=>[w(D,{modelValue:u.params.articleView,"onUpdate:modelValue":n[6]||(n[6]=e=>u.params.articleView=e),placeholder:"Select"},{default:U((()=>[(j(!0),b(x,null,P(u.views,(e=>(j(),k(B,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),w(L,{label:"栏目类型"},{default:U((()=>[w(E,{modelValue:u.params.type,"onUpdate:modelValue":n[7]||(n[7]=e=>u.params.type=e),value:"0"},{default:U((()=>[C("栏目")])),_:1},8,["modelValue"]),w(E,{modelValue:u.params.type,"onUpdate:modelValue":n[8]||(n[8]=e=>u.params.type=e),value:"1"},{default:U((()=>[C("单页")])),_:1},8,["modelValue"])])),_:1}),w(L,{label:"是否显示"},{default:U((()=>[w(E,{modelValue:u.params.status,"onUpdate:modelValue":n[9]||(n[9]=e=>u.params.status=e),value:"0"},{default:U((()=>[C("显示")])),_:1},8,["modelValue"]),w(E,{modelValue:u.params.status,"onUpdate:modelValue":n[10]||(n[10]=e=>u.params.status=e),value:"1"},{default:U((()=>[C("隐藏")])),_:1},8,["modelValue"])])),_:1})],512),[[$,0==u.activeIndex]]),S(_("div",null,[w(L,{label:"seo标题"},{default:U((()=>[w(A,{modelValue:u.params.seoTitle,"onUpdate:modelValue":n[11]||(n[11]=e=>u.params.seoTitle=e)},null,8,["modelValue"])])),_:1}),w(L,{label:"seo关键词"},{default:U((()=>[w(A,{modelValue:u.params.seoKeywords,"onUpdate:modelValue":n[12]||(n[12]=e=>u.params.seoKeywords=e)},null,8,["modelValue"])])),_:1}),w(L,{label:"seo描述"},{default:U((()=>[w(A,{type:"textarea",prop:"textarea",rows:2,modelValue:u.params.seoDescription,"onUpdate:modelValue":n[13]||(n[13]=e=>u.params.seoDescription=e)},null,8,["modelValue"])])),_:1})],512),[[$,1==u.activeIndex]]),S(_("div",null,[w(L,{label:"栏目链接"},{default:U((()=>[w(A,{modelValue:u.params.url,"onUpdate:modelValue":n[14]||(n[14]=e=>u.params.url=e)},null,8,["modelValue"])])),_:1}),w(L,{label:"扩展模型"},{default:U((()=>[w(K,{modelValue:u.params.mid,"onUpdate:modelValue":n[15]||(n[15]=e=>u.params.mid=e)},{default:U((()=>[w(E,{value:"0"},{default:U((()=>[C("基本模型")])),_:1}),(j(!0),b(x,null,P(u.modList,((e,a)=>(j(),k(E,{key:a,value:e.id},{default:U((()=>[C(I(e.model),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"])])),_:1}),w(L,{label:"打开方式"},{default:U((()=>[w(E,{modelValue:u.params.target,"onUpdate:modelValue":n[16]||(n[16]=e=>u.params.target=e),value:"0"},{default:U((()=>[C("当前页面")])),_:1},8,["modelValue"]),w(E,{modelValue:u.params.target,"onUpdate:modelValue":n[17]||(n[17]=e=>u.params.target=e),value:"1"},{default:U((()=>[C("新页面")])),_:1},8,["modelValue"])])),_:1}),w(L,{label:"栏目排序"},{default:U((()=>[w(A,{modelValue:u.params.orderBy,"onUpdate:modelValue":n[18]||(n[18]=e=>u.params.orderBy=e)},null,8,["modelValue"])])),_:1}),w(L,{label:"栏目描述"},{default:U((()=>[w(A,{type:"textarea",prop:"textarea",rows:2,modelValue:u.params.description,"onUpdate:modelValue":n[19]||(n[19]=e=>u.params.description=e)},null,8,["modelValue"])])),_:1})],512),[[$,2==u.activeIndex]]),w(L,null,{default:U((()=>[w(N,{type:"primary",onClick:n[20]||(n[20]=e=>V.submit("params"))},{default:U((()=>[C("保存")])),_:1})])),_:1})])),_:1},8,["model"])])])}]]);export{L as default};