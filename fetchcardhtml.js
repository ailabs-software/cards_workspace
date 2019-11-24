const fs = require("fs");
const fetch = require("node-fetch");
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

  var url = "https://george.shopwindow.io/pipeline/serve_pipeline_card_preview?card=62f1c625-5ea0-4cb0-8d07-0746d93a4c78&presentation=web&container=none&template=" + cardName;

  var html = await ( await fetch(url) ).text();

  // Format
  html = pretty(html);

  // Fix link to themeable sass
  html = html.replace(/https\:\/\/[a-zA-Z]*.shopwindow.io\/cms_dg5\/themeable_sass/, "../sass_output.css");

  // Write to disc.

  var filePath = "cards_html/" + cardName + ".html";

  fs.writeFileSync(filePath, html);
}

fetchCards();