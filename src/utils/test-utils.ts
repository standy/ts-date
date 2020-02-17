import {formatTimezone} from './utils';

/* istanbul ignore next */
export function rnd(min: number, max: number): number {
	return min + Math.floor(Math.random() * (max - min + 1));
}

/* istanbul ignore next */
export function randomTimezone(): string {
	const r = Math.random();
	if (r < 0.6) {
		/* -24:00 to +24:00 with interval of 5 */
		const offset = rnd((-24 * 60) / 5, (24 * 60) / 5) * 5;
		return formatTimezone(offset, ':');
	}
	if (r < 0.8) {
		return 'Z';
	}
	return '';
}
