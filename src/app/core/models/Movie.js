export default class Movie  {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    imdb_id: string | null;
    backdrop_path: string;
    release_date: string;
    genre_ids: number[];
    runtime: number;
    revenue: string;
   // original_language?: string;
  //  keywords?: { keywords: KeywordsInterface[] };
    original_title: string;
    popularity: number; // between 0 and 10
 //   production_companies: CompanyInterface[];
  //  spoken_languages: LanguageInterface[];
  //  production_countries: CountryInterface[];
    video: boolean; // movie video preview available?
    video_count: number;
    ///genres?: Genre[] | Observable<Genre[]>;
   // credits?: CreditsModel;
   // videos?: { results: Video[] };
    //images?: { backdrops: Image$[], posters: Image$[] };
  //  similar?: Results<Movie>;
   // credis?: { id: string, cast: Cast[], crew: Crew[] };
   // reviews?: Results<Review>;
    //translations?: Results<TranslationInterface>;
}