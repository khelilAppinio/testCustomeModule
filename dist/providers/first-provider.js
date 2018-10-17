import { Injectable } from '@angular/core';
var FirstProvider = (function () {
    function FirstProvider() {
    }
    FirstProvider.prototype.firstMethod = function () {
        return 'here is my first provider';
    };
    FirstProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FirstProvider.ctorParameters = function () { return []; };
    return FirstProvider;
}());
export { FirstProvider };
//# sourceMappingURL=first-provider.js.map