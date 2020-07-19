import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isShow: boolean = false;

  data: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}
  toggle() {
    this.isShow = !this.isShow;
  }

  login() {
    this.authService.login(this.data).subscribe(
      (res) => {
        console.log('im doeeee', res);
      }

      // next=>{'done ya ahmed'},
      // error=>{console.log('you have error ya ahmed')}
    );
  }
}
