import { Component, OnInit } from '@angular/core';
import { Tag, tags as initialTags } from './tags';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }
  public tags: Array<Tag> = initialTags;
  public domainUrl: string = 'https://' + environment.host;

  async ngOnInit() {
    // this.tags = await of(this.tags).toPromise();
  }

}
