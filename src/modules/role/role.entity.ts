import {BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../user/user.entity";

@Entity('roles')
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @ManyToMany(type => User, user=> user.roles)
    @JoinTable()
    users: User[];

    @Column({type: "varchar", unique: true, nullable: false})
    role: string;

    @Column({type: "varchar"})
    description: string;

    @Column({type: "timestamp", name: "created_at"})
    createdAt: Date;

    @Column({type: "timestamp", name: "updated_at"})
    updatedAt: Date;
}