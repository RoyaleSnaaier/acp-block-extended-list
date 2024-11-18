<?php
/**
 * Plugin Name:       acp-block-extended-list
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       todo-list
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