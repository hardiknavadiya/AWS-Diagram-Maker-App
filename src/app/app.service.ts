import { Injectable } from '@angular/core';

let applicationServices:String[]=[
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
    "assets/Application Services/swf worker.svg",

]

@Injectable()
export class Service {
    
    getApplocationServices(): String[]{
        return applicationServices;
    }
}