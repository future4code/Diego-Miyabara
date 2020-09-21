import * as bcryptjs from 'bcryptjs'

export class HashManager {
    public async hash(password: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcryptjs.genSalt(rounds)

        const result = await bcryptjs.hash(password, salt)

        return result
    }

    public async compare(password: string, cypherPassword: string): Promise<boolean> {
        return bcryptjs.compare(password, cypherPassword)
    }
}