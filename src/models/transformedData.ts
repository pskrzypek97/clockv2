export interface TransformedData {
	more: {
		dayOfWeek: number;
		dayOfYear: number;
		weekNum: number;
		code: string;
	};
	clock: {
		city: string;
		country: string;
	};
	quote: {
		author: string;
		content: string;
	};
}
