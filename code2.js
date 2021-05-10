gdjs.GameOverCode = {};
gdjs.GameOverCode.GDBackToMenuButtonObjects1= [];
gdjs.GameOverCode.GDBackToMenuButtonObjects2= [];
gdjs.GameOverCode.GDRetryButtonObjects1= [];
gdjs.GameOverCode.GDRetryButtonObjects2= [];
gdjs.GameOverCode.GDBackToMenuTextObjects1= [];
gdjs.GameOverCode.GDBackToMenuTextObjects2= [];
gdjs.GameOverCode.GDNewObjectObjects1= [];
gdjs.GameOverCode.GDNewObjectObjects2= [];
gdjs.GameOverCode.GDGameOverObjects1= [];
gdjs.GameOverCode.GDGameOverObjects2= [];
gdjs.GameOverCode.GDScoreObjects1= [];
gdjs.GameOverCode.GDScoreObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRetryButtonObjects1Objects = Hashtable.newFrom({"RetryButton": gdjs.GameOverCode.GDRetryButtonObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDBackToMenuButtonObjects1Objects = Hashtable.newFrom({"BackToMenuButton": gdjs.GameOverCode.GDBackToMenuButtonObjects1});gdjs.GameOverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RetryButton"), gdjs.GameOverCode.GDRetryButtonObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDRetryButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PlayArea", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackToMenuButton"), gdjs.GameOverCode.GDBackToMenuButtonObjects1);

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDBackToMenuButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameOverCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.GameOverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreObjects1[i].setBBText("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDScoreObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - ((gdjs.GameOverCode.GDScoreObjects1[i].getWidth()) / 2));
}
}}

}


};

gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDBackToMenuButtonObjects1.length = 0;
gdjs.GameOverCode.GDBackToMenuButtonObjects2.length = 0;
gdjs.GameOverCode.GDRetryButtonObjects1.length = 0;
gdjs.GameOverCode.GDRetryButtonObjects2.length = 0;
gdjs.GameOverCode.GDBackToMenuTextObjects1.length = 0;
gdjs.GameOverCode.GDBackToMenuTextObjects2.length = 0;
gdjs.GameOverCode.GDNewObjectObjects1.length = 0;
gdjs.GameOverCode.GDNewObjectObjects2.length = 0;
gdjs.GameOverCode.GDGameOverObjects1.length = 0;
gdjs.GameOverCode.GDGameOverObjects2.length = 0;
gdjs.GameOverCode.GDScoreObjects1.length = 0;
gdjs.GameOverCode.GDScoreObjects2.length = 0;

gdjs.GameOverCode.eventsList0(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
