import{j as T}from"./jsx-runtime-vNq4Oc-g.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const F="_button_1xv7f_1",P="_primary_1xv7f_9",$="_secondary_1xv7f_13",j="_tertiary_1xv7f_17",N="_link_1xv7f_21",q="_fullWidth_1xv7f_25",s={button:F,primary:P,secondary:$,tertiary:j,link:N,fullWidth:q},i=({className:o,fullWidth:x,variant:k="primary",...S})=>T.jsx("button",{className:`${s.button} ${s[k]} ${x?s.fullWidth:""} ${o}`,...S});try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"link"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const C={title:"Components/Button",component:i,tags:["autodocs"],argTypes:{variant:{options:["primary","secondary","tertiary","link"],control:{type:"radio"}}}},r={args:{variant:"primary",children:"Primary Button",disabled:!1}},a={args:{variant:"secondary",children:"Secondary Button",disabled:!1}},e={args:{variant:"tertiary",children:"Tertiary Button",disabled:!1}},t={args:{variant:"link",children:"Tertiary Button",disabled:!1}},n={args:{variant:"primary",children:"Full Width Button",disabled:!1,fullWidth:!0}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    disabled: false
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,f,_;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
    disabled: false
  }
}`,...(_=(f=e.parameters)==null?void 0:f.docs)==null?void 0:_.source}}};var v,h,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'Tertiary Button',
    disabled: false
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,B,W;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true
  }
}`,...(W=(B=n.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const I=["Primary","Secondary","Tertiary","Link","FullWidth"];export{n as FullWidth,t as Link,r as Primary,a as Secondary,e as Tertiary,I as __namedExportsOrder,C as default};
