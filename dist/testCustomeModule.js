import { NgModule } from '@angular/core';
import { FirstComponent } from './components/first-component';
import { FirstProvider } from './providers/first-provider';
import { IonicModule } from 'ionic-angular';
var testCustomeModule = (function () {
    function testCustomeModule() {
    }
    testCustomeModule.forRoot = function () {
        return {
            ngModule: testCustomeModule,
            providers: [FirstProvider]
        };
    };
    testCustomeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [
                        FirstComponent
                    ],
                    exports: [
                        FirstComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    testCustomeModule.ctorParameters = function () { return []; };
    return testCustomeModule;
}());
export { testCustomeModule };
//# sourceMappingURL=testCustomeModule.js.map