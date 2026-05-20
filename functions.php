<?php
/**
 * Lizzdo Theme Functions
 */

function lizzdo_theme_scripts() {
    // Enqueue the main JS bundle from Vite build
    $dist_path = get_template_directory() . '/dist/assets/';
    $dist_url = get_template_directory_uri() . '/dist/assets/';
    
    // Find the main JS and CSS files (Vite adds hashes)
    $js_files = glob($dist_path . '*.js');
    $css_files = glob($dist_path . '*.css');
    
    if (!empty($js_files)) {
        $main_js = basename($js_files[0]);
        wp_enqueue_script('lizzdo-app', $dist_url . $main_js, array(), null, true);
    }
    
    if (!empty($css_files)) {
        $main_css = basename($css_files[0]);
        wp_enqueue_style('lizzdo-styles', $dist_url . $main_css, array(), null);
    }

    // Pass WordPress data to React
    wp_localize_script('lizzdo-app', 'wpData', array(
        'root' => esc_url_raw(rest_url()),
        'nonce' => wp_create_nonce('wp_rest'),
        'siteName' => get_bloginfo('name'),
        'siteDescription' => get_bloginfo('description'),
        'themeUrl' => get_template_directory_uri(),
        'logoUrl' => wp_get_attachment_image_src(get_theme_mod('custom_logo'), 'full')[0] ?? '',
        'sitePath' => wp_parse_url(home_url(), PHP_URL_PATH) ?: '/'
    ));
}
add_action('wp_enqueue_scripts', 'lizzdo_theme_scripts');

function lizzdo_theme_setup() {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'lizzdo_theme_setup');

// Add support for custom post types (Portfolio)
function lizzdo_register_portfolio_cpt() {
    $labels = array(
        'name' => 'Portfolio',
        'singular_name' => 'Project',
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'menu_icon' => 'dashicons-portfolio',
    );
    register_post_type('portfolio', $args);
}
add_action('init', 'lizzdo_register_portfolio_cpt');

// Add support for custom post types (Products)
function lizzdo_register_product_cpt() {
    $labels = array(
        'name' => 'Products',
        'singular_name' => 'Product',
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'menu_icon' => 'dashicons-cart',
    );
    register_post_type('product', $args);
}
add_action('init', 'lizzdo_register_product_cpt');
?>
