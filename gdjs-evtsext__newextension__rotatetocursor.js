
gdjs.evtsExt__NewExtension__RotateToCursor = gdjs.evtsExt__NewExtension__RotateToCursor || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor = class RotateToCursor extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

// Methods:
gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.FunctionContext = {};
gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.FunctionContext.GDObjectObjects1= [];
gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.FunctionContext.GDObjectObjects2= [];

gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.FunctionContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.FunctionContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.FunctionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.FunctionContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.FunctionContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.FunctionContext.GDObjectObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}}

}


};

gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.Function = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.FunctionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.FunctionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.FunctionContext.eventsList0(runtimeScene, eventsFunctionContext);
return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("NewExtension::RotateToCursor", gdjs.evtsExt__NewExtension__RotateToCursor.RotateToCursor);
