import axios from 'axios';
export function getCourse() {
	return axios.request({
		method: 'get',
		url: 'http://localhost:8000/all',
	});
}
