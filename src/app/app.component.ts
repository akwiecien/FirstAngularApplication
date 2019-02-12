import { Component } from "@angular/core";
import { RepositoryService } from "./services/repository.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  constructor(private repository: RepositoryService) {
    this.title = repository.log();
  }
}
