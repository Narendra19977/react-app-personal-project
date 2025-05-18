interface ProductType{
    id:number;
    title:string;
    slug:string;
    description:string;
    category:{
        id:number;
        name:string;
        image:string
        slug:string;
    }
    images:Array<string>
}
export type {ProductType}