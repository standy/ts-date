import {ValidDate, ValidDateMethod1D} from '../utils/basic-types';
import {newTsDate} from '../create/create-ts-date';

const START_OF_ISO_WEEK = 1;

export const resetYear = function(d: ValidDate | null) {
	if (!d) return null;
	return newTsDate(d.getFullYear(), 0);
} as ValidDateMethod1D<ValidDate>;


export const resetMonth = function(d: ValidDate | null) {
	if (!d) return null;
	return newTsDate(d.getFullYear(), d.getMonth(), 1);
} as ValidDateMethod1D<ValidDate>;


export const resetISOWeek = function(d: ValidDate) {
	if (!d) return null;
	const day = d.getDay();
 	const diff = (day < START_OF_ISO_WEEK ? 7 : 0) + day - START_OF_ISO_WEEK;
	return newTsDate(d.getFullYear(), d.getMonth(), d.getDate() - diff);
} as ValidDateMethod1D<ValidDate>;


export const resetDate = function(d: ValidDate | null) {
	if (!d) return null;
	return newTsDate(d.getFullYear(), d.getMonth(), d.getDate());
} as ValidDateMethod1D<ValidDate>;


export const resetHours = function(d: ValidDate | null) {
	if (!d) return null;
	const result = new Date(+d);
	result.setMinutes(0, 0, 0);
	return result as any as ValidDate;
} as ValidDateMethod1D<ValidDate>;


export const resetMinutes = function(d: ValidDate | null) {
	if (!d) return null;
	const result = new Date(+d);
	result.setSeconds(0, 0);
	return result as any as ValidDate;
} as ValidDateMethod1D<ValidDate>;


export const resetSeconds = function(d: ValidDate | null) {
	if (!d) return null;
	const result = new Date(+d);
	result.setMilliseconds(0);
	return result as any as ValidDate;
} as ValidDateMethod1D<ValidDate>;

