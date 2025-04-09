import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    private readonly users = [
        { id: 1, name: "John Doe", age: 25 },
        { id: 2, name: "Jane Doe", age: 26 },
    ];

    create(user: {id:number  ,name: string, age: number }) {
        const id = Math.round(Math.random() * 1000);
        user.id = id;
        this.users.push(user);
    }
    public getUsers() {
        return this.users;
    }

    public getUserById(id: number) {
        // throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        return this.users.find(user => user.id === id);
    }
}