import { injectGlobal } from "styled-components";

/* eslint no-unused-expressions: 0 */
injectGlobal`


	*, *:before, *:after {
		box-sizing: border-box;
	}
	
	html {
		font-size: 16px;
		height: 100%;
		width: 100%;
		margin: 0 !important;
		padding: 0 !important;
	}

	body {
		margin: 0;
		font-size: 16px;
		color: #111212;
		position: relative;
		min-height: 100%;
		width: 100%;
	}

	body.fontLoaded {
		margin: 0 !important;
		padding: 0 !important;
	}
	
	div#live-announcer {
		position: absolute;
		overflow: hidden;
		clip: rect(0 0 0 0);
		height: 1px; width: 1px;
		margin: -1px; padding: 0; border: 0;
	}

	input[type=text]::-ms-clear {
		display: none;
	}

	#app {
		background-color: white;
		min-height: 100%;
		min-width: 100%;
		margin: 0 !important;
		padding: 0 !important;
	}

	i:hover {
		cursor: pointer;
	}

	.nav {
		flex-grow: 1;
		background:	rgb(241,243,243);
	}

	.nav-tab-active {
		background: #f1f1f1;
		opacity: 1;
	}

	.bankChequeImage {
		height: 100%;
		width: 100%;
	}

	.bankWebsiteImage {
		height: 70%%;
		width: 85%;
	}

	.offScreen {
		position: absolute;
		left: -10000px;
		border: 1px solid;
		padding: 0.2em;
	}

	.modalClass {
		width: 645px;
  }

  .panel-default
	  margin-bottom: 0px;
	  border-color: #fff;
	  background-color: #fff;
}

  .panel-default,
  .panel-default > .panel-heading{
	margin-bottom: 0px;
	border-color: #fff;
	background-color: #fff;
	border: 0;
	box-shadow: none;
	padding: 5px;

  }
  .panel-default > .panel-heading + .panel-collapse > .panel-body{
	border-top-color: #fff;
	margin-bottom: 0px;
	border-color: #fff;
	background-color: #fff;
	border: 0;
  	box-shadow: none;
  }

  .tippy-touch { cursor: pointer !important; }

  //Title and <li> css
  .bankingHelp{
	color: #00693C;
	&:hover {
		font-weight: 600;
	}
  }

  .banking-website-info{
	  color: #000000;
	  font-size: 14px;
  }


//Text for anchor tags (to be removed when i tooltip is removed)
  .info-a{
    color:#fff;
    &:hover {
      color: #fff;
      font-weight: bold;
    }
  }

  //TO BE USED with the aria computing when on hover.
  // .infoToolTip[aria-hidden='true']{
  //   display: none;
  // }

	//panel for banking edit
	.panel-title {
		font-family: 'Open Sans';
		font-size: 16px;
		font-weight: 600;
		color: #00693C;
		&:hover {
			color: #005844;
			text-decoration: underline;
		  }
	}
	.panel-title > a {
		display: block;
		padding: 5px;
	}
	.panel-group{
		margin-bottom: 0px;
	}
	.panel-heading{
		padding-bottom: 0px;
	}
`;
