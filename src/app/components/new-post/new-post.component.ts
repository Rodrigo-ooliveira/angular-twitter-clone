import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
// create newPost
export class NewPostComponent {
	tweetMessage: string = ""
	teewetMaxLenght: number = 240
	tweetRemain: number = this.teewetMaxLenght

	constructor(private service: MessagesService) {

	}

	// Function send tweet
	sendTweet() {
		this.service.addMessage(this.tweetMessage)
		this.tweetMessage = "" // clear message
		this.tweetRemain = this.teewetMaxLenght // conter reset
	}
	// Function counter chars
	changeTweet() {
		this.tweetRemain = this.teewetMaxLenght - this.tweetMessage.length
	}

}
