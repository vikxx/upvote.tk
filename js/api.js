function progressData(){function t(t,o){function e(t,o){return t["column-2"]===o["column-2"]?0:t["column-2"]<o["column-2"]?-1:1}for(var a=[],l={},r=null,n=0;n<t.length;n++)r=t[n],l[r.category]?l[r.category]["column-2"]+=r["column-2"]:l[r.category]=r;for(var c in l)a.push(l[c]);a.sort(e),"votes"===o&&(localStorage.setItem("VOTES",JSON.stringify(a)),buildChart(a,"vote-container","График взаимодействия голосований, обмен голосами. @"+account)),"comments"===o&&(localStorage.setItem("COMMENTS",JSON.stringify(a)),buildChart(a,"comments-container","График взаимодействия комментариев @"+account)),"flags"===o&&(localStorage.setItem("FLAG",JSON.stringify(a)),buildChart(a,"flag-container","График взаимодействия флагов @"+account))}function o(t,o){for(var e=null,a=0,l=0;l<t.length;l++)t[l]!=e?(a>0&&(("inVote"===o||"inVote"===o)&&chartItems.push({category:e,"column-1":a,"column-2":0}),("inComm"===o||"inComm"===o)&&chartItemsComm.push({category:e,"column-1":a,"column-2":0}),("outVote"===o||"outVote"===o)&&chartItems.push({category:e,"column-1":0,"column-2":a}),("outComm"===o||"outComm"===o)&&chartItemsComm.push({category:e,"column-1":0,"column-2":a}),("inFlag"===o||"inFlag"===o)&&chartItemsFLAG.push({category:e,"column-1":a,"column-2":0}),("outFlag"===o||"outFlag"===o)&&chartItemsFLAG.push({category:e,"column-1":0,"column-2":a})),e=t[l],a=1):a++;a>0&&(("inVote"===o||"inVote"===o)&&chartItems.push({category:e,"column-1":a,"column-2":0}),("inComm"===o||"inComm"===o)&&chartItemsComm.push({category:e,"column-1":a,"column-2":0}),("outVote"===o||"outVote"===o)&&chartItems.push({category:e,"column-1":0,"column-2":a}),("outComm"===o||"outComm"===o)&&chartItemsComm.push({category:e,"column-1":0,"column-2":a}),("inFlag"===o||"inFlag"===o)&&chartItemsFLAG.push({category:e,"column-1":a,"column-2":0}),("outFlag"===o||"outFlag"===o)&&chartItemsFLAG.push({category:e,"column-1":0,"column-2":a}))}o(inVote.sort(),"inVote"),o(outVote.sort(),"outVote"),o(inComm.sort(),"inComm"),o(outComm.sort(),"outComm"),o(outFlag.sort(),"outFlag"),o(inFlag.sort(),"inFlag"),t(chartItems,"votes"),t(chartItemsComm,"comments"),t(chartItemsFLAG,"flags")}function buildChart(t,o,e){AmCharts.makeChart(o,{type:"serial",pathToImages:"https://upvote.tk/img/",categoryField:"category",maxSelectedSeries:10,mouseWheelScrollEnabled:!0,rotate:!0,angle:20,autoMarginOffset:5,depth3D:20,zoomOutText:"",startDuration:1,accessibleTitle:"",color:"#3D3D3D",fontFamily:"arial",fontSize:12,theme:"light",categoryAxis:{gridPosition:"start",offset:-1},chartScrollbar:{enabled:!0,hideResizeGrips:!0,resizeEnabled:!1,backgroundAlpha:1,backgroundColor:"#BCD0FF",dragIcon:"",graphFillAlpha:0,graphFillColor:"#091E51",graphLineColor:"#4242FF",gridAlpha:1,hideResizeGrips:!0,maximum:1,offset:30,scrollbarHeight:20,selectedBackgroundAlpha:1,selectedBackgroundColor:"#659CFF",selectedGraphFillAlpha:1,selectedGraphFillColor:"#FF4949",selectedGraphLineColor:"#FF5D5D",updateOnReleaseOnly:!0},trendLines:[],graphs:[{balloonText:"[[title]] >>> [[category]]:[[value]]",color:"#333333",fillAlphas:1,fillColors:"#5050FF",fontSize:12,id:"AmGraph-1",labelText:"[[value]]",title:"Активность пользователя в ваш адрес",type:"column",lineColor:"#FFFFFF",lineThickness:0,valueField:"column-1"},{balloonColor:"#FF6161",balloonText:"[[title]] >>> [[category]]:[[value]]",bullet:"round",bulletBorderColor:"#6E6EFF",bulletColor:"#FF4343",bulletHitAreaSize:4,bulletSize:22,columnWidth:0,fillColors:"#FF0000",fontSize:14,id:"AmGraph-2",labelOffset:-1,labelText:"[[value]]",lineColor:"#FF8A8A",lineThickness:2,title:"Ваша активность в адрес пользователя",valueField:"column-2"}],guides:[],valueAxes:[{id:"ValueAxis-1",title:""}],allLabels:[],balloon:{animationDuration:0,fadeOutDuration:0},legend:{enabled:!0,useGraphSettings:!0},titles:[{id:"Title-1",size:16,text:e}],dataProvider:t}),loadBar.remove("show"),loaderplace.remove("bg"),dynamic.remove("hide")}function run(){loadBar.add("show"),loaderplace.add("bg"),dynamic.add("hide"),l=2e3,f=l,next=0,mostpopular=[],chartItems=[],chartItemsComm=[],chartItemsFLAG=[],outVote=[],inVote=[],inComm=[],outComm=[],inReblog=[],outReblog=[],inFlag=[],outFlag=[],mostTags=[],acc=document.getElementById("login").value,account=acc.toLowerCase().replace("@",""),getStat(f)}var loadBar=document.getElementById("loadbar").classList,loaderplace=document.getElementById("loaderplace").classList,dynamic=document.getElementById("dynamic").classList,account="vik",l=2e3,f=l,next=0,mostpopular=[],chartItems=[],chartItemsComm=[],chartItemsFLAG=[],outVote=[],inVote=[],inComm=[],outComm=[],inReblog=[],outReblog=[],inFlag=[],outFlag=[],mostTags=[],count=0;if("VOTES"in localStorage){var ch=localStorage.getItem("VOTES");buildChart(JSON.parse(ch),"vote-container","Голосования. (Для обновления проанализируйте аккаунт снова)")}else buildChart(FallbackUPVOTES,"vote-container","График входящих/исходящих голосов аккаунта @vik");if("COMMENTS"in localStorage){var ch=localStorage.getItem("COMMENTS");buildChart(JSON.parse(ch),"comments-container","График взаимодействия комментариев. (Для обновления проанализируйте аккаунт снова)")}else buildChart(FallbackCOMMENTS,"comments-container","График входящих/исходящих комментариев аккаунта @vik");if("FLAG"in localStorage){var ch=localStorage.getItem("FLAG");buildChart(JSON.parse(ch),"flag-container","График взаимодействия ФЛАГОВ. (Для обновления проанализируйте аккаунт снова)")}else buildChart(FallbackFLAG,"flag-container","График входящих/исходящих флагов аккаунта @vik");var getStat=function t(o){steem.api.getAccountHistory(account,o,l,function(e,a){e&&console.log(e);var r=0,n=a.length;for(r=0;n>r;r++){var c=a[r],u=c[1].op[0],m=c[1].op[1];if("vote"===u){var i=m.voter,s=m.author,h=m.weight>1,g=m.weight<0;i===account&&h&&outVote.push(s),i===account&&g&&outFlag.push(s),s===account&&h&&inVote.push(i),s===account&&g&&inFlag.push(i)}else"comment"===u&&(m.parent_author===account?inComm.push(m.author):""!==m.parent_author&&m.author===account?outComm.push(m.parent_author):""===m.parent_author&&m.author===account&&mostTags.push(m.parent_permlink))}var d=a[a.length-1][0];d===o?(o+=l,t(o)):o>d&&progressData()})};
