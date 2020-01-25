import {ValidDate} from '../valid-date';

function toNumber(value: string | undefined, defaultValue: number) {
	return typeof value === 'undefined' ? defaultValue : +value;
}

//                  (  YYYY  )     ( MM )       ( DD )      ( HH )  ( MM )     ( SS )(    MS   )   (      TZD            )
const ISO_RX = /^\s*(\d{4,6}?)(?:-?(\d\d))?(?:-?(\d\d))?(?:T(\d\d):?(\d\d):?(?:(\d\d)(\.\d{1,3})?)?([+-]\d\d?(?::\d\d)?|Z)?)?\s*$/;
export function parseIso(dateStr: string): ValidDate | null {
	if (!dateStr) return null;
	const timeList = dateStr.match(ISO_RX);
	if (!timeList) return null;
	const Y = +timeList[1];
	const M = toNumber(timeList[2], 1) - 1;
	const D = toNumber(timeList[3], 1);

	const maybeResult = new Date(Y, M, D);
	const isDateOk = maybeResult.getDate() === D && maybeResult.getMonth() === M && maybeResult.getFullYear() === Y;
	if (!isDateOk) return null;
	if (!timeList[4]) return maybeResult as ValidDate;

	const H = toNumber(timeList[4], 0);
	const m = toNumber(timeList[5], 0);
	const s = toNumber(timeList[6], 0);
	const ms = toNumber(timeList[7], 0) * 1000;

	const isTimeOk = H < 24 && m < 60 && s < 60;
	if (!isTimeOk) return null;

	const tzd = timeList[8];

	if (tzd === 'Z') {
		maybeResult.setUTCFullYear(Y, M, D);
		maybeResult.setUTCHours(H, m, s, ms);
	} else if (tzd) {
		const tzdList = tzd.split(':');
		const tzH = toNumber(tzdList[0], 0);
		const tzM = (tzd[0] === '-' ? -1 : 1) * toNumber(tzdList[1], 0);
		const isTzOk = tzH > -24 && tzH < 24 && tzM < 60;
		if (!isTzOk) return null;
		maybeResult.setUTCFullYear(Y, M, D);
		maybeResult.setUTCHours(H - tzH, m - tzM, s, ms);
	} else {
		maybeResult.setHours(H, m, s, ms);
	}

	return maybeResult as ValidDate;
}

export function parseIsoOrThrow(dateStr: string): ValidDate {
	const result = parseIso(dateStr);
	if (result === null) throw new Error(`Failed to parse as ISO 8601 string: "${dateStr}"`);
	return result;
}
