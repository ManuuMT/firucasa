import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne,
    BaseEntity
} from "typeorm";
import { Shelter } from "./shelter.entity";
import { DogGender, DogSize, Image } from "../models/Dog.model";

@Entity()
export class Dog extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: "enum",
        enum: DogGender
    })
    gender: DogGender;

    @Column({
        type: "enum",
        enum: DogSize
    })
    size: DogSize;

    @Column({ nullable: true })
    ageYears?: number;

    @Column({ nullable: true })
    ageMonths?: number;

    @Column({ nullable: true })
    weight?: number;

    @Column()
    description: string;

    @Column("jsonb", { default: [] })
    photos: Image[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Shelter, shelter => shelter.dogs)
    shelter: Shelter;
}
