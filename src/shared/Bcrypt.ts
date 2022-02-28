import { compare, hash, genSalt } from 'bcrypt';

export class Bcrypt {
    static async ecrypt(data: string): Promise<string> {
        const salt = await genSalt(10);
        return await hash(data, salt);
    }
    static async validateData(dataToValidade: string, data: string) {
        const isValid = await compare(dataToValidade, data);
        return isValid;
    }
}
