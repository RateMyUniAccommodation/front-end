// const API_BASE_URL = 'https://goldfish-app-9nyhd.ondigitalocean.app/api';
const API_BASE_URL = 'https://localhost:8000/api';

const apiService = {
    async get(endpoint) {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}`);

            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                throw new Error(`Failed to fetch data from ${endpoint}`);
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    async post(endpoint, data) {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const responseData = await response.json();
                return responseData;
            } else {
                throw new Error(`Failed to post data to ${endpoint}`);
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    async delete(endpoint, id) {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                const responseData = await response.json();
                return responseData;
            } else {
                throw new Error(`Failed to delete data from ${endpoint}`);
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};

export default apiService;
