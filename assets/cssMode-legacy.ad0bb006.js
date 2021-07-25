System.register(["./index-legacy.2bdd0b2c.js","./cssWorker-legacy.d8ebba3c.js","./preload-helper-legacy.90f78ff2.js","./index-legacy.ebf2e3f9.js","./index-legacy.24fcca56.js","./useAnimate-legacy.7eef3c2c.js","./editorWorker-legacy.c9063e9e.js"],(function(e){"use strict";var t,n,r,i,o,u,a,s,c,d,l;return{setters:[function(e){t=e.e,n=e.R,r=e.l,i=e.a,o=e.U},function(e){u=e.I,a=e.C,s=e.D,c=e.F,d=e.a,l=e.S},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("setupMode",(function(e){var t=[],n=[],i=new f(e);t.push(i);var o,u,a=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i.getLanguageServiceWorker.apply(i,e)};return o=e.languageId,u=e.modeConfiguration,H(n),u.completionItems&&n.push(r.registerCompletionItemProvider(o,new w(a))),u.hovers&&n.push(r.registerHoverProvider(o,new C(a))),u.documentHighlights&&n.push(r.registerDocumentHighlightProvider(o,new x(a))),u.definitions&&n.push(r.registerDefinitionProvider(o,new S(a))),u.references&&n.push(r.registerReferenceProvider(o,new T(a))),u.documentSymbols&&n.push(r.registerDocumentSymbolProvider(o,new E(a))),u.rename&&n.push(r.registerRenameProvider(o,new R(a))),u.colors&&n.push(r.registerColorProvider(o,new M(a))),u.foldingRanges&&n.push(r.registerFoldingRangeProvider(o,new P(a))),u.diagnostics&&n.push(new g(o,a,e)),u.selectionRanges&&n.push(r.registerSelectionRangeProvider(o,new F(a))),t.push(W(n)),W(t)}));var f=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=window.setInterval((function(){return t._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return t._stopWorker()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=t.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}(),g=function(){function e(e,n,r){var i=this;this._languageId=e,this._worker=n,this._disposables=[],this._listener=Object.create(null);var o=function(e){var t,n=e.getModeId();n===i._languageId&&(i._listener[e.uri.toString()]=e.onDidChangeContent((function(){window.clearTimeout(t),t=window.setTimeout((function(){return i._doValidate(e.uri,n)}),500)})),i._doValidate(e.uri,n))},u=function(e){t.setModelMarkers(e,i._languageId,[]);var n=e.uri.toString(),r=i._listener[n];r&&(r.dispose(),delete i._listener[n])};this._disposables.push(t.onDidCreateModel(o)),this._disposables.push(t.onWillDisposeModel(u)),this._disposables.push(t.onDidChangeModelLanguage((function(e){u(e.model),o(e.model)}))),r.onDidChange((function(e){t.getModels().forEach((function(e){e.getModeId()===i._languageId&&(u(e),o(e))}))})),this._disposables.push({dispose:function(){for(var e in i._listener)i._listener[e].dispose()}}),t.getModels().forEach(o)}return e.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},e.prototype._doValidate=function(e,n){this._worker(e).then((function(t){return t.doValidation(e.toString())})).then((function(r){var i=r.map((function(e){return n="number"==typeof(t=e).code?String(t.code):t.code,{severity:h(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source};var t,n})),o=t.getModel(e);o&&o.getModeId()===n&&t.setModelMarkers(o,n,i)})).then(void 0,(function(e){console.error(e)}))},e}();function h(e){switch(e){case s.Error:return i.Error;case s.Warning:return i.Warning;case s.Information:return i.Info;case s.Hint:return i.Hint;default:return i.Info}}function p(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function m(e){if(e)return new n(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function v(e){var t=r.CompletionItemKind;switch(e){case a.Text:return t.Text;case a.Method:return t.Method;case a.Function:return t.Function;case a.Constructor:return t.Constructor;case a.Field:return t.Field;case a.Variable:return t.Variable;case a.Class:return t.Class;case a.Interface:return t.Interface;case a.Module:return t.Module;case a.Property:return t.Property;case a.Unit:return t.Unit;case a.Value:return t.Value;case a.Enum:return t.Enum;case a.Keyword:return t.Keyword;case a.Snippet:return t.Snippet;case a.Color:return t.Color;case a.File:return t.File;case a.Reference:return t.Reference}return t.Property}function _(e){if(e)return{range:m(e.range),text:e.newText}}var w=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!1,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,i,o){var a=e.uri;return this._worker(a).then((function(e){return e.doComplete(a.toString(),p(t))})).then((function(i){if(i){var o=e.getWordUntilPosition(t),a=new n(t.lineNumber,o.startColumn,t.lineNumber,o.endColumn),s=i.items.map((function(e){var t,n,i={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(t=e.command,t&&"editor.action.triggerSuggest"===t.command?{id:t.command,title:t.title,arguments:t.arguments}:void 0),range:a,kind:v(e.kind)};return e.textEdit&&(void 0!==(n=e.textEdit).insert&&void 0!==n.replace?i.range={insert:m(e.textEdit.insert),replace:m(e.textEdit.replace)}:i.range=m(e.textEdit.range),i.insertText=e.textEdit.newText),e.additionalTextEdits&&(i.additionalTextEdits=e.additionalTextEdits.map(_)),e.insertTextFormat===u.Snippet&&(i.insertTextRules=r.CompletionItemInsertTextRule.InsertAsSnippet),i}));return{isIncomplete:i.isIncomplete,suggestions:s}}}))},e}();function k(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function y(e){if(e)return Array.isArray(e)?e.map(k):[k(e)]}var C=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.doHover(r.toString(),p(t))})).then((function(e){if(e)return{range:m(e.range),contents:y(e.contents)}}))},e}();function b(e){switch(e){case d.Read:return r.DocumentHighlightKind.Read;case d.Write:return r.DocumentHighlightKind.Write;case d.Text:return r.DocumentHighlightKind.Text}return r.DocumentHighlightKind.Text}var x=function(){function e(e){this._worker=e}return e.prototype.provideDocumentHighlights=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.findDocumentHighlights(r.toString(),p(t))})).then((function(e){if(e)return e.map((function(e){return{range:m(e.range),kind:b(e.kind)}}))}))},e}();function I(e){return{uri:o.parse(e.uri),range:m(e.range)}}var S=function(){function e(e){this._worker=e}return e.prototype.provideDefinition=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.findDefinition(r.toString(),p(t))})).then((function(e){if(e)return[I(e)]}))},e}(),T=function(){function e(e){this._worker=e}return e.prototype.provideReferences=function(e,t,n,r){var i=e.uri;return this._worker(i).then((function(e){return e.findReferences(i.toString(),p(t))})).then((function(e){if(e)return e.map(I)}))},e}(),R=function(){function e(e){this._worker=e}return e.prototype.provideRenameEdits=function(e,t,n,r){var i=e.uri;return this._worker(i).then((function(e){return e.doRename(i.toString(),p(t),n)})).then((function(e){return function(e){if(e&&e.changes){var t=[];for(var n in e.changes)for(var r=o.parse(n),i=0,u=e.changes[n];i<u.length;i++){var a=u[i];t.push({resource:r,edit:{range:m(a.range),text:a.newText}})}return{edits:t}}}(e)}))},e}();function D(e){var t=r.SymbolKind;switch(e){case l.File:return t.Array;case l.Module:return t.Module;case l.Namespace:return t.Namespace;case l.Package:return t.Package;case l.Class:return t.Class;case l.Method:return t.Method;case l.Property:return t.Property;case l.Field:return t.Field;case l.Constructor:return t.Constructor;case l.Enum:return t.Enum;case l.Interface:return t.Interface;case l.Function:return t.Function;case l.Variable:return t.Variable;case l.Constant:return t.Constant;case l.String:return t.String;case l.Number:return t.Number;case l.Boolean:return t.Boolean;case l.Array:return t.Array}return t.Function}var E=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,t){var n=e.uri;return this._worker(n).then((function(e){return e.findDocumentSymbols(n.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:D(e.kind),tags:[],range:m(e.location.range),selectionRange:m(e.location.range)}}))}))},e}(),M=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,t){var n=e.uri;return this._worker(n).then((function(e){return e.findDocumentColors(n.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:m(e.range)}}))}))},e.prototype.provideColorPresentations=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),t.color,function(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}(t.range))})).then((function(e){if(e)return e.map((function(e){var t={label:e.label};return e.textEdit&&(t.textEdit=_(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(_)),t}))}))},e}(),P=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,t,n){var i=e.uri;return this._worker(i).then((function(e){return e.getFoldingRanges(i.toString(),t)})).then((function(e){if(e)return e.map((function(e){var t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case c.Comment:return r.FoldingRangeKind.Comment;case c.Imports:return r.FoldingRangeKind.Imports;case c.Region:return r.FoldingRangeKind.Region}}(e.kind)),t}))}))},e}(),F=function(){function e(e){this._worker=e}return e.prototype.provideSelectionRanges=function(e,t,n){var r=e.uri;return this._worker(r).then((function(e){return e.getSelectionRanges(r.toString(),t.map(p))})).then((function(e){if(e)return e.map((function(e){for(var t=[];e;)t.push({range:m(e.range)}),e=e.parent;return t}))}))},e}();function W(e){return{dispose:function(){return H(e)}}}function H(e){for(;e.length;)e.pop().dispose()}}}}));
