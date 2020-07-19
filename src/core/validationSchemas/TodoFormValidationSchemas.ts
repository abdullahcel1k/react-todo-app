import * as Yup from "yup";
import ValidationMessageEnums from "../enums/ValidationMessageEnums";

const TodoFormValidationSchemas = {
  title: Yup.string()
    .nullable()
    .typeError(ValidationMessageEnums.REQUIRED)
    .required(ValidationMessageEnums.REQUIRED),
  status: Yup.string()
    .nullable()
    .typeError(ValidationMessageEnums.REQUIRED)
    .required(ValidationMessageEnums.REQUIRED),
  priority: Yup.string()
    .nullable()
    .typeError(ValidationMessageEnums.REQUIRED)
    .required(ValidationMessageEnums.REQUIRED)
};

export default TodoFormValidationSchemas;
