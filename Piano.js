class Piano
{
  constructor (keysX, keysY, keysSize, waveform)
  {

    this.bkwidth  = 11;
    this.bkheight = 60;
    this.wkwidth  = 22;
    this.wkheight = 100;
    this.keysX = keysX;
    this.keysY = keysY;
    this.keysSize = keysSize;

    this.at = 0.2; // attack time in seconds
    this.al = 0.7; // attack level 0.0 to 1.0
    this.dt = 0.2; // decay time in seconds
    this.dl = 0.5; // decay level  0.0 to 1.0
    this.rt = 0.2; // release time in seconds
    this.rl = 0.0; // release level  0.0 to 1.0

    this.keyArray = [];
    this.envArray = [];
    this.isPlayingArray = [];

    this.waveform = str(waveform);

    for(let i = 0; i < 12; i++)
    {
      this.keyArray.push(new p5.Oscillator(this.waveform));
      this.envArray.push(new p5.Envelope(this.at, this.al, this.dt, this.dl,this.rt,this.rl));
      
      this.keyArray[i].start();
      this.keyArray[i].amp(this.envArray[i]);
      this.isPlayingArray.push(false);
    }
  }

  getOsc()
  {
    return this.keyArray[0];
  }

  VisualKeys(amp, octave, noteOctave = null)
  {
    this.amp = amp;
    this.note = "";
    this.octave = "";

    if(noteOctave != null)
    {
      for (let i = 0; i < noteOctave.length; i++) 
      {
        let char = noteOctave.charAt(i);
        if(isNaN(char)) 
        {
          this.note += str(char);
        } 
        else 
        {
          this.octave += int(char);
        }
      }
    }
    else
    {
      this.octave = octave;
    }

    this.C() 
    this.D()
    this.E()
    this.F()
    this.G()
    this.A()
    this.B()
    this.Cis()
    this.Dis()
    this.Fis()
    this.Gis()
    this.Ais()
  }

  C()
  {
    fill(255,255,255);
      
    if (keyIsDown(90) === true || this.note === "C") 
    {
      fill(220,100,100);
      if(!this.isPlayingArray[0])
      {
        this.envArray[0].play(this.keyArray[0]);
        this.envArray[0].triggerAttack();
        this.isPlayingArray[0] = true;
      }
      this.keyArray[0].freq(16.35 * pow(2, this.octave));
    }
    else if(keyIsDown(90) === false || this.note != "C")
    {
      this.envArray[0].triggerRelease();
      this.isPlayingArray[0] = false;
    }

    rect(this.keysX, this.keysY, this.wkwidth * this.keysSize, this.wkheight * this.keysSize);
  }

  D()
  {
    fill(255,255,255);  

    if (keyIsDown(88) === true || this.note === "D") 
    {
      fill(240,150,20);
      if(!this.isPlayingArray[1])
      {
        this.envArray[1].play(this.keyArray[1]);
        this.envArray[1].triggerAttack();
        this.isPlayingArray[1] = true;
      }
      this.keyArray[1].freq(18.35 * pow(2, this.octave));
    }   
    else if(keyIsDown(88) === false || webMidi.noteOff == true)
    {
      this.envArray[1].triggerRelease();
      this.isPlayingArray[1] = false;
    }
    rect(this.keysX + this.wkwidth * this.keysSize, this.keysY, this.wkwidth * this.keysSize, this.wkheight * this.keysSize);
  }

  E()
  {
    fill(255,255,255);    

    if (keyIsDown(67) === true || this.note === "E") 
    {
      fill(255,245,0);
      if(!this.isPlayingArray[2])
      {
        this.envArray[2].play(this.keyArray[2]);
        this.envArray[2].triggerAttack();
        this.isPlayingArray[2] = true;
      }
      this.keyArray[2].freq(20.60 * pow(2, this.octave));
    } 
    else if(keyIsDown(67) === false || this.note != "E")
    {
      this.envArray[2].triggerRelease();
      this.isPlayingArray[2] = false;
    }
    rect(this.keysX + (this.wkwidth * this.keysSize * 2), this.keysY, this.wkwidth * this.keysSize, this.wkheight * this.keysSize);
  }

  F()
  {
    fill(255,255,255);   

    if (keyIsDown(86) === true || this.note === "F") 
    {
      fill(100,230,100);
    if(!this.isPlayingArray[3])
      {
        this.envArray[3].play(this.keyArray[3]);
        this.envArray[3].triggerAttack();
        this.isPlayingArray[3] = true;
      }
      this.keyArray[3].freq(21.83 * pow(2, this.octave));
    } 
    else if(keyIsDown(86) === false || this.note != "F")
    {
      this.envArray[3].triggerRelease();
      this.isPlayingArray[3] = false;
    }
    rect(this.keysX + (this.wkwidth * this.keysSize * 3),this.keysY, this.wkwidth * this.keysSize, this.wkheight * this.keysSize);
  }

  G()
  {
    fill(255,255,255);  

    if (keyIsDown(66) === true || this.note === "G") 
    {
      fill(100,100,230);
      if(!this.isPlayingArray[4])
      {
        this.envArray[4].play(this.keyArray[4]);
        this.envArray[4].triggerAttack();
        this.isPlayingArray[4] = true;
      }
      this.keyArray[4].freq(24.50 * pow(2, this.octave));
    } 
    else if(keyIsDown(66) === false || this.note != "G") 
    {
      this.envArray[4].triggerRelease();
      this.isPlayingArray[4] = false;
    }
    rect(this.keysX + (this.wkwidth * this.keysSize * 4), this.keysY, this.wkwidth * this.keysSize, this.wkheight * this.keysSize);
  }

  A()
  {
    fill(255,255,255);   

    if (keyIsDown(78) === true || this.note === "A") 
    {
      fill(127,0,230);
      if(!this.isPlayingArray[5])
      {
        this.envArray[5].play(this.keyArray[5]);
        this.envArray[5].triggerAttack();
        this.isPlayingArray[5] = true;
      }
      this.keyArray[5].freq(27.50 * pow(2, this.octave));
    }
    else if(keyIsDown(78) === false || this.note != "A")
    {
      this.envArray[5].triggerRelease();
      this.isPlayingArray[5] = false;
    }
    rect(this.keysX + (this.wkwidth * this.keysSize * 5), this.keysY,this.wkwidth * this.keysSize, this.wkheight * this.keysSize);
  }

  B()
  {
    fill(255,255,255);  

    if (keyIsDown(77) === true || this.note === "B") 
    {
      fill(180,89,180);
      if(!this.isPlayingArray[6])
      {
        this.envArray[6].play(this.keyArray[6]);
        this.envArray[6].triggerAttack();
        this.isPlayingArray[6] = true;
      }
      this.keyArray[6].freq(30.87 * pow(2, this.octave));
    }
    else if(keyIsDown(77) === false || this.note != "B")
    {
      this.envArray[6].triggerRelease();
      this.isPlayingArray[6] = false;
    }
    rect(this.keysX + (this.wkwidth * this.keysSize * 6), this.keysY, this.wkwidth * this.keysSize, this.wkheight * this.keysSize);
  }

  Cis()
  {
    fill(0,0,0);
    
    if (keyIsDown(83) === true || this.note === "C#") 
    {
      fill(255,100,100);
      if(!this.isPlayingArray[7])
      {
        this.envArray[7].play(this.keyArray[7]);
        this.envArray[7].triggerAttack();
        this.isPlayingArray[7] = true;
      }
      this.keyArray[7].freq(17.32 * pow(2, this.octave));
    }
    else if(keyIsDown(83) === false || this.note != "C#")
    {
      this.envArray[7].triggerRelease();
      this.isPlayingArray[7] = false;
    }
    rect(this.keysX + this.bkwidth * 1.5 * this.keysSize, this.keysY, this.bkwidth * this.keysSize, this.bkheight * this.keysSize);
  }

  Dis()
  {
    fill(0,0,0);

    if (keyIsDown(68) === true || this.note === "D#") 
    {
      fill(247,159,27);
      if(!this.isPlayingArray[8])
      {
        this.envArray[8].play(this.keyArray[8]);
        this.envArray[8].triggerAttack();
        this.isPlayingArray[8] = true;
      }
      this.keyArray[8].freq(19.45 * pow(2, this.octave));
    }
    else if(keyIsDown(68) === false || this.note != "D#")
    {
      this.envArray[8].triggerRelease();
      this.isPlayingArray[8] = false;
    }
    rect(this.keysX + this.bkwidth * 1.5 * this.keysSize + this.wkwidth * this.keysSize, this.keysY, this.bkwidth * this.keysSize, this.bkheight * this.keysSize);
  }

  Fis()
  {
    fill(0,0,0);

    if (keyIsDown(71) === true || this.note === "F#") 
    {
      fill(100,255,100);
      if(!this.isPlayingArray[9])
      {
        this.envArray[9].play(this.keyArray[9]);
        this.envArray[9].triggerAttack();
        this.isPlayingArray[9] = true;
      }
      this.keyArray[9].freq(23.12 * pow(2, this.octave));
    }
    else if(keyIsDown(71) === false || this.note != "F#")
    {
      this.envArray[9].triggerRelease();
      this.isPlayingArray[9] = false;
    }
    rect(this.keysX + this.bkwidth * 1.5 * this.keysSize + this.wkwidth * this.keysSize * 3, this.keysY, this.bkwidth * this.keysSize, this.bkheight * this.keysSize);
  }

  Gis()
  {
    fill(0,0,0);

    if (keyIsDown(72) === true || this.note === "G#") 
    {
      fill(100,100,255);
      if(!this.isPlayingArray[10])
      {
        this.envArray[10].play(this.keyArray[10]);
        this.envArray[10].triggerAttack();
        this.isPlayingArray[10] = true;
      }
      this.keyArray[10].freq(25.96 * pow(2, this.octave));
    }
    else if(keyIsDown(72) === false || this.note != "G#")
    {
      this.envArray[10].triggerRelease();
      this.isPlayingArray[10] = false;
    }
    rect(this.keysX + this.bkwidth * 1.5 * this.keysSize + this.wkwidth * this.keysSize * 4, this.keysY, this.bkwidth * this.keysSize, this.bkheight * this.keysSize);
  }

  Ais()
  {
    fill(0,0,0);

    if (keyIsDown(74) === true || this.note === "A#") 
    {
      fill(127,0,255);
      if(!this.isPlayingArray[11])
      {
        this.envArray[11].play(this.keyArray[11]);
        this.envArray[11].triggerAttack();
        this.isPlayingArray[11] = true;
      }
      this.keyArray[11].freq(29.14 * pow(2, this.octave));
    }
    else if(keyIsDown(74) === false || this.note != "A#")
    {
      this.envArray[11].triggerRelease();
      this.isPlayingArray[11] = false;
    }
    rect(this.keysX + this.bkwidth * 1.5 * this.keysSize + this.wkwidth * this.keysSize * 5, this.keysY, this.bkwidth * this.keysSize, this.bkheight * this.keysSize);
  }
}
