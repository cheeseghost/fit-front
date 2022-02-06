import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor(
    public authService:AuthserviceService
  ) { }

  ngOnInit(): void {
  }

}
