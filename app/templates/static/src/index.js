import getWelcome from './getWelcome'

export default {
	http: [
		{
			routePath: '/',
			map: getWelcome,
			method: 'GET',
			accepted: ['application/json']
		}
	]
}
