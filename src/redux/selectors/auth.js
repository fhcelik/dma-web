import * as R from 'ramda';

export const checkUserSelector = R.pathOr(false, ['auth', 'user'])
export const warningSelector = R.pathOr('', ['auth', 'warning'])