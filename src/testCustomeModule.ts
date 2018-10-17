import { NgModule, ModuleWithProviders } from '@angular/core';
import { FirstComponent} from './components/first-component';
import { FirstProvider } from './providers/first-provider';
import { IonicModule } from 'ionic-angular';

@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        FirstComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        FirstComponent
    ]
})
export class testCustomeModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: testCustomeModule,
            providers: [FirstProvider]
        };
    }
}