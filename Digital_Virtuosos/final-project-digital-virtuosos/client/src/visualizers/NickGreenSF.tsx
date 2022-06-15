// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const NickGreenSFVisualizer = new Visualizer(
  'NickGreenSF',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 127, 0, 255);

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();
    p5.circle(width / 2 - height / 2, height / 2, height / 2)
    const radius = height / 4

    const values = analyzer.getValue();
    p5.beginShape();
    //console.log(values)
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const angle = p5.map(i, 0, values.length-1, 0, 6.29);
      const x = (width/2 - height/2) + p5.sin(angle) * radius
      const y = (height/2) + p5.cos(angle) * radius + amplitude*height
      //const x = p5.map(i, 0, values.length - 1, 0, width / 2);
      //const y = height / 2 + amplitude * height;
      // Place vertex
      p5.vertex(x, y);
    }
    // this puts another vertex down that connects the end of the circle back to the beginning. IDK if it's worth bothering with.
    // for (let i = 0; i < 1; i++) {
    //   const amplitude = values[i] as number;
    //   const angle = p5.map(i, 0, values.length-1, 0, 6.29);
    //   const x = (width/2 - height/2) + p5.sin(angle) * radius
    //   const y = (height/2) + p5.cos(angle) * radius + amplitude*height
    //   //const x = p5.map(i, 0, values.length - 1, 0, width / 2);
    //   //const y = height / 2 + amplitude * height;
    //   // Place vertex
    //   p5.vertex(x, y);
    // }
    p5.endShape();
  },
);
