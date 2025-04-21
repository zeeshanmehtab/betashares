import axios from "axios";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const api = axios.create({
 
    baseURL: "https://api.openai.com/v1/", 

    headers: {
        "method": "POST",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
    }
});

export const suggest = (query) => {
    
    const data = JSON.stringify({
        "model": "gpt-4o",
        "input": [
            {
            "role": "system",
            "content": [
                {
                "type": "input_text",
                "text": "You will be provided with a product description and seed words, and your task is to generate product names."
                }
            ]
            },
            {
            "role": "user",
            "content": [
                {
                "type": "input_text",
                "text": "Product description: An exchange traded fund, Seed words: ethical, responsible, profitable, betashares"
                }
            ]
            },
            {
            "role": "user",
            "content": [
                {
                "type": "input_text",
                "text":  query
                }
            ]
            },  
        ],
        "text": {
            "format": {
            "type": "text"
            }
        },
        "reasoning": {},
        "tools": [],
        "temperature": 0.8,
        "max_output_tokens": 256,
        "top_p": 1,
        "store": true
    });
    
    return api.post("responses", data);
}

