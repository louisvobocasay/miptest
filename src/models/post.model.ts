import { IsNotEmpty} from 'class-validator';

export interface IPost {
  id: number
  body: string
}

export class VCreatePost {
  id: number

  @IsNotEmpty({ message: "post body must not be empty" })
  body: string
  /**
   *
   */
  constructor(id: string, body: string) {
    this.id = +id;
    this.body = body;
  }
}