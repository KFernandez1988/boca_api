import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModel } from './blogs/blogs.model';
import { BlogsModule } from './blogs/blogs.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';
import { UserModel } from './users/models/users.model';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './users/users.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { PassportModule } from '@nestjs/passport';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST? process.env.DB_HOST : 'localhost'  ,
      port: process.env.DB_PORT? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.DB_USER? process.env.DB_USER : 'postgres',
      password: process.env.PASSWORD? process.env.PASSWORD : 'admin',
      database: process.env.DB_NAME?  process.env.DB_NAME : "Boca",
      uri: process.env.DATABASE_URL? process.env.DATABASE_URL : '' ,
      // native: true,
      dialectOptions: {
        ssl: process.env.DB_HOST === 'localhost'? false : {
        require:  true,
        rejectUnauthorized: false
    }
      },
      models: [BlogsModel, UserModel],
      autoLoadModels: true,
      synchronize: true,
    }),
    PassportModule,
    JwtModule.register({
      secret: 'testing',
      signOptions : {
        expiresIn: '1d',
      }
    }),
    BlogsModule,
    UsersModule,
    CommentsModule,
    AuthModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService,  JwtStrategy],
})
export class AppModule {}
