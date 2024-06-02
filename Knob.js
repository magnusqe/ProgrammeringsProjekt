class Knob 
{
  constructor(x, y, r, knobName, textsize) 
  {
    this.x = x;
    this.y = y;
    this.r = r;
    this.angle = 0;
    this.offsetAngle = 0;
    this.dragging = false;
    this.knobName = knobName;
    this.textsize = textsize;
    this.calcAngle = null;
    this.divide = 10;

    if(this.knobName == "AttackTime" || this.knobName == "DecayTime")
    {
      this.divide = 2;
    }
  }

  update() 
  {
    if(this.dragging) 
    {
      let dx = mouseX - this.x;
      let dy = mouseY - this.y;
      let mouseAngle = atan2(dy, dx);
      this.angle = mouseAngle - this.offsetAngle;

      // Constrain the angle to be within the range of -PI to PI
      this.angle = constrain(this.angle, -PI, PI);
      colorMode(HSB);
    }
  }

  display() 
  {
    if(this.dragging) 
    {
      fill(175);
    } 
    else 
    {
      fill(255);
    }

    // Draw ellipse for knob
    push();
    strokeWeight(2);
    translate(this.x, this.y);
    rotate(this.angle);
    fill(int(this.calcAngle) * 36, 80, 100);
    circle(0, 0, this.r * 2);
    stroke(200);
    line(0, 0, this.r, 0);
    pop();
    fill(0);

    this.calcAngle = map(this.angle, -PI, PI, 0, 11);
    this.calcAngle = max(this.calcAngle, 0); // Ensure calcAngle is not negative

    textAlign(CENTER);
    textSize(this.textsize);
    text(round(int((this.calcAngle)) / this.divide, 1), this.x, this.y + this.r + this.textsize);
    text(this.knobName, this.x, this.y - this.r - this.textsize / 4);
    if(int(this.calcAngle) >> 10)
    {
      this.calcAngle = 10;
    }
  }

  press(mx, my) 
  {
    // Check if mouse is over this knob
    if (dist(mx, my, this.x, this.y) < this.r)
    {
      this.dragging = true;
      let dx = mx - this.x;
      let dy = my - this.y;
      this.offsetAngle = atan2(dy, dx) - this.angle;
    }
  }

  release() 
  {
    this.dragging = false;
  }

  ensureUniqueValue() // Function helps the knobs from overlapping, since it became a problem
  {
    let knobs = [knob, knob2, knob3];
    for(let i = 0; i < knobs.length; i++) 
    {
      if(knobs[i] !== this) 
      {
        this.othercalcAngle = map(knobs[i].angle, -PI, PI, 0,11);
        this.calcAngle = map(this.angle, -PI, PI, 0,11);
        if(int(this.calcAngle) === int(this.othercalcAngle)) 
        {
          this.angle = constrain(this.angle, -PI, PI);
        }
      }
    }
  }
} 