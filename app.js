
function onReady(){
    console.log('Stating clock');
    var clock = new Clock('clock');
    var clock2 = new Clock('clock2');




}

function Clock(id){
        this.updateClock = function () {
            var data = new Date;
            var clock = document.getElementById(id);
            clock.innerHTML = this.formatDigits(data.getHours()) + ":" + this.formatDigits(data.getMinutes()) +
                ":" + this.formatDigits(data.getSeconds());
        };
        this.formatDigits = function(val){
            if(val < 10){
                val = '0' + val;
            }
            return val;
        };
        // that was created to have acess to the function
        var that = this;
        setInterval(function(){
            that.updateClock();

            }, 1000);
        that.updateClock();

}


window.onload = onReady();



///////////////////////// Section 2 Video 8


// function onReady(){
//     console.log('Stating clock');
//     var clock = createClock('clock');
//     var clock2 = createClock('clock2');
// }
//
// function createClock(id){
//     var d = {
//         updateClock: function () {
//             var data = new Date;
//
//             var clock = document.getElementById(id);
//             clock.innerHTML = this.formatDigits(data.getHours()) + ":" + this.formatDigits(data.getMinutes()) +
//                 ":" + this.formatDigits(data.getSeconds());
//         },
//         formatDigits: function(val){
//             if(val < 10){
//                 val = '0' + val;
//             }
//             return val;
//         }
//     };
//     setInterval(function(){
//         d.updateClock();
//     }, 1000);
//     d.updateClock();
//     return d;
// }
//
//
// window.onload = onReady();


///////////////////////// Section 2 Video 7




// function onReady() {
//     createClock('clock');
//                 createClock('clock2');
//
// }
//



// function createClock(id) {
//     var c = new Object();
//     c.updateClock = function () {
//         var date = new Date();
//         document.getElementById(id).innerHTML =
//             formatDigits(date.getHours()) + ':' + formatDigits(date.getMinutes()) + ':' + formatDigits(date.getSeconds());
//     }
//     setInterval(function () {
//         c.updateClock();
//     }, 1000);
//
// }
//
// function formatDigits(v) {
//     if (v < 10) {
//         v = '0' + v;
//     }
//     return v;
// }


// Window.onload = onReady();

///**
// * Created by josecarlossantos on 10/16/17.
// */
//
//function onReady(){
//
//
//    createClock();
//
//    function createClock(){
//        var c = new Date();
//            c.updateClock = function(){
//
//            var date = new Date();
//            var clock = document.getElementById("clock");
//            clock.innerHTML = formatDigits(date.getHours()) + ":" + formatDigits(date.getMinutes()) + ":" + formatDigits(date.getSeconds());
//
//            };
//            setInterval(c.updateClock, 1000);
//            c.updateClock();
//
//
//    }
//
//
//    function formatDigits(val){
//       if(val < 10){
//           val = "0" + val;
//       }
//       return val;
//
//    }
//
//
//}
//
//Window.onload = onReady();

///////////////////////// Section 1 Video 6