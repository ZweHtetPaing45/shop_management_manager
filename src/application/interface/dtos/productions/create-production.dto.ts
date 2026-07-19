

export interface CreateProductionDTO{

    branch_id : number;
    production_variant_id : number;
    name : string;
    planned_quantity : number;
    actual_quantity : number;
    damaged_quantity : number;
    duration : number;

}