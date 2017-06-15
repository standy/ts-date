import {MS, ValidDate, ValidDateMethod2D} from '../utils/basic-types';


type DiffUnitFn = ValidDateMethod2D<number>;


function absFloor(num: number) {
    if (num < 0) {
        // -0 -> 0
        return Math.ceil(num) || 0;
    } else {
        return Math.floor(num);
    }
}

function diffByUnits(unitsInMs: number) {
	return ((d1: ValidDate | null, d2: ValidDate | null) => {
		if (!d1 || !d2) return null;
		return absFloor((+d1 - +d2) / unitsInMs)
	}) as DiffUnitFn;
}
export const diffMilliseconds = diffByUnits(MS.Milliseconds);
export const diffSeconds = diffByUnits(MS.Seconds);
export const diffMinutes = diffByUnits(MS.Minutes);
export const diffHours = diffByUnits(MS.Hours);
export const diffDate = diffByUnits(MS.Date);

function dateToArray(d: ValidDate): [number, number, number, number, number, number, number] {
	return [d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()];
}

function compareArrays(list1: number[], list2: number[], fromPosition: number) {
	for (let i = fromPosition; i < list1.length; i++) {
		if (list1[i] === list2[i]) continue;
		return list1[i] > list2[i] ? 1 : -1;
	}
	return 0;
}

export const diffMonth = function(d1: ValidDate, d2: ValidDate) {
	const diff = (d1.getFullYear() - d2.getFullYear()) * 12 + d1.getMonth() - d2.getMonth();
	if (diff === 0) return 0;
	const diffTail = compareArrays(dateToArray(d1), dateToArray(d2), 2);
	if (diffTail === 0 || diff > 0 === diffTail > 0) return diff;
	return diff + diffTail;
} as DiffUnitFn;

export const diffYear = function(d1: ValidDate, d2: ValidDate) {
	const diff = d1.getFullYear() - d2.getFullYear();
	if (diff === 0) return 0;
	const diffTail = compareArrays(dateToArray(d1), dateToArray(d2), 1);
	if (!diffTail || diff > 0 === diffTail > 0) return diff;
	return diff + diffTail;
} as DiffUnitFn;

