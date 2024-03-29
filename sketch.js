var person = [];
var baddies = [];
var rocks=[];

function setup() {
  createCanvas(700, 700);
  for (let i = 0; i < 5; i++) {
    person[i] = new Person(i*20);
    baddies[i]= new Person(i*20);
    rocks[i]=new obstacle(i,i);
  }
}

function keyPressed() {

  if (keyCode == UP_ARROW ) {
    for (let i = 0; i < 5; i++) {
      if (person[i].onGround()){
      var jump = createVector(0, -5);
      person[i].applyForce(jump);
      }
    }
  } else if (keyCode == RIGHT_ARROW) {
    for (let i = 0; i < 5; i++) {
      person[i].moveRight();
    }
  } else if (keyCode == LEFT_ARROW) {
    for (let i = 0; i < 5; i++) {
      person[i].moveLeft();
    }
  } else if (keyCode == DOWN_ARROW) {
    for (let i = 0; i < 5; i++) {
      person[i].stop();
    }
  }


}


function draw() {
  background(220, 50, 40);

  let gravity = createVector(0, 0.1);

 // translate(-person[0].pos.x + 50, 0);

  let force = createVector(-0.01, 0);
  for (let i = 0; i < 5; i++) {

    person[i].applyForce(gravity);
   // person[i].applyForce(force);

    if (mouseIsPressed) {
      var jedi = createVector(-0.05, 0);
      person[i].applyForce(jedi);
    }
   // pushMatrix();
    // translate(-person[0].pos.x + 50, 0);
    baddies[i].update();
    baddies[i].display();
    baddies[i].edges();
   // popMatrix();

    person[i].update();
    person[i].display();
    person[i].edges();
    person[i].hits(rocks);
    
    rocks[i].display();
    
    
  }
//obstacle
  
  
  fill(50, 50, 100);
  //rect(400, height - 50, 50, 50);
}
