import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,  
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'products' }) 
export default class Product {

  @PrimaryGeneratedColumn("uuid")
  @Field(() => String, { description: 'id of the product' })
  id: string;

  @Column()
  @Field(() => String, { description: 'name of the product' })
  name: string;

  @Column()
  @Field(() => String, { description: 'name of the product manufacturer' })
  manufacturer: string;

  @Column()
  @Field(() => Int, { description: 'quatity of the product' })
  quantity: number;

  @Column()
  @Field(() => Float, { description: 'value of the product' })
  value: number;
}