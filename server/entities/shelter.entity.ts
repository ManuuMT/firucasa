import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Dog } from "./dog.entity";
import { Image } from "../models/Dog.model";

@Entity()
export class Shelter extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ nullable: false, default: "" })
    country: string;

    @Column({ nullable: false, default: "" })
    province: string;

    @Column({ nullable: false, default: "" })
    city: string;

    @Column("jsonb", { default: { public_id: "", url: "" } })
    logo: Image;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Dog, dog => dog.shelter)
    dogs: Dog[];
}
