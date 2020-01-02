import React from 'react';

import Button from '@material-ui/core/Button';

import ticet_icon from '../../resources/images/icons/ticket.png'; 

const button = (props) => {
    return (
        <Button
            href = {props.link} 
            variant="contained"
            size="small"
            style={{
                background: props.bck,
                color: props.color
            }}
            >
            <img
                 src={ticet_icon}
                className="iconImage"
                alt="icon_button"
                />
            {props.text}
        </Button>
    );
};

export default button;