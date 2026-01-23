import{Bb as f,Cb as Y,Jb as x,La as g,W as H,Ya as O,a as _,aa as y,b as v,bb as E,cb as q,db as W,fa as C,fb as z,hb as S,mb as d,na as K,nb as l,oa as M,ob as u,pa as N,sb as Q,ub as w,uc as T,vb as b,xb as J,yb as X,zb as Z}from"./chunk-5NTUSMKZ.js";var le="https://stackblitz.com",ee=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],me=["project","search","ports","settings"],pe=["light","dark"],ge=["editor","preview"],te={clickToLoad:e=>h("ctl",e),devToolsHeight:e=>ne("devtoolsheight",e),forceEmbedLayout:e=>h("embed",e),hideDevTools:e=>h("hidedevtools",e),hideExplorer:e=>h("hideExplorer",e),hideNavigation:e=>h("hideNavigation",e),openFile:e=>P("file",e),showSidebar:e=>ue("showSidebar",e),sidebarView:e=>D("sidebarView",e,me),startScript:e=>P("startScript",e),terminalHeight:e=>ne("terminalHeight",e),theme:e=>D("theme",e,pe),view:e=>D("view",e,ge),zenMode:e=>h("zenMode",e),organization:e=>`${P("orgName",e?.name)}&${P("orgProvider",e?.provider)}`,crossOriginIsolated:e=>h("corp",e)};function ie(e={}){let i=Object.entries(e).map(([t,n])=>n!=null&&te.hasOwnProperty(t)?te[t](n):"").filter(Boolean);return i.length?`?${i.join("&")}`:""}function h(e,i){return i===!0?`${e}=1`:""}function ue(e,i){return typeof i=="boolean"?`${e}=${i?"1":"0"}`:""}function ne(e,i){if(typeof i=="number"&&!Number.isNaN(i)){let t=Math.min(100,Math.max(0,i));return`${e}=${encodeURIComponent(Math.round(t))}`}return""}function D(e,i="",t=[]){return t.includes(i)?`${e}=${encodeURIComponent(i)}`:""}function P(e,i){return(Array.isArray(i)?i:[i]).filter(n=>typeof n=="string"&&n.trim()!=="").map(n=>`${e}=${encodeURIComponent(n)}`).join("&")}function oe(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function L(e,i){return`${re(i)}${e}${ie(i)}`}function U(e,i){let t={forceEmbedLayout:!0};return i&&typeof i=="object"&&Object.assign(t,i),`${re(t)}${e}${ie(t)}`}function re(e={}){return(typeof e.origin=="string"?e.origin:le).replace(/\/$/,"")}function B(e,i,t){if(!i||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(i.id=e.id),e.className&&(i.className=e.className),fe(i,t),he(e,i,t),e.replaceWith(i)}function R(e){if(typeof e=="string"){let i=document.getElementById(e);if(!i)throw new Error(`Could not find element with id '${e}'`);return i}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function G(e){return e&&e.newWindow===!1?"_self":"_blank"}function fe(e,i={}){let t=Object.hasOwnProperty.call(i,"height")?`${i.height}`:"300",n=Object.hasOwnProperty.call(i,"width")?`${i.width}`:void 0;e.setAttribute("height",t),n?e.setAttribute("width",n):e.setAttribute("style","width:100%;")}function he(e,i,t={}){let n=e.allow?.split(";")?.map(o=>o.trim())??[];t.crossOriginIsolated&&!n.includes("cross-origin-isolated")&&n.push("cross-origin-isolated"),n.length>0&&(i.allow=n.join("; "))}var F=class{constructor(i){this.pending={},this.port=i,this.port.onmessage=this.messageListener.bind(this)}request({type:i,payload:t}){return new Promise((n,o)=>{let r=oe();this.pending[r]={resolve:n,reject:o},this.port.postMessage({type:i,payload:v(_({},t),{__reqid:r})})})}messageListener(i){if(typeof i.data.payload?.__reqid!="string")return;let{type:t,payload:n}=i.data,{__reqid:o,__success:r,__error:a}=n;this.pending[o]&&(r?this.pending[o].resolve(this.cleanResult(n)):this.pending[o].reject(a?`${t}: ${a}`:t),delete this.pending[o])}cleanResult(i){let t=_({},i);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}},A=class{constructor(i,t){this.editor={openFile:n=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:n}}),setCurrentFile:n=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:n}}),setTheme:n=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:n}}),setView:n=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:n}}),showSidebar:(n=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:n}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(n=>n?.url??null),setUrl:(n="/")=>{if(typeof n!="string"||!n.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${n}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:n}})}},this._rdc=new F(i),Object.defineProperty(this.preview,"origin",{value:typeof t.previewOrigin=="string"?t.previewOrigin:null,writable:!1})}applyFsDiff(i){let t=n=>n!==null&&typeof n=="object";if(!t(i)||!t(i.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(i.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:i})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}},j=[],V=class{constructor(i){this.id=oe(),this.element=i,this.pending=new Promise((t,n)=>{let o=({data:m,ports:p})=>{m?.action==="SDK_INIT_SUCCESS"&&m.id===this.id&&(this.vm=new A(p[0],m.payload),t(this.vm),a())},r=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function a(){window.clearInterval(c),window.removeEventListener("message",o)}window.addEventListener("message",o),r();let s=0,c=window.setInterval(()=>{if(this.vm){a();return}if(s>=20){a(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),j.forEach((m,p)=>{m.id===this.id&&j.splice(p,1)});return}s++,r()},500)}),j.push(this)}},be=e=>{let i=e instanceof Element?"element":"id";return j.find(t=>t[i]===e)??null};function _e(e,i){let t=document.createElement("input");return t.type="hidden",t.name=e,t.value=i,t}function we(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function se({template:e,title:i,description:t,dependencies:n,files:o,settings:r}){if(!ee.includes(e)){let m=ee.map(p=>`'${p}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${m}`)}let a=[],s=(m,p,de="")=>{a.push(_e(m,typeof p=="string"?p:de))};s("project[title]",i),typeof t=="string"&&t.length>0&&s("project[description]",t),s("project[template]",e,"javascript"),n&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):s("project[dependencies]",JSON.stringify(n))),r&&s("project[settings]",JSON.stringify(r)),Object.entries(o).forEach(([m,p])=>{s(`project[files][${we(m)}]`,p)});let c=document.createElement("form");return c.method="POST",c.setAttribute("style","display:none!important;"),c.append(...a),c}function ve(e,i){let t=se(e);return t.action=U("/run",i),t.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${t.outerHTML}
  <script>document.getElementById('${t.id}').submit();<\/script>
</body>
</html>`}function ye(e,i){let t=se(e);t.action=L("/run",i),t.target=G(i),document.body.appendChild(t),t.submit(),document.body.removeChild(t)}function k(e){return e?.contentWindow?(be(e)??new V(e)).pending:Promise.reject("Provided element is not an iframe.")}function Ce(e,i){ye(e,i)}function Ee(e,i){let t=L(`/edit/${e}`,i),n=G(i);window.open(t,n)}function Se(e,i){let t=L(`/github/${e}`,i),n=G(i);window.open(t,n)}function xe(e,i,t){let n=R(e),o=ve(i,t),r=document.createElement("iframe");return B(n,r,t),r.contentDocument?.write(o),k(r)}function Te(e,i,t){let n=R(e),o=document.createElement("iframe");return o.src=U(`/edit/${i}`,t),B(n,o,t),k(o)}function Pe(e,i,t){let n=R(e),o=document.createElement("iframe");return o.src=U(`/github/${i}`,t),B(n,o,t),k(o)}var $={connect:k,embedGithubProject:Pe,embedProject:xe,embedProjectId:Te,openGithubProject:Se,openProject:Ce,openProjectId:Ee};var I=(()=>{class e{getProjectConfig(t,n,o="TanGrid Demo",r="TanGrid library demo",a){let s=this.toKebabCase(t),c=a||(s.startsWith("app-")?s:`app-${s}`);return c.startsWith("app-")||(c=`app-${c}`),{title:o,description:r,template:"angular-cli",files:v(_({"src/index.html":`
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>TanGrid Demo</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
  <app-root></app-root>
</body>
</html>`,"src/main.ts":`
import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ${t} } from './app/${s}.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [${t}],
  template: \`
    <div style="padding: 20px;">
      <h1>${o}</h1>
      <${c}></${c}>
    </div>
  \`
})
export class App {}

bootstrapApplication(App);
`,[`src/app/${s}.component.ts`]:n.ts,[`src/app/${s}.component.html`]:n.html},n.css?{[`src/app/${s}.component.css`]:n.css}:{}),{"src/styles.css":`
/* Global Styles */
html, body { height: 100%; }
body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }

/* TanGrid Design Tokens */
:root {
  --ngs-primary: #007bff;
  --ngs-primary-hover: #0056b3;
  --ngs-primary-active: #004085;
  --ngs-primary-light: #cfe2ff;
  --ngs-primary-dark: #004085;
  
  --ngs-secondary: #6c757d;
  --ngs-secondary-hover: #5a6268;
  --ngs-secondary-active: #484f54;
  --ngs-secondary-light: #e2e3e5;
  --ngs-secondary-dark: #383d41;

  --ngs-success: #28a745;
  --ngs-danger: #dc3545;
  --ngs-warning: #ffc107;
  --ngs-info: #17a2b8;

  --ngs-text-primary: #212529;
  --ngs-text-secondary: #6c757d;
  --ngs-text-muted: #868e96;
  --ngs-text-inverse: #ffffff;

  --ngs-bg-primary: #ffffff;
  --ngs-bg-secondary: #f8f9fa;
  --ngs-bg-tertiary: #e9ecef;
  --ngs-bg-dark: #212529;

  --ngs-border-color: #dee2e6;
  --ngs-border-radius: 0;

  --ngs-spacing-xs: 0.125rem;
  --ngs-spacing-sm: 0.25rem;
  --ngs-spacing-md: 0.5rem;
  --ngs-spacing-lg: 0.75rem;
  --ngs-spacing-xl: 1rem;
  --ngs-spacing-2xl: 1.5rem;

  --ngs-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --ngs-font-size-xs: 0.75rem;
  --ngs-font-size-sm: 0.8125rem;
  --ngs-font-size-base: 0.875rem;
  
  --ngs-font-weight-normal: 400;
  --ngs-font-weight-medium: 500;
  --ngs-font-weight-semibold: 600;
  --ngs-font-weight-bold: 700;

  --ngs-transition-base: all 0.2s ease-in-out;
  --ngs-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
`}),dependencies:{"@angular/core":"^18.0.0","@angular/common":"^18.0.0","@angular/platform-browser":"^18.0.0","@angular/compiler":"^18.0.0","@angular/forms":"^18.0.0","@angular/router":"^18.0.0","@angular/cdk":"^18.0.0",rxjs:"^7.8.0",tslib:"^2.3.0","zone.js":"~0.14.0",tangrid:"latest","@tanstack/angular-table":"^8.0.0"}}}openProject(t,n,o="TanGrid Demo",r="TanGrid library demo",a){let s=this.getProjectConfig(t,n,o,r,a);$.openProject(s,{openFile:`src/app/${this.toKebabCase(t)}.component.ts`})}toKebabCase(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase().replace(/-component$/,"")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=H({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var je=["embedContainer"],ce=(()=>{class e{constructor(){this.componentName="",this.files={html:"",ts:""},this.title="tanGrid Demo",this.description="tanGrid library demo",this.stackBlitzService=y(I),this.vm=null}ngAfterViewInit(){this.embedProject()}ngOnChanges(t){(t.componentName||t.files||t.selector)&&!t.componentName.isFirstChange()&&this.embedProject()}ngOnDestroy(){this.vm=null}embedProject(){if(!this.embedContainer)return;let t=this.stackBlitzService.getProjectConfig(this.componentName,this.files,this.title,this.description,this.selector),n=this.toKebabCase(this.componentName);$.embedProject(this.embedContainer.nativeElement,t,{openFile:`src/app/${n}.component.ts`,height:600,theme:"light",view:"preview"}).then(o=>{this.vm=o})}toKebabCase(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase().replace(/-component$/,"")}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=C({type:e,selectors:[["ngsd-stackblitz-embed"]],viewQuery:function(n,o){if(n&1&&J(je,5),n&2){let r;X(r=Z())&&(o.embedContainer=r.first)}},inputs:{componentName:"componentName",files:"files",title:"title",description:"description",selector:"selector"},standalone:!0,features:[K,x],decls:3,vars:0,consts:[["embedContainer",""],[1,"stackblitz-embed"],[1,"stackblitz-embed__container"]],template:function(n,o){n&1&&(d(0,"div",1),u(1,"div",2,0),l())},dependencies:[T],styles:[".stackblitz-embed[_ngcontent-%COMP%]{width:100%;height:600px;border:1px solid var(--ngs-border-color);border-radius:var(--ngs-border-radius);overflow:hidden;background:var(--ngs-bg-secondary)}.stackblitz-embed__container[_ngcontent-%COMP%]{width:100%;height:100%}"]})}}return e})();function ke(e,i){e&1&&(u(0,"span",10),d(1,"span"),f(2,"Copied!"),l())}function $e(e,i){e&1&&(u(0,"span",11),d(1,"span"),f(2,"Copy"),l())}function Ie(e,i){if(e&1){let t=Q();d(0,"div",4)(1,"button",7),w("click",function(){M(t);let o=b();return N(o.openStackBlitz())}),u(2,"span",8),d(3,"span"),f(4,"Open New"),l()(),d(5,"button",9),w("click",function(){M(t);let o=b();return N(o.copyCode())}),E(6,ke,3,0)(7,$e,3,0),l()()}if(e&2){let t=b();g(5),q("aria-label",t.copied()?"Copied!":"Copy code"),g(),S(t.copied()?6:7)}}function Me(e,i){if(e&1&&u(0,"ngsd-stackblitz-embed",6),e&2){let t=b();W("componentName",t.componentName)("files",t.parsedFiles())("title",t.title)("selector",t.selector)}}function Ne(e,i){if(e&1&&(d(0,"pre")(1,"code"),f(2),l()()),e&2){let t=b();g(2),Y(t.code)}}var Ye=(()=>{class e{constructor(){this.code="",this.componentName="DemoComponent",this.title="Demo",this.stackBlitzService=y(I),this.copied=O(!1),this.showEmbed=O(!1),this.parsedFiles=()=>{let t="",n="";if(this.code.includes("// TS")){let o=this.code.split("// TS"),r=o[0].replace("// HTML","").trim();n=o[1].trim(),t=r}else n=this.code,t="<!-- See TS file for implementation -->";return{html:t,ts:n}}}get selector(){let n=this.parsedFiles().ts.match(/selector:\s*['"]([^'"]+)['"]/);if(n&&n[1])return n[1]}copyCode(){navigator.clipboard.writeText(this.code).then(()=>{this.copied.set(!0),setTimeout(()=>{this.copied.set(!1)},2e3)})}openStackBlitz(){let t=this.parsedFiles(),n=this.componentName,o=this.selector;if(n==="DemoComponent"){let r=t.ts.match(/export class (\w+)/);r&&r[1]&&(n=r[1])}this.stackBlitzService.openProject(n,t,this.title,"TanGrid library demo",o)}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=C({type:e,selectors:[["ngsd-code-viewer"]],inputs:{code:"code",componentName:"componentName",title:"title"},standalone:!0,features:[x],decls:11,vars:6,consts:[[1,"code-viewer"],[1,"code-viewer__header"],[1,"code-viewer__tabs"],[1,"code-viewer__tab",3,"click"],[1,"code-viewer__actions"],[1,"code-viewer__content"],[3,"componentName","files","title","selector"],["type","button","title","Open in new window",1,"code-viewer__action-btn",3,"click"],[1,"code-viewer__action-icon","mdi","mdi-open-in-new"],["type","button",1,"code-viewer__action-btn",3,"click"],[1,"code-viewer__action-icon","mdi","mdi-check"],[1,"code-viewer__action-icon","mdi","mdi-content-copy"]],template:function(n,o){n&1&&(d(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),w("click",function(){return o.showEmbed.set(!1)}),f(4," Code "),l(),d(5,"button",3),w("click",function(){return o.showEmbed.set(!0)}),f(6," StackBlitz "),l()(),E(7,Ie,8,2,"div",4),l(),d(8,"div",5),E(9,Me,1,4,"ngsd-stackblitz-embed",6)(10,Ne,3,1,"pre"),l()()),n&2&&(g(3),z("code-viewer__tab--active",!o.showEmbed()),g(2),z("code-viewer__tab--active",o.showEmbed()),g(2),S(o.showEmbed()?-1:7),g(2),S(o.showEmbed()?9:10))},dependencies:[T,ce],styles:[".code-viewer[_ngcontent-%COMP%]{border:1px solid var(--ngs-border-color);border-radius:var(--ngs-border-radius);overflow:hidden;background:var(--ngs-bg-secondary);margin-top:var(--ngs-spacing-md)}.code-viewer__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:0 var(--ngs-spacing-md);background:var(--ngs-bg-tertiary);border-bottom:1px solid var(--ngs-border-color);height:48px}.code-viewer__tabs[_ngcontent-%COMP%]{display:flex;height:100%}.code-viewer__tab[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 var(--ngs-spacing-lg);background:transparent;border:none;border-bottom:2px solid transparent;color:var(--ngs-text-secondary);font-size:var(--ngs-font-size-sm);font-weight:var(--ngs-font-weight-medium);cursor:pointer;height:100%;transition:var(--ngs-transition-base);&:hover{color:var(--ngs-text-primary);background:#0000000d}&.code-viewer__tab--active{color:var(--ngs-primary);border-bottom-color:var(--ngs-primary);background:var(--ngs-bg-primary)}}.code-viewer__label[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-sm);font-weight:var(--ngs-font-weight-medium);color:var(--ngs-text-secondary);text-transform:uppercase;letter-spacing:.5px}.code-viewer__actions[_ngcontent-%COMP%]{display:flex;gap:var(--ngs-spacing-sm);margin-left:auto}.code-viewer__action-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--ngs-spacing-xs);padding:var(--ngs-spacing-xs) var(--ngs-spacing-sm);background:transparent;border:1px solid var(--ngs-border-color);border-radius:var(--ngs-border-radius-sm);cursor:pointer;font-size:var(--ngs-font-size-xs);color:var(--ngs-text-secondary);transition:var(--ngs-transition-base);&:hover{background:var(--ngs-bg-primary);border-color:var(--ngs-primary);color:var(--ngs-primary)}}.code-viewer__action-icon[_ngcontent-%COMP%]{font-size:var(--ngs-font-size-sm)}.code-viewer__content[_ngcontent-%COMP%]{overflow-x:auto;background:var(--ngs-bg-primary)}.code-viewer__content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0;padding:var(--ngs-spacing-md);font-family:Monaco,Menlo,Ubuntu Mono,Consolas,source-code-pro,monospace;font-size:var(--ngs-font-size-sm);line-height:1.6;color:var(--ngs-text-primary);overflow-x:auto}.code-viewer__content[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:inherit;font-size:inherit}"]})}}return e})();export{Ye as a};
