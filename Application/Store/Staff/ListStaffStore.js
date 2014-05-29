/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('appApplication.store.Staff.ListStaffStore',{
    extend:'Ext.data.Store',
    model:'appApplication.model.Staff.ListStaffModel',
    autoSync:true,
    pageSize:15,
    proxy:{
        type:'ajax',
        api:{
            create:'main.php?class=ControllerClass_Staff&action=add',
            update:'main.php?class=ControllerClass_Staff&action=change',
            destroy:'main.php?class=ControllerClass_Staff&action=delete',
            read:'main.php?class=ControllerClass_Staff&action=list'
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
            idProperty:'pkStaff'
        },
        writer:{
            type:'json',
            root:'data',
            writeAllFields:true,
            encode:true
        }
    },
    listeners:{
        write:function(proxy,operation){
            var data = Ext.decode(operation.response.responseText);
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

