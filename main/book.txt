/**
 * Custom book
 *
 * @packageDocumentation
 */

import uranio from 'uranio';

export const atom_book:uranio.types.Book = {
	product:{
		plural: 'products',
		security:{
			type: uranio.types.BookSecurityType.UNIFORM,
			_w: uranio.types.BookPermissionType.PUBLIC
		},
		properties: {
			title: {
				primary: true,
				type: uranio.types.BookPropertyType.TEXT,
				label: 'Title'
			},
			price: {
				type: uranio.types.BookPropertyType.FLOAT,
				label: 'Price'
			}
		},
		dock:{
			url: '/products',
			routes:{
				add_review:{
					method: uranio.types.RouteMethod.GET,
					action: uranio.types.AuthAction.WRITE,
					url: '/add-review',
					query: ['stars'],
					return: Boolean,
					call: async (
						req:uranio.types.Api.Request<'product', 'add_review'>
					):Promise<boolean> => {
						console.log(req.query.stars);
						return true;
					}
				}
			}
		}
	}
};
