const postData = async (url, input) => {
    const response = await fetch(url , {
        method: "POST",
        body: JSON.stringify(input),
        headers: { "Content-Type": "application/json" },

    });
    const data = await response.json();
    return data;
}
export { postData }