<?php
/**
 * Plugin Name:       acp-block-extended-list
 * Description:       ACP Block Extended List is a custom block plugin developed by Admin Columns. This plugin enables the creation of extended ordered lists in WordPress. * 
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            admin columns
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       acp-block-extended-list
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action( 'init', function(){
    register_block_type( __DIR__ . '/build/extended-ordered-list' );
    register_block_type( __DIR__ . '/build/extended-ordered-list-item' );
});