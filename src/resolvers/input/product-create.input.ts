import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
class ProductCreateInput {
  @Field(() => String, { description: 'name of the product' })
  name: string;
  @Field(() => String, { description: 'manufacturer of the product' })
  manufacturer: string;
  @Field(() => Int, { description: 'quantity of the product' })
  quantity: number;
  @Field(() => Float, { description: 'value of the product' })
  value: number;
}

export default ProductCreateInput;