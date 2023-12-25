import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import { Shelter } from "./shelter.entity";
import { DogSize, Image } from "../models/Dog.model";

@Entity()
export class Dog extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @Column()
  // gender: string;

  // @Column({
  //   type: "enum",
  //   enum: DogSize,
  // })
  // specie: DogSize;

  // @Column()
  // ageYears: number;

  // @Column()
  // ageMonths: number;

  // @Column()
  // weight: number;

  // @Column()
  // description: string;

  // @Column()
  // size: string;

  // @Column("jsonb", { array: true, default: [] })
  // photos: Image[];

  @Column("jsonb", { nullable: true })
  photo: Image | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Shelter, (shelter) => shelter.dogs)
  shelter: Shelter;
}
