import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Wallet {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    Balance: number

    @Column()
    User: string

    // @Column()
    // age: number

}

// interface Wallet extends Document {
//     Balance: Number
//     User: String
// }

// type WalletInput = {
//     Balance: Wallet["Balance"]
// }

// const WalletSchema = new Schema<Wallet> (
//     {
//         Balance: {
//             type: Schema.Types.String,
//             select: true,
//         },
//         User: {
//             type: Schema.Types.ObjectId,
//             ref: UserModel
//         }
//     },