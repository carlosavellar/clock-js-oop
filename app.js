function onReady(){
    var clock = createClock('clock');
    var clock2 = createClock('clock2');
}

function createClock(id){
    var c = new Object();
    c.updateClock = function(){
        var date = new Date();
        var clock = document.getElementById(id);
        clock.innerHTML =
            this.formatDigits(date.getHours()) + ':' +
            this.formatDigits(date.getMinutes()) + ':' +
            this.formatDigits(date.getSeconds());

    };
    c.formatDigits = function(dig){
        if (dig < 10){
            dig = '0' + dig;
        }
        return dig;
    }
    setInterval(function(){
        c.updateClock(0);
    }, 1000);
    c.updateClock();
    return c;

}

window.onload = onReady();

// function onReady(){
//     console.log('Stating clock');
//     var clock = new Clock('clock', 2200, 'Brasil');
//     var clock2 = new Clock('clock2', 1000, 'China');
// }
//
// function Clock(id, offset, label){
//     offset = offset || 0;
//     var d = new Date();
//     this.offset = (offset + d.getTimezoneOffset())*60*1000;
//     label = label || '';
//     this.label = label;
//
//     document.getElementsByName('span').innerHTML = label;
//
//         this.updateClock = function () {
//             var data = new Date();
//                 data = new Date(this.offset + data.getTime());
//             var clock = document.getElementById(id);
//             clock.innerHTML = this.formatDigits(data.getHours()) + ":" + this.formatDigits(data.getMinutes()) +
//                 ":" + this.formatDigits(data.getSeconds()) + "  " + label;
//         };
//         this.formatDigits = function(val){
//             if(val < 10){
//                 val = '0' + val;
//             }
//             return val;
//         };
//         // that was created to have acesso to the function
//         var that = this;
//         setInterval(function(){
//             that.updateClock();
//             }, 1000);
//         that.updateClock();
// }
//
// window.onload = onReady();



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