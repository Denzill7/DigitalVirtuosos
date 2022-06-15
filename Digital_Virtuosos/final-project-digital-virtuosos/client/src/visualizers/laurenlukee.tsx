// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

//Author:Lauren Luke
//My vizualizer it made up of three shapes, a rectangle,
//cross and circle. Interaction with an instrument will
//make these shapes come to life


export const laurenlukeeWaveformVisualizer = new Visualizer(
  'laurenlukee',
  (p5: P5, analyzer: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);
    p5.strokeWeight(dim * 0.01);
    p5.noFill();
    p5.stroke(204, 0, 204);
  
    const w = height/4;
    //First shape, Rectangle
    const values = analyzer.getValue();
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const h = p5.map(i, 0, values.length - 1, 0, width);  
      p5.stroke(204, 0, 204);
      const x =  (width/4 - height/2) +  p5.sin(h) * w/2;
      const y = height/2 + amplitude * height  ;   
      // Place vertex
       p5.vertex(x, y);
     }
     
    p5.endShape();

    //Second shape, verticle rectangle(cross)
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const h = p5.map(i, 0, values.length - 1, 0, width);
      p5.stroke(205,0,311);
      const x =  (width/2.02 - height/2) + p5.sin(h) * w/3.4 ;
      const y = height/2.3  + amplitude * height;
      // Place vertex
       p5.vertex(x, y);
     }
    p5.endShape();
    //Third shape, horizontal rectangle(cross)
    
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const h = p5.map(i, 0, values.length - 1, 0, width);
      p5.stroke(205,0,311);
      const x =  (width/2.02 - height/2) + p5.sin(h) * w/3.4 ;
      const y = height/1.77  + amplitude * height;
      // Place vertex
       p5.vertex(x, y);
     }
    p5.endShape();
     //middle of cross

     p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const h = p5.map(i, 0, values.length - 1, 0, width);
      p5.stroke(205,0,311);
      const x =  (width/2.02 -height/2)  + p5.sin(h) * w/1.03 ;
      const y = (height/2)+ amplitude * height/3;
      // Place vertex
       p5.vertex(x, y);
     }
    p5.endShape();


    //Fourth shape, Circle
    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const h = p5.map(i, 0, values.length - 1, 0, width);
      p5.stroke(204, 0, 204);
      const x =  ((width - width/4) - height/2) + p5.sin(h) * w/2 ;
      const y = height/2  + p5.cos(h) *amplitude * height;
      // Place vertex
       p5.vertex(x, y);
     }
    p5.endShape();
  
    
  },

);