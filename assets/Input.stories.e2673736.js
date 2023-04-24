var i=Object.defineProperty;var a=(e,n)=>i(e,"name",{value:n,configurable:!0});import{C as d,G as m,H as p,D as v,E as f,F as g,I as s,k as I,a as h,r as l}from"./vue.esm-bundler.cce7a107.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";function _(e,n,S,W,b,x){const c=f("q-input");return g(),d(c,{class:v(["quan-input",e.inputClasses]),rounded:"",standout:""},m({_:2},[e.$slots.prepend?{name:"prepend",fn:p(()=>[s(e.$slots,"prepend",{},void 0,!0)]),key:"0"}:void 0,e.$slots.append?{name:"append",fn:p(()=>[s(e.$slots,"append",{},void 0,!0)]),key:"1"}:void 0]),1032,["class"])}a(_,"render");const u=I({props:{size:{type:String,default:"md"}},setup(e){return{inputClasses:h(()=>({[`quan-input--size-${e.size}`]:e.size}))}}});var t=y(u,[["render",_],["__scopeId","data-v-5aabb324"]]);u.__docgenInfo={exportName:"default",displayName:"AppInput",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:"'md'"}}],slots:[{name:"prepend"},{name:"append"}],sourceFiles:["/home/davron/Projects/marketplace-ui/src/components/common/AppInput.vue"]};var A=Object.defineProperty,o=a((e,n)=>A(e,"name",{value:n,configurable:!0}),"__name"),C={parameters:{storySource:{source:`import { Meta, Story } from '@storybook/vue3';
import AppInput from '../components/common/AppInput.vue';
import { ref } from 'vue';

export default {
  component: AppInput,
} as Meta;

export const WithoutValue: Story = (args) => ({
  components: { AppInput },
  setup() {
    return { args };
  },
  template: '<app-input v-bind="args" />',
});
WithoutValue.args = {
  placeholder: 'Placeholder',
};
WithoutValue.argTypes = {
  size: {
    description: '\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043E\u043A. \u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B: xs, sm, md, lg, xl'
  }
};

export const WithValueAndIcons: Story = (args) => ({
  components: { AppInput },
  setup() {
    const value = ref('Super Value');

    return { value,  args };
  },
  template: \`
    <app-input v-model="value" v-bind="args">
      <template v-slot:prepend>
        <q-icon name="search" color="grey3">
      </template>
      <template v-slot:append v-if="value">
        <q-icon name="clear" color="grey3" @click="value = ''">
      </template>
    </app-input>
  \`,
});
WithValueAndIcons.args = {
  placeholder: 'With Value And Icons'
}

export const SmallInput: Story = (args) => ({
  components: { AppInput },
  setup() {
    const value = ref('I am small');
    args.size = 'sm'

    return { value, args };
  },
  template: \`
    <app-input v-model="value" v-bind="args" />
  \`,
});`,locationsMap:{"without-value":{startLoc:{col:35,line:9},endLoc:{col:2,line:15},startBody:{col:35,line:9},endBody:{col:2,line:15}},"with-value-and-icons":{startLoc:{col:40,line:25},endLoc:{col:2,line:42},startBody:{col:40,line:25},endBody:{col:2,line:42}},"small-input":{startLoc:{col:33,line:47},endLoc:{col:2,line:58},startBody:{col:33,line:47},endBody:{col:2,line:58}}}}},component:t};const r=o(e=>({components:{AppInput:t},setup(){return{args:e}},template:'<app-input v-bind="args" />'}),"WithoutValue");r.args={placeholder:"Placeholder"};r.argTypes={size:{description:"\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043E\u043A. \u0412\u0430\u0440\u0438\u0430\u043D\u0442\u044B: xs, sm, md, lg, xl"}};const V=o(e=>({components:{AppInput:t},setup(){return{value:l("Super Value"),args:e}},template:`
    <app-input v-model="value" v-bind="args">
      <template v-slot:prepend>
        <q-icon name="search" color="grey3">
      </template>
      <template v-slot:append v-if="value">
        <q-icon name="clear" color="grey3" @click="value = ''">
      </template>
    </app-input>
  `}),"WithValueAndIcons");V.args={placeholder:"With Value And Icons"};const $=o(e=>({components:{AppInput:t},setup(){const n=l("I am small");return e.size="sm",{value:n,args:e}},template:`
    <app-input v-model="value" v-bind="args" />
  `}),"SmallInput"),q=["WithoutValue","WithValueAndIcons","SmallInput"];export{$ as SmallInput,V as WithValueAndIcons,r as WithoutValue,q as __namedExportsOrder,C as default};
//# sourceMappingURL=Input.stories.e2673736.js.map
