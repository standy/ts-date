import {MS, DiffUnitFn} from '../utils/basic-types';
import {isValidDate} from '../create/create-ts-date';
import {absFloor} from '../utils/utils';

function diffByUnits(unitsInMs: number): DiffUnitFn {
	return (d1: Date | null, d2: Date | null): any => {
		if (!isValidDate(d1) || !isValidDate(d2)) return null;
		return absFloor((d1.getTime() - d2.getTime()) / unitsInMs);
	};
}
export const diffMilliseconds = diffByUnits(MS.Milliseconds);
export const diffSeconds = diffByUnits(MS.Seconds);
export const diffMinutes = diffByUnits(MS.Minutes);
export const diffHours = diffByUnits(MS.Hours);

function dateToArray(d: Date): [number, number, number, number, number, number, number] {
	return [
		d.getFullYear(),
		d.getMonth(),
		d.getDate(),
		d.getHours(),
		d.getMinutes(),
		d.getSeconds(),
		d.getMilliseconds(),
	];
}

function compareArrays(list1: number[], list2: number[], fromPosition: number) {
	for (let i = fromPosition; i < list1.length; i++) {
		if (list1[i] === list2[i]) continue;
		return list1[i] > list2[i] ? 1 : -1;
	}
	return 0;
}

export const diffDate: DiffUnitFn = (d1: Date | null, d2: Date | null): any => {
	if (!isValidDate(d1) || !isValidDate(d2)) return null;
	const utc1 = Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate());
	const utc2 = Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate());
	const diff = absFloor((utc1 - utc2) / MS.Date);
	if (diff === 0) return 0;
	const diffTail = compareArrays(dateToArray(d1), dateToArray(d2), 3);
	if (diffTail === 0 || diff > 0 === diffTail > 0) return diff;
	return diff + diffTail;
};

export const diffMonth: DiffUnitFn = (d1: Date | null, d2: Date | null): any => {
	if (!isValidDate(d1) || !isValidDate(d2)) return null;
	const diff = (d1.getFullYear() - d2.getFullYear()) * 12 + d1.getMonth() - d2.getMonth();
	if (diff === 0) return 0;
	const diffTail = compareArrays(dateToArray(d1), dateToArray(d2), 2);
	if (diffTail === 0 || diff > 0 === diffTail > 0) return diff;
	return diff + diffTail;
};

export const diffYear: DiffUnitFn = (d1: Date | null, d2: Date | null): any => {
	if (!isValidDate(d1) || !isValidDate(d2)) return null;
	const diff = d1.getFullYear() - d2.getFullYear();
	if (diff === 0) return 0;
	const diffTail = compareArrays(dateToArray(d1), dateToArray(d2), 1);
	if (!diffTail || diff > 0 === diffTail > 0) return diff;
	return diff + diffTail;
};
