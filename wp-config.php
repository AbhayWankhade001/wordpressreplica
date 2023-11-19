<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'new' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );


/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'X>3^f`Fp%|M*,1`5EG+O?{^GCSpsergq-vW,4wP6{XX6Dgj/6:y$$W}1.Xt:v*d*' );
define( 'SECURE_AUTH_KEY',  'Jm%R^.!p$Vm1zACB|sa?A9XmXBhk-~`nyeS20J/*6>8fV}o!iD>h(RTi*?EFo|j%' );
define( 'LOGGED_IN_KEY',    '781<Hztl&kG[Tt+ASwtOg|X70b=F/zxX/a`ERp`!8-PPmM0xC+@<8&dZ!O.JLuzW' );
define( 'NONCE_KEY',        '[k2.Ql?)au3MNu*eDG9[9Q_i%3=0(y[7_<0gRL +Q_66}2!#SD?qp+|C2-*<84Wg' );
define( 'AUTH_SALT',        'r+rTNiXd+IXe9 (-&{%6;L.xO< ,cOa9khjD=VE*t0158Dj1`4/S?<5uOlbUcgP{' );
define( 'SECURE_AUTH_SALT', 'yo<gX,$VugXOJK>8Si?o=cU!@RGy:n0=Su6XguWdSGMYG2[|&K((V,0<q*NyL?vr' );
define( 'LOGGED_IN_SALT',   '_z}b3h]N> IJKC+4Z!xTgys)@eV,;^F(&wFd+@sp2tYe=Ie!Zey#>oa|FJkEukk?' );
define( 'NONCE_SALT',       ']H{`gh+{nhWz]B+P<zYGvWGK <-jzqat!@1eV]8x6ttv `ID{ll`5jg7(Rv%`Xf_' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
