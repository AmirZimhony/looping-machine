import React, { useState, useEffect } from 'react';
// import style from "src\style.js"
import { Spinnie } from './Spinner'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import { render } from '@testing-library/react';

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
      props.changeShouldPlay(props.index, true);//WORKS. if someone else is playing then add this one to waiting list i.e. shouldBePlaying = true
    }

  }

  useEffect(() => {
    if (currentlyPlaying) {
      for (let j = 0; j < 20; j++){
      console.log(`${j}`)
      }
      props.onStart();///WORKS necessary, adds +1 to counter of active songs 
    }
    if (!currentlyPlaying){
      console.log('update counter - 1')
      props.onStop();//necessary, subtracts -1 from counter of active songs
    }
  }, [currentlyPlaying])//previously props.canJoin

  useEffect(() => {
    if (props.canJoin && props.audioClip.shouldBePlaying) {
      joinPlay();
    }
  }, [props.canJoin])//previously props.canJoin

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



  // if (props.join(props.index)){
  //   console.log('in the join in play')
  //   joinPlay();
  // }

  const stop = () => {
    if (currentlyPlaying) {
      setCurrentlyPlaying((currentlyPlaying) => (currentlyPlaying = false));
      console.log('PRESSED STOP')
      console.log(audio)
      audio.pause()
      audio.currentTime = 0;
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
          <Spinnie on={currentlyPlaying} />
        </Card>
      </Container >

    </div>
  );
}

export default Play