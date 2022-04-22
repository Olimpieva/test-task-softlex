export const API_OPTIONS = {
    url: 'https://uxcandy.com/~shapoval/test-task-backend/v2/',
    developerName: 'Olimpieva',
    options: {
        sortField: (field) => `&sort_field=${field}`,
        sortDirection: (direction) => `&sort_direction=${direction}`,
        page: (number) => `&page=${number}`
    }
}

export const requestErrorMessages = {
    serverError: () => 'Произошла ошибка на сервере. Попробуйте повторить запрос позднее.',
    invalidAuthUserData: () => 'Некорректный логин или пароль',
    otherError: ({ errorCode, action }) => `Ой! Во время запроса ${action} произошла ошибка ${errorCode}`,
};