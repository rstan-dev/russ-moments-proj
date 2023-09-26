import axios from "axios";

axios.defaults.baseURL = 'https://djangorestapi-a52988e81dd4.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;