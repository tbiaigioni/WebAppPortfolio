var PortfolioCustomer = /** @class */ (function () {
    function PortfolioCustomer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.visits = 0;
    }
    PortfolioCustomer.prototype.showName = function () {
        alert(this.firstName + " " + this.lastName);
    };
    Object.defineProperty(PortfolioCustomer.prototype, "name", {
        get: function () {
            return this.ourName;
        },
        set: function (val) {
            this.ourName = val;
        },
        enumerable: true,
        configurable: true
    });
    return PortfolioCustomer;
}());
//# sourceMappingURL=PortfolioCustomer.js.map