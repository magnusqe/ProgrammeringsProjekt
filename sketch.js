let soundVisual, ampImpSoundSlider, ampPianoSlider, webMidi, knobName, octName, octave = 4, knobArray = [], octArray = [], ampDistance = 0;

function setup() 
{
  cnv = createCanvas(800, 800);

  for(let i = 1; i <= 5; i++)
  {
    if(i == 1)
    {
      knobName = "Attack";
    }
    else if(i == 2)
    {
      knobName = "Decay";
    }
    else if(i == 3)
    {
      knobName = "AttackTime";
    }
    else if(i == 4)
    {
      knobName = "DecayTime";
    }
    else if(i == 5)
    {
      knobName = "Amplitude";
      ampDistance = 56;
    }
    knobArray.push(new Knob(155 + 50 * i + 60 * (i - 1) + ampDistance, 390, 30, knobName, 20));
  }

  for(let i = 1; i <= 2; i++)
  {
    if(i == 1)
    {
      octName = "Oct Down";
    }
    if(i == 2)
    {
      octName = "Oct Up";
    }
    let button = createButton(octName);
    button.size(50, 40);
    button.position(600 + 50 * i, 470);
    button.mousePressed(() => buttonPressed(i));
    octArray.push(button);
  }

  soundVisual = new VisualSound();

  keyboard = new Piano(180, 450, 2.5, "sine");

  webMidi = new MidiHandler();
  webMidi.initialize();
}

function draw() 
{
  background(220);
  colorMode(RGB);

  keyboard.updateADSR();
  keyboard.VisualKeys(octave, webMidi.velocity, webMidi.noteIdentifier);

  soundVisual.InputModifications(keyboard.getOsc(), webMidi.velocity, knobArray[4].calcAngle);
  soundVisual.OscVisual();

  for(let i = 0; i < knobArray.length; i++)
  {
    colorMode(HSB);
    knobArray[i].update();
    knobArray[i].display();
  }

  text("octave : " + octave, 700, 530);
}

function mousePressed() 
{
  for(let i = 0; i < knobArray.length; i++)
  {
    knobArray[i].press(mouseX, mouseY);
  }
}


function mouseReleased() 
{
  for(let i = 0; i < knobArray.length; i++)
  {
    knobArray[i].release();
  }
}

function buttonPressed(index)
{
  if(index == 1)
  {
    octave -= 1;
  }
  if(index == 2)
  {
    octave += 1;
  }
  octave = constrain(octave, 0, 8)
}
