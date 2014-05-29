/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.Menu.ViewMenuView',{
    extend:'Ext.window.Window',
    title:'Vista del Menu General',
    id:'wdwViewMenuView',
    name:'wdwViewMenuView',
    alias:'widget.viewMenu',
    height:500,
    width:320,
    layout:'fit',
    modal:true,
    autoShow:true,
    resizabled:true,
    initComponent:function(){
        this.items = [{
                xtype:'treepanel',
                title:'Menu General',
                id:'treeViewMenu',
                useArrows:true,
                border:false,
                store:Ext.create('Ext.data.TreeStore',{
                    proxy:{
                        type:'ajax',
                        url:'main.php?class=ControllerClass_Menu&action=generalMenuDisplay'
                    },
                    root:{
                        text:'appApplication',
                        id:'src',
                        expanded:true
                    },       
                    folderSort: true,
                    sorters:[{
                            property:'text',
                            direction:'ASC'
                    }]
                }),
                dockedItems:[{
                        xtype:'toolbar',
                        items:[{
                                text:'Expandir Todo',
                                iconCls:'Expand',
                                handler:function(){
                                    Ext.getCmp('treeViewMenu').expandAll();
                                }
                        },'-',{
                               text:'Colapsar Todo',
                               iconCls:'Collapse',
                               handler:function(){
                                    Ext.getCmp('treeViewMenu').collapseAll();
                               }
                        }]
                }]
        }],
    this.callParent(arguments)
    }
    
});

