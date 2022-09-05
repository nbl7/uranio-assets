/**
 * URANIO auto-generated generate file.
 *
 * @packageDocumentation
 */

import {urn_log} from 'uranio-utils';
urn_log.init({
	log_level: urn_log.LogLevel.DEBUG,
	debug_info: false,
	prefix: '[generate]'
});

import uranio from 'uranio';

export * from './register';

uranio.util.generate.schema_and_save();
