    

let keyboard;

function setup() {
  createCanvas(400, 400);
  keyboard = new keys();
}

function draw() {
  background(220);
  
  keyboard.Piano();
}


class keys
{

    constructor ()
  {

        this.bkwidth  = 11;
        this.bkheight = 60;
   
        this.wkwidth  = 22;
        this.wkheight = 100;
   
        this.keysX = 10
        this.keysY = 10
   
        this.keysSize = 1.5



    }

    Piano()
    {
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
        fill(255,255,255)
        
        if (keyIsDown(90) === true) {
            fill(220,100,100)
          }
        
        rect(this.keysX,this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);

    }

    D()
    {
        fill(255,255,255)
        
        if (keyIsDown(88) === true) {
            fill(240,150,20)
          }
        
        rect(this.keysX + this.wkwidth * this.keysSize,this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);
    }

    E()
    {
        fill(255,255,255)
              
        if (keyIsDown(67) === true) {
            fill(255,245,0)
          }
        
        rect(this.keysX+ (this.wkwidth * this.keysSize * 2),this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);
    }

    F()
    {
        fill(255,255,255)
              
        if (keyIsDown(86) === true) {
            fill(100,230,100)
          }
        
        rect(this.keysX+ (this.wkwidth * this.keysSize * 3),this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);
    }

    G()
    {
        fill(255,255,255)
              
        if (keyIsDown(66) === true) {
            fill(100,100,230)
          }
        
        rect(this.keysX+ (this.wkwidth * this.keysSize * 4),this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);
    }

    A()
    {
        fill(255,255,255)
              
        if (keyIsDown(78) === true) {
            fill(127,0,230)
          }
        
        rect(this.keysX+ (this.wkwidth * this.keysSize * 5),this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);
    }

    B()
    {
        fill(255,255,255)
              
        if (keyIsDown(77) === true) {
            fill(180,89,180)
          }
        
        rect(this.keysX+ (this.wkwidth * this.keysSize * 6),this.keysY,this.wkwidth * this.keysSize,this.wkheight * this.keysSize);
    }

    Cis()
    {
        fill(0,0,0);
        if (keyIsDown(83) === true) {
            fill(255,100,100)
          }
        rect(this.keysX+this.bkwidth*1.5*this.keysSize,this.keysY,this.bkwidth * this.keysSize,this.bkheight * this.keysSize);
    }

    Dis()
    {
        fill(0,0,0);
              if (keyIsDown(68) === true) {
            fill(247,159,27)
          }
        rect(this.keysX+this.bkwidth*1.5*this.keysSize+this.wkwidth*this.keysSize,this.keysY,this.bkwidth * this.keysSize,this.bkheight * this.keysSize);
    }
  
    Fis()
    {
        fill(0,0,0);
              if (keyIsDown(71) === true) {
            fill(100,255,100)
          }
        rect(this.keysX+this.bkwidth*1.5*this.keysSize+this.wkwidth*this.keysSize*3,this.keysY,this.bkwidth * this.keysSize,this.bkheight * this.keysSize);
    }
  
    Gis()
    {
        fill(0,0,0);
              if (keyIsDown(72) === true) {
            fill(100,100,255)
          }
        rect(this.keysX+this.bkwidth*1.5*this.keysSize+this.wkwidth*this.keysSize*4,this.keysY,this.bkwidth * this.keysSize,this.bkheight * this.keysSize);
    }
  
    Ais()
    {
        fill(0,0,0);
              if (keyIsDown(74) === true) {
            fill(127,0,255)
          }
        rect(this.keysX+this.bkwidth*1.5*this.keysSize+this.wkwidth*this.keysSize*5,this.keysY,this.bkwidth * this.keysSize,this.bkheight * this.keysSize);
    }
  

}
