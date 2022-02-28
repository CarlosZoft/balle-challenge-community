import { HttpException } from '../error';
import { sign, verify } from 'jsonwebtoken';
import type { JwtPayload, VerifyErrors, Secret } from 'jsonwebtoken';

export class JWT {
    static createToken(payload: JwtPayload, options?: object) {
        const secret = process.env.JWT_SECRET || 'alternative secret';
        return sign(payload, secret, options);
    }
    static validateToken(token: string): Promise<{ valid: boolean; payload: JwtPayload }> {
        return new Promise((resolve, reject) => {
            const secret: Secret = process.env.JWT_SECRET || 'alternative secret';
            /* eslint-disable */
            verify(token, secret, (err: VerifyErrors | null, payload: any): void => {
                if (err) {
                    reject(err instanceof Error ? err : HttpException);
                }
                const result = payload ? { valid: true, payload } : { valid: true, payload: null };
                return resolve(result);
            });
        });
    }
}
