import axios from "axios";


const config = {
	headers: {
		"Referer": "https://63c5202e315d222ba131d1b0--tubular-baklava-dea664.netlify.app/",
		"Referrer-Policy": "strict-origin-when-cross-origin"
	},
};

export class Api {

    constructor() {
        this.baseUrl = process.env.REACT_APP_SERVER_URL
    }

    askTravisQuestion = async(question) => {
        const answer = await axios.post(`${this.baseUrl}/jarvis`, { question: question });
        return answer.data;
    }

    sendMessageToTelegramBot = async(message) => {
        console.log("🚀 ~ file: api.js:15 ~ Api ~ sendMessageToTelegramBot=async ~ message", message)
        const responce = await axios.post(`${this.baseUrl}/telegram`, { message: message });
        return responce.data;
    };
}