import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponent2Component } from './my-component2/my-component2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyPipePipe } from './my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponent2Component,
    NotFoundComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
