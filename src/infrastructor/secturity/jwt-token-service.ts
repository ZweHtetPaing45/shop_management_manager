import { TokenService } from "../../application/interface/services/i-token-service";
import jwt from 'jsonwebtoken';
import { env } from "../../config/env";



export class JwtTokenService implements TokenService{

    generate(payload: object): string {
        return jwt.sign(payload, env.SECRET, { expiresIn: env.EXPIRESIN });
    }

    verify(token: string): any {
        try {
            return jwt.verify(token, env.SECRET);
        } catch (error) {
            throw new Error("Invalid token");
        } 
    }

}