import React from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import useAnimatedNavToggler from '../../helpers/useAnimatedNavToggler.js';
import { ReactComponent as MenuIcon } from 'feather-icons/dist/icons/menu.svg';
import { ReactComponent as CloseIcon } from 'feather-icons/dist/icons/x.svg';

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto pt-4
`;

export const NavLinks = tw.div`inline-block`;

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 hover:underline hocus:text-primary-500
`;

export const SignUp = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0 
`;

export const LogoLink = styled(NavLink)`
	${tw`flex items-center font-black border-b-0 text-2xl! ml-0! hocus:no-underline `};

	img {
		${tw`w-10 mr-3`}
	}
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between  pt-0 px-4`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
	${tw`lg:hidden z-10 fixed top-0 inset-x-0 p-8 border text-center rounded-lg text-gray-900 bg-white h-full`}
	${NavLinks} {
		${tw`flex flex-col items-center `}
	}
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

//eslint-disable-next-line
export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = 'lg' }) => {
	const defaultLinks = (
		<NavLinks key={1}>
			<NavLink href="/#">About</NavLink>
			<NavLink href="/#">Blog</NavLink>
			<NavLink href="/#">Pricing</NavLink>
			<NavLink href="/#">Contact Us</NavLink>
			<NavLink href="/#" tw="lg:ml-12!">
				Login
			</NavLink>
			<SignUp css={roundedHeaderButton && tw`rounded-full`} href="/#">
				Sign Up
			</SignUp>
		</NavLinks>
	);

	const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
	const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

	const defaultLogoLink = (
		<LogoLink href="/">
			<img src="" alt="logo" />
		</LogoLink>
	);

	logoLink = logoLink || defaultLogoLink;
	links = links || defaultLinks;

	return (
		<Header className={className || 'header-light'}>
			<DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
				{logoLink}
				{links}
			</DesktopNavLinks>

			<MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
				{logoLink}
				<MobileNavLinks
					initial={{ x: '150%', display: 'none' }}
					animate={animation}
					transition={{ duration: 0.7, type: 'spring', ease: 'easeInOut' }}
					css={collapseBreakpointCss.mobileNavLinks}>
					{links}
				</MobileNavLinks>
				<NavToggle onClick={toggleNavbar} className={showNavLinks ? 'open' : 'closed'}>
					{showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
				</NavToggle>
			</MobileNavLinksContainer>
		</Header>
	);
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
	sm: {
		mobileNavLinks: tw`sm:hidden`,
		desktopNavLinks: tw`sm:flex`,
		mobileNavLinksContainer: tw`sm:hidden`,
	},
	md: {
		mobileNavLinks: tw`md:hidden`,
		desktopNavLinks: tw`md:flex`,
		mobileNavLinksContainer: tw`md:hidden`,
	},
	lg: {
		mobileNavLinks: tw`lg:hidden`,
		desktopNavLinks: tw`lg:flex`,
		mobileNavLinksContainer: tw`lg:hidden`,
	},
	xl: {
		mobileNavLinks: tw`lg:hidden`,
		desktopNavLinks: tw`lg:flex`,
		mobileNavLinksContainer: tw`lg:hidden`,
	},
};
