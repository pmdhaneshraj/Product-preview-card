import React from 'react';
import { Button } from 'react-bootstrap';
import prwCardImg from '../../asset/Product preview card/image-product-desktop.jpg';

import './styles.scss';

const ProductPreviewCard = () => {
	return (
		<div className='product-prw-card-container'>
			<div className='product-prw-card'>
				<img className='prw-card-img' alt='prw-card-img' src={prwCardImg} />
				<div className='prw-card-details'>
					<span className='parfum-genere'>PERFUME</span>
					<h2 className='parfum-title'>Gabrielle Essence Eau De Parfum</h2>
					<p className='parfum-description'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfurner-Creator for the House of CHANEL.</p>
					<div className='parfum-price-details'>
						<span className='parfum-price'>$149.99</span>
						<span className='parfum-actual-price'>$169.99</span>
					</div>
					<div className='add-to-cart-button-container'>
						<Button className='add-to-cart-button' variant="success">
							<span class="material-symbols-outlined btn-icon">shopping_cart</span>
							<span className='btn-content'>Add to cart</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPreviewCard;