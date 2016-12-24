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
    
    //modal window
    var NMModalWindowPrototype = Object.create(HTMLElement.prototype);
    var NMModalWindow = document.registerElement('nm-modal-window', {prototype: NMModalWindowPrototype});
    //modal overlay
    var NMModalOverlayPrototype = Object.create(HTMLElement.prototype);
    var NMModalOverlay = document.registerElement('nm-modal-overlay', {prototype: NMModalOverlayPrototype});
    //close button
    var NMCloseModalPrototype = Object.create(HTMLElement.prototype);
    NMCloseModalPrototype.modalWindow = undefined;
    NMCloseModalPrototype.modalOverlay = undefined;
    NMCloseModalPrototype.createdCallback = function() {
        this.addEventListener('click', function(event) {
            this.modalOverlay.remove();
            this.modalWindow.remove();
        });
    };
    //NMCloseModalPrototype.addEventListener('click', this.changeToolStatus, false);
    var CloseModalButton = document.registerElement('nm-close-modal', {prototype: NMCloseModalPrototype});
    var createModalWindow = function() {
        var modalWindow = document.createElement('nm-modal-window');
        var closeModalButton = document.createElement('nm-close-modal');
        var modalOverlay = document.createElement('nm-modal-overlay');
        closeModalButton.modalWindow = modalWindow;
        closeModalButton.modalOverlay = modalOverlay;
        modalWindow.appendChild(closeModalButton);
        console.dir(closeModalButton);
        document.body.appendChild(modalWindow);
        document.body.appendChild(modalOverlay);
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
        createModalWindow: createModalWindow,
    };
});