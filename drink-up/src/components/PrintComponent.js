import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";
function PrintComponent() {
    let componentRef = useRef();
    return (
        <>
            <div className="">
                {/* button to trigger printing of target component */}
                {/* component to be printed */}
                <div >
                    <ComponentToPrint ref={(el) => (componentRef = el)} />
                </div>
                <footer className="flex flex-col justify-center items-center absolute b-0 w-full bg-inherit">
                    <div className="text-center">
                        <div className="flex flex-col justify-center items-center">
                            <ReactToPrint
                                trigger={() => <h1 className="p-2 text-red-500 text-center cursor-pointer text-2xl font-bold ">Print</h1>}
                                content={() => componentRef}
                            />
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
export default PrintComponent