import * as graphql from "@nestjs/graphql";
import { TeacherProfileResolverBase } from "./base/teacherProfile.resolver.base";
import { TeacherProfile } from "./base/TeacherProfile";
import { TeacherProfileService } from "./teacherProfile.service";

@graphql.Resolver(() => TeacherProfile)
export class TeacherProfileResolver extends TeacherProfileResolverBase {
  constructor(protected readonly service: TeacherProfileService) {
    super(service);
  }
}
