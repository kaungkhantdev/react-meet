import { useState } from "react"
import { useSocket } from "../context/socket"

const usePlayer = () => {

    // const socket = useSocket();

    const [players, setPlayers] = useState({})



    return { players, setPlayers }
   
}

export default usePlayer