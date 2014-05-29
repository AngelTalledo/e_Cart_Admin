/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.User.ViewMenuUserView',{
    extend:'Ext.window.Window',
    id:'wdwViewMenuUser',
    name:'wdwViewMenuUser',
    alias:'widget.viewMenuUser',
    title:'Vista de Menu  por Usuario',
    height:500,
    width:600,
    layout:'fit',
    modal:true,
    resizable:false,
    autoShow:true,
    initComponent:function(){
        this.items = [{
                       xtype:'form',
                       id:'frmViewMenuUser',
                       name:'frmViewMenuUser',
                       bodyPadding:5,
                       defaults:{
                           labelWidth:120,
                           width:500
                       },
                       items:[{
                                xtype:'textfield',
                                id:'txtFullNames',
                                name:'fullNames',
                                fieldLabel:'Nombre del Personal',
                                disabled:true
                                
                       },{
                                xtype:'treepanel',
                                id:'treeViewMenuByTypeUser',
                                name:'treeViewMenuByTypeUser',
                                title:'Menu de Tipo de Usuario',
                                height:300,
                                width:200,
                                x:200,
                                useArrows:true,
                                store:Ext.create('Ext.data.TreeStore',{
                                      proxy:{
                                          type:'ajax',
                                          url:'main.php?class=ControllerClass_Menu&action=showMenuByTypeUser',
                                          extraParams:{
                                              fkTypeUser:argFkTypeUser
                                          }
                                      },
                                      root:{
                                          text:'appApplication',
                                          id:'src',
                                          expanded:true
                                      },
                                      folderSort:true,
                                      sorters:[{
                                            property:'text',
                                            direcction:'ASC'
                                      }]
                                }),
                                dockedItems:[{
                                       xtype:'toolbar',
                                       items:[{
                                               text:'Expandir Todo',
                                               iconCls:'Expand',
                                               handler:function(){
                                                   Ext.getCmp('treeViewMenuByTypeUser').expandAll();
                                               }
                                       },{
                                               text:'Colapsar Todo',
                                               iconCls:'Collapse',
                                               handler:function(){
                                                  Ext.getCmp('treeViewMenuByTypeUser').collapseAll();
                                               }        
                                       }]
                                }]
                       }]
        }];
        this.callParent(arguments);
    }
    
});

