import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitSearchService } from '../services/git-search.service';
import { User } from '../user-class/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-git-search-form',
  templateUrl: './git-search-form.component.html',
  styleUrls: ['./git-search-form.component.css']
})

export class GitSearchFormComponent implements OnInit {

  user?: User;
  username?:string;
  gitSearchService: GitSearchService;
  public loading = true;
  
  getOutput() {
    this.loading = false;
  }

  searchUser() {
    // this.loading = false;
    this.gitSearchService.getUserData(this.username as string);
    this.router.navigate(['/output']);
    
  }
  
  constructor(gitSearchService: GitSearchService, private router: Router) { 
    this.gitSearchService = gitSearchService;
  }

  ngOnInit(): void {
  }

}