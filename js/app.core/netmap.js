var Netmap = (function (cytoscape) {
    
    var extensions = {},
        utilities = {},
        canvas = $('#canvas');
    
    /*-------------cytoscape sample-----------------*/
    var elesJson = {
          nodes: [
            { data: { id: 'a', foo: 1, bar: 1, baz: 1} },
            { data: { id: 'b', foo: 1, bar: 1, baz: 1 } },
            /*{ data: { id: 'c', foo: 2, bar: 7, baz: 6 } },
            { data: { id: 'd', foo: 9, bar: 5, baz: 2 } },*/
            { data: { id: 'e', foo: 1, bar: 1, baz: 1 } }
          ], 

          edges: [
            { data: { id: 'ae', weight: 1, source: 'a', target: 'e' } },
            { data: { id: 'ab', weight: 3, source: 'a', target: 'b' } },
            /*{ data: { id: 'be', weight: 4, source: 'b', target: 'e' } },
            { data: { id: 'bc', weight: 5, source: 'b', target: 'c' } },
            { data: { id: 'ce', weight: 6, source: 'c', target: 'e' } },
            { data: { id: 'cd', weight: 2, source: 'c', target: 'd' } },
            { data: { id: 'de', weight: 7, source: 'd', target: 'e' } }*/
          ]
        };
    $('#canvas').cytoscape({
          style: cytoscape.stylesheet()
            .selector('node')
              .css({
                'background-color': '#B3767E',
                'width': 'mapData(baz, 0, 10, 10, 40)',
                'height': 'mapData(baz, 0, 10, 10, 40)',
                'content': 'data(id)'
              })
            .selector('edge')
              .css({
                'line-color': '#F2B1BA',
                'target-arrow-color': '#F2B1BA',
                'width': 2,
                'target-arrow-shape': 'circle',
                'opacity': 0.8
              })
            .selector(':selected')
              .css({
                'background-color': 'black',
                'line-color': 'black',
                'target-arrow-color': 'black',
                'source-arrow-color': 'black',
                'opacity': 1
              })
            .selector('.faded')
              .css({
                'opacity': 0.25,
                'text-opacity': 0
              }),

          elements: elesJson,

         /* layout: {
            name: 'circle',
            padding: 10
          },*/

          ready: function(){
            // ready 1
          }
        });
    /*----------------------------------------------*/
    
     return {
         extensions: extensions,
         utilities: utilities,
         initializers: {
             impactExtension: function(extensionName, module) {
                extensions[extensionName] = module(Netmap);         
             },
             impactUtility: function(utilityName, module) {
                 utilities[utilityName] = module();
             },
         },
     };
})(cytoscape);