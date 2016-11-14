Netmap.initializers.impactExtension('Node', function(Netmap) {
    
    var buttons = [];
    
    /*buttons.push(new Netmap.constructors.ExtensionButton('Добавить узел', 'glyphicon glyphicon-plus', function(event) {
        console.log('Я - кнопка добавлеия узла');
    }));
    buttons.push(new Netmap.constructors.ExtensionButton('Удалить узел', 'glyphicon glyphicon-minus', function(event) {
        console.log('Я - кнопка удаления узла');
    }));*/
    
    return {
        extensionName: 'Узел',
        buttons: buttons,
    };
});