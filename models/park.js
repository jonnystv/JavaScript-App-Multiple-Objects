const Park = function(parkName, ticketPrice) {
    this.parkName = parkName;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
}

Park.prototype.addDino = function (dino) {
    this.dinoCollection.push(dino);
};

module.exports = Park;