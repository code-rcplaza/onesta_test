import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Farmer } from "./Farmer.entity";

@Entity()
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  mail: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @ManyToMany(() => Farmer, (farmer) => farmer.clients)
  farmers: Farmer[];
}
