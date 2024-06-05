import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SuppervisortServiceBase } from "./base/suppervisort.service.base";

@Injectable()
export class SuppervisortService extends SuppervisortServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
