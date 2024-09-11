/**
 * THIS IS AN EXAMPLE OF HOW THE OBJECT FOR THE SONGS LOOKS LIKE
 * 1. OBJECT KEY: THE OBJECT KEY SHOULD BE THE SONG TITLE IN PASCAL CASE. EG: "SilentNightHolyNight"
 * 2. OBJECT VALUE: THE VALUE SHOULD BE AN OBJECT WITH THE FOLLOWING PROPERTIES:
 *      a. song_num: THE NUMBER OF THE SONG IN THE HYMN BOOK. EG: 184
 *      b. title: THE TITLE OF THE SONG. EG: "Silent Night! Holy Night!"
 *      c. stanzas: THE STANZAS OF THE SONG. EG: {
*          1: "Silent night, holy night, All is calm, all is bright Round yon virgin mother and child, Holy infant so tender and mild; Sleep in heavenly peace.",
*          2: "Silent night, holy night, Shepherds quake at the sight, Glories stream from heaven afar, Heav'nly host sing Alleluia; Christ the Savior is born.",
*          3: "Silent night, holy night, Son of God, loves pure light Radiant beams from thy Holy face, With the dawn of redeeming grace; Jesus, Lord, at thy birth."
*       }
 *      d. chorus: THE CHORUS OF THE SONG. NOTE: LEAVE BLANK IF THERE IS NO CHORUS
 *      e. song_url: THE URL OF THE SONG. EG: `${path_name}184-SilentNightHolyNight.mp3`
 *      f. author: THE AUTHOR OF THE SONG. EG: "Joseph Mohr"
 *     }
 */
let songsExample = {
    "SilentNightHolyNight": {
        song_num: 184,
        title: "Silent Night! Holy Night!",
        stanzas: {
            1: "Silent night, holy night, All is calm, all is bright Round yon virgin mother and child, Holy infant so tender and mild; Sleep in heavenly peace.",
            2: "Silent night, holy night, Shepherds quake at the sight, Glories stream from heaven afar, Heav'nly host sing Alleluia; Christ the Savior is born.",
            3: "Silent night, holy night, Son of God, loves pure light Radiant beams from thy Holy face, With the dawn of redeeming grace; Jesus, Lord, at thy birth."
        },
        chorus: "",
        song_url: `${path_name}184-SilentNightHolyNight.mp3`,
        author: "Joseph Mohr"
    },
}


/**=================================================
 *              SONG OBJECT TEMPLATE
 *=================================================*/
let songObjectTemplate = {
    "": {
        song_num: 0,
        title: "",
        stanzas: {
            1: "",
            2: "",
            3: ""
        },
        chorus: "",
        song_url: `${path_name}song_num-song_title_in_pascal_case.mp3`,
        author: ""
    }
}


/**=================================================
 *              SONG IMPLEMENTATION
 *=================================================*/
/**
 * TODO: DO THE IMPLEMENTATION HERE USING THE TEMPLATE ABOVE AND FOLLOWING THE EXAMPLE FORMAT
 * VISIT THIS LINK TO GET THE SONGS: https://hymnary.org/hymnal/POSH1979
 */
let songs = {
   "ISurrenderAll": {
        song_num: 451,
        title: "I Surrender All",
        stanzas: {
            1: "All to Jesus I surrender,All to Him I freely give;I surrender all, I surrender all;All to  Thee, my blessed Savior,I surrender all.",
            2: "All to Jesus I surrender,Make me, Savior, wholly Thine;Let me feel Thy Holy Spirit,Truly know that Thou art mine.",
            3: "All to Jesus I surrender,Lord, I give myself to Thee;Fill me with Thy love and power,Let Thy blessing fall on me."
        },
        chorus: "I surrender all, I surrender all;All to Thee, my blessed Savior,I surrender all.",
        song_url: `${path_name}451-ISurrenderAll.mp3`,
        author: "Judson W. Van DeVenter"
    },
    "WhereHeLeadsMe": {
        song_num: 452,
        title: "Where He Leads Me",
        stanzas: {
            1: "I can hear my Savior calling,I can hear my Savior calling,I can hear my Savior calling,Take thy cross and follow, follow Me.",
            2: "I'll go with Him through the garden,I'll go with Him through the garden,I'll go with Him through the garden,I'll go with Him, with Him all the way.",
            3: "I'll go with Him through the judgment,I'll go with Him through the judgment,I'll go with Him through the judgment,I'll go with Him, with Him all the way.",
            4: "He will give me grace and glory,He will give me grace and glory,He will give me grace and glory,And go with me, with me all the way."
        },
        chorus: "",
        song_url: `${path_name}452-WhereHeLeadsMe.mp3`,
        author: "E. W. Blandly"
    },
    "AllForJesus": {
        song_num: 453,
        title: "All For Jesus",
        stanzas: {
          1: "All for Jesus! All for Jesus!All my being's ransomed pow'rs,all my thoughts and words and doings,all my days and all my hours.",
          2: "Let my hands perform his bidding,let my feet run in his ways;let my eyes see Jesus only,let my lips speak forth his praise.",
          3: "Worldlings prize their gems of beauty,cling to gilded toys of dust,boast of wealth and fame and pleasure;only Jesus will I trust.",
          4: "Since my eyes were fixed on Jesus,I've lost sight of all beside;so enchained my spirit's vision,looking at the Crucified.",
          5: "O what wonder! How amazing!Jesus, glorious King of kings,deigns to call me his beloved,lets me rest beneath his wings."
         
        },
        chorus: "",
        song_url: `${path_name}453-AllForJesus.mp3`,
        author: "Mary D. James"
    },
    "IHaveDecidedToFollowJesus": {
        song_num: 454,
        title: "I Have Decided To Follow Jesus",
        stanzas: {
          1: "I have decided to follow Jesus;I have decided to follow Jesus;I have decided to follow Jesus;no turning back, no turning back.",
          2: "Though none go with me, I still will follow;though none go with me, I still will follow;though none go with me, I still will follow;no turning back, no turning back.",
          3: "The world behind me, the cross before me;the world behind me, the cross before me,the world behind me, the cross before me;no turning back, no turning back."
         
        },
        chorus: "",
        song_url: `${path_name}454-IHaveDecidedToFollowJesus.mp3`,
        author: " Simon Marak"
    },
    "TheSonOfGodGoesForthToWar": {
        song_num: 455,
        title: "The Son Of God Goes Forth To War.",
        stanzas: {
          1: " The Son of God goes forth to war,a kingly crown to gain;His blood-red banner streams afar!Who follows in his train?Who best can drink His cup of woe,triumphant over pain,who patient bears his cross below,he follows in His train.",
          2: "The martyr first, whose eagle eye could pierce beyond the grave;who saw his Master in the sky and called on Him to save.Like Him, with pardon on His tongue in midst of mortal pain,he prayed for them that did the wrong!Who follows in His train?",
          3: "A glorious band, the chosen fewon whom the Spirit came,twelve valiant saints, their hope they knew,and mocked the cross and flame.They met the tyrant's brandished steel,the lion's gory mane;they bowed their necks the death to feel:who follows in their train?",
          4: " A noble army, men and boys,the matron and the maid,around the Savior's throne rejoice in robes of light arrayed.They climbed the steep ascent of heav'n through peril, toil and pain;O God, to us may grace be giv'n to follow in their train."

         
        },
        chorus: "",
        song_url: `${path_name}455-TheSonOfGodGoesForthToWar.mp3`,
        author: "Reginald Heber"
    },
    "StandUpStandUpForJesus": {
        song_num: 456,
        title: "Stand Up Stand For Jesus",
        stanzas: {
          1: " The Son of God goes forth to war,a kingly crown to gain;His blood-red banner streams afar!Who follows in his train?Who best can drink His cup of woe,triumphant over pain,who patient bears his cross below,he follows in His train.",
          2: "The martyr first, whose eagle eye could pierce beyond the grave;who saw his Master in the sky and called on Him to save.Like Him, with pardon on His tongue in midst of mortal pain,he prayed for them that did the wrong!Who follows in His train?",
          3: "A glorious band, the chosen fewon whom the Spirit came,twelve valiant saints, their hope they knew,and mocked the cross and flame.They met the tyrant's brandished steel,the lion's gory mane;they bowed their necks the death to feel:who follows in their train?",
          4: " A noble army, men and boys,the matron and the maid,around the Savior's throne rejoice in robes of light arrayed.They climbed the steep ascent of heav'n through peril, toil and pain;O God, to us may grace be giv'n to follow in their train."

         
        },
        chorus: "",
        song_url: `${path_name}456-StandUpStandUpForJesus.mp3`,
        author: "George Duffield"
    },

    "WeAreMoreThanConquerors": {
        song_num: 457,
        title: "We Are More Than Conquerors",
        stanzas:{
            1: "We are more than conquerors Thru Him who loved us so The Christ who dwells in us Is the greatest pow'r we know He will fight beside us Tho' the enemy is great Who can stand against us He's the Captain of our fate",
            2: "Then we will conquer never fearSo let the battle rageHe has promised to be nearUntil the end of the ageWe are more than conquerorsThru Him who loved us soThe Christ who dwells within us Is the greatest pow'r we know"

        },
        chorus: "",
        song_url: `${path_name}457-WeAreMoreThanConquerors.mp3`,
        author: "Ralph Carmichael"
        
    },

    "FightTheGoodFight": {
        song_num: 458,
        title:"Fight The Good Fight",
        stanzas:{
            1: "Fight the good fight with all your might,Christ is your strength and Christ your right.Lay hold on life, and it shall be your joy and crown eternally.",
            2: "Run the straight race through God's good grace;lift up your eyes, and seek his face.Life with its way before us lies;Christ is the path and Christ the prize.",
            3: "Cast care aside, lean on your guide;his boundless mercy will provide.Lean, and the trusting soul shall proveChrist is its life and Christ its love.",
            4: "Faint not, nor fear, his arms are near;he changes not, and you are dear.Only believe, and you will see that Christ is Lord eternally."

        },
        chorus: "",
        song_url: `${path_name}458-FightTheGoodFight.mp3`,
        author: "John S. B. Monsell"


    },
    "FaithIsTheVictory": {
        song_num: 459,
        title:"Faith Is The Victory",
        stanzas:{
            1: " Encamped along the hills of light,Ye Christian soldiers, riseAnd press the battle ere the nightShall veil the glowing skies.Against the foe in vales belowLet all our strength be hurled;Faith is the victory, we know,That overcomes the world.",
            2: "His banner over us is love,Our sword the Word of God;We tread the road the saints aboveWith shouts of triumph trod.By faith they, like a whirlwind's breath,Swept on o'er ev'ry field;The faith by which they conquered deathIs still our shining shield.",
            3: "To him who overcomes the foeWhite raiment shall be giv'n;Before the angels he shall knowHis name confessed in heav'n.Then onward from the hills of light,Our hearts with love aflame;We'll vanquish all the hosts of nightIn Jesus' conq'ring name."
        },
        chorus: "Faith is the victory! (Faith is the victory!)Faith is the victory! (Faith is the victory!) Oh, glorious victory That overcomes the world.",
        song_url: `${path_name}459-FaithIsTheVictory.mp3`,
        author: "John Henry Yates"


    },
    "LeadOnOKingEternal": {
        song_num: 460,
        title:"Lead On, O King Eternal",
        stanzas:{
            1: " Lead on, O King eternal,the day of march has come;henceforth in fields of conquest your tents will be our home.Through days of preparation your grace has made us strong;and now, O King eternal,we lift our battle song.",
            2: "Lead on, O King eternal,till sin's fierce war shall cease,and holiness shall whisperthe sweet amen of peace.For not with swords' loud clashing or roll of stirring drums with deeds of love and mercy the heavenly kingdom comes.",
            3: "Lead on, O King eternal;we follow, not with fears,for gladness breaks like morning where'er your face appears.Your cross is lifted o'er us,we journey in its light;the crown awaits the conquest;lead on, O God of might."
            

        },
        chorus: "",
        song_url: `${path_name}460-LeadOnOKingEternal.mp3`,
        author: "Ernest W. Shurtleff"


    },
    "TheBannerOfTheCross": {
        song_num: 461,
        title:"	The Banner Of The Cross",
        stanzas:{
            1: "There's a royal banner given for display To the soldiers of the King;As an ensign fair we lift it up today,While as ransomed ones we sing.Marching on, marching on,For Christ count everything but loss!And to crown Him King, we'll toil and sing,'Neath the banner of the cross!",
            2: "Though the foe may rage and gather as the flood,Let the standard be displayed;And beneath its folds, as soldiers of the Lord,For the truth be not dismayed!",
            3: "Over land and sea, wherever man may dwell,Make the glorious tidings known;Of the crimson banner now the story tell,While the Lord shall claim His own!"     
        },
        chorus: "",
        song_url: `${path_name}461-TheBannerOfTheCross.mp3`,
        author: "Daniel W. Whittle"


    },
    "IveAHomeBeyondTheRiver": {
        song_num: 462,
        title:"	I've a Home Beyond The River",
        stanzas:{
            1: "Oh the blessed contemplationWhen with trouble here I sigh I've a home beyond the river That I'll enter by and by",
            2: "Just a little more to la-bor, Tell the story, watch and pray; just a few more earthly sorrows,then to heave'n we'll fly away",
            3: "Oh how sweet t'will be to meet them,all the ransomed hosts above;Sweeter still to see my Savior,praise him for redeeming love.",
            4: "Tho the hills are rough and stony,and the valleys dark and cold,I must walk the path before me,it will someday turn to gold."

        },
        chorus: "I've a home beyond the river,I've a mansion bright and fair.I've a home beyond the river,I will dwell with Jesus there.",
        song_url: `${path_name}462-IveAHomeBeyondTheRiver.mp3`,
        author: "John W. Peterson"


    },
    "WhenTheRollIsCalledUpYonder": {
        song_num: 463,
        title:"When The Roll Is Called Up Yonder",
        stanzas:{
            1: "When the trumpet of the Lord shall sound and time shall be no more,And the morning breaks, eternal, bright and fair;When the saved of earth shall gather over on the other shore,And the roll is called up yonder, I'll be there.",
            2: "On that bright and cloudless morning when the dead in Christ shall rise,And the glory of his resurrection share;When his chosen ones shall gather to their home beyond the skies,And the roll is called up yonder, I'll be there.",
            3: "Let us labor for the Master from the dawn till setting sun;Let us talk of all his wondrous love and care.Then when all of life is over and our work on earth is done,And the roll is called up yonder, I'll be there."
        },
        chorus: "When the roll is called up yonder,When the roll is called up yonder,When the roll is called up yonder,When the roll is called up yonder, I'll be there.",
        song_url: `${path_name}463-WhenTheRollIsCalledUpYonder.mp3`,
        author: "James M. Black"


    },
    "HeThePearlyGatesWillOpen": {
        song_num: 464,
        title:"He The Pearly Gates Will Open",
        stanzas:{
            1: " Love divine, so great and wondrous,Deep and mighty, pure, sublime,Coming from the heart of Jesus,Just the same through tests of time!",
            2: "Like a dove when hunted, frightened,As a wounded fawn was I;Brokenhearted, yet He healed me.He will heed the sinner's cry. ",
            3: "Love divine, so great and wondrous!All my sins He then forgave;I will sing His praise forever,For His blood, His power to save.",
            4: "In life's eventide, at twilight,At His door I'll knock and wait;By the precious love of Jesus,I shall enter heaven's gate."

        },
        chorus: "He the pearly gates will open,So that I may enter in;For He purchased my redemptionAnd forgave me all my sin.",
        song_url: `${path_name}464-HeThePearlyGatesWillOpen.mp3`,
        author: "Frederick A. Blom"


    },
    "MySaviorFirstOfAll": {
        song_num: 465,
        title:"My Savior First Of All",
        stanzas:{
            1: "When my lifework is ended and I cross the swelling tide,When the bright and glorious morning I shall see;I shall know my Redeemer when I reach the other side,And His smile will be the first to welcome me.",
            2: " Oh, the soul thrilling rapture when I view His blessed face,And the luster of His kindly beaming eye;How my full heart will praise Him for the mercy, love and graceThat prepared for me a mansion in the sky.",
            3: "Oh, the dear ones in glory, how they beckon me to come,And our parting at the river I recall;To the sweet vales of Eden they will sing my welcome home,But I long to meet my Savior first of all.",
            4: " Thro' the gates to the city in a robe of spotless white,He will lead me where no tears will ever fall;In the glad song of ages I shall mingle with delight,But I long to meet my Savior first of all."

        },
        chorus: "I shall know Him, (I shall know Him,) I shall know Him,And redeemed by His side I shall stand;I shall know Him, (I shall know Him,) I shall know HimBy the print of the nails in His hand.",
        song_url: `${path_name}465-MySaviorFirstOfAll.mp3`,
        author: "Fanny Crosby"


    },
    "WhenWeSeeChrist": {
        song_num: 466,
        title:"When We See Christ",
        stanzas:{
            1: "It will be worth it all When we see Je - sus, Life's trials will,seem so small When we see Christ; One glimpse of His dear face All sor-row will e-rase, So brave-ly run the race Till we see Christ."
           

        },
        chorus: "",
        song_url: `${path_name}466-WhenWeSeeChrist.mp3`,
        author: "Esther Kerr Rusthoi"


    },
    "WhenWeAllGetToHeaven": {
        song_num: 467,
        title:"	When We All Get To Heaven",
        stanzas:{
            1: "Sing the wondrous love of Jesus,Sing His mercy and His grace;In the mansions bright and blessedHe'll prepare for us a place.",
            2: " While we walk the pilgrim pathwayClouds will overspread the sky;But when trav'ling days are over Not a shadow, not a sigh",
            3: "Let us then be true and faithful,Trusting, serving ev'ry day;Just one glimpse of Him in glory Will the toils of life repay.",
            4: "Onward to the prize before us!Soon His beauty we'll behold;Soon the pearly gates will open We shall tread the streets of gold."

        },
        chorus: "When we all get to heaven, what a day of rejoicing that will be!When we all see Jesus,we'll sing and shout the victory!",
        song_url: `${path_name}467-WhenWeAllGetToHeaven.mp3`,
        author: "Eliza E. Hewit"


    },

    "InTheSweetByAndBy": {
        song_num: 468,
        title:"In The Sweet By And By",
        stanzas:{
            1: "There's a land that is fairer than day,And by faith we can see it afar,For the Father waits over the wayTo prepare us a dwelling place there.",
            2: "We shall sing on that beautiful shoreThe melodious songs of the blest;And our spirits shall sorrow no more-Not a sigh for the blessing of rest.",
            3: " To our bountiful Father aboveWe will offer our tribute of praiseFor the glorious gift of His love And the blessings that hallow our days."
        

        },
        chorus: "In the sweet by and by,We shall meet on that beautiful shore;In the sweet by and by,We shall meet on that beautiful shore.",
        song_url: `${path_name}468-InTheSweetByAndBy.mp3`,
        author: "Sanford Fillmore Bennett"


    },
    "BeyondTheSunset": {
        song_num: 469,
        title:"	Beyond The Sunset",
        stanzas:{
            1: "Be-yond the sun - set, O bliss-ful morn - ing, When with our Sav - ior heav'n is be - gun; Earth's toil-ing end ed, O glo -rious dawn - ing— Be-yond the sun - set when day is done",
            2: " Be-yond the sun - set no clouds will gath - er, No storms will threat-en, no fears an - noy; O day of glad -ness, O day un end - ing— Be-yond the sun - set, e - ter-nal joy!",
            3: "Be-yond the sun - set a hand will guide me To God the Fa - ther, whom | a - dore; His glo-rious pres-ence, His words of wel - come, Will be my por - tion on that fair shore.",
            4: "Be - yond the sun - set, O glad re - un - ion With our dear loved ones who've gone be - fore; In that fair home-land we'll know no part - ing— Be-yond the sun - set for-ev-er - more!"

        },
        chorus: "",
        song_url: `${path_name}469-BeyondTheSunset.mp3`,
        author: "Virgil P. Brock"


    },
    "WhatADayThatWillBe": {
        song_num: 470,
        title:"What A Day That Will Be!",
        stanzas:{
            1: "There is com - ing a day when no heart - aches shall come,No more clouds in the sky, no more tears to dim the eye;All is peace for-ev-er - more on that hap - py gold-en shore— What a day, glo-ri-ous day that will bel!",
            2: "There'll be no sorrow there,No more burdens to bear,No more sickness, no pain,No more parting over there;And forever I will be,With the One who died for me,What a day, glorious day that will be."
        },
        chorus: "What a day that will be,When my Jesus I shall see,And I look upon His face,The One who saved me by His grace;When He takes me by the hand,And leads me through the Promised Land,What a day, glorious day that will be.",
        song_url: `${path_name}470-WhatADayThatWillBe.mp3`,
        author: "JIM HILL"


    },
    "MansionOverTheHilltop": {
        song_num: 471,
        title:"Mansion Over The Hilltop",
        stanzas:{
            1: " I'm sat- is - fied with just a cot-tage be - low, A lit - tle sil -ver and a lit - tle gold; But in that cit - y where the ransomed will shine a want a gold one that's silver lined",
            2: " Tho often tempt-ed, tor - mented and test - ed And, like the proph-et, my pil-low a stone, And tho | find here no permanent  dwelling I know He'll give a mansion my own.",
            3: "Don't think me poor or de - sert-ed or lone - ly— I'm not discouraged, I'm heav - en - bound; I'm just a pil - grim in search of a city, I want a mansion,a harp and a crown",
            

        },
        chorus: "I've got a mansion just over the hill-top, in that bright land where we'll never grow old; And some the yonder we will.",
        song_url: `${path_name}471-MansionOverTheHilltop.mp3`,
        author: "IRA F. STANPHILL"


    },
    "OverTheSusnetMountains": {
        song_num: 472,
        title:"Over The Susnet Mountains",
        stanzas:{
            1: "O-ver the sun-set moun - tains Some-day Ill soft - ly go,In-to the arms of Je - sus— He who has loved me so.",
            2: "Toil-ingwill all be end - ed, Shad-ows will flee a - way;Sor-row will be for - got - ten— O whata won-der-ful day!"
            

        },
        chorus: "O -ver the sun - set moun - tains, Heav-en a - waits for me;O -ver the sun - set moun - tains, Je-susmy Sav-ior I'll see.",
        song_url: `${path_name}472-OverTheSusnetMountains.mp3`,
        author: "John W. Peterson"
    },
    "OThatWillBeGlory": {
        song_num: 473,
        title:"O That Will Be Glory",
        stanzas:{
            1: " When all my labors and trials are o'er,And I am safe on that beautiful shore,Just to be near the dear Lord I adoreWill through the ages be glory for me.",
            2: "When by the gift of His infinite grace,I am accorded in heaven a place,Just to be there and to look on His face Will through the ages be glory for me.",
            3: "Friends will be there I have loved long ago;Joy like a river around me will flow;Yet just a smile from my Savior, I know,Will through the ages be glory for me."


        },
        chorus: "O that will be glory for me,Glory for me, glory for me;When by His grace I shall look at His face,That will be glory, be glory for me",
        song_url: `${path_name}473-OThatWillBeGlory.mp3`,
        author: "	Charles H. Gabriel"


    },
    "JesusLedMeAllTheWay": {
        song_num: 474,
        title:"Jesus Led Me All The Way",
        stanzas:{
            1: "Someday life's journey will be o'erAnd I shall reach that distant shoreI'll sing while ent'ring Heaven's door Jesus led me all the way",
            2: "If God should let me there reviewThe winding paths of earth I knewIt would be proven clear and true Jesus led me all the way",
            3: "And hither to my Lord has ledToday He guides each step I treadAnd soon in Heav'n it will be said Jesus led me all the way"
    

        },
        chorus: "Jesus led me all the wayLed me step by step each dayI will tell the saints and angelsAs I lay my burdens down Jesus led me all the way",
        song_url: `${path_name}474-JesusLedMeAllTheWay.mp3`,
        author: "John W. Peterson"


    },
    "WereMarchingToZion": {
        song_num: 475,
        title:"We're Marching To Zion",
        stanzas:{
            1: " Come, we that love the Lord,and let our joys be known;join in a song with sweet accord,and thus surround the throne.",
            2: "Let those refuse to sing who never knew our God;but children of the heav'nly Kingmay speak their joys abroad.",
            3: "The hill of Zion yields a thousand sacred sweets before we reach the heav'nly fields,or walk the golden streets.",
            4: "Then let our songs abound,and every tear be dry;we're marching through Emmanuel's ground to fairer worlds on high."

        },
        chorus: "",
        song_url: `${path_name}475-WereMarchingToZion.mp3`,
        author: "Isaac Watts"


    },
    "ShallWeGatherAtTheRiver": {
        song_num: 476,
        title:"Shall We Gather At The River?",
        stanzas:{
            1: "Shall we gather at the river,Where bright angel feet have trod;With its crystal tide foreverFlowing by the throne of God?",
            2: "On the margin of the river,Washing up its silver spray,We will walk and worship ever,All the happy golden day.",
            3: "Ere we reach the shining river,Lay we ev'ry burden down;Grace our spirits will deliver,And provide a robe and crown.",
            4: "Soon we'll reach the shining river,Soon our pilgrimage will cease;Soon our happy hearts will quiver With the melody of peace."

        },
        chorus: "Yes, we'll gather at the river,The beautiful, the beautiful river;Gather with the saints at the river That flows by the throne of God.",
        song_url: `${path_name}476-ShallWeGatherAtTheRiver.mp3`,
        author: "Robert Lowry"


    },
    "ForAllTheSaints": {
        song_num: 477,
        title:"For All The Saints",
        stanzas:{
            1: "For all the saints who from their labors rest,who Thee by faith before the world confessed;Thy name, O Jesus, be forever blest.Alleluia, Alleluia!",
            2: "Thou wast their Rock, their Fortress and their Might;Thou, Lord, their Captain in the well-fought fight;Thou, in the darkness drear, their one true Light.Alleluia, Alleluia!",
            3: "O blest communion, fellowship divine!We feebly struggle, they in glory shine;yet all are one in Thee, for all are Thine.Alleluia, Alleluia!",
            4: "And when the strife is fierce, the warfare long,steals on the ear the distant triumph song,and hearts are brave again, and arms are strong.Alleluia, Alleluia!",
            5: " But then there breaks a still more glorious day:the saints triumphant rise in bright array;the King of glory passes on His way.Alleluia, Alleluia!",
            6: " But then there breaks a still more glorious day:the saints triumphant rise in bright array;the King of glory passes on His way.Alleluia, Alleluia!"

        },
        chorus: "",
        song_url: `${path_name}477-ForAllTheSaints.mp3`,
        author: "William W. How"

    },
    "AbideWithMe": {
        song_num: 478,
        title:"Abide With Me",
        stanzas:{
            1: "Abide with me: fast falls the eventide;the darkness deepens; Lord, with me abide.When other helpers fail and comforts flee,Help of the helpless, O abide with me.",
            2: "Swift to its close ebbs out life's little day;earth's joys grow dim, its glories pass away.Change and decay in all around I see.O thou who changest not, abide with me.",
            3: "I need thy presence every passing hour.What but thy grace can foil the tempter's power?Who like thyself my guide and strength can be?Through cloud and sunshine, O abide with me.",
            4: "I fear no foe with thee at hand to bless,ills have no weight, and tears no bitterness.Where is death's sting? Where, grave, thy victory?I triumph still, if thou abide with me.",
            5: "Hold thou thy cross before my closing eyes.Shine through the gloom and point me to the skies.Heaven's morning breaks and earth's vain shadows flee;in life, in death, O Lord, abide with me."
        },
        chorus: "",
        song_url: `${path_name}478-AbideWithMe.mp3`,
        author: "Henry F. Lyte"


    },
    "FaceToFace": {
        song_num: 479,
        title:"Face To Face",
        stanzas:{
            1: "Face to face with Christ, my Savior,Face to face- what will it beWhen with rapture I behold him,Jesus Christ who died for me?",
            2: "Only faintly now I see himWith the darkened veil between,But a blessed day is coming When his glory shall be seen. ",
            3: "What rejoicing in his presence,When are banished grief and pain;When the crooked ways are straightened And the dark things shall be plain.",
            4: "Face to face- oh, blissful moment!Face to face- to see and know;Face to face with my Redeemer,Jesus Christ who loves me so."

        },
        chorus: "Face to face I shall behold him,Far beyond the starry sky;Face to face in all his glory,I shall see him by and by.",
        song_url: `${path_name}479-FaceToFace.mp3`,
        author: "Carrie E. Breck"


    },
    "TheSandsOfTimeAreSinking": {
        song_num: 480,
        title:"The Sands Of Time Are Sinking",
        stanzas:{
            1: "The sands of time are sinking;the dawn of heaven breaks;the summer morn I've sighed for,the fair sweet morn awakes;dark, dark has been the midnight,but dayspring is at hand,and glory, glory dwelleth in Emmanuel's land.",
            2: "The King there in His beauty with out a veil is seen;it were a well-spent journey,though trials lay between:the Lamb with His fair army on Zion's mountain stands,and glory, glory dwelleth in Emmanuel's land.",
            3: "O Christ, He is the fountain,the deep, sweet well of love!The streams on earth I've tasted;more deep I'll drink above:there to an ocean fullness His mercy doth expand,and glory, glory dwelleth in Emmanuel's land.",
            4: "The bride eyes not her garment,but her dear bridegroom's face;I will not gaze at glory,but on my King of grace;not at the crown He giveth,but on His piercéd hands;the Lamb is all the glory of Emmanuel's land."

        },
        chorus: "",
        song_url: `${path_name}480-TheSandsOfTimeAreSinking.mp3`,
        author: "Anne Ross Cousin"


    },
    "WhereTheRosesNeverFade": {
        song_num: 481,
        title:"	Where The Roses Never Fade",
        stanzas:{
            1: "I am going to a cityWhere the streets with gold are laidWhere the tree of life is blooming And the roses never fade",
            2: "In this world we have our troublesSatan's snares we must evadeWe'll be free from all temptations Where the roses never fade",
            3: "Loved ones gone to be with JesusIn their robes of white arrayedNow are waiting for my coming Where the roses never fade",

        },
        chorus: "Here they bloom but for a seasonSoon their beauty is decayedI am going to a city Where the roses never fade",
        song_url: `${path_name}481-WhereTheRosesNeverFade.mp3`,
        author: "Jack Osborn,Elsie Osborn,James C. Miller"


    },
    "WeShallWalkThroughTheValley": {
        song_num: 482,
        title:"We Shall Walk Through The Valley",
        stanzas:{
            1: "We shall walk through the valley in peace;We shall walk through the valley in peace;If Jesus Himself shall be our Leader,We shall walk through the valley in peace.",
            2: "There will be no sorrow there;There will be no sorrow there.If Jesus Himself shall be our Leader,We shall walk through the valley in peace.",
            3: "There will be no dying there;There will be no dying there.If Jesus Himself shall be our Leader,We shall walk through the valley in peace.",
            

        },
        chorus: "",
        song_url: `${path_name}482-WeShallWalkThroughTheValley.mp3`,
        author: "A. L. Hatter"


    },
    "IveALongingTnMyHeart": {
        song_num: 483,
        title: "I've A Longing In My Heart",
        stanzas:{
            1: "I've a longing in my heart for Jesus I've a longing in my heart to see his face;I am weary O so weary of traveling here below I've a longing in my heart him"
        },
        chorus: "",
        song_url: `${path_name}483-IveALongingTnMyHeart.mp3`,
        author: "Dorothy Master Green"


    },
    "OnJordansStormyBankIStand": {
        song_num: 484,
        title: "On Jordan's Stormy Banks I Stand",
        stanzas:{
            1: "On Jordan's stormy banks I stand,and cast a wishful eye to Canaan's fair and happy land,where my possessions lie.",
            2: "O'er all those wide extended plains shines one eternal day;there God the Son forever reigns,and scatters night away.",
            3: "No chilling winds or poisonous breath can reach that healthful shore;sickness and sorrow, pain and death,are felt and feared no more.",
            4: "When I shall reach that happy place,I'll be forever blest,for I shall see my Father's face,and in his bosom rest."

        },
        chorus: "I am bound for the promised land,I am bound for the promised land;oh, who will come and go with me?I am bound for the promised land.",
        song_url: `${path_name}484-OnJordansStormyBanksIStand.mp3`,
        author: "	Samuel Stennett"
    },
    "AmericaTheBeautiful": {
        song_num: 485,
        title: "America,The Beautiful",
        stanzas:{
            1: "O beautiful for spacious skies,for amber waves of grain;for purple mountain majesties above the fruited plain!America! America! God shed his grace on thee,and crown thy good with brotherhood from sea to shining sea.",
            2: "O beautiful for heroes proved in liberating strife,who more than self their country loved,and mercy more than life!America! America! May God thy gold refine,till all success be nobleness,and every gain divine.",
            3: "O beautiful for patriot dream that sees beyond the years thine alabaster cities gleam,undimmed by human tears!America! America! God mend thine every flaw,confirm thy soul in self-control,thy liberty in law."

        },
        chorus: "",
        song_url: `${path_name}485-AmericaTheBeautiful.mp3`,
        author: "Katharine Lee Bates"
    },
    "MyCountryTisOfThee": {
        song_num: 486,
        title: "My Country, 'Tis Of Thee",
        stanzas:{
            1: "My country, 'tis of thee,sweet land of liberty,of thee I sing:land where my fathers died,land of the pilgrims' pride,from every mountainside let freedom ring!",
            2: "My native country, thee,land of the noble free,thy name I love;I love thy rocks and rills,thy woods and templed hills;my heart with rapture thrills like that above.",
            3: "Let music swell the breeze,and ring from all the trees sweet freedom's song:let mortal tongues awake,let all that breathe partake;let rocks their silence break,the sound prolong."

        },
        chorus: "",
        song_url: `${path_name}486-MyCountryTisOfThee.mp3`,
        author: "Samuel F. Smith"

    },
    "GodBlessOurNativeLand": {
        song_num: 487,
        title:"God Bless Our Native Land",
        stanzas:{
            1: " God bless our native land;firm may she ever stand thro' storm and night!When the wild tempests rave,Ruler of wind and wave,do thou our country save by thy great might.",
            2: "For her our prayers shall rise to God above the skies;on whom we wait.Thou who art ever nigh,guarding with watchful eye,to thee aloud we cry:God save the state!"
        },
        chorus: "",
        song_url: `${path_name}487-GodBlessOurNativeLand.mp3`,
        author: "Siegfried A. Mahlmann,William E. Hickson"


    },
    "GodOfOurFathers": {
        song_num: 488,
        title:"God Of Our Fathers",
        stanzas:{
            1: "God of the ages, whose almighty hand leads forth in beauty all the starry band of shining worlds in splendor through the skies,our grateful songs before thy throne arise.",
            2: "Thy love divine hath led us in the past;in this free land with thee our lot is cast;be thou our ruler, guardian, guide, and stay,thy Word our law, thy paths our chosen way.",
            3: " From war's alarms, from deadly pestilence,be thy strong arm our ever sure defense;thy true religion in our hearts increase;thy bounteous goodness nourish us in peace.",
            4: "Refresh thy people on their toilsome way;lead us from night to never-ending day;fill all our lives with love and grace divine,and glory, laud, and praise be ever thine."
        },
        chorus: "",
        song_url: `${path_name}488-GodOfOurFathers.mp3`,
        author: "Daniel C. Roberts"

    },
    "ThouByHeavenlyHostsAdored": {
        song_num: 489,
        title:"Thou, By Heavenly Hosts Adored",
        stanzas:{
            1: "Christ, by heavenly hosts adored,Gracious, mighty, sov'reign Lord,God of nations, King of kings,Head of all created things,By the Church with joy confessed,God o'er all forever blest;Pleading at Thy throne we stand,Save Thy people, bless our land.",
            2: "On our fields of grass and grainSend, O Lord, the kindly rain;O'er our wide and goodly land Crown the labors of each hand.Let Thy kind protection be O'er our commerce on the sea:Open, Lord, Thy bounteous hand,Bless Thy people, bless our land.",
            3: "Let our rulers ever beMen that love and honor Thee;Let the powers by Thee ordainedBe in righteousness maintained;In the people's hearts increaseLove of piety and peace;Thus united we shall stand One wide, free, and happy land."

        },
        chorus: "",
        song_url: `${path_name}489-ThouByHeavenlyHostsAdored.mp3`,
        author: "Henry Harbaugh"


    },
    "WhereCrossTheCrowdedWaysOfLife": {
        song_num: 490,
        title:"Where Cross The Crowded Ways Of Life",
        stanzas:{
            1: "Where cross the crowded ways of life,where sound the cries of race and clan,above the noise of selfish strife,we hear your voice, O Son of Man.",
            2: "In haunts of wretchedness and need,on shadowed thresholds fraught with fears,from paths where hide the lures of greed,we catch the vision of your tears.",
            3: "From tender childhood's helplessness,from human grief and burdened toil,from famished souls, from sorrow's stress,your heart has never known recoil.",
            4: "The cup of water given for you still holds the freshness of your grace;yet long these multitudes to view the sweet compassion of your face.",
            5: "O Master, from the mountainside,make haste to heal these hearts of pain;among these restless throngs abide;O tread the city's streets again;",
            6: "Till all the world shall learn your love,and follow where your feet have trod;till glorious from your heaven above shall come the city of our God."
        },
        chorus: "",
        song_url: `${path_name}490-WhereCrossTheCrowdedWaysOfLife.mp3`,
        author: "Franklin Mason North"

    },
    "WhenYourHeartWithJoyOverflowing": {
        song_num: 491,
        title: "When Your Heart, With Joy O'erflowing",
        stanzas:{
            1: "When thy heart, with joy o'erflowing,Sings a thankful prayer,In thy joy, O let thy brother With thee share.",
            2: " When the harvest sheaves ingatheredFill thy barns with store,To thy God and to thy brother Give the more.",
            3: " If thy soul, with power uplifted,Yearn for glorious deed,Give thy strength to serve thy brother In his need",
            4: " If thy soul, with power uplifted,Yearn for glorious deed,Give thy strength to serve thy brother In his need"
        },
        chorus: "",
        song_url: `${path_name}491-WhenYourHeartWithJoyOverflowing.mp3`,
        author: "Theodore Chickering Williams"

    },
    "LetYourHeartBeBroken": {
        song_num: 492,
        title: "Let Your Heart Be Broken",
        stanzas:{
            1: "Let your heart be broken for a world in need:Feed the mouths that hunger, soothe the wounds that bleed,Give the cup of water and the loaf of breadBe the hands of Jesus, serving in His stead.",
            2: "Here on earth applying principles of love,Visible expression - God still rules above Living illustration of the Living Word To the minds of all who've Never seen or heard.",
            3: "Blest to be a blessing privileged to care,Challenged by the need apparent everywhere.Where mankind is wanting, fill the vacant place.Be the means through which the Lord reveals His grace.",
            4: "Add to your believing deeds that prove it true,Knowing Christ as Savior, make Him Master, too.Follow in His footsteps, go where He has trod;In the world's great trouble risk yourself for God.",
            5: "Let your heart be tender and your vision clear;See mankind as God sees, serve Him far and near.Let your heart be broken by a brother's pain;Share your rich resources, give and give again."

        },
        chorus: "",
        song_url: `${path_name}492-LetYourHeartBeBroken.mp3`,
        author: "Bryan Jeffery Leech"


    },
    "Cups0fColdWater": {
        song_num: 493,
        title: "Cups Of Cold Water",
        stanzas:{
            1: "Helping the widows and Orphans in their need.Healing the Sick ones and bind the heart that bleed.Feeding the hungry concerns the Lord above.By this we serve him and demonstrate His Love.",
            2: "Sharing the Gospel with sinners gone astray,Holding the light up so they can find their way.Lifting up the fallen, this we must surely do,If is our calling as Christians we are through."
        },
        chorus: "Cups of cold water given in Jesus name,Cups of cold waters are never given in          vain. Someday in Heavens when we meet the Lord,  Each deed of kindness will bring a rich      reward.",
        song_url: `${path_name}493-Cups0fColdWater.mp3`,
        author: "John W. Peterson"


    },
    "ShareJesusWithOthers": {
        song_num: 494,
        title:"Share Jesus With Others",
        stanzas:{
            1: "Sin -ful and lone-ly and dy - ing, Wan-d'ring far in the night Wait - ing, long-ing for some - one To lead them to Christand the light",
            2: "This is the ul - ti-mate kind-ness, This is love at its best:Shar-ing Je- sus with oth - . ers, The lone- ly, the lost and op - pressed."
        },
        chorus: "Share Je-sus with oth-ers— He loves and will save them too;Share Je-sus with oth-ers— That's what a Chris -tian should do.",
        song_url: `${path_name}494-ShareJesusWithOthers.mp3`,
        author: "John W. Peterson"


    },
    "JesusSaves": {
        song_num: 495,
        title:"Jesus Saves!",
        stanzas:{
            1: "We have heard the joyful sound:Jesus saves! Jesus saves!Spread the tidings all around:Jesus saves! Jesus saves!Bear the news to ev'ry land,Climb the steeps and cross the waves;Onward! 'tis our Lord's command;Jesus saves! Jesus saves!",
            2: "Waft it on the rolling tide:Jesus saves! Jesus saves! Tell to sinners far and wide:Jesus saves! Jesus saves!Sing, ye islands of the sea;Echo back, ye ocean caves;Earth shall keep her jubilee:Jesus saves! Jesus saves!",
            3: "Sing above the battle strife:Jesus saves! Jesus saves! By His death and endless life:Jesus saves! Jesus saves!Sing it softly through the gloom,When the heart for mercy craves;Sing in triumph o'er the tomb:Jesus saves! Jesus saves!",
            4: "Give the winds a mighty voice:Jesus saves! Jesus saves! Let the nations now rejoice:Jesus saves! Jesus saves!Shout salvation full and free,Highest hills and deepest caves;This our song of victory:Jesus saves! Jesus saves!"

        },
        chorus: "",
        song_url: `${path_name}495-JesusSaves.mp3`,
        author: "Priscilla J. Owens"


    },
    "HearTheVoiceOfJesusCalling": {
        song_num: 496,
        title:"Hear The Voice Of Jesus Calling",
        stanzas:{
            1: "Hark, the voice of Jesus crying,Who will go and work today?Fields are white, and harvests waiting,who will bear the sheaves away?Long and loud the Master calls us,rich reward He offers free;who will answer, gladly saying,Here am I, send me, send me",
            2: "If you cannot cross the ocean,and the distant lands explore,you can find the lost around you,you can help them at your door;if you cannot give your thousands,you can give the widow's mite;what you truly give for Jesus will be precious in His sight.",
            3: "If you cannot be the watchman standing high on Zion's wall,pointing out the path to heaven,off'ring life and peace to all,with your prayers and with your bounties you can do what heav'n demands;you can be like faithful Aaron,holding up the prophet's hands.",
            4: "Let none hear you idly saying,There is nothing I can do,while the lost of earth are dying,and the Master calls for you;take the task He gives you gladly;let His work your pleasure be;answer quickly when He calls you,Here am I, send me, send me."

        },
        chorus: "",
        song_url: `${path_name}496-HearTheVoiceOfJesusCalling.mp3`,
        author: "Daniel March"


    },
    "OZionHaste": {
        song_num: 497,
        title: "O Zion, Haste",
        stanzas:{
            1: "O Christians, haste, your mission high fulfilling,to tell to all the world that God is light,that he who made all nations is not willing one soul should perish, lost in shades of night.",
            2: "Behold how many thousands still are lying bound in the dreary prison-house of sin with none to tell them of the Savior's dying or of the life he died for them to win.",
            3: "Proclaim to ev'ry people, tongue, and nation that God, in whom they live and move, is love;tell how he stooped to save his lost creation and died on earth that they might live above.",
            4: "Give of your sons to bear the mes - sage glo - rious,give of your wealth to speed them on their way;Pour out your sour for them in prayer victorious and all you spending"

        },
        chorus: "Publish glad tidings, tidings of peace,tidings of Jesus, redemption and release.",
        song_url: `${path_name}497-OZionHaste.mp3`,
        author: "Mary Ann Thomson"


    },
    "ChristForTheWorldWeSing": {
        song_num: 498,
        title:"Christ For The World We Sing!",
        stanzas:{
            1: " Christ for the world we sing;the world to Christ we bring with loving zeal:the poor and them that mourn,the faint and overborne,sin-sick and sorrow-worn,for Christ doth heal.",
            2: "Christ for the world we sing;the world to Christ we bring with fervent pray'r:the wayward and the lost,by restless passions tossed,redeemed at countless cost from dark despair.",
            3: " Christ for the world we sing;the world to Christ we bring with one accord:with us the work to share,with us reproach to dare,with us the cross to bear,for Christ our Lord.",
            4: "Christ for the world we sing;the world to Christ we bring with joyful song:the newborn souls whose days,reclaimed from error's ways,inspired with hope and praise,to Christ belong."

        },
        chorus: "",
        song_url: `${path_name}498-ChristForTheWorldWeSing.mp3`,
        author: "Samuel Wolcott"


    },
    "AmIASoldierOfTheCross": {
        song_num: 499,
        title:"Am I A Soldier Of The Cross?",
        stanzas:{
            1: "Am I a soldier of the cross,a foll'wer of the Lamb,and shall I fear to own His cause,or blush to speak His name?",
            2: "Must I be carried to the skies on flow'ry beds of ease,while others fought to win the prize,and sailed thro' bloody seas?",
            3: "Are there no foes for me to face?Must I not stem the flood?Is this vile world a friend to grace,to help me on to God?",
            4: "Sure I must fight, if I would reign;increase my courage, Lord!I'll bear the toil, endure the pain,supported by Thy word.",
            5: "The saints in all this glorious war shall conquer, though they die;they see the triumph from afar by faith's discerning eye.",
            6: "When that illustrious day shall rise,and all Thine armies shine in robes of vict'ry thro' the skies,the glory shall be Thine."

        },
        chorus: "",
        song_url: `${path_name}499-AmIASoldierOfTheCross.mp3`,
        author: "Isaac Watts"


    },
    "SoSendIYouByGraceMadeStrong": {
        song_num: 500,
        title:"So Send I You — By Grace Made Strong",
        stanzas:{
            1: " So send I you by grace made strong to triumph, O'er hosts of hell,o'er darkness, death and sin,and in that name to conquer So send I you,My victory to win.",
            2: "So send I you to take to souls in bondage The word of truth that sets the captive free,To break the bonds of sin, to loose death's fetters So send I you,to bring the lost to Me",
            3: "So send I youMy strength to know in weaknessMy joy in grief My perfect peace in painTo prove My power, My grace,My promised presence So send I you eternal fruit to gain",
            4: "So send I you To bear My cross with patienceAnd then one day With joy to lay it down To hear My voice Well done, My faithful servant Come share My throne,My kingdom and My crown!"

        },
        chorus: "",
        song_url: `${path_name}500-SoSendIYouByGraceMadeStrong.mp3`,
        author: "E. Margaret Clarkson"


    }

}


