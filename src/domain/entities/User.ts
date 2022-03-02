export class User {
  id: string;

  name?: string;

  email: string;

  password: string;

  link_photo?: string;

  constructor(params: User) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.password = params.password;
    this.link_photo = params.link_photo;
  }
}
