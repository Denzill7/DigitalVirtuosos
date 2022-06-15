// 3rd party library imports

import { useState } from 'react';
import * as Tone from 'tone';
import React from 'react';
import './instrumentstyling/denzill7.css'

// project imports
import { Instrument, InstrumentProps } from '../Instruments';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

interface ViolinStringProps {
  note: string; // A, B, C, D, E, F, G
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  violinString: number;
  index: number; // octave + index together give a location for the piano key
}

export function ViolinString({
  note,
  synth,
  violinString,
  index,
}: ViolinStringProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the piano.
   * See `PianoKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      style={{
        // CSS
        top: violinString,
        left: `${index * 2}rem`,
        zIndex: 1,
        width: '2rem',
        marginLeft: 0,
      }}
    ></div>
  );
}

// eslint-disable-next-line
function PianoKeyWithoutJSX({
  note,
  synth,
  index,
}: ViolinStringProps): JSX.Element {
  /**
   * This React component for pedagogical purposes.
   * See `PianoKey` for the React component with JSX (JavaScript XML).
   */
  return React.createElement(
    'div',
    {
      onMouseDown: () => synth?.triggerAttack(`${note}`),
      onMouseUp: () => synth?.triggerRelease('+0.25'),
      style: {
        top: 0,
        left: `${index * 2}rem`,
        zIndex: 0,
        width: '2rem',
        marginLeft: 0,
      },
    },
    [],
  );
}

//let note = `${"F"}${6}`

function Violin({ synth, setSynth }: InstrumentProps): JSX.Element {
  
  let eString = useState("blackText")
  let aString = useState("blackText")
  let dString = useState("blackText")
  let gString = useState("blackText")

  /*
  function clickDown(e: MouseEvent){
    if (e.button === 0){
      note = `${note}${6}`
      synth?.triggerAttack(`${note}`)
      synth?.triggerRelease('+0.25')
      console.log("The mouse was clicked")
    }
  }
  */

  /*
  const setOscillator = (newType: Tone.ToneOscillatorType) => {
    setSynth(oldSynth => {
      oldSynth.disconnect();

      return new Tone.Synth({
        oscillator: { type: newType } as Tone.OmniOscillatorOptions,
      }).toDestination();
    });
  };

  const oscillators: List<OscillatorType> = List([
    'sine',
    'sawtooth',
    'square',
    'triangle',
    'fmsine',
    'fmsawtooth',
    'fmtriangle',
    'amsine',
    'amsawtooth',
    'amtriangle',
  ]) as List<OscillatorType>;
  */

  return (
    <div className="pv4">
      <div className="rectangle">
        <div className="holder">
          <div className={"string " + eString}>
            <div className="flex-container">
            <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"F"}${5}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>F</div>
              <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"G"}${5}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>G</div>
              <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"A"}${5}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>A</div>
              <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"B"}${5}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>B</div>
              </div>
                <div className={"string " + aString}>
                  <div className="flex-container">
                  <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"B"}${4}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>B</div>
                    <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"C"}${5}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>C</div>
                    <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"D"}${5}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>D</div>
                    <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"E"}${5}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>E</div>
                  </div>
                    <div className={"string " + dString}>
                      <div className="flex-container">
                      <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"E"}${4}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>E</div>
                        <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"F"}${4}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>F</div>
                        <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"G"}${4}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>G</div>
                        <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"A"}${4}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>A</div>
                      </div>
                        <div className={"string " + gString}>
                          <div className="flex-container">
                          <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"A"}${3}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>A</div>
                            <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"B"}${3}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>B</div>
                            <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"C"}${4}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>C</div>
                            <div className="note"
        onMouseDown={()=> synth?.triggerAttack(`${"D"}${4}`)}
        onMouseUp={()=> synth?.triggerRelease('+0.25')}>D</div>
                          </div>
                        </div>
                    </div>
                </div>   
            </div>
          </div>
      </div>
    </div>
  );
}

export const DenzillInstrument = new Instrument('Denzill7', Violin);
