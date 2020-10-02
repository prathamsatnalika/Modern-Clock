function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90);

  
 let hr = hour();
 let mn = minute();
 let sc = second();


strokeWeight(8);
noFill();

  stroke(68, 43, 209);
  let secondsAngle = map(sc, 0 , 60 , 0 , 360);
  arc(0, 0 , 300 , 300 , 0 , secondsAngle);

  stroke(255,165,0);
  let minuteAngle = map(mn, 0 , 60 , 0 , 360);
  arc(0, 0 , 280 , 280 , 0 , minuteAngle );

  stroke(255, 38, 81);
  let hourAngle = map(hr % 12 , 0 , 12 , 0 , 360);
  arc(0, 0 , 260 , 260 , 0 , hourAngle);

push();
rotate(secondsAngle);
//fill("dark blue")
stroke(102, 255, 0);
line(0,0,100,0);
pop();

push();
rotate(minuteAngle);
stroke(214, 68, 192);
line(0,0,75,0);
pop();

push();
rotate(hourAngle);
stroke(255,223,0);
//stroke(45, 67, 229)
line(0,0,50,0);
pop();

stroke(255); 
point(0,0);

}