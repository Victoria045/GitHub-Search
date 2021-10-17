export class User {

  constructor(public bio: string, public public_repos: number, public login:string, public avatar_url:string, public created_at:Date, public updated_at:Date, public html_url: string,
    public company: string,public location: string,public email: string,public followers: number, public following: number){}
  
}