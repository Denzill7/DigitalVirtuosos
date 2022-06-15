// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';

/* references used:
https://www.youtube.com/watch?v=UcdigVaIYAk
https://www.youtube.com/watch?v=MceZFeV2jhE&t=308s
*/

const particles: Particle[] = [];

export const particleVisualizer = new Visualizer(
'rmsevilla', (p5: P5, analyzer: Tone.Analyser) => {
 
  const width = window.innerWidth;
  const height = window.innerHeight;
  const dim = Math.min(width, height);

  p5.background(0);
  p5.noFill();

  const values = analyzer.getValue();
  for(var val = 0; val < values.length; val++){
    const amplitude = values[val] as number;
    let factor = amplitude * 20;

    if(amplitude > 0){

      for(var i = 0; i < 1; i++) {
        var p = new Particle(p5,width,height);
        particles.push(p);
      }

      for(var k = particles.length - 1; k >= 0; k--) {
        particles[k].update();
        particles[k].show(amplitude); 
        if(particles[k].finished()){
          particles.splice(k,1);
        }
      }
    } 
  }
    
});

class Particle {
  pos: any;
  vel: any;
  alpha:number;
  p5:P5;
  constructor(p5:P5, width:number, height:number) {
    this.pos = p5.createVector(width/2 - 100,height/2- 170);
    this.vel = P5.Vector.random2D().normalize().mult(p5.random(4,6));
    this.alpha = 255;
    this.p5 = p5;
  }

  finished(){
    return this.alpha < 0;
  }

  update() {
    this.pos.add(this.vel.x, this.vel.y);
    this.alpha -= 5;
  }
  show(vol:number) {
    this.p5.push()
    this.p5.stroke(0);
    if(vol > .06){
      this.p5.fill('#765faf');
    }else if(vol > 0.015 && vol < .06){
      this.p5.fill('#66aa55');
    }else{
      this.p5.fill('#88ddff');
    }
    this.p5.translate(this.pos.x, this.pos.y);
    this.p5.circle(10, 10, 100*vol);
    this.p5.pop();
  }
}