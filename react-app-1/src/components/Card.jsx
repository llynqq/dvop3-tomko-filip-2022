import React from 'react'

export const Kard = () => {
    return (
        <div>Kard</div>
    )
}


const Card = (props) => {
    const { data } = props
    console.log(`data = ${data}`);
    return (
        <div>Card
            <p>data z app.jsx = {data}</p>
        </div>
    )
}

export default Card