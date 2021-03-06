import { API_OPTIONS } from "./constants";

class MainApi {
    constructor(apiOptions) {
        this._url = apiOptions.url;
        this._headers = apiOptions.headers;
        this._developerName = apiOptions.developerName;
        this._requestSettings = apiOptions.settings;
    }

    async _sendRequest(path, requestOptions, settings = '') {

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

    login(loginData) {

        return this._sendRequest(
            `login`,
            {
                method: 'POST',
                body: loginData,
            }
        );
    };

    getTasks(currentSettings) {

        return this._sendRequest(
            ``,
            {
                method: 'GET',
                headers: this._headers,
            },
            this._getRequestSettings(currentSettings),
        );
    };

    createTask(newTask) {

        return this._sendRequest(
            `create`,
            {
                method: 'POST',
                body: newTask,
            }
        );
    }

    updateTask(taskData, taskId) {

        return this._sendRequest(
            `edit/${taskId}`,
            {
                method: 'POST',
                body: taskData,
            }
        );
    }
};

const api = new MainApi(API_OPTIONS);

export default api;