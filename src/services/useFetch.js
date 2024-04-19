export async function useFetch(data) {

    console.log("UseFetch")
        const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        )
        const result = await response.json()
        return result
}