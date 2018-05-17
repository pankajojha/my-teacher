import { Component, OnInit } from '@angular/core';
import { PreviewerService } from '../../services/previewer.service';

import { Injectable }           from '@angular/core';
import { Observable }           from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-previewer',
  templateUrl: './previewer.component.html',
  styleUrls: ['./previewer.component.css']
})
export class PreviewerComponent implements OnInit {

  htmlUrl : string;
  someHtml = `<a href="#" onClick="alert(document.cookie);">click to see the awesome</a>`;

  constructor(private previewerService : PreviewerService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  
    let tenantId = this.route.snapshot.paramMap.get('tenantId');
    let itemId = this.route.snapshot.paramMap.get('itemId');

    console.log(this.route.paramMap+ tenantId+itemId);

    this.htmlUrl = this.previewerService.getHtmlUrl(tenantId, itemId);

    //this.previewerService.getItemShow(tenantId, itemId)

  }

}
