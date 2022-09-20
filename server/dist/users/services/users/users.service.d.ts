import { User } from 'src/typeorm/user.entity';
import { CreateUserDto } from 'src/users/users.dtos';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
