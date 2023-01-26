import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Wallet } from "./entity/Wallet"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User, Wallet],
    migrations: [],
    subscribers: [],
})
