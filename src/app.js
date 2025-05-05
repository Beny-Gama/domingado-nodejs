const express = require('express');
const routes = require('./routes');

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    };

    middlewares() {
        this.server.use(express.json());
    };

    routes() {
        this.server.use(routes);
    };
};

module.exports = new App.server;






javascript:
(function(){
    var speed = prompt("Speed?");
    if (speed!==null) {
        document.getElementsByClassName(%27html5-main-video%27)[0].playbackRate = speed;    
    }})();
















// const express = require('express')
// const routes = require('./routes.js')

// class App {
//     constructor() {
//         this.server = express();
//         this.middlewares();
//         this.routes();
//     }
//     middlewares() {
//         this.server.use(express.json());
//     }
//     routes() {
//         this.server.use(routes);
//     }
// }

// module.exports = new App().server;