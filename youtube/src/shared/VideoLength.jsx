import React from 'react'
import moment from 'moment'

const VideoLength = ({ time }) => {
    const videoLengthInSeconds = time > 3599 ? moment().startOf("day").seconds(time).format("H:mm:ss") : moment().startOf("day").seconds(time).format("mm:ss");
    return (
        <div className='absolute bottom-0 right-0 m-[4px] bg-[#000000cc] px-1 text-white rounded-md'>
            {videoLengthInSeconds}
        </div>
    )
}

export default VideoLength