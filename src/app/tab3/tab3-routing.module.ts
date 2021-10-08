import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import {NotificationsComponent} from "../shared/components/notifications/notifications.component";

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [
        NotificationsComponent
    ],
    exports: [RouterModule, NotificationsComponent]
})
export class Tab3PageRoutingModule {}
