function startClassification() {

    navigator.mediaDevices.getUserMedia({
        audio: true
    });

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/cdWLEuyIq/model.json", modelRead)
}


function modelRead() {
    classifier.classify(gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error)
    }
    // console.log(results)

    r = Math.floor(Math.random() * 255) + 1;

    g = Math.floor(Math.random() * 255) + 1;

    b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = "Posso ouvir - "+ results[0].label;

    document.getElementById("result_label").style.color = "rgb("+r+", "+g+", "+b+")";

    document.getElementById("result_confidence").innerHTML = "Precisão - "+ (results[0].confidence*100).toFixed(2) + "%";

    document.getElementById("result_confidence").style.color = "rgb("+r+", "+g+", "+b+")";

    img1 = document.getElementById("dog");
    img2 = document.getElementById("bird");
    img3 = document.getElementById("cat");
   

    if(results[0].label == "Estalo"){
        img1.src = "cao.gif";  
        img2.src = "passarojpg.jpg";
        img3.src = "gato.jpg";
        
    }

    else if(results[0].label == "Palma"){   
        img1.src = "kakashi-removebg-preview.png";
        img2.src = "sasukegif.gif";
        img3.src = "MasterChief.webp";
       
    }

    else if(results[0].label == "Assovio"){
        img1.src = "kakashi-removebg-preview.png";
        img2.src = "sasuke.png";
        img3.src = "MasterChief.webp";
        
    }

}   