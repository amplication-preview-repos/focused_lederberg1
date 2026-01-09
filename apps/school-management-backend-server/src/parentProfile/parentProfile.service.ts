import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParentProfileServiceBase } from "./base/parentProfile.service.base";

@Injectable()
export class ParentProfileService extends ParentProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
