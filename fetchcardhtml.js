const fs = require("fs");
const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const pretty = require("pretty");

var cards = 
  ["default_card",
   "gallery_card",
   "profile_card",
   "alternate_card",
   "video_card",
   "testimonial_card",
   "offer_card",
   "coupon_card",
   "ellas_unicorn_card",
   "slider_card"];


function fetchCards()
{
  for (var i=0; i < cards.length; i++)
  {
    fetchCard(cards[i]);
  }
}

async function fetchCard(cardName)
{
  console.log("Fetching card: " + cardName);

  var url = "https://yourcompany.shopwindow.io/pipeline/serve_pipeline_card_preview?card=04ca7b5d-75c1-4867-b1bb-904719908488&presentation=web&container=none&template=" + cardName;

  var html = await ( await fetch(url) ).text();

  // Parse to DOM.
  var dom = new JSDOM(html);

  // Strip out style tag for global style so reads from here.
  var styleElement = dom.window.document.querySelector("head > style");
  styleElement.parentElement.removeChild(styleElement);

  // Add style tag.
  dom.window.document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="../global_theme_stylesheet_output.css"/>';

  html = "<!DOCTYPE html>\n" + dom.window.document.documentElement.outerHTML;

  // Format
  html = pretty(html);

  // Fix link to themeable sass
  html = html.replace(/https\:\/\/[a-zA-Z]*.shopwindow.io\/cms_dg5\/themeable_sass/, "../sass_output.css");

  // Write to disc.

  var filePath = "cards_html/" + cardName + ".html";

  fs.writeFileSync(filePath, html);
}

fetchCards();