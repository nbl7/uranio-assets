/**
 * URANIO auto-generated file for starting the server
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';
urn_log.init(urn_log.LogLevel.DEBUG);

import uranio from 'uranio';
uranio.init();

const express_service = uranio.api.service.create();

express_service.listen(() => {
	urn_log.debug(`Listening on port ${uranio.conf.get(`service_port`)}...`);
});
