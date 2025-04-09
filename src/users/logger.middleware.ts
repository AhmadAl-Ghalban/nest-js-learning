import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log("🚀 ~ LoggerMiddleware ~ use ~ res:", res)
        // console.log("🚀 ~ LoggerMiddleware ~ use ~ req:", req)
        console.log("Request...");
        next();
    }
}