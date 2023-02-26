import { Controller, Get, Post, Patch, Delete, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get('get')
  getAction(): string {
    return 'get';
  }
  @Post()
  postAction(): string {
    return 'post';
  }
  @Patch()
  patchAction(): string {
    return 'patch';
  }
  @Put()
  putAction(): string {
    return 'put';
  }
  @Delete()
  deleteAction(): string {
    return 'delete';
  }
}
