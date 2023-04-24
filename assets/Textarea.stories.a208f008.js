var p=Object.defineProperty;var o=(e,t)=>p(e,"name",{value:t,configurable:!0});import{C as s,E as c,F as l,k as i,r as m}from"./vue.esm-bundler.cce7a107.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";function _(e,t,f,h,g,y){const r=c("q-input");return l(),s(r,{class:"quan-textarea",type:"textarea",borderless:"",resize:"none"})}o(_,"render");const u=i({setup(){return{}}});var a=d(u,[["render",_],["__scopeId","data-v-c2cbde4e"]]);u.__docgenInfo={exportName:"default",displayName:"AppTextarea",description:"",tags:{},sourceFiles:["/home/davron/Projects/marketplace-ui/src/components/common/AppTextarea.vue"]};var v=Object.defineProperty,x=o((e,t)=>v(e,"name",{value:t,configurable:!0}),"__name"),C={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/vue3';
import AppTextarea from '../components/common/AppTextarea.vue';
import { ref } from 'vue';

export default {
  component: AppTextarea,
} as Meta;

export const WithoutValue: Story = (args) => ({
  components: { AppTextarea },
  setup() {
    const value = ref('')
    
    return { value, args };
  },
  template: '<app-textarea v-model="value" v-bind="args" />',
});
WithoutValue.args = {
  placeholder: 'Placeholder',
  counter: false,
  maxlength: 200
};
WithoutValue.argTypes = {
  counter: {
    description: '\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0441\u0447\u0451\u0442\u0447\u0438\u043A \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432',
  },
  maxlength: {
    description: '\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432',
  }
};`,locationsMap:{"without-value":{startLoc:{col:35,line:9},endLoc:{col:2,line:17},startBody:{col:35,line:9},endBody:{col:2,line:17}}}}},component:a};const n=x(e=>({components:{AppTextarea:a},setup(){return{value:m(""),args:e}},template:'<app-textarea v-model="value" v-bind="args" />'}),"WithoutValue");n.args={placeholder:"Placeholder",counter:!1,maxlength:200};n.argTypes={counter:{description:"\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0441\u0447\u0451\u0442\u0447\u0438\u043A \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"},maxlength:{description:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"}};const B=["WithoutValue"];export{n as WithoutValue,B as __namedExportsOrder,C as default};
//# sourceMappingURL=Textarea.stories.a208f008.js.map
