import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { MessagesPage } from '../messages/messages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = MessagesPage;

  constructor() {

  }
}
