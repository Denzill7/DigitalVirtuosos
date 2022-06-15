// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React from 'react';

// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import './instrumentstyling/rmsevilla.css';
import { Positive } from 'tone/build/esm/core/type/Units';
import { Synth } from 'tone';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */
const notes = ["C", "D", "E", "F", "G", "A", "B"];

interface xylophoneProps{
  note:string;
  synth?: Tone.MonoSynth;
  index: number;
}
export function XylophoneKeys({note, synth}:xylophoneProps): JSX.Element {
  var currNote: any;
  switch(note) {
    case note = "C":{
      currNote = `${note}${6}`;
      return(
        <div className="CKey"
        onMouseDown={()=> synth?.triggerAttack(`${currNote}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>
            <div className="Screw1"></div>
            <div className="Screw2"></div>
        </div>
      )
    }
    case note = "D":{
      currNote = `${note}${6}`;
      return(
        <div className="DKey"
        onMouseDown={()=> synth?.triggerAttack(`${currNote}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>
          <div className="Screw3"></div>
          <div className="Screw4"></div>
        </div>
      )
    }
    case note = "E":{
      currNote = `${note}${6}`;
      return(
        <div className="EKey"
        onMouseDown={()=> synth?.triggerAttack(`${currNote}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>
          <div className="Screw5"></div>
          <div className="Screw6"></div>
        </div>
      )
    }
    case note = "F": {
      currNote = `${note}${6}`;
      return(
        <div className="FKey"
        onMouseDown={()=> synth?.triggerAttack(`${currNote}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>
          <div className="Screw7"></div>
          <div className="Screw8"></div>
        </div>
      )
    }
    case note = "G":{
      currNote = `${note}${6}`;
      return(
        <div className="GKey"
        onMouseDown={()=> synth?.triggerAttack(`${currNote}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>
          <div className="Screw9"></div>
          <div className="Screw10"></div>
        </div>
      )
    }
    case note = "A":{
      currNote = `${note}${6}`;
      return(
        <div className="AKey"
        onMouseDown={()=> synth?.triggerAttack(`${currNote}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>
          <div className="Screw11"></div>
          <div className="Screw12"></div>
        </div>
      )
    }
    case note = "B":{
      currNote = `${note}${6}`;
      return(
        <div className="BKey"
        onMouseDown={()=> synth?.triggerAttack(`${currNote}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>
          <div className="Screw13"></div>
          <div className="Screw14"></div>
        </div>
      )
    }
  }
  return (
    <div className="default"></div>
  );
}

function XylophoneType({ title, onClick, active }: any): JSX.Element {
  return (
    <div
      onClick={onClick}
      className={classNames('dim pointer ph2 pv1 ba mr2 br1 fw7 bw1', {
        'b--black black': active,
        'gray b--light-gray': !active,
      })}
    >
      {title}
    </div>
  );
}

function Xylophone({synth, setSynth }: InstrumentProps): JSX.Element {
  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.FMSynth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };

  const oscillators: List<OscillatorType> = List([
    'sine',
    'sawtooth',
    'square',
    'triangle',
  ]) as List<OscillatorType>;

  return (
    <div className="default">
      <div className="container">
        <div className="Back1"></div>
        <div className="Back2"></div>
        {notes.map((note, index)=> (
              <XylophoneKeys
                note={note}
                synth={synth}
                index={index}
              />
            ))}
      </div>
      <div className="oscStyle">
        {oscillators.map(o => (
          <XylophoneType
            key={o}
            title={o}
            onClick={() => setOscillator(o)}
            active={synth?.oscillator.type === o}
          />
        ))}
      </div>
    </div>
  );
}

export const XylophoneInstrument = new Instrument('Xylophone', Xylophone);
