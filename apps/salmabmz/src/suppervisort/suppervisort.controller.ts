import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SuppervisortService } from "./suppervisort.service";
import { SuppervisortControllerBase } from "./base/suppervisort.controller.base";

@swagger.ApiTags("suppervisorts")
@common.Controller("suppervisorts")
export class SuppervisortController extends SuppervisortControllerBase {
  constructor(
    protected readonly service: SuppervisortService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
