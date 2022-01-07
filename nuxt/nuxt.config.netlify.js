import { resolve } from 'path';

export default {
	alias: {
		'uranio': resolve(__dirname, './src/uranio/client'),
		'uranio-trx': resolve(__dirname, './src/uranio/trx/'),
		'uranio-api': resolve(__dirname, './src/uranio/trx/api/'),
		'uranio-core': resolve(__dirname, './src/uranio/trx/api/core/'),
		'uranio-books': resolve(__dirname, './src/books/'),
	},
	components: [
		{
			path: '~/components/',
			extensions: ['vue']
		}
	],
	buildDir: './.nuxt',
	srcDir: './src/uranio/nuxt/',
	target: 'static',
	ssr: false,
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/style-resources'
	],
	typescript: {
		typeCheck: true
	},
	generate: {
		dir: '../../dist/client/',
		fallback: '404.html',
		exclude: ['/urn-admin'],
	},
	server: {
		port: 6666
	},
	router: {
		trailingSlash: false,
		linkActiveClass: 'urn-active-link',
		linkExactActiveClass: 'urn-exact-active-link',
		parseQuery(q) {
			return require('qs').parse(q);
		},
		stringifyQuery(q) {
			const r = require('qs').stringify(q);
			return r ? '?' + r : '';
		},
	},
	loading: {
		color: '#2222FF',
		height: '2px',
		throttle: 200,
		duration: 2000,
		continuous: true
	},
	// watchers: {
	//   webpack: {
	//     ignored: [
	//       `${process.cwd()}/node_modules/**/*`,
	//       `${process.cwd()}/.uranio/server/**/*`,
	//       `${process.cwd()}/.uranio/.tmp/**/*`,
	//       `${process.cwd()}/src/**/*`,
	//       `${process.cwd()}/dist/**/*`,
	//     ]
	//   }
	// },
	hooks: {
		build: {
			before(){
				console.log('BEFORE BUILD');
			},
			compile(){
				console.log('BEFORE COMPILE');
			},
			compiled(){
				console.log('COMPILED');
			}
		}
	}
};
