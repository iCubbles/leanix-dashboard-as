// app.js
angular.element(document.getElementsByTagName("head")).append(angular.element('<base href="'+window.location.pathname+'" />')),angular.module("app",["ngRoute","ngDialog"]).config(["$routeProvider","$locationProvider",function(e,t){e.when("/",{templateUrl:"app/deck-root.html",controller:"WindowController"}),t.html5Mode(!0)}]),angular.module("app").directive("providers",function(){var e=function(e){var t={},n="",r="",a=0;for(t.count=e.length,i=0;i<e.length;++i)if(e[i].resourceHasProviders){var o=e[i].resourceHasProviders.length;o>a&&(a=o,n=e[i].ID,r=e[i].displayName)}return t.maxResources=a,t.providerIDMaxResource=n,t.providerNameMaxResource=r,t},t=function(e){var t=e.getFullYear(),n="0"+(e.getMonth()+1);n=n.slice(-2,n.length-2+3);var r="0"+e.getDate();return r=r.slice(-2,r.length-2+3),r+"."+n+"."+t};return{restrict:"E",templateUrl:"app/infobox.html",replace:!0,scope:{},controller:["$scope","$element","$attrs","$routeParams","ApiService","config",function(n,r,a,o,i,s){n.imgName="providers.png",n.name="Provider",n.baseUrl=o.baseUrl;var c=new Object({relations:!0});i.api("providers",c).then(function(t){var r=e(t.data);n.keyFigure1=r.count,n.keyFigure2="-3 %",n.nameKeyFigure1="Anzahl der Provider",n.nameKeyFigure2="Vergleich zum Vormonat (der gleiche Stichtag)",n.maxResourcesLabel="Provider mit den meisten Komponenten",n.maxResources=r.maxResources,n.providerIDMaxResource=r.providerIDMaxResource,n.providerNameMaxResource=r.providerNameMaxResource;try{n.color=s.workspace.objectTypes.providers.color}catch(a){}return t}),n.date=t(new Date)}]}}),angular.module("app").directive("interfaces",function(){var e=function(e){var t={},n=0,r=0,a="",o="",s=[];for(i=0;i<e.length;++i)if(e[i].factSheetHasIfaceProviders){var c=e[i].factSheetHasIfaceProviders.length;n+=c,s.push(e[i].ID),c>r&&(r=c,a=e[i].ID,o=e[i].displayName)}return t.averageCount=Math.round(n/e.length),t.maxInterfaces=r,t.maxInterfacesAppID=a,t.maxInterfacesAppName=o,t.Ids=s,t},t=function(e){var t=e.getFullYear(),n="0"+(e.getMonth()+1);n=n.slice(-2,n.length-2+3);var r="0"+e.getDate();return r=r.slice(-2,r.length-2+3),r+"."+n+"."+t};return{restrict:"E",templateUrl:"app/infobox.html",replace:!0,scope:{},controller:["$scope","$element","$attrs","ApiService","$routeParams","config",function(n,r,a,o,i,s){n.imgName="interfaces.png",n.name="Schnittstellen";var c=new Object({relations:!0});o.api("services",c).then(function(t){var r=e(t.data);n.keyFigure1=r.averageCount,n.keyFigure2=r.maxInterfaces,n.nameKeyFigure1="⌀ Anzahl der Schnittstellen pro Applikation",n.nameKeyFigure2="Max Anzahl der Schnittstellen pro Applikation",n.maxInterfacesAppID=r.maxInterfacesAppID,n.maxInterfacesAppName=r.maxInterfacesAppName,n.baseUrl=i.baseUrl;try{n.color=s.workspace.objectTypes.services.color}catch(a){}return t}),n.date=t(new Date)}]}}),angular.module("app").directive("components",function(){var e=function(e,t){this.amount=e,this.name=t},t=function(e){var t={},n=0,r=0;for(i=0;i<e.length;++i){var a=e[i].resourceHasResourceCapabilities;e[i].factSheetHasLifecycles&&0===e[i].factSheetHasLifecycles.length&&++n,a&&0!==a.length&&a[0].supportTypeID>0&&++r}return t.count=e.length,t.noLifecycle=n,t.noSupport=e.length-r,t},n=function(e){var t={},n=e.data;for(var r in n)if(n[r].serviceHasResources&&n[r].serviceHasResources.length>0){var a=n[r].serviceHasResources;for(var o in a){var i=a[o].resourceID;t[i]="undefined"==typeof t[i]?1:t[i]+1}}return t},r=function(e){var t=0,n=0;for(var r in e)e[r]>t&&(t=e[r],n=r);return new Object({resourceID:n,occurences:t})},a=function(e){var t=e.getFullYear(),n="0"+(e.getMonth()+1);n=n.slice(-2,n.length-2+3);var r="0"+e.getDate();return r=r.slice(-2,r.length-2+3),r+"."+n+"."+t};return{restrict:"E",templateUrl:"app/infobox.html",replace:!0,scope:{},controller:["$scope","$element","$attrs","ApiService","$routeParams","config",function(o,i,s,c,l,u){o.imgName="comp.png",o.name="Komponenten",c.api("resources",{lifecycle:"any",relations:!0}).then(function(n){o.quality=[];var r=t(n.data);o.quality.push(new e(r.noLifecycle,"Anzahl der IT Komponenten ohne Lifecycle")),o.quality.push(new e(r.noSupport,"Anzahl der IT Komponenten ohne Support")),o.keyFigure1=r.count,o.nameKeyFigure1="Anzahl der IT Komponenten",o.nameKeyFigure2="Erstellte Komponenten seit Vormonat (der gleiche Stichtag)",o.date=a(new Date),o.baseUrl=l.baseUrl;try{o.color=u.workspace.objectTypes.resources.color}catch(i){}return n});var p=new Date;p.setMonth(p.getMonth()-1);var h=new Object({startDate:p.toISOString(),factSheetType:"resources",eventType:"OBJECT_CREATE",countOnly:"1"});c.api("activities",h).then(function(e){o.keyFigure2=e.data.count});var m=new Object({relations:!0});c.api("services",m).then(function(e){mostUsedComponent=r(n(e)),o.mostUsedResourceID=mostUsedComponent.resourceID,o.mostUsedComponentOccurences=mostUsedComponent.occurences,c.api("resources/"+o.mostUsedResourceID).then(function(e){o.mostUsedResourceName=e.data.displayName})})}]}}),angular.module("app").directive("applications",function(){var e=function(e,t){this.amount=e,this.name=t},t=function(e){var t={},n=Date.now(),r=0,a=0,o=0,s=0,c=0;for(i=0;i<e.length;++i){if(e[i].serviceHasInterfaces&&0===e[i].serviceHasInterfaces.length&&++r,e[i].factSheetHasDocuments&&0===e[i].factSheetHasDocuments.length&&++a,e[i].serviceHasResources&&0===e[i].serviceHasResources.length&&++o,e[i].userSubscriptions&&e[i].userSubscriptions.length){for(var l=!0,u=0;u<e[i].userSubscriptions.length;u++)"2"==e[i].userSubscriptions[u].subscriptionTypeID&&(l=!1);l&&++s}if(e[i].qualitySealExpiry&&e[i].qualitySealExpiry.length>0){var p=new Date(e[i].qualitySealExpiry);n>p.getTime()&&c++}}return t.count=e.length,t.noInterfaces=r,t.noDocuments=a,t.noResources=o,t.noResponsibles=s,t.noBrokenQualitySeals=c,t},n=function(e){var t=e.getFullYear(),n="0"+(e.getMonth()+1);n=n.slice(-2,n.length-2+3);var r="0"+e.getDate();return r=r.slice(-2,r.length-2+3),r+"."+n+"."+t};return{restrict:"E",templateUrl:"app/infobox.html",replace:!0,scope:{},controller:["$scope","$element","$attrs","ApiService","$routeParams","config",function(r,a,o,i,s,c){var l=new Object({relations:!0});i.api("services",l).then(function(n){r.quality=[];var a=t(n.data);r.keyFigure1=a.count,r.quality.push(new e(a.noResponsibles,"Anzahl der Applikationen ohne Verantwortlichkeiten")),r.quality.push(new e(a.noInterfaces,"Anzahl der Applikationen ohne Schnittstellen")),r.quality.push(new e(a.noDocuments,"Anzahl der Applikationen ohne Dokumente")),r.quality.push(new e(a.noResources,"Anzahl der Applikationen ohne IT Komponenten")),r.quality.push(new e(a.noBrokenQualitySeals,"Anzahl der Applikation mit gebrochenem Qualitiy Seal")),r.showPieChart=!0,r.pieChartData=JSON.stringify([["Quality Seal ok",a.count-a.noBrokenQualitySeals],["Quality Seal gebrochen",a.noBrokenQualitySeals]]),document.dispatchEvent(new CustomEvent("startCubbles"));try{r.color=c.workspace.objectTypes.services.color}catch(o){}});var u=new Date;u.setMonth(u.getMonth()-1);var p=new Object({startDate:u.toISOString(),factSheetType:"services",eventType:"OBJECT_CREATE",countOnly:"1"});i.api("activities",p).then(function(e){r.keyFigure2=e.data.count}),r.imgName="app.png",r.name="Applikationen",r.nameKeyFigure1="Anzahl der Applikationen",r.nameKeyFigure2="Erstellte Anwendungen seit Vormonat (der gleiche Stichtag)",r.date=n(new Date),r.baseUrl=s.baseUrl}]}}),angular.module("app").constant("config",{baseUrl:-1!=window.location.hostname.indexOf("localhost")?"https://app.leanix.net/incowia":"",lifecycleParams:{lifecycle_data:"current",lifecycle:"any",lifecycle_op:"OR"},workspace:null,user:null}),angular.module("app").factory("ApiService",["$http","$routeParams","config",function(e,t,n){var r=function(r,a){var o="";a&&(o="?"+$.param(n.lifecycleParams)+"&"+$.param(a));var i=r+o,s=n.baseUrl+"/api/v1/"+i,c=e.get(s,{headers:{Authorization:"Bearer "+t.token}}).success(function(e){return e}).error(function(){throw"There was an error getting the response from the server."});return c};return{api:r}}]),angular.module("app").config(["ngDialogProvider",function(e){e.setDefaults({className:"ngdialog-theme-default",showClose:!0,closeByDocument:!0,closeByEscape:!0})}]),angular.module("app").controller("WindowController",["$scope","$routeParams","ApiService","ngDialog","config",function(e,t,n,r,a){"token"in t&&$("body").addClass("isViewedExternally"),e.baseUrl=t.baseUrl,""===a.baseUrl&&(a.baseUrl=t.baseUrl),null===a.workspace&&n.api("config").then(function(e){a.workspace=e.data.workspace})}]);