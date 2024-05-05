import ReactPlayer from 'react-player';
import cx from 'classnames';
import styles from './index.module.css';
import { LoadingIcon } from '../icons';


const Player = (
    props : 
    { 
        url?: MediaStream | null, 
        muted?: boolean | undefined, 
        playing?: boolean | undefined
    }
) => {
    const { url, muted, playing } = props;

    return (
        <>
        <div className={cx(styles.playerContainer)}>
            {url && (
                <ReactPlayer
                    url={url}
                    muted={muted}
                    playing={playing}
                    width="100%"
                    height="100%"
                />
            )}
            {!url && (
                <div className='text-center py-40'>
                    <div className=' flex justify-center my-4'>
                        <LoadingIcon w={40} h={40} className=' animate-spin '/>
                    </div>
                    <p className=' text-white '>No media stream available or Loading.</p>
                </div>
            )}
        </div>
        </>
    )
}

export default Player