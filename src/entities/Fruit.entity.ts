import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FruitSize } from "./FruitSize.entity";

@Entity()
export class Fruit extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => FruitSize, (fruitSize) => fruitSize.fruit)
  fruitSizes: FruitSize[];
}
