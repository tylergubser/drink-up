import React from 'react';
import qr from "../images/QR_code_drink_up.png"

const ComponentToPrint = React.forwardRef((props, ref) => {



    return (
        <div ref={ref}>
            <img src={qr} alt="QR Code"/>
        </div>)
})

export default ComponentToPrint;