import { Suppervisort as TSuppervisort } from "../api/suppervisort/Suppervisort";

export const SUPPERVISORT_TITLE_FIELD = "id";

export const SuppervisortTitle = (record: TSuppervisort): string => {
  return record.id?.toString() || String(record.id);
};
