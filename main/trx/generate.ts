/**
 * URANIO auto-generated generate file.
 *
 * @packageDocumentation
 */

import {urn_log} from 'urn-lib';
urn_log.init(urn_log.LogLevel.DEBUG);

import uranio from 'uranio';

export * from './register';

uranio.util.generate.schema_and_save();
uranio.util.generate.hooks_and_save();
uranio.util.generate.types_and_save();
