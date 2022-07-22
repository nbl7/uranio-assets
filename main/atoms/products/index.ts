/**
 * Example file of Atom definition
 * Edit or use this as a reference for creating other Atoms.
 *
 * The name of the Atom is given by the filename
 */

import uranio from 'uranio';

export default uranio.register.atom({
	plural: 'products',
	security: {
		type: uranio.types.SecurityType.UNIFORM,
		_r: uranio.types.PermissionType.NOBODY
	},
	properties: {
		title: {
			type: uranio.types.PropertyType.EMAIL,
			label: 'Title'
		},
		price: {
			type: uranio.types.PropertyType.FLOAT,
			label: 'Price'
		}
	}
})
