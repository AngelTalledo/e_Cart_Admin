/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.view.TipoProducto.EditTipoProductoView',{
    extend: 'Ext.window.Window',
    id:'wdwEditTipoProductoView',
    name:'wdwEditTipoProductoView',
    alias:'widget.EditTipoProducto',
    title:'Editar Area',
    layout:'fit',
    height:200,
    width:400,
    resizable:false,
    autoShow:true,
    modal:true,
    initComponent:function(){
        this.items=[{
                xtype:'form',
                id:'frmEditTipoProductoView',
                name:'frmEditTipoProductoView',
                bodyPadding:5,
                defaults:{labelWidth:150,width:300},
                items:[{
                        xtype:'textfield',
                        id:'txtPkTipoProducto',
                        name:'idTipoProducto',
                        hidden:true
                },{
                        xtype:'textfield',
                        id:'txtNombreTipoProducto',
                        name:'nombreTipoProducto',
                        fieldLabel:'TipoProducto',
                        y:20,
                        x:10,
                        labelWidth:80,
                        width:300,
                        maxLength:45
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
                    id:'btnSaveTipoProducto',
                    name:'btnSaveTipoProducto',
                    iconCls:'Save',
                    action:'saveTipoProducto'
            },{
                    text:'Limpiar',
                    id:'btnResetTipoProducto',
                    name:'btnResetTipoProducto',
                    iconCls:'clear',
                    handler:function(){
                        Ext.getCmp('frmEditTipoProductoView').getForm().reset();
                    }                    
            },{
                    text:'Cancelar',
                    iconCls:'delete',
                    handler:function(){
                        Ext.getCmp('wdwEditTipoProductoView').close();
                        
                    }
    }];
    this.callParent(arguments);
    }
});



