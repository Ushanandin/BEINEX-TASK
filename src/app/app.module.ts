import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { OverviewCardComponent } from './overview-card/overview-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { PerformanceComponent } from './performance/performance.component';
import { NetworksComponent } from './networks/networks.component';
import { MatTableModule } from '@angular/material/table';
import { BeinexService } from './beinex.service';
@NgModule({
  declarations: [
    AppComponent,
    NetworksComponent,
    OverviewCardComponent,
    PerformanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
  ],
  providers: [BeinexService],
  bootstrap: [AppComponent],
})
export class AppModule {}
