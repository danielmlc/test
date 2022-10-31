import Panel from './components/panel/panel.vue';

const components = [
  Panel
];

const install = function (Vue: any) {
  components.map(component => {
    console.log(component.name)
    Vue.component(component.name, component);
  });
};

export default {
  install,
  Panel,
};
