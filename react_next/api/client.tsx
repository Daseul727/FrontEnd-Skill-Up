import axios from 'axios';


class Client {

    async get(url: string, params?: any) {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }

            const response = await axios.get(url, {
                params: params,
                headers: headers,
            });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async post(url: string, params?: any) {
        try {
            const headers = {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }

            const response = await axios.post(url, params, {
                headers: headers,
            });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async postMultipartFile(url: string, params: FormData) {
        try {
            const headers = {
                'Content-Type': 'multipart/form-data',
                'X-Requested-With': 'XMLHttpRequest',
            }
            const response = await axios.post(url, params, {
                headers: headers,
            });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

export const client = new Client();