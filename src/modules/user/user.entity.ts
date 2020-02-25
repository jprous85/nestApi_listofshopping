import {BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Role} from "../role/role.entity";

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToMany(type => Role, role=>role.users)
    @JoinTable({name: 'role_user'})
    roles: Role[];

    @Column({type: "varchar", unique: true, nullable: false})
    username: string;

    @Column({type: "varchar", nullable: false})
    name: string;

    @Column({type: "varchar", nullable: true, name: "first_last_name"})
    firstLastName: string;

    @Column({type: "varchar", nullable: true, name: "second_last_name"})
    secondLastName: string;

    @Column({type: "timestamp", nullable: true, name: "date_of_birth"})
    dateOfBirth: Date;

    @Column({type: "varchar", unique: true, nullable: false})
    email: string;

    @Column({type: "timestamp", name: "verified_email"})
    verifiedEmail: Date;

    @Column({type: "varchar", nullable: false})
    password: string;

    @Column({type: "varchar", nullable: false, length: 60, name: "api_token"})
    apiToken: string;

    @Column({type: "varchar", default: "ACTIVE", length: 8})
    status: string;

    @Column({type: "varchar", nullable: true, default: "default.png"})
    avatar:string;

    @Column({type: "timestamp", name: "created_at"})
    createdAt: Date;

    @Column({type: "timestamp", name: "updated_at"})
    updatedAt: Date;
}