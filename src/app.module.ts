import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModel } from './blogs/blogs.model';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      // uri: process.env.DATABASE_URL,
      // native: true,
      dialectOptions: {
        ssl: true,
        require: true,
        rejectUnauthorized: false
      },
      models: [BlogsModel],
      autoLoadModels: true,
      synchronize: true,
    }),
    BlogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
