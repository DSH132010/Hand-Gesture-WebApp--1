//Geting The DOM Element And Declaring ModelUrl In Const

const camera = document.getElementById("camera");
const result = document.getElementById("result");
const object = document.getElementById("object");
const accuracy = document.getElementById("acurracy");
const navOverlay = document.querySelector('.overlay');
const NavBtn = document.querySelector('.NavBtn');
const NavBtnClose = document.querySelector('.NavBtnClose');
const model = '';


NavBtn.addEventListener('click', e => {
    navOverlay.classList.add("open-Overlay");
});

NavBtnClose.addEventListener('click', e => {
    navOverlay.classList.remove("open-Overlay");
});

Webcam.set({
    width:400,
    height:300,
    image_format:'png',
    png_quality:100
});

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(data_uri => {
        result.innerHTML = '<img id="captured_image" class="capturedImage" src="' + data_uri + '"/>';    
        console.log("Succesfully Captured Image !!");
    });
}

console.log('ml5 version: ', ml5.version);
classifier = ml5.imageClassifier(model , modelLoaded);

function modelLoaded() {
    console.log('Model Loaded !');
}    

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
    console.log(classifier);
    console.log(img);
}   