import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private data: any[] = [
    {
      id: 1,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 2,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 3,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 4,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 5,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 6,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 7,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 8,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 9,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 10,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 11,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 12,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 13,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 14,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 15,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 16,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 17,
      title: 'Card 7',
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 18,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 19,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    {
      id: 20,
      imges: 'assets/img/artical.png',
      description:
        'Top 5 Developments of 2022: Online Poker’s Meteoric Surge Plateaus After Two Years, Foreshadowing Steady Growth Ahead',
      author: 'PokerPundit',
      creatAt: '3 hours ago',
    },
    // Add more dummy data as needed
  ];
  constructor() {}

  fetchData(page: number, itemsPerPage: number): Observable<any[]> {
    // Simulate API call and return a portion of data based on page and itemsPerPage
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedData = this.data.slice(startIndex, endIndex);

    // Simulate API response delay
    return of(slicedData).pipe(delay(2000)); // Simulated delay of 1 second
  }
}
