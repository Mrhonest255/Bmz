import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SuppervisortResolverBase } from "./base/suppervisort.resolver.base";
import { Suppervisort } from "./base/Suppervisort";
import { SuppervisortService } from "./suppervisort.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Suppervisort)
export class SuppervisortResolver extends SuppervisortResolverBase {
  constructor(
    protected readonly service: SuppervisortService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
