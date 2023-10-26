import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Farm } from "./Farm.entity";

@Entity()
export class Farmer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  lastname: number;

  @OneToMany(() => Farm, (farm) => farm.farmer)
  farms: Farm[];
}
