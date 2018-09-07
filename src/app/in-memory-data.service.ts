import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      { id: 11, name: 'Mr. Nice', phone: '+18778881212' },
      { id: 12, name: 'Narco', phone: '+18778881212' },
      { id: 13, name: 'Bombasto', phone: '+18778881212' },
      { id: 14, name: 'Celeritas', phone: '+18778881212' },
      { id: 15, name: 'Magneta', phone: '+18778881212' },
      { id: 16, name: 'RubberMan', phone: '+18778881212' },
      { id: 17, name: 'Dynama', phone: '+18778881212' },
      { id: 18, name: 'Dr IQ', phone: '+18778881212' },
      { id: 19, name: 'Magma', phone: '+18778881212' },
      { id: 20, name: 'Tornado', phone: '+18778881212' }
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
