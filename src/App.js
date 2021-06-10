import React, { useState } from 'react';
import { Play } from './components/Play';
import { Col, Row, Container, Card } from 'react-bootstrap';



import Bass from './music_files/Bass Warwick heavy funk groove on E 120 BPM.mp3';
import futureFunk from './music_files/120_future_funk_beats_25.mp3';
import stutterBeats from './music_files/120_stutter_breakbeats_16.mp3';
import electricGuitar from './music_files/electric guitar coutry slide 120bpm - B.mp3';
import StompySlosh from './music_files/FUD_120_StompySlosh.mp3';
import groove from './music_files/GrooveB_120bpm_Tanggu.mp3';
import MazePolitics from './music_files/MazePolitics_120_Perc.mp3';
import pas3 from './music_files/PAS3GROOVE1.03B.mp3';
import organSynth from './music_files/SilentStar_120_Em_OrganSynth.mp3';




function App() {
  const [counter, setCounter] = useState(0);
  const [loopHasEnded, setLoopHasEnded] = useState(false);
  const [audioClips, setAudioClips] = useState([
    { sound: Bass, label: 'Funky Bass', shouldBePlaying: false },
    { sound: stutterBeats, label: 'Stuttering Beats', shouldBePlaying: false },
    { sound: futureFunk, label: 'Future Funk', shouldBePlaying: false },
    { sound: StompySlosh, label: 'Stompin rythm', shouldBePlaying: false },
    { sound: electricGuitar, label: 'Electric country guitar', shouldBePlaying: false },
    { sound: groove, label: 'Groovyyy', shouldBePlaying: false },
    { sound: MazePolitics, label: 'The Maze', shouldBePlaying: false },
    { sound: pas3, label: 'Sachi drums', shouldBePlaying: false },
    { sound: organSynth, label: 'Psychedelic Organ', shouldBePlaying: false },
  ])

  const handleStart = value => setCounter(counter + 1)
  const handleStop = value => setCounter(counter > 0 ? counter - 1 : 0)
  const startPlay = value => setLoopHasEnded(false)
  const endLoop = value => setLoopHasEnded(true)
  const updateArray = (i, needToPlay) => {
    let newArr = [...audioClips];
    console.log(`new array is`, { newArr })
    let clip = { ...newArr[i] }
    console.log(`chosen clip is`, { clip })
    clip.shouldBePlaying = needToPlay;
    newArr[i] = clip;
    setAudioClips(newArr);
  }


  return (
    <body>
      <Container>
        <Row>
          <Col sm={4}>
            <h1 className='mb-3 text-center'>Behold your tracks: </h1>
            {audioClips.map((audio, i) => {
              return <Card border='dark' className="text-center">
                <Card.Title> Track {i + 1}: {audio.label} </Card.Title>
              </Card>
            })}
          </Col>
          <Col sm={4}>
            <div className="container">
              <h2 className=' mt-4 text-center'>Play them now!</h2>
              <div>
                {audioClips.map((audio, i) => {
                  return <Play key={i} index={i} onStart={handleStart} onStop={handleStop} count={counter} changeShouldPlay={updateArray} anyPlaying={startPlay} loopEnd={endLoop} canJoin={loopHasEnded} audioClip={audio} />
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </body>
  );
}




export default App;


