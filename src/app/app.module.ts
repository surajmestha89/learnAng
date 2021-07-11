import { MatInputModule } from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { CustomService } from './custom.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { CustompipePipe } from './custompipe.pipe';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import{ HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NavbarComponent,
    CustomdirectiveDirective,
    CustompipePipe,
    HomeComponent,
    NotfoundComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    BrowserAnimationsModule
  ],
  providers: [ CustomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
