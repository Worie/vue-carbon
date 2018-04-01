import '../node_modules/carbon-components/css/carbon-components.css';

import Button from './components/button';
import Accordion from './components/accordion';
import Breadcrumbs from './components/breadcrumbs';

function install(Vue) {
  Vue.component(Button.name, Button);
  Vue.component(Accordion.name, Accordion);
  Vue.component(Breadcrumbs.name, Breadcrumbs);
}

export default {
  install,
};
