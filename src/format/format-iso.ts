

export const formatDateIso = function(d: ValidDate | null): string | null {
	if (!d) return null;
	return formatLocalIso(d).substring(0, 10);
} as ValidDateMethod1D<string>;


export const formatDateTimeIso = function(d: ValidDate | null): string | null {
	if (!d) return null;
	return formatLocalIso(d).substring(0, 16);
} as ValidDateMethod1D<string>;


export const formatLocalIso = function(d: ValidDate | null): string | null {
	if (!d) return null;
	const date = new Date(+d);
	date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
	return date.toISOString().slice(0, -1);
} as ValidDateMethod1D<string>;
