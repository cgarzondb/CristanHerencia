function padre (){
}

padre.prototype.x = function(){
    return "darth vader"
};

function hijo(){
}

hijo.prototype.y = function(){
    return "luke"
};

Object.setPrototypeOf(hijo.prototype, padre.prototype);

const HIJO = new hijo();
console.log(HIJO.x());
console.log(HIJO.y());
console.log(HIJO instanceof padre);