let restaurant = {
    name: 'u welcome',
    guestCapacity: 75,
    guestCount: 0,
    checkplace: function(partysize) {
        let leftplace = this.guestCapacity - this.guestCount
        return partysize <= leftplace
    }
}
console.log(restaurant.checkplace(5))