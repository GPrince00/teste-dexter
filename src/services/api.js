import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:1337/parse'
});
api.defaults.headers = {
    'X-Parse-Application-Id': 'OSGiFZBrXxNLjN3gYDPsgi7P4a0j6fzcc2iaCKga',
    'X-Parse-Master-Key': 'k8xm42UVuIP51wR2DswLY8NL3zgWfev8AuKUUjga'
}
export default api;