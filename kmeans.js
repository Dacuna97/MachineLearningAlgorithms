"use strict"

class KMeans {
    constructor(data) {
        this.tolerance = 0.01;
        this.b = 2;
        this.data = data;
        this.centers = [[4.6, 3.0, 4.0, 0.0], [6.8, 3.4, 4.6, 0.7]];
        this.old_centers = [];
        this.centers.forEach(row => this.old_centers.push(row));
        this.cols = this.data.length; //number of different data 
        this.rows = 2; //only 2 types of classes
        this.train();
    }

    train() {
        let stop = false;
        while (!stop) {
            this.matrix = [];
            this.data.forEach((element, index) => {
                let belongingDegree = this.belonging_degree(0, index);
                this.matrix.push([belongingDegree, 1 - belongingDegree]);
            });
            this.newCenters();
            let value_centers;
            this.centers.forEach((element, index) => {
                value_centers = this.distance(element, this.old_centers[index]);
                if (Math.sqrt(value_centers) < this.tolerance) {
                    stop = true;
                } else {
                    stop = false;
                }
            });
            this.old_centers = [];
            this.centers.forEach(row => this.old_centers.push(row));
        }
        //alert("finish");
        console.log(this.centers);
    }

    distance(x, v) {
        let sol = 0;
        x.forEach((element, index) => {
            sol += Math.pow(element - v[index], 2);
        });
        return sol;
    }

    belonging_degree(i, j) {
        let dividend = 1 / this.distance(this.data[j], this.centers[i]);
        let divisor = 0;
        for (let index = 0; index < this.rows; index++) {
            divisor += 1 / this.distance(this.data[j], this.centers[index]);
        }
        return dividend / divisor;
    }

    newCenters() {
        for (let i = 0; i < this.rows; i++) {
            this.centers[i] = [];
            let dividend = [0, 0, 0, 0];
            let divisor = 0;
            let contador = 0;
            this.matrix.forEach((element, index) => {
                contador++;
                divisor += (Math.pow(element[i], 2));
                this.data[index].forEach((elem,j) => {
                    contador++;
                    dividend[j] += (Math.pow(element[i], 2) * elem);
                });
            });
            dividend.forEach((element, index) => {
                this.centers[i].push(element / divisor);
            });
           
        }
    }
    belongs(properties) {
        let degree1 = this.distance(properties, this.centers[0]);
        let degree2 = this.distance(properties, this.centers[1]);
        if (degree1 < degree2) {
            return "Iris setosa";
        } else {
            return "Iris versicolor";
        }
    }
}




