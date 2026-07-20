

export class Inventory{

    constructor(
        public readonly id : number | null,
        public readonly owner_inventory_id : number | null,
        public readonly branch_id : number | null,
        public readonly name : string | null,
        public readonly unit : string | null,
        public readonly stock_quantity : number
    ){}

}