import Button from './components/button';
import Accordion from './components/accordion';
import Breadcrumb from './components/breadcrumb';

import '../node_modules/carbon-components/css/carbon-components.css';

function install(Vue) {
  Vue.component(Button.name, Button);
  Vue.component(Accordion.name, Accordion);
  Vue.component(Breadcrumb.name, Breadcrumb);
}

export default {
  install,
};
