// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const DenzillVisualizer = new Visualizer(
  'Denzill7 Visualizer',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * 0.01);

    // red
    p5.stroke('red');
    p5.circle(width / 2 - height / 2, height / 2, 90)

    // orange
    p5.stroke('orange');
    p5.circle(width / 2 - height / 2, height / 2, 100)

    // yellow
    p5.stroke('yellow');
    p5.circle(width / 2 - height / 2, height / 2, 110)

    // green
    p5.stroke('green');
    p5.circle(width / 2 - height / 2, height / 2, 120)

    // blue
    p5.stroke('blue');
    p5.circle(width / 2 - height / 2, height / 2, 130)

    // purple
    p5.stroke('purple');
    p5.circle(width / 2 - height / 2, height / 2, 140)
    
    const values = analyzer.getValue();
    p5.beginShape();
    //console.log(values)
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      let size = ((height / 2) / amplitude) / 1000
      
      // random color
      p5.stroke(p5.random(255), p5.random(255), p5.random(255), p5.random(255))
      p5.noFill();
      if (size > 800){
        p5.circle(width / 2 - height / 2, height / 2 , 80)
      } else{
        p5.circle(width / 2 - height / 2, height / 2 , size)
      }
      p5.endShape();
    }
  },
);
