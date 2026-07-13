export interface MenuDto {

    category_id : number;
    name : string;
    file: Express.Multer.File;
    price : number;
    size : string;
    quantity : number;
}