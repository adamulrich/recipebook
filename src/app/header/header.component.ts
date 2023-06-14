import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(
    private dataStorateService: DataStorageService
  ) {

  }

onSaveData() {
  this.dataStorateService.storeRecipes(); 
}

onFetchData() {
  this.dataStorateService.fetchRecipes().subscribe();
}

}
