import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SchoolWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  slug?: StringNullableFilter;
};
