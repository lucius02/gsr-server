import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesService } from './recipes/recipes.service';
import { RecipesController } from './recipes/recipes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { recipe } from './models/recipe.modal';
import { DataInterceptor } from './util/data.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { Repository } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '31.14.96.253',
      port: 5432,
      username: 'postgres', // Update to your db username
      password: 'WelKom7993', // Update to your db password
      database: 'diet',
      entities: [recipe],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([recipe]),
    recipe,
    Repository,
  ],
  controllers: [AppController, RecipesController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: DataInterceptor,
    },
    AppService,
    RecipesService,
  ],
})
export class AppModule {}
