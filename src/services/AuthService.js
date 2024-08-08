import axiosInstance from './axiosConfig';

export const AuthService = {
    login(email_address, password) {
        return axiosInstance.post('/auth/login', {
            email_address,
            password
        });
    },
    register(login, email_address, password) {
        return axiosInstance.post('/auth/register', {
            login,
            email_address,
            password
        });
    },
    async logout() {
        const response = await axiosInstance.post('/auth/logout', {}, { withCredentials: true });
        return response.data;
    }
};