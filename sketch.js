let soundVisual, ampImpSoundSlider, ampPianoSlider, webMidi;



function setup() 
{
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
  octavePianoSlider.position(500, 110);
  octavePianoSlider.size(100, 50);  

  knobAttack = new Knob(160, 180, 30, "attack",20);
  knobDecay = new Knob(300, 180, 30,"Decay",20);
  knobSustain = new Knob(230, 280, 30,"Sustain", 20);
  knobRelease = new Knob(230, 380, 30,"Release", 20);
}

function draw() 
{
  background(220);

  keyboard.VisualKeys(ampPianoSlider.value(), octavePianoSlider.value(), webMidi.noteIdentifier);

  soundVisual.InputModifications(keyboard.getOsc(), ampPianoSlider.value());
  soundVisual.OscVisual();

  knobAttack.update();
  knobAttack.display();
  knobDecay.update();
  knobDecay.display();
  knobSustain.update();
  knobSustain.display();
  knobRelease.update();
  knobRelease.display();


  text("Apmilitude", 400 + 50, 110 - 25);
  text("Octave", 500 + 50, 110 + 10);
}

function mousePressed() {
  knobAttack.press(mouseX, mouseY);
  knobDecay.press(mouseX, mouseY);
  knobSustain.press(mouseX, mouseY);
  knobRelease.press(mouseX, mouseY);
}

function mouseReleased() {
  knobAttack.release();
  knobDecay.release();
  knobSustain.release();
  knobRelease.release();
}
