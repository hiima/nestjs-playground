import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from 'src/entities/article.entity';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

@Module({
  controllers: [ArticleController],
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticleService],
})
export class ArticleModule {}
