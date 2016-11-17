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
        //console.log('Tool ' + deactivatedTool.toolName + ' deactivated!');
    };

    var toolMediatorSingleton = new ToolMediator();

    //Tools
    //Basic tool class (governor)
    var BasicTool = function(toolName, toolControl, toolAction) {
        this.toolName = toolName;
        this.control = toolControl;
        this.toolStatus = false;
        this.toolAction = toolAction;

        this.control.tool = this;
        this.control.addEventListener('click', this.changeToolStatus, false);
    };
    BasicTool.prototype.activateTool = function() {
        this.toolStatus = true;
        this.control.buttonActivated(true);
    };
    BasicTool.prototype.deactivateTool = function() {
        this.toolStatus = false;
        this.control.buttonActivated(false);
    };
    BasicTool.prototype.changeToolStatus = function() {
        if (this.tool.toolStatus) {
            this.tool.deactivateTool();
            toolMediatorSingleton.toolDeactivated(this.tool);
        } else {
            toolMediatorSingleton.toolActivated(this.tool);
            this.tool.activateTool();
        }
    };

    //Simple tool (inherited form BasicTool)
    var SimpleTool = function(toolName, toolControl, toolAction) {
        BasicTool.apply(this, arguments);
    };
    //inheritanse and save child constructor
    SimpleTool.prototype = Object.create(BasicTool.prototype);
    SimpleTool.prototype.constructor = SimpleTool;
    //override activation
    SimpleTool.prototype.activateTool = function() {
        BasicTool.prototype.activateTool.apply(this);
        this.toolAction();
    };

    //Canvas tool (inherited form BasicTool)
    var CanvasTool = function(toolName, toolControl, toolControl) {
        BasicTool.apply(this, arguments);
    };
    //inheritanse and save child constructor
    CanvasTool.prototype = Object.create(BasicTool.prototype);
    CanvasTool.prototype.constructor = CanvasTool;
    //override activation and deactivation
    CanvasTool.prototype.activateTool = function() {
        BasicTool.prototype.activateTool.apply(this);
        Netmap.cyto.on('click', {}, this.toolAction);
    };
    CanvasTool.prototype.deactivateTool = function() {
        BasicTool.prototype.deactivateTool.apply(this);
        Netmap.cyto.off('click', this.toolAction);
    };    
    
    return {
        SimpleTool: SimpleTool,
        CanvasTool: CanvasTool,
        toolMediator: toolMediatorSingleton,
    };
});