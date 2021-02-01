import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Defines the data shape for the users row in the database.
 */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  occupation: string;

  @Column({ nullable: true })
  status: string;
}
