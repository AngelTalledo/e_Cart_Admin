/**
 * Created by ANGEL on 14/05/14.
 */

Ext.define('appApplication.store.MenuTemplate.MenuTemplateStore',{
    extend:'Ext.data.Store',
    modal:'appApplication.model.MenuTemplate.MenuTemplateModel',
    pageSize:15,
    groupField:'fkMenuTemplate',
    autoSync:true,
    proxy:{
        type:'ajax',
        api:{
            create:'main.php?class=ControllerClass_MenuTemplate&action=add',
            update:'main.php?class=ControllerClass_MenuTemplate&action=change',
            destroy:'main.php?class=ControllerClass_MenuTemplate&action=delete',
            read:'main.php?class=ControllerClass_MenuTemplate&action=list'
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
            idProperty:'pkMenu'

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

