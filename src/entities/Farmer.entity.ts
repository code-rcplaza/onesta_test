import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./Client.entity";
import { Farm } from "./Farm.entity";

@Entity()
export class Farmer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  mail: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @OneToMany(() => Farm, (farm) => farm.farmer)
  farms: Farm[];

  @ManyToMany(() => Client, (client) => client.farmers)
  @JoinTable()
  clients: Client[];
}
