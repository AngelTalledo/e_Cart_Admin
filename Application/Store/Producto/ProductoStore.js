/**
 * Created by ANGEL on 29/05/14.
 */
/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.store.Producto.ProductoStore',{
    extend:'Ext.data.Store',
    model:'appApplication.model.Producto.ProductoModel',
    pageSize:15,
    autoSync:true,
    proxy:{
        type:'ajax',
        api:{
            create:'main.php?class=ControllerClass_Producto&action=add',
            update:'main.php?class=ControllerClass_Producto&action=change',
            destroy:'main.php?class=ControllerClass_Producto&action=delete',
            read:'main.php?class=ControllerClass_Producto&action=list'
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
            idProperty:'IdProducto'

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

