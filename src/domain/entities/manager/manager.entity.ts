export class Manager{

    constructor(
        public id : number | null,
        public email : string,
        public role_id : number,
        public password : string | null,
        public branch_id? : number 
    ){}

}