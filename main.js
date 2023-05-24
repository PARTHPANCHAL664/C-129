destiny_Neffex_song = ""

best_of_me_song = "";
destiny_song = "";

leftWristX = 0
leftWristY = 0

rightWristX = 0
rightWristY = 0

scoreleftWrist = 0


function preload() {
    best_of_me_song = loadSound("Best of Me.mp3");
    destiny_song = loadSound("Destiny.mp3")
}

function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    image(video, 0, 0, 600, 530)

    fill("#0500ff");
    stroke("#ff0032");

    destiny_Neffex_song = destiny_song.isPlaying();
    console.log(destiny_Neffex_song);

    if(scoreleftWrist > 0.2){
        circle(leftWristX,leftWristY,20)
        destiny_song.stop()
        if(destiny_Neffex_song == false)
        {
            destiny_song.play()
        }
        else{
            document.getElementById("").innerHTML = "Song Name : Destiny song Is Playing"
        }
    }
}

function modelLoaded() {
    console.log("Pose Net Is Initialized!!")
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);

    scoreleftWrist = results[0].pose.keypoints[9].score;
    console.log(scoreleftWrist)

    leftWristX = results[0].pose.leftWrist.x
    leftWristY = results[0].pose.leftWrist.y
    console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

    rightWristX = results[0].pose.rightWrist.x
    rightWristY = results[0].pose.rightWrist.y
    console.log("rightWristX = " + rightWristX + "rightWristY" + rightWristY);

    }
}