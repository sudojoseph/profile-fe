import axios from "axios";


const config = {
	headers: {
		Allow: 'POST'
	}
};

export class Api {

    constructor() {
        this.baseUrl = process.env.REACT_APP_SERVER_URL;
    };

    askTravisQuestion = async(question) => {
        const answer = await axios.post(`${this.baseUrl}/jarvis`, { question: question }, config);
        return answer.data;
    };

    sendMessageToTelegramBot = async(message) => {
        const responce = await axios.post(`${this.baseUrl}/telegram`, { message: message });
        return responce.data;
    };
};