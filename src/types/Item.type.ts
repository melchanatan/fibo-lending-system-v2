export interface Item {
    [productId: string] : {
        productName: string;
        price: number;
        description?: string;
        image?: string;
        stock: number;
    }
}