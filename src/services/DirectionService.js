import axiosInstance from './axiosConfig';

export const DirectionService = {
    async fetchCategories() {
        const response = await axiosInstance.get('/categories', { withCredentials: true });
        return response.data;
    },
    async fetchDirections() {
        const response = await axiosInstance.get('/directions', { withCredentials: true });
        return response.data;
    }
};