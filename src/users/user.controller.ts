import { Body, Controller, Get, Param, Post, Query, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { ValidationLog } from "./Validations/validationLog.pipe";
import { CreateUserDto } from "./Dto/create-user.dto";

@Controller('users')
export class UserController {
    constructor(private readonly userService:UserService) {}
    @Post()
    createUser(@Body(new ValidationPipe) body: CreateUserDto) {
        console.log("🚀 ~ UserController ~ createUser ~ body:", body)
        // return this.userService.createUser(body);
    }
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }
    @Get("/:id")
    getUserByID(@Param('id',ValidationLog) id: number,@Body() body: any,@Query() query: any) {
        console.log(body);
        console.log(query);
        console.log('id', id)
        return this.userService.getUserById(id);
    }
}