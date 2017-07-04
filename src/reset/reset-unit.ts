import {ValidDateMethodWithDateResult} from '../utils/basic-types';

const START_OF_ISO_WEEK = 1;

export const resetYear: ValidDateMethodWithDateResult = (d: Date | null): any => {
	if (!d) return null;
	return new Date(d.getFullYear(), 0);
};


export const resetMonth: ValidDateMethodWithDateResult = (d: Date | null): any => {
	if (!d) return null;
	return new Date(d.getFullYear(), d.getMonth(), 1);
};


export const resetISOWeek: ValidDateMethodWithDateResult = (d: Date | null): any => {
	if (!d) return null;
	const day = d.getDay();
 	const diff = (day < START_OF_ISO_WEEK ? 7 : 0) + day - START_OF_ISO_WEEK;
	return new Date(d.getFullYear(), d.getMonth(), d.getDate() - diff);
};


export const resetDate: ValidDateMethodWithDateResult = (d: Date | null): any => {
	if (!d) return null;
	return new Date(d.getFullYear(), d.getMonth(), d.getDate());
};


export const resetHours: ValidDateMethodWithDateResult = (d: Date | null): any => {
	if (!d) return null;
	const result = new Date(+d);
	result.setMinutes(0, 0, 0);
	return result;
};


export const resetMinutes: ValidDateMethodWithDateResult = (d: Date | null): any => {
	if (!d) return null;
	const result = new Date(+d);
	result.setSeconds(0, 0);
	return result;
};


export const resetSeconds: ValidDateMethodWithDateResult = (d: Date | null): any => {
	if (!d) return null;
	const result = new Date(+d);
	result.setMilliseconds(0);
	return result;
};

