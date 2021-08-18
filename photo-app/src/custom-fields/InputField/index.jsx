import { FormGroup, Input } from "reactstrap";

function InputField(props) {
  const { field, form,
    type, label, placeholder, disable
  } = props;
  
  const { name } = field;
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        {...field} // name, value, onChange, onBlur
        id={name}

        type={type}
        placeholder={placeholder}
        disable={disable}
      />
    </FormGroup>
  );
};
export default InputField;