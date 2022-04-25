import { createSelector } from "reselect";

export const currentTasksSelector = state => state.tasks;
export const userSelector = state => state.user;

const totalTasksCount = state => state.tasks.totalEntitiesCount;

export const lastPageNumberSelector = createSelector(
    totalTasksCount,
    count => Math.ceil(count / 3)
);