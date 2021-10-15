import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitSearchService } from '../services/git-search.service';
import { User } from '../user-class/user';

@Component({
  selector: 'app-git-search-form',
  templateUrl: './git-search-form.component.html',
  styleUrls: ['./git-search-form.component.css']
})

export class GitSearchFormComponent implements OnInit {

  user?: User;
  username?:string;
  gitSearchService: GitSearchService;
  

  searchUser() {
    this.gitSearchService.getUserData(this.username as string);
  }

  constructor(gitSearchService: GitSearchService) { 
    this.gitSearchService = gitSearchService;
  }

  
  ngOnInit(): void {
  }

}