﻿window.globalProvideData('slide', '{"title":"Pada gambar ekosistem diatas, sinar matahari \\nadalah komponen ...","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":3,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide3","width":1280,"height":720,"resume":true,"background":{"type":"swf","imagedata":{"assetId":45,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6gBoNPbsD6F","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"6NOm1icyd28.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6IJeXkzDMIM"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5c6ONMYugBh.InvalidPromptSlide"}}]}]},"ReviewInt_5rMsRsaVl3H":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6NOm1icyd28"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6IJeXkzDMIM.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5rMsRsaVl3H_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5rMsRsaVl3H_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5rMsRsaVl3H","typea":"var","valueb":"6JwQFWepyY6","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6JwQFWepyY6.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5rMsRsaVl3H"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6JwQFWepyY6.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5rMsRsaVl3H"}]}]}]},"ReviewIntCorrectIncorrect_5rMsRsaVl3H":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5rMsRsaVl3H_ReviewShape"}}]},"AnsweredInt_5rMsRsaVl3H":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5rMsRsaVl3H"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5rMsRsaVl3H":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6NOm1icyd28"},"enabled":{"type":"boolean","value":false}}]},"5rMsRsaVl3H_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6IJeXkzDMIM.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6JwQFWepyY6.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5rMsRsaVl3H"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6IJeXkzDMIM.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6IJeXkzDMIM.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5rMsRsaVl3H"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6gBoNPbsD6F":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6jGQl4FFa7R"}}]},"NavigationRestrictionPreviousSlide_6gBoNPbsD6F":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5c6ONMYugBh","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5c6ONMYugBh","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6JwQFWepyY6_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6JwQFWepyY6_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6JwQFWepyY6_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5rMsRsaVl3H"}]},{"kind":"showtimer","id":"_player.6JwQFWepyY6_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5rMsRsaVl3H","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5rMsRsaVl3H"}],"elseActions":[{"kind":"exe_actiongroup","id":"5rMsRsaVl3H_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5rMsRsaVl3H","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5rMsRsaVl3H","typea":"var","valueb":"6JwQFWepyY6","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6JwQFWepyY6"},"completed_slide_ref":{"type":"string","value":"_player.6CCFWQTnaeh.6h7qK4tn2zt"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5rMsRsaVl3H","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5rMsRsaVl3H","typea":"var","valueb":"6JwQFWepyY6","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6JwQFWepyY6"},"completed_slide_ref":{"type":"string","value":"_player.6CCFWQTnaeh.6h7qK4tn2zt"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6gBoNPbsD6F"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6gBoNPbsD6F"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5rMsRsaVl3H_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6NOm1icyd28"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6JvTZytOGMq"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5hAIbcxUcWZ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6AatQ4clgKb"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.TextEntry2","align":"center","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"ketikkan jawaban disini","fontsize":29,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":315,"yPos":616,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324.5,"rotateYPos":29.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6NOm1icyd28","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":630,"height":60,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":469,"bottom":39,"pngfb":false,"pr":{"l":"Lib","i":61}}},"html5data":{"xPos":0,"yPos":0,"width":650,"height":60,"strokewidth":1}},"width":650,"height":60,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":651,"bottom":61,"altText":"ketikkan jawaban disini","pngfb":false,"pr":{"l":"Lib","i":70}}},"id":"6NOm1icyd28","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry2","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6JvTZytOGMq_2096801804","id":"01","linkId":"txt__default_6JvTZytOGMq","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":844,"height":88,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Pada gambar ekosistem diatas, sinar matahari \\n","style":{"fontSize":24,"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":34.203,"descent":9.375,"leading":0,"underlinePosition":-2.406,"underlineThickness":1.594,"xHeight":17.125}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":46,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"adalah komponen ...","style":{"fontSize":24,"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":34.203,"descent":9.375,"leading":0,"underlinePosition":-2.406,"underlineThickness":1.594,"xHeight":17.125}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":19,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":32.889,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":786,"bottom":93,"pngfb":false,"pr":{"l":"Lib","i":72}}}],"shapemaskId":"","xPos":208,"yPos":504,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":432,"rotateYPos":49,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":864,"bottom":98,"altText":"Pada gambar ekosistem diatas, sinar matahari \\nadalah komponen ...","pngfb":false,"pr":{"l":"Lib","i":71}},"html5data":{"xPos":0,"yPos":0,"width":864,"height":98,"strokewidth":0}},"width":864,"height":98,"resume":true,"useHandCursor":true,"id":"6JvTZytOGMq"},{"kind":"image","btnxpos":28,"btnypos":337,"zoomiconurl":"story_content/zoomIcon.png","zoomtype":"flashwindow","zoomslide":false,"zoomdata":{"hotlinkId":"","accState":0,"imagedata":{"assetId":47,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0},"html5data":{"url":"64DotJFY0xE.png","xPos":0,"yPos":40,"width":600,"height":338,"strokewidth":0}},"accType":"none","shapemaskId":"","xPos":315,"yPos":104,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":325,"rotateYPos":183,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"imagedata":{"assetId":46,"url":"","type":"normal","altText":"Ekosistem Sawah.png","width":0,"height":0,"mobiledx":0,"mobiledy":0},"html5data":{"url":"Shape5hAIbcxUcWZ.png","xPos":0,"yPos":0,"width":651,"height":367,"strokewidth":0,"mask":"EA50X"}},"width":650,"height":366,"resume":true,"useHandCursor":true,"id":"5hAIbcxUcWZ"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/6DTDwGreYbK.png","type":"normal","altText":"logo merdeka belajar.png","width":1098,"height":102,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":382,"yPos":24,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":258.5,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":517,"bottom":48,"altText":"logo merdeka belajar.png","pngfb":false,"pr":{"l":"Lib","i":15}},"html5data":{"xPos":0,"yPos":0,"width":517,"height":48,"strokewidth":0}},"width":517,"height":48,"resume":true,"useHandCursor":true,"id":"6AatQ4clgKb"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5rMsRsaVl3H_CorrectReview","id":"01","linkId":"5rMsRsaVl3H_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":674,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":65}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":64}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"5rMsRsaVl3H_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5rMsRsaVl3H_IncorrectReview","id":"01","linkId":"5rMsRsaVl3H_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":671,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":67}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":66}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"5rMsRsaVl3H_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_5rMsRsaVl3H_ReviewShape","id":"01","linkId":"txt_5rMsRsaVl3H_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":585,"bottom":779,"pngfb":false,"pr":{"l":"Lib","i":74}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":326.5,"rotateYPos":282.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1260,"bottom":872,"altText":"","pngfb":false,"pr":{"l":"Lib","i":73}},"html5data":{"xPos":1,"yPos":1,"width":1258,"height":870,"strokewidth":1}},"width":653,"height":565,"resume":false,"useHandCursor":true,"id":"5rMsRsaVl3H_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');