import axios from "./axios";

const API_URL = 'https://translation.googleapis.com/language/translate/v2';
const API_KEY = 'AIzaSyDPav7ybQRs5zQJMurrp24nW7WCnHXnT5M';

const translateText = async (text: any, targetLanguage: any) => {

    const languages = await axios.get("https://translation.googleapis.com/language/translate/v2/languages?key=" + API_KEY, {
        params: {
            target: "en"
        },
    });

    const googleTranslationApi = `${API_URL}?key=${API_KEY}`;

    const response = await axios.post(googleTranslationApi,
        {
            q: text,
            target: targetLanguage,
            // source:"en",
            format: "text"
        }
    );
    return response.data.translations;
};

export default translateText;