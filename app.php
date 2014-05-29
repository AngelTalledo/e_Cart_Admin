<html>
    <head>
        <link rel="shortcut icon" type="image/x-icon" href="Public/Images/login.png" />
        <title>Sistema de Convocatoria</title>
    <body>
    <link rel="stylesheet" type="text/css" href="Public/Styles/app.css">    
    <div id="loading">
        <div class="loading-indicator">
            <img id="loading-img" src="Public/Images/loading.gif" width="150" height="150"/>
            <br /><span id="loading-msg">Cargando Estilos y Imagenes...</span>
        </div>
    </div>
    <link rel="stylesheet" type="text/css" href="Components/Library/extjs/resources/css/ext-all-neptune.css">
     <link rel="stylesheet" type="text/css" href="Components/Library/ux/css/CheckHeader.css" />
     <script src="Components/Library/extjs/ext-all-debug.js" type="text/javascript"></script>
     <script src="Components/Library/extjs/locale/ext-lang-es.js" type="text/javascript"></script>
     <script type="text/javascript" src="Components/Library/ux/CheckColumn.js"></script>
     <script type="text/javascript" src="Components/Library/ux/SimpleIFrame.js"></script>
     <script type="text/javascript">document.getElementById('loading-msg').innerHTML = 'Cargando Componentes ...';</script>
     <script type="text/javascript">document.getElementById('loading-msg').innerHTML = 'Ingresando al Sistema...';</script>
      <script src="app.js" type="text/javascript"></script>
     <script type="text/javascript" >
         Ext.onReady(function(){
         Ext.defer(function(){Ext.get('loading').remove();}, 500);
         });
     </script>
     
    </body>
    </head>
</html>