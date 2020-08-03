import * as R from 'ramda';

export const accountsSelector = R.pathOr([], ['accounts'])