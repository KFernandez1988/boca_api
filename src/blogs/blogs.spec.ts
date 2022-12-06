import { Test } from '@nestjs/testing';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';

describe('BlogsController', () => {
  let blogsController: BlogsController;
  let blogsService: BlogsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [BlogsController],
        providers: [BlogsService]
    }).compile();

    blogsService = moduleRef.get<BlogsService>(BlogsService);
    blogsController = moduleRef.get<BlogsController>(BlogsController);

  })

  describe('findAll', () => {
    it('should return an array of blogs', async () => {
      const result = ['test'];
      jest.spyOn(blogsService, 'findAll').mockImplementation(() => result);

      expect(await blogsController.findAll()).toBe(result);
    });
});