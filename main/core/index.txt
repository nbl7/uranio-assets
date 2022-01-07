/**
 * URANIO auto-generated file for start developing with uranio-core repo.
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';
urn_log.init(urn_log.LogLevel.DEBUG);

import uranio from 'uranio';

const superuser_bll = uranio.bll.basic.create(`superuser`);

superuser_bll.count({}).then((count_number) => {
	urn_log.debug(count_number);
});
