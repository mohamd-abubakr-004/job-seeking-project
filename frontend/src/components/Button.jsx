/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

const Button = ({children, ...props}) => {
  return (
    <button className="btn btn-active btn-primary bg-blue-600 text-white tracking-[1px]" {...props}>{children}</button>
  )
}

export default Button

Button.prototype = {
    children: PropTypes.string.isRequired,
}