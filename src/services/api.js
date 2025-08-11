import axios from "axios";


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key:"2754e454f5665efe49f0348ec28dedae",
        language: "pt-BR",
        page:1
    }
});

export default api;
