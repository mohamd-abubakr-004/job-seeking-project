import PropTypes from 'prop-types'
import { forwardRef } from 'react';

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const Input = ({type, placeholder,...props}, ref) => {
  return (
    <input {...props} ref={ref} type={type} placeholder={placeholder} className="input input-bordered input-secondary w-full max-w-md" />
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default forwardRef(Input);

Input.prototype = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}
