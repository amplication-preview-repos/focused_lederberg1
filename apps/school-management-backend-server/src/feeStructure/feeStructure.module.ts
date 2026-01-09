import { Module } from "@nestjs/common";
import { FeeStructureModuleBase } from "./base/feeStructure.module.base";
import { FeeStructureService } from "./feeStructure.service";
import { FeeStructureController } from "./feeStructure.controller";
import { FeeStructureResolver } from "./feeStructure.resolver";

@Module({
  imports: [FeeStructureModuleBase],
  controllers: [FeeStructureController],
  providers: [FeeStructureService, FeeStructureResolver],
  exports: [FeeStructureService],
})
export class FeeStructureModule {}
