export const LoadingIcon = ({ w = 24, h = 24, className } : { w?: number, h?: number, className?: string }) => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" width={w} height={h} color="#fff" fill="none">
            <path d="M18.001 20C16.3295 21.2558 14.2516 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.8634 21.8906 13.7011 21.6849 14.5003C21.4617 15.3673 20.5145 15.77 19.6699 15.4728C18.9519 15.2201 18.6221 14.3997 18.802 13.66C18.9314 13.1279 19 12.572 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C13.3197 19 14.554 18.6348 15.6076 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        </>
    )
}

export const MicOnIcon = ({ w = 24, h = 24, className } : { w?: number, h?: number, className?: string }) => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={w} height={h} className={className} color="#fff" fill="none">
            <path d="M17 7V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17 7H14M17 11H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22M12 22H15M12 22H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        </>
    )
}

export const MicOffIcon = ({ w = 24, h = 24, className } : { w?: number, h?: number, className?: string }) => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" width={w} height={h} color="#fff" fill="none">
            <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 11C4 15.4183 7.58172 19 12 19M12 19C13.9545 19 15.7454 18.2991 17.1348 17.1348M12 19V22M12 22H15M12 22H9M20 11C20 12.6514 19.4996 14.1859 18.6422 15.4603" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M17.0078 6.99562C17.0078 4.2342 14.7692 2.01562 12.0078 2.01562C10.139 2.01562 8.5379 2.98089 7.67981 4.49962M17.0078 6.99562L13.9798 7.00763M17.0078 6.99562V11.0036M7.00781 6.99562V11.0156C7.00781 13.777 9.24639 16.0156 12.0078 16.0156C13.1432 16.0156 14.1725 15.6252 15.0118 14.9876M16.4465 13.2596C16.8051 12.5701 17.0078 11.8465 17.0078 11.0156V11.0036M14.1829 11.0036H17.0078" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        </>
    )
}

export const VideoOnIcon = ({ w = 24, h = 24, className } : { w?: number, h?: number, className?: string }) => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" width={w} height={h} color="#fff" fill="none">
            <path d="M11 8L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2 11C2 7.70017 2 6.05025 3.02513 5.02513C4.05025 4 5.70017 4 9 4H10C13.2998 4 14.9497 4 15.9749 5.02513C17 6.05025 17 7.70017 17 11V13C17 16.2998 17 17.9497 15.9749 18.9749C14.9497 20 13.2998 20 10 20H9C5.70017 20 4.05025 20 3.02513 18.9749C2 17.9497 2 16.2998 2 13V11Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17 8.90585L17.1259 8.80196C19.2417 7.05623 20.2996 6.18336 21.1498 6.60482C22 7.02628 22 8.42355 22 11.2181V12.7819C22 15.5765 22 16.9737 21.1498 17.3952C20.2996 17.8166 19.2417 16.9438 17.1259 15.198L17 15.0941" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        </>
    )
}

export const VideoOffIcon = ({ w = 24, h = 24, className } : { w?: number, h?: number, className?: string }) => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} width={w} height={h} color="#fff" fill="none">
            <path d="M2.00195 2L21.9772 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16.8517 16.8678C16.7224 17.8062 16.4665 18.4669 15.9596 18.9745C14.9356 19.9997 13.2878 19.9997 9.99206 19.9997H8.99329C5.69755 19.9997 4.04967 19.9997 3.02582 18.9745C2.00195 17.9494 2.00195 16.2995 2.00195 12.9997V10.9997C2.00195 7.69983 2.00195 6.04991 3.02582 5.02478C3.36833 4.68184 3.78068 4.45363 4.30121 4.30176" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8.23633 4.00052C8.47821 4 8.73001 4 8.99223 4H9.99099C13.2868 4 14.9346 4 15.9585 5.02513C16.9823 6.05025 16.9823 7.70017 16.9823 11V12.7574M16.9823 9.23142L19.3019 7.52913C20.7729 6.54074 21.449 7.17197 21.6675 7.64847C22.1192 8.92813 21.9769 11.3936 21.9769 14.5417C21.8703 16.555 21.5953 16.7719 21.3138 16.9939L21.3108 16.9963" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        </>
    )
}

export const LeaveIcon = ({ w = 24, h = 24, className } : { w?: number, h?: number, className?: string }) => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" width={w} height={h} color="#fff" fill="none">
            <path d="M11.9424 20.1646C10.2893 21.1435 8.93948 21.6161 7.57121 21.9011C5.54758 22.3225 3.5708 21.358 2.30947 19.7602C1.77638 19.0849 1.95852 18.3107 2.6524 17.9114L4.21891 17.0098C5.46056 16.2953 6.08139 15.938 6.73959 16.0088C7.39779 16.0797 7.93386 16.5616 9.00601 17.5253L11.9424 20.1646ZM11.9424 20.1646C13.5704 19.2007 15.1184 17.9704 16.5 16.5638" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.1646 11.9475C21.1435 10.2936 21.6161 8.94308 21.9011 7.5741C22.3225 5.54942 21.358 3.57162 19.7602 2.30963C19.0849 1.77627 18.3107 1.9585 17.9114 2.65274L17.0098 4.22006C16.2953 5.46236 15.938 6.08351 16.0088 6.74205C16.0797 7.40059 16.5616 7.93694 17.5253 9.00964L20.1646 11.9475ZM20.1646 11.9475C19.6448 12.8258 19.0474 13.6812 18.3863 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        </>
    )
}

export const UserIcon = ({ w = 24, h = 24, className } : { w?: number, h?: number, className?: string }) => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" width={w} height={h} color="#fff" fill="none">
            <path d="M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        </>
    )
}

export const CopyIcon = ({ w = 24, h = 24, className } : { w?: number, h?: number, className?: string }) => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={w} height={h} className={className} color="#fff" fill="none">
            <path d="M9 15C9 12.1716 9 10.7574 9.87868 9.87868C10.7574 9 12.1716 9 15 9L16 9C18.8284 9 20.2426 9 21.1213 9.87868C22 10.7574 22 12.1716 22 15V16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H15C12.1716 22 10.7574 22 9.87868 21.1213C9 20.2426 9 18.8284 9 16L9 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.9999 9C16.9975 6.04291 16.9528 4.51121 16.092 3.46243C15.9258 3.25989 15.7401 3.07418 15.5376 2.90796C14.4312 2 12.7875 2 9.5 2C6.21252 2 4.56878 2 3.46243 2.90796C3.25989 3.07417 3.07418 3.25989 2.90796 3.46243C2 4.56878 2 6.21252 2 9.5C2 12.7875 2 14.4312 2.90796 15.5376C3.07417 15.7401 3.25989 15.9258 3.46243 16.092C4.51121 16.9528 6.04291 16.9975 9 16.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        </>
    )
}