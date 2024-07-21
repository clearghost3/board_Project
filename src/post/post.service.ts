import _ from 'lodash';

import { Injectable, NotFoundException } from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { RemovePostDto } from './dto/remove-post.dto';
import { MESSAGES } from 'src/constants/constatns.messages';

@Injectable()
export class PostService {
  private articles: { id: number; title: string; content: string }[] = [];
  private articlePasswords = new Map<number, number>();

  async create(createPostDto: CreatePostDto) {
    const {title,content,password}=createPostDto;

    const id :number=this.articles.length+1;

    const article= {id,title,content};
    this.articlePasswords.set(id,password);
    return await this.articles.push(article);
  }

  async findAll() {
      return this.articles.map(({id,title})=>({id,title}));
    }

  async findOne(id: number) {
    return this.articles.map((element)=>(element.id===id))
  }


  //게시물 수정 함수
  async update(id: number, updatePostDto: UpdatePostDto) {
    const {content,password}=updatePostDto;

    if (this.articlePasswords[id]!==password) {
      throw new NotFoundException({message:MESSAGES.NOT_FOUND_EXCEPTION});
    }

    const article=this.articles.find((article)=>(article.id===id));

    article.content=content;
    return;
  }

  async remove(removePostDto :RemovePostDto) {
    //DTO도 아직도 못만듦
    return;
  }
}
