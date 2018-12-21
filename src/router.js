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
 },
 {
  path: '/dashboard',
  component: (resolve) => require(['./views/dashboard/index.vue'], resolve)
 }
];
export default routers;
