"use strict"
var data = [["5.1", "3.5", "1.4", "0.2", "Iris-setosa"],
["4.9", "3.0", "1.4", "0.2", "Iris-setosa"],
["4.7", "3.2", "1.3", "0.2", "Iris-setosa"],
["4.6", "3.1", "1.5", "0.2", "Iris-setosa"],
["5.0", "3.6", "1.4", "0.2", "Iris-setosa"],
["5.4", "3.9", "1.7", "0.4", "Iris-setosa"],
["4.6", "3.4", "1.4", "0.3", "Iris-setosa"],
["5.0", "3.4", "1.5", "0.2", "Iris-setosa"],
["4.4", "2.9", "1.4", "0.2", "Iris-setosa"],
["4.9", "3.1", "1.5", "0.1", "Iris-setosa"],
["5.4", "3.7", "1.5", "0.2", "Iris-setosa"],
["4.8", "3.4", "1.6", "0.2", "Iris-setosa"],
["4.8", "3.0", "1.4", "0.1", "Iris-setosa"],
["4.3", "3.0", "1.1", "0.1", "Iris-setosa"],
["5.8", "4.0", "1.2", "0.2", "Iris-setosa"],
["5.7", "4.4", "1.5", "0.4", "Iris-setosa"],
["5.4", "3.9", "1.3", "0.4", "Iris-setosa"],
["5.1", "3.5", "1.4", "0.3", "Iris-setosa"],
["5.7", "3.8", "1.7", "0.3", "Iris-setosa"],
["5.1", "3.8", "1.5", "0.3", "Iris-setosa"],
["5.4", "3.4", "1.7", "0.2", "Iris-setosa"],
["5.1", "3.7", "1.5", "0.4", "Iris-setosa"],
["4.6", "3.6", "1.0", "0.2", "Iris-setosa"],
["5.1", "3.3", "1.7", "0.5", "Iris-setosa"],
["4.8", "3.4", "1.9", "0.2", "Iris-setosa"],
["5.0", "3.0", "1.6", "0.2", "Iris-setosa"],
["5.0", "3.4", "1.6", "0.4", "Iris-setosa"],
["5.2", "3.5", "1.5", "0.2", "Iris-setosa"],
["5.2", "3.4", "1.4", "0.2", "Iris-setosa"],
["4.7", "3.2", "1.6", "0.2", "Iris-setosa"],
["4.8", "3.1", "1.6", "0.2", "Iris-setosa"],
["5.4", "3.4", "1.5", "0.4", "Iris-setosa"],
["5.2", "4.1", "1.5", "0.1", "Iris-setosa"],
["5.5", "4.2", "1.4", "0.2", "Iris-setosa"],
["4.9", "3.1", "1.5", "0.1", "Iris-setosa"],
["5.0", "3.2", "1.2", "0.2", "Iris-setosa"],
["5.5", "3.5", "1.3", "0.2", "Iris-setosa"],
["4.9", "3.1", "1.5", "0.1", "Iris-setosa"],
["4.4", "3.0", "1.3", "0.2", "Iris-setosa"],
["5.1", "3.4", "1.5", "0.2", "Iris-setosa"],
["5.0", "3.5", "1.3", "0.3", "Iris-setosa"],
["4.5", "2.3", "1.3", "0.3", "Iris-setosa"],
["4.4", "3.2", "1.3", "0.2", "Iris-setosa"],
["5.0", "3.5", "1.6", "0.6", "Iris-setosa"],
["5.1", "3.8", "1.9", "0.4", "Iris-setosa"],
["4.8", "3.0", "1.4", "0.3", "Iris-setosa"],
["5.1", "3.8", "1.6", "0.2", "Iris-setosa"],
["4.6", "3.2", "1.4", "0.2", "Iris-setosa"],
["5.3", "3.7", "1.5", "0.2", "Iris-setosa"],
["5.0", "3.3", "1.4", "0.2", "Iris-setosa"],
["7.0", "3.2", "4.7", "1.4", "Iris-versicolor"],
["6.4", "3.2", "4.5", "1.5", "Iris-versicolor"],
["6.9", "3.1", "4.9", "1.5", "Iris-versicolor"],
["5.5", "2.3", "4.0", "1.3", "Iris-versicolor"],
["6.5", "2.8", "4.6", "1.5", "Iris-versicolor"],
["5.7", "2.8", "4.5", "1.3", "Iris-versicolor"],
["6.3", "3.3", "4.7", "1.6", "Iris-versicolor"],
["4.9", "2.4", "3.3", "1.0", "Iris-versicolor"],
["6.6", "2.9", "4.6", "1.3", "Iris-versicolor"],
["5.2", "2.7", "3.9", "1.4", "Iris-versicolor"],
["5.0", "2.0", "3.5", "1.0", "Iris-versicolor"],
["5.9", "3.0", "4.2", "1.5", "Iris-versicolor"],
["6.0", "2.2", "4.0", "1.0", "Iris-versicolor"],
["6.1", "2.9", "4.7", "1.4", "Iris-versicolor"],
["5.6", "2.9", "3.6", "1.3", "Iris-versicolor"],
["6.7", "3.1", "4.4", "1.4", "Iris-versicolor"],
["5.6", "3.0", "4.5", "1.5", "Iris-versicolor"],
["5.8", "2.7", "4.1", "1.0", "Iris-versicolor"],
["6.2", "2.2", "4.5", "1.5", "Iris-versicolor"],
["5.6", "2.5", "3.9", "1.1", "Iris-versicolor"],
["5.9", "3.2", "4.8", "1.8", "Iris-versicolor"],
["6.1", "2.8", "4.0", "1.3", "Iris-versicolor"],
["6.3", "2.5", "4.9", "1.5", "Iris-versicolor"],
["6.1", "2.8", "4.7", "1.2", "Iris-versicolor"],
["6.4", "2.9", "4.3", "1.3", "Iris-versicolor"],
["6.6", "3.0", "4.4", "1.4", "Iris-versicolor"],
["6.8", "2.8", "4.8", "1.4", "Iris-versicolor"],
["6.7", "3.0", "5.0", "1.7", "Iris-versicolor"],
["6.0", "2.9", "4.5", "1.5", "Iris-versicolor"],
["5.7", "2.6", "3.5", "1.0", "Iris-versicolor"],
["5.5", "2.4", "3.8", "1.1", "Iris-versicolor"],
["5.5", "2.4", "3.7", "1.0", "Iris-versicolor"],
["5.8", "2.7", "3.9", "1.2", "Iris-versicolor"],
["6.0", "2.7", "5.1", "1.6", "Iris-versicolor"],
["5.4", "3.0", "4.5", "1.5", "Iris-versicolor"],
["6.0", "3.4", "4.5", "1.6", "Iris-versicolor"],
["6.7", "3.1", "4.7", "1.5", "Iris-versicolor"],
["6.3", "2.3", "4.4", "1.3", "Iris-versicolor"],
["5.6", "3.0", "4.1", "1.3", "Iris-versicolor"],
["5.5", "2.5", "4.0", "1.3", "Iris-versicolor"],
["5.5", "2.6", "4.4", "1.2", "Iris-versicolor"],
["6.1", "3.0", "4.6", "1.4", "Iris-versicolor"],
["5.8", "2.6", "4.0", "1.2", "Iris-versicolor"],
["5.0", "2.3", "3.3", "1.0", "Iris-versicolor"],
["5.6", "2.7", "4.2", "1.3", "Iris-versicolor"],
["5.7", "3.0", "4.2", "1.2", "Iris-versicolor"],
["5.7", "2.9", "4.2", "1.3", "Iris-versicolor"],
["6.2", "2.9", "4.3", "1.3", "Iris-versicolor"],
["5.1", "2.5", "3.0", "1.1", "Iris-versicolor"],
["5.7", "2.8", "4.1", "1.3", "Iris-versicolor"]];

data = data.map(row => row.map((elem) => Number(elem)));
data = data.map(row => row.filter(elem => !isNaN(elem)));
var kmeans = new KMeans(data);
var kmeanscenters = kmeans.centers;
var bayes = new Bayes(data);

var lloyd = new Lloyd(data);
var lloydcenter1 = lloyd.center1;
var lloydcenter2 = lloyd.center2;

function showCenter(center, i){
    let sol = "CENTER " + i + " (";
    center.forEach((element, i) => {
        sol += element;
        if (i < center.length - 1) {
            sol += ", ";
        }
    });
    sol += ")\n";
    return sol;
}

$(function () {
    let solKmeans1 = showCenter(kmeanscenters[0], 1);
    let solKmeans2 = showCenter(kmeanscenters[1], 2); 
    $(".KmeansCenter1").text(solKmeans1);
    $(".KmeansCenter2").text(solKmeans2);
    $(".KmeansIris01").text("[5.1, 3.5, 1.4, 0.2] = " + kmeans.belongs([5.1, 3.5, 1.4, 0.2]));// Iris 1. Setosa
    $(".KmeansIris02").text("[6.9, 3.1, 4.9, 1.5] = " + kmeans.belongs([6.9, 3.1, 4.9, 1.5])); // Iris 2.  versicolor
    $(".KmeansIris03").text("[5.0, 3.4, 1.5, 0.2] = " + kmeans.belongs([5.0, 3.4, 1.5, 0.2])); //Iris 3. setosa

    let solLloyd1 = showCenter(lloydcenter1, 1);
    let solLloyd2 = showCenter(lloydcenter2, 2);
    $(".LloydCenter1").text(solLloyd1);
    $(".LloydCenter2").text(solLloyd2);

    $(".BayesIris01").text("[5.1, 3.5, 1.4, 0.2] = " + bayes.belongs([5.1, 3.5, 1.4, 0.2]));// Iris 1. Setosa
    $(".BayesIris02").text("[6.9, 3.1, 4.9, 1.5] = " + bayes.belongs([6.9, 3.1, 4.9, 1.5])); // Iris 2.  versicolor
    $(".BayesIris03").text("[5.0, 3.4, 1.5, 0.2] = " + bayes.belongs([5.0, 3.4, 1.5, 0.2])); //Iris 3. setosa

    $(".LloydIris01").text("[5.1, 3.5, 1.4, 0.2] = " + lloyd.belongs([5.1, 3.5, 1.4, 0.2]));// Iris 1. Setosa
    $(".LloydIris02").text("[6.9, 3.1, 4.9, 1.5] = " + lloyd.belongs([6.9, 3.1, 4.9, 1.5])); // Iris 2.  versicolor
    $(".LloydIris03").text("[5.0, 3.4, 1.5, 0.2] = " + lloyd.belongs([5.0, 3.4, 1.5, 0.2])); //Iris 3. setosa
   
});