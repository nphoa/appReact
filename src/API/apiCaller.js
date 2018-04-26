import axios from 'axios';

export default function callApi(endpoint,method='GET',body){
	return axios({
		method:method,
		url:`${endpoint}`,
		data:body,
		headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
	}).catch(err =>{
		console.log(err);
	});
}

