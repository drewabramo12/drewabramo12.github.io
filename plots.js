function random_num(n) {
    var rand = [];
    for (i = 0; i<n; i++){
        rand.push(Math.random()*10);
    }
    return rand;
}
var x = [1,2,3,4,5];
var y1 = random_num(5);
var y2 = random_num(5);
console.log(y1);
console.log(y2);

var trace1 = {
    x:x,
    y:y1,
    type: "bar",
    name: "Cars"
}

var trace2 = {
    x:x,
    y:y2,
    type: "bar",
    name: "Cars"
}

Plotly.newPlot("plot",[trace1,trace2])