gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDTheBoardObjects1= [];
gdjs.LeaderboardCode.GDTheBoardObjects2= [];
gdjs.LeaderboardCode.GDTheBoardObjects3= [];
gdjs.LeaderboardCode.GDNewSpriteObjects1= [];
gdjs.LeaderboardCode.GDNewSpriteObjects2= [];
gdjs.LeaderboardCode.GDNewSpriteObjects3= [];
gdjs.LeaderboardCode.GDYour_9595ScoreObjects1= [];
gdjs.LeaderboardCode.GDYour_9595ScoreObjects2= [];
gdjs.LeaderboardCode.GDYour_9595ScoreObjects3= [];
gdjs.LeaderboardCode.GDlogoObjects1= [];
gdjs.LeaderboardCode.GDlogoObjects2= [];
gdjs.LeaderboardCode.GDlogoObjects3= [];
gdjs.LeaderboardCode.GDMenuObjects1= [];
gdjs.LeaderboardCode.GDMenuObjects2= [];
gdjs.LeaderboardCode.GDMenuObjects3= [];
gdjs.LeaderboardCode.GDbackgroundObjects1= [];
gdjs.LeaderboardCode.GDbackgroundObjects2= [];
gdjs.LeaderboardCode.GDbackgroundObjects3= [];


gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDTheBoardObjects1Objects = Hashtable.newFrom({"TheBoard": gdjs.LeaderboardCode.GDTheBoardObjects1});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDYour_95959595ScoreObjects1Objects = Hashtable.newFrom({"Your_Score": gdjs.LeaderboardCode.GDYour_9595ScoreObjects1});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDlogoObjects1Objects = Hashtable.newFrom({"logo": gdjs.LeaderboardCode.GDlogoObjects1});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.LeaderboardCode.GDMenuObjects1});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDbackgroundObjects1Objects = Hashtable.newFrom({"background": gdjs.LeaderboardCode.GDbackgroundObjects1});
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

};gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


const keyIteratorReference3 = runtimeScene.getScene().getVariables().get("i");
const valueIteratorReference3 = runtimeScene.getScene().getVariables().get("doc");
const iterableReference3 = runtimeScene.getScene().getVariables().get("FetchedData").getChild("docs");
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(gdjs.LeaderboardCode.GDTheBoardObjects1, gdjs.LeaderboardCode.GDTheBoardObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("i")) < 10);
}
if (isConditionTrue_0)
{
{for(var i = 0, len = gdjs.LeaderboardCode.GDTheBoardObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTheBoardObjects3[i].setString(gdjs.LeaderboardCode.GDTheBoardObjects3[i].getString() + (gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("i")) + 1) + ". " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("doc").getChild("data").getChild("email")) + " --- " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("doc").getChild("data").getChild("score")) + gdjs.evtTools.string.newLine()));
}
}}
}
}

}


{


const keyIteratorReference2 = runtimeScene.getScene().getVariables().get("i");
const valueIteratorReference2 = runtimeScene.getScene().getVariables().get("doc");
const iterableReference2 = runtimeScene.getScene().getVariables().get("FetchedData").getChild("docs");
if(!iterableReference2.isPrimitive()) {
for(
    const iteratorKey2 in 
    iterableReference2.getType() === "structure"
      ? iterableReference2.getAllChildren()
      : iterableReference2.getType() === "array"
        ? iterableReference2.getAllChildrenArray()
        : []
) {
    if(iterableReference2.getType() === "structure")
        keyIteratorReference2.setString(iteratorKey2);
    else if(iterableReference2.getType() === "array")
        keyIteratorReference2.setNumber(iteratorKey2);
    const structureChildVariable2 = iterableReference2.getChild(iteratorKey2)
    valueIteratorReference2.castTo(structureChildVariable2.getType())
    if(structureChildVariable2.isPrimitive()) {
        valueIteratorReference2.setValue(structureChildVariable2.getValue());
    } else if (structureChildVariable2.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference2.replaceChildren(structureChildVariable2.getAllChildren());
    } else if (structureChildVariable2.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference2.replaceChildrenArray(structureChildVariable2.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(gdjs.LeaderboardCode.GDYour_9595ScoreObjects1, gdjs.LeaderboardCode.GDYour_9595ScoreObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("doc").getChild("data").getChild("email")) == gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
if (isConditionTrue_0)
{
{for(var i = 0, len = gdjs.LeaderboardCode.GDYour_9595ScoreObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDYour_9595ScoreObjects2[i].setString(gdjs.LeaderboardCode.GDYour_9595ScoreObjects2[i].getString() + (gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("i")) + 1) + ". " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("doc").getChild("data").getChild("email")) + " --- " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("doc").getChild("data").getChild("score")) + gdjs.evtTools.string.newLine()));
}
}}
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.LeaderboardCode.GDMenuObjects1});
gdjs.LeaderboardCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.LeaderboardCode.GDMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("TheBoard"), gdjs.LeaderboardCode.GDTheBoardObjects1);
gdjs.copyArray(runtimeScene.getObjects("Your_Score"), gdjs.LeaderboardCode.GDYour_9595ScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.LeaderboardCode.GDbackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.LeaderboardCode.GDlogoObjects1);
{gdjs.evtTools.firebaseTools.firestore.startQuery("board", "Leaderboard");
}{gdjs.evtTools.firebaseTools.firestore.queryOrderBy("board", "score", "desc");
}{gdjs.evtTools.firebaseTools.firestore.watchQuery("board", runtimeScene.getScene().getVariables().get("FetchedData"), runtimeScene.getScene().getVariables().get("status"));
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDTheBoardObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDYour_95959595ScoreObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.LeaderboardCode.GDTheBoardObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTheBoardObjects1[i].setY(gdjs.LeaderboardCode.GDTheBoardObjects1[i].getY() - (70));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDYour_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDYour_9595ScoreObjects1[i].setY(gdjs.LeaderboardCode.GDYour_9595ScoreObjects1[i].getY() + (210));
}
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDlogoObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDMenuObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.LeaderboardCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDMenuObjects1[i].setY(gdjs.LeaderboardCode.GDMenuObjects1[i].getY() + (200));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDMenuObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDMenuObjects1[i].setX(gdjs.LeaderboardCode.GDMenuObjects1[i].getX() + (380));
}
}{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}{gdjs.evtsExt__AlignObject__ToSceneCentered.func(runtimeScene, gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDbackgroundObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.LeaderboardCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDbackgroundObjects1[i].setY(gdjs.LeaderboardCode.GDbackgroundObjects1[i].getY() - (25));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("status")) == "ok";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TheBoard"), gdjs.LeaderboardCode.GDTheBoardObjects1);
gdjs.copyArray(runtimeScene.getObjects("Your_Score"), gdjs.LeaderboardCode.GDYour_9595ScoreObjects1);
{runtimeScene.getScene().getVariables().get("status").setString("");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDTheBoardObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTheBoardObjects1[i].getBehavior("Text").setText("");
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDYour_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDYour_9595ScoreObjects1[i].getBehavior("Text").setText("Saját: ");
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDTheBoardObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTheBoardObjects1[i].getBehavior("Text").setText(gdjs.LeaderboardCode.GDTheBoardObjects1[i].getBehavior("Text").getText() + ("Eredmények" + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine()));
}
}
{ //Subevents
gdjs.LeaderboardCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.LeaderboardCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDMenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.LeaderboardCode.GDbackgroundObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDbackgroundObjects1[i].getBehavior("Opacity").setOpacity(225);
}
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDTheBoardObjects1.length = 0;
gdjs.LeaderboardCode.GDTheBoardObjects2.length = 0;
gdjs.LeaderboardCode.GDTheBoardObjects3.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects3.length = 0;
gdjs.LeaderboardCode.GDYour_9595ScoreObjects1.length = 0;
gdjs.LeaderboardCode.GDYour_9595ScoreObjects2.length = 0;
gdjs.LeaderboardCode.GDYour_9595ScoreObjects3.length = 0;
gdjs.LeaderboardCode.GDlogoObjects1.length = 0;
gdjs.LeaderboardCode.GDlogoObjects2.length = 0;
gdjs.LeaderboardCode.GDlogoObjects3.length = 0;
gdjs.LeaderboardCode.GDMenuObjects1.length = 0;
gdjs.LeaderboardCode.GDMenuObjects2.length = 0;
gdjs.LeaderboardCode.GDMenuObjects3.length = 0;
gdjs.LeaderboardCode.GDbackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDbackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDbackgroundObjects3.length = 0;

gdjs.LeaderboardCode.eventsList3(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
