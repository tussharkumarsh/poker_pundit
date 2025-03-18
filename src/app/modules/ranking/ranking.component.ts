import { Component } from '@angular/core';
import { RiverTransferRankings } from 'src/app/models/shared.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent {
  selectedButton: string = 'Weekly';
  riverTransferRankings!: RiverTransferRankings[];
  ngOnInit(): void {
    this.riverTransferRankings = [
      {
        id: 1,
        member: 'Ashish Ahuja',
        won: '₹2,45,13,856',
        profit: '₹1,52,45,322',
        points: '64,102',
      },
      {
        id: 2,
        member: 'Arjanveer Singh',
        won: '₹1,23,45,678',
        profit: '₹89,76,543',
        points: '42,512',
      },
      {
        id: 3,
        member: 'Anuj Yadav',
        won: '₹3,78,92,543',
        profit: '₹1,23,65,987',
        points: '28,365',
      },
      {
        id: 4,
        member: 'Ritwik Khanna',
        won: '₹5,61,23,987',
        profit: '₹3,42,12,765',
        points: '76,854',
      },
      {
        id: 5,
        member: 'Anuraj Srinivasan',
        won: '₹1,34,76,123',
        profit: '₹98,234',
        points: '14,206',
      },
      {
        id: 6,
        member: 'Gaurav Sood',
        won: '₹4,56,23,764',
        profit: '₹2,56,98,543',
        points: '38,512',
      },
      {
        id: 7,
        member: 'Arun Sriram',
        won: '₹2,37,15,621',
        profit: '₹1,54,76,123',
        points: '45,632',
      },
      {
        id: 8,
        member: 'Sanat Mehrotra',
        won: '₹3,14,65,789',
        profit: '₹2,34,89,321',
        points: '52,341',
      },
      {
        id: 9,
        member: 'Ashish Ahuja',
        won: '₹1,89,32,675',
        profit: '₹1,23,76,892',
        points: '21,468',
      },
      {
        id: 10,
        member: 'Arjanveer Singh',
        won: '₹4,21,56,789',
        profit: '₹3,56,98,123',
        points: '76,289',
      },
      {
        id: 11,
        member: 'Anuj Yadav',
        won: '₹2,34,56,123',
        profit: '₹1,32,89,543',
        points: '33,512',
      },
      {
        id: 12,
        member: ' Ritwik Khanna',
        won: '₹1,87,34,512',
        profit: '₹1,09,23,875',
        points: '19,462',
      },
      {
        id: 13,
        member: 'Anuraj Srinivasan',
        won: '₹3,09,23,456',
        profit: '₹2,45,12,345',
        points: '52,318',
      },
      {
        id: 14,
        member: 'Gaurav Sood',
        won: '₹1,23,98,765',
        profit: '₹98,76,123',
        points: '14,521',
      },
      {
        id: 15,
        member: 'Arun Sriram',
        won: '₹1,23,98,865',
        profit: '₹98,76,123',
        points: '14,521',
      },
    ];
  }
  trackById(index: number, value: RiverTransferRankings) {
    return value.id;
  }
}
