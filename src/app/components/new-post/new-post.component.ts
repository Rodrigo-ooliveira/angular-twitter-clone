import { Component } from '@angular/core';

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

	// Function send tweet
	sendTweet() {
		alert(this.tweetMessage)
	}
	// Function counter chars
	changeTweet() {
		this.tweetRemain = 240 - this.tweetMessage.length
	}

}
