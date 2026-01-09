import { Module } from "@nestjs/common";
import { TeacherProfileModuleBase } from "./base/teacherProfile.module.base";
import { TeacherProfileService } from "./teacherProfile.service";
import { TeacherProfileController } from "./teacherProfile.controller";
import { TeacherProfileResolver } from "./teacherProfile.resolver";

@Module({
  imports: [TeacherProfileModuleBase],
  controllers: [TeacherProfileController],
  providers: [TeacherProfileService, TeacherProfileResolver],
  exports: [TeacherProfileService],
})
export class TeacherProfileModule {}
