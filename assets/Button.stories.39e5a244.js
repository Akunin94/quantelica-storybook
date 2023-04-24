var u=Object.defineProperty;var t=(n,e)=>u(n,"name",{value:e,configurable:!0});import{C as l,D as c,E as i,F as d,k as m,a as g}from"./vue.esm-bundler.cce7a107.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";function B(n,e,v,y,A,z){const p=i("q-btn");return d(),l(p,{class:c(["quan-btn",n.btnClasses])},null,8,["class"])}t(B,"render");const a=m({props:{size:{type:String,default:"md"}},setup(n){return{btnClasses:g(()=>({[`quan-btn--size-${n.size}`]:n.size}))}}});var o=_(a,[["render",B],["__scopeId","data-v-60053f9a"]]);a.__docgenInfo={exportName:"default",displayName:"AppBtn",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}}],sourceFiles:["/home/davron/Projects/marketplace-ui/src/components/common/AppBtn.vue"]};var b=Object.defineProperty,r=t((n,e)=>b(n,"name",{value:e,configurable:!0}),"__name"),G={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/vue3';
import AppBtn from '../components/common/AppBtn.vue';

export default {
  component: AppBtn,
} as Meta;

export const Gradient: Story = (args) => ({
  components: { AppBtn },
  setup() {
    return { args };
  },
  template: '<app-btn v-bind="args" />',
});

Gradient.args = {
  label: 'Button'
}
Gradient.argTypes = {
  label: {
    description: '\u0422\u0435\u043A\u0441\u0442 \u043A\u043D\u043E\u043F\u043A\u0438'
  },
  size: {
    description: '\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043A\u0438. \u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B: md, lg'
  }
}


export const LargeButton: Story = (args) => ({
  components: { AppBtn },
  setup() {
    return { args };
  },
  template: '<app-btn v-bind="args" />',
});

LargeButton.args = {
  label: 'Button',
  size: 'lg'
}`,locationsMap:{gradient:{startLoc:{col:31,line:8},endLoc:{col:2,line:14},startBody:{col:31,line:8},endBody:{col:2,line:14}},"large-button":{startLoc:{col:34,line:29},endLoc:{col:2,line:35},startBody:{col:34,line:29},endBody:{col:2,line:35}}}}},component:o};const s=r(n=>({components:{AppBtn:o},setup(){return{args:n}},template:'<app-btn v-bind="args" />'}),"Gradient");s.args={label:"Button"};s.argTypes={label:{description:"\u0422\u0435\u043A\u0441\u0442 \u043A\u043D\u043E\u043F\u043A\u0438"},size:{description:"\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043A\u0438. \u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B: md, lg"}};const f=r(n=>({components:{AppBtn:o},setup(){return{args:n}},template:'<app-btn v-bind="args" />'}),"LargeButton");f.args={label:"Button",size:"lg"};const k=["Gradient","LargeButton"];export{s as Gradient,f as LargeButton,k as __namedExportsOrder,G as default};
//# sourceMappingURL=Button.stories.39e5a244.js.map
