(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TC_TScene__SceneEnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(56.6,1,1).dr(-960,-600,1920,1200);
	this.shape.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__SceneEnd, new cjs.Rectangle(-28.3,-28.3,1976.6,1256.6), null);


(lib.TC_TObject__QuestionMask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.098)").s().dr(-867.55,-146.1,1735.1,292.2);
	this.shape.setTransform(867.5,146.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__QuestionMask, new cjs.Rectangle(0,0,1735.1,292.2), null);


(lib.TC_TObject__ListMask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,255,0.047)").s().dr(-867.55,-146.1,1735.1,292.2);
	this.shape.setTransform(867.5,146.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__ListMask, new cjs.Rectangle(0,0,1735.1,292.2), null);


(lib.TC_TObject__SubmitBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s("#0000CC").ss(3,1,1).rr(-277.85,-85.35,555.7,170.7,15);
	this.shape.setTransform(277.8,85.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__SubmitBG, new cjs.Rectangle(-1.5,-1.5,558.7,173.7), null);


(lib.TC_TObject__GroupBorder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).dr(-830.1,-48.3,1660.2,96.6);
	this.shape.setTransform(830.1,48.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__GroupBorder, new cjs.Rectangle(-1,-1,1662.2,98.6), null);


(lib.TC_TObject__radioUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(4,1,1).p("AHMo0IuXAAQhkAAAABkIAAOhQAABkBkAAIOXAAQBkAAAAhkIAAuhQAAhkhkAAg");
	this.shape.setTransform(56,56.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnLI1QhkAAAAhkIAAuhQAAhkBkAAIOXAAQBkAAAABkIAAOhQAABkhkAAg");
	this.shape_1.setTransform(56,56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__radioUp, new cjs.Rectangle(-2,-2,116,117), null);


(lib.TC_TObject__radioOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.298)").s("rgba(102,102,102,0.498)").ss(4,1,1).rr(-56,-56.5,112,113,10);
	this.shape.setTransform(56,56.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__radioOver, new cjs.Rectangle(-2,-2,116,117), null);


(lib.TC_TObject__radioFocus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(4.5,1,1).rr(-69.5,-69.5,139,139,20);
	this.shape.setTransform(69.5,69.5,1.251,1.251);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__radioFocus, new cjs.Rectangle(-19.7,-19.7,178.4,178.4), null);


(lib.TC_TObject__radioDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0099FF","#00FFFF"],[0,1],-56,0,56,0).s("#000033").ss(4,1,1).rr(-56,-56.5,112,113,10);
	this.shape.setTransform(56,56.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__radioDown, new cjs.Rectangle(-2,-2,116,117), null);


(lib.TC_TObject__radioDisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(4,1,1).rr(-56,-56.5,112,113,10);
	this.shape.setTransform(56,56.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__radioDisabled, new cjs.Rectangle(-2,-2,116,117), null);


(lib.TC_TObject__radioBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#333333").ss(2,1,1).rr(-69.5,-69.5,139,139,20);
	this.shape.setTransform(69.5,69.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__radioBox, new cjs.Rectangle(-1,-1,141,141), null);


(lib.TC_TObject__CBHit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(142,142,142,0.008)").s().dr(-452.85,-91,905.7,182);
	this.shape.setTransform(452.9,91);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__CBHit, new cjs.Rectangle(0,0,905.7,182), null);


(lib.ef_TutorModule = function(options) {
	this._element = new $.ef.TutorModule(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.SceneRegion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// region
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).dr(-406.5,-337,813,674);
	this.shape.setTransform(958.8,549.4,2.264,1.51,0,0,0,-0.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s("#000066").ss(2.5,1,1).rc(-960,-600,1920,1200,10,10,-123,-123);
	this.shape_1.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.SceneRegion, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TObject__NavBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5E9FD").s("#AAAAAA").ss(2.5,1,1).rr(-960,-600,1920,1200,10);
	this.shape.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__NavBackground, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TObject__contentFrame3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rc(-866.5,-523.4,1733,1046.8,11.4,11.4,-113,-113);
	this.shape.setTransform(866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__contentFrame3, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.TC_TObject__contentFrame2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rc(-866.5,-523.4,1733,1046.8,11.4,11.4,-113,11.4);
	this.shape.setTransform(866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__contentFrame2, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.TC_TObject__contentFrame1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rc(-866.5,-523.4,1733,1046.8,11.4,11.4,11.4,-113);
	this.shape.setTransform(866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__contentFrame1, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.TC_TObject__contentFrame0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rr(-866.5,-523.4,1733,1046.8,11.4);
	this.shape.setTransform(866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__contentFrame0, new cjs.Rectangle(-1,-1,1735,1048.8), null);


(lib.NextOutline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(35.8,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextOutline, new cjs.Rectangle(-17.8,-17.8,114.2,77.6), null);


(lib.NextButtonFocus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EEEEEE").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEEE").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonFocus, new cjs.Rectangle(-15,-15,108.5,71.9), null);


(lib.NextButtonDisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EEEEEE").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_2.setTransform(39,11);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape_3.setTransform(39,-77,1,1,90);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonDisabled, new cjs.Rectangle(-52.3,-126,182.6,228.3), null);


(lib.SpinOutline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(35.8,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpinOutline, new cjs.Rectangle(-17.8,-17.8,114.2,77.6), null);


(lib.TextArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s("#CCCCCC").ss(1,1,1).dr(-50,-50,100,100);
	this.shape.setTransform(50,50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TextArea, new cjs.Rectangle(-1,-1,102,102), null);


(lib.TC_TMatsCheck__RadioButtons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// instance
	this.instance = new lib.TC_TObject__radioUp();
	this.instance.name = "instance";
	this.instance.parent = this;
	this.instance.setTransform(87,87,1,1,0,0,0,56,56.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// instance_1
	this.instance_1 = new lib.TC_TObject__radioOver();
	this.instance_1.name = "instance_1";
	this.instance_1.parent = this;
	this.instance_1.setTransform(87,87,1,1,0,0,0,56,56.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(4));

	// instance_2
	this.instance_2 = new lib.TC_TObject__radioDown();
	this.instance_2.name = "instance_2";
	this.instance_2.parent = this;
	this.instance_2.setTransform(87,87,1,1,0,0,0,56,56.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(3));

	// instance_3
	this.instance_3 = new lib.TC_TObject__radioDisabled();
	this.instance_3.name = "instance_3";
	this.instance_3.parent = this;
	this.instance_3.setTransform(87,87,1,1,0,0,0,56,56.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(2));

	// Schecked
	this.Schecked = new lib.TC_TObject__radioDown();
	this.Schecked.name = "Schecked";
	this.Schecked.parent = this;
	this.Schecked.setTransform(87,87,1,1,0,0,0,56,56.5);
	this.Schecked._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Schecked).wait(4).to({_off:false},0).wait(1));

	// Slabel
	this.Slabel = new cjs.Text("Sample", "bold 85px 'PT Sans'");
	this.Slabel.name = "Slabel";
	this.Slabel.lineHeight = 112;
	this.Slabel.lineWidth = 1948;
	this.Slabel.parent = this;
	this.Slabel.setTransform(199.4,33.2);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(5));

	// Scheck_FB
	this.Scheck_FB = new lib.TC_TObject__radioFocus();
	this.Scheck_FB.name = "Scheck_FB";
	this.Scheck_FB.parent = this;
	this.Scheck_FB.setTransform(87,87,1,1,0,0,0,69.5,69.5);

	this.timeline.addTween(cjs.Tween.get(this.Scheck_FB).wait(5));

	// Scheck_BG
	this.Scheck_BG = new lib.TC_TObject__radioBox();
	this.Scheck_BG.name = "Scheck_BG";
	this.Scheck_BG.parent = this;
	this.Scheck_BG.setTransform(87,87,1,1,0,0,0,69.5,69.5);

	this.timeline.addTween(cjs.Tween.get(this.Scheck_BG).wait(5));

	// Scheck_HR
	this.Scheck_HR = new lib.TC_TObject__CBHit();
	this.Scheck_HR.name = "Scheck_HR";
	this.Scheck_HR.parent = this;
	this.Scheck_HR.setTransform(1182.2,87.5,2.61,0.962,0,0,0,452.9,91);

	this.timeline.addTween(cjs.Tween.get(this.Scheck_HR).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,2366.3,178.4);


(lib.TC_TButtonGroup__Groups = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.Sborder = new lib.TC_TObject__GroupBorder();
	this.Sborder.name = "Sborder";
	this.Sborder.parent = this;
	this.Sborder.setTransform(830.1,48.3,1,1,0,0,0,830.1,48.3);
	new cjs.ButtonHelper(this.Sborder, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Sborder).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TButtonGroup__Groups, new cjs.Rectangle(-1,-1,1662.2,98.6), null);


(lib.TC_TButton__SubmitButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Slabel = new cjs.Text("Submit", "bold 85px 'PT Sans'", "#FFFFFF");
	this.Slabel.name = "Slabel";
	this.Slabel.lineHeight = 112;
	this.Slabel.lineWidth = 262;
	this.Slabel.parent = this;
	this.Slabel.setTransform(147,30.4);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(4));

	// Layer_1
	this.shape = new lib.TC_TObject__SubmitBG();
	this.shape.name = "shape";
	this.shape.parent = this;
	this.shape.setTransform(277.8,85.4,1,1,0,0,0,277.8,85.4);
	new cjs.ButtonHelper(this.shape, 0, 1, 1);

	this.shape_1 = new lib.TC_TObject__SubmitBG();
	this.shape_1.name = "shape_1";
	this.shape_1.parent = this;
	this.shape_1.setTransform(277.8,85.4,1,1,0,0,0,277.8,85.4);
	new cjs.ButtonHelper(this.shape_1, 0, 1, 1);

	this.shape_2 = new lib.TC_TObject__SubmitBG();
	this.shape_2.name = "shape_2";
	this.shape_2.parent = this;
	this.shape_2.setTransform(277.8,85.4,1,1,0,0,0,277.8,85.4);
	new cjs.ButtonHelper(this.shape_2, 0, 1, 1);

	this.shape_3 = new lib.TC_TObject__SubmitBG();
	this.shape_3.name = "shape_3";
	this.shape_3.parent = this;
	this.shape_3.setTransform(277.8,85.4,1,1,0,0,0,277.8,85.4);
	new cjs.ButtonHelper(this.shape_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,558.7,173.7);


(lib.TC_TButton__StartButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Slabel = new cjs.Text("Start", "bold 85px 'PT Sans'", "#FFFFFF");
	this.Slabel.name = "Slabel";
	this.Slabel.textAlign = "center";
	this.Slabel.lineHeight = 112;
	this.Slabel.lineWidth = 262;
	this.Slabel.parent = this;
	this.Slabel.setTransform(277.8,30.4);

	this.timeline.addTween(cjs.Tween.get(this.Slabel).wait(4));

	// Layer_1
	this.shape = new lib.TC_TObject__SubmitBG();
	this.shape.name = "shape";
	this.shape.parent = this;
	this.shape.setTransform(277.8,85.4,1,1,0,0,0,277.8,85.4);
	new cjs.ButtonHelper(this.shape, 0, 1, 1);

	this.shape_1 = new lib.TC_TObject__SubmitBG();
	this.shape_1.name = "shape_1";
	this.shape_1.parent = this;
	this.shape_1.setTransform(277.8,85.4,1,1,0,0,0,277.8,85.4);
	new cjs.ButtonHelper(this.shape_1, 0, 1, 1);

	this.shape_2 = new lib.TC_TObject__SubmitBG();
	this.shape_2.name = "shape_2";
	this.shape_2.parent = this;
	this.shape_2.setTransform(277.8,85.4,1,1,0,0,0,277.8,85.4);
	new cjs.ButtonHelper(this.shape_2, 0, 1, 1);

	this.shape_3 = new lib.TC_TObject__SubmitBG();
	this.shape_3.name = "shape_3";
	this.shape_3.parent = this;
	this.shape_3.setTransform(277.8,85.4,1,1,0,0,0,277.8,85.4);
	new cjs.ButtonHelper(this.shape_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,558.7,173.7);


(lib.TC_TVirtual__SceneRgn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// region
	this.instance = new lib.TC_TObject__contentFrame2();
	this.instance.parent = this;
	this.instance.setTransform(960,595.4,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(210,210,210,0.047)").s("#000066").ss(2.5,1,1).rr(-960,-600,1920,1200,10);
	this.shape.setTransform(960,600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TVirtual__SceneRgn, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TObject__navnexthit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonFocus();
	this.instance.parent = this;
	this.instance.setTransform(150,86,1,1,-90,0,0,39.2,20.9);

	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140,86,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnexthit, new cjs.Rectangle(0,-5.3,231.3,182.6), null);


(lib.TC_TObject__navnextdisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// NextButtonDisabled
	this.instance = new lib.NextButtonDisabled();
	this.instance.parent = this;
	this.instance.setTransform(150,86,1,1,-90,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// NEXT
	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.alpha = 0.00000000;
	this.text.parent = this;
	this.text.setTransform(52,71.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140,86,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnextdisabled, new cjs.Rectangle(0,-5.3,231.3,182.8), null);


(lib.TC_TObject__navbackhit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// NextButtonFocus
	this.instance = new lib.NextButtonFocus();
	this.instance.parent = this;
	this.instance.setTransform(76.1,86,1,1,0,90,-90,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(86,86,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackhit, new cjs.Rectangle(-5.3,-5.3,228.3,182.6), null);


(lib.TC_TObject__navbackdisabled = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonDisabled();
	this.instance.parent = this;
	this.instance.setTransform(76.1,86,1,1,0,90,-90,39.2,20.9);

	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(86,86,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackdisabled, new cjs.Rectangle(-5.3,-5.3,228.3,182.8), null);


(lib.NextButtonUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF8000").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8000").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Outline
	this.instance = new lib.NextOutline();
	this.instance.parent = this;
	this.instance.setTransform(39.2,20.9,1,1,0,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonUp, new cjs.Rectangle(-17.8,-17.8,114.2,77.6), null);


(lib.NextButtonOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Outline
	this.instance = new lib.SpinOutline();
	this.instance.parent = this;
	this.instance.setTransform(39.2,20.9,1,1,0,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonOver, new cjs.Rectangle(-17.8,-17.8,114.2,77.6), null);


(lib.NextButtonDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(30,1,1).p("AmHjRIMPAAImIGjg");
	this.shape.setTransform(39.2,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AmHjRIMPAAImIGjg");
	this.shape_1.setTransform(39.2,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Outline
	this.instance = new lib.SpinOutline();
	this.instance.parent = this;
	this.instance.setTransform(39.2,20.9,1,1,0,0,0,39.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.NextButtonDown, new cjs.Rectangle(-17.8,-17.8,114.2,77.6), null);


(lib.TC_THtmlText__Text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.SControlContainer = new lib.TextArea();
	this.SControlContainer.name = "SControlContainer";
	this.SControlContainer.parent = this;
	this.SControlContainer.setTransform(45.6,63.5,1.09,1.208,0,0,0,50,50.1);

	this.timeline.addTween(cjs.Tween.get(this.SControlContainer).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_THtmlText__Text1, new cjs.Rectangle(-9.5,2.4,110.1,122), null);


(lib.TC_TScene__Submit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Ssubmit = new lib.TC_TButton__SubmitButton();
	this.Ssubmit.name = "Ssubmit";
	this.Ssubmit.parent = this;
	this.Ssubmit.setTransform(682.2,492.2);
	new cjs.ButtonHelper(this.Ssubmit, 0, 1, 2, false, new lib.TC_TButton__SubmitButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Ssubmit).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Submit, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__SceneStart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Sstart = new lib.TC_TButton__StartButton();
	this.Sstart.name = "Sstart";
	this.Sstart.parent = this;
	this.Sstart.setTransform(682.2,492.2);
	new cjs.ButtonHelper(this.Sstart, 0, 1, 2, false, new lib.TC_TButton__StartButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Sstart).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__SceneStart, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Scene1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Sg1ans4 = new lib.TC_TMatsCheck__RadioButtons();
	this.Sg1ans4.name = "Sg1ans4";
	this.Sg1ans4.parent = this;
	this.Sg1ans4.setTransform(527.2,996.1,0.415,0.415);
	new cjs.ButtonHelper(this.Sg1ans4, 0, 1, 2, false, new lib.TC_TMatsCheck__RadioButtons(), 3);

	this.Sg1ans3 = new lib.TC_TMatsCheck__RadioButtons();
	this.Sg1ans3.name = "Sg1ans3";
	this.Sg1ans3.parent = this;
	this.Sg1ans3.setTransform(527.2,879.6,0.415,0.415);
	new cjs.ButtonHelper(this.Sg1ans3, 0, 1, 2, false, new lib.TC_TMatsCheck__RadioButtons(), 3);

	this.Sg1ans2 = new lib.TC_TMatsCheck__RadioButtons();
	this.Sg1ans2.name = "Sg1ans2";
	this.Sg1ans2.parent = this;
	this.Sg1ans2.setTransform(527.2,763,0.415,0.415);
	new cjs.ButtonHelper(this.Sg1ans2, 0, 1, 2, false, new lib.TC_TMatsCheck__RadioButtons(), 3);

	this.Sg1ans1 = new lib.TC_TMatsCheck__RadioButtons();
	this.Sg1ans1.name = "Sg1ans1";
	this.Sg1ans1.parent = this;
	this.Sg1ans1.setTransform(527.2,646.5,0.415,0.415);
	new cjs.ButtonHelper(this.Sg1ans1, 0, 1, 2, false, new lib.TC_TMatsCheck__RadioButtons(), 3);

	this.Sg1 = new lib.TC_TButtonGroup__Groups();
	this.Sg1.name = "Sg1";
	this.Sg1.parent = this;
	this.Sg1.setTransform(947.2,860.7,0.588,4.511,0,0,0,830.2,49);

	this.Squestion3 = new lib.TC_THtmlText__Text1();
	this.Squestion3.name = "Squestion3";
	this.Squestion3.parent = this;
	this.Squestion3.setTransform(1030.1,541.3,13.878,0.775,0,0,0,50.6,50.1);

	this.Squestion2 = new lib.TC_THtmlText__Text1();
	this.Squestion2.name = "Squestion2";
	this.Squestion2.parent = this;
	this.Squestion2.setTransform(1138.7,305.4,11.742,2.274,0,0,0,50.1,50.1);

	this.Squestion1 = new lib.TC_THtmlText__Text1();
	this.Squestion1.name = "Squestion1";
	this.Squestion1.parent = this;
	this.Squestion1.setTransform(1024.5,127.6,12.512,0.686,0,0,0,50.7,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Squestion1},{t:this.Squestion2},{t:this.Squestion3},{t:this.Sg1},{t:this.Sg1ans1},{t:this.Sg1ans2},{t:this.Sg1ans3},{t:this.Sg1ans4}]}).wait(1));

	// TC_TObject__ListMask
	this.instance = new lib.TC_TObject__QuestionMask();
	this.instance.parent = this;
	this.instance.setTransform(959.7,552.4,1,0.326,0,0,0,867.5,146);

	this.instance_1 = new lib.TC_TObject__ListMask();
	this.instance_1.parent = this;
	this.instance_1.setTransform(959.7,337.2,1,1,0,0,0,867.5,146.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.instance_2 = new lib.TC_TVirtual__SceneRgn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Scene1, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TScene__Intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.Stitle = new lib.TC_THtmlText__Text1();
	this.Stitle.name = "Stitle";
	this.Stitle.parent = this;
	this.Stitle.setTransform(1027.1,485.7,13.543,7.277,0,0,0,50.5,50);

	this.timeline.addTween(cjs.Tween.get(this.Stitle).wait(1));

	// Layer_1
	this.instance = new lib.TC_TVirtual__SceneRgn();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TScene__Intro, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


(lib.TC_TObject__navnextup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonUp();
	this.instance.parent = this;
	this.instance.setTransform(150,86,1,1,-90,0,0,39.2,20.9);

	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140,86,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnextup, new cjs.Rectangle(0,-5.3,231.3,182.6), null);


(lib.TC_TObject__navnextover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonOver();
	this.instance.parent = this;
	this.instance.setTransform(150,86,1,1,-90,0,0,39.2,20.9);

	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140,86,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnextover, new cjs.Rectangle(0,-5.3,231.3,182.6), null);


(lib.TC_TObject__navnextdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonDown();
	this.instance.parent = this;
	this.instance.setTransform(150,86,1,1,-90,0,0,39.2,20.9);

	this.text = new cjs.Text("NEXT", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(52,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(49,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(140,86,1,1,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navnextdown, new cjs.Rectangle(0,-5.3,231.3,182.6), null);


(lib.TC_TObject__navbackup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonUp();
	this.instance.parent = this;
	this.instance.setTransform(76.1,86,1,1,0,90,-90,39.2,20.9);

	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(86,86,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackup, new cjs.Rectangle(-5.3,-5.3,228.3,182.6), null);


(lib.TC_TObject__navbackover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonOver();
	this.instance.parent = this;
	this.instance.setTransform(76.1,86,1,1,0,90,-90,39.2,20.9);

	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(86,86,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackover, new cjs.Rectangle(-5.3,-5.3,228.3,182.6), null);


(lib.TC_TObject__navbackdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.NextButtonDown();
	this.instance.parent = this;
	this.instance.setTransform(76.1,86,1,1,0,90,-90,39.2,20.9);

	this.text = new cjs.Text("BACK", "bold 20px 'Arial Black'", "#D6D6D6");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(171,71.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-49,-16.6,98,33.2);
	this.shape.setTransform(168,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#EEEEEE").ss(10.6,1,1).de(-86,-86,172,172);
	this.shape_1.setTransform(86,86,1,1,0,90,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TObject__navbackdown, new cjs.Rectangle(-5.3,-5.3,228.3,182.6), null);


(lib.TC_TButton__PrevButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SpinButtonUp
	this.instance = new lib.TC_TObject__navbackup();
	this.instance.parent = this;
	this.instance.setTransform(61.9,11,1,1,0,0,0,108.9,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

	// SpinButtonOver
	this.instance_1 = new lib.TC_TObject__navbackover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.9,11,1,1,0,0,0,108.9,86);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// SpinButtonDown
	this.instance_2 = new lib.TC_TObject__navbackdown();
	this.instance_2.parent = this;
	this.instance_2.setTransform(61.9,11,1,1,0,0,0,108.9,86);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// SpinButtonFocus
	this.instance_3 = new lib.TC_TObject__navbackhit();
	this.instance_3.parent = this;
	this.instance_3.setTransform(61.9,11,1,1,0,0,0,108.9,86);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// SpinButtonDisabled
	this.instance_4 = new lib.TC_TObject__navbackdisabled();
	this.instance_4.parent = this;
	this.instance_4.setTransform(61.9,11.1,1,1,0,0,0,108.9,86.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.3,-80.3,228.3,182.6);


(lib.TC_TButton__NextButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SpinButtonUp
	this.instance = new lib.TC_TObject__navnextup();
	this.instance.parent = this;
	this.instance.setTransform(14.7,11,1,1,0,0,0,115.7,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

	// SpinButtonOver
	this.instance_1 = new lib.TC_TObject__navnextover();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.7,11,1,1,0,0,0,115.7,86);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// SpinButtonDown
	this.instance_2 = new lib.TC_TObject__navnextdown();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.7,11,1,1,0,0,0,115.7,86);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// SpinButtonDisabled
	this.instance_3 = new lib.TC_TObject__navnextdisabled();
	this.instance_3.parent = this;
	this.instance_3.setTransform(14.7,11.1,1,1,0,0,0,115.7,86.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

	// SpinButtonFocus
	this.instance_4 = new lib.TC_TObject__navnexthit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(14.7,11,1,1,0,0,0,115.7,86);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101,-80.3,231.3,182.6);


(lib.TC_TNavPanel__Navigator = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SbreadCrumbs
	this.SbreadCrumbs = new lib.TC_THtmlText__Text1();
	this.SbreadCrumbs.name = "SbreadCrumbs";
	this.SbreadCrumbs.parent = this;
	this.SbreadCrumbs.setTransform(520.2,27.9,8.569,0.38,0,0,0,49.8,50.2);

	this.timeline.addTween(cjs.Tween.get(this.SbreadCrumbs).wait(1));

	// Snext
	this.Snext = new lib.TC_TButton__NextButton();
	this.Snext.name = "Snext";
	this.Snext.parent = this;
	this.Snext.setTransform(1782.9,1092.1);
	new cjs.ButtonHelper(this.Snext, 0, 1, 2, false, new lib.TC_TButton__NextButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Snext).wait(1));

	// Sback
	this.Sback = new lib.TC_TButton__PrevButton();
	this.Sback.name = "Sback";
	this.Sback.parent = this;
	this.Sback.setTransform(59.5,1092.1);
	new cjs.ButtonHelper(this.Sback, 0, 1, 2, false, new lib.TC_TButton__PrevButton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Sback).wait(1));

	// Smask3
	this.Smask3 = new lib.TC_TObject__contentFrame3();
	this.Smask3.name = "Smask3";
	this.Smask3.parent = this;
	this.Smask3.setTransform(960,587.5,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.Smask3).wait(1));

	// Smask2
	this.Smask2 = new lib.TC_TObject__contentFrame2();
	this.Smask2.name = "Smask2";
	this.Smask2.parent = this;
	this.Smask2.setTransform(960,587.5,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.Smask2).wait(1));

	// Smask1
	this.Smask1 = new lib.TC_TObject__contentFrame1();
	this.Smask1.name = "Smask1";
	this.Smask1.parent = this;
	this.Smask1.setTransform(960,587.5,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.Smask1).wait(1));

	// Smask0
	this.Smask0 = new lib.TC_TObject__contentFrame0();
	this.Smask0.name = "Smask0";
	this.Smask0.parent = this;
	this.Smask0.setTransform(960,587.5,1,1,0,0,0,866.5,523.4);

	this.timeline.addTween(cjs.Tween.get(this.Smask0).wait(1));

	// Sbackground
	this.Sbackground = new lib.TC_TObject__NavBackground();
	this.Sbackground.name = "Sbackground";
	this.Sbackground.parent = this;
	this.Sbackground.setTransform(275,200,1,1,0,0,0,275,200);

	this.timeline.addTween(cjs.Tween.get(this.Sbackground).wait(1));

}).prototype = getMCSymbolPrototype(lib.TC_TNavPanel__Navigator, new cjs.Rectangle(-1.2,-1.2,1922.5,1202.5), null);


// stage content:
(lib.EFMod_DedReason = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Scene Bounds
	this.instance = new lib.SceneRegion();
	this.instance.parent = this;
	this.instance.setTransform(960,600,1,1,0,0,0,960,600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Module Component
	this.instance_1 = new lib.ef_TutorModule({'id': 'instance_1', 'compositionID':'F741D3C91F2C4B8BDD17FF1BD3E14CCC'});

	this.instance_1.setTransform(960,600,1,1,0,0,0,50,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(958.8,598.8,1922.5,1202.5);
// library properties:
lib.properties = {
	id: 'F741D3C91F2C4B8BDD17FF1BD3E14CCC',
	width: 1920,
	height: 1200,
	fps: 24,
	color: "#FFFFCC",
	opacity: 1.00,
	manifest: [
		{src:"components/EFComponents/src/ef_loadManager.js", id:"EFComponents/src/ef_loadManager.js"},
		{src:"components/EFComponents/src/ef_module.js", id:"ef.TutorModule"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F741D3C91F2C4B8BDD17FF1BD3E14CCC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;