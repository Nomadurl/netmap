Netmap.initializers.impactExtension('Edge', function(Netmap) {
    
    //create short link to some extensions
    var ui = Netmap.utilities.ui,
        toolsController = Netmap.utilities.ToolController;

    //start adding custom functionality
    var tools = {
        someAction: new toolsController.SimpleTool('SomeAction', ui.createButton(), function() {
            alert('Some action from Edge extension');
        }),
    };
    
    return {
        tools: tools,
        extensionName: 'Линк',
    };
});