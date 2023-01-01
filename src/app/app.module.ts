import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { StateService } from './services/state.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeaderComponent, ContentComponent],
  bootstrap: [AppComponent],
  providers: [StateService],
})
export class AppModule {}
