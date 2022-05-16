import '../styles/colors.css';
import '../styles/common.css';
import '../styles/flexboxgrid.css';
import '../styles/fonts.css';
import '../styles/util.css';
import '../styles/less-space.css';
import '../styles/reset-styles.css';
import '../styles/formRelated.css';
import '../styles/sliderRelated.css';
import '@fortawesome/fontawesome/styles.css';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Component {...pageProps} />
			<div>
				<a href='https://wa.me/919148889666' target='_blank'><img src="images/whatsapp1.png" alt="whatsapp-icon" style={{ width: '60px', height: '60px', position: 'fixed', zIndex: 9, bottom: 10, left: '20px' }} /></a>
			</div>
		</div>
	);
}

export default MyApp;
