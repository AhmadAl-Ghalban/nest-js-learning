import { Body, Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { ValidationLog } from "./Validations/validationLog.pipe";

@Controller('users')
export class UserController {
    constructor(private readonly userService:UserService) {}
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