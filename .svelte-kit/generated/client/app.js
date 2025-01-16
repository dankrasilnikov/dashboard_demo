export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/daily": [3],
		"/daily/[date]": [4],
		"/demo": [5],
		"/monthly": [6],
		"/monthly/[month]": [7],
		"/quarter": [8],
		"/quarter/[quarter]": [9],
		"/settings": [10],
		"/settings/create-role": [11],
		"/settings/invite-user": [12],
		"/settings/profile": [13],
		"/settings/venue/add": [14],
		"/upload-csv": [15],
		"/weekly": [16],
		"/weekly/[date]": [17],
		"/yearly": [18],
		"/yearly/[yearly]": [19]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';