export const MAIN_URL = 'https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Olimpieva.&sort_field=username';

export const API_OPTIONS = {
    url: 'https://uxcandy.com/~shapoval/test-task-backend/v2/',
    developerName: 'Olimpieva.',
    settings: {
        sortField: (field) => `&sort_field=${field}`,
        sortDirection: (direction) => `&sort_direction=${direction}`,
        page: (number) => `&page=${number}`,
    }
};

export const availableSortFields = {
    id: 'id',
    username: 'username',
    email: 'email',
    status: 'status',
};

export const availableSortDirection = {
    increasing: 'asc',
    decreasing: 'desc',
}

export const requestErrorMessages = {
    serverError: () => 'Произошла ошибка на сервере. Попробуйте повторить запрос позднее.',
    invalidAuthUserData: () => 'Некорректный логин или пароль',
    otherError: ({ errorCode, action }) => `Ой! Во время запроса ${action} произошла ошибка ${errorCode}`,
};