// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import './instrumentstyling/laurenlukee.css';

//Author:Lauren Luke
//Created three drums, all with their own unique sound and one cymbal
//I utilized the Tone.MembraneSynth that uses a drum quality sound

function Drum({ synth, setSynth }: InstrumentProps): JSX.Element {

const newSynth= new Tone.MembraneSynth().toDestination();
    return (
    <div className ="pv4">
    <div className = "drum1" onClick={() => {
      newSynth.triggerAttackRelease("C1", "8n");
    }}>
    <div className ="bottom left-and-right"></div>
    <div className ="middle left-and-right"></div>
    <div className ="top"></div>
  </div>
  <div className = "drum2" onClick={() => {
      newSynth.triggerAttackRelease("C2", "8n");
    }}>
    <div className ="bottom left-and-right"></div>
    <div className ="middle left-and-right"></div>
    <div className ="top"></div>
  </div>
  <div className = "drum3" onClick={() => {
      newSynth.triggerAttackRelease("C3", "8n");
    }}>
    <div className ="bottom left-and-right"></div>
    <div className ="middle left-and-right"></div>
    <div className ="top"></div>
  </div>
  <div className = "cymbal4" onClick={() => {
     newSynth.triggerAttackRelease("C9", "8n");
    }}>
      <div className ="top left-and-right2"></div>
  </div>

  </div>
  );
  
}

export const DrumInstrument = new Instrument('Drums', Drum);
