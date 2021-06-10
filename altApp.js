import Header from './components/Header';
import React from 'react';
import MusicBox from './components/MusicBox';
import {Play} from './components/Play';
import audioClips from './components/audioclips';

import  Bass from './music_files/Bass Warwick heavy funk groove on E 120 BPM.mp3';
import  futureFunk from './music_files/120_future_funk_beats_25.mp3';
import  stutterBeats from './music_files/120_stutter_breakbeats_16.mp3';
import  electricGuitar from './music_files/electric guitar coutry slide 120bpm - B.mp3';
import  StompySlosh from './music_files/FUD_120_StompySlosh.mp3';
import  groove from './music_files/GrooveB_120bpm_Tanggu.mp3';
import  MazePolitics from './music_files/MazePolitics_120_Perc.mp3';
import  pas3 from './music_files/PAS3GROOVE1.03B.mp3';
import  organSynth from './music_files/SilentStar_120_Em_OrganSynth.mp3';
import reactDom from 'react-dom';

function App(){
    this.state = {
      counter: 0, 
      playing: true,
      audioClips: [
        {sound: Bass, label: 'Funky Bass', playing: false},
        {sound: futureFunk, label: 'Future Funk', playing: false},
        {sound: stutterBeats, label: 'Stuttering Beats', playing: false},
        {sound: electricGuitar, label: 'Electric country guitar', playing: false},
        {sound: StompySlosh, label: 'Stompin rythm', playing: false},
        {sound: groove, label: 'Groovyyy', playing: false},
        {sound: MazePolitics, label: 'The Maze', playing: false},
        {sound: pas3, label: 'Sachi drums', playing: false},
        {sound: organSynth, label: 'Psychedelic Organ', playing: false},
      ]
    };
  

  playingNow = () => {
    this.setState({counter: this.state.counter + 1});
  }

  finishedPlaying = () => {
    if (this.state.counter > 0){
      this.setState({counter: this.state.counter - 1});
    }
  }

  setPlaying = (index, playing) => {
    let audioClips = [...this.state.audioClips];
    let clip = {...audioClips[index]};
    clip.playing = playing;
    audioClips[index] = clip;
    this.setState({audioClips});
  }

  startPlaying = (index) => {
    this.setPlaying(index, true);
  }

  stopPlaying = (index) => {
    this.setPlaying(index, false);
  }

   
    return (
      <div className="container">
        {this.state.audioClips.map((audio, i) => {
          return <Play on={this.startPlaying} audioClip={audio} playing={this.startPlaying(index)} stopPlaying={this.stopPlaying(index)} onPlay={this.playingNow} offPlay={this.finishedPlaying} index={i}/>
        })}
     </div>
    );
  
}


export default App;


