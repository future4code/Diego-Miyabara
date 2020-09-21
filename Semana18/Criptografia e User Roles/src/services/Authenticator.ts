import * as jwt from "jsonwebtoken";

export class Authenticator {
  private static EXPIRES_IN = "1min";
  public generateToken(data: AuthenticationData): string {
    const token = jwt.sign(
      {
        id: data.id,
        role: data.role
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: Authenticator.EXPIRES_IN,
      }
    );
    return token;
  }

  public getData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role
    };
    return result;
  }
}

interface AuthenticationData {
  id: string,
  role: ROLE_TYPE
}

export enum ROLE_TYPE {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}
