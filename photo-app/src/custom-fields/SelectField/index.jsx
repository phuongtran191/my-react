import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import React from 'react';
import { ErrorMessage } from "formik";
import "./styles.scss";

function SelectField(props) {
  const { field, form,
    options, label, placeholder, disable
  } = props;
  
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selectedOption = options.find(option => option.value === value);

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;
    const changeEvent = {
      target: {
        name: name,
        value: selectedValue
      }
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        {...field} // name, value, onChange, onBlur
        id={name}
        value={selectedOption}
        onChange={handleSelectedOptionChange}

        options={options}
        placeholder={placeholder}
        disable={disable}
        className={showError ? "is-invalid" : ""}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};
export default SelectField;