import styled from "styled-components"

export const FooterWrapper = styled.section`
	width: 100%;
  	padding-top: 20px;
  	padding-bottom: 20px;
  	box-sizing: content-box;
	background: #1D2F6F;

  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
  }
`

export const LinkItem = styled.a`
	font-size: 18px;
	line-height: 30px;
	color: #fff;
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #FAC748;
		left: 6px;
	}
`

export const SocialIconsContainer = styled.div`
display: flex;
justify-content: center;
padding-left: 21vw;
padding-right: 21vw;
flex-wrap: wrap;
`

export const CompanyContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`


export const Slogan = styled.p`
	color: #ffff;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 22px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;
  gap: 10px;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`


export const LinkList = styled.ul`
  	display: flex;
	gap: 10vw;
	padding-left: 21vw;
	padding-right: 21vw;
	margin-bottom: 40px;
	flex-wrap: wrap;
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: #fff;
	margin-bottom: 16px;
`
