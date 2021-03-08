
const deleteItem = (arr, id, type) => {

        if(!Array.isArray(arr) || typeof id !== "number" || typeof type !== "string"){
            throw new TypeError();
        }

        const ordersI = arr.findIndex(item => item.type === type);
        if(ordersI !== -1){
            const ordersSecItems = arr[ordersI].items;
            const itemIndex = ordersSecItems.findIndex(item => item.id === id);
            if(itemIndex !== -1){
                ordersSecItems.splice(itemIndex, 1);
                //push to the end of the arr if it is empty
                if(ordersSecItems.length === 0){
                    arr.push(arr.splice(ordersI, 1)[0]);
                }
                //
            }
        }
 
}


export default deleteItem;