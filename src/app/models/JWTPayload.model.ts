export interface JwtPayload {
    sub: string;
    email: string;
    userId: string;
    name: string;
    role: string;
    exp: number;
  }