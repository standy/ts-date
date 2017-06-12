

export function tokensRx(tokens: string[]) {
	return new RegExp('(\\[[^[]*\\])|(' + tokens.slice(0).sort((a, b) => b.length - a.length).join('|') + '|.)', 'g');
}
