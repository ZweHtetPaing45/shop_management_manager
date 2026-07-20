

export class Employees{

    constructor(
        public readonly id : number | null,
        public readonly branch_id : number,
        public readonly role_id : number,
        public readonly full_name : string,
        public readonly nrc_number : string,
        public readonly date_of_birth : string,
        public readonly gender : string,
        public readonly age : number,
        public readonly phone_number : string,
        public readonly email : string,
        public readonly highest_education : string,
        public readonly address : string,
        public readonly last_employment_detail : string,
        public readonly employment_start_date : string,
        public readonly contract_type : string,
        public readonly password : string | null

    ){}

}