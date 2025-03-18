import { Component, OnInit } from '@angular/core';
import { Participants } from 'src/app/models/shared.model';

@Component({
  selector: 'app-single-livestreams',
  templateUrl: './single-livestreams.component.html',
  styleUrls: ['./single-livestreams.component.scss'],
})
export class SingleLivestreamsComponent implements OnInit {
  participants!: Participants[];
  ngOnInit(): void {
    this.participants = [
      {
        id: 1,
        profile_img: 'user_profile_img.jpg',
        name: 'Aman Bhadu',
        entries: '12K',
      },
      {
        id: 2,
        profile_img: 'user_profile_img.jpg',
        name: 'Aman Bhadu',
        entries: '13.25K',
      },
      {
        id: 3,
        profile_img: 'user_profile_img.jpg',
        name: 'Aman Bhadu',
        entries: '12K',
      },
      {
        id: 4,
        profile_img: 'user_profile_img.jpg',
        name: 'Aman Bhadu',
        entries: '11.25K',
      },
      {
        id: 5,
        profile_img: 'user_profile_img.jpg',
        name: 'Aman Bhadu',
        entries: '10.25K',
      },
      {
        id: 6,
        profile_img: 'user_profile_img.jpg',
        name: 'Aman Bhadu',
        entries: '12K',
      },
      {
        id: 7,
        profile_img: 'user_profile_img.jpg',
        name: 'Aman Bhadu',
        entries: '9K',
      },
      {
        id: 8,
        profile_img: 'user_profile_img.jpg',
        name: 'Aman Bhadu',
        entries: '8.8K',
      },
      {
        id: 9,
        profile_img: 'user_profile_img.jpg',
        name: 'Aman Bhadu',
        entries: '6.5K',
      },
      {
        id: 10,
        profile_img: 'user_profile_img.jpg',
        name: 'Aman Bhadu',
        entries: '11.2K',
      },
      {
        id: 11,
        profile_img: 'user_profile_img.jpg',
        name: 'Aman Bhadu',
        entries: '12K',
      },
      {
        id: 12,
        profile_img: 'user_profile_img.jpg',
        name: 'Aman Bhadu',
        entries: '14.2K',
      },
    ];
  }
}
