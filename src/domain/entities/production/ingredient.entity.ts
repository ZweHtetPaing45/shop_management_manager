

export class Ingredient{

    constructor(
        public readonly id : number | null,
        public readonly branch_production_id : number,
        public readonly branch_inventory_id : number,
        public readonly unit : string,
        public readonly quantity : number
    ){}

}