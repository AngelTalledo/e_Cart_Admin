/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.User.ListUserView',{
    extend:'Ext.grid.Panel',
    id:'grdListUser',
    name:'grdListUser',
    alias:'widget.listUser',
    title:'Listado  de Usuarios',
    store:'User.ListUserStore',
    border:false,
    listeners:{
        'selectionchange':function(view,records){
            Ext.getCmp('btnEditUser').setDisabled(records.length === 0);
            Ext.getCmp('btnViewMenuUser').setDisabled(records.length === 0);
            Ext.getCmp('btnDeleteUser').setDisabled(records.length === 0 || Ext.getCmp('chkShowInactiveUser').getValue());
        }
    },
    initComponent:function(){
        this.columns = [{header:'Id',dataIndex:'pkUser'},
                        {header:'Personal',dataIndex:'fullNames',width:300},
                        {header:'Tipo de Usuario',dataIndex:'userTypeName'},
                        {header:'Fecha de Registro',dataIndex:'registrationDate'},
                        {header:'Estado',dataIndex:'statusRegister'}],
       this.dockedItems = [{
                            xtype:'toolbar',
                            dock:'top',
                            items:[{
                                    xtype:'button',
                                    id:'btnAddUser',
                                    name:'btnAddUser',
                                    action:'addUser',
                                    text:'Nuevo',
                                    iconCls:'Add'
                            },'-',{
                                    xtype:'button',
                                    id:'btnEditUser',
                                    name:'btnEditUser',
                                    action:'editUser',
                                    text:'Editar',
                                    iconCls:'Edit',
                                    disabled:true
                            },'-',{
                                    xtype:'button',
                                    id:'btnDeleteUser',
                                    name:'btnDeleteUser',
                                    action:'deleteUser',
                                    text:'Eliminar',
                                    iconCls:'Delete',
                                    disabled:true
                            },'-',{
                                   xtype:'textfield',
                                   id:'txtSearchStringUser',
                                   name:'txtSearchStringUser',
                                   emptyText:'Ingrese Nombre de Personal',
                                   width:300
                                   
                            },{
                                   xtype:'button',
                                   id:'btnSearchUser',
                                   name:'btnSearchUser',
                                   text:'Buscar',
                                   handler:function(){
                                       if( Ext.getCmp('txtSearchStringUser').getValue()!=='')
                                          Ext.getCmp('grdListUser').getStore().loadPage(1); 
                                   }
                                   
                            },'-',{
                                   xtype:'button',
                                   id:'btnDisplayAllUser',
                                   name:'btnDisplayAllUser',
                                   text:'Mostrar Todos',
                                   handler:function(){
                                       Ext.getCmp('txtSearchStringUser').setValue('');
                                       Ext.getCmp('grdListUser').getStore().loadPage(1);
                                   }
                            },'-',{
                                   xtype:'button',
                                   id:'btnViewMenuUser',
                                   name:'btnViewMenuUser',
                                   action:'viewMenuUser',
                                   text:'Vista de Menu',
                                   disabled:true
                                   
                            },'-',{
                                   xtype:'checkbox',
                                   id:'chkShowInactiveUser',
                                   name:'chkShowInactiveUser',
                                   fieldLabel:'Inactivos',
                                   handler:function(){
                                       Ext.getCmp('btnAddUser').setDisabled(this.getValue());
                                       Ext.getCmp('grdListUser').getStore().loadPage(1);
                                   }
                            }]
                    },{
                            xtype:'pagingtoolbar',
                            dock:'bottom',
                            store:'User.ListUserStore',
                            displayInfo:true
                    }],
      this.callParent(arguments); 
      this.store.on('beforeload',function(store){
          store.proxy.extraParams = {
              query : Ext.getCmp('txtSearchStringUser').getValue(),
              chkShowInactive : Ext.getCmp('chkShowInactiveUser').getValue() === true?1:0
          }
      });
      this.store.load();                
    }
});

