import {leadZero} from './utils';

export function rnd(min: number, max: number): number {
	return min + Math.floor(Math.random() * (max - min + 1));
}

export function randomTimezone(): string {
	const r = Math.random();
	if (r < 0.6) {
		const TZH = rnd(0, 23); /* 0..23 */
		const TZM = rnd(0, 11) * 5; /* 0, 5, 10, ..., 55 */
		return (Math.random() < 0.5 ? '-' : '+') + leadZero(TZH) + ':' + leadZero(TZM);
	}
	if (r < 0.8) {
		return 'Z';
	}
	return '';
}

