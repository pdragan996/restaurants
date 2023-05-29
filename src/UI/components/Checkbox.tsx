import { FieldValues, UseFormRegister } from 'react-hook-form';
import '../styles/_shared-style.scss';
import '../styles/components/Checkbox.scss';

interface CheckboxProps {
  register: UseFormRegister<FieldValues>;
  label: string;
}

const Checkbox = ({label, register}: CheckboxProps) => {

  return <>
    <div className="checkbox-container flex flex--column flex--start p8">
      <label>{label}</label>
      <input
        className="checkbox"
        type={'checkbox'}
        {...register(label)}
      />
    </div>
  </>;
};

export default Checkbox;