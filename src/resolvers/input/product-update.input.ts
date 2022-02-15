import { Field, InputType, PartialType } from "@nestjs/graphql";
import ProductCreateInput from "./product-create.input";

@InputType()
export default class ProductUpdateInput extends
PartialType(ProductCreateInput) {
    @Field(() => String)
    id: string;
}