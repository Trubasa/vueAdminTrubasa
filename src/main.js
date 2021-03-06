// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import netWork from './assets/netWork'
import App from './App'
import router from './router'
import './assets/tru_style.css'
import bus from './store/bus'
import store from './store/store'
import api from './assets/api'
import './assets/transitionAnimate.css'

import muLoading from 'muse-ui-loading'
import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
Vue.use(muLoading)

import muToast from 'muse-ui-toast'
Vue.use(muToast)

import myComponents from './assets/myComponents'
Vue.use(myComponents);


Vue.use(ELEMENT);

//引入muse-ui 开始
import 'muse-ui/lib/styles/base.less';
import {
  Alert,
  AppBar,
  AutoComplete,
  Avatar,
  Badge,
  BottomNav,
  BottomSheet,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Chip,
  DateInput,
  DataTable,
  Dialog,
  Divider,
  Drawer,
  ExpansionPanel,
  Form,
  Grid,
  GridList,
  Helpers,
  Icon,
  List,
  LoadMore,
  Menu,
  Pagination,
  Paper,
  Picker,
  Popover,
  Progress,
  Radio,
  Select,
  SlidePicker,
  Slider,
  Snackbar,
  Stepper,
  SubHeader,
  Switch,
  Tabs,
  TextField,
  Tooltip,
  theme
} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';

Vue.use(Alert);
Vue.use(AppBar);
Vue.use(AutoComplete);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(BottomNav);
Vue.use(BottomSheet);
Vue.use(Breadcrumbs);
Vue.use(Button);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Chip);
Vue.use(DateInput);
Vue.use(DataTable);
Vue.use(Dialog);
Vue.use(Divider);
Vue.use(Drawer);
Vue.use(ExpansionPanel);
Vue.use(Form);
Vue.use(Grid);
Vue.use(GridList);
Vue.use(Helpers);
Vue.use(Icon);
Vue.use(List);
Vue.use(LoadMore);
Vue.use(Menu);
Vue.use(Pagination);
Vue.use(Paper);
Vue.use(Picker);
Vue.use(Popover);
Vue.use(Progress);
Vue.use(Radio);
Vue.use(Select);
Vue.use(SlidePicker);
Vue.use(Slider);
Vue.use(Snackbar);
Vue.use(Stepper);
Vue.use(SubHeader);
Vue.use(Switch);
Vue.use(Tabs);
Vue.use(TextField);
Vue.use(Tooltip);
//引入muse-ui 结束

//引入element-ui 开始

// let elementList=['Menu','Submenu','MenuItem','MenuItemGroup']

Vue.prototype.$netWork=netWork;
Vue.prototype.$bus=bus;
Vue.prototype.$api=api;
Vue.prototype.$scheme=scheme

//引入element-ui 结束

Vue.config.productionTip = false

import './assets/cover.css' //样式覆盖，覆盖默认框架的样式

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
