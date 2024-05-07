import { LeaveIcon, MicOffIcon, MicOnIcon, VideoOffIcon, VideoOnIcon, } from "../icons";
import styles from './toggle-btn.module.css';

const ToggleBtn = (props: 
    { 
        mute: boolean, 
        playing: boolean, 
        toggleAudio: () => void, 
        toggleVideo: () => void,
        leaveRoom: () => void,
    }) => {
    const { mute, playing, toggleAudio, toggleVideo, leaveRoom } = props;

    return (
        <>
            <div className={styles.toggleBtn}>
                <button onClick={toggleAudio} className={ !mute ? styles.Active : styles.unActive }>
                    { !mute ? <MicOnIcon/ > : <MicOffIcon /> }
                </button>
                <button onClick={toggleVideo} className={ playing ? styles.Active : styles.unActive }>
                    { playing ? <VideoOnIcon /> : <VideoOffIcon /> }
                </button>
                <button onClick={leaveRoom} className={ styles.Active }>
                    <LeaveIcon />
                </button>
            </div>
        </>
    )
}

export default ToggleBtn