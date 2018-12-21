const routers = [
 {
  path: '/',
  meta: {
   title: ''
  },
  component: (resolve) => require(['./views/index.vue'], resolve)
 },
 {
  path: '/authenticate',
  component: (resolve) => require(['./views/auth/index.vue'], resolve)
 }
];
export default routers;
