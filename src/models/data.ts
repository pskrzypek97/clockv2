interface More {
	abbreviation: string;
	client_ip: string;
	datetime: string;
	day_of_week: number;
	day_of_year: number;
	dst: boolean;
	dst_from: null;
	dst_offset: number;
	dst_until: null;
	raw_offset: number;
	timezone: string;
	unixtime: number;
	utc_datetime: string;
	utc_offset: string;
	week_number: number;
}

interface Quote {
	_id: string;
	author: string;
	authorSlug: string;
	content: string;
	dateAdded: string;
	dateModified: string;
	length: number;
	tags: string[];
}

interface Location {
	asn: {
		asn: string;
		domain: string;
		name: string;
		route: string;
		type: string;
	};
	calling_code: string;
	city: string;
	continent_code: string;
	continent_name: string;
	count: string;
	country_code: string;
	country_name: string;
	currency: {
		code: string;
		name: string;
		native: string;
		plural: string;
		symbol: string;
	};
	emoji_flag: string;
	emoji_unicode: string;
	flag: string;
	ip: string;
	is_eu: boolean;
	languages: { code: string; name: string; native: string }[];
	latitude: number;
	longitude: number;
	postal: string;
	region: string;
	region_code: string;
	region_type: string;
	threat: {
		blocklists: string[];
		is_anonymous: boolean;
		is_bogon: boolean;
		is_datacenter: boolean;
		is_icloud_relay: boolean;
		is_known_abuser: boolean;
		is_known_attacker: boolean;
		is_proxy: boolean;
		is_threat: boolean;
		is_tor: boolean;
	};
	time_zone: {
		abbr: string;
		current_time: string;
		is_dst: boolean;
		name: string;
		offset: string;
	};
}

export type Data = [More, Quote, Location];
