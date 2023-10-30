import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Size } from "../types";
import { Fruit } from "./Fruit.entity";

@Entity()
@Unique(["size", "fruit"])
export class FruitSize extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  size: Size;

  @ManyToOne(() => Fruit, (fruit) => fruit.fruitSizes)
  fruit: Fruit;
}
