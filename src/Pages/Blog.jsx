import CreatePost from "../Components/CreatePost";
import Posts from "../Components/Posts";
import SearchBar from "../Components/SearchBar";

export default function Blog(){
    return(
        <>
            <SearchBar />
            <CreatePost />
            <Posts />
        </>
    )
}