export async function useFetch(data) {
    const API_KEY_BOT = import.meta.env.VITE_APP_API_KEY_BOT;

        const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
            {
                headers: { Authorization: `Bearer ${API_KEY_BOT}` },
                method: "POST",
                body: JSON.stringify(data),
            }
        )
        const result = await response.json()
        return result
}