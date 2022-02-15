import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import Product from "src/database/models/product.entity";
import RepoService from "src/repo.service";
import ProductCreateInput from "./input/product-create.input";
import ProductUpdateInput from "./input/product-update.input";

@Resolver(() => Product)
class ProductResolver {
  constructor(private readonly repoService: RepoService) {}

  @Mutation(() => Product)
  createProduct(@Args('productCreateInput') productCreateInput: ProductCreateInput) {
    return this.repoService.create(productCreateInput);
  }

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.repoService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.repoService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(@Args('productUpdateInput') productUpdateInput: ProductUpdateInput) {
    return this.repoService.update(productUpdateInput.id, productUpdateInput);
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => String }) id: string) {
    return this.repoService.remove(id);
  }
}

export default ProductResolver;