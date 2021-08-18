// import using require
var Shape = require("./shape");
// declare class

class Circle extends Shape {
    constructor(props) {
        super(props);
    }

    calculateArea() {
        
    }
}


// export class using module.exports
module.exports = Circle;