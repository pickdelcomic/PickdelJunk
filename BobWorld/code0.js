gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.idToCallbackMap = new Map();
gdjs.MainCode.GDNewTiledSpriteObjects1= [];
gdjs.MainCode.GDNewTiledSpriteObjects2= [];
gdjs.MainCode.GDBY_9595pickdelObjects1= [];
gdjs.MainCode.GDBY_9595pickdelObjects2= [];
gdjs.MainCode.GDNewTiledSprite2Objects1= [];
gdjs.MainCode.GDNewTiledSprite2Objects2= [];
gdjs.MainCode.GDNewTiledSprite3Objects1= [];
gdjs.MainCode.GDNewTiledSprite3Objects2= [];
gdjs.MainCode.GDwipObjects1= [];
gdjs.MainCode.GDwipObjects2= [];
gdjs.MainCode.GD_9595_9595Bobs_9595_9595WorldObjects1= [];
gdjs.MainCode.GD_9595_9595Bobs_9595_9595WorldObjects2= [];
gdjs.MainCode.GDButton_9595emptyObjects1= [];
gdjs.MainCode.GDButton_9595emptyObjects2= [];
gdjs.MainCode.GDboxObjects1= [];
gdjs.MainCode.GDboxObjects2= [];
gdjs.MainCode.GDchoose_9595a_9595worldObjects1= [];
gdjs.MainCode.GDchoose_9595a_9595worldObjects2= [];
gdjs.MainCode.GDEmpty_9595WorldObjects1= [];
gdjs.MainCode.GDEmpty_9595WorldObjects2= [];
gdjs.MainCode.GDIsland_9595worldObjects1= [];
gdjs.MainCode.GDIsland_9595worldObjects2= [];
gdjs.MainCode.GDBlankObjects1= [];
gdjs.MainCode.GDBlankObjects2= [];
gdjs.MainCode.GDislandObjects1= [];
gdjs.MainCode.GDislandObjects2= [];


gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBlankObjects1Objects = Hashtable.newFrom({"Blank": gdjs.MainCode.GDBlankObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDislandObjects1Objects = Hashtable.newFrom({"island": gdjs.MainCode.GDislandObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDButton_95959595emptyObjects1Objects = Hashtable.newFrom({"Button_empty": gdjs.MainCode.GDButton_9595emptyObjects1});
gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDButton_95959595emptyObjects1Objects = Hashtable.newFrom({"Button_empty": gdjs.MainCode.GDButton_9595emptyObjects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.MainCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite3"), gdjs.MainCode.GDNewTiledSprite3Objects1);
{for(var i = 0, len = gdjs.MainCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewTiledSpriteObjects1[i].setXOffset(gdjs.MainCode.GDNewTiledSpriteObjects1[i].getXOffset() + (+(0.5)));
}
}
{for(var i = 0, len = gdjs.MainCode.GDNewTiledSprite3Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewTiledSprite3Objects1[i].setXOffset(gdjs.MainCode.GDNewTiledSprite3Objects1[i].getXOffset() + (+(0.5)));
}
}
{for(var i = 0, len = gdjs.MainCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDNewTiledSpriteObjects1[i].setYOffset(gdjs.MainCode.GDNewTiledSpriteObjects1[i].getYOffset() + (0.5));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Blank"), gdjs.MainCode.GDBlankObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDBlankObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Blankworld", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("island"), gdjs.MainCode.GDislandObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDislandObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "IslandWorld", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_empty"), gdjs.MainCode.GDButton_9595emptyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDButton_95959595emptyObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDButton_9595emptyObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDButton_9595emptyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDButton_9595emptyObjects1[i].getBehavior("Animation").setAnimationName("Button_On");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button_empty"), gdjs.MainCode.GDButton_9595emptyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_9546MainCode_9546GDButton_95959595emptyObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MainCode.GDButton_9595emptyObjects1 */
{for(var i = 0, len = gdjs.MainCode.GDButton_9595emptyObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDButton_9595emptyObjects1[i].getBehavior("Animation").setAnimationName("Button_Off");
}
}
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MainCode.GDBY_9595pickdelObjects1.length = 0;
gdjs.MainCode.GDBY_9595pickdelObjects2.length = 0;
gdjs.MainCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.MainCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.MainCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.MainCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.MainCode.GDwipObjects1.length = 0;
gdjs.MainCode.GDwipObjects2.length = 0;
gdjs.MainCode.GD_9595_9595Bobs_9595_9595WorldObjects1.length = 0;
gdjs.MainCode.GD_9595_9595Bobs_9595_9595WorldObjects2.length = 0;
gdjs.MainCode.GDButton_9595emptyObjects1.length = 0;
gdjs.MainCode.GDButton_9595emptyObjects2.length = 0;
gdjs.MainCode.GDboxObjects1.length = 0;
gdjs.MainCode.GDboxObjects2.length = 0;
gdjs.MainCode.GDchoose_9595a_9595worldObjects1.length = 0;
gdjs.MainCode.GDchoose_9595a_9595worldObjects2.length = 0;
gdjs.MainCode.GDEmpty_9595WorldObjects1.length = 0;
gdjs.MainCode.GDEmpty_9595WorldObjects2.length = 0;
gdjs.MainCode.GDIsland_9595worldObjects1.length = 0;
gdjs.MainCode.GDIsland_9595worldObjects2.length = 0;
gdjs.MainCode.GDBlankObjects1.length = 0;
gdjs.MainCode.GDBlankObjects2.length = 0;
gdjs.MainCode.GDislandObjects1.length = 0;
gdjs.MainCode.GDislandObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);
gdjs.MainCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MainCode.GDBY_9595pickdelObjects1.length = 0;
gdjs.MainCode.GDBY_9595pickdelObjects2.length = 0;
gdjs.MainCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.MainCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.MainCode.GDNewTiledSprite3Objects1.length = 0;
gdjs.MainCode.GDNewTiledSprite3Objects2.length = 0;
gdjs.MainCode.GDwipObjects1.length = 0;
gdjs.MainCode.GDwipObjects2.length = 0;
gdjs.MainCode.GD_9595_9595Bobs_9595_9595WorldObjects1.length = 0;
gdjs.MainCode.GD_9595_9595Bobs_9595_9595WorldObjects2.length = 0;
gdjs.MainCode.GDButton_9595emptyObjects1.length = 0;
gdjs.MainCode.GDButton_9595emptyObjects2.length = 0;
gdjs.MainCode.GDboxObjects1.length = 0;
gdjs.MainCode.GDboxObjects2.length = 0;
gdjs.MainCode.GDchoose_9595a_9595worldObjects1.length = 0;
gdjs.MainCode.GDchoose_9595a_9595worldObjects2.length = 0;
gdjs.MainCode.GDEmpty_9595WorldObjects1.length = 0;
gdjs.MainCode.GDEmpty_9595WorldObjects2.length = 0;
gdjs.MainCode.GDIsland_9595worldObjects1.length = 0;
gdjs.MainCode.GDIsland_9595worldObjects2.length = 0;
gdjs.MainCode.GDBlankObjects1.length = 0;
gdjs.MainCode.GDBlankObjects2.length = 0;
gdjs.MainCode.GDislandObjects1.length = 0;
gdjs.MainCode.GDislandObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
