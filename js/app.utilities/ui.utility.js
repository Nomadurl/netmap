Netmap.initializers.impactUtility('ui', function() {
    
    //Netmap button
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
        /*this.addEventListener('click', function(event) {
            this.buttonActivated(true);
        });*/
    };
    var NMButton = document.registerElement('nm-button', {prototype: NMButtonPrototype});
    var createButton = function() {
        return document.createElement('nm-button');
    };

    //Tab panel
    var createTabPanel = function(tabName, navContainer, tabContentContainer) {
        var navItem = document.createElement('li'),
            navLink = document.createElement('a'),
            tabContent = document.createElement('div');

        navLink.dataset.toggle = 'tab';
        navLink.href = '#' + tabName;
        navLink.innerHTML = tabName;

        navItem.appendChild(navLink);
        navContainer.appendChild(navItem);

        tabContent.id = tabName;
        tabContent.className = 'tab-pane fade';

        tabContentContainer.appendChild(tabContent);

        return tabContent;
    };
    
    return {
        createButton: createButton,
        createTabPanel: createTabPanel,
    };
});