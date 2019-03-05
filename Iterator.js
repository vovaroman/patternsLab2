class Iterator {
    constructor() {
        this.currentPos = 0;
        this.Collection = new Array();
    }
    Iterator() { }
    next() {
        if (this.currentPos < this.Collection.length) {
            return this.Collection[this.currentPos++];
        }
        else {
            this.currentPos = 0;
        }
    }
    push(item) {
        this.Collection.push(item);
    }
    pop() {
        this.Collection.pop();
    }
    hasMore() {
        if (this.currentPos < this.Collection.length) {
            return true;
        }
        else {
            return false;
        }
    }
}
export default Iterator;
