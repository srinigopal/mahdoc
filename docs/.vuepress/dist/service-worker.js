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
    "revision": "487d757825b5bc16d6b0f99e9dcb3cfd"
  },
  {
    "url": "1.x/advanced/create-product-type.html",
    "revision": "22256bdfc36ebc9024b39e336dbaa4dc"
  },
  {
    "url": "1.x/advanced/create-shipping-method.html",
    "revision": "99f72fa7b88dcbf123e31aac35a72814"
  },
  {
    "url": "1.x/advanced/datagrid.html",
    "revision": "7e1a1bfce75bdafc7a7988a47ca46e9d"
  },
  {
    "url": "1.x/advanced/events.html",
    "revision": "cbf93e5a9605dbebcf9bd1a3ac7e19bd"
  },
  {
    "url": "1.x/advanced/helpers.html",
    "revision": "1f64de8e408ee925f04120a46adf94b9"
  },
  {
    "url": "1.x/advanced/index.html",
    "revision": "de3546c96f819968f4daeffa4169769a"
  },
  {
    "url": "1.x/advanced/indexing-products-to-elasticsearch.html",
    "revision": "48b6fe632822d03797eae2be2c56a6e6"
  },
  {
    "url": "1.x/advanced/override-core-model.html",
    "revision": "619423c7e7d24e4c963aa7f1ad0e5faa"
  },
  {
    "url": "1.x/advanced/render-event.html",
    "revision": "a52c011975f957a109a8dc35a4ab1653"
  },
  {
    "url": "1.x/advanced/security-practice.html",
    "revision": "217fd54ea0020d57e8331ac63e55f9db"
  },
  {
    "url": "1.x/api/addresses.html",
    "revision": "f77b0e88c8de06689b10108166dbf8e3"
  },
  {
    "url": "1.x/api/attribute-families.html",
    "revision": "2eda244410d571483d68c0fe285058c0"
  },
  {
    "url": "1.x/api/attributes.html",
    "revision": "3bde9632d583f1aff27788de0f3f7c52"
  },
  {
    "url": "1.x/api/cart.html",
    "revision": "d13a27bcd1e64af1c89c8addc0455948"
  },
  {
    "url": "1.x/api/categories.html",
    "revision": "f2bc60ee4c757cbbd5b68506f1509aec"
  },
  {
    "url": "1.x/api/customers.html",
    "revision": "2d11d8a156bafe97d10b103780f70e1e"
  },
  {
    "url": "1.x/api/explanation.html",
    "revision": "0ecc0adcf3aca85a33d38aa4077be936"
  },
  {
    "url": "1.x/api/getting-started-with-the-api.html",
    "revision": "4fbf59dd952fca28d6ba36cf19e36bcc"
  },
  {
    "url": "1.x/api/index.html",
    "revision": "4f95eb675df7e008eb473581617eece1"
  },
  {
    "url": "1.x/api/invoices.html",
    "revision": "a79549bbd75148c4d0a69f936941d78c"
  },
  {
    "url": "1.x/api/locales.html",
    "revision": "c4c5604a346cf7bf7c31e7dabbabb047"
  },
  {
    "url": "1.x/api/orders.html",
    "revision": "04e839b3e4ad2e9f7c85c9f9e171f463"
  },
  {
    "url": "1.x/api/products.html",
    "revision": "855ed986f2b0e75a0b4b1ace1d61b2cf"
  },
  {
    "url": "1.x/api/reviews.html",
    "revision": "a393a536e067ecee54ced3329970b1cf"
  },
  {
    "url": "1.x/api/shipments.html",
    "revision": "79f09b0ba7aa6ffbb27eef055b5e7973"
  },
  {
    "url": "1.x/api/transactions.html",
    "revision": "ed788a1927b6e980dbb43f32b9989b59"
  },
  {
    "url": "1.x/api/wishlists.html",
    "revision": "4ff53669c387d620c8127c3cf3817f3b"
  },
  {
    "url": "1.x/deploy/index.html",
    "revision": "462f64f159eacb8188b836555cf68efa"
  },
  {
    "url": "1.x/introduction/docker.html",
    "revision": "5c4d02f0f4e4da170249b9f862db78ab"
  },
  {
    "url": "1.x/introduction/index.html",
    "revision": "6dd7179ceaa6eb3c8d3dd93aa7f72d0a"
  },
  {
    "url": "1.x/introduction/installation.html",
    "revision": "9efc491fab6db7495c0bb655ca87f24e"
  },
  {
    "url": "1.x/introduction/requirements.html",
    "revision": "a55a3ed4110123ba2c302cdc7057c856"
  },
  {
    "url": "1.x/introduction/upgrade-to-latest-bagisto.html",
    "revision": "c730fb8161227673f47173ae29c6d978"
  },
  {
    "url": "1.x/themes/change-email-template.html",
    "revision": "6df8f845729efd08e38938694fb5d619"
  },
  {
    "url": "1.x/themes/create-admin-theme.html",
    "revision": "ca31f64dbc7502731f891164f197ff1c"
  },
  {
    "url": "1.x/themes/create-theme.html",
    "revision": "e544a8ce0f588fdd093693b551f73158"
  },
  {
    "url": "1.x/themes/customize-hompepage-menu.html",
    "revision": "47e037e81d9a7829c8e2987b72b7ff74"
  },
  {
    "url": "1.x/themes/index.html",
    "revision": "5f122b29ec88c421df9724c8f9c15bba"
  },
  {
    "url": "1.x/themes/integrate-image-search-in-theme.html",
    "revision": "afaab8ea094cfa460747e9fa23b1df0d"
  },
  {
    "url": "1.x/themes/tracer.html",
    "revision": "634f144403d4720f750d25529d620396"
  },
  {
    "url": "1.x/translations/change-the-language-of-error-validations-on-your-store.html",
    "revision": "fd3ac46313d492d697f3357b4a9a37da"
  },
  {
    "url": "1.x/translations/index.html",
    "revision": "a0d538b8604a6d6dff1ed37de94e0b2c"
  },
  {
    "url": "1.x/translations/translation-based-on-locale.html",
    "revision": "3543e4ac9251a2c054224943b82e5ebc"
  },
  {
    "url": "1.x/user-guides/cart-catalog-rule.html",
    "revision": "feacda5e7070e461f51fe6ff88765e11"
  },
  {
    "url": "1.x/user-guides/cart-rule.html",
    "revision": "4ca6e0d69957167e8cd2749dda82d07d"
  },
  {
    "url": "1.x/user-guides/index.html",
    "revision": "eacd5c12f5be846951d5e8bf3f06f9f7"
  },
  {
    "url": "1.x/user-guides/social-auth.html",
    "revision": "0b0ffeb966b4ab8e278c2e969cf4a3cd"
  },
  {
    "url": "1.x/user-guides/tax-rates.html",
    "revision": "b06456676aa21bc32b390354d3e6a885"
  },
  {
    "url": "404.html",
    "revision": "a79750c795b56f43f06dc628190ab0a2"
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
    "url": "assets/js/10.a518384a.js",
    "revision": "2a60227f82039a3fa8c9b09fa8d14c55"
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
    "url": "assets/js/15.f39be97e.js",
    "revision": "30a4259b80a08306e52ab457d1072228"
  },
  {
    "url": "assets/js/16.d3ba527e.js",
    "revision": "fd3a6d2d88ed7a10c68e26c1d5ad0a22"
  },
  {
    "url": "assets/js/17.a59caefb.js",
    "revision": "ab818150b3c56023f54e5087a8061ac9"
  },
  {
    "url": "assets/js/18.3cac8ecb.js",
    "revision": "735da42e03891be8b7ddeb3f0c63f227"
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
    "url": "assets/js/22.b25818a0.js",
    "revision": "25879756809ac3bc42707580bedd98aa"
  },
  {
    "url": "assets/js/23.01f0039e.js",
    "revision": "6a9c2c03bc523fcc99f7195568e7202d"
  },
  {
    "url": "assets/js/24.d018499a.js",
    "revision": "c7bcbe9c34c14438d137751f207c11cd"
  },
  {
    "url": "assets/js/25.e3be74de.js",
    "revision": "46f07bbd8f79c2e1ad9af1767bffec67"
  },
  {
    "url": "assets/js/26.cc1db572.js",
    "revision": "7f1e775aebc22c715286db7d5feba795"
  },
  {
    "url": "assets/js/27.76ec1dae.js",
    "revision": "87993ac9d02722a55495b68c9a554e36"
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
    "url": "assets/js/32.e4e7af63.js",
    "revision": "f85cf0b17e5c12b2e39093b8bda1acec"
  },
  {
    "url": "assets/js/33.d0c616c9.js",
    "revision": "e63cd7419c1e1e36c8633d325fe61ee9"
  },
  {
    "url": "assets/js/34.fc65fe49.js",
    "revision": "3acf00c29d932fd467a6178dea65cd9c"
  },
  {
    "url": "assets/js/35.ff486669.js",
    "revision": "c085d1b5a6c53c4f2ae29c0aa79eb278"
  },
  {
    "url": "assets/js/36.76b5cf36.js",
    "revision": "b944e83a1baa40494c5cc3d3872fc3df"
  },
  {
    "url": "assets/js/37.a24089b6.js",
    "revision": "31a7e5a95525c0fd9cc40be6743e84a7"
  },
  {
    "url": "assets/js/38.ce696304.js",
    "revision": "8e91fe675acd906e32d96cbbb536eaef"
  },
  {
    "url": "assets/js/39.4ca3e2c0.js",
    "revision": "e14a491d9505df84bde788d4e712cc30"
  },
  {
    "url": "assets/js/4.d784c68b.js",
    "revision": "fc4fe76786e24d6b043b33ad1bbef494"
  },
  {
    "url": "assets/js/40.b7175e7a.js",
    "revision": "2b10bf3970cd4300106ddb2c75fdf489"
  },
  {
    "url": "assets/js/41.0429d052.js",
    "revision": "9dd428f3028514601959fd918dce613d"
  },
  {
    "url": "assets/js/42.d782668a.js",
    "revision": "929ef886992d4993942084a317ce6dad"
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
    "url": "assets/js/50.b8f246e0.js",
    "revision": "67683b1cdb7ab13144527cacb6497530"
  },
  {
    "url": "assets/js/51.654331ac.js",
    "revision": "86116820907dd698ee02963fd201be28"
  },
  {
    "url": "assets/js/52.099c9bb0.js",
    "revision": "6a7b7aa11dcd188a1f4e0779bbd236f1"
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
    "url": "assets/js/6.d9fd4a1e.js",
    "revision": "583b0fcc55afe33c3f65f2166c68ff9d"
  },
  {
    "url": "assets/js/7.1d4cca15.js",
    "revision": "4180dd9a998983dc53a0a72f7e53d3c6"
  },
  {
    "url": "assets/js/8.7e0e95d4.js",
    "revision": "473bd40b32f954ad56af5b455f7fdcf5"
  },
  {
    "url": "assets/js/9.c1c783ff.js",
    "revision": "32e9ed9bba45d7947ed82d0abe0bba5a"
  },
  {
    "url": "assets/js/app.e5bb9ed1.js",
    "revision": "0104615d201532a194b4a2fcc4ffdd10"
  },
  {
    "url": "index.html",
    "revision": "1dbfef4dec9be039843099327b226343"
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
