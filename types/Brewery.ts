import { Brewery, BreweryUser } from "@/generated/prisma/browser";
import { OptionalNullable } from "@/lib/utils";
import { BaseUser } from "./User";

export interface BaseBreweryUserType extends OptionalNullable<BreweryUser> {}
export interface BreweryUserType extends BreweryUser {
  user?: Partial<BaseUser>;
  brewery?: Partial<BaseBreweryType>;
}
export interface BaseBreweryType extends Omit<
  OptionalNullable<Brewery>,
  "id" | "name"
> {
  id?: string;
  name?: string;
}

export interface BreweryType extends BaseBreweryType {
  users?: Partial<BreweryUserType>[];
}
