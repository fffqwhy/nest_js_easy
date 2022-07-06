import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn({ name: 'userId' })
  userId: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'sex' })
  sex: string;

  @Column({ name: 'age', default: 1 })
  age: number;
}
