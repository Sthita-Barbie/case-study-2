function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 450)
    canvas.position(670, 110);

    poseNet = ml5.poseNet(video ,modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log('PoseNet is initialized and Loaded');
}

function draw()
{
    background("#a1a5bf")
        background("#5196e3");
        document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
        textSize(difference);
        fill("#00ff0a");
        text('Sthitapragyan Panda',50,400);
}

function gotPoses(results)
{
    if(error){
        console.error(error);
    }
    if(results.length > 0)
    {
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}