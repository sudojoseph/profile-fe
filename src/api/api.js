import axios from "axios";

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