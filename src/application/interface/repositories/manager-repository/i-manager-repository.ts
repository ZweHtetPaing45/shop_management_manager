import { Manager } from "../../../../domain/entities/manager/manager.entity"

export interface ManagerRepository{

    findByEmail(email: string): Promise<Manager | null>;
    findById(id: number): Promise<Manager | null>;
}