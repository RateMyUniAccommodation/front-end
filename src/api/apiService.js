const API_BASE_URL = 'https://goldfish-app-9nyhd.ondigitalocean.app/api';
const token = localStorage.getItem('jwt'); // get the JWT token from local storage

const apiService = {
    async get(endpoint) {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
                headers: {
                    'Authorization': token ? token : '', // use token directly as the value of Authorization header if it exists
                },
            });

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
                    'Authorization': token ? token : '', // use token directly as the value of Authorization header if it exists
                },
                body: JSON.stringify(data),
            });
            console.log(response.headers);
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
                headers: {
                    'Authorization': token ? token : '', // use token directly as the value of Authorization header if it exists
                },
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
