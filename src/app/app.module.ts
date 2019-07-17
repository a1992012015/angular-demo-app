import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatDesignModule } from './module/mat-design.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { MeetTimerComponent } from './meet-timer/meet-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    RangeSliderComponent,
    MeetTimerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
