// import { useParams } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import Player from "../components/player";
import useMediaStream from "../hooks/useMediaStream";

const Room = () => {
    // const { id } = useParams();
    const { stream } = useMediaStream();

    return (
        <>
        <MainLayout>
            
            <Player url={stream} playing={true} />

        </MainLayout>
        </>
    )
}

export default Room