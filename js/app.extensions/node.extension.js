Netmap.initializers.impactExtension('Node', function(Netmap) {
    
    //create short link to some extensions
    var ui = Netmap.utilities.ui,
        toolsController = Netmap.utilities.ToolController;

    //start adding custom functionality
    var tools = {
        addNode: new toolsController.Tool('AddNodeTool', new ui.createButton(), function(event) {
            Netmap.cyto.add({
                group: "nodes",
                data: { weight: 75 },
                position: event.cyPosition,
            });
            event.cy.layout({
                name: 'preset',

                  positions: undefined, // map of (node id) => (position obj); or function(node){ return somPos; }
                  zoom: undefined, // the zoom level to set (prob want fit = false if set)
                  pan: undefined, // the pan level to set (prob want fit = false if set)
                  fit: false, // whether to fit to viewport
                  padding: 30, // padding on fit
                  animate: false, // whether to transition the node positions
                  animationDuration: 500, // duration of animation in ms if enabled
                  animationEasing: undefined, // easing of animation if enabled
                  ready: undefined, // callback on layoutready
                  stop: undefined // callback on layoutstop
            });
        }),
        getNodeInfo: new toolsController.Tool('GetNodeInfo', new ui.createButton(),function(event) {
            alert('GetNodeInfo tool');
        }),
    };

    return {
        tools: tools,
        extensionName: 'Узел',
    };
});