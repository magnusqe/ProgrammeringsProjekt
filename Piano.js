class Piano
{
  constructor (keysX, keysY, keysSize)
  {

      this.bkwidth  = 11;
      this.bkheight = 60;
      this.wkwidth  = 22;
      this.wkheight = 100;
      this.keysX = keysX;
      this.keysY = keysY;
   
      this.keysSize = keysSize;

      this.keyArray = [];

      for(let i = 0; i < 12; i++)
      {
        this.keyArray.push(new p5.Oscillator('sine'))
        this.keyArray[i].start();
        this.keyArray[i].amp(0.0, 0.2);
      }
    }

    VisualKeys(amp, octave)
    {
      this.amp = amp;
      this.octave = octave;

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
        
      if (keyIsDown(90) === true) 
      {
        fill(220,100,100);
        this.keyArray[0].freq(16.35 * pow(2, this.octave))
        this.keyArray[0].amp(this.amp, 0.2);
        console.log(16.35 * pow(2, this.octave));
      }
      else 
      {
        this.keyArray[0].amp(0.0, 0.2);
      }
      rect(this.keysX,this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);
    }

    D()
    {
      fill(255,255,255);  

      if (keyIsDown(88) === true) 
      {
        fill(240,150,20);
        this.keyArray[1].freq(17.32 * pow(2, this.octave));
        this.keyArray[1].amp(this.amp, 0.2);
      }   
      else 
      {
        this.keyArray[1].amp(0.0, 0.2);
      }
      rect(this.keysX + this.wkwidth * this.keysSize,this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);
    }

    E()
    {
      fill(255,255,255);    

      if (keyIsDown(67) === true) 
      {
        fill(255,245,0);
        this.keyArray[2].freq(20.60 * pow(2, this.octave));
        this.keyArray[2].amp(this.amp, 0.2);
      } 
      else 
      {
        this.keyArray[2].amp(0.0, 0.2);
      }
      rect(this.keysX + (this.wkwidth * this.keysSize * 2),this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);
    }

    F()
    {
      fill(255,255,255);   

      if (keyIsDown(86) === true) 
      {
        fill(100,230,100);
        this.keyArray[3].freq(21.83 * pow(2, this.octave));
        this.keyArray[3].amp(this.amp, 0.2);
      } 
      else 
      {
        this.keyArray[3].amp(0.0, 0.2);
      }
      rect(this.keysX + (this.wkwidth * this.keysSize * 3),this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);
    }

    G()
    {
      fill(255,255,255);  

      if (keyIsDown(66) === true) 
      {
        fill(100,100,230);
        this.keyArray[4].freq(24.50 * pow(2, this.octave));
        this.keyArray[4].amp(this.amp, 0.2);
      } 
      else 
      {
        this.keyArray[4].amp(0.0, 0.2);
      }
      rect(this.keysX + (this.wkwidth * this.keysSize * 4),this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);
    }

    A()
    {
      fill(255,255,255);   

      if (keyIsDown(78) === true) 
      {
        fill(127,0,230);
        this.keyArray[5].freq(27.50 * pow(2, this.octave));
        this.keyArray[5].amp(this.amp, 0.2);
      }
      else 
      {
        this.keyArray[5].amp(0.0, 0.2);
      }
      rect(this.keysX + (this.wkwidth * this.keysSize * 5),this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);
    }

    B()
    {
      fill(255,255,255);  

      if (keyIsDown(77) === true) 
      {
        fill(180,89,180);
        this.keyArray[6].freq(30.87 * pow(2, this.octave));
        this.keyArray[6].amp(this.amp, 0.2);
      }
      else 
      {
        this.keyArray[6].amp(0.0, 0.2);
      }
      rect(this.keysX + (this.wkwidth * this.keysSize * 6),this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);
    }

    Cis()
    {
      fill(0,0,0);
      
      if (keyIsDown(83) === true) 
      {
        fill(255,100,100);
        this.keyArray[7].freq(17.32 * pow(2, this.octave));
        this.keyArray[7].amp(this.amp, 0.2);
      }
      else 
      {
        this.keyArray[7].amp(0.0, 0.2);
      }
      rect(this.keysX +this.bkwidth*1.5*this.keysSize,this.keysY,this.bkwidth * this.keysSize,this.bkheight * this.keysSize);
    }

    Dis()
    {
      fill(0,0,0);

      if (keyIsDown(68) === true) 
      {
        fill(247,159,27);
        this.keyArray[8].freq(19.45 * pow(2, this.octave));
        this.keyArray[8].amp(this.amp, 0.2);
      }
      else 
      {
        this.keyArray[8].amp(0.0, 0.2);
      }
      rect(this.keysX+this.bkwidth*1.5*this.keysSize+this.wkwidth*this.keysSize,this.keysY,this.bkwidth * this.keysSize,this.bkheight * this.keysSize);
    }
  
    Fis()
    {
      fill(0,0,0);

      if (keyIsDown(71) === true) 
      {
        fill(100,255,100);
        this.keyArray[9].freq(23.12 * pow(2, this.octave));
        this.keyArray[9].amp(this.amp, 0.2);
      }
      else 
      {
        this.keyArray[9].amp(0.0, 0.2);
      }
      rect(this.keysX+this.bkwidth*1.5*this.keysSize+this.wkwidth*this.keysSize*3,this.keysY,this.bkwidth * this.keysSize,this.bkheight * this.keysSize);
    }
  
    Gis()
    {
      fill(0,0,0);

      if (keyIsDown(72) === true) 
      {
        fill(100,100,255);
        this.keyArray[10].freq(25.96 * pow(2, this.octave));
        this.keyArray[10].amp(this.amp, 0.2);
      }
      else 
      {
        this.keyArray[10].amp(0.0, 0.2);
      }
      rect(this.keysX+this.bkwidth*1.5*this.keysSize+this.wkwidth*this.keysSize*4,this.keysY,this.bkwidth * this.keysSize,this.bkheight * this.keysSize);
    }
  
    Ais()
    {
      fill(0,0,0);

      if (keyIsDown(74) === true) 
      {
        fill(127,0,255);
        this.keyArray[11].freq(29.14 * pow(2, this.octave));
        this.keyArray[11].amp(this.amp, 0.2);
      }
      else 
      {
        this.keyArray[11].amp(0.0, 0.2);
      }
      rect(this.keysX+this.bkwidth*1.5*this.keysSize+this.wkwidth*this.keysSize*5,this.keysY,this.bkwidth * this.keysSize,this.bkheight * this.keysSize);
    }
  

}
