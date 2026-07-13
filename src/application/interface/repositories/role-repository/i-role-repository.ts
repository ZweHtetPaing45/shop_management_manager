import { Role } from "../../../../domain/entities/role/role.entity";


export interface RoleRepository{

    findById(id : number): Promise<Role>;

}