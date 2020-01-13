import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeHacksDetailsComponent } from './life-hacks-details/life-hacks-details.component';
import { LifeHacksComponent } from './life-hacks/life-hacks.component';
import { LifeHacksFormComponent } from './life-hacks-form/life-hacks-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeHacksDetailsComponent,
    LifeHacksComponent,
    LifeHacksFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
