const TAN_BASE_URL = "https://jsonplaceholder.typicode.com/";
export const queryFetchApi = async () => {
    console.log("API Called!");
    const response = await fetch(`${TAN_BASE_URL}posts`);
    if (!response.ok) {
        throw new Error("failed to fetch")

    }
    return response.json()
}

export const createPostApi = async (postData) => {
    const response = await fetch(`${TAN_BASE_URL}posts`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postData)
    });
    if (!response.ok) {
        throw new Error("Failed to load");
    }
    return response.json();
}