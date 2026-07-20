


export class EmployeeOperationRecord{

    constructor(
        public readonly id : number | null,
        public readonly branch_employee_id : number,
        public readonly bonus_amount : number,
        public readonly fine_amount : number,
        public readonly leave_days : number,
        public readonly off_days : number,
        public readonly employment_status : string,
        public readonly manager_remarks : string

    ){}

}