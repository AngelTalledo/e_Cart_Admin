Ext.define('appApplication.view.TypeUserPermission.AssignPermissionsView',{
  extend:'Ext.panel.Panel',
  id:'frmAssignPermissionsView',
  name:'frmAssignPermissionsView',
  alias:'widget.assignPermissions',
  border:false,
  x:140,
  y:10,
  initComponent:function(){
      this.items = [{
              xtype:'form',
              id:'frmUserPermissions',
              name:'frmUserPermissions',
              url:'main.php?class=ControllerClass_TypeUserPermission&action=saveTypeUserPermission',
              layout:{
                    type:'table',
                    columns:3
              },
              width:950,
              defaults:{
                 padding:6 
              },
              border:false,
              items:[{
               html:'<center><b><font size="+1" color="black" face="Times New Roman">Asignar Permisos a Tipos de Usuarios</font></b></center>',
               broder:false,
               colspan:3
               
               },{
              xtype:'panel',
              border:false,
              items:[{
                      xtype:'combobox',
                      id:'cmbTypeUser',
                      name:'cmbTypeUser',
                      fieldLabel:'Tipo de Usuario',
                      store:'TypeUser.ListTypeUserAllStore',
                      displayField:'userTypeName',
                      valueField:'pkUserType',
                      emptyText:'Seleccione un Tipo de Usuario',
                      width:300,
                      x:300,
                      editable:false,
                      listeners:{
                          'change':function(){
                              if(this.getValue()!== null){
                              Ext.getCmp('btnSavePrivileges').setDisabled(false);
                              Ext.getCmp('btnCancelar').setDisabled(false);  
                              Ext.getCmp('grdListModulesAllowed').getStore().load();
                              Ext.getCmp('grdListModulesDenied').getStore().load();
                              }
                          }
                      }
                  }],
              colspan:3
      },{
             xtype:'panel',
             width:620,
             height:400,
             layout:'fit',
             border:false,
             items:[{
                     xtype:'grid',
                     id:'grdListModulesAllowed',
                     name:'grdListModulesAllowed',
                     title:'Acceso Permitido',
                     store:'TypeUserPermission.ListTypeUserPermissionStore',
                     columns:[
                             {header:'Id',dataIndex:'fkModule',hidden:true},
                             {header:'Modulo',dataIndex:'moduleName'},
                             {xtype:'checkcolumn',header:'Insertar',dataIndex:'allowInsert',defaulValue:0},
                             {xtype:'checkcolumn',header:'Modificar',dataIndex:'allowUpdate'},
                             {xtype:'checkcolumn',header:'Eliminar',dataIndex:'allowDelete'},
                             {xtype:'checkcolumn',header:'Listar',dataIndex:'allowList'},
                             {xtype:'checkcolumn',header:'Imprimir',dataIndex:'allowReport'}
                     ],
                     listeners:{
                                'selectionchange':function(view,records){
                                                            Ext.getCmp('btnRight').setDisabled(records.length === 0);
                                                  }
                                     }
                            
                     
             }]
      },{
            xtype:'panel',
            height:150,
            width:70,
            layout:{
                type:'vbox',
                padding:'5',
                align:'center'
            },
            defaults:{margins:'0 0 5 0'},
            border:false,
            items:[{
                    xtype:'button',
                    id:'btnRight',
                    name:'btnRight',
                    itemId:'btnRight',
                    text:'>',
                    width: 50,
                    disabled:true,
                    handler:function(){
                     var  record =  Ext.getCmp('grdListModulesAllowed').getSelectionModel().getSelection(),
                     values =  record[0].data,
                     storeDenied = Ext.getCmp('grdListModulesDenied').getStore(),
                     storeAllowed = Ext.getCmp('grdListModulesAllowed').getStore();
                     storeDenied.add(values); 
                     storeAllowed.remove(record);
                     Ext.getCmp('btnAllLeft').setDisabled(false);
                     if(storeAllowed.getNewRecords().length === 0)
                     Ext.getCmp('btnAllRight').setDisabled(true);
                    }
                    
                },{
                    xtype:'button',
                    id:'btnAllRight',
                    name:'btnAllRight',
                    itemId:'btnAllRight',
                    text:'>>',
                    width: 50,
                    disabled:true,
                    handler:function(){
                        var storeAllowed = Ext.getCmp('grdListModulesAllowed').getStore();
                        var storeDenied = Ext.getCmp('grdListModulesDenied').getStore();
                        var listRecords = storeAllowed.getNewRecords();
                        storeDenied.add(listRecords); 
                        storeAllowed.removeAll();
                        this.setDisabled(true);
                         Ext.getCmp('btnAllLeft').setDisabled(false);
                    } 
                },{
                    xtype:'button',
                    id:'btnLeft',
                    name:'btnLeft',
                    itemId:'btnLeft',
                    text:'<',
                    width: 50,
                    disabled:true,
                    handler:function(){
                        
                       var record  = Ext.getCmp('grdListModulesDenied').getSelectionModel().getSelection(),
                       values =  record[0].data,
                       storeDenied = Ext.getCmp('grdListModulesDenied').getStore(),
                       storeAllowed = Ext.getCmp('grdListModulesAllowed').getStore();
                       storeAllowed.add(values); 
                       storeDenied.remove(record);
                       Ext.getCmp('btnAllRight').setDisabled(false);
                       if(storeDenied.getNewRecords().length === 0)
                       Ext.getCmp('btnAllLeft').setDisabled(true);
                    }
                },{
                    xtype:'button',
                    id:'btnAllLeft',
                    name:'btnAllLeft',
                    itemId:'btnAllLeft',
                    text:'<<',
                    width: 50,
                    disabled:true,
                    handler:function(){
                         var storeAllowed = Ext.getCmp('grdListModulesAllowed').getStore(),
                         storeDenied = Ext.getCmp('grdListModulesDenied').getStore(),
                         listRecords = storeDenied.getNewRecords();
                         var listModuleAllowed = new Array();  
                            for (var i=0; i < listRecords.length; i++){  
                                listModuleAllowed.push(listRecords[i].data);  
                            }  
                         storeAllowed.add(listModuleAllowed); 
                         storeDenied.removeAll();
                          this.setDisabled(true);
                          Ext.getCmp('btnAllRight').setDisabled(false);
                         
                    }
                }
            ]
      },{
            xtype:'panel',
            width:200,
            height:400,
            layout:'fit',
            border:false,
            items:[{
                    xtype:'grid',
                    id:'grdListModulesDenied',
                    name:'grdListModulesDenied',
                    title:'Acceso Denegado',
                    store:'TypeUserPermission.ListTypeUserNotPermissionStore',
                    columns:[
                        {header:'Id',dataIndex:'fkModule',hidden:true},
                        {header:'Modulo',dataIndex:'moduleName'}
                    ],
                    listeners:{
                    'selectionchange':function(view,records){
                                    Ext.getCmp('btnLeft').setDisabled(records.length === 0);
                                }
                          }
                }]
            
      },{
          xtype:'panel',
          colspan:3,
//          layout:{
//              type:'table',
//              columns:3
//          },
//          x:580,
          border:false,
          buttons:[{
                  
                   
                   id:'btnSavePrivileges',
                   name:'btnSavePrivileges',
                   text:'Guardar',
//                   scale:'medium',
                   action:'savePrivileges',
                   iconCls:'Save',
                   disabled:true
                   
              },{
                   id:'btnCancelar',
                   name:'btnCancelar',
                   text:'Cancelar',
                   disabled:true,
                   handler:function(){
                       Ext.getCmp('cmbTypeUser').reset();
                       Ext.getCmp('btnSavePrivileges').setDisabled(true);
                       this.setDisabled(true);
                       Ext.getCmp('btnAllRight').setDisabled(true);
                       Ext.getCmp('btnAllLeft').setDisabled(true);
                       Ext.getCmp('grdListModulesDenied').getStore().removeAll();
                       Ext.getCmp('grdListModulesAllowed').getStore().removeAll();
                   }
              }]
      }]
      }];
      this.callParent(arguments);
          Ext.getCmp('grdListModulesAllowed').getStore().on('beforeload', function(store){
                 store.proxy.extraParams = {
                                   fkTypeUser:Ext.getCmp('cmbTypeUser').getValue()

                                   };
    });
    Ext.getCmp('grdListModulesDenied').getStore().on('beforeload', function(store){
               store.proxy.extraParams = {
                                   fkTypeUser:Ext.getCmp('cmbTypeUser').getValue()

                            };
        });
    Ext.getCmp('grdListModulesAllowed').getStore().on('load',function(){
             Ext.getCmp('btnAllRight').setDisabled(this.getCount() === 0);
    });

    Ext.getCmp('grdListModulesDenied').getStore().on('load',function(){
            Ext.getCmp('btnAllLeft').setDisabled(this.getCount() === 0);
    });

  }
});

    function sendModuleAllowed(){
              var  records =  Ext.getCmp('grdListModulesAllowed').getStore().getNewRecords(),
             listModuleAllowed = new Array();  
                for (var i=0; i < records.length; i++){  
                    listModuleAllowed.push(records[i].data);  
                }  
          return Ext.JSON.encode(listModuleAllowed);
          }
    function  sendModuleDenied(){
                 var  records =  Ext.getCmp('grdListModulesDenied').getStore().getNewRecords(),
                      listModuleDenied = new Array();  
                         for (var i=0; i < records.length; i++){  
                             listModuleDenied.push(records[i].data);  
                         }  
                     return Ext.JSON.encode(listModuleDenied);
     }
