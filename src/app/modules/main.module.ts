import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '../../../node_modules/ui-router-ng2/src/ng2';
import { HelloWorldComponent } from '../components/hello-world.component';

export { HelloWorldComponent };

@NgModule({
  bootstrap: [HelloWorldComponent],
  declarations: [HelloWorldComponent],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot(),
  ],
  providers: []
})
export class MainModule {}
