import * as graphql from "@nestjs/graphql";
import { FeeStructureResolverBase } from "./base/feeStructure.resolver.base";
import { FeeStructure } from "./base/FeeStructure";
import { FeeStructureService } from "./feeStructure.service";

@graphql.Resolver(() => FeeStructure)
export class FeeStructureResolver extends FeeStructureResolverBase {
  constructor(protected readonly service: FeeStructureService) {
    super(service);
  }
}
