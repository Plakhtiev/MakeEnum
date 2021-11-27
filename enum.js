function Enum() {
    var _this = this;
  
    if (!(this instanceof Enum)) return new (Function.prototype.bind.apply(Enum, [null].concat(Array.prototype.slice.call(arguments))))();
    Array.from(arguments).forEach(function (arg) {
      _this[arg] = Symbol(arg);
    });
  }

// how it works
const NOTIFY_TYPE =  Enum('CANCELLED_AUCTION_WITH_BIDS',  // create type
                          'UNSUCCESSFUL_AUCTION_WITH_BIDS',  
                          'CHANGE_AUCTION_STATUS_WITH_AWARDS',  
                          'WIN_AUCTION')


const STATUS_BIDS =  Enum('CANCELLED_AUCTION_WITH_BIDS', // create type
                          'UNSUCCESSFUL_AUCTION_WITH_BIDS',  
                          'CHANGE_AUCTION_STATUS_WITH_AWARDS',  
                          'WIN_AUCTION')
 
typeof NOTIFY_TYPE.CANCELLED_AUCTION_WITH_BIDS  // "symbol"
 
NOTIFY_TYPE.CANCELLED_AUCTION_WITH_BIDS === NOTIFY_TYPE.CANCELLED_AUCTION_WITH_BIDS  // true
NOTIFY_TYPE.CANCELLED_AUCTION_WITH_BIDS === STATUS_BIDS.CANCELLED_AUCTION_WITH_BIDS  // false

const someType = NOTIFY_TYPE.CANCELLED_AUCTION_WITH_BIDS

someType === NOTIFY_TYPE.CANCELLED_AUCTION_WITH_BIDS  // true
 
module.exports = Enum;