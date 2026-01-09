import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeeStructureServiceBase } from "./base/feeStructure.service.base";

@Injectable()
export class FeeStructureService extends FeeStructureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
