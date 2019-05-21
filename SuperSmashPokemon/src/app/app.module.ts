import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectFighterComponent } from './select-fighter/select-fighter.component';
import { BattleComponent } from './battle/battle.component';
import { SelectScreenComponent } from './select-screen/select-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectFighterComponent,
    BattleComponent,
    SelectScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
