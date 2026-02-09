// Route definitions: export a typed list of application routes.
// This file provides metadata (path, name, component file path) that
// the app can use to wire up a router or lazy-load pages.

export type AppRoute = {
	path: string
	name?: string
	/** Relative import path (from `src`) for the route's component — optional */
	component?: string
}

export const routes: AppRoute[] = [
	{ path: '/', name: 'Home', component: './App' },
	{ path: '/about', name: 'About', component: './pages/About' },
	{ path: '/contact', name: 'Contact', component: './pages/Contact' },
]

export default routes