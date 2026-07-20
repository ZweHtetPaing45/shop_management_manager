


export class BranchRole{

    constructor(
        private readonly id : number | null,
        private readonly job_title : string,
        private readonly job_description : string,
        private readonly sop_assignment : string,
        private readonly policy_binding : string,
        private readonly issued_supplies : string,
        private readonly basic_salary : number,
        private readonly working_days_per_month : number

    ){}

}