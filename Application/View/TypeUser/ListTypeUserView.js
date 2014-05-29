/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.TypeUser.ListTypeUserView',{
    extend:'Ext.grid.Panel',
    id:'grdListTypeUserView',
    name:'grdListTypeUserView',
    alias:'widget.listTypeUser',
    title:'Listado de Tipo de Usuarios',
    store:'TypeUser.ListTypeUserStore',
    border:false,
    listeners:{
        'selectionchange':function(view,records){
            Ext.getCmp('btnEditTypeUser').setDisabled(records.length === 0);
            Ext.getCmp('btnDeleteTypeUser').setDisabled(records.length === 0 || Ext.getCmp('chkShowInactiveTypeUser').getValue());
        }
    },
    initComponent:function(){
        this.columns = [{header:'Id',dataIndex:'pkUserType'},
                       {header:'Nombre del Tipo de Usuario',dataIndex:'userTypeName',width:200},
                       {header:'Por defecto',dataIndex:'defaultTypeUser'},
                       {header:'Fecha de Registro',dataIndex:'registrationDate'},
                       {header:'Estado',dataIndex:'statusRegister'}],
       this.dockedItems = [{
                            xtype:'toolbar',
                            id:'tbarTypeUser',
                            dock:'top',
                            items:[{
                                    xtype:'button',
                                    id:'btnAddTypeUser',
                                    name:'btnAddTypeUser',
                                    action:'addTypeUser',
                                    text:'Nuevo',
                                    iconCls:'Add'
                            },'-',{
                                    xtype:'button',
                                    id:'btnEditTypeUser',
                                    name:'btnEditTypeUser',
                                    action:'editTypeUser',
                                    text:'Editar',
                                    iconCls:'Edit',
                                    disabled:true
                            },'-',{
                                    xtype:'button',
                                    id:'btnDeleteTypeUser',
                                    name:'btnDeleteTypeUser',
                                    action:'deleteTypeUser',
                                    text:'Eliminar',
                                    iconCls:'Delete',
                                    disabled:true
                            },'-',{
                                   xtype:'textfield',
                                   id:'txtStringSearchTypeUser',
                                   name:'txtStringSearchTypeUser',
                                   emptyText:'Ingrese Nombre del Tipo de Usuario',
                                   width:300
                            },{
                                   xtype:'button',
                                   id:'btnSearchTypeUser',
                                   name:'btnSearchTypeUser',
                                   text:'Buscar',
                                   handler:function(){
                                       if(Ext.getCmp('txtStringSearchTypeUser').getValue()!=='')
                                           Ext.getCmp('grdListTypeUserView').getStore().loadPage(1);
                                   }
                            },'-',{
                                  xtype:'button',
                                  id:'btnDisplayAllTypeUser',
                                  name:'btnDisplayAllTypeUser',
                                  text:'Mostrar Todos',
                                  handler:function(){
                                         Ext.getCmp('txtStringSearchTypeUser').setValue('');
                                         Ext.getCmp('grdListTypeUserView').getStore().loadPage(1);
                                  }
                            },'-',{
                                  xtype:'checkbox',
                                  id:'chkShowInactiveTypeUser',
                                  name:'chkShowInactiveTypeUser',
                                  fieldLabel:'Inactivos',
                                  handler:function(){
                                          Ext.getCmp('grdListTypeUserView').getStore().loadPage(1);
                                          Ext.getCmp('btnAddTypeUser').setDisabled(this.getValue());
                                  }
                                  
                            }]
                    },{
                           xtype:'pagingtoolbar',
                           store:'TypeUser.ListTypeUserStore',
                           displayInfo:true,
                           dock:'bottom'
       }],
   this.callParent(arguments);
   this.store.on('beforeload',function(store){
       store.proxy.extraParams = {
           chkShowInactive:Ext.getCmp('chkShowInactiveTypeUser').getValue()===true?1:0,
           query:Ext.getCmp('txtStringSearchTypeUser').getValue()
       };
   });
   this.store.load();
   //   var storePermission = Ext.create('appApplication.store.TypeUserPermission.PermissionByModuleStore').load({
//       params:{
//           argTableName:'app_type_user'
//       }
//   });
//   Ext.getCmp('tbarTypeUser').getForm().loadRecord(storePermission.getNewRecords()[0])
    } 
});

