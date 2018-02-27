// 20.02.2018
function onReady() {
    console.log('Teste');
    var clock = new com.crGeek.Clock("clock", 300, "Brazil");
    var clock2 = new com.crGeek.Clock("clock2", -300, "Brazil");
    var clock3 = new com.crGeek.TextClock("clock3");
    // var clock4 = new com.crGeek.AlarmClock("clock4", -300, "Brazil");
    
    Liveupdate(1,2,3 + "/n");
     Liveupdate.call(clock, 2, 3 + "/n");
}
function Liveupdate(a,b,c){
    console.log(this, a, b, c);
}
console.log(clock2.hasOwnProperty('autoClock'));
Date.___Interval = 0;
Date.___aDates = [];
Date.addtoInterval = function(date) {
    // console.log(this.___date);
    this.___aDates.push(date);
    if (!Date.___Interval) {
        Date.___Interval = setInterval(function() {
            Date.updateDates()
        }, 1000);
    }
}
Date.updateDates = function() {
    // console.log(this.___aDates.length);
    for (var i = 0; i < this.___aDates.length; i++) {
        // console.log(i);
        this.___aDates[i].updateSeconds();
    }
}
Date.prototype.updateSeconds = function() {
    // Date.addtoInterval(); // wrong
    // console.log(this.___date); //right
    this.setSeconds(this.getSeconds() + 1);
}

Date.prototype.autoClock = function(isAuto) {
    clearInterval(this.clockInterval);
    if (isAuto) {
        // var that = this;
        // this.clockInterval = setInterval(function() {
        //     that.updateSeconds();

        // }, 1000);
        Date.addtoInterval(this);
    }
}

var com = com || {};
com.crGeek = com.crGeek || {};

com.crGeek.Clock = function(id, offset, label) {
    offset = offset || 0;
    var d = new Date();
    var offset = (offset + d.getTimezoneOffset() * 60 * 100);
    this.d = new Date(offset + d.getTime());
    this.d.autoClock(true);
    label = label = ' ';

    console.log(this.prototyversion);

    this.label = label;
    this.id = id;
    var that = this;
    setInterval(function() {
        that.updateClock();
    }, 1000);
    this.updateClock();
}
com.crGeek.Clock.prototype.updateClock = function() {
    var date = this.d;
    // date.updateSeconds();
    // var date = new Date();
    // date = new Date(this.offset + date.getTime());
    var clock = document.getElementById(this.id);
    clock.innerHTML = this.formatOutput(date.getHours(), date.getMinutes(), date.getSeconds(), this.label);
};
com.crGeek.Clock.prototype.formatOutput = function(h,m,s, label){
    return  this.formatDigits(h) + ":" + this.formatDigits(m) + ":" + this.formatDigits(s) + label;
};

// textClock
com.crGeek.TextClock = function(id, offset, label) {
  com.crGeek.Clock.apply(this, arguments);
  console.log('version: ' + this.version);
};

com.crGeek.AlarmClock = function(id, offset, label, alarmH, alarmM) {
  com.crGeek.Clock.apply(this, arguments);
  console.log("version: " + this.version);
};

com.crGeek.TextClock.prototype = Object.create(com.crGeek.Clock.prototype);
com.crGeek.TextClock.prototype.constructor = com.crGeek.textClock;

com.crGeek.Clock.prototype.formatDigits = function(dig) {
    if (dig < 10) {
        dig = "0" + dig;
    }
    return dig;
};

window.onload = onReady();
// var d2 = new Date();
// var clockMethods = {
//     d: d2,
//     timezone: d2.getTimezoneOffset(),
//     gettime: d2.getTime(),
//     digts: d2.getHours() + ':' + d2.getMinutes() + ':' + d2.getSeconds(),
//     id: document.getElementById('clock3'),
//     interval: function (){
//
//     }
//  };



// 19.02.2018

// function onReady (){
//     var clock = new Clock('clock', 300, 'Brazil');
//     var clock2 = new Clock('clock2',-230, 'China');
// }
// Date.prototype.upDateSoconds = function(){
//     this.setSeconds(this.getSeconds()+1);
// }
// function Clock(id, offset, label){
//     this.id = id;
//     offset = offset || 0;
//     label = label || ' ';
//     this.label = label;
//     var d = new Date();
//     var offset = (offset + d.getTimezoneOffset())*60*1000;
//     this.d = new Date(offset + d.getTime());
//     var that = this;
//     setInterval(function(){
//         that.updateClock();
//     });
//     this.updateClock();
// }
// Clock.prototype.updateClock = function(){
//     var date = this.d;
//     date.upDateSoconds();
//     var clock = document.getElementById(this.id);
//     clock.innerHTML = this.formatDigits(date.getHours()) + ':' + this.formatDigits(date.getMinutes()) + ':' +  this.formatDigits(date.getSeconds()) + '\n' + this.label;
// };
// Clock.prototype.formatDigits = function(dig){
//     if(dig < 10){
//         dig = '0' + dig;
//     };
//     return dig;
// };

// window.onload = onReady;


// 17.02.2018
// function onReady(){
//     var clock = new Clock('clock');
//     var clock2 = new Clock('clock2');
//
//
// }
// function Clock(id, offset, label){
//     offset =  offset || 0;
//     var d = new Date();
//     this.offset = (offset + d.getTimezoneOffset())*60*1000;
//     this.label = label;
//     label = label || ' ';
//     this.updateClock = function(){
//         var date = new Date();
//             date = new Date((offset + d.getTimezoneOffset())*60*1000 + date.getTime());
//             var clock = document.getElementById(id);
//                 clock.innerHTML =
//                 this.formaDigits(date.getHours()) + ':' +
//                     this.formaDigits(date.getMinutes()) + ':' +
//                 this.formaDigits(date.getSeconds()) + '\n' +
//                     '<div style="color: red;">' + label + '</div>';
//     };
//     this.formaDigits = function(dig){
//         if (dig < 10){
//             dig = '0' + dig;
//         }
//         return dig;
//     };
//     var that = this;
//     setInterval(function(){
//         that.updateClock();
//         }, 1000);
//     this.updateClock();
// }
// window.onload = onReady();

// -----------syncronous execution

//
// function async(){
//     setInterval(function(){
//         var x = 0;
//         while(x < 100000000000){
//             x += 1;
//         }
//
//     }, 0);
//     console.log('Done');
// }
// console.log(new Date().getTime());
//
// async();
// console.log(new Date().getTime());


// var a = 'Hello';
//
// function first(){
//     var b = 'HI';
//     console.log(a, b);
//     sencond();
//     function sencond(){
//         var c = 'Ola';
//         console.log(a, b, c);
//         third();
//         function third(){
//             var d = null;
//
//             console.log(d, a, b, c);
//         }
//     }
// }
// first();
//
// console.log('___________');
//
// function multiply(x, y) {
//     return x * y;
// }
// function printSquare(x) {
//     var s = multiply(x, x);
//     console.log(s);
// }
// printSquare(5);
// function foo() {
//     foo();
// }
// foo();

// / 16.02.2018
// function onReady(){
//     var clock = new Clock('clock', 400, 'Brasil');
//     var clock2 = new Clock('clock2', 500, 'Italia');
// }
//
// function Clock(id, offset, label){
//     offset = offset || 0;
//     label = label || ' ';
//     this.label = label;
//     var d = new Date();
//     this.offset = (offset + d.getTimezoneOffset())*60*1000;
//     this.updateClock = function(){
//         var date = new Date();
//             date = new Date((offset + d.getTimezoneOffset())*60*1000 + date.getTime());
//         var clock = document.getElementById(id);
//         clock.innerHTML =
//             this.formatDigits(date.getHours()) + ':' +
//             this.formatDigits(date.getMinutes()) + ':' +
//             this.formatDigits(date.getSeconds()) + label;
//     };
//     this.formatDigits = function(dig){
//         if (dig < 10){
//             dig = '0' + dig;
//         }
//         return dig;
//     };
//     var that = this;
//     setInterval(function(){
//         that.updateClock();
//         console.log('Teste');
//     }, 1000);
//     that.updateClock();
// }
// window.onload = onReady();



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