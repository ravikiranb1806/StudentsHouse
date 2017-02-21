import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'search-box',
  template:`<input id="inputbox" placeholder="search here">
                <button class="btn btn-default">Search</button>`
})

export class SearchBox { 
}