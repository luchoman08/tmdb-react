// @flow
import  _  from "lodash";

export default function merge_URL_params(params: URLSearchParams, additional_params?: {[param_name: string]: string}): URLSearchParams {
    const _params: URLSearchParams = _.cloneDeep(params);
    if(!additional_params) {
       return _params;
    } else {
        Object.keys(additional_params).forEach( (param_name) => {
            //$FlowFixMe
            _params.append(param_name, additional_params[param_name]);
        });
    }
    return _params;
}