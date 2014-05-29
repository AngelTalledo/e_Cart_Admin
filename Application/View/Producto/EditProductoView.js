/**
 * Created by ANGEL on 29/05/14.
 */
Ext.define('appApplication.view.Producto.EditProductoView',{
    extend: 'Ext.window.Window',
    id:'wdwEditProductoView',
    name:'wdwEditProductoView',
    alias:'widget.EditProducto',
    title:'Editar Producto',
    layout:'fit',
    height:400,
    width:800,
    resizable:false,
    autoShow:true,
    modal:true,
    initComponent:function(){
        this.items=[{
            xtype:'form',
            id:'frmEditProductoView',
            name:'frmEditProductoView',
            bodyPadding:5,
            defaults:{labelWidth:150,width:300},
            items:[{
                xtype:'textfield',
                id:'txtPkProducto',
                name:'idProducto',
                hidden:true
            },{ xtype:'fieldset',
                title: 'Datos Basicos',
                collapsible: true,
                width:530,
                height:200,
                layout: {
                    type: 'table', columns:2
                },
                bodyPadding:5,
                defaults:{
                    labelWidth:115,
                    width:230
                },
                items:[{
                        xtype:'combobox',
                        id:'cmbIdTipoProducto',
                        name:'IdTipoProducto',
                        fieldLabel:'Tipo Producto',
                        //store:'Module.ListTipoProductoAllStore',
                        displayField:'nombreTipoProducto',
                        valueField:'IdTipoProducto',
                        emptyText:'Seleccione un Tipo',
                        editable:false

                        },{
                          xtype:'combobox',
                          id:'cmbIdModelo',
                          name:'idModelo',
                          fieldLabel:'Modelo',
                          //store:'Module.ListModeloAllStore',
                          displayField:'nombreModelo',
                          valueField:'idModelo',
                          emptyText:'Seleccione Modelo',
                          editable:false
                      },{
                          xtype:'textfield',
                          id:'txtNombreProducto',
                          name:'nombreProducto',
                          fieldLabel:'Nombre Producto'
                      },{

                         xtype:'numberfield',
                         id:'txtPrecioCompra',
                         name:'precioCompra',
                         fieldLabel:'Precio de Compra',
                         hideTrigger: true,
                         enableKeyEvents: true,
                          listeners : {
                             keypress : function(numberfield, e, options) {
                            if (e.keyCode == 13) {
                                query=Ext.getCmp('txtPrecioCompra').getValue();
                                Ext.Msg.alert('Fiddle',query);
                            }
                        }
                        }
                      },{
                         xtype:'numberfield',
                         id:'txtPrecioVenta',
                         name:'precioVenta',
                         fieldLabel:'Precio de Venta',
                         hideTrigger: true,
                         editable:false
                       },{
                        x:10,
                        xtype:'numberfield',
                        id:'txtStock',
                        name:'stock',
                        fieldLabel:'Stock',
                        hideTrigger: true

                    },{
                        xtype:'checkbox',
                        id:'txtNuevo',
                        fieldLabel:'Nuevo',
                        name:'nuevo'
                    },{
                        x:10,
                        xtype:'checkbox',
                        id:'txtMasVendido',
                        fieldLabel:'+ Vendido',
                        name:'masVendido'
                }]
               },{
                xtype:'checkbox',
                id:'txtEstadoRegistro',
                fieldLabel:'Habilitar',
                name:'estadoRegistro',
                y:30,
                x:10,
                labelWidth:80

            }]
        }],
            this.buttons=[{
                text:'Guardar',
                id:'btnSaveProducto',
                name:'btnSaveProducto',
                iconCls:'Save',
                action:'saveProducto'
            },{
                text:'Limpiar',
                id:'btnResetProducto',
                name:'btnResetProducto',
                iconCls:'clear',
                handler:function(){
                    Ext.getCmp('frmEditProductoView').getForm().reset();
                }
            },{
                text:'Cancelar',
                iconCls:'delete',
                handler:function(){
                    Ext.getCmp('wdwEditProductoView').close();

                }
            }];
        this.callParent(arguments);
    }
});