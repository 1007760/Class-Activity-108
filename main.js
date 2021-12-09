function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}

function modelReady()
{
    classifier.classify( gotResults);
}

function gotResults()
{
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() + 255) +1;
        random_number_g = Math.floor(Math.random() + 255) + 1;
        random_number_b =Math.floor(Math.random() + 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document,getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+" , "+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.png');
        img1 = document.getElementById('https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.png');
        img2 = document.getElementById('https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.png');
        img3 = document.getElementById('https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.png');

        if (results[0].label == "Clap") {
            img.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.gif';
            img1 = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.png';
            img2 = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.png';
            img3 = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.png';
        }
        else if (results[0].label == "Bell") {
            img.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.png';
            img1 = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.gif';
            img2 = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.png';
            img3 = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.png';
        }
        else if (results[0].label == "Snapping") {
            img.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.png';
            img1 = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.png';
            img2 = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.gif';
            img3 = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.png';
        }
        else {
            img.src = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-01.png';
            img1 = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-02.png';
            img2 = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-03.png';
            img3 = 'https://mahdihat791.github.io/v2/Sound_controlled_alien/aliens-04.gif';
        }
    }
}