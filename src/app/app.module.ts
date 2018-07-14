import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserinformationComponent } from './userinformation/userinformation.component';
import { HTTPService } from 'src/app/service/HTTPService';

@NgModule({
  declarations: [
    AppComponent,
    UserinformationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }
