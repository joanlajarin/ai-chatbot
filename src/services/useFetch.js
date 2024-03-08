import { useEffect, useState } from "react"

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
        const result = await response.json();
        return result;
    // const [dataApi, setDataApi] = useState()
    // const [loading, setLoading]  = useState(true)

    // // query({"inputs": "Can you please let us know more details about your "}).then((response) => {
    // //     console.log(JSON.stringify(response))
    // // })

    // useEffect(() => {

    //     setLoading(true)
    //     fetch("https://api-inference.huggingface.co/models/microsoft/DialoGPT-small",
    //     {   headers: { Authorization: "Bearer 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"},
	// 		method: "POST",
	// 		body: JSON.stringify({"inputs": "Can you please let us know more details about your "}),
	// 	}).then(response => response.json())
    //       .then(result  => setDataApi(result))
    //       .finally(() => setLoading(false))
    // },[])

    // return { dataApi, loading}
}