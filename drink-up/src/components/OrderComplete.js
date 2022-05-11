import { useEffect } from 'react'

function OrderComplete() {
    useEffect(() => {       window.scrollTo(0, 0);     }, []);

return(
    <div className="  bg-cover w-screen h-screen bg-[url('https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/11/6/1415269419969/cocktails.gif')] ">
        <h1 className="text-white text-center text-2xl font-bold">Thank you! When your order is complete you will recieve a Text message</h1>
    </div>
)


}

export default OrderComplete;