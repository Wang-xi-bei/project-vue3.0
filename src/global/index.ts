import 'element-plus/dist/index.css';
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
} from 'element-plus';
const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
];

//封装按需引入组件
export function registerApp(app: any) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
