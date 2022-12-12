import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import BlogsDTO from "./blogDTOs";
import { BlogsModel } from "./blogs.model";
import BlogsService from "./blogs.service";

@Controller('/blogs')
export default class BlogsController {

    constructor(private ctx: BlogsService){}

    @Get()
    getAllPost(): Promise<BlogsModel[]> {
        return this.ctx.getAll();
    }

    @Get('/:id')
    getOneBlog(@Param() id): Promise<BlogsModel> {
        console.log(id)
        return this.ctx.getOne(id.id);
    }

    @Post()
    createNewBlog(@Body() blog: BlogsDTO): Promise<BlogsModel> {
        return this.ctx.create(blog)
    }

    @Put('/:id')
    updateABlog(@Param() id, blog: BlogsDTO): void {
        console.log(this.ctx.update(id, blog));
    }

    @Delete('/:id')
    destroyBlog(@Param() id): Promise<void> {
        return this.ctx.destroy(id);
    }
}