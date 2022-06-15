// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { DrumInstrument } from './instruments/laurenlukee';

import { XylophoneInstrument } from './instruments/rmsevilla';
import { OcarinaInstrument } from './instruments/Ocarina';
import { particleVisualizer } from './visualizers/rmsevilla';
import { NickGreenSFVisualizer } from './visualizers/NickGreenSF';
import { WaveformVisualizer } from './visualizers/Waveform';
import { laurenlukeeWaveformVisualizer } from './visualizers/laurenlukee';
import { DenzillInstrument } from './instruments/denzill7';
import { DenzillVisualizer } from './visualizers/denzill7';



/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;


const instruments = List([PianoInstrument,OcarinaInstrument,XylophoneInstrument,DenzillInstrument,DrumInstrument]);
const visualizers = List([WaveformVisualizer,NickGreenSFVisualizer,particleVisualizer,DenzillVisualizer,laurenlukeeWaveformVisualizer]);


export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
