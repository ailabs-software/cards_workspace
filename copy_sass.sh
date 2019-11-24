#!/bin/sh

mkdir sass/
cp -r /opt/deployment/applications/shopwindow/shopwindow_dg5/www/cms-themeable-sass/* sass/

mkdir -p sass_deps/shopwindow/jclosure

mkdir -p sass_deps/shopwindow/assets

cp -r /opt/deployment/dartpackages/jclosure/assets sass_deps/jclosure/assets

cp -r /opt/deployment/applications/shopwindow/shopwindow_dg5/assets sass_deps/shopwindow/

