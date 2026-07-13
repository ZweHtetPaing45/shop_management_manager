export interface LoginResponseManagerDto{

    manager: {
        id: number;
        email: string;
        branch_id: number;
    }

    accessToken: string;

}