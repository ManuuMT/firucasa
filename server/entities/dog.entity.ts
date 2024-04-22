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
import { DogGender, DogSize, Image, Animals } from "../models/Dog.model";

@Entity()
export class Dog extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: Animals,
        nullable: false,
        default: Animals.DOG
    })
    animal?: Animals;

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

    @Column({ nullable: true, default: null })
    breed?: string;

    @Column("jsonb", { default: [] })
    photos: Image[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Shelter, shelter => shelter.dogs)
    shelter: Shelter;
}
