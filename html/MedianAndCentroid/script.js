const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let myPoints = [];
let mySecwetPoints = [];
let counter = 0;


let ab = new LinearFunction(10,100);
let bc = new LinearFunction(10,100);
let ca = new LinearFunction(10,100);
let abc = new LinearFunction(10,100);
let bca = new LinearFunction(10,100);
let cab = new LinearFunction(10,100);

function SetUp(){

    for(let i = 0; i < 4; i++){
        let point = new Point(GetRNGsus(canvas.width), GetRNGsus(canvas.height),
                                20, "#" + Math.floor(GetRNGsus(255*255*255)).toString(16));
            myPoints.push(point);
            myPoints[i].drag();
    }

    for(let i = 0; i < 3; i++){
        let point = new Point(GetRNGsus(canvas.width), GetRNGsus(canvas.height),
                                20, "#" + Math.floor(GetRNGsus(255*255*255)).toString(16));
            mySecwetPoints.push(point);
    }


    Update();
}

function Update(){
    context.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(Update);

    ab.letTwoPointDefineLine(myPoints[0],myPoints[1]);
    bc.letTwoPointDefineLine(myPoints[1],myPoints[2]);
    ca.letTwoPointDefineLine(myPoints[2],myPoints[0]);

    mySecwetPoints[0].x = (myPoints[1].x + myPoints[2].x) / 2;
    mySecwetPoints[0].y = (myPoints[1].y + myPoints[2].y) / 2;
    abc.letTwoPointDefineLine(myPoints[0],mySecwetPoints[0]);

    mySecwetPoints[1].x = (myPoints[2].x + myPoints[0].x) / 2;
    mySecwetPoints[1].y = (myPoints[2].y + myPoints[0].y) / 2;
    bca.letTwoPointDefineLine(myPoints[1],mySecwetPoints[1]);

    mySecwetPoints[2].x = (myPoints[0].x + myPoints[1].x) / 2;
    mySecwetPoints[2].y = (myPoints[0].y + myPoints[1].y) / 2;
    cab.letTwoPointDefineLine(myPoints[2],mySecwetPoints[2]);


    myPoints[3].x = abc.intersection(bca).x;
    myPoints[3].y = abc.intersection(bca).y;

    for(let i = 0; i < 4; i++){
        myPoints[i].draw(context);
        myPoints[i].print(context, i);
    }

    ab.draw(context,canvas);
    bc.draw(context,canvas);
    ca.draw(context,canvas);

    abc.draw(context,canvas);
    bca.draw(context,canvas);
    cab.draw(context,canvas);


}

SetUp();

function GetRNGsus(max){
    return Math.random()*max;
}
