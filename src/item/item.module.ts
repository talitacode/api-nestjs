import { Module } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
 imports: [TypeOrmModule.forFeature([Item])],
 controllers: [ItemController],
 providers: [ItemService]
})
export class ItemModule { }
