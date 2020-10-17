import axios from 'axios';

const instance = axios.create({
	baseURl: 'https://travel-planner-7cd1d.firebaseio.com/'
});

export default instance;
