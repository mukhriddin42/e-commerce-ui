import React from 'react'

export default function Cart() {

    const headInfo = [
        {id: 0, title: 'Home', color: 'text-green-600'},
        {id: 1, title: 'Shop'},
        {id: 2, title: 'cart'}
    ]

    return (
        <>
            <div className="">
                <div className="">
                    {
                        headInfo.map((item, index)=>{
                            return(
                                <ul>
                                    {item.title}
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
