import axios from 'axios';

const TMS_API = axios.create({
	baseURL: process.env.TMS_API
});

export { TMS_API };
