import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Fruit } from "./Fruit.entity";

export enum Size {
  small = "small",
  medium = "medium",
  large = "large",
  extraLarge = "extra large",
}

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
