import Select from "react-select";
import { FormGroup, Label } from "reactstrap";
import React from 'react';

function SelectField(props) {
  const { field, form,
    options, label, placeholder, disable
  } = props;
  
  const { name, value } = field;
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
      />
    </FormGroup>
  );
};
export default SelectField;