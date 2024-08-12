// rafc - shortcut for making React Demo ConvolverNode

import '../App.css'
import { useEffect } from 'react'

function Navbar(props) {
    useEffect(() => { // Case 4: Run on first Render of Components when unmounted - Conditional Rendering
        alert("Mount")

        return ()=>{ // runs when something is unmounted
            alert("unmounted")
        }
    }, [])

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