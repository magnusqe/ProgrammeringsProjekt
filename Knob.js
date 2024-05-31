class Knob {
  constructor(x, y, r, knobName, textsize) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.angle = 0;
    this.offsetAngle = 0;
    this.dragging = false;
    this.knobName = knobName;
    this.textsize = textsize;
  }

  update() {
    if (this.dragging) {
      let dx = mouseX - this.x;
      let dy = mouseY - this.y;
      let mouseAngle = atan2(dy, dx);
      this.angle = mouseAngle - this.offsetAngle;

      // Constrain the angle to be within the range of -PI to PI
      this.angle = constrain(this.angle, -PI, PI);


    }
  }

  display() {
    if (this.dragging) {
      fill(175);
    } else {
      fill(255);
    }

    // Draw ellipse for knob
    push();
    strokeWeight(2);
    translate(this.x, this.y);
    rotate(this.angle);
    circle(0, 0, this.r * 2);
    line(0, 0, this.r, 0);
    pop();
    fill(0);


    // Map the knob's range to a value between 0 and 10
    let calcAngle = map(this.angle, -PI, PI, 0, 11);
    calcAngle = max(calcAngle, 0); // Ensure calcAngle is not negative

    textAlign(CENTER);
    textSize(this.textsize);
    text(nf(int(calcAngle)), this.x, this.y + this.r + this.textsize);  // Display calcAngle with 2 decimal places
    text(this.knobName, this.x, this.y - this.r - this.textsize/4);  // Display name of knob
      if (int(this.calcAngle) >> 10)
    {
        this.calcAngle = 10;
    }

  }



  press(mx, my) {
    // Did I click on the knob?
    if (dist(mx, my, this.x, this.y) < this.r) {
      this.dragging = true;
      // If so, keep track of the relative location of the click
      let dx = mx - this.x;
      let dy = my - this.y;
      this.offsetAngle = atan2(dy, dx) - this.angle;
    }
  }

  release() {
    // Stop dragging
    this.dragging = false;
  }

  ensureUniqueValue() {
    let knobs = [knob, knob2, knob3];
    for (let i = 0; i < knobs.length; i++) {
      if (knobs[i] !== this) {
        let otherCalcAngle = map(knobs[i].angle, -PI, PI, 0,11);
        let thisCalcAngle = map(this.angle, -PI, PI, 0,11);
        if (int(thisCalcAngle) === int(otherCalcAngle)) {

          this.angle = constrain(this.angle, -PI, PI); // Ensure it remains within bounds
        }
      }
    }
  }
} 