const shortid = require('shortid')

class ticket {
    constructor( username, price){
        this.shortid = shortid.generate()
        this.username = username
        this.price = price
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}