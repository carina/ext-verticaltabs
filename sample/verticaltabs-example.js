Ext.onReady(function () {

    //example 1: inline tab panel
    var tabpanel1 = new Ext.ux.VerticalTabPanel({
        activeTab:0,
        tabPosition:'left',  //choose 'left' or 'right' for vertical tabs; 'top' or 'bottom' for horizontal tabs
        textAlign:'right',
        renderTo:'tabs',
        width:500,
        height:200,
        tabWidth:100,
        defaults:{autoScroll:true},
        items:[
            {
                title:'By category',
                iconCls:'icon-by-category',
                html:"Show content by category... "
            },
            {
                title:'Folder',
                iconCls:'icon-folder',
                html:"Show folder content... "
            },
            {
                title:'List',
                iconCls:'icon-list',
                html:"Show list... "
            }
        ]
    });

    function handleActivate(tab) {
        alert(tab.title + ' was activated.');
    }

    //example 2: tabs on the right side
    var tabpanel2 = new Ext.ux.VerticalTabPanel({
        activeTab:0,
        tabPosition:'right',  //choose 'left' or 'right' for vertical tabs; 'top' or 'bottom' for horizontal tabs
        tabWidth:200,
        width:500,
        height:250,
        renderTo:'tabs2',
        defaults:{autoScroll:true},
        items:[
            {
                title:'Tab 1',
                html:"Content of tab 1"
            },
            {
                title:'Ajax Tab 1',
                autoLoad:'ajax1.htm'
            },
            {
                title:'Ajax Tab 2',
                autoLoad:{url:'ajax2.htm', params:'foo=bar&wtf=1'}
            },
            {
                title:'Disabled Tab',
                disabled:true,
                html:"Can't see me cause I'm disabled"
            },
            {
                title:'Event Tab',
                listeners:{activate:handleActivate},
                html:"I am tab 4's content. I also have an event listener attached."
            }
        ]
    });

    //example 3: tab panel in window
    var tabpanel3 = new Ext.ux.VerticalTabPanel({
        activeTab:0,
        tabPosition:'right',  //choose 'left' or 'right' for vertical tabs; 'top' or 'bottom' for horizontal tabs
        tabWidth:200,
        defaults:{autoScroll:true},
        items:[
            {
                title:'Tab 1',
                html:"Content of tab 1"
            },
            {
                title:'Tab 2',
                html:"Content of tab 2"
            }
        ]
    });

    var win = new Ext.Window({
        width:500,
        layout:'fit',
        closeAction:'hide',
        height:300,
        items:[tabpanel3]
    });

    var button = new Ext.Button({
        renderTo:'openwindow',
        text:'Open window',
        handler:function () {
            win.show();
        }
    });


});
