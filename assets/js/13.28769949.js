(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{418:function(s,t,a){"use strict";a.r(t);var e=a(56),o=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{attrs:{align:"center"}},[a("span",{staticClass:"iconify",attrs:{"data-icon":"cib:composer","data-inline":"false",width:"100"}})]),s._v(" "),a("h3",[s._v("table of content")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#downgrade-or-upgrade-composer"}},[s._v("downgrade or upgrade composer")])]),a("li",[a("a",{attrs:{href:"#understand-versions"}},[s._v("Understand versions")])]),a("li",[a("a",{attrs:{href:"#composer-commands"}},[s._v("Composer Commands")])]),a("li",[a("a",{attrs:{href:"#composer-json-composer-lock"}},[s._v("Composer.json & composer.lock")])]),a("li",[a("a",{attrs:{href:"#favorite-global-packages"}},[s._v("Favorite global packages")])]),a("li",[a("a",{attrs:{href:"#how-to-upgrade"}},[s._v("How to upgrade")])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"downgrade-or-upgrade-composer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#downgrade-or-upgrade-composer"}},[s._v("#")]),s._v(" downgrade or upgrade composer")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" self-update --1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# downgrade to version 1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" self-update --rollback  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rollback to version 2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" self-update "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.10")]),s._v(".12 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# downgrade to specific version")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" self-update "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),s._v(".7 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# upgrade to specific version")]),s._v("\n")])])]),a("h2",{attrs:{id:"understand-versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understand-versions"}},[s._v("#")]),s._v(" Understand versions")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Name")]),s._v(" "),a("th",[s._v("Exampe")]),s._v(" "),a("th",[s._v("Description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("specific")]),s._v(" "),a("td",[s._v("1.0.2")]),s._v(" "),a("td",[s._v("specify the exact version")])]),s._v(" "),a("tr",[a("td",[s._v("range")]),s._v(" "),a("td",[s._v(">=1.0; >1.0, <2.0")]),s._v(" "),a("td",[s._v("specify the range of versions")])]),s._v(" "),a("tr",[a("td",[s._v("widlcard")]),s._v(" "),a("td",[s._v("3.4.*")]),s._v(" "),a("td",[s._v("specify a pattern with a "),a("code",[s._v("*")]),s._v(" wildcard")])]),s._v(" "),a("tr",[a("td",[s._v("tilde")]),s._v(" "),a("td",[s._v("~1.2")]),s._v(" "),a("td",[s._v("specify semantic version, is equivalent to "),a("code",[s._v(">=1.2, <2.0")])])])])]),s._v(" "),a("h2",{attrs:{id:"composer-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composer-commands"}},[s._v("#")]),s._v(" Composer Commands")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# reuqire: the most used command")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" require zebra/zebra\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# require global")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" require global zebra/zebra\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" require global zebra/zebra:2.1.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# show all packages name from your project")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" show\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# remove package")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" remove phpoffice/phpspreadsheet\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install packages from lock file")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# update packages for the lastest version")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" update -vvv\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" update zebra/zebra -vvv\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" global update zebra/zebra -vvv\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# install packages for the stable versions")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" update --prefer-stable -vvv\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# validate the composer.json with composer.lock")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" validate\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# do partial updates work")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" update --dry-run zebar/zebra --with-dependencies\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Autoloader optimization")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --optimize-autoloader\n")])])]),a("h2",{attrs:{id:"composer-json-composer-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composer-json-composer-lock"}},[s._v("#")]),s._v(" Composer.json & composer.lock")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("composer.lock")]),s._v(" "),a("p",[s._v("add always composer.lock to "),a("code",[s._v("git")]),s._v(" in a application. Without committing the "),a("code",[s._v("composer.lock")]),s._v(", you won't get the exact the same set of dependencies.")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("sort packages")]),s._v(" "),a("p",[s._v("It is best to configure the "),a("code",[s._v("sorting")]),s._v(" in "),a("code",[s._v("composer.json")]),s._v(", to keep the packages in "),a("code",[s._v("require")]),s._v(" and "),a("code",[s._v("require-dev")]),s._v(" sorted by name.")])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sort-packages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("validate the `composer.json`")]),s._v(" "),a("p",[s._v("composer.json and composer.lock should be always kept in sync.")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" validate --no-check-all --strict\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("specify the production PHP version")]),s._v(" "),a("p",[s._v("Just specify the production PHP version in config section of "),a("code",[s._v("composer.json")])])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"platform"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"php"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7.1"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("speed up the package installation")]),s._v(" "),a("p",[s._v("Install composer plugin "),a("code",[s._v("hirak/prestissimo")]),s._v(" which speeds up by downloading them in parallel.")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" global require hirak/prestissimo\n")])])]),a("h2",{attrs:{id:"favorite-global-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#favorite-global-packages"}},[s._v("#")]),s._v(" Favorite global packages")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" global require friendsofphp/php-cs-fixer\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" global require squizlabs/php_codesniffer\n")])])]),a("h2",{attrs:{id:"how-to-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-upgrade"}},[s._v("#")]),s._v(" How to upgrade")]),s._v(" "),a("p",[s._v("upgrade or reinstall composer CLI")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" php -r "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"copy('https://getcomposer.org/installer', 'composer-setup.php');\"")]),s._v(" \n php composer-setup.php\n php -r "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"unlink('composer-setup.php');\"")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" composer.phar "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /usr/local/bin/composer\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" /usr/local/bin\n\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# update via symfony")]),s._v("\n symfony "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" self-update \n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);