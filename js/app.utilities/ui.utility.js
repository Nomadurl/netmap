Netmap.initializers.impactUtility('ui', function() {
    
    //Netmap button prototype
    var NMButtonPrototype = Object.create(HTMLElement.prototype);
    NMButtonPrototype.addClass = function(className) {
        this.className += ' ' + className;
    };
    NMButtonPrototype.removeClass = function(className) {
        this.className = this.className.replace(className, '');
    };
    NMButtonPrototype.buttonActivated = function(isActive) {
        (isActive) ? (this.addClass('active')) : (this.removeClass('active'));
    };
    NMButtonPrototype.createdCallback = function() {
        this.addEventListener('click', function(event) {
            this.buttonActivated(true);
        });
    };
    var NMButton = document.registerElement('nm-button', {prototype: NMButtonPrototype});
    var createButton = function() {
        return document.createElement('nm-button');
    };
    
    return {
        createButton: createButton,
    };
});