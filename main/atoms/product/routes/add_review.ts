/**
 * Example file of Atom Route definition
 * Edit or use this as a reference for creating other Routes.
 *
 * The name of the Route is given by the filename
 */

import uranio from 'uranio';

export default uranio.register.route({
	method: uranio.types.RouteMethod.POST,
	action: uranio.types.AuthAction.WRITE,
	url: '/add-review/:ids',
	query: ['stars'],
	params: {
		ids: {array: true}
	},
	return: 'Promise<number>',
	call: async (route_request: uranio.types.Api.Request<'product', 'add_review'>): Promise<number> => {
		console.log(route_request);
		return 1;
	}
});
