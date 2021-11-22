function fn() {

    var name = "krishna";
    var city = "bidar";
    console.log(name,city);
}

// fn();// funtion call

function fn1(f) {
    f();
}

fn1(function (){
    console.log("I am call back function");

});