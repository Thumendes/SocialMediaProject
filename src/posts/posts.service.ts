import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: any) {
    return await this.prisma.post.create({ data: createPostDto });
  }

  async findAll() {
    return await this.prisma.post.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.post.findFirst({ where: { id } });
  }

  async update(id: string, updatePostDto: any) {
    return await this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.post.delete({ where: { id } });
  }

  async getPostAuthor(id: string) {
    return await this.prisma.post
      .findFirst({
        where: { id },
      })
      .author();
  }
}
