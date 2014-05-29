/**
 * Created by ANGEL on 23/05/14.
 */
Ext.define('appApplication.model.Marca.MarcaModel',{
    extend:'Ext.data.Model',
    fields:[{name:'idMarca' , type:'int'},
        {name:'nombreMarca', type:'string'},
        {name:'fechaRegistro', type:'string'},
        {name:'estadoRegistro',type:'int'}
    ]
});

