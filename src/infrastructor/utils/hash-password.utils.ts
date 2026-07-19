import bcrypt from "bcrypt";


export class HashPassword{

    static hash(password: string){
        return bcrypt.hash(password,10);
    }

    static compare(password: string,hash_password: string){
        return bcrypt.compare(password,hash_password);
    }

}