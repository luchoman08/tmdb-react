// @flow
import { Gender } from './Gender';
export  class Person {
    id: number;
    name: string;
    popularity: number;
    also_known_as: string[];
    profile_path: string; // name of image to profile image
    biography: string;
    //images?: { profiles: Image$[]};
    birthday: string;
    deathday: string;
    gender: Gender;
    imdb_id: string;
    place_of_birth: string | null;
    homepage: string | null;
    constructor(name?: string ) {
        this.name = name? name: '';
    }
//tv_credits?: PersonCreditsCombinedModel;
//movie_credits?: PersonCreditsCombinedModel;
   sortMethod (person1: Person, person2: Person) {
        return person2.popularity - person1.popularity;
    }
}