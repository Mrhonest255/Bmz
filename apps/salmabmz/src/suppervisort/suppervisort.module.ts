import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SuppervisortModuleBase } from "./base/suppervisort.module.base";
import { SuppervisortService } from "./suppervisort.service";
import { SuppervisortController } from "./suppervisort.controller";
import { SuppervisortResolver } from "./suppervisort.resolver";

@Module({
  imports: [SuppervisortModuleBase, forwardRef(() => AuthModule)],
  controllers: [SuppervisortController],
  providers: [SuppervisortService, SuppervisortResolver],
  exports: [SuppervisortService],
})
export class SuppervisortModule {}
