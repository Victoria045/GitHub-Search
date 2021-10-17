import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { Repository } from '../repository-class/repository';
import { GitSearchService } from '../services/git-search.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
    user?:User; 
    repoItems? = []; 
    gitSearchService?: GitSearchService; 
  

  constructor(gitSearchService: GitSearchService) { 
    this.gitSearchService = gitSearchService;
  }

  ngOnInit(): void {
    this.user = this.gitSearchService?.user;
    this.repoItems = this.gitSearchService?.repoInput;
  }
}
