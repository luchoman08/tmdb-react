// @flow

import merge_URL_params from "../../utils/MergeURLParams";
export default class ApiService {
    static get _apiTMDB_URL_V3() {
        return 'https://api.themoviedb.org/3';
    }
    static get _apiTMDB_Key_V3() {
        return '1d78ec525ceef86a4b4a46a74e137e37';
    }
    static get _params(): URLSearchParams {
        const params = new URLSearchParams();
        params.append('api-key', ApiService._apiTMDB_Key_V3);
        return params;
    }

    /**
     * Execute the API get function with optional params
     * @param path
     * @param additional_params
     * @returns {*}
     */
    static get(path: string, additional_params?: {[prop_name: string]: string}): Promise<any> {
        const url =  `${ApiService._apiTMDB_URL_V3}${path}?api_key=${ApiService._apiTMDB_Key_V3}`;
        //$FlowFixMe
        let request: RequestOptions = {method: 'GET'};
        return fetch( url, request)
            .then(res => res.json());
    }
}