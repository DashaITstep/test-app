import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig,
              public themeService: ThemeService) {}

  public ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  public changeTheme(name: string): void {
    this.themeService.switchTheme(name);
  }
}
