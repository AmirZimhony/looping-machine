//completely redundant currently

import Play from './Play'

const audioClips = ({ clips }) => {
    var songs = []
    for ( var i = 0; i < clips.length; i++){
        songs.push(<Play audioClip= {clips[i].sound}/>)
    }
    return (
            <tbody> {songs} </tbody>
    );
}


export default audioClips