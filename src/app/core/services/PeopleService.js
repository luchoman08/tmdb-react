// @flow
import { ApiService } from './shared';
import { Person } from '../models/';
export class PeopleService {
    static  get(id: string|number, options?: {}): Promise<Person> {
        return ApiService.get(`/person/${id}`);
    }
}