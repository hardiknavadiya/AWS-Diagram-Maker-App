import { Component, ViewChild } from '@angular/core';
import { DxDiagramComponent } from 'devextreme-angular/ui/diagram';
 
@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
})
export class AppComponent {  @ViewChild(DxDiagramComponent, { static: false }) diagram!: DxDiagramComponent;

      application_services_url = "assets/Application Services/";
      nameList : string[] =[ 
            "cloudSearch",
            "cloudSearch SDF Metadata",
            "Elastic Transcoder",
            "Email",
            "ses",
            "sns",
            "sns email notification",
            "sns email http notification",
            "sns topic",
            "sqs",
            "sqs message",
            "sqs queue",
            "swf",
            "swf decider",
            "swf worker"
      ]
      
        myArray: string[][] = [];
        tempArray: string[] = [];
        constructor() {
            for (let i = 0; i < this.nameList.length; i++) {
                  this.tempArray = [this.nameList[i].toString(), this.application_services_url +this.nameList[i]+".svg"];      
                  this.myArray[i] = this.tempArray;            
                  console.log(this.myArray[i][0]);
                  console.log(this.myArray[i][1]);
            }  
            
        }
}
