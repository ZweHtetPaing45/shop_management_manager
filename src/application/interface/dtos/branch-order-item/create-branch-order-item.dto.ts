

export interface CreateBranchOrderItemDTO{

    branch_id : number,
    items : {
        branch_inventory_id : number,
        quantity : number,
    }[];

}