var tipuesearch = {"pages": [{'title': 'Introduction', 'text': '組長: 40823111 許耀中 \n 組員: \n 40823115 黃歸吉 \n 40823120 范維倫 \n 40823124 廖璟程 \n 40823126 楊育翔 \n 40823128 曾鑵 斁 \n 40823139 王銘楫 \n 40823140 林子恩 \n', 'tags': '', 'url': 'Introduction.html'}, {'title': 'Stage1,2', 'text': '', 'tags': '', 'url': 'Stage1,2.html'}, {'title': 'stage1', 'text': 'ag6 \n 題目:套圈遊樂器 \n ag9 \n 題目:自動折衣機 \n ag12 \n 題目: 平面四桿機構 \n ag15 \n 題目:水車 \n', 'tags': '', 'url': 'stage1.html'}, {'title': 'stage2', 'text': 'ag3 \n 專案主題: 自動砂帶機 \n 製作理念: 由於砂帶機還需要人工操作 砂帶滾動時有危險性 所以想增加夾具 讓砂帶機可以自動操作 \n 來避免手直接接觸 降低危險性 使工作環境更加安全 \n ag6 \n 題目 : 1.棒球打擊模擬 \n \n 一個平台(棒球場) 球打出去後可以接球(防守者) 漏接的球可以自動流回輸送台，再次被送回來 \n 使用類似螺紋的概念把球輸送到想要的平台 \n 希望可以把球的軌跡沿著螺旋線上升 \n 做成一個循迴機構 \n \n 主要物件: 2.隻機械手臂(王銘楫和廖璟承) 平台和送球機構(許耀中和范維倫) \n ag9 \n 題目:旋轉木馬 \n 製作理念:心血來潮 \n', 'tags': '', 'url': 'stage2.html'}, {'title': 'week', 'text': '', 'tags': '', 'url': 'week.html'}, {'title': 'w10', 'text': '', 'tags': '', 'url': 'w10.html'}, {'title': 'task1', 'text': '讀取 stage3_2a.txt, 建立 Stage3 的分組倉儲, 分組網頁, 以及各組員倉儲及網頁連結. \n \n with open("stage3_2a.txt") as gp:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = gp.readlines()\n    data = [d.replace(\'4823122\',\'40823122\') for d in data]\n    data = [v.replace(\'\\t\\t\\t\\t\',\'\') for v in data]\n#print(len(data))\nfor p in range(len(data)):\n    group = data[p].rstrip("\\n").split("\\t")\n    print(\'<p>\'+group[0]+\' | <a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">網站</a>  <a href="https://github.com/\'+group[2]+\'/stage3-ag\'+group[0][9]+\'">倉儲</a></p>\')\n    for  q in range(2,18,2):\n        try:\n              print(\'<p>\'+group[q]+\' | Website:\'+\'<a href="https://\'+group[q]+\'.github.io/cd2021\'+\'">\'+group[q]+\'</a>\'+\' | Repository:\'+\'<a href="https://github.com/\'+group[q]+\'/cd2021\'+\'">\'+group[q]+\'</a>\'+\' | Group Website:\'+\'<a href="https://\'+group[q]+\'.github.io/stage3-ag\'+group[0][9]+\'">\'+group[q]+\'</a></p>\' )\n        except:\n            continue \n \n \n stage3_ag1 |  網站   倉儲 \n 40823131 | Website: 40823131  | Repository: 40823131  | Group Website: 40823131 \n a40823112 | Website: a40823112  | Repository: a40823112  | Group Website: a40823112 \n 40823123 | Website: 40823123  | Repository: 40823123  | Group Website: 40823123 \n 40823145 | Website: 40823145  | Repository: 40823145  | Group Website: 40823145 \n 40823136 | Website: 40823136  | Repository: 40823136  | Group Website: 40823136 \n 40823109 | Website: 40823109  | Repository: 40823109  | Group Website: 40823109 \n 40823116 | Website: 40823116  | Repository: 40823116  | Group Website: 40823116 \n 40823108 | Website: 40823108  | Repository: 40823108  | Group Website: 40823108 \n stage3_ag2 |  網站   倉儲 \n 40823151 | Website: 40823151  | Repository: 40823151  | Group Website: 40823151 \n 40623121 | Website: 40623121  | Repository: 40623121  | Group Website: 40623121 \n 40871106 | Website: 40871106  | Repository: 40871106  | Group Website: 40871106 \n 40823102 | Website: 40823102  | Repository: 40823102  | Group Website: 40823102 \n 40823104 | Website: 40823104  | Repository: 40823104  | Group Website: 40823104 \n 40823106 | Website: 40823106  | Repository: 40823106  | Group Website: 40823106 \n 40823101 | Website: 40823101  | Repository: 40823101  | Group Website: 40823101 \n 40823132 | Website: 40823132  | Repository: 40823132  | Group Website: 40823132 \n stage3_ag3 |  網站   倉儲 \n 40823119 | Website: 40823119  | Repository: 40823119  | Group Website: 40823119 \n 40823150 | Website: 40823150  | Repository: 40823150  | Group Website: 40823150 \n 40823103 | Website: 40823103  | Repository: 40823103  | Group Website: 40823103 \n 40823107 | Website: 40823107  | Repository: 40823107  | Group Website: 40823107 \n 40523252 | Website: 40523252  | Repository: 40523252  | Group Website: 40523252 \n 40823154 | Website: 40823154  | Repository: 40823154  | Group Website: 40823154 \n stage3_ag4 |  網站   倉儲 \n 40823142 | Website: 40823142  | Repository: 40823142  | Group Website: 40823142 \n 40823144 | Website: 40823144  | Repository: 40823144  | Group Website: 40823144 \n 40823127 | Website: 40823127  | Repository: 40823127  | Group Website: 40823127 \n 40823148 | Website: 40823148  | Repository: 40823148  | Group Website: 40823148 \n 40823121 | Website: 40823121  | Repository: 40823121  | Group Website: 40823121 \n 40823135 | Website: 40823135  | Repository: 40823135  | Group Website: 40823135 \n 40823114 | Website: 40823114  | Repository: 40823114  | Group Website: 40823114 \n 40823146 | Website: 40823146  | Repository: 40823146  | Group Website: 40823146 \n stage3_ag5 |  網站   倉儲 \n 40823111 | Website: 40823111  | Repository: 40823111  | Group Website: 40823111 \n 40823115 | Website: 40823115  | Repository: 40823115  | Group Website: 40823115 \n 40823128 | Website: 40823128  | Repository: 40823128  | Group Website: 40823128 \n 40823120 | Website: 40823120  | Repository: 40823120  | Group Website: 40823120 \n 40823140 | Website: 40823140  | Repository: 40823140  | Group Website: 40823140 \n 40823124 | Website: 40823124  | Repository: 40823124  | Group Website: 40823124 \n 40823139 | Website: 40823139  | Repository: 40823139  | Group Website: 40823139 \n 40823126 | Website: 40823126  | Repository: 40823126  | Group Website: 40823126 \n stage3_ag6 |  網站   倉儲 \n 40823152 | Website: 40823152  | Repository: 40823152  | Group Website: 40823152 \n 40823110 | Website: 40823110  | Repository: 40823110  | Group Website: 40823110 \n 40823122 | Website: 40823122  | Repository: 40823122  | Group Website: 40823122 \n 40823125 | Website: 40823125  | Repository: 40823125  | Group Website: 40823125 \n 40823117 | Website: 40823117  | Repository: 40823117  | Group Website: 40823117 \n 40823129 | Website: 40823129  | Repository: 40823129  | Group Website: 40823129 \n 40823149 | Website: 40823149  | Repository: 40823149  | Group Website: 40823149 \n 40823153 | Website: 40823153  | Repository: 40823153  | Group Website: 40823153 \n \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '隨機抽取各組別兩學號 \n #by 40823124\nimport random\n \nwith open("stage3_ag1.txt") as fh: #讀取\n    data=fh.readlines()\n \nfor i in range(len(data)):\n    group=data[i].rstrip("\\n").split("\\t") #刪除空格\n     \n    subgroup=group[1:] #取組別後\n    memberNum=0\n    count =0\n    for j in range(len(subgroup)): \n        if(subgroup[j]!=""): #取值\n            count+=1\n            if(count%2==0): #重複學號取1個號碼\n                memberNum+=1\n    print("group"+" "+str(i+1)+":"+str(memberNum)) #輸出組別人數\n    beRandomGroup=[] \n    k=0\n    while(k<len(subgroup)): #取學號跳過帳號\n        if(subgroup[k]!=""):\n            beRandomGroup.append(subgroup[k])\n        k=k+2\n    var=random.choice(beRandomGroup) #抽第一個\n    while(1==1):\n        var2=random.choice(beRandomGroup)#抽第二個\n        if(var2!=var): #抽到不重複為止\n            break\n    print(var)\n    print(var2)\n    print("---------------------") \n OUTPUT \n group 1:8\n40823123\n40823136\n---------------------\ngroup 2:8\n40823102\n40871106\n---------------------\ngroup 3:6\n40523252\n40823154\n---------------------\ngroup 4:8\n40823121\n40823127\n---------------------\ngroup 5:8\n40823115\n40823128\n---------------------\ngroup 6:8\n40823110\n40823153\n--------------------- \n', 'tags': '', 'url': 'task2.html'}, {'title': 'task3', 'text': '請各組員分別將個人在 stage1 與 stage2 所完成的 coppeliasim 場景, 採 Python remote API 進行操控, 並將過程拍成影片後, 放在個人與分組網站上 \n 使用CoppliaSim 更新版: 4.2.0 版 \n \n 1. 第一組模擬 \n step1模擬  \n step2模擬 \n \n \n', 'tags': '', 'url': 'task3.html'}, {'title': 'w11', 'text': '', 'tags': '', 'url': 'w11.html'}, {'title': 'task3-1', 'text': '每週各組按照組員順序, 於每堂課程時段, 輪流由 2-3 名學員啟動 OBS + Youtube 直播 \n 第一次 直播抽到組員 40823111 40823120 \n 1.介紹CoppliaSim 的使用方法 \n \n 2.介紹reveal的創見與撰寫網誌內容 \n \n', 'tags': '', 'url': 'task3-1.html'}, {'title': 'w12', 'text': '第二次 直播抽到組員 40823115 40823126 \n 1. 40823115\xa0\xa0 介紹pelican和reveal \n \n \n 2.40823126 介紹 soildworks繪圖 \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': 'RoboDK 機械手臂 Pick and Place Python API 程式: \n 下載 RoboDK 5.2.2 可攜程式 \xa0 ( 5.2.3 )\xa0 \n 完整的\xa0 Pick and Place 檔案下載 \n 下載 CoppeliaSim 4.1.0 可攜程式 \xa0 (使用舊版的)\xa0 \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': 'github可以備份資料了，想使用gitlab\xa0  創建請看這裡 \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15', 'text': '自行meeting 一起做機械手臂及討論 \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'w16', 'text': '期末考試了 \n <<<<<<< HEAD \n', 'tags': '', 'url': 'w16.html'}, {'title': 'w18', 'text': '最後結論 \n \n', 'tags': '', 'url': 'w18.html'}, {'title': 'FINAL', 'text': '\n', 'tags': '', 'url': 'FINAL.html'}, {'title': '40823124', 'text': 'part2 測試轉動\xa0 \n \n -- just test joints turning by 40823124\nfunction moving1()\n\n    sim.setJointTargetPosition(joint1,45*math.pi/180)\n    sim.setJointTargetPosition(joint2,-45*math.pi/180)\n\n    \nend\nfunction moving2()\n\n    sim.setJointTargetPosition(joint1,-45*math.pi/180)\n    sim.setJointTargetPosition(joint2,45*math.pi/180)\n\n    \nend\n\n\nfunction sysCall_threadmain()\n    \n    t=5\n    joint1=sim.getObjectHandle(\'joint1\')\n    joint2=sim.getObjectHandle(\'joint2\')\n    sim.setJointTargetPosition(joint1,0)\n    sim.setJointTargetPosition(joint2,0)\n\n    sim.wait(t)\n    while sim.getSimulationState()~=sim.simulation_advancing_abouttostopre do\n        moving1()\n        sim.wait(t)\n        moving2()\n        sim.wait(t)\n        sim.setJointTargetPosition(joint1,0)\n        sim.setJointTargetPosition(joint2,0)\n        sim.wait(t)\n    end\n\nend\n \n \n part3 按鍵轉動 -40823124 \n \n --by 40823124 key press test\n\nfunction sysCall_init() \n    b1=sim.getObjectHandle(\'joint1\')\n    m1=sim.getObjectHandle(\'joint2\')\n    s1=sim.getObjectHandle(\'joint4\')\n    suctionPad=sim.getObjectHandle(\'suctionPad\')\n    BaseFrame=sim.getObjectHandle("BaseFrame")\n    block =sim.getObjectHandle("BOX")\n    r1 = 0\n    r2 = 0\n    d3 = 0\n    deg = math.pi/180\nend\nfunction sysCall_actuation() \n\n    message, auxiliaryData=sim.getSimulatorMessage()\n        while message ~= -1 do\n            key=auxiliaryData[1]\n            if (message==sim.message_keypress) then\n                if (auxiliaryData[1]==101) then \n                    --press e to open the suctionpad\nsim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),\'active\',\'true\')\n                end \n                \n                if (auxiliaryData[1]==113) then \n                    --press q to close the suctionpad\nsim.setScriptSimulationParameter(sim.getScriptAssociatedWithObject(suctionPad),\'active\',\'false\')\n                end \n                \n                if (auxiliaryData[1]==068) then \n                    --press D to turn joint1\n                     r1 = r1 + 5*deg\n                     sim.setJointPosition(b1, r1)\n                end \n                if (auxiliaryData[1]==065) then \n                    --press A to turn joint1\n                     r1 = r1  - 5*deg\n                     sim.setJointPosition(b1, r1)\n                end \n                if (auxiliaryData[1]==100) then \n                    --press d to turn joint2\n                     r2 = r2 + 5*deg\n                     sim.setJointPosition(m1, r2)\n                end \n                if (auxiliaryData[1]==097) then \n                    -- press a to turn joint2\n                     r2 = r2 - 5*deg\n                     sim.setJointPosition(m1, r2)\n                end \n                if (auxiliaryData[1]==119) then \n                    --press s to control joint4\n                     d3 =-0.058\n                     sim.setJointPosition(s1, d3)\n                end \n                if (auxiliaryData[1]==115) then \n                    --press w to control joint4\n                     sim.setJointPosition(s1, 0)\n                end \n                \n           end  \n    message, auxiliaryData=sim.getSimulatorMessage()\n        end \nend \n \n \n part4 lua自動執行 -40823124 \n \n \n >>>>>>> ba3417913a9ac1e0268b21e7fe352c217a93570a \n \n', 'tags': '', 'url': '40823124.html'}, {'title': '40823128', 'text': 'Stage2 ag3我們是嘗試做自動砂帶機 ，由於我們一開始使用虎鉗來做夾持，可是沒辦法達成我們要的自動進給 coppeliasim 無法模擬 要改成使用機械手臂來做夾持 ，才能讓需要做表面處理的工件自動進給 達成我們要的全自動砂帶機。 \n \n \n \n \n \n \n', 'tags': '', 'url': '40823128.html'}, {'title': '40823120', 'text': '40823120 小組貢獻 在這學期主要負責的是倉儲的管理推送，設計產品和程式。 stage1因為是兩個人分組所以分組很明確，我負責畫圖和管理網站以及部分程式。 stage2是四個人一組分工得更為明確我個人負責模擬與產品設計，另一組負責程式設計。 stage3是沿用我們stage2所設計的機構加以改善本來是打擊球用手套去接，後來覺得過度理想化所以想用固定一軸的方式使他每次的飛行都一樣。 \n 心得: Week16的作業對我自己來說真的很難，我比較擅長的是偏向畫圖和產品模擬所以在第一部分onshape那操作得很順手 而到第二階段以後卡了很久，與小組的組員開metting後和參考了別人的影片才把第二階段的程式看懂，第三階段的吸盤一開始看不太懂如何操作後來發現他需要打開第二個節點那的程式，逆向那很複雜，一開始也不懂逆向是什麼意思，後來查完資料才知道，本來是我們要主動地去操作，需要把它變成自己去捕捉，API的部分丟小白框的時候他一start就馬上exit後來發現我少了keyboard所以我需要到小黑框裡輸入pip install keyboard接著去修改小白框裡的IP位址然後就可以使用API了。 \n \n', 'tags': '', 'url': '40823120.html'}, {'title': '40823115', 'text': 'stage1我們自做自動折一機，我負責coppeliasim模擬因為是第一次使用所以完全不會我就從網路上看影片學習。看了這影片後我就完成了stage1的大部分模擬 \n \n 學習的影片 \n \n stage2我也是負責 coppeliasim模擬但我們發現怎麼模擬到最後都法轉動最後整隻馬都會亂跑 \n stage3我們跟另外一組合聘最後延續另外那組的stage2把原本沒有做好的部分變得更加好 \n', 'tags': '', 'url': '40823115.html'}]};