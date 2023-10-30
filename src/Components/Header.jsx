import { BiSolidUserAccount } from 'react-icons/bi';

export default function Header(){
    return(
        <>
        <div id="header">
            <div id="logoMenu">
            <a href="/blog" id="logoContainer"><img id="logo"src="./src/Images/logo.png" alt="logo" /></a>
            <button id="menu"><BiSolidUserAccount /></button>
            </div>
            <div className='topMenu'>
            <a id="headerA" href="/blog"><header-block>Blog</header-block></a>
            <a id="headerA" href="/rankings"><header-block>Rankings</header-block></a>
            <a id="headerA" href="/leaders"><header-block>Leaders</header-block></a>
            </div>
            <div id="loginSignup">
            <a id="headerA" href="/login"><header-block2>Log In</header-block2></a>
            <a id="headerA" href="/signup"><header-block2>Sign Up</header-block2></a>
            </div>
        </div>
        </>
    )
}