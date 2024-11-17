window.dashExtensions = Object.assign({}, window.dashExtensions, {
    default: {
        function0: function(clickData, graphDiv) {
                if (clickData) {
                    clickData['ctrlKey'] = window.event.ctrlKey || false;
                }
                return clickData;
            }

            ,
        function1: function() {
                return window.event.ctrlKey || false;;
            }

            ,
        function2: function(clickData, graphDiv) {
                // Check if the clickData exists
                if (clickData) {
                    // Add ctrlKey state to the clickData object
                    clickData['ctrlKey'] = window.event.ctrlKey || false;
                }
                return clickData; // Return the updated clickData object
            }

            ,
        function3: function(clickData) {
                if (window.event && clickData) {
                    // Capture whether the Control key is pressed during the click
                    clickData['ctrlKey'] = window.event.ctrlKey || false;
                }
                return clickData;
            }

            ,
        function4: function(clickData, graphDiv) {
            if (clickData) {
                // Check for the 'ctrlKey' directly in the event
                const event = graphDiv._fullLayout._paper.node.lastChild.event;
                clickData['ctrlKey'] = event.ctrlKey || false;
            }
            return clickData;
        }

    }
});