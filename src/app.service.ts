import _ from 'lodash';

import { Injectable } from '@nestjs/common';

import { CreatePostDto } from './post/dto/create-post.dto';
import { UpdatePostDto } from './post/dto/update-post.dto';

@Injectable()
export class PostService {
  private articles: { id: number; title: string; content: string }[] = [];
  private articlePasswords = new Map<number, number>();

  create(createPostDto: CreatePostDto) {
    return;
  }

  findAll() {
    return  this.articles.map(({id,title})=>({id,title}));
  }

  findOne(id: number) {
    return this.articles.map((element)=>(element.id===id));
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}