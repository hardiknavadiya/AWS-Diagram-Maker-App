import { Component, ViewChild } from '@angular/core';
import { DxDiagramComponent } from 'devextreme-angular/ui/diagram';
 
@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
})
export class AppComponent {  @ViewChild(DxDiagramComponent, { static: false }) diagram!: DxDiagramComponent;

      backgroundImageLeft= 0.15
      backgroundImageTop = 0
      backgroundImageWidth = 0.7
      backgroundImageHeight = 0.7
      defaultWidth = 0.75
      defaultHeight = 0.75
      allowEditText = true
      textLeft = 0
      textTop = 0.7
      textWidth = 1
      textHeight = 0.3;
      categorylist = new Map();  
      
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
      imageList :string[]=[
            "assets/Application Services/cloudSearch.svg",
            "assets/Application Services/cloudSearch SDF Metadata.svg",
            "assets/Application Services/Elastic Transcoder.svg",
            "assets/Application Services/Email.svg",
            "assets/Application Services/ses.svg",
            "assets/Application Services/sns.svg",
            "assets/Application Services/sns email notification.svg",
            "assets/Application Services/sns email http notification.svg",
            "assets/Application Services/sns topic.svg",
            "assets/Application Services/sqs.svg",
            "assets/Application Services/sqs message.svg",
            "assets/Application Services/sqs queue.svg",
            "assets/Application Services/swf.svg",
            "assets/Application Services/swf decider.svg",
            "assets/Application Services/swf worker.svg"   
        ]
        myArray: string[][] = [];
        tempArray: string[] = [];
        constructor() {
            for (let i = 0; i < this.nameList.length; i++) {
                  this.tempArray = [this.nameList[i].toString(), this.imageList[i].toString()];      
                  this.myArray[i] = this.tempArray;            
                  console.log(this.myArray[i][0]);
                  console.log(this.myArray[i][1]);
            }  
            
        }
}
