// ==UserScript==
// @name         Disable OpenSearch
// @namespace    https://github.com/RyRose/userscripts
// @version      1.0.1
// @description  Remove the OpenSearch <link> tag to prevent Google Chrome from auto-adding custom search engines. Based on https://greasyfork.org/en/scripts/37186-disable-opensearch by Snie.
// @author       RyRose
// @match        http*://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  var elOpenSearch = document.querySelector('[type="application/opensearchdescription+xml"]');
  if (elOpenSearch) elOpenSearch.remove();
})();
