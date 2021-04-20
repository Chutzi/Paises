import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule //Para el uso de [(ngModel)] 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
