import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppHeroComponent } from "./app-hero/app-hero.component";
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { QuoteComponent } from "./quote/quote.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { WorkComponent } from "./work/work.component";
import { YtbPlayerComponent } from "./ytb-player/ytb-player.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { ModalJComponent } from './modal-j/modal-j.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeroComponent,
    HeaderComponent,
    AboutComponent,
    QuoteComponent,
    ContactComponent,
    FooterComponent,
    WorkComponent,
    YtbPlayerComponent,
    TodoListComponent,
    ModalJComponent
  ],
  imports: [BrowserModule, NgxYoutubePlayerModule.forRoot(), FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
