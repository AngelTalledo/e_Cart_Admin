/**
 * Created by ANGEL on 23/05/14.
 */
Ext.define('appApplication.store.Marca.ListMarcaAllStore',{
    extend:'Ext.data.Store',
    model:'appApplication.model.Marca.MarcaModel',
    proxy:{
        type:'ajax',
        url:'main.php?class=ControllerClass_Marca&action=listAll',
        reader:{
            type:'json',
            root:'list'
        }
    }
});
