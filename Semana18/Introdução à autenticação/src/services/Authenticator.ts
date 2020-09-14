import * as jwt from 'jsonwebtoken';

export class Authenticator {
    private static EXPIRES_IN = "1min";
    public generateToken(input: AuthenticationData): string {
        const token = jwt.sign(
            {id: input.id},
            process.env.JWT_KEY as string,
            {expiresIn: Authenticator.EXPIRES_IN})

        return token
    }

    public getData(token: string): AuthenticationData {
        const verifier = jwt.verify(token, process.env.JWT_KEY as string) as any
        const response = {
            id: verifier.id
        }
        return response
    }
}

interface AuthenticationData {
    id: string;
}