Netmap.initializers.impactExtension('Node', function(Netmap) {
    
    //create short link to some extensions
    var ui = Netmap.utilities.ui,
        toolsController = Netmap.utilities.ToolController;

    //start adding custom functionality
    var tools = {
        addNode: new toolsController.Tool('AddNodeTool', new ui.createButton()),
        getNodeInfo: new toolsController.Tool('GetNodeInfo', new ui.createButton()),
    };

    return {
        tools: tools,
        extensionName: 'Узел',
    };
});