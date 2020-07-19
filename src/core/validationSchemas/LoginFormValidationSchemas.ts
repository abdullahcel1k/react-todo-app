import * as Yup from "yup";
import ValidationMessageEnums from "../enums/ValidationMessageEnums";

const LoginFormValidationSchemas = {
  username: Yup.string()
    .nullable()
    .typeError(ValidationMessageEnums.REQUIRED)
    .required(ValidationMessageEnums.REQUIRED),
  password: Yup.string()
    .nullable()
    .typeError(ValidationMessageEnums.REQUIRED)
    .required(ValidationMessageEnums.REQUIRED)
    .min(3, ValidationMessageEnums.MINLENGTH)
    .max(8, ValidationMessageEnums.MAXLENGTH),
};

export default LoginFormValidationSchemas;
