var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class CONST {
        }
        CONST.TUTORCONTAINER = "STutorContainer";
        CONST.NAVNONE = 0;
        CONST.NAVBACK = 1;
        CONST.NAVNEXT = 2;
        CONST.NAVBOTH = 3;
        CONST.NEXTSCENE = "nextbutton";
        CONST.PREVSCENE = "prevbutton";
        CONST.HIDE = false;
        CONST.SHOW = true;
        CONST.NAVSCENE = "SCENE";
        CONST.NAVTUTOR = "TUTOR";
        CONST.MOUSE_MOVE = "mousemove";
        CONST.MOUSE_DOWN = "mousedown";
        CONST.MOUSE_UP = "mouseup";
        CONST.MOUSE_CLICK = "click";
        CONST.DOUBLE_CLICK = "dblclick";
        CONST.ALL = null;
        CONST.CLICK = "click";
        CONST.CHANGED = "changed";
        CONST.FTRS_ALL = null;
        CONST.VAR_FTR = "varsel";
        CONST.FTR_PRE = "FTR_PRE";
        CONST.FTR_DEV = "FTR_DEV";
        CONST.YELLOW = "#FFFF5488";
        CONST.BLUE = "#B6FFFF88";
        CONST.GREEN = "#54FF0088";
        CONST.RED = "#FF005488";
        CONST.NONE = "";
        EFMod_DedReason.CONST = CONST;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class $Common {
            $preCreateScene() { }
            $onCreateScene() { }
            $preEnterScene() { }
            $onEnterScene() { }
            $preExitScene() { }
            $onExitScene() { }
            $preShowScene() { }
            $preHideScene() { }
            $demoInitScene() { }
            $logScene() { }
            $rewindScene() { }
            $resolveTemplate(templID) { }
            $handleEvent() { }
            $nodePreEnter(nodeId) { }
            $nodePreExit(nodeId) { }
            $nodeAction(actionId) { }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(id) { }
            $timedEvents(id) { }
            $queryFinished() {
                let stateComplete = false;
                return stateComplete;
            }
            $canGoBack() {
                let stateComplete = true;
                return stateComplete;
            }
            $updateNav() {
                if (!this.$queryFinished())
                    this.enableNext(false);
                else
                    this.enableNext(true);
                if (!this.$canGoBack())
                    this.enableBack(false);
                else
                    this.enableBack(true);
            }
        }
        EFMod_DedReason.$Common = $Common;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class Globals {
        }
        EFMod_DedReason.Globals = Globals;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SIntro {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVNONE, EFMod_DedReason.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sg1":
                        this.setSceneValue(target, "true");
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_DedReason.SIntro = SIntro;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SNavigator {
            $preCreateScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVNONE, EFMod_DedReason.CONST.NAVSCENE);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
            }
            $preExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (cueID) {
                    case "$start":
                        break;
                    case "$end":
                        break;
                }
            }
            $timedEvents(id) {
            }
        }
        EFMod_DedReason.SNavigator = SNavigator;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SScene1 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVNEXT, EFMod_DedReason.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                let group = target.slice(0, 3);
                let button = target.slice(3);
                switch (group) {
                    case "Sg1":
                        this.setSceneValue(group, "true");
                        if (button.length)
                            this.setSceneValue("DR1:" + group, button);
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_DedReason.SScene1 = SScene1;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SScene2 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVBOTH, EFMod_DedReason.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                let group = target.slice(0, 3);
                let button = target.slice(3);
                switch (group) {
                    case "Sg1":
                        this.setSceneValue(group, "true");
                        if (button.length)
                            this.setSceneValue("DR2:" + group, button);
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_DedReason.SScene2 = SScene2;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SScene3 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVBOTH, EFMod_DedReason.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                let group = target.slice(0, 3);
                let button = target.slice(3);
                switch (group) {
                    case "Sg1":
                        this.setSceneValue(group, "true");
                        if (button.length)
                            this.setSceneValue("DR3:" + group, button);
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_DedReason.SScene3 = SScene3;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SScene4 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVBOTH, EFMod_DedReason.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                let group = target.slice(0, 3);
                let button = target.slice(3);
                switch (group) {
                    case "Sg1":
                        this.setSceneValue(group, "true");
                        if (button.length)
                            this.setSceneValue("DR4:" + group, button);
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_DedReason.SScene4 = SScene4;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SScene5 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVBOTH, EFMod_DedReason.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                let group = target.slice(0, 3);
                let button = target.slice(3);
                switch (group) {
                    case "Sg1":
                        this.setSceneValue(group, "true");
                        if (button.length)
                            this.setSceneValue("DR5:" + group, button);
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_DedReason.SScene5 = SScene5;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SScene6 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVBOTH, EFMod_DedReason.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                let group = target.slice(0, 3);
                let button = target.slice(3);
                switch (group) {
                    case "Sg1":
                        this.setSceneValue(group, "true");
                        if (button.length)
                            this.setSceneValue("DR6:" + group, button);
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_DedReason.SScene6 = SScene6;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SScene7 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVBOTH, EFMod_DedReason.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                let group = target.slice(0, 3);
                let button = target.slice(3);
                switch (group) {
                    case "Sg1":
                        this.setSceneValue(group, "true");
                        if (button.length)
                            this.setSceneValue("DR7:" + group, button);
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_DedReason.SScene7 = SScene7;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SScene8 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVBOTH, EFMod_DedReason.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                let group = target.slice(0, 3);
                let button = target.slice(3);
                switch (group) {
                    case "Sg1":
                        this.setSceneValue(group, "true");
                        if (button.length)
                            this.setSceneValue("DR8:" + group, button);
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_DedReason.SScene8 = SScene8;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SScene9 {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVBOTH, EFMod_DedReason.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = this.getSceneValue("complete");
                return result;
            }
            $onAction(target) {
                let group = target.slice(0, 3);
                let button = target.slice(3);
                switch (group) {
                    case "Sg1":
                        this.setSceneValue(group, "true");
                        if (button.length)
                            this.setSceneValue("DR9:" + group, button);
                        break;
                }
                this.setSceneValue("complete", this.querySceneProp(["Sg1"]));
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_DedReason.SScene9 = SScene9;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SSceneEnd {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVNONE, EFMod_DedReason.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = false;
                return result;
            }
            $onAction(target) {
                switch (target) {
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_DedReason.SSceneEnd = SSceneEnd;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SSceneStart {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVNONE, EFMod_DedReason.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = false;
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Sstart":
                        this.nextTrack("$onAction:" + this.graphState);
                        break;
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_DedReason.SSceneStart = SSceneStart;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
var EFTut_Suppl;
(function (EFTut_Suppl) {
    var EFMod_DedReason;
    (function (EFMod_DedReason) {
        class SSubmit {
            $preCreateScene() {
            }
            $onCreateScene() {
                this.setSceneValue("complete", false);
            }
            $onEnterScene() {
            }
            $preEnterScene() {
                this.setNavMode(EFMod_DedReason.CONST.NAVBACK, EFMod_DedReason.CONST.NAVSCENE);
            }
            $preShowScene() {
            }
            $preHideScene() {
            }
            $onExitScene() {
            }
            $demoInitScene() {
            }
            $logScene() {
            }
            $rewindScene() {
            }
            $resolveTemplate(templID) {
            }
            $handleEvent(compID) {
                console.log(compID);
            }
            $nodePreEnter(nodeId) {
            }
            $nodePreExit(nodeId) {
            }
            $nodeAction(actionId) {
                switch (actionId) {
                }
            }
            $nodeConstraint(constrainId) {
                let result = false;
                switch (constrainId) {
                }
                return result;
            }
            $cuePoints(trackID, cueID) {
                switch (trackID) {
                }
            }
            $timedEvents(id) {
            }
            $queryFinished() {
                let result = false;
                return result;
            }
            $onAction(target) {
                switch (target) {
                    case "Ssubmit":
                        this.nextTrack("$onAction:" + this.graphState);
                        break;
                }
            }
            $onSelect(target) {
                switch (target) {
                }
            }
            $onClick(target) {
                switch (target) {
                }
            }
        }
        EFMod_DedReason.SSubmit = SSubmit;
    })(EFMod_DedReason = EFTut_Suppl.EFMod_DedReason || (EFTut_Suppl.EFMod_DedReason = {}));
})(EFTut_Suppl || (EFTut_Suppl = {}));
//# sourceMappingURL=mixins.js.map