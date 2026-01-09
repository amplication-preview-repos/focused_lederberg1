import * as graphql from "@nestjs/graphql";
import { ParentProfileResolverBase } from "./base/parentProfile.resolver.base";
import { ParentProfile } from "./base/ParentProfile";
import { ParentProfileService } from "./parentProfile.service";

@graphql.Resolver(() => ParentProfile)
export class ParentProfileResolver extends ParentProfileResolverBase {
  constructor(protected readonly service: ParentProfileService) {
    super(service);
  }
}
