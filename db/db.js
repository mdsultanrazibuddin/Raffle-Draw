const Ticket = require ('../models/Ticket')

class DB {
    constructor() {
        this.tickets = []
    }
}

    /**
     * Create and save a new ticket
     * @param {string} username
     * @param {number} price
     * @returns {Ticket} return a ticket object
     */



create(username, price){
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
}

    /**
     * Create multiple tickets for a single user
     * @param {string} username
     * @param {number} price
     * @param {number} quantity
     * @returns {Array<Ticket>}
     */
 bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
        const ticket = this.create(username, price);
        result.push(ticket);
    }
    return result;
}


// return all tickets

find() {
    return this.tickets;
}
/**
     * find ticket by ticket id
     * @param {string} ticketId
     * @returns {Ticket}
     */

// single ticket

findById(){

}



// update ticket info

updateById(){

}

// delete ticket from DB

deleteById(){

}

draw (){

}

const DB = new DB()

module.exports = DB 