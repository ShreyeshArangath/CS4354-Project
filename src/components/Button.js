import PropTypes from 'prop-types'
import {Button as MUIButton} from '@mui/material'

const Button = ({ color, text, onClick }) => {

    return(
        <MUIButton variant="outlined" onClick={onClick}
        className="btn"
         style={{ backgroundColor: color }} >
            {text}
        </MUIButton>
    )
}

Button.defaultProps = {
    color: 'grey'
}


Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button