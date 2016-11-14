Netmap.initializers.impactExtension('Edge', function(Netmap) {
    
    var buttons = [];
    
    /*buttons.push(new Netmap.constructors.ExtensionButton('Добавить линк', 'glyphicon glyphicon-plus', function(event) {
        console.log('Я - кнопка добавлеия линка');
    }));
    buttons.push(new Netmap.constructors.ExtensionButton('Удалить линк', 'glyphicon glyphicon-minus', function(event) {
        console.log('Я - кнопка удаления линка');
    }));*/
    
    return {
        extensionName: 'Линк',
        buttons: buttons,
    };
});