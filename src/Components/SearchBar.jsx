import { BiSearchAlt2 } from 'react-icons/bi'

export default function SearchBar(){
    return(
        <>
            <div id="searchContainer">
                <BiSearchAlt2 id="searchIcon"/>
                <input id="search" type="text" placeholder='Search Posts...'/>
            </div>
        </>
    )
}