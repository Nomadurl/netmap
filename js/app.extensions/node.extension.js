Netmap.initializers.impactExtension('Node', function(Netmap) {
    
    //create short link to some extensions
    var ui = Netmap.utilities.ui,
        toolsController = Netmap.utilities.ToolController;

    //start adding custom functionality
    var tools = {
        simpleAction: new toolsController.SimpleTool('SimpleAction', new ui.createButton(), function(){
          alert('Простое действие!');
        }),
        addNode: new toolsController.CanvasTool('AddNodeTool', new ui.createButton(), function(event){
            event.cy.add({
                group: "nodes",
                data: { weight: 75 },
                position: event.cyPosition,
            });
            event.cy.layout({
                name: 'preset',
                positions: undefined,
                zoom: undefined,
                pan: undefined,
                fit: false,
                padding: 30,
                animate: false,
                animationDuration: 500,
                animationEasing: undefined,
                ready: undefined,
                stop: undefined
            });
        }),
        /*addNode: new toolsController.Tool('AddNodeTool', new ui.createButton(), function(event) {
            Netmap.cyto.add({
                group: "nodes",
                data: { weight: 75 },
                position: event.cyPosition,
            });
            event.cy.layout({
                name: 'preset',
                positions: undefined,
                zoom: undefined,
                pan: undefined,
                fit: false,
                padding: 30,
                animate: false,
                animationDuration: 500,
                animationEasing: undefined,
                ready: undefined,
                stop: undefined
            });
        }),
        getNodeInfo: new toolsController.Tool('GetNodeInfo', new ui.createButton(),function(event) {
            alert('GetNodeInfo tool');
        }),*/
    };

    return {
        tools: tools,
        extensionName: 'Узел',
    };
});