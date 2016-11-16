Netmap.initializers.impactExtension('Edge', function(Netmap) {
    
    //create short link to some extensions
    var ui = Netmap.utilities.ui,
        toolsController = Netmap.utilities.ToolController;

    //start adding custom functionality
    var tools = {
        //addEdge: new toolsController.Tool('AddEdgeTool', new ui.createButton()),
    };
    
    return {
        tools: tools,
        extensionName: 'Линк',
    };
});