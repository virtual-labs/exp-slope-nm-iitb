importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"0fa44fd43fc85bfb0c384df0e4b4eb61","url":"contributors.html"},{"revision":"13b1d1175df16b683581c5ecc290b013","url":"feedback.html"},{"revision":"5cbbb7835ac267010f614e04d657cf4e","url":"images/1.jpg"},{"revision":"dc3b6233e671ab93688bb64f16c872e9","url":"images/2.jpg"},{"revision":"c7bcbfda1ee915bf4658d7657cfa0267","url":"images/e1.pdf1.jpg"},{"revision":"5d0ee93f13b75d06d8673fe959f5b4d5","url":"index.html"},{"revision":"0b2e732c87669b2a71cc7fdedbbdd215","url":"p1.png"},{"revision":"f0f48a82b430b56e951393f2f0f0993b","url":"p2.png"},{"revision":"b0338dbe0ac8189da92438eeecbccfdc","url":"p3.png"},{"revision":"db898b6a5b47268421affc042aa10495","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"5c8fbdaf59cf23de88070269c2541305","url":"posttest.html"},{"revision":"4368ca5a77a7a56fc0cb90a0b23622d8","url":"posttest.json"},{"revision":"a58d8de823e6fc32fd114f5f13057cb0","url":"pretest.html"},{"revision":"bc0bb11e85ae9305fbb32cfa8285c465","url":"pretest.json"},{"revision":"afeccff996c85f0794542c2b3499dd70","url":"procedure.html"},{"revision":"0443a572ba581f5656c226855a49bf87","url":"references.html"},{"revision":"aa57ab563fd5a5612c25224ce154bec0","url":"simulation.html"},{"revision":"199bda46ae46ec95f5ab4391e7ec3a64","url":"simulation/common_libraries/css/style.css"},{"revision":"39445a9b72b8cd276fcd7a0e85f14b05","url":"simulation/common_libraries/js/ts_components/collapse_step.js"},{"revision":"f14f7f2e8038186a9bcd65961f911b29","url":"simulation/common_libraries/js/ts_components/geometry.js"},{"revision":"78930881cdb527fa7e809f14d6ae2ede","url":"simulation/common_libraries/js/ts_components/matrix.js"},{"revision":"4535ea022f115cef58492aa71ab62cc1","url":"simulation/common_libraries/js/ts_components/pannel.js"},{"revision":"9230278de718c3e2a5d9f2f87390de5c","url":"simulation/common_libraries/js/ts_components/questions.js"},{"revision":"1e29160b9e25358aa129e2ba76c57f3f","url":"simulation/common_libraries/js/ts_components/scene.js"},{"revision":"20967a9be8a62c5c9d1c3e8d7e330f8d","url":"simulation/common_libraries/js/ts_components/tables.js"},{"revision":"e3aee782fc14a2310cdffd083fdfce8f","url":"simulation/common_libraries/js/ts_math_library/general_math_functions.js"},{"revision":"75c1b6ecc7b07770bdc2e4692bb4d941","url":"simulation/common_libraries/js/ts_math_library/regression.js"},{"revision":"7e49bc276244b7d39353a6a67114b541","url":"simulation/common_libraries/math.ob.js"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"e12970a3d15c6a4edd0f716ad31a0247","url":"simulation/edit.html"},{"revision":"3d939e2ce8ee90f7afbc5d15bfa3c22f","url":"simulation/images/distribution.png"},{"revision":"ea3ca3f37d8041780db5618a53f6b1b3","url":"simulation/index.html"},{"revision":"3e10a07278b406541ba732feea766bcd","url":"simulation/js/activity_4_old.js"},{"revision":"248398bbb4c71b4e921a2410a543e0ba","url":"simulation/js/activity1_p1.js"},{"revision":"40c5f3380d3a18e912dee40c2b321f59","url":"simulation/js/activity1_p2.js"},{"revision":"62b6e58b6f6e249d681204784adcb9e2","url":"simulation/js/activity1_p3.js"},{"revision":"b01ab412d903035a0f1a89c3092f2a68","url":"simulation/js/activity1_p4.js"},{"revision":"bc90ecaaffe8443d6c78ec034ac47dd2","url":"simulation/js/activity1_p5.js"},{"revision":"317831d544baf4907422c7c02a07d892","url":"simulation/js/activity1_p6_5.js"},{"revision":"9c333a5530b766d8d7aa127be9e00b8f","url":"simulation/js/activity1_p6.js"},{"revision":"3c3950fdfa63551e8ddb5f4174c267da","url":"simulation/js/activity1_p7.js"},{"revision":"f1f4b1e079f51d4d91909bcb10464c4e","url":"simulation/js/activity1.js"},{"revision":"11e67b550369d982e8c8a8fe07088d21","url":"simulation/js/activity2_p1.js"},{"revision":"d74c1db871a6546989569b7a8665787e","url":"simulation/js/activity2_p2.js"},{"revision":"ad0b9dda6fa77137abb64b6d6932d5ec","url":"simulation/js/activity2_p3.js"},{"revision":"7fed736802b81a3cbab333a6df98f666","url":"simulation/js/activity2_p4.js"},{"revision":"d4e6e6446c9ca14cbe29ff1a8c7ec196","url":"simulation/js/activity2_p5.js"},{"revision":"6db4a035fe339591037311311cc71501","url":"simulation/js/activity2_p6.js"},{"revision":"0767d1b79d1aeac4c8342f43f089195f","url":"simulation/js/activity2_p7.js"},{"revision":"e8c55edc174d03625f63b1a69ee6bc44","url":"simulation/js/activity2.js"},{"revision":"cd8e35b1e61f08d882aee3d37b868059","url":"simulation/js/activity3_p1.js"},{"revision":"f155e8858916efbb00ebd8dcb8ef4dd8","url":"simulation/js/activity3_p2.js"},{"revision":"a7adbfbb89987a1f1c4166123777847b","url":"simulation/js/activity3_p3.js"},{"revision":"d15bb6e8efef0abcccb5ff77e1ecaf9e","url":"simulation/js/activity3_p4.js"},{"revision":"d12bb9363fac3fc669ad26fb2d41bb60","url":"simulation/js/activity3_p5.js"},{"revision":"08c7036112dfa7213758f523a21a136c","url":"simulation/js/activity3_p6.js"},{"revision":"dc35c7389554643a1847eed152fb82eb","url":"simulation/js/activity3_p7.js"},{"revision":"a63f735673b98b6e44d71a9112a3879b","url":"simulation/js/activity3.js"},{"revision":"322f349cfaaf76e08cdaf07032062e9f","url":"simulation/js/activity4.js"},{"revision":"39bf954378c9b30c86884411269bc63d","url":"simulation/js/data.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"2949a0a675e0e2a3c0623669d658936e","url":"simulation/js/screen_size.js"},{"revision":"1342e4f625011678bd5dfdaeff19b5a4","url":"theory.html"},{"revision":"5d47b96cdb09a9fc3228e6f87d153744","url":"theory1.png"},{"revision":"948a8c600a62a0d247c5126b8becf8cb","url":"theory2.png"},{"revision":"c0878ae9b23eff9373f9b39f760af6b0","url":"theory3.png"},{"revision":"06e20d5e4cb971de5a768a67ba34ece7","url":"theory4.png"},{"revision":"53b3813c4922d355cf6ad33e3ee313a9","url":"theory5.png"},{"revision":"91d12af5f9d0afce5ecf155c643b274f","url":"theory6.png"},{"revision":"32b8310461a3475d908e56b8139373b0","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );