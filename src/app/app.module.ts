import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HistoryDetailsComponent } from './history-details/history-details.component';
import { StorylineComponent } from './history-details/sections/storyline/storyline.component';
import { SubNodesContainerComponent } from './history-details/sections/sub-nodes-container/sub-nodes-container.component';
import { LastHistoryElementPipe } from './pipes/last-history-element.pipe';
import { SingleItemComponent } from './history-details/single-item/single-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryDetailsComponent,
    StorylineComponent,
    SubNodesContainerComponent,
    LastHistoryElementPipe,
    SingleItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
