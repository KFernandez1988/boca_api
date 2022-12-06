import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import BlogsDTO from "./blogDTOs";
import { BlogsModel } from "./blogs.model";

@Injectable()
export default class BlogsService {

    
    constructor(
        @InjectModel(BlogsModel) 
        private model: typeof BlogsModel
    ){ console.log(this.model)}

    async getAll(): Promise<BlogsModel[]> {
        return await this.model.findAll();
    }

    async getOne(id: string): Promise<BlogsModel> {
        return await this.model.findOne({ where: {id}});
    }

    async create(blog: BlogsDTO): Promise<BlogsModel> {

           const model = await this.model.create({
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