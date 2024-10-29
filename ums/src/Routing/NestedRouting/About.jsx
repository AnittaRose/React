import { useParams } from "react-router-dom";

function About() {
    const {username} = useParams();

    return (
        <>
        <h1>About {username}</h1>
        </>
    )
}
export default About;