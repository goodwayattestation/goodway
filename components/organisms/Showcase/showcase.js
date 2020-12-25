import React from 'react';
import Card from '../../atoms/Card/card.js';
import styles from './showcase.module.css';

function Showcase(props) {
	const content = props.content;

	let itemsPerRow = props.itemsPerRow ? props.itemsPerRow : 4;

	let lastPart = content.slice(
		content.length - (content.length % itemsPerRow),
		content.length
	);

	return (
		<div
			className={`${styles['organism-showcase']} xs-mt-6 xs-mb-6 md-mt-12 md-mb-12`}
		>
			<div className="container-fluid">
				{content.map((a, i) => (
					<React.Fragment key={i}>
						{i % itemsPerRow === 0 && content.length - i >= itemsPerRow && (
							<div className="row center-xs">
								{[i, i + 1, i + 2, i + 3, i + 4].map((j, k) =>
									k < itemsPerRow ? (
										<div className="col-xs-12 col-sm-6 col-md-3" key={k}>
											<Card
												img={content[j].img}
												url={content[j].url}
												headline={content[j].headline}
												additionalInfo={content[j].additionalInfo}
												buttonText={content[j].buttonText}
												buttonUrl={content[j].buttonUrl}
											/>
										</div>
									) : (
										<span key={k}></span>
									)
								)}
							</div>
						)}
					</React.Fragment>
				))}

				<div className="row center-xs">
					{lastPart.map((c, i) => (
						<div className="col-xs-12 col-sm-6 col-md-3" key={i}>
							<Card
								img={c.img}
								url={c.url}
								headline={c.headline}
								additionalInfo={c.additionalInfo}
								buttonText={c.buttonText}
								buttonUrl={c.buttonUrl}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Showcase;
