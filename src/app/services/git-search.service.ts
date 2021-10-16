import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment } from '../../environments/environment';
import { User } from '../user-class/user';
import { Repository } from '../repository-class/repository';
import { GitSearchFormComponent } from '../git-search-form/git-search-form.component';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  user?: User;
  repo?: Repository;
  repoInput = [];
  newUserInput: any = [];

  constructor(private http: HttpClient) {
    this.user = new User("",0,"","",new Date(),new Date(),"",0,0);
  	this.repo = new Repository("","","",new Date(),"","","",new Date());
   }

  //method for github profile
  // public getProfile(searchQuery:string) {
  //   let dataURL = `https://api.github.com/users/${searchQuery}`
  // }

  getUserData(username: string){

		this.repoInput.length = 0; // Empties the Array From Previous Request After a New Request

		// The HttpClient module converts the response into an object but does not specify what type of object it is. We can tell HttpClient what type of response we are expecting by defining an interface
		// Here we create an interface ApiResponse that contains the properties that we need from the response. 
		interface ApiResponse{
	        bio:string,
	        public_repos:number,
	        login:string,
	        avatar_url:string,
	        created_at:Date, 
	        updated_at:Date,
	        name:string,
	        full_name:string, 
	        html_url:string,
					followers:number, 
					following:number  
	    }

	    let promise = new Promise((resolve,reject)=>{
	    
	        this.http.get<ApiResponse>(`https://api.github.com/users/Victoria045`).toPromise().then(response=>{

	            this.user!.bio=response.bio;
	            this.user!.avatar_url=response.avatar_url;
	            this.user!.login=response.login;
	            this.user!.public_repos=response.public_repos;
	            this.user!.created_at=response.created_at;
	            this.user!.updated_at=response.updated_at;
	            this.user!.html_url=response.html_url;

	            resolve("")
	        },
	        error=>{
	                reject(error)
	            }
	        )

	        // We then use the getmethod and pass to the API URL. we then call the subscribe function that takes in the response function that is called when the API request is successful and returns a response.
	        this.http.get<any>(`https://api.github.com/users/Victoria045/repos`).toPromise().then(response=>{
					
	        	// We then pass the interface with the get method. 
	        	for(var i=0; i<response.length; i++)
	        	{
	        		// If the response is successful we create a new Repository instance and passing in the response properties. We then assign this new Repository instance to the newUserData property.
	        		this.newUserInput = new Repository(response[i].name,response[i].full_name,response[i].description,response[i].updated_at,response[i].html_url,response[i].clone_url,response[i].language,response[i].created_at);
	        		(this.repoInput as string []).push(this.newUserInput);
	        	}

            
	            resolve("")

	        },
	        error=>{

	                reject(error)
	            }
	        )
	    })

	    return promise

    }
  }