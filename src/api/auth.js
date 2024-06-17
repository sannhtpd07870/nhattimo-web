import axios from "axios";

const API_URL = "https://localhost:5001/api/Account"; // Thay đổi URL nếu cần

export const register = async (registerData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, registerData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const login = async (loginData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, loginData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
