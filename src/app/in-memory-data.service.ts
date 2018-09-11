import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      { nid: 10, customer_id: 1, name: 'Doug Beeks', address: '990 Iroquois Ave., Natick, MA', postcode: '01760', phone: '+18779001760', fax: '+18779001761', salesman: '', group: '' },
      { nid: 11, customer_id: 2, name: 'Pa Villavicencio', address: '830 North Grand Street, Grand Forks, ND', postcode: '58201', phone: '+18779058201', fax: '+18779058202', salesman: '', group: '' },
      { nid: 12, customer_id: 3, name: 'Marlo Cratty', address: '452 Blackburn Dr., Crown Point, IN', postcode: '46307', phone: '+18779046307', fax: '+18779046308', salesman: '', group: '' },
      { nid: 13, customer_id: 4, name: 'Alysia Fetterolf', address: '905 Argyle St., South Lyon, MI', postcode: '48178', phone: '+18779048178', fax: '+18779048179', salesman: '', group: '' },
      { nid: 14, customer_id: 5, name: 'Herb Proffit', address: '703 N. Young St., Tuscaloosa, AL', postcode: '35405', phone: '+18779035405', fax: '+18779035406', salesman: '', group: '' },
      { nid: 15, customer_id: 6, name: 'Luba Ahlers', address: '8206 High Ridge Ave., Irwin, PA', postcode: '15642', phone: '+18779015642', fax: '+18779015643', salesman: '', group: '' },
      { nid: 16, customer_id: 7, name: 'Gordon Swartz', address: '946 West Parker St., Ozone Park, NY', postcode: '11417', phone: '+18779011417', fax: '+18779011418', salesman: '', group: '' },
      { nid: 17, customer_id: 8, name: 'Rutha Balbuena', address: '528 Lookout St., Bloomington, IN', postcode: '47401', phone: '+18779047401', fax: '+18779047402', salesman: '', group: '' },
      { nid: 18, customer_id: 9, name: 'Alisha Darley', address: '18 Walnutwood Lane, Osseo, MN', postcode: '55311', phone: '+18779055311', fax: '+18779055312', salesman: '', group: '' },
      { nid: 19, customer_id: 10, name: 'Betsey Totman', address: '8742 East South Street, Greensboro, NC', postcode: '27405', phone: '+18779027405', fax: '+18779027406', salesman: '', group: '' }
    ];
    const items = [
      { nid: 11, title: 'item 1a', list: 'list 1' },
      { nid: 12, title: 'item 1b', list: 'list 1' },
      { nid: 13, title: 'item 1c', list: 'list 1' },
      { nid: 14, title: 'item 2a', list: 'list 2' },
      { nid: 15, title: 'item 2b', list: 'list 2' },
      { nid: 16, title: 'item 2c', list: 'list 2' },
      { nid: 17, title: 'item 3a', list: 'list 3' },
      { nid: 18, title: 'item 3b', list: 'list 3' },
      { nid: 19, title: 'item 3c', list: 'list 3' }
    ];
    return {customers, items};
  }
}
