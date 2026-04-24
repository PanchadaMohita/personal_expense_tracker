import axios from "axios";

const API = "http://127.0.0.1:8000";

export const uploadImage = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    return axios.post(`${API}/upload/`, formData);
};
