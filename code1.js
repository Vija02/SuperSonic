gdjs.MenuCode = {};
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDInstructionTextObjects1= [];
gdjs.MenuCode.GDInstructionTextObjects2= [];
gdjs.MenuCode.GDSurviveTextObjects1= [];
gdjs.MenuCode.GDSurviveTextObjects2= [];
gdjs.MenuCode.GDMoreTextObjects1= [];
gdjs.MenuCode.GDMoreTextObjects2= [];
gdjs.MenuCode.GDWhiteObjects1= [];
gdjs.MenuCode.GDWhiteObjects2= [];
gdjs.MenuCode.GDStartButtonObjects1= [];
gdjs.MenuCode.GDStartButtonObjects2= [];
gdjs.MenuCode.GDwasdObjects1= [];
gdjs.MenuCode.GDwasdObjects2= [];
gdjs.MenuCode.GDMouseObjects1= [];
gdjs.MenuCode.GDMouseObjects2= [];
gdjs.MenuCode.GDSpeakerObjects1= [];
gdjs.MenuCode.GDSpeakerObjects2= [];
gdjs.MenuCode.GDHowToPlayTextObjects1= [];
gdjs.MenuCode.GDHowToPlayTextObjects2= [];
gdjs.MenuCode.GDHowToPlayButtonObjects1= [];
gdjs.MenuCode.GDHowToPlayButtonObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.MenuCode.GDStartButtonObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHowToPlayButtonObjects1Objects = Hashtable.newFrom({"HowToPlayButton": gdjs.MenuCode.GDHowToPlayButtonObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSpeakerObjects1Objects = Hashtable.newFrom({"Speaker": gdjs.MenuCode.GDSpeakerObjects1});gdjs.MenuCode.userFunc0x6d5db0 = function(runtimeScene) {
"use strict";
// Just toggle
var debugMode = runtimeScene.getGame().getVariables().get("sound");

if(!!debugMode.getAsNumber()){
    debugMode.setNumber(0);
}else{
    debugMode.setNumber(1);
}
};
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.userFunc0x6d5db0(runtimeScene);

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MenuCode.GDStartButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PlayArea", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HowToPlayButton"), gdjs.MenuCode.GDHowToPlayButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHowToPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HowToPlay", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Speaker"), gdjs.MenuCode.GDSpeakerObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition0IsTrue_0;
gdjs.MenuCode.condition0IsTrue_1.val = false;
gdjs.MenuCode.condition1IsTrue_1.val = false;
{
gdjs.MenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDSpeakerObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_1.val ) {
{
gdjs.MenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
gdjs.MenuCode.conditionTrue_1.val = true && gdjs.MenuCode.condition0IsTrue_1.val && gdjs.MenuCode.condition1IsTrue_1.val;
}
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7806908);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "assets/debug.wav", false, 10, 1);
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Speaker"), gdjs.MenuCode.GDSpeakerObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSpeakerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSpeakerObjects1[i].setAnimationName("On");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Speaker"), gdjs.MenuCode.GDSpeakerObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSpeakerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSpeakerObjects1[i].setAnimationName("Off");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDInstructionTextObjects1.length = 0;
gdjs.MenuCode.GDInstructionTextObjects2.length = 0;
gdjs.MenuCode.GDSurviveTextObjects1.length = 0;
gdjs.MenuCode.GDSurviveTextObjects2.length = 0;
gdjs.MenuCode.GDMoreTextObjects1.length = 0;
gdjs.MenuCode.GDMoreTextObjects2.length = 0;
gdjs.MenuCode.GDWhiteObjects1.length = 0;
gdjs.MenuCode.GDWhiteObjects2.length = 0;
gdjs.MenuCode.GDStartButtonObjects1.length = 0;
gdjs.MenuCode.GDStartButtonObjects2.length = 0;
gdjs.MenuCode.GDwasdObjects1.length = 0;
gdjs.MenuCode.GDwasdObjects2.length = 0;
gdjs.MenuCode.GDMouseObjects1.length = 0;
gdjs.MenuCode.GDMouseObjects2.length = 0;
gdjs.MenuCode.GDSpeakerObjects1.length = 0;
gdjs.MenuCode.GDSpeakerObjects2.length = 0;
gdjs.MenuCode.GDHowToPlayTextObjects1.length = 0;
gdjs.MenuCode.GDHowToPlayTextObjects2.length = 0;
gdjs.MenuCode.GDHowToPlayButtonObjects1.length = 0;
gdjs.MenuCode.GDHowToPlayButtonObjects2.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
