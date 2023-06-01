import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboarComponent } from './components/dashboar/dashboar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './component/card/card.component';
import { CardpporfolioComponent } from './components/cardpporfolio/cardpporfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboarComponent,
    NavbarComponent,
    CardComponent,
    CardpporfolioComponent,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
