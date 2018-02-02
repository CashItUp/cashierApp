//$(function () {
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var numberId;
  
    // If we have this section in our url, we pull out the post id from the url
  // In '?post_id=1', postId is 1
  if (url.indexOf("?number_id=") !== -1) {
    numberId = url.split("=")[1];
    //getPostData(postId, "post");
  }
  // Otherwise if we have an employee_id in our url, preset the employee select box to be our Employee
//   else if (url.indexOf("?employee_id=") !== -1) {
//     employeeId = url.split("=")[1];
//   }

    var options = {
      float: true
    };
    $('.grid-stack').gridstack(options);

    //new function () {

        var list = [];
        this.tableNumbers = function (list,lowEnd,highEnd) {
            for (var i = lowEnd; i <= highEnd; i++) {
                list.push(i);
            }
            return list
        }
        list = this.tableNumbers(list,1,100);
        this.serializedData = [
            {x: 0, y: 0, width: 2, height: 2, table: 1},
            {x: 3, y: 1, width: 1, height: 2, table: 2},
            {x: 4, y: 1, width: 1, height: 1, table: 3},
            {x: 2, y: 3, width: 3, height: 1, table: 4},
            {x: 1, y: 4, width: 1, height: 1, table: 5},
            {x: 1, y: 3, width: 1, height: 1, table: 6},
            {x: 2, y: 4, width: 1, height: 1, table: 7},
            {x: 2, y: 5, width: 1, height: 1, table: 8}
        ];
        var tNumbers = [];
        this.tNumbers = this.tableNumbers(tNumbers,1,this.serializedData.length);

        this.grid = $('.grid-stack').data('gridstack');
//adding new widget
        var counter =serializedData.length;
       this.addNewWidget = function () {
                counter = counter +1;
                var node =  {
                            x: 0 ,
                            y: 0 ,
                            width: 1,
                            height: 1,
                            table: counter
                            // width: 1 + 3 * Math.random(),
                            // height: 1 + 3 * Math.random()
                        };
                //var tableid = list.pop();
                this.grid.addWidget($('<div><a id="'+node.table +'" href="/menu?table_id=' +node.table+ '?number_id=' + numberId+ '" class="grid-stack-item-content" /><div/>'),
                    node.x, node.y, node.width, node.height);
                    $('#'+node.table).html(node.table);
                return false;
            }.bind(this);
//load grid stuff
        this.loadGrid = function () {
            counter = serializedData.length;
            this.grid.removeAll();
            var items = GridStackUI.Utils.sort(this.serializedData);
            _.each(items, function (node) {
                var tableid = list.shift();
                this.grid.addWidget($('<div><a id="'+node.table +'" href="/menu?table_id=' +node.table+ '?number_id=' + numberId+ '" class="grid-stack-item-content" /><div/>'),
                    node.x, node.y, node.width, node.height);
                $('#'+node.table).html(node.table);
            }, this);
             
           //$( ".grid-stack-item-content" ).wrap( "<a href='/service'></a>" );
            return false;
        }.bind(this);
//save grid stuff
        // this.saveGrid = function () {
        //     this.serializedData = _.map($('.grid-stack > .grid-stack-item:visible'), function (el) {
        //         el = $(el);
        //         var node = el.data('_gridstack_node');
        //         return {
        //             x: node.x,
        //             y: node.y,
        //             width: node.width,
        //             height: node.height
        //         };
        //     }, this);
        //     $('#saved-data').val(JSON.stringify(this.serializedData, null, '    '));
        //     return false;
        // }.bind(this);

        this.saveGrid = function () {
            var numberBoxes = $(".grid-stack").children().toArray().length;//number of tables on page
            console.log(numberBoxes)
            var temp ={x:3,y:3,width:3,height:3,table:4}
            serializedData=[{x:3,y:3,width:3,height:3,table:4}]
            serializedData[0].x=parseInt($($(".grid-stack").children().toArray()[0]).attr("data-gs-x"))
            serializedData[0].y=parseInt($($(".grid-stack").children().toArray()[0]).attr("data-gs-y"))
            serializedData[0].width=parseInt($($(".grid-stack").children().toArray()[0]).attr("data-gs-width"))
            serializedData[0].height=parseInt($($(".grid-stack").children().toArray()[0]).attr("data-gs-height"))
            serializedData[0].table=parseInt($($(".grid-stack").children().toArray()[0]).children("a").attr("id"))
            console.log(temp)
            
            for (i = 1; i < numberBoxes; i++) { 
                console.log(i)
                var temp ={x:3,y:3,width:3,height:3}
                temp.x=parseInt($($(".grid-stack").children().toArray()[i]).attr("data-gs-x"))
                temp.y=parseInt($($(".grid-stack").children().toArray()[i]).attr("data-gs-y"))
                temp.width=parseInt($($(".grid-stack").children().toArray()[i]).attr("data-gs-width"))
                temp.height=parseInt($($(".grid-stack").children().toArray()[i]).attr("data-gs-height"))
                temp.table=parseInt($($(".grid-stack").children().toArray()[i]).children("a").attr("id"))
                console.log(temp)
                serializedData.push(temp)
                console.log(serializedData)
            }
            
            return false;
        }.bind(this);
//clear grid stuff
        this.clearGrid = function () {
            counter = 0;
            this.grid.removeAll();
            return false;
        }.bind(this);

        $('#add-new-widget').click(this.addNewWidget);
        $('#save-grid').click(this.saveGrid);
        $('#load-grid').click(this.loadGrid);
        $('#clear-grid').click(this.clearGrid);

        this.loadGrid();
    //};
//});