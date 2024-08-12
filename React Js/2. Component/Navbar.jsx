// rafc - shortcut for making React Demo ConvolverNode

import '../App.css'

function Navbar(props) {
    return (
        <>
            <ul>
                {/* Receiving Props data */}
                <li>{props.logoText}</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Fetch</li>
            </ul>
        </>
    );
}

export default Navbar;