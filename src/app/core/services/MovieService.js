// @flow
import { ApiService } from './shared';
import { Movie } from '../models/';
export class MovieService {
    static  get(id: string|number, options?: {}): Promise<Movie> {
        return ApiService.get(`/movie/${id}`);
    }
}