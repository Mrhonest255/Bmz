/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Suppervisort } from "./Suppervisort";
import { SuppervisortCountArgs } from "./SuppervisortCountArgs";
import { SuppervisortFindManyArgs } from "./SuppervisortFindManyArgs";
import { SuppervisortFindUniqueArgs } from "./SuppervisortFindUniqueArgs";
import { DeleteSuppervisortArgs } from "./DeleteSuppervisortArgs";
import { SuppervisortService } from "../suppervisort.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Suppervisort)
export class SuppervisortResolverBase {
  constructor(
    protected readonly service: SuppervisortService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Suppervisort",
    action: "read",
    possession: "any",
  })
  async _suppervisortsMeta(
    @graphql.Args() args: SuppervisortCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Suppervisort])
  @nestAccessControl.UseRoles({
    resource: "Suppervisort",
    action: "read",
    possession: "any",
  })
  async suppervisorts(
    @graphql.Args() args: SuppervisortFindManyArgs
  ): Promise<Suppervisort[]> {
    return this.service.suppervisorts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Suppervisort, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Suppervisort",
    action: "read",
    possession: "own",
  })
  async suppervisort(
    @graphql.Args() args: SuppervisortFindUniqueArgs
  ): Promise<Suppervisort | null> {
    const result = await this.service.suppervisort(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Suppervisort)
  @nestAccessControl.UseRoles({
    resource: "Suppervisort",
    action: "delete",
    possession: "any",
  })
  async deleteSuppervisort(
    @graphql.Args() args: DeleteSuppervisortArgs
  ): Promise<Suppervisort | null> {
    try {
      return await this.service.deleteSuppervisort(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
