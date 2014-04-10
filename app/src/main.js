/*globals define*/
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Matrix = require('famous/math/Matrix');
    var View = require('famous/core/View');


    // var HeaderFooterLayout = require('famous-views/HeaderFooterLayout');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    var outline = new Surface({
        size: [200, 200],
        content: '<img width="200" src="' + 'content/images/famous_symbol_transparent.png' + '"/>',
        properties: {
            lineHeight: '200px',
            textAlign: 'center'
        }
    });

    var mat = new Transform();
    mat.transform(10,1);

    var outlineModifier = new Modifier({
        origin: [0.5, 0.5],
        size: [0.5, 0.5],
        opacity: 0.5,
        transform: mat
    });

    // create the layout
    // this.layout = new HeaderFooterLayout();

    mainContext.add(outlineModifier).add(outline);

});
