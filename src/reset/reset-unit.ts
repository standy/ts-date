import {ValidDate, ValidDateMethod1D} from '../utils/basic-types';

const START_OF_ISO_WEEK = 1;

export type ResetUnitFn = ValidDateMethod1D<ValidDate>;

export const resetYear: ResetUnitFn = (d: Date | null): any => {
	if (!d) return null;
	return new Date(d.getFullYear(), 0);
};


export const resetMonth: ResetUnitFn = (d: Date | null): any => {
	if (!d) return null;
	return new Date(d.getFullYear(), d.getMonth(), 1);
};


export const resetISOWeek: ResetUnitFn = (d: Date | null): any => {
	if (!d) return null;
	const day = d.getDay();
 	const diff = (day < START_OF_ISO_WEEK ? 7 : 0) + day - START_OF_ISO_WEEK;
	return new Date(d.getFullYear(), d.getMonth(), d.getDate() - diff);
};


export const resetDate: ResetUnitFn = (d: Date | null): any => {
	if (!d) return null;
	return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};


export const resetHours: ResetUnitFn = (d: Date | null): any => {
	if (!d) return null;
	const result = new Date(+d);
	result.setMinutes(0, 0, 0);
	return result;
};


export const resetMinutes: ResetUnitFn = (d: Date | null): any => {
	if (!d) return null;
	const result = new Date(+d);
	result.setSeconds(0, 0);
	return result;
};


export const resetSeconds: ResetUnitFn = (d: Date | null): any => {
	if (!d) return null;
	const result = new Date(+d);
	result.setMilliseconds(0);
	return result;
};

