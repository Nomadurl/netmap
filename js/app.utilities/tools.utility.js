Netmap.initializers.impactUtility('ToolController', function() {
    
    var ToolMediator = function() {
        this.tools = {};
    };
    ToolMediator.prototype.addTool = function() {},
    ToolMediator.prototype.removeTool = function() {},
    ToolMediator.prototype.toolActivated = function() {},
    ToolMediator.prototype.toolDeactivated = function() {};
    
    /*var tools = {},
        addTool = function(tool) {
            tools[tool.toolName] = tool;
        },
        removeTool = function(toolName) {
            delete tools.toolName;
        },
        toolActivated = function(activatedTool) {
            for (var tool in tools) {
                if (tools[tool].toolName !== activatedTool.toolName) {
                    tools[tool].deactivateTool();
                }
            }
        },
        toolDeactivated = function(deactivatedTool) {
            console.log('Tool ' + deactivatedTool.toolName + ' deactivated!');
        },
        Tool = function(toolName, toolControl) {
            this.toolName = toolName;
            this.control = toolControl;
            this.toolStatus = false;
            this.control.addEventListener('click', this.changeToolStatus, false);
        };*/
    
    
    return {
        toolMediator: new ToolMediator(),
    };
});