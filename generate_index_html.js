const fs = require("fs");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var cardHtmlFiles = fs.readdirSync("cards_html/");

var out = "";

out += "<!DOCTYPE html>\n";
out += "<html>\n";
out += "<head>\n";
out += '<meta charset="utf-8"/>\n';
out += '<link class="dg5_stylesheet_link" rel="stylesheet" type="text/css" href="https://george.shopwindow.io/dg5_platform/static/dist/ShopwindowServer-server-ASSETSOUT/out.css?v=1574564583543" />\n';
out += '<link class="dg5_stylesheet_link" rel="stylesheet" type="text/css" href="https://george.shopwindow.io/dg5_platform/static/dist/PipelineEmbedClient-client-ASSETSOUT/out.css?v=1574564583543" />\n';
out += '<link class="dg5_stylesheet_link" rel="stylesheet" type="text/css" href="https://system-dev.shopwindow.io/dg5_platform/static/www/lordekit-static/lordekit-responsive-typography/out/web_stylesheet.css" />\n';
out += '<link class="dg5_stylesheet_link" rel="stylesheet" type="text/css" href="sass_output.css" />\n';
out += '<link class="dg5_stylesheet_link" rel="stylesheet" type="text/css" href="https://lordefoundry-dev.safetyhandler.com/fontfoundry2/css/Roboto" />\n';
out += "</head>\n";
out += "</body>\n";

out += "<div class=\"tiled-container tiled-container-q\">\n";
out += '<div decorate="L0" component="ailabs-tiled-container-decorator" class="decoration-ailabs-tiled-container-decorator web-grid-layout">\n';

for (var i=0; i < cardHtmlFiles.length; i++)
{
  var cardHtmlFile = cardHtmlFiles[i];
  var cardHtml = fs.readFileSync("cards_html/" + cardHtmlFile, "utf8");

  // Parse to DOM.
  var dom = new JSDOM(cardHtml);

  var cardElement = dom.window.document.querySelector(".web-grid-layout-cell");

  var cardHtml = cardElement.innerHTML;

  out += "<!-- card: " + cardHtmlFile + " -->\n";

  out += '<div class="web-grid-layout-cell">\n';

  out += cardHtml;
  out += "\n";

  out += "</div>\n";
}

out += "</div>\n";
out += "</div>\n";

out += '<script type="text/javascript" src="https://george.shopwindow.io/dg5_platform/static/build/mainEntryPoint_PipelineEmbedClient_client.dart.js?v=1574564583543"></script>\n';
out += '<script type="text/javascript">\n';
out += 'JSINTEROP_APPLY_DECORATORS(document.body);\n';
out += '</script>\n';

out += "</body>\n";
out += "</html>\n";

fs.writeFileSync("index.html", out);