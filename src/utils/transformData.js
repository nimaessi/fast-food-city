const transformData = async (data) => {
    const result = [];
    const map = new Map();

    data.forEach(item => {
        if (!map.has(item.id)) {
            map.set(item.id, {
                ...item,
                prices: []
            });
            result.push(map.get(item.id));
        }
        map.get(item.id).prices.push({
            id_size: item.id_size,
            size: item.size,
            price: item.price
        });
    });

    return result.map(item => {
        const {id_size,size, price, prices, ...rest } = item;
        return { ...rest, prices };
    });
};
export default transformData;