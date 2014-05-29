/**
 * Created by ANGEL on 23/05/14.
 */
Ext.define('appApplication.model.Modelo.ModeloModel',{
    extend:'Ext.data.Model',
    fields:[{name:'idModelo' , type:'int'},
        {name:'nombreModelo', type:'string'},
        {name:'idMarca',type:'int'},
        {name:'nombreMarca',type:'string'},
        {name:'fechaRegistro', type:'string'},
        {name:'estadoRegistro',type:'int'}
    ]
});

