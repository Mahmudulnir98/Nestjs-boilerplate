import { Controller, Get } from '@nestjs/common';
// import { AppService } from 'src/app.service';
// import { AppService } from 'src/app.service';
import { NoteService } from "./note.service";
@Controller()
export class NoteController {
    constructor(private readonly NoteService: NoteService) {}
    @Get('/notes')
    getHello(): string {
        return this.NoteService.getHello();
    }
}

