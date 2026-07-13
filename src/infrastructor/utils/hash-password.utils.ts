import bcrypt from "bcrypt";


export class HashPasswrod{

    static hash(passwrod: string){
        return bcrypt.hash(passwrod,10);
    }

    static compare(passwrod: string,hash_password: string){
        return bcrypt.compare(passwrod,hash_password);
    }

}