import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import{ HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './content/content.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    ContentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
