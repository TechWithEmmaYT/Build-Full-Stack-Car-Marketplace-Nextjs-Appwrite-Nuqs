export type FieldType = {
  name: string;
  fieldType:
    | "text"
    | "number"
    | "select"
    | "textarea"
    | "multiselect"
    | "currency"
    | "phone";
  label: string;
  placeholder?: string;
  col?: number;
  options?: { key?: string; value: string; label: string }[];
  required?: boolean;
  disabled?: boolean;
};
