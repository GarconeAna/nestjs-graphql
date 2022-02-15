import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Product from "./database/models/product.entity";
import RepoService from './repo.service';

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    providers: [RepoService],
    exports: [RepoService],
})

class RepoModule {}
export default RepoModule;