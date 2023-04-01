export interface IProd {
    brand: string,
    category:string, 
    description:number
    discountPercentage:string,
    images: Array<string>
    id:number,                      
    rating:number,
    stock:string,
    thumbnail:string,
    title:string
    price:number,
    cartQuantity?:number
    tempPrice?:number
 }

 export interface IData {
    limit:number,
    products: IProd[],
    skip: number,
    total: number
 }