import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Post Type is input shape of the post database row.
 */
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  comments: string;

  @Column({ nullable: true })
  hearts: number;

  @Column()
  createdDate: string;

  @Column()
  updatedDate: string;
}
