import out_of_stock from "./assets/out_of_stock.png";

function imageSelect() {
    return out_of_stock
}

export default imageSelect;

/*
for (let i = 0; i < shop.length; i++) {
    if (shop[i].originalStock > 0) {
        return shop[i].sourceImg;
    } else if (shop[i].originalStock === 0) {
        return out_of_stock;
    }
}*/
