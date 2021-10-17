import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GitSearchFormComponent } from './git-search-form/git-search-form.component';
import { OutputComponent } from './output/output.component';
import { DateCountPipe } from './date-count.pipe';
import { CloneHighlighterDirective } from './directives/clone-highlighter.directive';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GitSearchFormComponent,
    OutputComponent,
    DateCountPipe,
    CloneHighlighterDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
