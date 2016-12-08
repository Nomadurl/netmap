Netmap.initializers.impactExtension('Edge', function(Netmap) {
    
    //create short link to some extensions
    var ui = Netmap.utilities.ui,
        toolsController = Netmap.utilities.ToolController;

    var nodesCounter = [];

    //start adding custom functionality
    var tools = {
        someAction: new toolsController.SimpleTool('SomeAction', ui.createButton(), function() {
            alert('Some action from Edge extension');
        }),
        addEdge: new toolsController.NodeTool('AddEdge', ui.createButton(), function(event) {
            nodesCounter.push(this);
            if (nodesCounter.length === 2) {
                console.log(nodesCounter);
                nodesCounter = [];
            }
        }),
    };
    
    return {
        tools: tools,
        extensionName: 'Линк',
    };
});