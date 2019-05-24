import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectFighterComponent } from './select-fighter/select-fighter.component';
import { BattleComponent } from './battle/battle.component';
import { SelectScreenComponent } from './select-screen/select-screen.component';

const  routes: Routes = [
  { path: '', component: AppComponent } // path: '/'
  ,{ path: 'pokemon/:id/:id2', component : BattleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SelectFighterComponent,
    BattleComponent,
    SelectScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
