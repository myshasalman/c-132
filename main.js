img="";
statuss="";
function preload()
{
img= loadImage("dog_cat.jpg");
}
function setup()
{
canvas= createCanvas(640,420);
canvas.center()
objectDetector= ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML= "STATUS : DETECTING OBJECTS";
}
 function modelLoaded()
 {
     console.log("Model Loaded");
     statuss= true;
     objectDetector.detect(img, gotResult);
 }

 function gotResult(error, results)
 {
     if (error)
     {
         console.error(error);
     }
     else{
         console.log(results);
     }
 }
function draw()
{
image(img,0,0,640,420);
fill("#0598fa");
text("DOG",45,75);
noFill();
stroke("#fa051d");
rect(30, 60, 450, 350);

fill("#0598fa")
text("cat", 320,120);
noFill();
stroke("#fa051d");
rect(300,90,270,320);
}