import React from 'react'

const Header = (props) => {
    const { handleIconClick, handleRefreshClick } = props;
    return (
        <nav>
            <div className="nav-wrapper">

                <a href="#" className="brand-logo center">React Users</a>
                <ul className="right hide-on-med-and-down">
                <li><a onClick={handleIconClick} ><i className="material-icons">view_module</i></a></li>
                
               
                <li><a onClick={handleRefreshClick}><i className="material-icons">refresh</i></a></li>
                </ul>
            </div>

        </nav>
    )
}

export default Header