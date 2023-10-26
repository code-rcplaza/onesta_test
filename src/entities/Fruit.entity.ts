import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class Fruit extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
