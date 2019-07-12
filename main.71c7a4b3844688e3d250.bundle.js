(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(module,__webpack_exports__,__webpack_require__){"use strict";function getTaskDescription(taskDataItem){var description=taskDataItem.description,imageUrl=taskDataItem.imageUrl,url=taskDataItem.url,pdfUrl=taskDataItem.pdfUrl;return description||(imageUrl?"![".concat(imageUrl,"](").concat(imageUrl,")"):pdfUrl?"Use this [PDF Link](".concat(pdfUrl,")"):url?"Use this [Link](".concat(url,")"):null)}__webpack_require__.d(__webpack_exports__,"a",function(){return getTaskDescription})},167:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_seve_workspace_universal_data_tool_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(111),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),material_survey_components_Survey__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(383),_utils_get_task_description_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(104),_SampleContainer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(58),DataEntry=function DataEntry(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),_useState2=Object(_home_seve_workspace_universal_data_tool_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),currentSampleIndex=_useState2[0],changeCurrentSampleIndex=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SampleContainer__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({},props.containerProps,{currentSampleIndex:currentSampleIndex,totalSamples:props.taskData.length,description:Object(_utils_get_task_description_js__WEBPACK_IMPORTED_MODULE_3__.a)(props.taskData[currentSampleIndex])||props.interface.description,onChangeSample:function onChangeSample(sampleIndex){return changeCurrentSampleIndex(sampleIndex)}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(material_survey_components_Survey__WEBPACK_IMPORTED_MODULE_2__.a,{key:currentSampleIndex,variant:"flat",form:props.taskData[currentSampleIndex].surveyjs||props.interface.surveyjs,completeText:"Save",onFinish:function onFinish(answers){props.onSaveTaskOutput(currentSampleIndex,answers)}}))};__webpack_exports__.a=DataEntry,DataEntry.__docgenInfo={description:"",methods:[],displayName:"DataEntry"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DataEntry/index.js"]={name:"DataEntry",docgenInfo:DataEntry.__docgenInfo,path:"src/components/DataEntry/index.js"})},175:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_seve_workspace_universal_data_tool_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(111),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_utils_get_task_description_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(104),_SampleContainer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(58),react_nlp_annotate_components_NLPAnnotator__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(177),TextClassification=function TextClassification(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),_useState2=Object(_home_seve_workspace_universal_data_tool_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),currentSampleIndex=_useState2[0],changeCurrentSampleIndex=_useState2[1],initialLabels=props.taskOutput&&props.taskOutput[currentSampleIndex]?[props.taskOutput[currentSampleIndex].label]||!1:void 0;return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SampleContainer__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},props.containerProps,{currentSampleIndex:currentSampleIndex,totalSamples:props.taskData.length,description:Object(_utils_get_task_description_js__WEBPACK_IMPORTED_MODULE_2__.a)(props.taskData[currentSampleIndex])||props.interface.description,onChangeSample:function onChangeSample(sampleIndex){return changeCurrentSampleIndex(sampleIndex)}}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_nlp_annotate_components_NLPAnnotator__WEBPACK_IMPORTED_MODULE_4__.a,{key:currentSampleIndex,type:"label-document",labels:props.interface.labels,multipleLabels:props.interface.multiple,document:props.taskData[currentSampleIndex].document,initialLabels:initialLabels,onFinish:function onFinish(result){props.onSaveTaskOutput(currentSampleIndex,result)}}))};__webpack_exports__.a=TextClassification,TextClassification.__docgenInfo={description:"",methods:[],displayName:"TextClassification"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextClassification/index.js"]={name:"TextClassification",docgenInfo:TextClassification.__docgenInfo,path:"src/components/TextClassification/index.js"})},176:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_seve_workspace_universal_data_tool_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(111),_home_seve_workspace_universal_data_tool_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(385),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_utils_get_task_description_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(104),_SampleContainer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(58),react_nlp_annotate_components_NLPAnnotator__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(177),simpleSequenceToEntitySequence=function simpleSequenceToEntitySequence(simpleSeq){console.log(simpleSeq);var entSeq=[],charsPassed=0,_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=simpleSeq[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var seq=_step.value;seq.label&&entSeq.push({text:seq.text,label:seq.label,start:charsPassed,end:charsPassed+seq.text.length}),charsPassed+=seq.text.length}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}return entSeq},TextEntityRecognition=function TextEntityRecognition(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),_useState2=Object(_home_seve_workspace_universal_data_tool_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),currentSampleIndex=_useState2[0],changeCurrentSampleIndex=_useState2[1],initialSequence=props.taskOutput&&props.taskOutput[currentSampleIndex]?function entitySequenceToSimpleSeq(doc,entSeq){if(entSeq){var simpleSeq=[];(entSeq=Object(_home_seve_workspace_universal_data_tool_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(entSeq)).sort(function(a,b){return a.start-b.start});for(var nextEntity=0,i=0;i<doc.length;i++)entSeq[nextEntity].start===i?(simpleSeq.push({text:entSeq[nextEntity].text,label:entSeq[nextEntity].label}),i=entSeq[nextEntity].end,nextEntity+=1):0===simpleSeq.length||simpleSeq[simpleSeq.length-1].label?simpleSeq.push({text:doc[i]}):simpleSeq[simpleSeq.length-1].text+=doc[i];return simpleSeq}}(props.taskData[currentSampleIndex].document,props.taskOutput[currentSampleIndex].entities):void 0;return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SampleContainer__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({},props.containerProps,{currentSampleIndex:currentSampleIndex,totalSamples:props.taskData.length,description:Object(_utils_get_task_description_js__WEBPACK_IMPORTED_MODULE_3__.a)(props.taskData[currentSampleIndex])||props.interface.description,onChangeSample:function onChangeSample(sampleIndex){return changeCurrentSampleIndex(sampleIndex)}}),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_nlp_annotate_components_NLPAnnotator__WEBPACK_IMPORTED_MODULE_5__.a,{key:currentSampleIndex,type:"label-sequence",document:props.taskData[currentSampleIndex].document,labels:props.interface.labels,initialSequence:initialSequence,onFinish:function onFinish(result){props.onSaveTaskOutput(currentSampleIndex,{entities:simpleSequenceToEntitySequence(result)})}}))};__webpack_exports__.a=TextEntityRecognition,TextEntityRecognition.__docgenInfo={description:"",methods:[],displayName:"TextEntityRecognition"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextEntityRecognition/index.js"]={name:"TextEntityRecognition",docgenInfo:TextEntityRecognition.__docgenInfo,path:"src/components/TextEntityRecognition/index.js"})},357:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(240),_material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(360),_material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_2__),_material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(361),_material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_3__),useStyles=(__webpack_require__(669),Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__.a)({container:{fontFamily:'"Inter UI", sans-serif'}})),theme=_material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_2___default()({typography:{fontFamily:'"Inter UI", "Roboto", sans-serif'},overrides:{MuiButton:{root:{textTransform:"none"}}}});__webpack_exports__.a=function(_ref){var children=_ref.children,classes=useStyles();return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_3___default.a,{theme:theme},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classes.container},children))}},382:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_TextClassification__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(175),_TextEntityRecognition__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(176),_DataEntry__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(167),UniversalDataViewer=function UniversalDataViewer(_ref){var oha=_ref.oha;switch(oha.interface.type){case"data_entry":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DataEntry__WEBPACK_IMPORTED_MODULE_3__.a,oha);case"text_classification":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextClassification__WEBPACK_IMPORTED_MODULE_1__.a,oha);case"text_entity_recognition":return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextEntityRecognition__WEBPACK_IMPORTED_MODULE_2__.a,oha);default:return'"'.concat(oha.interface.type,'" not supported')}};__webpack_exports__.a=UniversalDataViewer,UniversalDataViewer.__docgenInfo={description:"",methods:[],displayName:"UniversalDataViewer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UniversalDataViewer/index.js"]={name:"UniversalDataViewer",docgenInfo:UniversalDataViewer.__docgenInfo,path:"src/components/UniversalDataViewer/index.js"})},403:function(module,exports,__webpack_require__){__webpack_require__(404),__webpack_require__(507),module.exports=__webpack_require__(508)},508:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"themeDecorator",function(){return themeDecorator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_src_components_Theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(357);const themeDecorator=storyFn=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Theme__WEBPACK_IMPORTED_MODULE_2__.a,{},storyFn());Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(function loadStories(){Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(themeDecorator),(r=>r.keys().map(r))(__webpack_require__(689))},module),themeDecorator.__docgenInfo={description:"",methods:[],displayName:"themeDecorator"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/config.js"]={name:"themeDecorator",docgenInfo:themeDecorator.__docgenInfo,path:".storybook/config.js"})}.call(this,__webpack_require__(95)(module))},58:function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(825),_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(180),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(389),react_markdown__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(362),react_markdown__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__),useStyles=Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.a)({header:{display:"flex",padding:20,backgroundColor:"#f8f8f8",borderBottom:"1px solid #ccc",alignItems:"center"},title:{fontWeight:"bold"},buttons:{"& > *":{margin:4}},description:{padding:10,"& img":{maxWidth:"calc(100% - 200px)",maxHeight:600}},content:{padding:10}}),SampleContainer=function SampleContainer(_ref){var _ref$hideHeader=_ref.hideHeader,hideHeader=void 0!==_ref$hideHeader&&_ref$hideHeader,_ref$hideDescription=_ref.hideDescription,hideDescription=void 0!==_ref$hideDescription&&_ref$hideDescription,currentSampleIndex=_ref.currentSampleIndex,totalSamples=_ref.totalSamples,onChangeSample=_ref.onChangeSample,description=_ref.description,children=_ref.children,c=useStyles();return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__.a,{container:!0},!hideHeader&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__.a,{xs:12},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:c.header},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:c.title},"Sample ",currentSampleIndex+1," / ",totalSamples),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{flexGrow:1}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:c.buttons},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:function onClick(){return onChangeSample((currentSampleIndex-1+totalSamples)%totalSamples)},variant:"outlined"},"Prev"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__.a,{onClick:function onClick(){return onChangeSample((currentSampleIndex+1)%totalSamples)},variant:"outlined"},"Next")))),!hideDescription&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__.a,{xs:12,sm:12,md:6},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:c.description},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a,{escapeHtml:!1,source:description}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__.a,{xs:12,sm:12,md:hideDescription?12:6},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:c.content},children)))};__webpack_exports__.a=SampleContainer,SampleContainer.__docgenInfo={description:"",methods:[],displayName:"SampleContainer"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SampleContainer/index.js"]={name:"SampleContainer",docgenInfo:SampleContainer.__docgenInfo,path:"src/components/SampleContainer/index.js"})},669:function(module,exports,__webpack_require__){},689:function(module,exports,__webpack_require__){var map={"./DataEntry/index.story.js":690,"./SampleContainer/index.story.js":816,"./TextClassification/index.story.js":817,"./TextEntityRecognition/index.story.js":819,"./UniversalDataViewer/index.story.js":820};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=689},690:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(52),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(167);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("DataEntry",module).add("Basic",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__.a,{onSaveTaskOutput:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onSaveTaskOutput"),interface:{type:"data_entry",description:"Some task description",surveyjs:{pages:[{name:"page1",elements:[{type:"radiogroup",name:"group_letter",title:"Group Letter",choices:[{value:"A",text:"A"},{value:"B",text:"B"},{value:"C",text:"C"}]},{type:"text",name:"feedback",title:"Feedback"}]}]}},taskData:[{imageUrl:"https://s3.amazonaws.com/asset.workaround.online/example-jobs/sticky-notes/image1.jpg"},{imageUrl:"https://s3.amazonaws.com/asset.workaround.online/example-jobs/sticky-notes/image2.jpg"},{imageUrl:"https://s3.amazonaws.com/asset.workaround.online/example-jobs/sticky-notes/image3.jpg"}]})})}.call(this,__webpack_require__(95)(module))},816:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(52),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(58);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("SampleContainer",module).add("Basic",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__.a,{currentSampleIndex:0,totalSamples:10,onChangeSample:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onChangeSample"),description:"\n## Complete the task on the right\n\nOr just view the content.\n\n      ".trim()},"This is where the task data and interface goes.")}).add("Hide Title",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__.a,{currentSampleIndex:0,totalSamples:10,hideHeader:!0,onChangeSample:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onChangeSample"),description:"\n## Complete the task on the right\n\nOr just view the content.\n\n      ".trim()},"This is where the task data and interface goes.")}).add("Hide Description",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__.a,{currentSampleIndex:0,totalSamples:10,hideDescription:!0,onChangeSample:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onChangeSample"),description:"\n## Complete the task on the right\n\nOr just view the content.\n\n      ".trim()},"This is where the task data and interface goes.")})}.call(this,__webpack_require__(95)(module))},817:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(52),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(175);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TextClassification",module).add("Basic",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__.a,{onSaveTaskOutput:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onSaveTaskOutput"),interface:{type:"data_entry",description:"Classify the person name into the correct house.",labels:[{id:"gryffindor",displayName:"Gryffindor",description:"Daring, strong nerve and chivalry."},{id:"slytherin",displayName:"Slytherin",description:"Cunning and ambitious. Possibly dark wizard."}]},taskData:[{document:"Harry"},{document:"Malfoy"}],taskOutput:[{label:"gryffindor"},null]})})}.call(this,__webpack_require__(95)(module))},819:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(52),___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(176);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("TextEntityRecognition",module).add("Basic",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__.a,{onSaveTaskOutput:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onSaveTaskOutput"),interface:{type:"text_entity_recognition",description:"Label words or phrases as food or hat.",overlapAllowed:!1,labels:[{id:"food",displayName:"Food",description:"Edible item."},{id:"hat",displayName:"Hat",description:"Something worn on the head."}]},taskData:[{document:"This strainer makes a great hat, I'll wear it while I serve spaghetti!"}],taskOutput:[{entities:[{text:"strainer",label:"hat",start:5,end:13},{text:"spaghetti",label:"food",start:60,end:69}]}]})})}.call(this,__webpack_require__(95)(module))},820:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),___WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(52),__webpack_require__(382));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("UniversalDataViewer",module).add("Basic",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__.a,{oha:{interface:{type:"text_entity_recognition",description:"Label words or phrases as food or hat.",overlapAllowed:!1,labels:[{id:"food",displayName:"Food",description:"Edible item."},{id:"hat",displayName:"Hat",description:"Something worn on the head."}]},taskData:[{document:"This strainer makes a great hat, I'll wear it while I serve spaghetti!"}]}})})}.call(this,__webpack_require__(95)(module))}},[[403,1,2]]]);
//# sourceMappingURL=main.71c7a4b3844688e3d250.bundle.js.map