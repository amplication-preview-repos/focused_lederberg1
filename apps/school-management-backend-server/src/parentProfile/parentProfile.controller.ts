import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParentProfileService } from "./parentProfile.service";
import { ParentProfileControllerBase } from "./base/parentProfile.controller.base";

@swagger.ApiTags("parentProfiles")
@common.Controller("parentProfiles")
export class ParentProfileController extends ParentProfileControllerBase {
  constructor(protected readonly service: ParentProfileService) {
    super(service);
  }
}
