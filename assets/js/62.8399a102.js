(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{369:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"theme-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theme-setup"}},[s._v("#")]),s._v(" Theme setup")]),s._v(" "),a("p",[s._v("Once the plugin is "),a("RouterLink",{attrs:{to:"/getting-started/installation.html"}},[s._v("installed and configured")]),s._v(", follow the steps below to set up your theme.")],1),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("You can take a look at the "),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-theme",target:"_blank",rel:"noopener noreferrer"}},[s._v("official demo theme"),a("OutboundLink")],1),s._v(" on how to set\nup a theme. You can even use it as a base for your own custom theme.")])]),s._v(" "),a("h2",{attrs:{id:"layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#layout"}},[s._v("#")]),s._v(" Layout")]),s._v(" "),a("h3",{attrs:{id:"malldependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#malldependencies"}},[s._v("#")]),s._v(" "),a("code",[s._v("mallDependencies")])]),s._v(" "),a("p",[s._v("The "),a("RouterLink",{attrs:{to:"/components/mall-dependencies.html"}},[a("code",[s._v("mallDependencies")]),s._v(" component")]),s._v(" includes all required frontend assets.")],1),s._v(" "),a("p",[s._v("The component should be placed on each layout that provides shop functionality.")]),s._v(" "),a("p",[s._v("Make sure to include it inside the "),a("code",[s._v("<head>")]),s._v(" tag.")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("description")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(' "Default Layout"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[mallDependencies]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")])]),s._v("\n<!DOCTYPE html>\n<html>\n<head>    \n    {% component 'mallDependencies' %}\n</head>\n...\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[s._v("#")]),s._v(" "),a("code",[s._v("session")])]),s._v(" "),a("p",[s._v("RainLab.Users's "),a("code",[s._v("session")]),s._v(" component should be placed on every layout that\nprovides shop functionality. This makes sure the user remains logged in while browsing your store.")]),s._v(" "),a("div",{staticClass:"language-ini line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("description")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(' "Default Layout"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[mallDependencies]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("[session]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")])]),s._v("\n<!DOCTYPE html>\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[s._v("#")]),s._v(" Scripts")]),s._v(" "),a("p",[s._v("Make sure to include the "),a("code",[s._v("scripts")]),s._v(" tag in your layout. All JavaScript\ncode will be injected where the placeholder is.")]),s._v(" "),a("div",{staticClass:"language-twig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("scripts")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"framework-extras"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#framework-extras"}},[s._v("#")]),s._v(" Framework extras")]),s._v(" "),a("p",[a("code",[s._v("oc-mall")]),s._v("'s components require October's "),a("a",{attrs:{href:"https://octobercms.com/docs/ajax/introduction",target:"_blank",rel:"noopener noreferrer"}},[s._v("AJAX framework"),a("OutboundLink")],1),s._v("\nto work. Make sure to include the framework either by using one of the\n"),a("a",{attrs:{href:"./https://octobercms.com/docs/markup/filter-theme#combiner-aliases"}},[s._v("Combiner aliases")]),s._v(" or\nthe "),a("code",[s._v("{% framework extras %}")]),s._v(" tag.")]),s._v(" "),a("div",{staticClass:"language-twig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("framework")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("extras")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"static-pages-menu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-pages-menu"}},[s._v("#")]),s._v(" Static pages menu")]),s._v(" "),a("p",[s._v("If you are using the "),a("code",[s._v("RainLab.Pages")]),s._v(" plugin, you can add the "),a("code",[s._v("All mall shop categories")]),s._v(" entry to your navigation.")]),s._v(" "),a("p",[s._v("This will render a tree of all available categories in your theme.")]),s._v(" "),a("h2",{attrs:{id:"pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pages"}},[s._v("#")]),s._v(" Pages")]),s._v(" "),a("p",[s._v("In this section you can find a minimal demo implementation of each CMS page "),a("code",[s._v("oc-mall")]),s._v(" needs.")]),s._v(" "),a("p",[s._v("You are free to change them as you wish. Just make sure to keep the required "),a("code",[s._v("url")]),s._v(" parameters.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("To get started quickly simply copy and paste the markup to the respective cms page file.")])]),s._v(" "),a("h3",{attrs:{id:"product-htm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product-htm"}},[s._v("#")]),s._v(" product.htm")]),s._v(" "),a("p",[s._v("The product page displays a single product using the "),a("RouterLink",{attrs:{to:"/components/product.html"}},[s._v("Product component")]),s._v(".")],1),s._v(" "),a("div",{staticClass:"language-twig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[s._v('title = "Product"\nurl = "/product/:slug/:variant?"\nlayout = "default"\n\n[product]\nproduct = ":slug"\nvariant = ":slug"\n==')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("component")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"category-htm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#category-htm"}},[s._v("#")]),s._v(" category.htm")]),s._v(" "),a("p",[s._v("The category page displays all products in a category using the "),a("RouterLink",{attrs:{to:"/components/products.html"}},[s._v("Products component")]),s._v(". The\nproducts can be filtered using the "),a("RouterLink",{attrs:{to:"/components/products-filter.html"}},[s._v("ProductsFilter component")]),s._v(".")],1),s._v(" "),a("div",{staticClass:"language-twig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[s._v('title = "Category"\nurl = "/category/:slug*"\nlayout = "default"\nis_hidden = 0\n\n[products]\ncategory = ":slug"\nsetPageTitle = 1\nincludeVariants = 1\nincludeChildren = 1\nperPage = 9\n\n[productsFilter]\ncategory = ":slug"\nshowPriceFilter = 1\n==\n'),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("col-12 col-md-4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("component")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("productsFilter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("col-12 col-md-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{{")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("products")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("category")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("component")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("products"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token other"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"cart-htm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cart-htm"}},[s._v("#")]),s._v(" cart.htm")]),s._v(" "),a("p",[s._v("The cart displays the cart to the user using the "),a("RouterLink",{attrs:{to:"/components/cart.html"}},[s._v("Cart component")]),s._v(".")],1),s._v(" "),a("div",{staticClass:"language-twig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[s._v('title = "Cart"\nurl = "/cart"\nlayout = "default"\nis_hidden = 0\n\n[cart]\nshowTaxes = 0\n==')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("component")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("cart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("cart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("products")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("count")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token other"}},[s._v('<a href="')]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{{")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("checkout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("page")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[s._v('" class="btn">\n        Begin checkout\n    '),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("endif")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"checkout-htm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkout-htm"}},[s._v("#")]),s._v(" checkout.htm")]),s._v(" "),a("p",[s._v("The checkout page hosts the complete checkout process.")]),s._v(" "),a("div",{staticClass:"language-twig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[s._v('title = "Checkout"\nurl = "/checkout/:step?"\nlayout = "default"\nis_hidden = 0\n\n[signUp]\n[checkout]\nstep = "')]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{{")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("step")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[s._v('"\n==')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("component")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("signUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("component")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("checkout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("endif")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"myaccount-htm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myaccount-htm"}},[s._v("#")]),s._v(" myaccount.htm")]),s._v(" "),a("p",[s._v("The my account page displays an account overview to the user using the\n"),a("RouterLink",{attrs:{to:"/components/my-account.html"}},[s._v("myAccount component")]),s._v(".")],1),s._v(" "),a("div",{staticClass:"language-twig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[s._v('title = "Account"\nurl = "/account/:page?"\nlayout = "default"\nis_hidden = 0\n\n[session]\nsecurity = "user"\nredirect = "login"\n\n[myAccount]\npage = "')]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{{")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("page")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[s._v('"\n==')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("component")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("myAccount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"address-htm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#address-htm"}},[s._v("#")]),s._v(" address.htm")]),s._v(" "),a("p",[s._v("The address page displays an edit form for a user's address using the\n"),a("RouterLink",{attrs:{to:"/components/address-form.html"}},[s._v("AddressForm component")]),s._v(".")],1),s._v(" "),a("div",{staticClass:"language-twig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[s._v('title = "Address"\nurl = "/address/:address?/:redirect?/:set?"\nlayout = "default"\nis_hidden = 0\n\n[session]\nsecurity = "user"\nredirect = "home"\n\n[addressForm]\naddress = "')]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{{")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("address")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[s._v('"\nredirect = "')]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{{")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("redirect")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[s._v('"\nset = "')]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{{")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}}")])])]),a("span",{pre:!0,attrs:{class:"token other"}},[s._v('"\n==')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("component")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("addressForm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"login-htm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#login-htm"}},[s._v("#")]),s._v(" login.htm")]),s._v(" "),a("p",[s._v("The login form displays a signup form for unregistered users using the\n"),a("RouterLink",{attrs:{to:"/components/sign-up.html"}},[s._v("signUp component")]),s._v(".")],1),s._v(" "),a("div",{staticClass:"language-twig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token other"}},[s._v('title = "Login"\nurl = "/login"\nlayout = "default"\nis_hidden = 0\n\n[signUp]\nredirect = "/account"\n==')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{%")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("component")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")]),s._v("signUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("'")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("%}")])])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"take-a-look-around"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#take-a-look-around"}},[s._v("#")]),s._v(" Take a look around")]),s._v(" "),a("p",[s._v("At this point your shop is configured and set up correctly.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Run "),a("code",[s._v("php artisan mall:check")]),s._v(" again to make sure there are no problems left.")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("In case you missed it: You can seed the shop with demo data.\nVisit the "),a("RouterLink",{attrs:{to:"/getting-started/installation.html"}},[s._v("Installation Page")]),s._v(" to find out more.")],1)]),s._v(" "),a("p",[s._v("If you don't have a navigation in your theme yet, simply visit some of\nthese URLs to get a first impression of your new online store.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("INFO")]),s._v(" "),a("p",[s._v("The following URLs only work if you copied the default URL structure.\nAdapt the links to your custom URLs if you made any changes.")])]),s._v(" "),a("ul",[a("li",[s._v("http://example.test/category/bikes")]),s._v(" "),a("li",[s._v("http://example.test/product/cruiser-1500")]),s._v(" "),a("li",[s._v("http://example.test/login")]),s._v(" "),a("li",[s._v("http://example.test/cart")])])])}),[],!1,null,null,null);t.default=e.exports}}]);