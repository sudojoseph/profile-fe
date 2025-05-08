import axios from "axios";


const config = {
	headers: {
		Allow: 'POST'
	}
};

export class Api {

    constructor() {
        this.baseUrl = 'https://ancient-journey-07275.herokuapp.com';
        this.jarvisServiceUrl = 'https://ancient-journey-07275.herokuapp.com'
    };

    askTravisQuestion = async(question) => {
        const answer = await axios.post(`${this.jarvisServiceUrl}`, { question: question }, config);
        console.log(answer);
        return answer;
    };

    sendMessageToTelegramBot = async(message) => {
        const responce = await axios.post(`${this.baseUrl}/telegram`, { message: message });
        return responce;
    };
};