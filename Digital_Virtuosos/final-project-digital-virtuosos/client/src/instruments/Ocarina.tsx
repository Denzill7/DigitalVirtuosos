import { useState, useEffect } from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import './instrumentstyling/Ocarina.css'

let storedTimestamp = 0
let holes: String[] = []
let notePlaying = false

function Ocarina({ synth, setSynth }: InstrumentProps): JSX.Element {
  // const keys = List([
  //   { note: 'C', idx: 0 },
  //   { note: 'D', idx: 1 },
  //   { note: 'E', idx: 2 },
  //   { note: 'F', idx: 3 },
  //   { note: 'G', idx: 4 },
  //   { note: 'A', idx: 5 },
  //   { note: 'B', idx: 6 },
  // ]);

  const [aColor, setAColor] = useState("noFillHole")
  const [sColor, setSColor] = useState("noFillHole")
  const [dColor, setDColor] = useState("noFillHole")
  const [fColor, setFColor] = useState("noFillHole")

  function playNote(){
    //console.log(holes)
    if (holes.length === 0){
      synth.triggerAttack(`C5`)
      return
    }
    // default is all holes are pressed
    let note = "C"
    if (holes.length === 1){
      if (holes[0] === "a" || holes[0] === "s"){
        note = "B"
      }
      else{ // if d or f
        note = "A"
      }
    }
    if (holes.length === 2){
      if ((holes.includes("a") && holes.includes("d")) || (holes.includes("s") && holes.includes("f"))){
        note = "F"
      }
      else{ // if as or df or af or sd
        note = "G"
      }
    }
    if (holes.length === 3){
      if (!holes.includes("a") || !holes.includes("s")){
        note = "D"
      }
      else{ // if not d or f
        note = "E"
      }
    }
    synth.triggerAttack(`${note}4`)
  }

  // const setOscillator = (newType: Tone.ToneOscillatorType) => {
  //   setSynth(oldSynth => {
  //     oldSynth.disconnect();

  //     return new Tone.Synth({
  //       oscillator: { type: newType } as Tone.OmniOscillatorOptions,
  //     }).toDestination();
  //   });
  // };

  // const oscillators: List<OscillatorType> = List([
  //   'sine',
  //   'sawtooth',
  //   'square',
  //   'triangle',
  //   'fmsine',
  //   'fmsawtooth',
  //   'fmtriangle',
  //   'amsine',
  //   'amsawtooth',
  //   'amtriangle',
  // ]) as List<OscillatorType>;

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
  });

  function handleKeyDown(e: KeyboardEvent){
    //console.log(e)
    if (e.timeStamp === storedTimestamp || e.repeat){
      //console.log("r")
      return
    }
    //console.log("new key press")
    storedTimestamp = e.timeStamp
    if (e.key === "a"){
      //console.log("A")
      if (!holes.includes("a")){
        holes.push("a")
      }
      setAColor("fillHole")
      //console.log(holes)
    }
    if (e.key === "s"){
      //console.log("S")
      if (!holes.includes("s")){
        holes.push("s")
      }
      setSColor("fillHole")
      //console.log(holes)
    }
    if (e.key === "d"){
      //console.log("z")
      if (!holes.includes("d")){
        holes.push("d")
      }
      setDColor("fillHole")
      //console.log(holes)
    }
    if (e.key === "f"){
      //console.log("x")
      if (!holes.includes("f")){
        holes.push("f")
      }
      setFColor("fillHole")
      //console.log(holes)
    }
    // If there's already a note playing and the key press has changed we need to change the note.
    if (notePlaying){
      playNote()
    }
    if (e.key === " "){
      notePlaying = true
      playNote()
    }
  }

  let where

  function handleKeyUp(e: KeyboardEvent){
    //console.log("key released")
    if (e.key === "a"){
      setAColor("noFillHole")
      where = holes.indexOf("a")
      if (where !== -1){
        holes.splice(holes.indexOf("a"), 1)
      }
      //console.log(holes)
    }
    if (e.key === "s"){
      setSColor("noFillHole")
      where = holes.indexOf("s")
      if (where !== -1){
        holes.splice(holes.indexOf("s"), 1)
      }
     // console.log(holes)
    }
    if (e.key === "d"){
      setDColor("noFillHole")
      where = holes.indexOf("d")
      if (where !== -1){
        holes.splice(holes.indexOf("d"), 1)
      }
      //console.log(holes)
    }
    if (e.key === "f"){
      setFColor("noFillHole")
      where = holes.indexOf("f")
      if (where !== -1){
        holes.splice(holes.indexOf("f"), 1)
      }
      //console.log(holes)
    }
    if (e.key === " "){
      notePlaying = false
      synth.triggerRelease("+.25")
    }
    if (notePlaying){
      playNote()
    }
  }

  //relative dib h4 w-100 ml4

  return (
    <div className="pv4">
      <div className="circle">
        <div className="fluteHolder">
          <div>
            <span className={"hole " + aColor}></span>
            <span className={"hole " + sColor}></span>
          </div>
          <div>
            <span className={"hole " + dColor}></span>
            <span className={"hole " + fColor}></span>
          </div>
        </div>
      </div>
      <span>
        Hold down ASDF to press on holes and hold Space to blow into the flute
      </span>
    </div>
  );
}

export const OcarinaInstrument = new Instrument('Ocarina', Ocarina);
