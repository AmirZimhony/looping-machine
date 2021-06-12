import React, { useState, useEffect } from 'react';
import { Spinnie } from './Spinner'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';


export function Play(props) {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  const [audio] = useState(new Audio(props.audioClip.sound))
  const [shouldPlay, setShouldPlay] = useState(props.audioClip.shouldBePlaying)


  const start = () => {
    if (props.count === 0) {
      props.anyPlaying();//change 'loopHasEnded' value to false
      console.log(`has the loop ended? the answer:`, props.canJoin);
      setCurrentlyPlaying((currentlyPlaying) => (currentlyPlaying = true));
      audio.play();
      audio.onended = function () {
        props.loopEnd();//change 'loopHasEnded' value to true
        console.log(`has the loop ended? the answer:`, props.canJoin);
        console.log('song ended');
        start();
      }
    }
    else {
      props.changeShouldPlay(props.index, true);// if someone else is playing then add this one to waiting list i.e. shouldBePlaying = true
      setShouldPlay(true);
    }

  }

  useEffect(() => {
    if (currentlyPlaying) {
      props.onStart();// adds +1 to counter of active songs 
    }
    if (!currentlyPlaying){
      props.onStop();//subtracts -1 from counter of active songs
    }
  }, [currentlyPlaying])//when song is played/stopped update active songs counter

  useEffect(() => {
    if (props.canJoin && props.audioClip.shouldBePlaying) {
      joinPlay();
    }
  }, [props.canJoin])//start this track when loop has ended 


  const joinPlay = () => {
    props.anyPlaying();//change 'loopHasEnded' value to false
    setCurrentlyPlaying((currentlyPlaying) => (currentlyPlaying = true));
    audio.play();
    audio.onended = function () {
      props.loopEnd();//change 'loopHasEnded' value to true
      console.log('loop has ended');
      joinPlay();
    }
  }

  const stop = () => {
    if (currentlyPlaying) {
      setCurrentlyPlaying((currentlyPlaying) => (currentlyPlaying = false));
      console.log('PRESSED STOP')
      console.log(audio)
      audio.pause()
      audio.currentTime = 0;
      setShouldPlay(false);
      props.changeShouldPlay(props.index, false);
    }
  }


  return (
    <div>
      <Container>
        <Card border='info' className='m-3'>
          <Card.Body>
            <Card.Title>Hear the sound of {props.audioClip.label}!: </Card.Title>
            <Button id="startMusic" onClick={start}  >Playyyy day</Button>
            <button id="stopMusic" onClick={stop}>Stop me!</button>
          </Card.Body>
          <Spinnie on={currentlyPlaying} waiting={shouldPlay} />
        </Card>
      </Container >

    </div>
  );
}

export default Play