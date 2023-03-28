import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.css'],
})
export class LoginPage {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
