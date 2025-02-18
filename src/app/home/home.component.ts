import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { getUser } from '../services/user.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  user = getUser();

  title: string = "Home"

   constructor(private titleService: Title) {}
    ngOnInit() {
      this.titleService.setTitle(this.title);
    }

}
