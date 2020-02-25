import { Module } from '@nestjs/common';
import {UserRepository} from "./user.repository";
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserService } from './user.service';
import {SharedModule} from "../../shared/shared.module";

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository]), SharedModule],
    providers: [UserService]
})
export class UserModule {}
