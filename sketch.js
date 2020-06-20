 score = 0;

function preload(){
    titleimg = loadImage("father's-day-1.png");
    ques1 = loadImage("ques1.jpg");
    op11 = loadImage("option(1)1.jpg"); 
    op12 = loadImage("option(1)2.jpg"); 
    op13 = loadImage("option(1)3.jpg");
    op14 = loadImage("option(1)4.jpg");
  
}
function setup(){
  createCanvas(displayWidth-37,displayHeight-200);


   frameRate(35);
}

function draw(){
background("orange");

var titlephoto = createSprite(displayWidth/4-120,displayHeight/2-230);
titlephoto.addImage(titleimg);

title = createElement('h1');
title.html("FATHER'S DAY QUOTES AND QUESTION");
title.position(displayWidth/2 - 165,5);




q1 = createSprite(displayWidth/2-500,displayHeight/2+60);
q1.addImage(ques1);
q1.scale = 0.5;

opt11 = createSprite(displayWidth/2-250,displayHeight/2+20);
opt11.addImage(op11);
opt11.scale = 0.5;

opt12 = createSprite(displayWidth/2-250,displayHeight/2+90);
opt12.addImage(op12);
opt12.scale = 0.55;

opt13 = createSprite(displayWidth/2-110,displayHeight/2+20);
opt13.addImage(op13);
opt13.scale = 0.55;

opt14 = createSprite(displayWidth/2-110,displayHeight/2+90);
opt14.addImage(op14);
opt14.scale = 0.55;

opt11.visible=false;
opt12.visible=false;
opt13.visible=false;
opt14.visible=false;

if(frameCount%20===0){
  opt11.visible = true;
  opt12.visible = true;
  opt13.visible = true;
  opt14.visible = true;
  }

if(mousePressedOver(opt11)){
   correct = createElement('h1');
  correct.html("CORRECT");
  correct.position(1100,20);
  score = 10;


}
if(mousePressedOver(opt12)){
  false1 = createElement('h1');
  false1.html("FALSE");
  false1.position(1100,150);


}

if(mousePressedOver(opt13)){
 var false1 = createElement('h1');
  false1.html("FALSE");
  false1.position(1100,150);


}

if(mousePressedOver(opt14)){
 var false1 = createElement('h1');
  false1.html("FALSE");
  false1.position(1100,150);

}
quote1 = createElement('h1');
quote1.html("“Dad Is A son’s first hero, a daughter’s first love.”")
quote1.position(displayWidth/2-200,displayHeight/2-250);

quote2 = createElement('h1');
quote2.html("“One father is more than a hundred schoolmasters.”")
quote2.position(displayWidth/2-200,displayHeight/2-210);

quote3 = createElement('h1');
quote3.html("“A father doesn’t tell you that he loves you. He shows you.”")
quote3.position(displayWidth/2-200,displayHeight/2-170);

quote4 = createElement('h1');
quote4.html("“Fathers just have a way of putting everything together.”")
quote4.position(displayWidth/2-200,displayHeight/2-130);

quote5 = createElement('h1');
quote5.html("“No music is so pleasant to my ears as that word―father.”")
quote5.position(displayWidth/2-200,displayHeight/2-80);

quote6 = createElement('h1');
quote6.html("“To son, the name of father was another name for superhero.”")
quote6.position(displayWidth/2-200,displayHeight/2-40);


 
drawSprites();
fill(0);
textSize(35);
text("Score:"+score,1150,100);
}
