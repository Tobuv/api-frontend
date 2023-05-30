export default [
  { path: '/', name: '主页', icon: 'smile', component: './Index' },
  { path: '/interface_info/:id', name: '查看接口', icon: 'smile', component: './InterfaceInfo', hideInMenu: true },
  {name: '登录', path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  // {name: '欢迎页面', path: '/welcome', icon: 'smile', component: './Index' },
  {
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    name: '管理页',
    routes: [
      { icon: 'table', path: '/admin/interface_info', component: './Admin/InterfaceInfo', name: '接口管理' },
    ],
  },
  // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
