<?php

// This code loads child style-rtl.css

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles', 9999 );
function my_theme_enqueue_styles() {
	if ( is_rtl() ){
		$parent_style = 'storefront-style';
		wp_dequeue_style( 'storefront-child-style' ); // 'child-style' does not work
		wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style-rtl.css', array( $parent_style), time() ); // 'storefront-child-style' does not work
	}
}



/* Remove the handheld navigation bar
add_action( 'init', 'jk_remove_storefront_handheld_footer_bar' );

function jk_remove_storefront_handheld_footer_bar() {
  remove_action( 'storefront_footer', 'storefront_handheld_footer_bar', 999 );
}*/



/* remove text from menu bar
add_filter( 'storefront_menu_toggle_text', 'jk_storefront_menu_toggle_text' );
function jk_storefront_menu_toggle_text( $text ) {
	$text = __( '');
	return $text;
}
*/

// change number of products per row
// function loop_columns() {
//return 4; // 4 products per row}
//add_filter('loop_shop_columns', 'loop_columns', 999);




// beginning of code from tychesoftwares.com, Anubha Bhat 
// 
// open external products in a new tab


// This will take care of the Buy Product button below the external product on the Shop page.
add_filter( 'woocommerce_loop_add_to_cart_link', 'ts_external_add_product_link' , 10, 2 );

// Remove the default WooCommerce external product Buy Product button on the individual Product page.
remove_action( 'woocommerce_external_add_to_cart', 'woocommerce_external_add_to_cart', 30 );

// Add the open in a new browser tab WooCommerce external product Buy Product button.
add_action( 'woocommerce_external_add_to_cart', 'ts_external_add_to_cart', 30 );


function ts_external_add_product_link( $link ) {
global $product;

if ( $product->is_type( 'external' ) ) {

$link = sprintf( '<a rel="nofollow" href="%s" data-quantity="%s" data-product_id="%s" data-product_sku="%s" class="%s" target="_blank">%s</a>',
esc_url( $product->add_to_cart_url() ),
esc_attr( isset( $quantity ) ? $quantity : 1 ),
esc_attr( $product->id ),
esc_attr( $product->get_sku() ),
esc_attr( isset( $class ) ? $class : 'button product_type_external' ),
esc_html( $product->add_to_cart_text() )
);
}

return $link;
}

function ts_external_add_to_cart() {
global $product;

if ( ! $product->add_to_cart_url() ) {
return;
}

$product_url = $product->add_to_cart_url();
$button_text = $product->single_add_to_cart_text();


// The code below outputs the edited button with target="_blank" added to the html markup.

do_action( 'woocommerce_before_add_to_cart_button' ); ?>

<p class="cart">
<a href="<?php echo esc_url( $product_url ); ?>" rel="nofollow" class="single_add_to_cart_button button alt" target="_blank">
<?php echo esc_html($button_text ); ?></a>
</p>

<?php do_action( 'woocommerce_after_add_to_cart_button' );

}
// end of open external products in a new tab

// end of code from tychesoftwares.com, Anubha Bhat
// 

// 
// 
// 
// Customizing checkout fields using actions and filters https://docs.woocommerce.com/document/tutorial-customising-checkout-fields-using-actions-and-filters
// 
// 

//
// Hook in 
add_filter( 'woocommerce_checkout_fields' , 'custom_override_checkout_fields' );

// Our hooked in function - $fields is passed via the filter!
function custom_override_checkout_fields( $fields ) {

	// Overriding core fields (Order Notes)
	$fields['order']['order_comments']['placeholder'] = '';
     
	// Overriding core fields (remove fields)
	unset($fields['billing']['billing_address_2']);
	
     return $fields;
}

// make fields optional
// Hook in
add_filter( 'woocommerce_default_address_fields' , 'custom_override_default_address_fields' );

// Our hooked in function - $address_fields is passed via the filter!
function custom_override_default_address_fields( $address_fields ) {
     $address_fields['address_1']['required'] = false;
	$address_fields['postcode']['required'] = false;
	$address_fields['state']['required'] = false;
	$address_fields['city']['required'] = false;

     return $address_fields;
}

// end of Customizing checkout fields using actions and filters https://docs.woocommerce.com/document/tutorial-customising-checkout-fields-using-actions-and-filters

// make email address first field https://rudrastyh.com/woocommerce/reorder-checkout-fields.html
add_filter( 'woocommerce_checkout_fields', 'make_email_address_first' );
 
function make_email_address_first( $checkout_fields ) {
	$checkout_fields['billing']['billing_email']['priority'] = 5;
	return $checkout_fields;
} 
// end of make email address first field
