﻿window.globalProvideData('slide', '{"title":"Apa peran cacing bagi tanah ...","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":4,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide4","width":1280,"height":720,"resume":true,"background":{"type":"swf","imagedata":{"assetId":48,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6jGQl4FFa7R","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"6LhJuxyWh0I.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6M9Ku80wmv6"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5c6ONMYugBh.InvalidPromptSlide"}}]}]},"ReviewInt_5cm1au8uxSr":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6LhJuxyWh0I"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6M9Ku80wmv6.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cm1au8uxSr_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cm1au8uxSr_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5cm1au8uxSr","typea":"var","valueb":"6JwQFWepyY6","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6JwQFWepyY6.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5cm1au8uxSr"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6JwQFWepyY6.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5cm1au8uxSr"}]}]}]},"ReviewIntCorrectIncorrect_5cm1au8uxSr":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5cm1au8uxSr_ReviewShape"}}]},"AnsweredInt_5cm1au8uxSr":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5cm1au8uxSr"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5cm1au8uxSr":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6LhJuxyWh0I"},"enabled":{"type":"boolean","value":false}}]},"5cm1au8uxSr_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6M9Ku80wmv6.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6JwQFWepyY6.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5cm1au8uxSr"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6M9Ku80wmv6.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6M9Ku80wmv6.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5cm1au8uxSr"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6jGQl4FFa7R":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5yDOcclFoPD"}}]},"NavigationRestrictionPreviousSlide_6jGQl4FFa7R":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5c6ONMYugBh","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5c6ONMYugBh","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6JwQFWepyY6_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6JwQFWepyY6_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6JwQFWepyY6_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5cm1au8uxSr"}]},{"kind":"showtimer","id":"_player.6JwQFWepyY6_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5cm1au8uxSr","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5cm1au8uxSr"}],"elseActions":[{"kind":"exe_actiongroup","id":"5cm1au8uxSr_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5cm1au8uxSr","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5cm1au8uxSr","typea":"var","valueb":"6JwQFWepyY6","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6JwQFWepyY6"},"completed_slide_ref":{"type":"string","value":"_player.6CCFWQTnaeh.6h7qK4tn2zt"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5cm1au8uxSr","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5cm1au8uxSr","typea":"var","valueb":"6JwQFWepyY6","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6JwQFWepyY6"},"completed_slide_ref":{"type":"string","value":"_player.6CCFWQTnaeh.6h7qK4tn2zt"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6jGQl4FFa7R"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6jGQl4FFa7R"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5cm1au8uxSr_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LhJuxyWh0I"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6kOfGEZqY3C"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6PJIQ7foCUI"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ZD1Vsabcot"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.TextEntry4","align":"center","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"ketikkan jawaban disini","fontsize":29,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":315,"yPos":600,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324.5,"rotateYPos":29.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6LhJuxyWh0I","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":630,"height":60,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":469,"bottom":39,"pngfb":false,"pr":{"l":"Lib","i":61}}},"html5data":{"xPos":0,"yPos":0,"width":650,"height":60,"strokewidth":1}},"width":650,"height":60,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":651,"bottom":61,"altText":"ketikkan jawaban disini","pngfb":false,"pr":{"l":"Lib","i":75}}},"id":"6LhJuxyWh0I","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry4","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6kOfGEZqY3C_570863376","id":"01","linkId":"txt__default_6kOfGEZqY3C","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":852,"height":44,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Apa peran cacing bagi tanah ...","style":{"fontSize":24,"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":34.203,"descent":9.375,"leading":0,"underlinePosition":-2.406,"underlineThickness":1.594,"xHeight":17.125}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":31,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":32.889,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":664,"bottom":49,"pngfb":false,"pr":{"l":"Lib","i":77}}}],"shapemaskId":"","xPos":204,"yPos":512,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":436,"rotateYPos":27,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":872,"bottom":54,"altText":"Apa peran cacing bagi tanah ...","pngfb":false,"pr":{"l":"Lib","i":76}},"html5data":{"xPos":0,"yPos":0,"width":872,"height":54,"strokewidth":0}},"width":872,"height":54,"resume":true,"useHandCursor":true,"id":"6kOfGEZqY3C"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":49,"id":"01","url":"story_content/6p9EEfXHWNJ.png","type":"normal","altText":"cacing.png","width":273,"height":185,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":386,"yPos":136,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":254,"rotateYPos":172,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":508,"bottom":344,"altText":"cacing.png","pngfb":false,"pr":{"l":"Lib","i":78}},"html5data":{"xPos":0,"yPos":0,"width":508,"height":344,"strokewidth":0}},"width":508,"height":344,"resume":true,"useHandCursor":true,"id":"6PJIQ7foCUI"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/6DTDwGreYbK.png","type":"normal","altText":"logo merdeka belajar.png","width":1098,"height":102,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":382,"yPos":24,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":258.5,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":517,"bottom":48,"altText":"logo merdeka belajar.png","pngfb":false,"pr":{"l":"Lib","i":15}},"html5data":{"xPos":0,"yPos":0,"width":517,"height":48,"strokewidth":0}},"width":517,"height":48,"resume":true,"useHandCursor":true,"id":"5ZD1Vsabcot"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5cm1au8uxSr_CorrectReview","id":"01","linkId":"5cm1au8uxSr_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":674,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":65}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":64}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"5cm1au8uxSr_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5cm1au8uxSr_IncorrectReview","id":"01","linkId":"5cm1au8uxSr_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":671,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":67}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":66}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"5cm1au8uxSr_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_5cm1au8uxSr_ReviewShape","id":"01","linkId":"txt_5cm1au8uxSr_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":589,"bottom":763,"pngfb":false,"pr":{"l":"Lib","i":80}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":326.5,"rotateYPos":282.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1260,"bottom":812,"altText":"","pngfb":false,"pr":{"l":"Lib","i":79}},"html5data":{"xPos":1,"yPos":1,"width":1258,"height":810,"strokewidth":1}},"width":653,"height":565,"resume":false,"useHandCursor":true,"id":"5cm1au8uxSr_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');