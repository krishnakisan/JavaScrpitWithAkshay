var x = 10;
function a (){
    var x = 20;
}
a();
console.log(window.x);
console.log(this.x);