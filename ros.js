var ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
});

ros.on('connection', function() {
    document.getElementById("status").innerHTML = "Connected";
});

ros.on('error', function(error) {
    document.getElementById("status").innerHTML = "Error";
});

ros.on('close', function() {
    document.getElementById("status").innerHTML = "Closed";
});

var txt_listener = new ROSLIB.Topic({
    ros : ros,
    name : '/txt_msg',
    messageType : 'std_msgs/String'
});

const emotion_pub = new ROSLIB.Topic({
    ros : ros,
    name : "/set_emotion",
    messageType : 'std_msgs/String'
});