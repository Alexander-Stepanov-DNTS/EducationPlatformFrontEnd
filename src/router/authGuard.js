import store from '@/store';

export default function requireAuth(to, from, next) {
    if (store.getters.isAuthenticated) {
        next();
    } else {
        next('/login'); // Перенаправление на страницу входа
    }
}