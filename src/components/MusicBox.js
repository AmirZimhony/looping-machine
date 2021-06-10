//completely redundant currently, maybe take syling from here

// cosnt songName = require('../music_files/')

const MusicBox = ({ title }) => {
    return (
        <div class="col-md-6">
            <div class="card-body">
                <h4 class="card-title"> {title}</h4>
                <p class="card-text">A beautiful electric guitar </p>
                <button className='btn-play'>Play</button>
                <button className='btn-stop'>Stop</button>
            </div>
        </div>
    )
}

MusicBox.defaultProps = {
    title: 'songName',
}

export default MusicBox
