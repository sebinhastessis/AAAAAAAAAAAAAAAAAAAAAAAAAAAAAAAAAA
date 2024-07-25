function setup(){
    canvas=createCanvas(500, 300);
    canvas.center();
    save=createCapture(VIDEO);
    classifier=ml5.imageClassifier('MobileNet',palabra);

    canvas.hide()   
}
function draw(){
    image(save,0,0,500,300);
    classifier.classify(save,spreen)
}
function palabra(){
console.log("una cosa");
}
function spreen(ibai){
document.getElementById("iid").innerHTML=ibai[1].label;
document.getElementById("idd").innerHTML=ibai[1].confidence;
}