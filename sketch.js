let soundVisual, ampImpSoundSlider, ampPianoSlider, webMidi;



function setup() 
{
  
  knobAttack = new Knob(200, 390, 30, "Attack",20);
  knobDecay = new Knob(313.33, 390, 30,"Decay",20);
  knobAttackTime = new Knob(426.66, 390, 30,"AttackTime", 20);
  knobDecayTime = new Knob(540, 390, 30,"DecayTime", 20);

  cnv = createCanvas(800, 800);

  soundVisual = new VisualSound();

  keyboard = new Piano(180 , 450, 2.5, "sine");

  webMidi = new MidiHandler();
  webMidi.initialize();

  ampPianoSlider = createSlider(0, 1, 0.5, 0.1);
  ampPianoSlider.position(400, 110);
  ampPianoSlider.size(100, 50);
  ampPianoSlider.style('transform', 'rotate(270deg)');

  octavePianoSlider = createSlider(0, 8, 5, 1);
  octavePianoSlider.position(600, 450);
  octavePianoSlider.size(100, 50);  


}

function draw() 
{
  background(220);

  Piano.updateADSR;
  
  keyboard.VisualKeys(ampPianoSlider.value(), octavePianoSlider.value(), webMidi.noteIdentifier);

  soundVisual.InputModifications(keyboard.getOsc(), ampPianoSlider.value());
  soundVisual.OscVisual();

  knobAttack.update();
  knobAttack.display();
  knobDecay.update();
  knobDecay.display();
  knobAttackTime.update();
  knobAttackTime.display();
  knobDecayTime.update();
  knobDecayTime.display();


  text("Apmilitude", 400 + 50, 110 - 25);
  text("Octave", 600 + 50, 450 + 10);
}

function mousePressed() {
  knobAttack.press(mouseX, mouseY);
  knobDecay.press(mouseX, mouseY);
  knobAttackTime.press(mouseX, mouseY);
  knobDecayTime.press(mouseX, mouseY);
}

function mouseReleased() {
  knobAttack.release();
  knobDecay.release();
  knobAttackTime.release();
  knobDecayTime.release();
}
