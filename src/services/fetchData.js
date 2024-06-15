/// server side component
const getData = async (url) => {
    const response = await fetch(url ,{ cache: 'no-store' });
    const data = await response.json();
    return data;
}
export { getData }