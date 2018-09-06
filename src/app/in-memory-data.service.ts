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
      { id: 11, name: 'item 1a' },
      { id: 12, name: 'item 1b' },
      { id: 13, name: 'item 1c' },
      { id: 14, name: 'item 2a' },
      { id: 15, name: 'item 2b' },
      { id: 16, name: 'item 2c' },
      { id: 17, name: 'item 3a' },
      { id: 18, name: 'item 3b' },
      { id: 19, name: 'item 3c' }
    ];
    return {customers, items};
  }
}
