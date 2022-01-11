import React from 'react'
import './salebox.css'
import Salecard from './Salecard'


function SaleList() {
    return (
        <>
            <div className="container salelist">
                <Salecard />
                <Salecard />
            </div>
        </>
    )
}

export default SaleList
