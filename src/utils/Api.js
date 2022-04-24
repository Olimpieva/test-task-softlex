import { API_OPTIONS } from "./constants";

class MainApi {
    constructor(apiOptions) {
        this._url = apiOptions.url;
        this._developerName = apiOptions.developerName;
        this._requestSettings = apiOptions.settings;
    }

    async _sendRequest(path, settings, requestOptions) {

        try {
            const response = await fetch(`${this._url}${path}?developer=${this._developerName}${settings}`, { ...requestOptions });

            if (!response.ok) {
                throw response;
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    };

    _getRequestSettings(settings) {

        const page = this._requestSettings.page(settings.page);
        const sortField = this._requestSettings.sortField(settings.sortField);
        const sortDirection = this._requestSettings.sortDirection(settings.sortDirection);

        return page + sortField + sortDirection;
    };


    getTasks(currentSettings) {

        return this._sendRequest(``, this._getRequestSettings(currentSettings), {
            method: 'GET',
        });
    };

};

const api = new MainApi(API_OPTIONS);

export default api;