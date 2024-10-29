import { useParams } from "react-router-dom";

function Home() {
    const {username} = useParams();

    return (
        <>
        <h1>Home {username}</h1>
        </>
    )
}
export default Home;