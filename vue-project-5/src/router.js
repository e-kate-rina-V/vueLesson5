import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import AdminPage from './components/AdminPage.vue';
import UserPage from './components/userPage.vue';
import UserProfile from './components/UserProfile.vue';
import NotFound from './components/NotFound.vue';

// Додайте navigation guards для захисту маршрутів від неавторизованих користувачів.
// Використовуйте мета-поля маршруту для передачі даних між маршрутами.

// Використовувати Vue Router hooks (beforeEach, afterEach) для перевірки автентифікації користувача і його ролі перед переходом на відповідний маршрут.
// Якщо користувач спробує отримати доступ до сторінки, до якої у нього немає прав, він повинен бути перенаправлений на сторінку 404 Not Found Page.

const user = {
  isAuthenticated: false,
  role: 'guest',
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home Page' },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About Us' },
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
    meta: { requiresAuth: true, requiresRole: 'admin', title: 'Admin Page' },
  },
  {
    path: '/user/:id',
    name: 'UserPage',
    component: UserPage,
    meta: { requiresAuth: true, title: 'User Page' },
    children: [
      {
        path: 'profile',
        name: 'UserProfile',
        component: UserProfile,
        props: true
      }
    ]
  },

  // Реалізуйте "404 Not Found" маршрут і сторінку, яка відображається, 
  // коли користувач переходить на неіснуючий маршрут.

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: '404 Not Found' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !user.isAuthenticated) {

    next({ name: 'NotFound' });
  } else if (to.meta.requiresRole && user.role !== to.meta.requiresRole) {

    next({ name: 'NotFound' });
  } else {
    next();
  }
});

router.afterEach((to) => {
  document.title = to.meta.title || 'Default Title';
});

export default router;
