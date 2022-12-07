import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModel } from './blogs/blogs.model';
import { BlogsModule } from './blogs/blogs.module';



@Module({
  imports: [BlogsModule,
    SequelizeModule.forRoot({
      url: "postgres://zafzdvkzxpuheq:9355456622ba31e8eedb88c354bed24d4fda0fb166e67f2f5644c0de82e34ddf@ec2-3-213-66-35.compute-1.amazonaws.com:5432/d5207t21rkqj9o",
      dialect: 'postgres',
      host: 'ec2-3-213-66-35.compute-1.amazonaws.com',
      port: 5432,
      username: 'zafzdvkzxpuheq',
      password: '9355456622ba31e8eedb88c354bed24d4fda0fb166e67f2f5644c0de82e34ddf',
      database: 'd5207t21rkqj9o',
      native: true,
      ssl: true, 
      dialectOptions: {
        ssl: true,
        rejectUnauthorized: false
      },
      models: [BlogsModel],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
