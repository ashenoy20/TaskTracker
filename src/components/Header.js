import PropTypes from 'prop-types'
import Button from './Button'
/**
 * Props are basically values for attributes passed in
 * for the component
 * 
 * Its a javascript object that can be destructured if you only
 * want to take in specific fields
 * 
 */

const Header = ({title, onAdd, showAdd}) => {

    return (
      <header className='header'>
          <h1>{title}</h1>
          <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
      </header>
    )
}

//Gives default values for propTypes
Header.defaultProps = {
    title: 'Task Tracker'
}

//Validates PropTypes
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
