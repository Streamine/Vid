import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AccueilComponent } from './accueil.component';
import { AccueilRoutes } from './accueil.routing';

import { MdIconModule,  MdButtonModule, MdListModule, MdProgressBarModule, MdMenuModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AccueilRoutes),
    ChartsModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdListModule,
    MdProgressBarModule,
    MdMenuModule,
    NgxDatatableModule,
    FlexLayoutModule
   ],
  declarations: [ AccueilComponent ]
})

export class AccueilModule {}
