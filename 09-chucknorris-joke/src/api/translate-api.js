import axios from 'axios';

/**
 * 
 * @param {String} text 
 * @returns {String}
 */
export const translateText = async(text) => {

    const res = await axios.post(`${import.meta.env.VITE_API_TRANSLATE_URL}/v2?key=${import.meta.env.VITE_API_TRANSLATE_KEY}`, { q: text, target: "es" });
    const translation = res.data.data.translations[0].translatedText;
    return translation;
};