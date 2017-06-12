export function createTsDate(date: Date|number|null|undefined): ValidDate | null {
	if (date == null) {
		return null;
	}
	const d = new Date(+date);
	if (isFinite(+d)) {
		return d as any as ValidDate
	}
	return null;
}

export function toTsDateOrNull(date: Date): ValidDate | null {
	if (isFinite(+date)) {
		return date as any as ValidDate
	}
	return null;
}
