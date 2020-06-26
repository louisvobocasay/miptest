import { IsPositive, IsNotEmpty } from 'class-validator';

export interface IComment {
  id: number
  body: string
  postId: number
}

export class VComment {

  id: number

  @IsNotEmpty({ message: "You must be leave something before sending" })
  body: string

  @IsPositive({ message: "post ID is invalid" })
  postId: number

}