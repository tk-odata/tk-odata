import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AppComponent } from './app.component';
import { AddFilterComponent } from './components/odata/add-filter/add-filter.component';
import { BaseFilterDirective } from './components/odata/filters/base-filter.directive';
import { CompFilterComponent } from './components/odata/filters/comp-filter/comp-filter.component';
import { CritFilterComponent } from './components/odata/filters/crit-filter/crit-filter.component';
import { ListFilterComponent } from './components/odata/filters/list-filter/list-filter.component';
import { NotFilterComponent } from './components/odata/filters/not-filter/not-filter.component';
import { QbFilterComponent } from './components/odata/qb-filter/qb-filter.component';
import { QbTableComponent } from './components/odata/qb-table/qb-table.component';
import { QueryBuilderComponent } from './components/odata/query-builder/query-builder.component';
import { ODataQuerybuilderComponent } from './pages/odata-querybuilder/odata-querybuilder.component';



@NgModule({
  declarations: [
    AppComponent,
    ODataQuerybuilderComponent,
    QueryBuilderComponent,
    QbTableComponent,
    QbFilterComponent,
    AddFilterComponent,
    CompFilterComponent,
    ListFilterComponent,
    CritFilterComponent,
    NotFilterComponent,
    BaseFilterDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxJsonViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
