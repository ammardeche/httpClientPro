import { ICategory } from "./category";

export interface IProducts extends ICategory  {
    id : number ; 
    title : string ;
    price : string; 
    description : string;
    images : string[];
    creationAt : string;
    updatedAt : Date;  
    category : ICategory; 
}
