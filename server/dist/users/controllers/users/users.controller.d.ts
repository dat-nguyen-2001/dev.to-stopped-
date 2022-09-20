import { CreateUserDto } from 'src/users/users.dtos';
import { UsersService } from 'src/users/services/users/users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createPost(createUserDto: CreateUserDto): Promise<import("../../../typeorm").User>;
}
