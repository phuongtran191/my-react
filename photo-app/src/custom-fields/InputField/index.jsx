import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import React from 'react';
import { ErrorMessage } from "formik";
import "./styles.scss";

function InputField(props) {
  const { field, form,
    type, label, placeholder, disable
  } = props;
  
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Input
        {...field} // name, value, onChange, onBlur
        id={name}

        type={type}
        placeholder={placeholder}
        disable={disable}

        invalid={showError}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};
export default InputField;