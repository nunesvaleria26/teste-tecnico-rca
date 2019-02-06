import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { 
      path: 'home', 
      component: HomeComponent
  },
  { 
    path: 'post/:id', 
    component: PostDetailComponent
  },
  { 
      path: '', 
      pathMatch: 'full', 
      redirectTo:'/home' 
  }
]

export const AppRoutingModule = RouterModule.forRoot(routes)
 
