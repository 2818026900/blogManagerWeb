export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
    ],
  },
  {
    path: '/home',
    name: 'home',
    icon: 'icon-home',
    component: './Home',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'icon-dashboard',
    component: './Dashboard',
  },
  {
    path: '/userList',
    name: 'userList',
    icon: 'icon-user',
    component: './UserList',
  },
  {
    path: '/writer',
    name: 'writer',
    icon: 'icon-writer',
    component: './Writer',
  },
  {
    path: '/article',
    name: 'article',
    icon: 'icon-article',
    component: './Article',
  },
  {
    path: '/comment',
    name: 'comment',
    icon: 'icon-comment',
    component: './Comment',
  },
  {
    path: '/person',
    name: 'person',
    icon: 'icon-person',
    component: './Person',
  },
  {
    path: '/setting',
    name: 'setting',
    icon: 'icon-setting',
    component: './Setting',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Home',
      },
    ],
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
