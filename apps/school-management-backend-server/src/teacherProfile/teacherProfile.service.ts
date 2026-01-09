import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeacherProfileServiceBase } from "./base/teacherProfile.service.base";

@Injectable()
export class TeacherProfileService extends TeacherProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
