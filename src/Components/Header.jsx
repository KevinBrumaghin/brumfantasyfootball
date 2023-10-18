import { BiMenuAltLeft } from 'react-icons/bi';

export default function Header(){
    return(
        <>
        <div id="header">
            <div id="logoMenu">
            <a href="" id="logoContainer"><img id="logo"src="./src/Images/logo.png" alt="logo" /></a>
            <button id="menu"><BiMenuAltLeft /></button>
            </div>
            <a id="headerA" href=""><header-block>Home</header-block></a>
            <a id="headerA" href=""><header-block>Rankings</header-block></a>
            <a id="headerA" href=""><header-block>Trade Analyzer</header-block></a>
            <div id="loginSignup">
            <a id="headerA" href=""><header-block2>Log In</header-block2></a>
            <a id="headerA" href=""><header-block2>Sign Up</header-block2></a>
            </div>
        </div>
        </>
    )
}