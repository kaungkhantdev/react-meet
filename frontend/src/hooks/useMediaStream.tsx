import {useState, useEffect} from 'react'

const useMediaStream = () => {
    const [state, setState] = useState<MediaStream | null>(null)
    const [error, setError] = useState<Error | null>(null);
    // const isStreamSet = useRef(false)

    useEffect(() => {
        // if (isStreamSet.current) return;
        // isStreamSet.current = true;
        (async function initStream() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true
                })
                console.log("setting your stream")
                setState(stream)
            } catch (e) {
                console.log("Error in media navigator", e)
                setError(e as Error);
            }
        })()
    }, [])

    return {
        stream: state,
        error
    }
}

export default useMediaStream