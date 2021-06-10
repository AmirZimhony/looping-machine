import React from 'react';


export class Play extends React.Component {

  constructor(props) {
    super(props);
  }

  // let audio = new Audio(this.props.audioClip.sound)
  // const on = this.props.on;
  // const onplay = this.props.onPlay;
  // const offplay = this.props.offPlay;
  // const startPlay = this.props.playing;
  // const stopPlay = this.props.stopPlaying;

  render() {
    let audio = new Audio(this.props.audioClip.sound);
    const start = () => {
      if (this.props.on){
        audio.play()
        // startPlay();//change boolean of 'playing' state on App.js to "false"
      // audio.loop = true;
        // onplay();//add 1 to track playing counter
        audio.onended = function () {//function to ensure looping and detect when audio has ended (and others can begin)
          // stopPlay();//change boolean of 'playing' state on App.js to "true", thus enabling another track to start playing
          audio.start();
        }
      }
    }
  
    const stop = () => {
      audio.pause()
      audio.currentTime = 0;
      // offplay();//reduce 1 from track playing counter
    }

    return (
      <div>
        <i class="fas fa-band-aid"></i>
        <p>Hear the sound of {this.props.audioClip.label}!: </p>
        <button onClick={start}>Playyyy day</button>
        <button onClick={stop}>Stop me!</button>
      </div >
    );
  }

}

export default Play;