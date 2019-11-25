#!/bin/sh

scss -I sass/ -I sass_deps/jclosure/ -I sass_deps/shopwindow/ sass/application.scss > sass_output.css

scss -I sass/ sass/global_theme_stylesheet.scss > global_theme_stylesheet_output.css


