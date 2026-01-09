import { Module } from "@nestjs/common";
import { ParentProfileModuleBase } from "./base/parentProfile.module.base";
import { ParentProfileService } from "./parentProfile.service";
import { ParentProfileController } from "./parentProfile.controller";
import { ParentProfileResolver } from "./parentProfile.resolver";

@Module({
  imports: [ParentProfileModuleBase],
  controllers: [ParentProfileController],
  providers: [ParentProfileService, ParentProfileResolver],
  exports: [ParentProfileService],
})
export class ParentProfileModule {}
