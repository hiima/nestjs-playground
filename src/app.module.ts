import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import * as ormconfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), UserModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
