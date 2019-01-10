import React from 'react';

const Navbar = ({ props }) => {
    return (
        <div className="fl w-100 pa2">
            <div className="w-100 nav-logo h3 contain bg-center" style={{backgroundImage: "url('https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz@2x-f98247cb30aa.png')" }}>
            </div>
        </div>
    )
}

export default Navbar;