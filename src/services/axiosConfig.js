import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Укажите здесь базовый URL для всех запросов
    withCredentials: true, // Включаем использование кук для всех запросов
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstance;
