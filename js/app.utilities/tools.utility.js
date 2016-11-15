Netmap.initializers.impactUtility('ToolController', function() {
    
    // Tool mediator
    var ToolMediator = function() {
        this.tools = {};
    };
    ToolMediator.prototype.addTool = function(tool) {
        this.tools[tool.toolName] = tool;
    },
    ToolMediator.prototype.removeTool = function(toolName) {
        delete this.tools[toolName];
    },
    ToolMediator.prototype.toolActivated = function(activatedTool) {
        for (var tool in this.tools) {
            if (this.tools[tool].toolName !== activatedTool.toolName) {
                this.tools[tool].deactivateTool();
            }
        }
    },
    ToolMediator.prototype.toolDeactivated = function(deactivatedTool) {
        console.log('Tool ' + deactivatedTool.toolName + ' deactivated!');
    };

    var toolMediatorSingleton = new ToolMediator();

    //Tools
    var Tool = function(toolName, toolControl, toolMediator) {
        this.toolName = toolName;
        this.control = toolControl;
        this.toolStatus = false;
        this.toolMediator = toolMediator;

        this.control.tool = this;
        this.control.addEventListener('click', this.changeToolStatus, false);
    };
    Tool.prototype.deactivateTool = function() {
        this.toolStatus = false;
        this.control.buttonActivated(false);
    };
    Tool.prototype.activateTool = function() {
        this.toolStatus = true;
        this.control.buttonActivated(true);
    };
    Tool.prototype.changeToolStatus = function(event) {
        if (this.tool.toolStatus) {
            this.tool.deactivateTool();
            toolMediatorSingleton.toolDeactivated(this.tool);
            //configuration.toolsContainer.toolsMediator.toolDeactivated();
        } else {
            toolMediatorSingleton.toolActivated(this.tool);
            //configuration.toolsContainer.toolsMediator.toolActivated(tool);
            this.tool.activateTool();
        }
    };
    
    /*var tools = {},
        toolActivated = function(activatedTool) {
            for (var tool in tools) {
                if (tools[tool].toolName !== activatedTool.toolName) {
                    tools[tool].deactivateTool();
                }
            }
        },
        toolDeactivated = function(deactivatedTool) {
            
        },
        Tool = function(toolName, toolControl) {
            this.toolName = toolName;
            this.control = toolControl;
            this.toolStatus = false;
            this.control.addEventListener('click', this.changeToolStatus, false);
        };*/
    
    
    return {
        Tool: Tool,
        toolMediator: toolMediatorSingleton,
    };
});