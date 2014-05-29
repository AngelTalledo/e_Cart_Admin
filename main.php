<?php
require_once('Components/Config.conf');
$class = 'ControllerClass_Index';
$action = 'showHome';

if(isset($_GET['class'])){
$class = $_GET['class'];
$action = $_GET['action'];
}
new $class($action);
