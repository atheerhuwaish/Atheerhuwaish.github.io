<?php

add_action( 'wp_enqueue_scripts', 'storefront_enqueue_styles' );


function storefront_enqueue_styles() {
  
 
    $parent_style = 'parent-style'; // This is 'storefront-style' for the Storefront theme.
  
  
  
    if ( is_rtl() ) {
	
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style-rtl.css' );
    
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style-rtl.css', array( $parent_style ), wp_get_theme()->get('Version')    ); }
    
    else
    {
  
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( $parent_style ), wp_get_theme()->get('Version')    ); 
    
	}  
    
}


// How to make WooCommerce external product links open in a new tab by Anubha Bhat
// code
// https://www.tychesoftwares.com/how-to-make-woocommerce-external-product-links-open-in-a-new-tab

