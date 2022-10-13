import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 120, unique: true })
  email: string;

  @Column({ length: 120 })
  name: string;

  @Column()
  age: number;
}
