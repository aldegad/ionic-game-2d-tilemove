import { NgModule } from '@angular/core';
import { CharactorComponent } from './charactor/charactor';
import { MapComponent } from './map/map';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [CharactorComponent,
    MapComponent],
	imports: [IonicModule],
	exports: [CharactorComponent,
    MapComponent]
})
export class ComponentsModule {}
