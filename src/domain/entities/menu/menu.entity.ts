export class Menu{

    constructor(
        public id : number |number,
        public category_id : number ,
        public name : string,
        public menu_image_url : string,
        public menu_public_id : string | null,
        public price : number,
        public size : string,
        public quantity : number,
        public status : boolean | null
    ){}

}