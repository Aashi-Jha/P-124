function setup(){
    video=createCapture(VIDEO);
    video.size(500,550);
    video.position(10,70);
    canvas=createCanvas(500,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model is Initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}

function draw(){
    background('#c7e9ff');
}