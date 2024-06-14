const postData = async (url, input, method = "POST") => {
    const response = await fetch(url , {
        method: method,
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json" },

    });
    const data = await response.json();
    return data;
}
export { postData }