import { NgModule } from '@angular/core';
import { FirstComponent } from './components/first-component';
import { FirstProvider } from './providers/first-provider';
import { IonicModule } from 'ionic-angular';
var apnIonComponentsModule = (function () {
    function apnIonComponentsModule() {
    }
    apnIonComponentsModule.forRoot = function () {
        return {
            ngModule: apnIonComponentsModule,
            providers: [FirstProvider]
        };
    };
    apnIonComponentsModule.decorators = [
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
    apnIonComponentsModule.ctorParameters = function () { return []; };
    return apnIonComponentsModule;
}());
export { apnIonComponentsModule };
//# sourceMappingURL=testCustomeModule.js.map