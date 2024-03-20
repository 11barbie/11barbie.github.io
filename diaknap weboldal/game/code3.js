gdjs.DecideCode = {};
gdjs.DecideCode.GDtutorialEmailObjects1= [];
gdjs.DecideCode.GDtutorialEmailObjects2= [];
gdjs.DecideCode.GDtutorialEmailObjects3= [];
gdjs.DecideCode.GDeMailObjects1= [];
gdjs.DecideCode.GDeMailObjects2= [];
gdjs.DecideCode.GDeMailObjects3= [];
gdjs.DecideCode.GDNewSpriteObjects1= [];
gdjs.DecideCode.GDNewSpriteObjects2= [];
gdjs.DecideCode.GDNewSpriteObjects3= [];
gdjs.DecideCode.GDlogoObjects1= [];
gdjs.DecideCode.GDlogoObjects2= [];
gdjs.DecideCode.GDlogoObjects3= [];


gdjs.DecideCode.mapOfGDgdjs_9546DecideCode_9546GDlogoObjects1Objects = Hashtable.newFrom({"logo": gdjs.DecideCode.GDlogoObjects1});
gdjs.DecideCode.mapOfGDgdjs_9546DecideCode_9546GDtutorialEmailObjects1Objects = Hashtable.newFrom({"tutorialEmail": gdjs.DecideCode.GDtutorialEmailObjects1});
gdjs.DecideCode.mapOfGDgdjs_9546DecideCode_9546GDeMailObjects1Objects = Hashtable.newFrom({"eMail": gdjs.DecideCode.GDeMailObjects1});
gdjs.DecideCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.DecideCode.GDeMailObjects1, gdjs.DecideCode.GDeMailObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(0).setString((( gdjs.DecideCode.GDeMailObjects2.length === 0 ) ? "" :gdjs.DecideCode.GDeMailObjects2[0].getText()));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0))).endsWith("@nejanet.hu");
if (isConditionTrue_0) {
/* Reuse gdjs.DecideCode.GDeMailObjects1 */
/* Reuse gdjs.DecideCode.GDtutorialEmailObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.DecideCode.GDtutorialEmailObjects1.length ;i < len;++i) {
    gdjs.DecideCode.GDtutorialEmailObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.DecideCode.GDeMailObjects1.length ;i < len;++i) {
    gdjs.DecideCode.GDeMailObjects1[i].hide();
}
}}

}


};gdjs.DecideCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("eMail"), gdjs.DecideCode.GDeMailObjects1);
gdjs.copyArray(runtimeScene.getObjects("tutorialEmail"), gdjs.DecideCode.GDtutorialEmailObjects1);
{for(var i = 0, len = gdjs.DecideCode.GDtutorialEmailObjects1.length ;i < len;++i) {
    gdjs.DecideCode.GDtutorialEmailObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.DecideCode.GDeMailObjects1.length ;i < len;++i) {
    gdjs.DecideCode.GDeMailObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("eMail"), gdjs.DecideCode.GDeMailObjects1);
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.DecideCode.GDlogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("tutorialEmail"), gdjs.DecideCode.GDtutorialEmailObjects1);
{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.DecideCode.mapOfGDgdjs_9546DecideCode_9546GDlogoObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.DecideCode.mapOfGDgdjs_9546DecideCode_9546GDtutorialEmailObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.DecideCode.mapOfGDgdjs_9546DecideCode_9546GDeMailObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.DecideCode.GDtutorialEmailObjects1.length ;i < len;++i) {
    gdjs.DecideCode.GDtutorialEmailObjects1[i].setY(gdjs.DecideCode.GDtutorialEmailObjects1[i].getY() - (150));
}
}{for(var i = 0, len = gdjs.DecideCode.GDeMailObjects1.length ;i < len;++i) {
    gdjs.DecideCode.GDeMailObjects1[i].setY(gdjs.DecideCode.GDeMailObjects1[i].getY() + (150));
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).getChild("score").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "sajtosfaszanyád";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("eMail"), gdjs.DecideCode.GDeMailObjects1);
gdjs.copyArray(runtimeScene.getObjects("tutorialEmail"), gdjs.DecideCode.GDtutorialEmailObjects1);
{for(var i = 0, len = gdjs.DecideCode.GDtutorialEmailObjects1.length ;i < len;++i) {
    gdjs.DecideCode.GDtutorialEmailObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.DecideCode.GDeMailObjects1.length ;i < len;++i) {
    gdjs.DecideCode.GDeMailObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.DecideCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "sajtosfaszanyád");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12232052);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("storage", "email", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "highscore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}{gdjs.evtTools.firebaseTools.firestore.writeField("Leaderboard", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), "email", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), gdjs.VariablesContainer.badVariable, true);
}{gdjs.evtTools.firebaseTools.firestore.writeDocument("Leaderboard", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}{gdjs.evtTools.firebaseTools.firestore.writeField("Leaderboard", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), "email", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), gdjs.VariablesContainer.badVariable, true);
}}

}


{



}


};

gdjs.DecideCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DecideCode.GDtutorialEmailObjects1.length = 0;
gdjs.DecideCode.GDtutorialEmailObjects2.length = 0;
gdjs.DecideCode.GDtutorialEmailObjects3.length = 0;
gdjs.DecideCode.GDeMailObjects1.length = 0;
gdjs.DecideCode.GDeMailObjects2.length = 0;
gdjs.DecideCode.GDeMailObjects3.length = 0;
gdjs.DecideCode.GDNewSpriteObjects1.length = 0;
gdjs.DecideCode.GDNewSpriteObjects2.length = 0;
gdjs.DecideCode.GDNewSpriteObjects3.length = 0;
gdjs.DecideCode.GDlogoObjects1.length = 0;
gdjs.DecideCode.GDlogoObjects2.length = 0;
gdjs.DecideCode.GDlogoObjects3.length = 0;

gdjs.DecideCode.eventsList1(runtimeScene);

return;

}

gdjs['DecideCode'] = gdjs.DecideCode;
