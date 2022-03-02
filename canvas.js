function preload(){

}
function setup(){
    Canvas = createCanvas(300,300);
    Canvas.position(300,300);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,300,300);
    fill('green')
    circle(10,290,40);
    circle(285,10,40);
    circle(285,290,40);
    circle(10,10,40);
    

    fill('red')
    rect(10, 5, 10, 300);
    rect(280, 5, 10, 300);
    rect(10, 285, 300, 10);
    rect(10, 5, 300, 10);
}
function snap(){
    save('img1.png')
}