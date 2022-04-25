export const MAIN_URL = 'https://uxcandy.com/~shapoval/test-task-backend/v2/';

export const API_OPTIONS = {
    url: 'https://uxcandy.com/~shapoval/test-task-backend/v2/',
    headers: {
        "Content-Type": "application/json",
    },
    developerName: 'Olimpieva.',
    settings: {
        sortField: (field) => `&sort_field=${field}`,
        sortDirection: (direction) => `&sort_direction=${direction}`,
        page: (number) => `&page=${number}`,
    }
};

export const availableFields = {
    id: 'id',
    username: 'username',
    email: 'email',
    status: 'status',
    text: 'text',
};

export const availableSortDirection = {
    increasing: 'asc',
    decreasing: 'desc',
};

export const statusList = [0, 1, 10, 11];

export const requestErrorMessages = {
    serverError: () => 'Произошла ошибка на сервере. Попробуйте повторить запрос позднее.',
    invalidAuthUserData: () => 'Некорректный логин или пароль',
    otherError: ({ errorCode, action }) => `Ой! Во время запроса ${action} произошла ошибка ${errorCode}`,
};

export const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    const res = cookies.find(item => item.startsWith(`${name}=`));

    if (res) {
        return res.substring(res.indexOf('=') + 1);
    }

    return;
};

export const createFormData = (data) => {
    const formData = new FormData();

    for (let key in data) {
        formData.set(key, data[key])
    }

    return formData;
}