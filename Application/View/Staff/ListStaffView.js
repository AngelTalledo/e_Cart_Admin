/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.Staff.ListStaffView',{
    extend:'Ext.grid.Panel',
    id:'grdListStaff',
    name:'grdListStaff',
    alias:'widget.listStaff',
    title:'Listado de Personal',
    store:'Staff.ListStaffStore',
    border:false,
    listeners:{
        'selectionchange':function(view,records){
            Ext.getCmp('btnEditStaff').setDisabled(records.length === 0);
            Ext.getCmp('btnDeleteStaff').setDisabled(records.length === 0 || Ext.getCmp('chkShowInactiveStaff').getValue());
        }
    },
    initComponent:function(){
        this.columns = [{header:'Id',dataIndex:'pkStaff' },
                        {header:'Ape. Paterno',dataIndex:'firstName'},
                        {header:'Ape.Materno',dataIndex:'lastName'},
                        {header:'Nombres',dataIndex:'staffNames'},
                        {header:'dni',dataIndex:'dni'},
                        {header:'sex',dataIndex:'sex'},
                        {header:'Direccion',dataIndex:'address'},
                        {header:'Email',dataIndex:'email'},
                        {header:'Telefono',dataIndex:'phone'},
                        {header:'Celular',dataIndex:'cellular'},
                        {header:'Nombre de Usuario',dataIndex:'userName'},
                        {header:'Clave de Usuario',dataIndex:'userPassword'},
                        {header:'Fecha de Registro',dataIndex:'registrationDate'},
                        {header:'Estado',dataIndex:'statusRegister'}],
      this.dockedItems = [{
      
                        xtype:'toolbar',
                        dock:'top',
                        items:[{
                                xtype:'button',
                                id:'btnAddStaff',
                                name:'btnAddStaff',
                                action:'addStaff',
                                text:'Nuevo',
                                iconCls:'Add'
                        },'-',{
                                xtype:'button',
                                id:'btnEditStaff',
                                name:'btnEditStaff',
                                action:'editStaff',
                                text:'Editar',
                                iconCls:'Edit',
                                disabled:true
                        },'-',{
                                xtype:'button',
                                id:'btnDeleteStaff',
                                name:'btnDeleteStaff',
                                action:'deleteStaff',
                                text:'Eliminar',
                                iconCls:'Delete',
                                disabled:true
                        },'-',{
                                xtype:'textfield',
                                id:'txtSearchByStaff',
                                name:'txtSearchByStaff',
                                emptyText:'Ingrese Apellidos o Nombres a Buscar',
                                width:300,
                                listeners:{
                                    specialkey: function(field, e){
                                        if(e.getKey() === e.ENTER){
                                            Ext.getCmp('txtSearchByDni').setValue('');
                                            Ext.getCmp('grdListStaff').getStore().loadPage(1);
                                        }
                                    }
                                }
                        },'-',{
                               xtype:'textfield',
                               id:'txtSearchByDni',
                               name:'txtSearchByDni',
                               emptyText:'Ingrese Dni a Buscar',
                               width:200,
                               listeners:{
                                    specialkey:function(field,e){
                                        if(e.getKey() === e.ENTER){
                                            Ext.getCmp('txtSearchByStaff').setValue('');
                                            Ext.getCmp('grdListStaff').getStore().loadPage(1);
                                        }
                                    }    
                               }
                        },'-',{
                               xtype:'button',
                               id:'btnDisplayAllStaff',
                               name:'btnDisplayAllStaff',
                               text:'Mostrar Todos',
                               handler:function(){
                                     Ext.getCmp('txtSearchByStaff').setValue('');
                                     Ext.getCmp('txtSearchByDni').setValue('');
                                     Ext.getCmp('grdListStaff').getStore().loadPage(1);
                               }
                        },'-',{
                              xtype:'checkbox',
                              id:'chkShowInactiveStaff',
                              name:'chkShowInactiveStaff',
                              fieldLabel:'Inactivos',
                              handler:function(){
                                  Ext.getCmp('btnAddStaff').setDisabled(this.getValue());
                                  Ext.getCmp('grdListStaff').getStore().loadPage(1);
                              }
                        }]
                        
      },{
                       xtype:'pagingtoolbar',
                       store:'Staff.ListStaffStore',
                       dock:'bottom',
                       displayInfo:true
      }],
     this.callParent(arguments);
     this.store.on('beforeload',function(store){
         store.proxy.extraParams = {
             typeSearch:Ext.getCmp('txtSearchByStaff').getValue()!==''?1:2,
             query:Ext.getCmp('txtSearchByStaff').getValue()!==''?Ext.getCmp('txtSearchByStaff').getValue():Ext.getCmp('txtSearchByDni').getValue(),
             chkShowInactive:Ext.getCmp('chkShowInactiveStaff').getValue() === true?1:0
         };
     });
     this.store.load();
    
    }
});

