
export class Production{

    constructor(
        public readonly id: number | null,
        public readonly branch_id: number | null,
        public readonly production_variant_id: number | null,
        public readonly name: string,
        public readonly planned_quantity: number,
        public readonly actual_quantity: number,
        public readonly damaged_quantity: number,
        public readonly duration: number
    ){}

}