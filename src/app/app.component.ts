import { Component } from '@angular/core';
import { AppInsights } from 'applicationinsights-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appinsights-app';
  constructor(){
      const config = {
        instrumentationKey: '21ab6e3f-877f-459f-9fc9-6f27b5c5e663',
        enableCorsCorrelation: true,
        disableCorrelationHeaders: false
        
      };

  AppInsights.downloadAndSetup(config);
  }
}
