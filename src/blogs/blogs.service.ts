import { HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/sequelize";
import { CommentModel } from "src/comments/models/comments.model";
import { UserModel } from "src/users/models/users.model";
import BlogsDTO from "./blogDTOs";
import { BlogsModel } from "./blogs.model";

@Injectable()
export default class BlogsService {

    
    constructor(
        @InjectModel(BlogsModel) 
        private model: typeof BlogsModel,
        private jwtServ: JwtService
    ){ console.log(this.model)}

    async getAll(): Promise<BlogsModel[]> {
        return await this.model.findAll();
    }

    async getOne(id: string): Promise<BlogsModel> {
        try {
            const blog = await this.model.findByPk<BlogsModel>(id)
            .catch(error => console.log(error));
            console.log("Line 22 getOne blog service", blog)
            return blog as BlogsModel;
        } catch (err) {
            console.error(err);
        }
        
    }

    async create(blog: BlogsDTO, token: string): Promise<BlogsModel> {

          const { id } = this.jwtServ.verify(token,  {
            secret: "testing",
          });

          console.log("id is in blog", id)

           const model = await this.model.create({
            userId: id,
            title: blog.title,
            blog: blog.blog
           });


        return model;
    }

    async update(id: string, blog: BlogsDTO): Promise<BlogsModel> { 

        const model = await this.model.update({
            title: blog.title,
            blog: blog.blog
        }, { where: {id}});

        return await this.model.findOne({ where: {id}});;
    }

    async destroy(id: string): Promise<void> {
       await this.model.destroy({ where: {id}})
    }
}