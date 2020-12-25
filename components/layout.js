import Head from 'next/head';
import Footer from './organisms/Footer/Footer';

export default function Layout(props) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta name="description" content={props.description} />
				<meta name="keywords" content={props.keywords} />
				<meta
					name="google-site-verification"
					content="L_oC7cTh9dPbCifFuX2pJBx6QCtT4-rhsRjqgWni3vk"
				/>
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href={props.canonical} />
				<link
					href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap"
					rel="stylesheet"
				/>
				<link rel="stylesheet" href="/common/colors.css" />
				<link rel="stylesheet" href="/common/common.css" />
				<link rel="stylesheet" href="/common/flexboxgrid.css" />
				<link rel="stylesheet" href="/common/fonts.css" />
				<link rel="stylesheet" href="/common/less-space.css" />
				<link rel="stylesheet" href="/common/reset-styles.css" />
				<link rel="stylesheet" href="/common/util.css" />
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

				<title>{props.title}</title>

				<meta property="og:title" content="GoodWay Attestaion" />
				<meta property="og:type" content="Attestaion & Apostille Services" />
				<meta property="og:url" content="https://goodwayattestation.com//#/" />
				<meta
					property="og:image"
					content="https://cache.bl5.me/GoodWayAttestation/Images/og.png"
				/>
				<meta property="og:image:alt" content="GoodWay Logo" />
				<meta
					property="og:description"
					content="GoodWay Attestation & Apostille one stop solution"
				/>
				<meta property="og:locale" content="en_IN" />
			</Head>
			{props.children}
			<div className="h1">
				<h1 style={{ display: 'none' }}>{props.pageHeader}</h1>
			</div>
			<Footer />
		</>
	);
}

Layout.getInitialProps = async function () {
	return {
		title: 'Goodway Attestation',
		description:
			'GoodWay Attestation does everything you need with respect to proper legal stuff required by most of the organizations or nations.',
		keywords:
			'Certificate Attestation Agency in Bangalore, attestation services near me, hrd attestation for nurses in bangalore, uae attestation services in bangalore, hrd attestation bangalore karnataka, apostille services in bangalore, Apostille Certification Services in Bangalore, Apostille Attestation in Bangalore, apostille attestation fee bangalore',
		canonical: 'https://www.goodwayattestation.com/',
		pageHeader: 'Goodway Attestation',
	};
};
