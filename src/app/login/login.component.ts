import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  async login() {
    let url = 'http://localhost:8080/mylogin';
    const b64Token = btoa(this.model.username + ':' + this.model.password);
    const headers = {'Authorization':'Basic ' + b64Token};
    try {
      const result = await fetch(url, { headers: headers });
      sessionStorage.setItem('login', b64Token);
      //this.router.navigate(['overview']);
      } catch (error) {
        alert("Authentication failed");
      }
  }

}
