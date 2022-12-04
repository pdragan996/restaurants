import React from 'react';
import './Textarea.scss';

const Textarea = React.forwardRef((props: TextareaProps, ref: any) => {
  return (
    <div className="textarea p8">
      <label className="textarea__label">{props.label}</label>
      <textarea className="textarea__field p8" ref={ref}>
      
      </textarea>
    </div>
  )
})

export default Textarea;

interface TextareaProps {
  label: string;
  value?: string;
}