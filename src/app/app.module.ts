import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RepositoryService } from "./services/repository.service";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
