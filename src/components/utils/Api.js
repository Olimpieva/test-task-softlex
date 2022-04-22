import { API_OPTIONS } from "./constants";

class MainApi {
    constructor(apiOptions) {
        this._url = apiOptions.url;
        this._developerName = apiOptions.developerName;
        this._options = apiOptions.options;
    }

    async _sendRequest(path, requestOptions) {

        try {
            const response = await fetch(`${this._url}${path}?developer=${this._developerName}`, { ...requestOptions });

            if (!response.ok) {
                throw response;
            }

            console.log({ response })

            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        };
    };
    getTasks(options) {

        return this._sendRequest(``, {
            method: 'GET',

        });
    };

};

const api = new MainApi(API_OPTIONS);

export default api;