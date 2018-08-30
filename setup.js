

let same = (length,number,start=1,stop=1) => [start].concat(new Array(length-2).fill(number)).concat(stop);
let A = new AvoNet([2,3,2,1]);
//let A = new AvoNet([2,2,1]);
let to = [0.01];
let ex = [0.99,0.01];
let g1,g2,r1,r2;


let interval = requestAnimationFrame(draw);
document.getElementById("Task").innerHTML = "Task: XOr Problem ";

function draw() {
  let test = [Math.random(),Math.random()];
  let answer = (test[1] < ge(test[0]) && test[1] > ef(test[0])) ? [0.99] : [0.01];

  ctx.fillStyle = ((A.guess([0.01,0.01]) > 0.5)) ? "green" : "red";
  ctx.fillRect(0,c.height,50,-50);

  ctx.fillStyle = ((A.guess([0.01,0.99]) > 0.5)) ? "green" : "red";
  ctx.fillRect(0,0,50,50);

  ctx.fillStyle = ((A.guess([0.99,0.01]) > 0.5)) ? "green" : "red";
  ctx.fillRect(c.width/2,c.height,-50,-50);

  ctx.fillStyle = ((A.guess([0.99,0.99]) > 0.5)) ? "green" : "red";
  ctx.fillRect(c.width/2,0,-50,50);

  document.getElementById("Task").innerHTML = "Task: XOr Problem | Iteration : "+A.gen;

  if(A.gen%1000 == 0) {
    ctx.clearRect(c.width/2,0,c.width/2,c.height);
    bound();
  }


  batch(5000);
    if(A.gen <= 50000)
  interval = requestAnimationFrame(draw);
    else {
      console.log("Done!");
    ctx.clearRect(c.width/2,0,c.width/2,c.height);
    bound();
    }
}

let ge = (x) => -(x-1)+0.4;
let ef = (x) => -x+0.6;

let batch = (size = 100) => {
for(let i=0;i<100;i++) {
  let test = [Math.random(),Math.random()];
  let answer = (test[1] < ge(test[0]) && test[1] > ef(test[0])) ? [0.99] : [0.01];
  A.train(test,answer);
}
}


for(let i=0;i<1000;i++) {
  let x = Math.random();
  let y = Math.random();
  ctx.fillStyle = (y < ge(x) && y > ef(x)) ? "green" : "red";
  ctx.fillRect(x*c.width/2,c.height-y*c.height,5,5);
}

let bound = () => {
  for(let i=0;i<1000;i++) {
  let x = Math.random();
  let y = Math.random();
  ctx.fillStyle = ((A.guess([x,y]) > 0.5)) ? "blue" : "yellow";
  ctx.fillRect(x*c.width/2+c.width/2,c.height-y*c.height,5,5);
}
}


let saveFile = function(filename, data) {
    var blob = new Blob([data], {type: 'text/csv'});
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else{
        var elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;
        document.body.appendChild(elem);
        elem.click();
        document.body.removeChild(elem);
    }
}
