/* beautify ignore:start */
import {Component} from 'angular2/core';
import {Api} from '../../services/api';
import {AppHeadComponent} from '../app-head/app-head.component';
/* beautify ignore:end */

@Component({
    selector: 'create-entry',
    styles: [require('./create-entry.component.scss').toString()],
    template: require('./create-entry.component.html'),
    directives: [AppHeadComponent]
})
export class CreateEntryComponent {
	private entryTopic: string;
	private createTopic: boolean = false;
	constructor(private api: Api) {

	}

	createTopicName(){
		this.createTopic = true;
	}

	ngOnInit() {
		console.log('Create Story');
	}
}