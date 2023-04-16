import { Column, ManyToOne, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  authorId: number;

  @ManyToOne(() => User, (user) => user.posts)
  author: User;
}
