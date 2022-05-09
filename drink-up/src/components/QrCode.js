import qr from "../images/QR_code_drink_up.png"
import { NavLink } from "react-router-dom";


function QrCode() {
    
    
    
    
    
    
    return(
    
    <div>
        <div>
            <img src={qr} alt="QR Code"/>
        </div>
        <div>
            <NavLink className="text-red-500 text-2xl font-bold"to="/PrintMenu">Print QR code</NavLink>
        </div>
    </div>
    )
}

export default QrCode;