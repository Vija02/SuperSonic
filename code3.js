gdjs.HowToPlayCode = {};
gdjs.HowToPlayCode.GDGuide1Objects1= [];
gdjs.HowToPlayCode.GDGuide1Objects2= [];
gdjs.HowToPlayCode.GDHealthObjects1= [];
gdjs.HowToPlayCode.GDHealthObjects2= [];
gdjs.HowToPlayCode.GDAsteroidObjects1= [];
gdjs.HowToPlayCode.GDAsteroidObjects2= [];
gdjs.HowToPlayCode.GDEnemy1Objects1= [];
gdjs.HowToPlayCode.GDEnemy1Objects2= [];
gdjs.HowToPlayCode.GDEnemy2Objects1= [];
gdjs.HowToPlayCode.GDEnemy2Objects2= [];
gdjs.HowToPlayCode.GDButtonObjects1= [];
gdjs.HowToPlayCode.GDButtonObjects2= [];
gdjs.HowToPlayCode.GDTextObjects1= [];
gdjs.HowToPlayCode.GDTextObjects2= [];

gdjs.HowToPlayCode.conditionTrue_0 = {val:false};
gdjs.HowToPlayCode.condition0IsTrue_0 = {val:false};
gdjs.HowToPlayCode.condition1IsTrue_0 = {val:false};
gdjs.HowToPlayCode.condition2IsTrue_0 = {val:false};
gdjs.HowToPlayCode.conditionTrue_1 = {val:false};
gdjs.HowToPlayCode.condition0IsTrue_1 = {val:false};
gdjs.HowToPlayCode.condition1IsTrue_1 = {val:false};
gdjs.HowToPlayCode.condition2IsTrue_1 = {val:false};


gdjs.HowToPlayCode.mapOfGDgdjs_46HowToPlayCode_46GDButtonObjects1Objects = Hashtable.newFrom({"Button": gdjs.HowToPlayCode.GDButtonObjects1});gdjs.HowToPlayCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.HowToPlayCode.GDButtonObjects1);

gdjs.HowToPlayCode.condition0IsTrue_0.val = false;
{
{gdjs.HowToPlayCode.conditionTrue_1 = gdjs.HowToPlayCode.condition0IsTrue_0;
gdjs.HowToPlayCode.condition0IsTrue_1.val = false;
gdjs.HowToPlayCode.condition1IsTrue_1.val = false;
{
gdjs.HowToPlayCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.HowToPlayCode.mapOfGDgdjs_46HowToPlayCode_46GDButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.HowToPlayCode.condition0IsTrue_1.val ) {
{
gdjs.HowToPlayCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.HowToPlayCode.conditionTrue_1.val = true && gdjs.HowToPlayCode.condition0IsTrue_1.val && gdjs.HowToPlayCode.condition1IsTrue_1.val;
}
}if (gdjs.HowToPlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};

gdjs.HowToPlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HowToPlayCode.GDGuide1Objects1.length = 0;
gdjs.HowToPlayCode.GDGuide1Objects2.length = 0;
gdjs.HowToPlayCode.GDHealthObjects1.length = 0;
gdjs.HowToPlayCode.GDHealthObjects2.length = 0;
gdjs.HowToPlayCode.GDAsteroidObjects1.length = 0;
gdjs.HowToPlayCode.GDAsteroidObjects2.length = 0;
gdjs.HowToPlayCode.GDEnemy1Objects1.length = 0;
gdjs.HowToPlayCode.GDEnemy1Objects2.length = 0;
gdjs.HowToPlayCode.GDEnemy2Objects1.length = 0;
gdjs.HowToPlayCode.GDEnemy2Objects2.length = 0;
gdjs.HowToPlayCode.GDButtonObjects1.length = 0;
gdjs.HowToPlayCode.GDButtonObjects2.length = 0;
gdjs.HowToPlayCode.GDTextObjects1.length = 0;
gdjs.HowToPlayCode.GDTextObjects2.length = 0;

gdjs.HowToPlayCode.eventsList0(runtimeScene);
return;

}

gdjs['HowToPlayCode'] = gdjs.HowToPlayCode;
