import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {ProfileComponent} from "../pages/profile/profile/profile.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,
    ExploreContainerComponentModule
  ],
    declarations: [Tab4Page, ProfileComponent]
})
export class Tab4PageModule {}
