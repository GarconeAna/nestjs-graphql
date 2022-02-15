import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import Product from "src/database/models/product.entity";
import ProductCreateInput from "src/resolvers/input/product-create.input";
import { Repository } from "typeorm";
import ProductUpdateInput from "./resolvers/input/product-update.input";

@Injectable()
class RepoService {
    public constructor(
        @InjectRepository(Product) public readonly productRepository: Repository<Product>
    ) {}

    async create(productCreateInput: ProductCreateInput) : Promise<Product> {
        const product = this.productRepository.create(productCreateInput);
        return await this.productRepository.save(product);
    }

    async findAll(): Promise<Array<Product>> {
        return await this.productRepository.find();
    }

    async findOne (id: string) : Promise<Product> {
        const product = await this.productRepository.findOne(id);
        if (!product) {
            throw new NotFoundException(`Product #${id} not found`);
        }
        return product;
    }

    async update(
        id: string,
        productUpdateInput: ProductUpdateInput,
    ) : Promise<Product> {
        const product = await this.productRepository.preload({
            id: id,
            ...productUpdateInput,
        });
        if (!product) {
            throw new NotFoundException(`Product #${id} not found`);
        }
        return this.productRepository.save(product);
    }

    async remove(id: string) : Promise<Product> {
        const product = await this.findOne(id);
        await this.productRepository.remove(product);
        return {
            id: id,
            name: '',
            manufacturer: '',
            quantity: 0,
            value: 0,
        };
    }
}

export default RepoService;