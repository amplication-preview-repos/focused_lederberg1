import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TeacherProfileService } from "./teacherProfile.service";
import { TeacherProfileControllerBase } from "./base/teacherProfile.controller.base";

@swagger.ApiTags("teacherProfiles")
@common.Controller("teacherProfiles")
export class TeacherProfileController extends TeacherProfileControllerBase {
  constructor(protected readonly service: TeacherProfileService) {
    super(service);
  }
}
