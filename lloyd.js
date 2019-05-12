"use strict"

class Lloyd {
    constructor(data) {
        this.data = data;
        this.tolerance = Math.pow(10, -10);
        this.center1 = [4.6, 3.0, 4.0, 0.0];
        this.center2 = [6.8, 3.4, 4.6, 0.7];
        this.oldcenter1 = [];
        this.oldcenter2 = [];
        this.center1.forEach(element => this.oldcenter1.push(element));
        this.center2.forEach(element => this.oldcenter2.push(element));
        this.learning_reason = 0.1;
        this.train();
    }

    train() {
        let stop = false;
        for (let k = 0; k < 10 && !stop; k++) {
            this.data.forEach(row => {
                let distance1 = this.distance(row, this.center1);
                let distance2 = this.distance(row, this.center2);
                if (distance1 < distance2) {
                    if (distance1 === 1) {
                        this.center1 = row;
                    } else if (distance1 != 0) {
                        this.center1 = this.updateCenter(row, this.center1);
                    }

                } else {
                    if (distance2 === 1) {
                        this.center2 = row;
                    } else if (distance2 != 0) {
                        this.center2 = this.updateCenter(row, this.center2);
                    }
                }

            });
            let distance1 = this.distance(this.oldcenter1, this.center1);
            let distance2 = this.distance(this.oldcenter2, this.center2);
            if(distance1 < this.tolerance && distance2 < this.tolerance){
                stop = true;
            }
            this.oldcenter1 = [];
            this.oldcenter2 = [];
            this.center1.forEach(element => this.oldcenter1.push(element));
            this.center2.forEach(element => this.oldcenter2.push(element));
        }

    }
    updateCenter(row, center) {
        let sol = row.map((element, i) => element - center[i]);
        sol = sol.map(element => element * this.learning_reason);
        sol = sol.map((element, i) => element + center[i]);
        return sol;
    }

    distance(x, v) {
        let sol = 0;
        x.forEach((element, index) => {
            sol += Math.pow(element - v[index], 2);
        });
        return Math.sqrt(sol);
    }

    belongs(x){
        let distance1 = this.distance(x,this.center1);
        let distance2 = this.distance(x, this.center2);
        if(distance1 < distance2){
            return "Iris-setosa";
        } else{
            return "Iris-versicolor"
        }
    }




}




