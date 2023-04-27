// const API_BASE_URL = 'https://api.ratemyuniaccom.tech/api';
const API_BASE_URL = 'http://localhost:8000/api';
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
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token ? token : '', // use token directly as the value of Authorization header if it exists
                }
            });
            if (response.ok) {
                return response;
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
