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
    return {customers};
  }
}
