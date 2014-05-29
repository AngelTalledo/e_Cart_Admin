/**
 * Created by ANGEL on 23/05/14.
 */
/**
 * Created by ANGEL on 23/05/14.
 */
Ext.define('appApplication.store.TipoProducto.TipoProductoStore',{
    extend:'Ext.data.Store',
    model:'appApplication.model.TipoProducto.TipoProductoModel',
    autoSync:true,
    pageSize:15,
    proxy:{
        type:'ajax',
        api:{
            create:'main.php?class=ControllerClass_TipoProducto&action=add',
            update:'main.php?class=ControllerClass_TipoProducto&action=change',
            destroy:'main.php?class=ControllerClass_TipoProducto&action=delete',
            read:'main.php?class=ControllerClass_TipoProducto&action=list'
        },
        actionMethods:{
            create:'POST',
            update:'POST',
            destroy:'POST',
            read:'POST'
        },
        reader:{
            type:'json',
            root:'list',
            idProperty:'idTipoProducto'
        },
        writer:{
            type:'json',
            root:'data',
            encode:true,
            writeAllFields:true
        }
    },
    listeners:{
        write:function(proxy,operation){
            var  data = Ext.decode(operation.response.responseText);
            if(data.success){
                Ext.MessageBox.show({
                    title:'MENSAJE DE EXITO',
                    msg:data.message,
                    buttons:Ext.MessageBox.OK,
                    icon:Ext.MessageBox.INFO
                });
            }else{
                Ext.MessageBox.show({
                    title:'MENSAJE DE ERROR',
                    msg:data.message,
                    buttons:Ext.MessageBox.OK,
                    icon:Ext.MessageBox.ERROR
                });
            }
        }
    }
});


