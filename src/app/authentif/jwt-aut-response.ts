import { RegisterPayload } from "./register-payload";

export class JwtAutResponse{
    authenticationToken: string;
    user: RegisterPayload;

}