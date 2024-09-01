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
    },
}


/**=================================================
 *              SONG IMPLEMENTATION
 *=================================================*/
/**
 * TODO: DO THE IMPLEMENTATION HERE USING THE TEMPLATE ABOVE AND FOLLOWING THE EXAMPLE FORMAT
 * VISIT THIS LINK TO GET THE SONGS: https://hymnary.org/hymnal/POSH1979
 */
let songs = {
    "LoHeComesWithCloudsDescending": {
        song_num: 251,
        title: "Lo! He Comes, with Clouds Descending",
        stanzas: {
            1: "Lo he comes in clouds descending, Once for helpless sinner slain! Thousand, thousand saints attending Swell the triumph of his train: Hallelujah, Hallelujah, Hallelujah, All the Angels cry amen.",
            2: "Ev'ry eye shall now behold him, Rob'd in dreadful majesty, Those who set at nought and sold Him, Pierc'd and nail'd gim to the tree. Deeply wailing, deeply wailing, deeply wailing, Shall the true Messiah see.",
            3: "Ev'ry island, sea, and mountain, Heav'n and earth, shall flee away; All who hate him, must confounded, Hear the trump proclaim the day; Come to judgment, come to judgment, come to judgment, Come to judgment come away.",
            4: "Now redemption long expected, See, in solemn pomp appear! All his saints by man rejected, Now shall meet him in the air! Hallelujah, Hallelujah, Hallelujah, See the day of God appear.",
            5: "Answer thine own bride and Spirit, Hasten Lord, the gen'ral doom, The new heav'n and earth t' inherit, Take thy pining exiles home, All creation, all creation, all creation, Travails! groans! and bids thee come. Yea, amen let all adore thee, High on thine eternal throne! Saviour, take the pow'r and glory; Claim the kingdom for thine own. O come quickly, O come quickly, O come quickly, Hallelujah! come Lord, come."
        },
        chorus: "",
        song_url: `${path_name}251-LoHeComesWithCloudsDescending.mp3`,
        author: "Charles Wesley"
    },
    "ChristReturneth": {
        song_num: 252,
        title: "Christ Returneth!",
        stanzas: {
            1: "It may be at morn, when the day is awaking, When sunlight thro' darkness and shadow is breaking, That Jesus will come in the fullness of glory; To receive from the world His own.",
            2: "It may be at midday, it may be at twilight, It may be, perchance, that the blackness of midnight Will burst into light in the blaze of His glory, When Jesus receives His own.",
            3: "While hosts cry Hosanna, from heaven descending, With glorified saints and the angels attending, With grace on His brow, like a halo of glory, Will Jesus receive His own.",
            4: "O joy! O delight! Should we go without dying, No sickness, no sadness, no dread and no crying, Caught up thro' the clouds with our Lord into glory, When Jesus receives His own."
        },
        chorus: "O Lord Jesus, how long, how long Ere we shout the glad song. Christ returneth! Hallelujah! Hallelujah! Amen, Hallelujah! Amen.",
        song_url: `${path_name}252-ChristReturneth.mp3`,
        author: "H. L. Turner"
    },
    "ChariotOfClouds": {
        song_num: 253,
        title: "Chariot Of Clouds",
        stanzas: {
            1: "Someday we'll leave this world of sin With all its dark displays, Then faith at last will turn to sight As heaven's glory breaks. Before we'll be caught up in a chariot of clouds, And oh glorious day, when in clear view we'll stand, The Lord we love beyond.",
            2: "We'll hear the trumpet's mighty sound That calls the saints to come, And we will rise to meet our Lord And find a heavenly home. Before we'll be caught up in a chariot of clouds, And oh glorious day, when in clear view we'll stand, The Lord we love beyond.",
            3: "No more the weary, toilsome way, No more the tearful night, For we shall live with Christ our Lord In everlasting light. Before we'll be caught up in a chariot of clouds, And oh glorious day, when in clear view we'll stand, The Lord we love beyond."
        },
        chorus: "",
        song_url: `${path_name}253-ChariotOfClouds.mp3`,
        author: "John W. Peterson"
    },
    "WithTheSoundOfTrumpets": {
        song_num: 254,
        title: "With The Sound Of Trumpets",
        stanzas: {
            1: "With the sound of trum-pets an-nounc-ing from the sky: Je - sus is com-ing from heav-en on high!” See, now the pearl-y gates are o - pen, Christ is pass-ing, pass - ing thru them; All the universe is watch-ing as the King, our Sav-ior - King de-scends to take His throne! With the sound of trum-pets! Tri-um-phant is song! Je - sus is com-ing to right ev - ry wrong: Cli- max of his- try, a - wait-ed so long!",
            2: "With the sound of trum-pets in re- gal maj-es - ty: Je - sus is com-ing—tri - um-phant is He! And in His glorious train are mil-lions, Saints and an-gels—heav - en's ar - mies, O how awe-some is the great and grand dis - play of pow'rin - vincible of Christ the Lord! By His ver-y bright-ness His en-e-mies are slain! And all earth's king-doms are now His do - main: Je - sus is com-ing, is com-ing to reign!"
        },
        chorus: "",
        song_url: `${path_name}254-WithTheSoundOfTrumpets.mp3`,
        author: "JOHN W. PETERSON"
    },
    "HeIsComingAgain": {
        song_num: 255,
        title: "He Is Coming Again",
        stanzas: {
            1: "He is com-ing a - gain, Helis com-ing a - gain, The ver -y same Je -sus re - ject-ed of men; He is com-ing a - gain, Hes com-ing a -gain, With pow'r and great glo-ry He is com-ing a - gain! ",
        },
        chorus: "",
        song_url: `${path_name}255-HeIsComingAgain.mp3`,
        author: "MABEL JOHNSTON CAMP"
    },
    "IWillFlyAway": {
        song_num: 256,
        title: "I'll Fly Away",
        stanzas: {
            1: "Some glad morning when this life is o'er I'll fly away To a home on God's celestial shore I'll fly away",
            2: "When the shadows of this life have grown I'll fly away Like a bird from prison bars has flown I'll fly away",
            3: "Just a few more weary days and then I'll fly away To a land where joys shall never end I'll fly away"
        },
        chorus: "I'll fly away O glory I'll fly away (in the morning) When I die hallelujah by and by I'll fly away",
        song_url: `${path_name}256-IWillFlyAway.mp3`,
        author: "Albert E. Brumley"
    },
    "WillJesusFindUsWatching": {
        song_num: 257,
        title: "Will Jesus Find Us Watching?",
        stanzas: {
            1: "When Jesus comes to reward His servants, Whether it be noon or night, Faithful to Him will He find us watching, With our lamps all trimmed and bright?",
            2: "If, at the dawn of the early morning, He shall call us one by one, When to the Lord we restore our talents, Will He answer you, 'Well done?'",
            3: "Have we been true to the trust He left us? Do we seek to do our best? If in our hearts there is naught condemns us, We shall have a glorious rest.",
            4: "Blessed are those whom the Lord finds watching, In His glory they shall share; If He shall come at the dawn or midnight, Will He find us watching there?"
        },
        chorus: "O can we say we are ready, brother? Ready for the soul's bright home? Say, will He find you and me still watching, Waiting, watching when the Lord shall come?",
        song_url: `${path_name}257-WillJesusFindUsWatching.mp3`,
        author: "Fanny Crosby"
    },
    "JesusIsComingAgain": {
        song_num: 258,
        title: "Jesus Is Coming Again",
        stanzas: {
            1: "Marvelous message we bring, Glorious carol we sing, Wonderful word of the King, Jesus is coming again",
            2: "Forest and flower exclaim Mountain and meadow the same All earth and heaven proclaim Jesus is coming again",
            3: "Standing before Him at last Trial and trouble all past Crowns at His feet we will cast Jesus is coming again"
        },
        chorus: "Coming again coming again Maybe morning maybe noon Maybe evening and maybe soon Coming again coming again Oh what a wonderful day it will be Jesus is coming again",
        song_url: `${path_name}258-JesusIsComing.mp3`,
        author: "John W. Peterson"
    },
    "LiftUpTheTrumpet": {
        song_num: 259,
        title: "Lift Up The Trumpet",
        stanzas: {
            1: "Lift up the trumpet, and loud let it ring: Jesus is coming again! Cheer up, ye pilgrims, be joyful and sing; Jesus is coming again!",
            2: "Echo it, hilltops; proclaim it, ye plains: Jesus is coming again! Coming in glory, the Lamb that was slain; Jesus is coming again!",
            3: "Heavings of earth, tell the vast, wond'ring throng: Jesus is coming again! Tempests and whirlwinds, the anthem prolong; Jesus is coming again!",
            4: "Nations are angry— by this we do know Jesus is coming again! Knowledge increases; men run to and fro; Jesus is coming again!"
        },
        chorus: "",
        song_url: `${path_name}259-LiftUpTheTrumpet.mp3`,
        author: "Jessie E. Strout"
    },
    "IsItTheCrowningDay": {
        song_num: 260,
        title: "Is It The Crowning Day?",
        stanzas: {
            1: "Jesus may come today,Glad day! Glad day!And I would see my Friend; Dangers and troubles would end If Jesus should come today.",
            2: "I may go home today,Glad day! Glad day!Seemeth I hear their song; Hail to the radiant throng!If I should go home today.",
            3: "Faithful I'll be today, Glad day! Glad day!And I will freely tell Why I should love Him so well, For He is my all today"
        },
        chorus: "Glad day! Glad day!Is it the crowning day?I'll live for today, nor anxious be, Jesus my Lord I soon shall see; Glad day! Glad day!Is it the crowning day?",
        song_url: `${path_name}260-IsItTheCrowningDay.mp3`,
        author: "Henry Ostrom, Charles H. Marsh"
    },
    "YeMustBeBornAgain": {
        song_num: 261,
        title: "Ye Must Be Born Again",
        stanzas: {
            1: "A ruler once came to Jesus by night To ask Him the way of salvation and light; The Master made answer in words true and plain, 'Ye must be born again. Ye must be born again, Ye must be born again; I verily, verily say unto thee, Ye must be born again.",
            2: "Ye children of men, attend to the word So solemnly uttered by Jesus the Lord; And let not this message to you be in vain, 'Ye must be born again. Ye must be born again, Ye must be born again; I verily, verily say unto thee, Ye must be born again.",
            3: "O ye who would enter that glorious rest, And sing with the ransomed the song of the blest, The life everlasting if ye would obtain, 'Ye must be born again. Ye must be born again, Ye must be born again; I verily, verily say unto thee, Ye must be born again.",
            4: "A dear one in heaven thy heart yearns to see, At the beautiful gate may be watching for thee, Then list to the note of this solemn refrain, 'Ye must be born again. Ye must be born again, Ye must be born again; I verily, verily say unto thee, Ye must be born again."
        },
        chorus: "",
        song_url: `${path_name}261-YeMustBeBornAgain.mp3`,
        author: "William T. Sleeper"
    },
    "JesusIsTheFriendOfSinners": {
        song_num: 262,
        title: "Jesus Is The Friend Of Sinners",
        stanzas: {
            1: "Jesus is the friend of sinners Friend of sinners friend of sinners Jesus is the friend of sinners He can set you free",
            2: "If you trust Him He will save you He will save you He will save you If you trust Him He will save you Give you life anew",
            3: "He will walk along beside you Walk beside you walk beside you He will walk along beside you Guide you day by day",
            4: "He will lead you on to glory On to glory on to gloryHe will lead you on to glory Home forevermore home forevermore"
        },
        chorus: "",
        song_url: `${path_name}262-JesusIsTheFriendOfSinners.mp3`,
        author: "John W. Peterson"
    },
    "ForThoseTearsIDied": {
        song_num: 263,
        title: "For Those Tears I Died",
        stanzas: {
            1: "You said You'd come and share all my sorrows, You said You'd be there for all my tomorrows.I came so close to sending You away: But just like You promised You came here to stay, I just had to pray.",
            2: "Your goodness so great, I can't understand.And dear Lord I know that all this was planned.I know You're here now and always will be; Your love loosed my chains and in You I'm free, But Jesus, why me?",
            3: "Jesus, I give You my heart and my soul.I know that without You, I'd never be whole.Savior, You've opened all the right doors, And I thank You and praise You from Earth's humble shores, Take me I'm Yours."
        },
        chorus: "And Jesus said come to the water, stand by my side; I know you are thirsty, you won't be denied.I felt every teardrop when in darkness You cried; And I strove to remind you, that for those tears I died.",
        song_url: `${path_name}263-ForThoseTearsIDied.mp3`,
        author: "Marsha J. Stevens"
    },
    "NotWhatTheseHandsHaveDone": {
        song_num: 264,
        title: "Not What These Hands Have Done",
        stanzas: {
            1: "Not what these hands have done can save this guilty soul; not what this toiling flesh has borne can make my spirit whole.Not what I feel or docan give me peace with God; not all my prayers and sighs and tears can bear my awful load.",
            2: "Thy work alone, O Christ, can ease this weight of sin; Thy blood alone, O Lamb of God, can give me peace within.Thy love to me, O God, not mine, O Lord, to Thee,can rid me of the dark unrest, and set my spirit free.",
            3: "Thy grace alone, O God,to me can pardon speak;Thy pow'r alone, O Son of God, can this sore bondage break.I bless the Christ of God; I rest on love divine;and with unfalt'ring lip and heart, I call this Savior mine."
        },
        chorus: "",
        song_url: `${path_name}264-NotWhatTheseHandsHaveDone.mp3`,
        author: "Horatius Bonar"
    },
    "ThereIsAFountain": {
        song_num: 265,
        title: "There Is A Fountain",
        stanzas: {
            1: "There is a fountain filled with blood Drawn from Immanuel's veins;And sinners, plunged beneath that flood, Lose all their guilty stains:Lose all their guilty stains,Lose all their guilty stains;And sinners, plunged beneath that flood, Lose all their guilty stains.",
            2: "The dying thief rejoiced to see That fountain in his day; And there may I, though vile as he, Wash all my sins away:Wash all my sins away,Wash all my sins away;And there may I, though vile as he, Wash all my sins away.",
            3: "Dear dying Lamb, Thy precious blood Shall never lose its pow'r, Till all the ransomed Church of God Be saved, to sin no more:Be saved, to sin no more,Be saved, to sin no more;Till all the ransomed Church of God Be saved to sin no more.",
            4: "E'er since by faith I saw the stream Thy flowing wounds supply, Redeeming love has been my theme, And shall be till I die:And shall be till I die,And shall be till I die;Redeeming love has been my theme, And shall be till I die.",
            5: "When this poor lisping, stamm'ring tongue Lies silent in the grave,Then in a nobler, sweeter song I'll sing Thy pow'r to save: I'll sing Thy pow'r to save, I'll sing Thy pow'r to save; Then in a nobler, sweeter song I'll sing Thy pow'r to save."
        },
        chorus: "",
        song_url: `${path_name}265-ThereIsAFountain.mp3`,
        author: "William Cowper"
    },
    "MyHopeIsInTheLord": {
        song_num: 266,
        title: "My Hope Is In The Lord",
        stanzas: {
            1: "My hope is in the Lord Who gave Himself for me And paid the priceOf all my sin at Calvary",
            2: "No merit of my ownHis anger to suppress My only hope is found In Jesus' righteousness",
            3: "And now for me He stands Before the Father's throne He shows His wounded hands And names me as His own",
            4: "His grace has planned it all 'Tis mine but to believe And recognize His work of love And Christ receive"
        },
        chorus: "For me He died For me He livesAnd everlasting life And light He freely gives",
        song_url: `${path_name}266-MyHopeIsInTheLord.mp3`,
        author: "Norman J. Clayton"
    },
    "BurdensAreLiftedAtCalvary": {
        song_num: 267,
        title: "Burdens Are Lifted At Calvary",
        stanzas: {
            1: "Days are filled with sorrow and care Hearts are lonely and drear Burdens are lifted at Calvary Jesus is very near",
            2: "Cast your care on Jesus today Leave your worry and fear Burdens are lifted at Calvary Jesus is very near",
            3: "Troubled soul the Savior can see Ev'ry heartache and tear Burdens are lifted at Calvary Jesus is very near"
        },
        chorus: "Burdens are lifted at Calvary Calvary Calvary Burdens are lifted at Calvary Jesus is very near",
        song_url: `${path_name}267-BurdensAreLiftedAtCalvary.mp3`,
        author: "John M. Moore"
    },
    "ThankYouLord": {
        song_num: 268,
        title: "Thank You, Lord",
        stanzas: {
            1: "Thank You, Lord, for saving my soul, Thank You, Lord, for making me whole; Thank You, Lord, for giving to me Thy great salvation so rich and free."
        },
        chorus: "",
        song_url: `${path_name}268-ThankYouLord.mp3`,
        author: "Seth Sykes"
    },
    "NothingButTheBlood": {
        song_num: 269,
        title: "Nothing But The Blood",
        stanzas: {
            1: "What can wash away my sin?Nothing but the blood of Jesus.What can make me whole again?Nothing but the blood of Jesus.",
            2: "What can wash away my sin?Nothing but the blood of Jesus.What can make me whole again?Nothing but the blood of Jesus.For my pardon this I see:nothing but the blood of Jesus.For my cleansing this my plea: nothing but the blood of Jesus.",
            3: "Nothing can for sin atone:nothing but the blood of Jesus.Naught of good that I have done: nothing but the blood of Jesus.",
            4: "Nothing can for sin atone:nothing but the blood of Jesus.Naught of good that I have done: nothing but the blood of Jesus."
        },
        chorus: "O precious is the flowthat makes me white as snow; no other fount I know;nothing but the blood of Jesus.",
        song_url: `${path_name}269-NothingButTheBlood.mp3`,
        author: "Robert Lowry"
    },
    "OLetYourSoulNowBeFilledWithGladness": {
        song_num: 270,
        title: "O Let Your Soul Now Be Filled With Gladness",
        stanzas: {
            1: "O let your soul now be filled with gladness, Your heart redeemed, rejoice indeed! O may the thought banish all your sadness, That in His blood you have been freed.That God's unfailing love is yours, That you, the only Son, were given; By His death, He has opened heaven, That you are ransomed as you are.",
            2: "If you seem empty of any feeling, Rejoice—you are His ransomed bride! If those you cherish seem not to love you, And dark assails from every side,Still yours the promise, come what may, In loss and triumph, in laughter, crying, In want and riches, in living, dying, That you are purchased as you are.",
            3: "It is a good, every good transcending That Christ has died for you and me! It is a gladness that has no ending, There in God's wondrous love to see! Praise be to You, O spotless Lamb, Who through the desert my soul are leading, To that fair city of joy exceeding, For which You bought me as I am."
        },
        chorus: "",
        song_url: `${path_name}270-OLetYourSoulNowBeFilledWithGladness.mp3`,
        author: "Peter Jonsson Aschan"
    },
    "FillMyCupLord": {
        song_num: 271,
        title: "Fill My Cup, Lord",
        stanzas: {
            1: "Like the wom-an at the well I was seek-ing For things that could not satisfy; and then I heard my Savior speaking: 'Draw from My werll that never shall run dry.'",
            2: "Thereare mil-lions in this world who are crav-ing The pleas - ures earthly things afford; none can match the wondrous treasure That I find in Jesus Christ my Lord. Fill my cup, Lord I lift it up, Lord! Come and quench this thirsting of my soul; Bread of heaven, feed me till I want no more Fill my cup, fill it up and make me whole!",
            3: "S0, my Dbroth-er, if the things this world gave you Leave hun - gers that won't pass away. My blessed Lord come and save you, If you kneel to him and humbly pray"
        },
        chorus: "",
        song_url: `${path_name}271-FillMyCupLord.mp3`,
        author: "Richard Blanchard"
    },
    "AllInTheNameOfJesus": {
        song_num: 272,
        title: "All In The Name Of Jesus",
        stanzas: {
            1: "Truth and beau-ty hap - pi - ness— It's all in the name of Jesus, Health and heav-en and peace and rest— It's all in the name of Je-sus; Joy and glad-ness, - give - ness too, Y Life ev - er - last-ing and free: All that I've longed for and all I need—It's all in the name of Je - sus.",
            2: "Care and com-fort and heal-ing and grace—It's all in the name of Jesus, Wel-come and par -don, a hid - ing place— It's all in the name of Je-sus; Warmth and sunshine and friend-ship true, Ful - fill - ment and bless-ing un - told: Hope for tomorrow  and help for to - day— It's all in the name of Je - sus."
        },
        chorus: "Jesus! Je - sus! He's here and He will show you the way; O Jesus! Je - sus! He's all that you need to - day.",
        song_url: `${path_name}272-AllInTheNameOfJesus.mp3`,
        author: "Stephen R. Adams"
    },
    "IKnowAFount": {
        song_num: 273,
        title: "I Know A Fount",
        stanzas: {
            1: "I know a fount where sins are washed a-way, I know a place where night is turned to day— Bur-dens are lift - ed, blind eyes made to see: There's a won-der-work-ing pow'r in the blood of Cal - va - ry."
        },
        chorus: "",
        song_url: `${path_name}273-IKnowAFount.mp3`,
        author: "Oliver Cooke"
    },
    "OnceForAll": {
        song_num: 274,
        title: "Once For All!",
        stanzas: {
            1: "Free from the law— O happy  con - di - tion! Je - sus has bled and there is remission; by the law and bruised by the fall, Grace has redeemed us once for all.",
            2: "Now we are free there's no condemnation! Jesus provides a perfect salvation; 'Come unto Me 'O hear his sweet call! Come and He saves us once for all. Once for all O sinner, receive it! Once for all O brother, believe it! Cling to the cross the burden will fall Christ has redeemed us once for all!",
            3: "Children of God O glorious calling! Surely His grace will keep us from fall - ing; Pass - ing from death to life at His call, Blessed salvation once for all."
        },
        chorus: "",
        song_url: `${path_name}274-OnceForAll.mp3`,
        author: "Philip P. Bliss"
    },
    "OHappyDay": {
        song_num: 275,
        title: "O Happy Day!",
        stanzas: {
            1: "O hap-py day that fixed my choice On Thee, my Sav - ior and my God! Well may this glow - ing heart re - joice And tell its rap-tures all a - broad.",
            2: "O hap-py bond thatseals my vows To Him who mer - its all my love! Let cheer-ful an - thems fill His house, While to that sa - cred shrine I move ",
            3: "'Tis done,the great trans-ac-tion's done— I am my Lord's and He is mine; e drew me, and I fol-lowed on, Charmed tocon-fess the voice di - vine. He drew me, and I fol-lowed on, Charmed tocon-fess the voice di - vine.",
            4: "Nowrest, my long - di - vid - ed heart, Fixed on this bliss - ful cen-ter, rest; Nor ev- er from my Lord de - part, With Him of ev - ry good pos-sessed."
        },
        chorus: "Hap - py day, hap -py day, When Je-sus washed my sins a - way! He taught me how to watch and pray And livere - joic - ing ev-'ry day; Hap-py day, hap-py day, When Je - sus washed my sins- a - way!",
        song_url: `${path_name}275-OHappyDay.mp3`,
        author: "Philip Doddridge"
    },
    "TheBloodWillNeverLoseItsPower": {
        song_num: 276,
        title: " The Blood Will Never Lose Its Power",
        stanzas: {
            1: "The blood that Je - sus shed for me Way back on Calvary The blood that gives me strength from day to day It will never lose its pow'r.",
            2: "It soothes my doubts and calms my fears, And it dries all my tears; The blood that gives me strength from day to day It will never lose its pow'r."
        },
        chorus: "It reach-es to the high - est moun - tain, It flowsto the low - est val - The blood that gives me strength from day to day It will never lose its pow'r.",
        song_url: `${path_name}276-TheBloodWillNeverLoseItsPower.mp3`,
        author: "Andrae Chrouch"
    },
    "MyFaithHasFoundARestingPlace": {
        song_num: 277,
        title: "My Faith Has Found A Resting Place",
        stanzas: {
            1: "My faith has found a rest - ing place—Not in de-vice nor creed: I trust the Everliving One His wounds for me shall plead.",
            2: "E - nough for me that Je -sus saves—This ends my fear and doubt; A sinful soul I come to him He'll never cast me out.",
            3: "My heart is lean - ing on the Word—The writ-ten Word of God: Salvation by my Savior's name Salvation thru His blood.",
            4: "My great By sl - cian heals the sick— The lost He came to save; For me His precious blood He Shed For me His life He gave."
        },
        chorus: "I need no other argument, I need no other plea; It is enough that Jesus died, And that He died for me.",
        song_url: `${path_name}277-MyFaithHasFoundARestingPlace.mp3`,
        author: "Lidie H. Edmunds"
    },
    "CalvaryCoversItAll": {
        song_num: 278,
        title: "Calvary Covers It All",
        stanzas: {
            1: "Far dear - er than all thatthe world can im - part Was the mes - sage that came to my heart, How that Jesus alone for my sin did a tone And Calvary covers it all.",
            2: "The stripes that He bore and the thorns that He wore Told His mercy and love ever more; And my heart bowed in shame as I called on His name And Calvary covers it all.",
            3: "How matchless the grace, when I looked in the face Of this Jesus, my crucified Lord; My redemption complete I then found at His feet And Calvary covers It all.",
            4: "How blessed the thought that my soul, by Him bought, Shall be His in the glory on high, Where with gladness and song I'll be one of the throng And Calvary covers it all."
        },
        chorus: "Calvary covers it all, My past with its sin and stain; My guilt and despair Jesus took on Him there, And Calvary covers it all.",
        song_url: `${path_name}278-CalvaryCoversItAll.mp3`,
        author: "Ethel Robinson Taylor"
    },
    "MySinsAreBlottedOutIKnow": {
        song_num: 279,
        title: "My Sins Are Blotted Out, I Know!",
        stanzas: {
            1: "What a won-drous mes-sage in God's Word! My sins are blot - ted out, I know! If I trust in His re - deem-ing blood, My sins are blot-ted out, I know!",
            2: "Once my heart was black, but now what joy, My sins are blot - ted out, I know! I have peace that noth-ing can de- stroy, My sins are blot-ted out, I know!",
            3: "I shall stand some day be - fore my King, My sins are blot - ted out, I know! With the ran-somed host I then shall sing: “My sins are blot-ted out, I know!"
        },
        chorus: "My sins are blot-ted out, I know! I know! My sins are blot-ted out, I know! They are bur -ied in the depths of the deep-est sea: My sins are blot-ted out, I know!",
        song_url: `${path_name}279-MySinsAreBlottedOutIKnow.mp3`,
        author: "Merrill Dunlop"
    },
    "ThereIsAWidenessInGodMercy": {
        song_num: 280,
        title: "There's A Wideness In God's Mercy",
        stanzas: {
            1: "There's a widness in God's mercy Like the wideness of the sea; There's a kindness in His justice Which is more than liberty.",
            2: "There is a welcome for the sinner And more graces for the good; There is a mercy with the Savior, There is healing in His blood.",
            3: "For the love of God is broader Than the measure of man's mind, And the heart of the Eternal is most wonderfully kind.",
            4: "If our love were but more simple, We should take Him at His word, And our lives would be all sunshine In the sweetness of our Lord."
        },
        chorus: "",
        song_url: `${path_name}280-ThereIsAWidenessInGodMercy.mp3`,
        author: "Frederick W. Faber"
    },
    "IAmNotSkilledToUnderstand": {
        song_num: 281,
        title: "I Am Not Skilled To Understand",
        stanzas: {
            1: "I am not skilled to understand What God has will'd, what God has plan'd; I only know at His right hand Is One who is my Savior!",
            2: "I take Him at His word indeed 'Christ died for sinners,' this I read For in my heart I find a need Of Him to be my Savior!",
            3: "That He should leave His place on high And come for sinful man to die, You count it stange? so oncr did I, Before I knew my Savior!",
            4: "And O that He fulfilled may see The travail of His soul in me, And with His work contented be, As I with my dear Savior!",
            5: "Yes, living, dying, let me bring My strength, my solace from this spring: That He who lives to be my King Once died to be my Savior!"
        },
        chorus: "",
        song_url: `${path_name}281-IAmNotSkilledToUnderstand.mp3`,
        author: "Dora Greenwell"
    },
    "TellMeTheOldOldStory": {
        song_num: 282,
        title: "Tell Me The Old, Old Story",
        stanzas: {
            1: "Tell me the old, old story Of unseen things a bove, Of Jesus and His glory, Of Jesus and His love. Tell me the story simply, As to a little child, For I am weakand weary, And helpless and defiled.",
            2: "Tell me the story slowly, That I may take it in That wonderful redemption, God's remedy for sin. Tell me the story often, For I forget so soon; The early dew of morning Has passed away at noon.",
            3: "Tell me the same old story When you have cause to fear That this world's empty glory Is costing me too dear. Tell me the story always, If you would really be, In anytime of trouble, A comforter to me."
        },
        chorus: "Tell me the old story, Tell me the old, old story, Tell me the old, old story Of Jesus and His love.",
        song_url: `${path_name}282-TellMeTheOldOldStory.mp3`,
        author: "Catherine Hankey"
    },
    "ThereIsPowerInTheBlood": {
        song_num: 283,
        title: "There Is Power In The Blood",
        stanzas: {
            1: "Would you be free from the bur-den of sin? There's pow'r in the blood, pow'r in the blood; Would you oer e - vil a vic - to-ry win?",
            2: "Would you be free from your pas- sion and pride? There's pow'r in the blood, powr in the blood; Come for a cleans-ing to Cal - va-ry's tide—",
            3: "Would you be whit - er, much whit - er than snow? There's pow'r in the blood, powr in the blood; Sin - stains are lost in its life - giv-ing flow—",
            4: "Would you do serv - ice for Je - sus your King? There's pow'r in the blood, pow'r in the blood; Would you live dai - ly His prais- es to sing?"
        },
        chorus: "There's won - der-ful pow'r in the blood. Thereis pow'r, pow'r, won-der-work-ing pow'r In the blood of the Lamb; Thereis pow'r, pow', won-der-work-ing pow'r In the pre - cious blood of the Lamb.",
        song_url: `${path_name}283-ThereIsPowerInTheBlood.mp3`,
        author: "Lewis E. Jones"
    },
    "TurnYourEyesUponJesus": {
        song_num: 284,
        title: "Turn Your Eyes upon Jesus",
        stanzas: {
            1: "O soul, are you wea-ry and trou - bled? No light in the dark - ness you see? There's light for a look at the Sav - ior, And life more abundant and free!",
            2: "Thru death in - to life ev - er - last - ing He passed, and we fol - low Him there; O-ver us sin no morehas do-min - ion—For more than conq'rors we are!",
            3: " His word shall not fail you—He prom - ised; Be - lieve Him, and all will be well: Then go to a worldthatis dy - ing, His perfect salvation to tell!"
        },
        chorus: "Turn your eyes up-on Jesus, Look full in His wonderful face, And the things of earth will grow strangely dim In the light of His glory and grace.",
        song_url: `${path_name}284-TurnYourEyesUponJesus.mp3`,
        author: "Helen H. Lemmel"
    },
    "IfIGainedTheWorld": {
        song_num: 285,
        title: "If I Gained The World",
        stanzas: {
            1: "If I gained the world, but lost the Savior, Were my life worth living for a day? Could my yearning heart find rest and comfort In the things that soon must pass a way? If I gained the world, but lost the Savior, Would my gain be worth the life long stife? Are all earthly pleasurews worth comparing For a moment with a Christ filled life?",
            2: "Had I wealth and love in fullest measure, And a name reversed both far and near, Yet no hope beyond, no harbor waiting Where my storm-tossed vessel I could steer If I gained the world, but lost the Savior Who endured the cross and died for me, Could then all the world afford a refuge Whither in my anguish I might flee?",
            3: "O what emptiness without the Savior Mid the sins and sorrows here below! And eternity, how dark without Him Only night and tears and endless woe! What tho I might live without the Savior, when I come to die, how would it be? O to face the valley's gloom without Him! And without Him all eternity!",
            4: "O the joy of having all in Jesus! What a balm the broken heart to heal! Ne'er a sin so great but He'll forgivr it, Nor a sorrow that He does not feel! If I have but Jesus, only Jesus, Nothing else in all the world beside, O then ev - 'ry - thing is mine in Jesus For my needs and more He will provide."
        },
        chorus: "",
        song_url: `${path_name}285-IfIGainedTheWorld.mp3`,
        author: "Anna Olander"
    },
    "IAmTheDoorTheSaviorSaid": {
        song_num: 286,
        title: "'I Am The Door,' The Savior Said",
        stanzas: {
            1: "'I am the Door,' the Savior said, 'The Life-Gate of the soul: All those in need who enter in Are made complete and whole.'",
            2: "'I am the Door,' the Savior said, 'For those in sin astray: All they who come by faith will find My new and living Way.",
            3: "'I am the Door,' the Savior said, 'For them who long for rest: In my green pastures they shall feed Secure, content and blest.",
            4: "'I am the Door,' the Savior said, 'For hearts that yearn  for peace: Within my fold there lies the path To freedom and release",
            5: "O gentie Shepherd of the flock, To Life the open Door, With eagerness we enter in Today and evermore!"
        },
        chorus: "",
        song_url: `${path_name}286-IAmTheDoorTheSaviorSaid.mp3`,
        author: "Norman Johnson"
    },
    "TheLightOfTheWorldIsJesus": {
        song_num: 287,
        title: "The Light Of The World Is Jesus",
        stanzas: {
            1: "The whole world was lost in the dark-ness of sin— The Light of the world is Je - sus; Like sun-shine at noon-day His glo - ry shone in The Light of the world is Jesus.",
            2: "No dark -ness have we who in Je - sus a -bide— The Light of the world is Je - sus; We walk in the Light when we fol - low our Guide The Light of the world is Jesus.",
            3: "No need of the sun-lightin heav-en, were told— The Light of that world is Je - sus; The Lamb is the Light in the Cit-y of Gold The Light of the world is Jesus."
        },
        chorus: "Come to the Light, 'tis shin- ing for thee! Sweet-ly the Light has dawned up-on me: Once I was blind, but now I can see— The Light of the world is Je - sus.",
        song_url: `${path_name}287-TheLightOfTheWorldIsJesus.mp3`,
        author: "Philip P. Bliss"
    },
    "IKnowWhomIHaveBelieved": {
        song_num: 288,
        title: "I Know Whom I Have Believed",
        stanzas: {
            1: "I know not why God's wondrous grace To me He has made known, Nor why, unworthy, Christ in love Redeemed me for His own.",
            2: "I know not how this saving faith To me He did impart, Nor how believing in His Word Wrought peace within my heart.",
            3: "I know not how the Spirit moves, Convincing men of sin, Revealing Jesus thru the Word, Creating faith in Him.",
            4: "I know not what of good or ill May be reserved for me, Of weary ways or golden days Before His face I see.",
            5: "I know not when my Lord may come At night or noonday fair, Nor if I'll walk the vale with Him Or meet Him in the air."
        },
        chorus: "But I know whom I have believed, And ampersuad that He is able To keep that which I've committed Unto against that day.",
        song_url: `${path_name}288-IKnowWhomIHaveBelieved.mp3`,
        author: "DAniel W. Whittle"
    },
    "JesusThyBloodAndRighteousness": {
        song_num: 289,
        title: "Jesus, Thy Blood And Righteousness",
        stanzas: {
            1: "Je - sus, Thy blood and right - eous - ness My beau - ty are, my glo - rious dress; 'Midst flam - ing worlds, in these attayed, With joy shall I up my head.",
            2: "Bold shall I stand in Thy great day, For who aught to my charge shall lay? Ful - ly ab - solved through these I am, From sin and fear, from guilt and shame.",
            3: "Lord, I be - lieve Thy pre - cious blood, Which at the mer - cy seat of God For - ev - er doth for sinners plead, for me, e'en for my soul was shed.",
            4: "Lord, I be - lieve were sin - ners more Than sands up on the o - cean shore, Thou hast for all a ransom paid, For all a full atonement made."
        },
        chorus: "",
        song_url: `${path_name}289-JesusThyBloodAndRighteousness.mp3`,
        author: "Nicolaus L. Zinzendorf"
    },
    "TheLoveOfGod": {
        song_num: 290,
        title: "The Love Of God",
        stanzas: {
            1: "The love of God is greater far Than tongue or pen can ever tell, It goes beyond the highest star And reaches to the lowest hell; The guilty pair, bowed down with care, God gave His Son to win: His erring child He reconciled And pardoned from his sin.",
            2: "When years of time shall pass away And earthly thrones and kingdoms fall, When men, who here refuse to pray, O rocks and hills and mountains call, God's love so sure shall still endure, all measureless and strong: Redeeming grace to Adam's race The saints' and angels song.",
            3: "Could we with ink the ocean fill And were the skies of parchment made, Were ev - 'ry stalk on earth a quill And ev - 'ry man a scribe by trade, To write the love of God above Would drain the ocean dry, Nor could the scroll contain the whole Tho stretched from sky to sky."
        },
        chorus: "O love of God, how rich and pure! How measureless and strong! It shall for evermore endure The saints' and angels' song.",
        song_url: `${path_name}290-TheLoveOfGod.mp3`,
        author: "Frederick M. Lehman"
    },
    "WonderfulGraceOfJesus": {
        song_num: 291,
        title: "Wonderful Grace Of Jesus",
        stanzas: {
            1: "Wonderful grace of Jesus, greater than all my sin; how shall my tongue describe it, where shall its praise begin?Taking away my burden,setting my spirit free, for the wonderful grace of Jesus reaches me.",
            2: "Wonderful grace of Jesus, reaching to all the lost, by it I have been pardoned, saved to the uttermost.Chains have been torn asunder, giving me liberty,for the wonderful grace of Jesus reaches me.",
            3: "Wonderful grace of Jesus, reaching the most reviled, by its transforming power making me God's dear child, purchasing peace and heaven for all eternity,for the wonderful grace of Jesus reaches me."
        },
        chorus: "Wonderful the matchless grace of Jesus,deeper than the mighty rolling sea,higher than the mountain, sparkling like a fountain, all sufficient grace for even me;broader than the scope of my transgressions, sing it!greater far than all my sin and shame.O magnify the precious name of Jesus, praise his name!",
        song_url: `${path_name}291-WonderfulGraceOfJesus.mp3`,
        author: "Haldor Lillenas"
    },
    "UnboundedGrace": {
        song_num: 292,
        title: "Unbounded Grace",
        stanzas: {
            1: "Unbounded grace it reached to me When hope was gone from view In my despair Christ came to me As He alone could do",
            2: "Grace was for me the only way My guilt could find relief My destiny was changed that day I reached out in belief",
            3: "God's grace does not on me depend It's God who is my StayHis love is offered without end He walks with me each day",
            4: "The universe with joy will ring When grace has won the day As all creation joins to sing Praise God who paid man's way"
        },
        chorus: "",
        song_url: `${path_name}292-UnboundedGrace.mp3`,
        author: "John E. Walvoord"
    },
    "AmazingGrace": {
        song_num: 293,
        title: "Amazing Grace",
        stanzas: {
            1: "Amazing grace (how sweet the sound) that saved a wretch like me!I once was lost, but now am found, was blind, but now I see.",
            2: "Twas grace that taught my heart to fear, and grace my fears relieved;how precious did that grace appear the hour I first believed!",
            3: "Through many dangers, toils and snares I have already come:'tis grace has brought me safe thus far, and grace will lead me home.",
            4: "The Lord has promised good to me, his word my hope secures;he will my shield and portion be as long as life endures.",
            5: "Yes, when this flesh and heart shall fail, and mortal life shall cease:I shall possess, within the veil, a life of joy and peace.",
            6: "The earth shall soon dissolve like snow, the sun forbear to shine;but God, who called me here below, will be forever mine."
        },
        chorus: "",
        song_url: `${path_name}293-AmazingGrace.mp3`,
        author: "John Newton"
    },
    "GreatGodOfWonders": {
        song_num: 294,
        title: "Great God Of Wonders",
        stanzas: {
            1: "Great God of wonders, all thy ways are matchless, God-like and divine; but the fair glories of thy grace more God-like and unrivaled shine:",
            2: "Such dire offences to forgive, such guilty rebel souls to spare; this is thy grand prerogative, and none shall in the honour share:",
            3: "In wonder lost, with trembling joy, we take the pardon of our God, pardon for sins of deepest dye, a pardon sealed with Jesus' blood:",
            4: "O may this glorious matchless love, this God-like miracle of grace,teach mortal tongues, like those above, to raise this song of lofty praise:"
        },
        chorus: "Who is a pardoning God like thee, or who has grace so rich and free?",
        song_url: `${path_name}294-GreatGodOfWonders.mp3`,
        author: "Samuel Davies"
    },
    "OnlyASinner": {
        song_num: 295,
        title: "Only A Sinner",
        stanzas: {
            1: "Naught have I gotten but what I received; Grace hath bestowed it since I have believed; Boasting excluded, pride I abase;I'm only a sinner, saved by grace!",
            2: "Once I was foolish, and sin ruled my heart, Causing my footsteps from God to depart; Jesus hath found me, happy my case;I now am a sinner, saved by grace!",
            3: "Tears unavailing, no merit had I;Mercy had saved me, or else I must die; Sin had alarmed me, fearing God's face; But now I'm a sinner saved by grace!",
            4: "Suffer a sinner whose heart overflows, Loving his Savior to tell what he knows; Once more to tell it would I embrace-I'm only a sinner saved by grace!"
        },
        chorus: "Only a sinner saved by grace!Only a sinner saved by grace!This is my story, to God be the glory—I'm only a sinner saved by grace!",
        song_url: `${path_name}295-OnlyASinner.mp3`,
        author: "James M. Gray"
    },
    "GraceTisACharmingSound": {
        song_num: 296,
        title: "Grace! 'Tis A Charming Sound",
        stanzas: {
            1: "Grace! 'tis a charming sound Harmonious to my ear;Heaven with the echo shall resound, And all the earth shall hear.",
            2: "Grace first contrived the way To save rebellious man;And all the steps that grace display Which drew the wondrous plan.",
            3: "Grace taught my wandering feet To tread the heavenly road; And new supplies each hour I meet, While pressing on to God.",
            4: "Grace all the works shall crown, Through everlasting days;It lays in heaven the topmost stone, And well deserves the praise."
        },
        chorus: "",
        song_url: `${path_name}296-GraceTisACharmingSound.mp3`,
        author: "Philip Doddridge"
    },
    "GraceGreaterThanOurSin": {
        song_num: 297,
        title: "Grace Greater Than Our Sin",
        stanzas: {
            1: "Marvelous grace of our loving Lord,Grace that exceeds our sin and our guilt!Yonder on Calvary's mount out-poured– There where the blood of the Lamb was spilt.",
            2: "Sin and despair, like the sea-waves cold, Threaten the soul with infinite loss; Grace that is greater– yes, grace untold– Points to the Refuge, the mighty Cross.",
            3: "Marvelous, infinite, matchless grace, Freely bestowed on all who believe!All who are longing to see His face, Will you this moment His grace receive?"
        },
        chorus: "Grace, grace, God's grace,Grace that will pardon and cleanse within; Grace, grace, God's grace,Grace that is greater than all our sin!",
        song_url: `${path_name}297-GraceGreaterThanOurSin.mp3`,
        author: "Julia H. Johnston"
    },
    "OnlyTrustHim": {
        song_num: 298,
        title: "Only Trust Him",
        stanzas: {
            1: "Come, every soul by sin oppressed, there's mercy with the Lord; and he will surely give you rest, by trusting in his Word.",
            2: "For Jesus shed his precious blood rich blessings to bestow;plunge now into the crimson flood that washes bright as snow.",
            3: "Yes, Jesus is the truth the way that leads you into rest; believe in him without delay, and you are fully blest."
        },
        chorus: "Only trust him, only trust him, only trust him now.He will save you, he will save you, he will save you now.",
        song_url: `${path_name}298-OnlyTrustHim.mp3`,
        author: "John H. Stockton"
    },
    "RoomAtTheCrossForYou": {
        song_num: 299,
        title: "Room At The Cross For You",
        stanzas: {
            1: "The cross upon which Jesus diedIs a shelter in which we can hideAnd its grace so free is sufficient for me And deep is its fountain as wide as the sea",
            2: "Tho' millions have found Him a friendAnd have turned from the sins they have sinned The Savior still waits to open the gates And welcome a sinner before it's too late",
            3: "The hand of my Savior is strongAnd the love of my Savior is longThrough sunshine or rain through loss or in gain The blood flows from Calv'ry to cleanse ev'ry stain"
        },
        chorus: "There's room at the cross for you There's room at the cross for you Tho' millions have comeThere's still room for oneYes there's room at the cross for you",
        song_url: `${path_name}299-RoomAtTheCrossForYou.mp3`,
        author: "Ira F. Stanphill"
    },
    "TheSaviorIsWaiting": {
        song_num: 300,
        title: "The Savior Is Waiting",
        stanzas: {
            1: "The Savior is waiting to enter your heart, Why don't you let Him come in?There's nothing in this world to keep you apart, What is your answer to Him?",
            2: "If you'll take one step toward the Savior, my friend, You'll find His arms open wide,Receive Him and all of your darkness will end, Within your heart He'll abide."
        },
        chorus: "Time after time He has waited before, And now He is waiting again,To see if you're willing to open the door, Oh, how he wants to come in.",
        song_url: `${path_name}300-TheSaviorIsWaiting.mp3`,
        author: "Ralph Carmichael"
    }
}