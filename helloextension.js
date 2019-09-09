(function(ext) {
    // Code to be run when the user closes the window, reloads the page, etc.    
    ext._shutdown = function() {};
    
    // Shows the status of the extension 0 = red, 1 = yellow, and 2 = green
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    // Descriptions of the blocks and menus the extension adds
    var descriptor = {
        blocks: [' ', 'hello world']
    };
    // Register the extension
    ScratchExtensions.register('Hello World', descriptor, ext);
})({});