import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FeeStructureService } from "./feeStructure.service";
import { FeeStructureControllerBase } from "./base/feeStructure.controller.base";

@swagger.ApiTags("feeStructures")
@common.Controller("feeStructures")
export class FeeStructureController extends FeeStructureControllerBase {
  constructor(protected readonly service: FeeStructureService) {
    super(service);
  }
}
