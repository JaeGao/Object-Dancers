let dancer;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
  dancer = new PacmanDancer(width / 2, height / 2);
}

function draw() {
  background(0);
  dancer.update();
  dancer.display();
}

class PacmanDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.mouthClosing = true;
    this.mouthAngle = 0.3; // Maximum mouth angle when fully open
    this.currentMouthAngle = 0.2; // Current mouth angle
    this.mouthSpeed = 0.01; // Speed of mouth opening/closing
  }
  
  update() {
    if (this.mouthClosing) {
      this.currentMouthAngle -= this.mouthSpeed;
      if (this.currentMouthAngle <= 0) {
        this.mouthClosing = false;
      }
    } else {
      this.currentMouthAngle += this.mouthSpeed;
      if (this.currentMouthAngle >= this.mouthAngle) {
        this.mouthClosing = true;
      }
    }
  }
  
  display() {
    push();
    translate(this.x, this.y);
    
    // Draw Pacman body
    fill(255, 255, 0);
    arc(0, 0, 100, 100, this.currentMouthAngle, TWO_PI - this.currentMouthAngle, PIE);
    
    // Draw eye
    fill(0);
    ellipse(-20, -25, 10, 10);
    
    pop();
  }
}
