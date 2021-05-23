import { breakpoints } from '../conf/Breakpoints';

const getScreenResolution = () => {    	
	if (window.innerWidth < breakpoints.xs) return 'xs';
	else if (
		window.innerWidth >= breakpoints.xs &&
		window.innerWidth < breakpoints.sm
	)
		return 'sm';
	else if (
		window.innerWidth >= breakpoints.sm &&
		window.innerWidth < breakpoints.md
	)
		return 'md';
	else if (window.innerWidth >= breakpoints.md) return 'lg';
};

export default getScreenResolution;