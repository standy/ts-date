
//               ( HH )  ( MM )     ( SS )(    MS   )   (      TZD            )
const ISO_RX = /^\s*(\d{4,6}?)(?:-?(\d\d))?(?:-?(\d\d))?(?:T(\d\d):?(\d\d):?(?:(\d\d)(\.\d{1,3})?)?([+-]\d\d?(?::\d\d)?|Z)?)?\s*$/;
export function parseIso(dateStr: string): ValidDate | null {
	if (!dateStr) return null;
	const timeList = dateStr.match(ISO_RX);
	if (!timeList) return null;
	const Y = +timeList[1]||0;
	const M = (+timeList[2] - 1)||0;
	const D = +timeList[3]||1;

	const maybeResult = new Date(Y, M, D);
	const isDateOk = (
		maybeResult.getDate() === D &&
		maybeResult.getMonth() === M &&
		maybeResult.getFullYear() === Y
	);
	if (!isDateOk) return null;
	if (!timeList[4]) return maybeResult as any as ValidDate;

	if (!timeList) return null;
	const H = +timeList[4]||0;
	const m = +timeList[5]||0;
	const s = +timeList[6]||0;
	const ms = (+timeList[7] * 1000)||0;

	const isTimeOk = (
		H < 24 &&
		m < 60 &&
		s < 60
	);
	if (!isTimeOk) return null;
	const tzd = timeList[8];

	let tzOffset = 0;
	if (tzd) {
		if (tzd !== 'Z') {
			const tzdList = tzd.split(':');
			const tzH = +tzdList[0]||0;
			const tzM = +tzdList[1]||0;

			const isTzOk = (
				tzH >= -12 &&
				tzH <= 12 &&
				tzM < 60
			);
			if (!isTzOk) return null;

			tzOffset = tzH * 60 + tzM;
		}
		tzOffset += maybeResult.getTimezoneOffset();
	}
	maybeResult.setHours(H, m - tzOffset, s, ms);
	return maybeResult as any as ValidDate
}
