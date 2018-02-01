$(function () {
    var options = {
      float: true
    };
    $('.grid-stack').gridstack(options);

    new function () {
        this.serializedData = [
            {x: 0, y: 0, width: 2, height: 2},
            {x: 3, y: 1, width: 1, height: 2},
            {x: 4, y: 1, width: 1, height: 1},
            {x: 2, y: 3, width: 3, height: 1},
            {x: 1, y: 4, width: 1, height: 1},
            {x: 1, y: 3, width: 1, height: 1},
            {x: 2, y: 4, width: 1, height: 1},
            {x: 2, y: 5, width: 1, height: 1}
        ];

        this.grid = $('.grid-stack').data('gridstack');
//adding new widget
       this.addNewWidget = function () {
                var node =  {
                            x: 0 ,
                            y: 0 ,
                            width: 1,
                            height: 1
                            // width: 1 + 3 * Math.random(),
                            // height: 1 + 3 * Math.random()
                        };
                this.grid.addWidget($('<div><a href="/service" class="grid-stack-item-content" /><div/>'),
                    node.x, node.y, node.width, node.height);
                    $('.grid-stack-item-content').html('2323'); 
                return false;
            }.bind(this);
//load grid stuff
        this.loadGrid = function () {
            this.grid.removeAll();
            var items = GridStackUI.Utils.sort(this.serializedData);
            _.each(items, function (node) {
                this.grid.addWidget($('<div><a href="/service" class="grid-stack-item-content" /><div/>'),
                    node.x, node.y, node.width, node.height);
            }, this);
            $('.grid-stack-item-content').html('2323'); 
           //$( ".grid-stack-item-content" ).wrap( "<a href='/service'></a>" );
            return false;
        }.bind(this);
//save grid stuff
        this.saveGrid = function () {
            this.serializedData = _.map($('.grid-stack > .grid-stack-item:visible'), function (el) {
                el = $(el);
                var node = el.data('_gridstack_node');
                return {
                    x: node.x,
                    y: node.y,
                    width: node.width,
                    height: node.height
                };
            }, this);
            $('#saved-data').val(JSON.stringify(this.serializedData, null, '    '));
            return false;
        }.bind(this);
//clear grid stuff
        this.clearGrid = function () {
            this.grid.removeAll();
            return false;
        }.bind(this);

        $('#add-new-widget').click(this.addNewWidget);
        $('#save-grid').click(this.saveGrid);
        $('#load-grid').click(this.loadGrid);
        $('#clear-grid').click(this.clearGrid);

        this.loadGrid();
    };
});