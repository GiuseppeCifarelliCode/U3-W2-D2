import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Post[] = []
  activePosts:Post[] = []
  inactivePosts:Post[] = []
  constructor(){}

  takePosts(){
    fetch('../assets/db.json')
    .then(res => res.json())
    .then(data  => data.forEach((element:Post) => {
      this.posts.push(element)
    })
    )
    .catch(err => alert(err))
  }

  getPosts():Post[]{
    return this.posts
  }

  getActivePosts():Post[]{
    return this.activePosts = (this.posts.filter(post => post.active = true)
      )
  }

  getInactivePosts():Post[]{
    return this.inactivePosts = (this.posts.filter(post => post.active = false)
      )
  }
}
