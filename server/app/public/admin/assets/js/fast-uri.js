var e={exports:{}};var t={HEX:{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15}};const{HEX:o}=t;function r(e){if(a(e,".")<3)return{host:e,isIPV4:!1};const t=e.match(/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/u)||[],[o]=t;return o?{host:i(o,"."),isIPV4:!0}:{host:e,isIPV4:!1}}function s(e,t=!1){let r="",s=!0;for(const n of e){if(void 0===o[n])return;"0"!==n&&!0===s&&(s=!1),s||(r+=n)}return t&&0===r.length&&(r="0"),r}function n(e,t={}){if(a(e,":")<2)return{host:e,isIPV6:!1};const o=function(e){let t=0;const o={error:!1,address:"",zone:""},r=[],n=[];let i=!1,a=!1,c=!1;function u(){if(n.length){if(!1===i){const e=s(n);if(void 0===e)return o.error=!0,!1;r.push(e)}n.length=0}return!0}for(let s=0;s<e.length;s++){const h=e[s];if("["!==h&&"]"!==h)if(":"!==h)if("%"===h){if(!u())break;i=!0}else n.push(h);else{if(!0===a&&(c=!0),!u())break;if(t++,r.push(":"),t>7){o.error=!0;break}s-1>=0&&":"===e[s-1]&&(a=!0)}}return n.length&&(i?o.zone=n.join(""):c?r.push(n.join("")):r.push(s(n))),o.address=r.join(""),o}(e);if(o.error)return{host:e,isIPV6:!1};{let e=o.address,t=o.address;return o.zone&&(e+="%"+o.zone,t+="%25"+o.zone),{host:e,escapedHost:t,isIPV6:!0}}}function i(e,t){let o="",r=!0;const s=e.length;for(let n=0;n<s;n++){const i=e[n];"0"===i&&r?(n+1<=s&&e[n+1]===t||n+1===s)&&(o+=i,r=!1):(r=i===t,o+=i)}return o}function a(e,t){let o=0;for(let r=0;r<e.length;r++)e[r]===t&&o++;return o}const c=/^\.\.?\//u,u=/^\/\.(?:\/|$)/u,h=/^\/\.\.(?:\/|$)/u,p=/^\/?(?:.|\n)*?(?=\/|$)/u;var f={recomposeAuthority:function(e,t){const o=[];if(void 0!==e.userinfo&&(o.push(e.userinfo),o.push("@")),void 0!==e.host){let t=unescape(e.host);const s=r(t);if(s.isIPV4)t=s.host;else{const o=n(s.host,{isIPV4:!1});t=!0===o.isIPV6?"[".concat(o.escapedHost,"]"):e.host}o.push(t)}return"number"!=typeof e.port&&"string"!=typeof e.port||(o.push(":"),o.push(String(e.port))),o.length?o.join(""):void 0},normalizeComponentEncoding:function(e,t){const o=!0!==t?escape:unescape;return void 0!==e.scheme&&(e.scheme=o(e.scheme)),void 0!==e.userinfo&&(e.userinfo=o(e.userinfo)),void 0!==e.host&&(e.host=o(e.host)),void 0!==e.path&&(e.path=o(e.path)),void 0!==e.query&&(e.query=o(e.query)),void 0!==e.fragment&&(e.fragment=o(e.fragment)),e},removeDotSegments:function(e){const t=[];for(;e.length;)if(e.match(c))e=e.replace(c,"");else if(e.match(u))e=e.replace(u,"/");else if(e.match(h))e=e.replace(h,"/"),t.pop();else if("."===e||".."===e)e="";else{const o=e.match(p);if(!o)throw new Error("Unexpected dot segment condition");{const r=o[0];e=e.slice(r.length),t.push(r)}}return t.join("")},normalizeIPv4:r,normalizeIPv6:n,stringArrayToHexStripped:s};const d=/^[\da-f]{8}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{4}\b-[\da-f]{12}$/iu,m=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;function l(e){return"boolean"==typeof e.secure?e.secure:"wss"===String(e.scheme).toLowerCase()}function v(e){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e}function g(e){const t="https"===String(e.scheme).toLowerCase();return e.port!==(t?443:80)&&""!==e.port||(e.port=void 0),e.path||(e.path="/"),e}const y={scheme:"http",domainHost:!0,parse:v,serialize:g},z={scheme:"ws",domainHost:!0,parse:function(e){return e.secure=l(e),e.resourceName=(e.path||"/")+(e.query?"?"+e.query:""),e.path=void 0,e.query=void 0,e},serialize:function(e){if(e.port!==(l(e)?443:80)&&""!==e.port||(e.port=void 0),"boolean"==typeof e.secure&&(e.scheme=e.secure?"wss":"ws",e.secure=void 0),e.resourceName){const[t,o]=e.resourceName.split("?");e.path=t&&"/"!==t?t:void 0,e.query=o,e.resourceName=void 0}return e.fragment=void 0,e}},I={http:y,https:{scheme:"https",domainHost:y.domainHost,parse:v,serialize:g},ws:z,wss:{scheme:"wss",domainHost:z.domainHost,parse:z.parse,serialize:z.serialize},urn:{scheme:"urn",parse:function(e,t){if(!e.path)return e.error="URN can not be parsed",e;const o=e.path.match(m);if(o){const r=t.scheme||e.scheme||"urn";e.nid=o[1].toLowerCase(),e.nss=o[2];const s="".concat(r,":").concat(t.nid||e.nid),n=I[s];e.path=void 0,n&&(e=n.parse(e,t))}else e.error=e.error||"URN can not be parsed.";return e},serialize:function(e,t){const o=t.scheme||e.scheme||"urn",r=e.nid.toLowerCase(),s="".concat(o,":").concat(t.nid||r),n=I[s];n&&(e=n.serialize(e,t));const i=e,a=e.nss;return i.path="".concat(r||t.nid,":").concat(a),t.skipEscape=!0,i},skipNormalize:!0},"urn:uuid":{scheme:"urn:uuid",parse:function(e,t){const o=e;return o.uuid=o.nss,o.nss=void 0,t.tolerant||o.uuid&&d.test(o.uuid)||(o.error=o.error||"UUID is not valid."),o},serialize:function(e){const t=e;return t.nss=(e.uuid||"").toLowerCase(),t},skipNormalize:!0}};var q=I;const{normalizeIPv6:b,normalizeIPv4:C,removeDotSegments:w,recomposeAuthority:P,normalizeComponentEncoding:H}=f,E=q;function x(e,t,o,r){const s={};return r||(e=S(j(e,o),o),t=S(j(t,o),o)),!(o=o||{}).tolerant&&t.scheme?(s.scheme=t.scheme,s.userinfo=t.userinfo,s.host=t.host,s.port=t.port,s.path=w(t.path||""),s.query=t.query):(void 0!==t.userinfo||void 0!==t.host||void 0!==t.port?(s.userinfo=t.userinfo,s.host=t.host,s.port=t.port,s.path=w(t.path||""),s.query=t.query):(t.path?("/"===t.path.charAt(0)?s.path=w(t.path):(void 0===e.userinfo&&void 0===e.host&&void 0===e.port||e.path?e.path?s.path=e.path.slice(0,e.path.lastIndexOf("/")+1)+t.path:s.path=t.path:s.path="/"+t.path,s.path=w(s.path)),s.query=t.query):(s.path=e.path,void 0!==t.query?s.query=t.query:s.query=e.query),s.userinfo=e.userinfo,s.host=e.host,s.port=e.port),s.scheme=e.scheme),s.fragment=t.fragment,s}function j(e,t){const o={host:e.host,scheme:e.scheme,userinfo:e.userinfo,port:e.port,path:e.path,query:e.query,nid:e.nid,nss:e.nss,uuid:e.uuid,fragment:e.fragment,reference:e.reference,resourceName:e.resourceName,secure:e.secure,error:""},r=Object.assign({},t),s=[],n=E[(r.scheme||o.scheme||"").toLowerCase()];n&&n.serialize&&n.serialize(o,r),void 0!==o.path&&(r.skipEscape?o.path=unescape(o.path):(o.path=escape(o.path),void 0!==o.scheme&&(o.path=o.path.split("%3A").join(":")))),"suffix"!==r.reference&&o.scheme&&(s.push(o.scheme),s.push(":"));const i=P(o,r);if(void 0!==i&&("suffix"!==r.reference&&s.push("//"),s.push(i),o.path&&"/"!==o.path.charAt(0)&&s.push("/")),void 0!==o.path){let e=o.path;r.absolutePath||n&&n.absolutePath||(e=w(e)),void 0===i&&(e=e.replace(/^\/\//u,"/%2F")),s.push(e)}return void 0!==o.query&&(s.push("?"),s.push(o.query)),void 0!==o.fragment&&(s.push("#"),s.push(o.fragment)),s.join("")}const k=Array.from({length:127},((e,t)=>/[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(t))));const N=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function S(e,t){const o=Object.assign({},t),r={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0},s=-1!==e.indexOf("%");let n=!1;"suffix"===o.reference&&(e=(o.scheme?o.scheme+":":"")+"//"+e);const i=e.match(N);if(i){if(r.scheme=i[1],r.userinfo=i[3],r.host=i[4],r.port=parseInt(i[5],10),r.path=i[6]||"",r.query=i[7],r.fragment=i[8],isNaN(r.port)&&(r.port=i[5]),r.host){const e=C(r.host);if(!1===e.isIPV4){const t=b(e.host,{isIPV4:!1});r.host=t.host.toLowerCase(),n=t.isIPV6}else r.host=e.host,n=!0}void 0!==r.scheme||void 0!==r.userinfo||void 0!==r.host||void 0!==r.port||r.path||void 0!==r.query?void 0===r.scheme?r.reference="relative":void 0===r.fragment?r.reference="absolute":r.reference="uri":r.reference="same-document",o.reference&&"suffix"!==o.reference&&o.reference!==r.reference&&(r.error=r.error||"URI is not a "+o.reference+" reference.");const e=E[(o.scheme||r.scheme||"").toLowerCase()];if(!(o.unicodeSupport||e&&e.unicodeSupport)&&r.host&&(o.domainHost||e&&e.domainHost)&&!1===n&&function(e){let t=0;for(let o=0,r=e.length;o<r;++o)if(t=e.charCodeAt(o),t>126||k[t])return!0;return!1}(r.host))try{r.host=URL.domainToASCII(r.host.toLowerCase())}catch(a){r.error=r.error||"Host's domain name can not be converted to ASCII: "+a}(!e||e&&!e.skipNormalize)&&(s&&void 0!==r.scheme&&(r.scheme=unescape(r.scheme)),s&&void 0!==r.userinfo&&(r.userinfo=unescape(r.userinfo)),s&&void 0!==r.host&&(r.host=unescape(r.host)),void 0!==r.path&&r.path.length&&(r.path=escape(unescape(r.path))),void 0!==r.fragment&&r.fragment.length&&(r.fragment=encodeURI(decodeURIComponent(r.fragment)))),e&&e.parse&&e.parse(r,o)}else r.error=r.error||"URI can not be parsed.";return r}const L={SCHEMES:E,normalize:function(e,t){return"string"==typeof e?e=j(S(e,t),t):"object"==typeof e&&(e=S(j(e,t),t)),e},resolve:function(e,t,o){const r=Object.assign({scheme:"null"},o);return j(x(S(e,r),S(t,r),r,!0),{...r,skipEscape:!0})},resolveComponents:x,equal:function(e,t,o){return"string"==typeof e?(e=unescape(e),e=j(H(S(e,o),!0),{...o,skipEscape:!0})):"object"==typeof e&&(e=j(H(e,!0),{...o,skipEscape:!0})),"string"==typeof t?(t=unescape(t),t=j(H(S(t,o),!0),{...o,skipEscape:!0})):"object"==typeof t&&(t=j(H(t,!0),{...o,skipEscape:!0})),e.toLowerCase()===t.toLowerCase()},serialize:j,parse:S};e.exports=L,e.exports.default=L,e.exports.fastUri=L;var U=e.exports;export{U as f};
