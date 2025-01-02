import{q as e,r as t,f as a,p as s,M as o,O as r,N as l,P as i,F as n}from"./element-plus.js";import{G as c,E as p,v as m,H as d}from"./@element-plus.js";import{s as u,a as h}from"./frag.js";import{_ as f}from"./index.js";import{ad as j,o as g,c as y,a as b,M as w,Q as C,U as k,V as _}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const S={class:"pd-20 bg-fff"},x={class:"search flex justify-between align-c pt-10 pl-20 pr-20 pb-20 mb-20"},v={class:"inline-b ml-5"};const D=f({name:"frag-index",setup:()=>({Edit:c,Delete:p,View:m,Search:d}),data:()=>({params:{keywords:""},tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.search()},methods:{clearSearch(e){e&&this.$refs.form.resetFields(),this.search()},async search(){try{let e=await u(this.cur,this.params.keywords);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.search()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let t=e.id;this.$router.push({name:"frag-edit",params:{id:t}})},async handleDel(e){let t=e.id;try{let e=await h(t);200===e.code?(this.$message({message:"文章删除成功 ^_^",type:"success"}),this.search()):this.$message({message:e.msg,type:"success"})}catch(a){console.log(a)}}}},[["render",function(c,p,m,d,u,h){const f=e,D=t,E=a,$=s,V=j("router-link"),z=o,A=r,F=l,T=i,q=n;return g(),y("div",S,[b("div",x,[w($,{inline:!0,model:c.params,ref:"form"},{default:C((()=>[w(D,{class:"mt-10",label:"标题",prop:"keywords"},{default:C((()=>[w(f,{class:"mr-10 w-auto",placeholder:"请输入内容","suffix-icon":d.Search,clearable:"",onClear:h.search,modelValue:c.params.keywords,"onUpdate:modelValue":p[0]||(p[0]=e=>c.params.keywords=e)},null,8,["suffix-icon","onClear","modelValue"])])),_:1}),w(D,{class:"mt-10"},{default:C((()=>[w(E,{type:"primary",onClick:h.search,round:""},{default:C((()=>[k("搜索")])),_:1},8,["onClick"]),w(E,{onClick:p[1]||(p[1]=e=>h.clearSearch("form")),round:""},{default:C((()=>[k("清空")])),_:1})])),_:1})])),_:1},8,["model"]),w(V,{class:"mt-10",to:"/frag/add"},{default:C((()=>[w(E,{type:"primary",round:""},{default:C((()=>[k("新增")])),_:1})])),_:1})]),w(F,{ref:"multipleTable",data:c.tableData,"tooltip-effect":"dark","row-key":"id",onSelectionChange:h.handleSelectionChange},{default:C((()=>[w(z,{type:"selection"}),w(z,{prop:"id",width:"60",label:"编号"}),w(z,{prop:"name",label:"名称"}),w(z,{prop:"mark",label:"标识"}),w(z,{prop:"createdAt",label:"发布时间"},{default:C((e=>[k(_(e.row.createdAt),1)])),_:1}),w(z,{fixed:"right",width:"120",label:"操作"},{default:C((e=>[w(E,{icon:d.Edit,circle:"",onClick:t=>h.toEdit(e.row)},null,8,["icon","onClick"]),b("div",v,[w(A,{width:"220",onConfirm:t=>h.handleDel(e.row),"confirm-button-text":"确定","cancel-button-text":"取消","icon-color":"#626AEF",title:"确定删除吗？如果在使用，删掉会模板会报错"},{reference:C((()=>[w(E,{icon:d.Delete,circle:""},null,8,["icon"])])),_:2},1032,["onConfirm"])])])),_:1})])),_:1},8,["data","onSelectionChange"]),w(q,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:C((()=>[w(T,{background:"",layout:"prev, pager, next",onCurrentChange:h.handleCurrentChange,"page-size":20,total:c.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])}],["__scopeId","data-v-4f6c2045"]]);export{D as default};