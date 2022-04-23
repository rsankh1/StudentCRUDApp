import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import Player from '@vimeo/player';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vimeo-list',
  templateUrl: './vimeo-list.component.html',
  styleUrls: ['./vimeo-list.component.css'],
})
export class VimeoListComponent implements OnInit {
  constructor(
    public studentService: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  player: any;
  player1: any;
  player2: any;
  player3: any;
  player4: any;
  player5: any;
  player6: any;
  player7: any;
  player8: any;
  check: boolean;

  ngOnInit(): void {
    //new code start
    this.check = this.studentService.loggedIn();
    console.log(this.check);
    if (this.check === false) {
      Swal.fire('Message!', 'Kindly login first!', 'error');
      this.router.navigateByUrl('student/stulogin');
      return;
    }
    //new code end

    const options = {
      id: 59777392,
      width: 315,
      loop: true,
    };
    this.player = new Player('made-in-ny', options);
    //player.setVolume(0);
    // player.play();

    const options1 = {
      id: 59777393,
      width: 315,
      loop: true,
    };
    this.player1 = new Player('made-in-ny1', options1);
    // player1.play();

    const options2 = {
      id: 29474908,
      width: 315,
      loop: true,
    };
    this.player2 = new Player('made-in-ny2', options2);

    const options3 = {
      id: 19231868,
      width: 315,
      loop: true,
    };
    this.player3 = new Player('made-in-ny3', options3);

    const options4 = {
      id: 76979871,
      width: 315,
      loop: true,
    };
    this.player4 = new Player('made-in-ny4', options4);

    const options5 = {
      id: 226260195,
      width: 315,
      loop: true,
    };
    this.player5 = new Player('made-in-ny5', options5);
  }

  play() {
    this.player.play();
    // const options = {
    //   id: 6701902,
    //   width: 315,
    //   loop: true,
    // };
    // const player = new Player('made-in-ny', options);
    // player
    //   .play()
    //   .then(function () {
    //     // the video was played
    //   })
    //   .catch(function (error) {
    //     switch (error.name) {
    //       case 'PasswordError':
    //         // the video is password-protected and the viewer needs to enter the
    //         // password first
    //         break;
    //       case 'PrivacyError':
    //         // the video is private
    //         break;
    //       default:
    //         // some other error occurred
    //         break;
    //     }
    //   });
  }

  pause() {
    this.player.pause();
    // const options = {
    //   id: 59777392,
    //   width: 315,
    //   loop: true,
    // };
    // const player = new Player('made-in-ny', options);
    // player
    //   .pause()
    //   .then(function () {
    //     // the video was paused
    //   })
    //   .catch(function (error) {
    //     switch (error.name) {
    //       case 'PasswordError':
    //         // the video is password-protected and the viewer needs to enter the
    //         // password first
    //         break;
    //       case 'PrivacyError':
    //         // the video is private
    //         break;
    //       default:
    //         // some other error occurred
    //         break;
    //     }
    //   });
  }
  play1() {
    this.player1.play();
  }
  pause1() {
    this.player1.pause();
  }
  play2() {
    this.player2.play();
  }
  pause2() {
    this.player2.pause();
  }
  play3() {
    this.player3.play();
  }
  pause3() {
    this.player3.pause();
  }
  play4() {
    this.player4.play();
  }
  pause4() {
    this.player4.pause();
  }
  play5() {
    this.player5.play();
  }
  pause5() {
    this.player5.pause();
  }
}
