const Park = function(parkName, ticketPrice) {
    this.parkName = parkName;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
}

Park.prototype.addDino = function (dino) {
    this.dinoCollection.push(dino);
};

Park.prototype.removeDino = function (dino) {
    this.dinoCollection.pop(dino);
};

Park.prototype.hasMostVisitors = function (dino) ;

module.exports = Park;