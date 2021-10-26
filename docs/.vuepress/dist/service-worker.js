/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.x/advanced/create-payment-method.html",
    "revision": "218c93c71cfe16d8ea88d28af3a40c50"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "8ae2532d62fab5f5ab77605af9b31339"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "b91968495ec1cb410f06143e044b8848"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "2897cc435c40b0e0576f12ead99f6114"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "b87f3cc2fc9660b9db345a07c69a8200"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "6a47cc56b305424fc3d0b055fdacfe46"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "2874d0dd38278a3981aa8eaa621af170"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "e817c75f4e3178a972d919ec77b04d28"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "d95e49ab055077727e414d0707b7cded"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "c1b8969bb1fa79186f330192ec150159"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "23ef2bf048e388bf76f6bc6a2632941a"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "e9628751aa6a3ae254b59297275b5940"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "d1b849ec2984da02b0b22e2a0da5a014"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "e666df3de0eb8925089972273b5d7f51"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "4c3ec3b0d451a679a856a73df95e43ee"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "326d9fd846fe972325cbd34ab89973ad"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "eeeac79acabd2cb7e671cd0b63466aa7"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "fc948f765df2e81c34d2fbf39bcbeb82"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "015cb9391aa0c1ba9d4d3f1c5890bbb3"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "d65d674820f379b0b1006cce36321cde"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "b436642e314d17c1773738f1dc9fb9f7"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "8b9ab6236c6c9e5abd23a3bb5e1029ae"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "581f36b9f9505fe039201f082b5cbbc0"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "01a610134a89f9cebd10e57e08835664"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "2eba3a8143a18e646d3d26a28e817041"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "0632eb74ee018c824f811d8451bcd6bc"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "ddf8dc00a64b28cbdfda1f32c1e49764"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "dc5e39bfcd4a5cd9fe5e724805bd3590"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "7d90f63dc965caa5bdfb03639fbaaf72"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "42b27884af406c2882fdf8ebb9b849d8"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "8759a03e5517088b722cee2797a2cfe9"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "a9e24a6e1a21590acca0143003b602bd"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "a61e953d9b28e2a945fa1c70c69f3be6"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "535bcd5946649c70fbfba4316caabb06"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "e42dd4722b1c0c91c58f7aa1a89adf45"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "7c796483797981ebd280f31fbe77b83f"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "36499903f25bbe6ad22cf31b0c79878c"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "2e2c57e2846083b317f47f96e170aa88"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "fdb4e9104c81533d0517a61769e0e3e6"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "0ecc477dff9baa23e881ce61914f68f5"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "a6b3467c561db010453255ee89190fe7"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "328735deaf3f410556509166024c82fd"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "db93b21149f179bc2b761a557c2024e4"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "23249b42d48cf3e6b1e52a893916c819"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "d667a76ab116401a97f082b509ea1b8e"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "55fa91917eecb7960994276fd2ef379f"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "5dc4e272cc7e641833b63e0037469dc1"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "acc3be9e3d63e4243b4cb7886dc404bd"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "d60dc3bf0ce5ba7e49ee1c01d07d5af7"
  },
  {
    "url": "404.html",
    "revision": "44434c1a2267ec0385509c426fa459d6"
  },
  {
    "url": "assets/css/0.styles.7e612dfc.css",
    "revision": "229436dddc5541cc57d9d271908e7d30"
  },
  {
    "url": "assets/img/add-locale-bagisto.b2e2cfb9.png",
    "revision": "b2e2cfb94cf27c4c873e38113fa70aaf"
  },
  {
    "url": "assets/img/admin_social_auth.1f906bf7.png",
    "revision": "1f906bf7aaadd3d1ffa9d1f2a1ecb564"
  },
  {
    "url": "assets/img/arrabic-attribute.4d7a4275.png",
    "revision": "4d7a4275690cfe606cdb2f1babf87cc5"
  },
  {
    "url": "assets/img/bagisto_add_info.78af382e.jpg",
    "revision": "78af382e00c5ed610f08e7dcb25de296"
  },
  {
    "url": "assets/img/bagisto_attribute.a6fc572b.jpg",
    "revision": "a6fc572b5095c9086b4b9594c7627dbb"
  },
  {
    "url": "assets/img/bagisto_cart_add.63562e08.jpg",
    "revision": "63562e08b02018b7b6a8826f9bb124f6"
  },
  {
    "url": "assets/img/bagisto_cart_guest.d853001d.jpg",
    "revision": "d853001da175e958725f6cf956e31e84"
  },
  {
    "url": "assets/img/bagisto_cart_remove_item.3b5df823.jpg",
    "revision": "3b5df82328f5369892e46b182c1fb326"
  },
  {
    "url": "assets/img/bagisto_cart_update.3b860220.jpg",
    "revision": "3b860220a366af90e600fd35c087d67b"
  },
  {
    "url": "assets/img/bagisto_cart.3cc30a8b.jpg",
    "revision": "3cc30a8be1ec377e6a4aa9c4bb1cc4d5"
  },
  {
    "url": "assets/img/bagisto_config_attr.83af48dd.jpg",
    "revision": "83af48ddf4fc985007f39acec9cc37e3"
  },
  {
    "url": "assets/img/bagisto_config.325d4e50.jpg",
    "revision": "325d4e50a5fd49d4ec8a9c447f21a6e6"
  },
  {
    "url": "assets/img/bagisto_move_to_wishlist.092fc8ae.jpg",
    "revision": "092fc8ae6b7ce543f91fcbcb840ebd82"
  },
  {
    "url": "assets/img/bagisto_orders_id.47d67a0d.jpg",
    "revision": "47d67a0d48c7eb4471788608a266ebd0"
  },
  {
    "url": "assets/img/bagisto_orders_no_pag.eb8fd609.jpg",
    "revision": "eb8fd6090b445f1a375c41d22bdb9405"
  },
  {
    "url": "assets/img/bagisto_prod_color.54846a87.jpg",
    "revision": "54846a878f4e58126066ca83a1f698e4"
  },
  {
    "url": "assets/img/bagisto_prod_price_config.1c3285d1.jpg",
    "revision": "1c3285d10a818abb2dca20a777b79258"
  },
  {
    "url": "assets/img/bagisto_prod_price_simple.78ef8f5a.jpg",
    "revision": "78ef8f5ac73bae616e5e0794dfeb7f42"
  },
  {
    "url": "assets/img/bagisto_prod_size.2fdc1d32.jpg",
    "revision": "2fdc1d32ecc5200a7a65d99b44e600fb"
  },
  {
    "url": "assets/img/bagisto_save_address.633cf573.jpg",
    "revision": "633cf57391403cf1df62f8dfe80d6661"
  },
  {
    "url": "assets/img/bagisto_save_order.c2fab81f.jpg",
    "revision": "c2fab81f906b0dda24ab128e2100f0e3"
  },
  {
    "url": "assets/img/bagisto_save_payment.99edb31c.jpg",
    "revision": "99edb31ca6dbf31d3261d528d48f120f"
  },
  {
    "url": "assets/img/bagisto_save_shipping.6c8d23d1.jpg",
    "revision": "6c8d23d1f29b3905c0742e6fe9dc2a03"
  },
  {
    "url": "assets/img/bagisto_ship_order_id.367b77a9.jpg",
    "revision": "367b77a9b47802107f443338b7ff1cfe"
  },
  {
    "url": "assets/img/bagisto_shipments.e6134a4b.jpg",
    "revision": "e6134a4b8b604b1756ab3ef108884406"
  },
  {
    "url": "assets/img/bagisto_wishlist_page.de525699.jpg",
    "revision": "de5256999417cca7f6ab7503a5b109d1"
  },
  {
    "url": "assets/img/catageory-in-arabic.4b55c745.png",
    "revision": "4b55c745b858c4aac3044fa348caf6a7"
  },
  {
    "url": "assets/img/channel-setting-in-bagisto.a7a72cb5.png",
    "revision": "a7a72cb5af650f7e582f8deae80e4f99"
  },
  {
    "url": "assets/img/default-location-calculation-config.ea4a469a.png",
    "revision": "ea4a469a4371daea67d8d9dc060dc002"
  },
  {
    "url": "assets/img/front-end-in-arabic.f7c759e0.png",
    "revision": "f7c759e055265bf9ebd9df156e22c9ab"
  },
  {
    "url": "assets/img/front-end.9aaeb0de.png",
    "revision": "9aaeb0de8e5707aa4afa1845e2fa1f4d"
  },
  {
    "url": "assets/img/github-OAuth-step1.e74d8be1.png",
    "revision": "e74d8be18d45562391def8eabc3f9f05"
  },
  {
    "url": "assets/img/github-OAuth-step3.1c5347e7.png",
    "revision": "1c5347e798d2d4e9f232e821b30a0d71"
  },
  {
    "url": "assets/img/google-OAuth-step1.cdeb34e7.png",
    "revision": "cdeb34e75d4109dc8c732cb2a41f7149"
  },
  {
    "url": "assets/img/google-OAuth-step10.7cf440b2.png",
    "revision": "7cf440b27afcc28b91d0569d0e0574dd"
  },
  {
    "url": "assets/img/google-OAuth-step2.33d3b5d7.png",
    "revision": "33d3b5d7d306652f9ad8145885649684"
  },
  {
    "url": "assets/img/google-OAuth-step3.7cfab527.png",
    "revision": "7cfab527afc801407b13bb1c0080502c"
  },
  {
    "url": "assets/img/google-OAuth-step4.58f07d86.png",
    "revision": "58f07d861b92fdf12e966ef8ec0a2f7d"
  },
  {
    "url": "assets/img/google-OAuth-step6.feabd47b.png",
    "revision": "feabd47b9a5af05843c2bb60b8226e37"
  },
  {
    "url": "assets/img/google-OAuth-step7.21f7d9f6.png",
    "revision": "21f7d9f6ff6babc41c0e032cf963356c"
  },
  {
    "url": "assets/img/google-OAuth-step8.c2178472.png",
    "revision": "c21784723f5897170c0780d4307dbbb1"
  },
  {
    "url": "assets/img/google-OAuth-step9.83e7862b.png",
    "revision": "83e7862bd3d9aa050b4dbd2bded3fec7"
  },
  {
    "url": "assets/img/installed-elastic-info.46e47fde.png",
    "revision": "46e47fde533d4982324a07b091943503"
  },
  {
    "url": "assets/img/language-changes.a799195d.png",
    "revision": "a799195df5c2def1f7798b6296eb0659"
  },
  {
    "url": "assets/img/limiting-error-messages.5887bc7c.png",
    "revision": "5887bc7c25f56a6e4e03ead32f873720"
  },
  {
    "url": "assets/img/locale-setup.a0047ee5.png",
    "revision": "a0047ee598bf517ca89e565539e444cc"
  },
  {
    "url": "assets/img/locale-trans.eed57105.png",
    "revision": "eed57105bf11bb1ad460c9e09ec9e207"
  },
  {
    "url": "assets/img/locale.b190a2d4.png",
    "revision": "b190a2d4e2ed61a1a75b829f6af4bdcf"
  },
  {
    "url": "assets/img/mail-sample.6aa3d730.png",
    "revision": "6aa3d7304bd852564b76860b7117bdb7"
  },
  {
    "url": "assets/img/product-in-arabic.e634c43f.png",
    "revision": "e634c43ff0331dcf5ff91211017c6f1f"
  },
  {
    "url": "assets/img/product-index.a45ce729.png",
    "revision": "a45ce7297692b3170774154331aa5911"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/translation.96b21cfa.png",
    "revision": "96b21cfa473af2e88086d0ccdebb40e4"
  },
  {
    "url": "assets/js/10.e0f2b59d.js",
    "revision": "b0df58df07ff713e829760466470d67d"
  },
  {
    "url": "assets/js/11.2efa57d1.js",
    "revision": "74b9cc2a1d03bb646b57fd582bf5ed76"
  },
  {
    "url": "assets/js/12.b8bc02b2.js",
    "revision": "6a8309c65ed334feccbce8fc2fe88061"
  },
  {
    "url": "assets/js/13.7a781a39.js",
    "revision": "0b7f8f0cadc4b319e179d69175206055"
  },
  {
    "url": "assets/js/14.c44015cf.js",
    "revision": "2e43c0c9c73240095f34819645b60d08"
  },
  {
    "url": "assets/js/15.38be6dc9.js",
    "revision": "7592a376d874665e161db93caf7472a3"
  },
  {
    "url": "assets/js/16.d3ba527e.js",
    "revision": "fd3a6d2d88ed7a10c68e26c1d5ad0a22"
  },
  {
    "url": "assets/js/17.846b7a1d.js",
    "revision": "0419f0dda4c3989bf29021f1b1fd4a10"
  },
  {
    "url": "assets/js/18.9bdaf0a8.js",
    "revision": "a3b71121b32a7070f3b9373ee3d31f34"
  },
  {
    "url": "assets/js/19.b2686cc6.js",
    "revision": "22bccefb8f1bd37e296a86bbd78cea9c"
  },
  {
    "url": "assets/js/2.7d56483b.js",
    "revision": "11a45fbe2a3f6c50d8f2dccad68f1704"
  },
  {
    "url": "assets/js/20.37e17a9d.js",
    "revision": "427fa767da10fc9aa7094e627c35d700"
  },
  {
    "url": "assets/js/21.87a9daae.js",
    "revision": "958acd7c3b697a15389bc233e7f9e9c9"
  },
  {
    "url": "assets/js/22.94c33393.js",
    "revision": "c668090fd24c41b5dcc615b872fc3206"
  },
  {
    "url": "assets/js/23.01f0039e.js",
    "revision": "6a9c2c03bc523fcc99f7195568e7202d"
  },
  {
    "url": "assets/js/24.5dc85786.js",
    "revision": "b41c9d351c4d58330d302f9b8366945c"
  },
  {
    "url": "assets/js/25.bae5a98f.js",
    "revision": "78dbd6bf2e499e3eee9889273b3b2520"
  },
  {
    "url": "assets/js/26.0d921ac8.js",
    "revision": "8508bd641aec9a4e65ee68b993a3c78f"
  },
  {
    "url": "assets/js/27.281fc698.js",
    "revision": "423bee5b1796ea37eee75826cbe069fc"
  },
  {
    "url": "assets/js/28.0d16941b.js",
    "revision": "0cd557d9a9c2e8d1e3bd3537575677a7"
  },
  {
    "url": "assets/js/29.f62faf2c.js",
    "revision": "7d77a650ec37475d19aabb57718c530f"
  },
  {
    "url": "assets/js/3.d30a7d54.js",
    "revision": "d55ee7fd4dc4d52839520c14f92eb3d0"
  },
  {
    "url": "assets/js/30.b41acf59.js",
    "revision": "5eea7dbd5ca11342d753643d38d5e553"
  },
  {
    "url": "assets/js/31.a00c1363.js",
    "revision": "d803213231cefe0cef4c831795abbcf7"
  },
  {
    "url": "assets/js/32.77789752.js",
    "revision": "c2ba70cc4744ce15c6511a9a5e385fcc"
  },
  {
    "url": "assets/js/33.e48bc0a7.js",
    "revision": "47d560af771a3a091c33d04f8421254c"
  },
  {
    "url": "assets/js/34.6cbe6ea1.js",
    "revision": "1a24331e4f3ecf9e9d9567150c872963"
  },
  {
    "url": "assets/js/35.6772b21d.js",
    "revision": "2ec37d78bfe330037048371662a5856e"
  },
  {
    "url": "assets/js/36.76b5cf36.js",
    "revision": "b944e83a1baa40494c5cc3d3872fc3df"
  },
  {
    "url": "assets/js/37.d95e4076.js",
    "revision": "c2953a6ce9bdaac109ac7910467a8081"
  },
  {
    "url": "assets/js/38.1ba5cfc7.js",
    "revision": "36e4fc37859265dcf57624c0dcb1151d"
  },
  {
    "url": "assets/js/39.e1799d47.js",
    "revision": "3b8ba81794bc6b3a522740ccbfdadcdc"
  },
  {
    "url": "assets/js/4.d784c68b.js",
    "revision": "fc4fe76786e24d6b043b33ad1bbef494"
  },
  {
    "url": "assets/js/40.9b787a83.js",
    "revision": "e60ef29ce1c837821a184fcbe3e046e8"
  },
  {
    "url": "assets/js/41.ecd8a82c.js",
    "revision": "dc6f04ef58ee4a59f2c49db4369abeb4"
  },
  {
    "url": "assets/js/42.7160131b.js",
    "revision": "04e60e5e3ff15a0589b36683d7e42a94"
  },
  {
    "url": "assets/js/43.34f6e12e.js",
    "revision": "cb02805f7d2130b1feca5213f2e76332"
  },
  {
    "url": "assets/js/44.9bf39ba1.js",
    "revision": "9bdffee94ec5ba750fa52c328d91e417"
  },
  {
    "url": "assets/js/45.54bdb3e6.js",
    "revision": "9cbbdd08e9f21e8982f499462589aeee"
  },
  {
    "url": "assets/js/46.fd32df4a.js",
    "revision": "752b98f22cfa4c8ee9cc263d0567b16b"
  },
  {
    "url": "assets/js/47.723b5f5a.js",
    "revision": "375feb52389bac06637c831a75df8b2f"
  },
  {
    "url": "assets/js/48.5f1fe0d8.js",
    "revision": "f2cfd1280a213744c02cb42ef23e745b"
  },
  {
    "url": "assets/js/49.64da311f.js",
    "revision": "c07e01bc9f04a609fac42cccea911480"
  },
  {
    "url": "assets/js/5.ffce0694.js",
    "revision": "c892a928f7837f32c4aa38323fb25173"
  },
  {
    "url": "assets/js/50.e180dd50.js",
    "revision": "6cfd43f5c2a4562fd95782facccbbebd"
  },
  {
    "url": "assets/js/51.75031e37.js",
    "revision": "7b78dcaf354146aa52d336483aba5c5f"
  },
  {
    "url": "assets/js/52.51a6da9e.js",
    "revision": "16ac2eea27d6aab91ef80a16cd6ca6f8"
  },
  {
    "url": "assets/js/53.c14009ef.js",
    "revision": "202d064ef971f7f8107dcb9420d421d3"
  },
  {
    "url": "assets/js/54.039e2578.js",
    "revision": "8a58b794b4703b22626aebffdbfda2f0"
  },
  {
    "url": "assets/js/55.270cc2c8.js",
    "revision": "858d7026cc4e757a5766a4c9ba6e83dd"
  },
  {
    "url": "assets/js/6.c18b646c.js",
    "revision": "b18cf521cb9ff439a54e857d06c9e002"
  },
  {
    "url": "assets/js/7.1d4cca15.js",
    "revision": "4180dd9a998983dc53a0a72f7e53d3c6"
  },
  {
    "url": "assets/js/8.ff1550ed.js",
    "revision": "fbc32a1956164a25ec50fbcf3c2795a9"
  },
  {
    "url": "assets/js/9.c1c783ff.js",
    "revision": "32e9ed9bba45d7947ed82d0abe0bba5a"
  },
  {
    "url": "assets/js/app.e3a4999f.js",
    "revision": "7617dc2a18d96cc32154c086f37da9eb"
  },
  {
    "url": "index.html",
    "revision": "08e9911cc66d4a1132cd6cb889ba6a02"
  },
  {
    "url": "logo.png",
    "revision": "d3d0f8dc4d47112b5d7418bebaca253e"
  },
  {
    "url": "v-icon.png",
    "revision": "d3d0f8dc4d47112b5d7418bebaca253e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
