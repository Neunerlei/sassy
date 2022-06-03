(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{364:function(s,e,t){"use strict";t.r(e);var a=t(44),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sassy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sassy"}},[s._v("#")]),s._v(" Sassy")]),s._v(" "),t("p",[s._v("Sassy is a lightweight package to create responsive websites with ease. I personally worked with bootstrap for a couple of years but it was always somewhat cumbersome as it did not match the BEM doctrine I use for my projects, it was too static for my liking when you have edge cases and brings a lot of stuff I never used.")]),s._v(" "),t("p",[s._v("This package is the distilled down sum of features I wanted from bootstrap and it's competitors but without adding a single css class on its own.\nIt just brings you a bundle of mixins you can use in your SASS or SCSS code to create grids, handle breakpoints and create consistent margins / paddings over your page.")]),s._v(" "),t("p",[s._v("The bundle is written completely in SASS (not SCSS) and is designed to work in a SASS/SCSS project. If you are looking for a drop in solution for your (existing) CSS this is probably not the package for you.")]),s._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),t("p",[s._v("The installation of sassy is quite simple, just pull it strait from npm:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install --save @neunerlei/sassy\n")])])]),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),t("p",[s._v("After you installed sassy in your dependencies you can add it in your sass file like:")]),s._v(" "),t("div",{staticClass:"language-sass extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [optional] Sassy comes with it's own css reset which is based ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// on necolas/normalize.css with some adjustments")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// and additional rules. Use it like")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-line"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@import")]),s._v(' "~'),t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@neunerlei")]),s._v('/sassy/Components/CssReset"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Load the sassy mixins and the default configuration")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-line"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@import")]),s._v(' "~'),t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@neunerlei")]),s._v('/sassy/Resources"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-line"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@import")]),s._v(' "~'),t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@neunerlei")]),s._v('/sassy/Config"')]),s._v("\n")])])]),t("h2",{attrs:{id:"usage-with-labor-asset-building"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-with-labor-asset-building"}},[s._v("#")]),s._v(" Usage with LABOR Asset-Building")]),s._v(" "),t("p",[s._v("If you are using the LABOR asset-building package you have the option to use the "),t("a",{attrs:{href:"https://github.com/labor-digital/asset-building#css-superscript-resources",target:"_blank",rel:"noopener noreferrer"}},[s._v("superscript resource loader"),t("OutboundLink")],1),s._v('.\nIt provides all your sass files with a common "Resources.sass" you have in your project root. Sassy is designed with that resource loader in mind.')]),s._v(" "),t("p",[s._v('In your "Resources.sass" file add just the resources definition:')]),s._v(" "),t("div",{staticClass:"language-sass extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [optional] Add your custom config to the Resources.sass as well!")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-line"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@import")]),s._v(' "./path/to/config"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Import the resources and the configuration like normal.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-line"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@import")]),s._v(' "~'),t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@neunerlei")]),s._v('/sassy/Resources"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-line"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@import")]),s._v(' "~'),t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@neunerlei")]),s._v('/sassy/Config"')]),s._v("\n")])])]),t("p",[s._v("After that you can use sassy in your project file. If you want to use the breakpoint service or the css reset simply add them to your style root file.")]),s._v(" "),t("div",{staticClass:"language-sass extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sass"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [optional] Add Sassy css reset")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-line"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@import")]),s._v(' "~'),t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@neunerlei")]),s._v('/sassy/Components/CssReset"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [optional] Add Sassy breakpoint service")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token atrule-line"}},[t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@import")]),s._v(' "~'),t("span",{pre:!0,attrs:{class:"token atrule"}},[s._v("@neunerlei")]),s._v('/sassy/Components/BreakpointService"')]),s._v("\n")])])]),t("h2",{attrs:{id:"source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-code"}},[s._v("#")]),s._v(" Source Code")]),s._v(" "),t("p",[s._v("The source code can be found on "),t("a",{attrs:{href:"https://github.com/Neunerlei/sassy",target:"_blank",rel:"noopener noreferrer"}},[s._v("github"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"building-the-documentation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-the-documentation"}},[s._v("#")]),s._v(" Building the documentation")]),s._v(" "),t("p",[s._v("The documentation is powered by "),t("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress"),t("OutboundLink")],1),s._v(", you can quite simply spin up a dev server like so:")]),s._v(" "),t("ul",[t("li",[s._v("Clone the repository")]),s._v(" "),t("li",[s._v("Navigate to "),t("code",[s._v("docs")])]),s._v(" "),t("li",[s._v("Install the dependencies with "),t("code",[s._v("npm install")])]),s._v(" "),t("li",[s._v("Run the watcher for the examples with "),t("code",[s._v("npm run devDemos")])]),s._v(" "),t("li",[s._v("In another console window, run the dev server with "),t("code",[s._v("npm run dev")])])]),s._v(" "),t("h2",{attrs:{id:"special-thanks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#special-thanks"}},[s._v("#")]),s._v(" Special Thanks")]),s._v(" "),t("p",[s._v("Special thanks goes to the folks at "),t("a",{attrs:{href:"https://labor.digital/",target:"_blank",rel:"noopener noreferrer"}},[s._v("LABOR.digital"),t("OutboundLink")],1),s._v(' (which is the german word for laboratory and not the english "work" 😄) for making it possible to publish my code online.')]),s._v(" "),t("h2",{attrs:{id:"postcardware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#postcardware"}},[s._v("#")]),s._v(" Postcardware")]),s._v(" "),t("p",[s._v("You're free to use this package, but if it makes it to your production environment I highly appreciate you sending me a postcard from your hometown, mentioning which of our package(s) you are using.")]),s._v(" "),t("p",[s._v("You can find my address "),t("a",{attrs:{href:"https://www.neunerlei.eu/",target:"_blank",rel:"noopener noreferrer"}},[s._v("here"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v("Thank you 😄")])])}),[],!1,null,null,null);e.default=r.exports}}]);