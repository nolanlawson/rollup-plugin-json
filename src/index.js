export default function json () {
	return {
		transform ( code, id ) {
			if ( id.slice( -5 ) !== '.json' ) return null;

			return {
				code: 'export default ' + code + ';',
				map: { mappings: '' }
			};
		}
	};
}
