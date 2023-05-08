import CartIcon from '../assets/images/icon-cart.svg';

function Lobby(){
    return(
        <div className='allpage'>
            <div className='container columns-container'>
                <div className='image-container'>
                </div>
                <div className='description-container'>
                    <p className='product-type'>
                        P E R F U M E
                    </p>
                    <div className='name-product-container'>
                        <p className='name-product'>
                            Gabrielle Essence Eau De Parfum
                        </p>
                    </div>
                    <div className='description-product-container'>
                        <p className='description-product'>
                            A floral solar and voluptuous interpretation composed by Olivier Polge. Pertumer-Creator for the House of CHANEL
                        </p>
                    </div>
                    <div className='columns-price-container'>
                        <div className='price-product-container'>
                            <p className='price-product'>
                                $149.99
                            </p>
                        </div>
                        <div className='last-price-product-container'>
                            <p className='last-price-product'>
                                $169.99
                            </p>
                        </div>
                    </div>
                    <div className='button-add-to-cart-container'>
                        <button className='button-add-to-cart'>
                            <img alt='CartIcon' src={CartIcon}/>
                            <p>Add to Cart</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='footer-page'>
                <p>Created by <a href="https://github.com/Farith-Palestina">Farith Palestina</a>.</p>
            </div>
        </div>
    );
}

export default Lobby;