import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Farmer } from "./Farmer.entity";

@Entity()
@Unique(["name", "location"])
export class Farm extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @ManyToOne(() => Farmer, (farmer) => farmer.farms)
  farmer: Farmer;
}
