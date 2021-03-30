import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticleController {
  constructor(private readonly service: ArticleService) {}

  @Get()
  getArticleList() {
    return this.service.getArticleList();
  }
}
