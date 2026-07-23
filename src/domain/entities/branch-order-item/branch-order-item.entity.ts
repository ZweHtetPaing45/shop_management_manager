


export class BranchOrderItem{

    constructor(
        public readonly id : number | null,
        public readonly branch_id : number,
        public readonly branch_inventory_id : number,
        public readonly quantity : number,
        public readonly status : string,
    ){}

}