"use strict"

class Bayes {
    constructor(data) {
        this.data = data;
        this.m1 = [];
        this.m2 = [];
        this.train();
    }

    train() {
        this.m1 = this.calculateM(0, 50);
        this.m2 = this.calculateM(50, 100);
        this.c1 = this.calculateC(0, 50, this.m1);
        this.c2 = this.calculateC(50, 100, this.m2);
    }

    calculateM(start, end) {
        let aux = [0, 0, 0, 0];
        for (let i = start; i < end; i++) {
            data[i].forEach((elem, j) => {
                aux[j] += elem;
            });
        }
        aux.forEach((elem, index) => {
            aux[index] = elem / 50;
        });
        return aux;
    }

    calculateC(start, end, m) {
        let c = [];
        for (let i = start; i < end; i++) {
            let difference = [];
            this.data[i].forEach((elem, index) => {
                difference.push(elem - m[index]);
            });
            let multiplication = [];
            difference.forEach(element => {
                let aux = [];
                difference.forEach(element2 => {
                    aux.push(element * element2);
                });
                multiplication.push(aux);
            });
            c.push(multiplication);
        }
        let sol = [];
        for (let i = 0; i < 4; i++) {
            sol.push([0, 0, 0, 0]);
        }
        c.forEach(matrix => {
            sol = this.matrixAddition(sol, matrix);
        });
        sol = sol.map(row => row.map(elem => elem / row.length));
        return sol;
    }
    matrixAddition(a, b) {
        return a.map(function (n, i) {
            return n.map(function (o, j) {
                return o + b[i][j];
            });
        });
    }
    belongs(x) {
        let c1_inverted = math.inv(this.c1);
        let c2_inverted = math.inv(this.c2);
        let distance1 = [];
        let distance2 = [];
        x.forEach((element, i) => {
            distance1.push(element - this.m1[i]);
        });
        x.forEach((element, i) => {
            distance2.push(element - this.m2[i]);
        });
        let aux1 = distance1;
        let aux2 = distance2;
        distance1 = math.multiply(distance1, c1_inverted);
        distance2 = math.multiply(distance2, c2_inverted);
        let sol1 = 0;
        let sol2 = 0;
        distance1.forEach(element => {
            aux1.forEach(elem => {
                sol1 += element * elem;
            });
        });
        distance2.forEach(element => {
            aux2.forEach(elem => {
                sol2 += element * elem;
            });
        });
        if(distance1 < distance2){
            return "Iris-setosa";
        } else{
            return "Iris-versicolor";
        }
    }





}



