import PropTypes from "prop-types"

import React from 'react'
import User from './users/User'

const Main = (props) => {
    const { dataMain } = props
    return (
        //  <div>{console.log(dataMain)}</div>   //
        <div className="container"> <ul className="collection">
            {
                dataMain.map((user,index) => {
                    return <User dataUser={user} key={index} />
                })
            }

        </ul>
        </div>
    )
}

Main.propTypes={
        dataMain:PropTypes.array.isRequired
}

export default Main
