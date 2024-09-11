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
        song_num: 401,
        title: "",
        stanzas: {
            1: "",
            2: ".",
            3: "",

        },
        chorus: "",
        song_url: `${path_name}.mp3`,
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
    "SittingAtTheFeetOfJesus": {
        song_num: 401,
        title: "Sitting At The Feet Of Jesus",
        stanzas: {
            1: "Sitting at the feet of Jesus,  Oh, what words I hear Him say!Happy place! so near, so precious!May it find me there each day;Sitting at the feet of Jesus,I would look upon the past;For His love has been so gracious,It has won my heart at last.",
            2: "Sitting at the feet of Jesus,Where can mortal be more blest?There I lay my sins and sorrows,And, when weary, find sweet rest;Sitting at the feet of JesusThere I love to weep and pray;While I from His fullness gather Grace and comfort every day.",
            3: "Bless me, O my Savior, bless me,As *I sit low at Thy feet;[* I'm waiting]Oh, look down in love upon me,Let me see Thy face so sweet;Give me, Lord, the mind of Jesus, Keep me holy as He is; May I prove I've been with Jesus,Who is all my righteousness.",
        },
        chorus: "",
        song_url: `${path_name}401-SittingAtTheFeetOfJesus.mp3`,
        author: "J. Lincoln Hall"
    },
    "CreateInMeACleanHeart": {
        song_num: 402,
        title: "Create In Me A Clean Heart",
        stanzas: {
            1: "Create in me a clean heart, O God;create in me a clean heart, O God;create in me a clean heart, O God,and renew a right spirit within me.",
            2: "Cast me not away from your presence;cast me not away from your presence;cast me not away from your presence and take not your Holy Spirit from me.",
            3: "Restore to me the joy of your salvation;restore to me the joy of your salvation;restore to me the joy of your salvation,and uphold me with your free Spirit."
        },
        chorus: "",
        song_url: `${path_name}402-CreateInMeACleanHeart.mp3`,
        author: "John Carter"
    },
    "NearTheCross": {
        song_num: 403,
        title: "Near The Cross",
        stanzas: {
            1: "Jesus, keep me near the cross,There a precious fountain—Free to all, a healing stream-Flows from Calv'ry's mountain.Refrain:In the cross, in the cross, Be my glory ever; Till my raptured soul shall find Rest beyond the river.",
            2: " Near the cross, a trembling soul,Love and Mercy found me;There the bright and morning star Sheds its beams around me. [Refrain]",
            3: "Near the cross! O Lamb of God,Bring its scenes before me;Help me walk from day to day,With its shadows o'er me. [Refrain]",
            4: "Near the cross I'll watch and waitHoping, trusting ever,Till I reach the golden strand,Just beyond the river. [Refrain]",
        },
        chorus: "",
        song_url: `${path_name}403-NearTheCross.Mp3`,
        author: "Frances J. Crosby"
    },
    "TeachMeTheWayOLord": {
        song_num: 404,
        title: "Teach Me The Way O, Lord",
        stanzas: {
            1: "Teach me thy way, O Lord; teach me thy way!Thy guiding grace afford; teach me thy way!Help me to walk aright, more by faith, less by sight;lead me with heav'nly light; teach me thy way!",
            2: "When I am sad at heart, teach me thy way!When earthly joys depart, teach me thy way!In hours of loneliness, in times of dire distress,in failure or success, teach me thy way!",
            3: "When doubts and fears arise, teach me thy way!When storms o'erspread the skies, teach me thy way!Shine thro' the cloud and rain, thro' sorrow, toil, and pain;make thou my pathway plain; teach me thy way!",
            4: "Long as my life shall last, teach me thy way!Where'er my lot be cast, teach me thy way!Until the race is run, until the journey's done,until the crown is won, teach me thy way!",
        },
        chorus: "",
        song_url: `${path_name}404-TeachMeTheWayOLord.mp3`,
        author: "B. Mansell Ramsey"
    },
    "MustJesusBearTheCrossAlone": {
        song_num: 405,
        title: "Must Jesus Bear The Cross Alone",
        stanzas: {
            1: "Must Jesus bear the cross aloneAnd all the world go free?No, there's a cross for ev'ry one,And there's a cross for me.",
            2: "The consecrated cross I'll bearTill death shall set me free,And then go home my crown to wear,For there's a crown for me.",
            3: "Upon the crystal pavement, downAt Jesus' pierced feet,Joyful, I'll cast my golden crown And His dear name repeat.",
            4: "O precious cross! O glorious crown!O resurrection day!Ye angels, from the stars come down And bear my soul away.",
        },
        chorus: "",
        song_url: `${path_name}405-MustJesusBearTheCrossAlone.Mp3`,
        author: "Thomas Shepherd"
    },
    "DearLordAndFatherOfMankind": {
        song_num: 406,
        title: "Dear Lord And Father Of Mankind",
        stanzas: {
            1: "Dear Lord and Father of mankind,forgive our foolish ways;reclothe us in our rightful mind,in purer lives thy service find, in deeper reverence, praise.",
            2: " In simple trust like theirs who heard beside the Syrian sea the gracious calling of the Lord,let us, like them, without a word rise up and follow thee.",
            3: "O Sabbath rest by Galilee,O calm of hills above,where Jesus knelt to share with thee the silence of eternity,interpreted by love!",
            4: "Drop thy still dews of quietness,till all our strivings cease;take from our souls the strain and stress,and let our ordered lives confessthe beauty of thy peace.",
            5: " Breathe through the heats of our desire thy coolness and thy balm let sense be dumb, let flesh retire;speak through the earthquake, wind, and fire,O still, small voice of calm!",

        },
        chorus: "",
        song_url: `${path_name}406-DearLordAndFatherOfMankind.Mp3`,
        author: "John Greenleaf Whittier"
    },
    "BeneathTheCrossOfJesus": {
        song_num: 407,
        title: "Beneath The Cross Of Jesus",
        stanzas: {
            1: "Beneath the cross of JesusI fain would take my stand,the shadow of a mighty Rock within a weary land;a home within the wilderness, a rest upon the way,from the burning of the noontide heat and the burden of the day.",
            2: "Upon the cross of Jesus mine eye at times can see the very dying form of One who suffered there for me: and from my stricken heart with tears two wonders I confess the wonders of redeeming love and my unworthiness.",
            3: "I take, O cross, thy shadow for my abiding place: I ask no other sunshine than the sunshine of his face;content to let the world go by to know no gain nor loss my sinful self my only shame my glory all the cross."
        },
        chorus: "",
        song_url: `${path_name}407-BenethTheCrossOfJesus.Mp3`,
        author: "Elizabeth Cecilia Clephane"
    },
    "IMustTellJesus": {
        song_num: 408,
        title: "I Must Tell Jesus",
        stanzas: {
            1: "I must tell Jesus all of my trials;I cannot bear these burdens alone;In my distress He kindly will help me; He ever loves and cares for His own.  Refrain: I must tell Jesus!I must tell Jesus!I cannot bear my burdens alone;I must tell Jesus!I must tell Jesus!Jesus can help me, Jesus alone.",
            2: " I must tell Jesus all of my troubles;He is a kind, compassionate friend;If I but ask Him, He will deliver, Make of my troubles quickly an end. [Refrain]",
            3: "Tempted and tried, I need a great Savior,One who can help my burdens to bear;I must tell Jesus, I must tell Jesus He all my cares and sorrows will share. [Refrain]",
            4: "O how the world to evil allures me!O how my heart is tempted to sin!I must tell Jesus, and He will help meOver the world the vict'ry to win. [Refrain]",

        },
        chorus: "",
        song_url: `${path_name}408-IMustTellJesus.Mp3`,
        author: "E. A. Hoffman "


    },
    "TeachMeToPray": {
        song_num: 409,
        title: "Teach Me To Pray",
        stanzas: {
            1: "Teach me to pray, Lord, teach me to pray;This is my heart- cry day unto day I long to know Thy will and Thy way; Teach me to pray, Lord, teach me to pray.Refrain:Living in Thee, Lord, and Thou in me;  Constant abiding, this is my plea; Grant me Thy power, boundless and free:Power with men and power with Thee.",
            2: " Power in prayer, Lord, power in prayer,Here 'mid earth's sin and sorrow and care;  Men lost and dying, souls in despair;O give me power, power in prayer!(Refrain)",
            3: "My weakened will, Lord, Thou canst renew;My sinful nature Thou canst subdue; Fill me just now with power anew,Power to pray and power to do!(Refrain)",
            4: "Teach me to pray, Lord, teach me to pray;Thou art my pattern, day unto day; Thou art my surety, now and for aye; Teach me to pray, Lord, teach me to pray. (Refrain)",
        },
        chorus: "",
        song_url: `${path_name}409-TeachMeToPray.Mp3`,
        author: "Albert Simpson Reitz"
    },
    "NearToTheHeartOfGod": {
        song_num: 410,
        title: "Near To The Heart Of God",
        stanzas: {
            1: "There is a place of quiet rest,near to the heart of God,a place where sin cannot molest,near to the heart of God. Refrain: O Jesus, blest Redeemer, sent from the heart of God, hold us, who wait before thee,near to the heart of God.",
            2: "There is a place of comfort sweet,near to the heart of God, a place where we our Savior meet,near to the heart of God. [Refrain]",
            3: "There is a place of full release,near to the heart of God,a place where all is joy and peace,near to the heart of God. [Refrain"
        },
        chorus: "",
        song_url: `${path_name}410-NearToTheHeartOfGod.Mp3`,
        author: "Cleland Boyd McAfee "
    },
    "SpendALittleTimeWithJesusInPrayer": {
        song_num: 411,
        title: "Spend A Little Time With Jesus In Prayer",
        stanzas: {
            1: "When your grief can not be spo-ken if you smile it's ,but a to-ken when your heart is near-ly broken spend a lit-tle time with jesus in prayer He a-lone can lift your heav-y load of care: Tell Him all a-about things that try you. Ev-'ry lit-tle need he will sup-ply you-spend a little time with jesus in prayer   ",
            2: "When you're wea-ry from life's hur-ry when you're filled with doubt and wor-ry, when storm clouds show their fu-ry",
            3: "When the fu-ture makes you won-der As the road a-head you pon-der, Are there man-y problems yon-der? "
        },
        chorus: "Spend a lit-tle time with jes-us in prayer , Spend a lit-tle time with jesus in prayer , Spend a little time with jesus in prayers ",
        song_url: `${path_name}411-SpendALittleTimeWithJesusInPrayer.Mp3`,
        author: "John W. Peterson"
    },
    "WhatAFriendWeHaveInJesus": {
        song_num: 412,
        title: "What A Friend We Have In Jesus",
        stanzas: {
            1: " What a friend we have in Jesus,all our sins and griefs to bear!What a privilege to carry everything to God in prayer!O what peace we often forfeit, O what needless pain we bear, all because we do not carry everything to God in prayer!",
            2: " Have we trials and temptations?Is there trouble anywhere?We should never be discouraged;take it to the Lord in prayer!Can we find a friend so faithful who will all our sorrows share?Jesus knows our every weakness; take it to the Lord in prayer!",
            3: "Are we weak and heavy laden,cumbered with a load of care?Precious Savior, still our refuge--take it to the Lord in prayer!Do your friends despise, forsake you?Take it to the Lord in prayer!In his arms he'll take and shield you;you will find a solace there."
        },
        chorus: "",
        song_url: `${path_name}412-WhatAFriendWeHaveInJesus.Mp3`,
        author: "Joseph Medlicott Scriven "
    },
    "LordListenToYourChildrenInPraying": {
        song_num: 413,
        title: "Lord, Listen To Your Children In Praying",
        stanzas: {
            1: "Lord, listen to your children praying,Lord, send your Spirit in this place. Lord, listen to your children praying, send us love, send us pow'r, send us grace",
        },
        chorus: "",
        song_url: `${path_name}413-LordListenToYourChildrenInPraying.Mp3`,
        author: "Ken Medema",
    },
    "SweetHoursOfPrayer": {
        song_num: 414,
        title: "Sweet Hours Of Prayers",
        stanzas: {
            1: "Sweet hour of prayer! sweet hour of prayer!that calls me from a world of care, and bids me at my Father's throne make all my wants and wishes known.In seasons of distress and grief, my soul has often found relief and oft escaped the tempter's snare by thy return, sweet hour of prayer!",
            2: "Sweet hour of prayer! sweet hour of prayer!the joys I feel, the bliss I share of those whose anxious spirits burn with strong desires for thy return!With such I hasten to the place where God my Savior shows his face, and gladly take my station there and wait for thee, sweet hour of prayer!",
            3: "Sweet hour of prayer! sweet hour of prayer!thy wings shall my petition bear to him whose truth and faithfulness engage the waiting soul to bless.And since he bids me seek his face, believe his word, and trust his grace,I'll cast on him my every care,and wait for thee, sweet hour of prayer!",
        },
        chorus: "",
        song_url: `${path_name}414-SweetHoursOfPrayer.Mp3`,
        author: "W. W. Walford "
    },
    "OurFatherInHeaven": {
        song_num: 415,
        title: "Our Father In Heaven",
        stanzas: {
            1: "Our Father in heaven We hallow Thy name May Thy kingdom holy On earth be the same;O give to us daily Our portion of bread; It is from Thy bounty That all must be fed.",
            2: "Forgive our transgressions,And teach us to know That humble compassion,Which pardons each foe: Keep us from temptation,From weakness and sin; And Thine be the glory,  Forever, amen.",
        },
        chorus: "",
        song_url: `${path_name}415-OurFatherInHeaven.Mp3`,
        author: "Sarah J. Hale"
    },
    "LetUsComeBodly": {
        song_num: 416,
        title: "Let Us Come Bodly",
        stanzas: {
            1: "Let us come bold-ly un-to the throne of grace, that we may ob-tain mer-cy and find grace to help in time of need .",
        },
        chorus: "",
        song_url: `${path_name}416-LetUsComeBodly.Mp3`,
        author: "Jon drevits"
    },
    "PrayForMe": {
        song_num: 417,
        title: "Pray For Me",
        stanzas: {
            1: "Pray for me when at the mer-cy seat- I'm so bur-dened with my heart-ache and care:I need help to lay it down at the mas-ter's feet-when you pray, re-mem-ber me in your prayer, ",
            2: "Pray for me when you bow at the throne of grace-l've a tri-al just too heav-y to bear; I need some-one who will ear-nest-ly plead my case -when you pray ,repeat my name in your prayer. ",
            3: "Pray for me when you talk to the Lord a-bove -For, when two a-gree to geath-erto share ,He will hear He will an-swer in ten-der love-when you pray ,re-call my need in your prayer,  "
        },
        chorus: "",
        song_url: `${path_name}417-PrayForMe.Mp3`,
        author: "Norman Johnson"
    },
    "PrayerResponses": {
        song_num: 418,
        title: "Prayer Responses",
        stanzas: {
            1: "A. We come un-to your throne of grace, O Lord in je-sus' name A - men",
            2: "B. Thou Wilt keep in per-fect peace whose mind is stayed on Thee.",
            3: "C. A. What our lips pro-fess may our lives ex-press: This way in Jesus name.",
            4: "C. B. As our hearts be-lieve we with joy re-cieve: For in je-sus name we pray.",
            5: "C. C. In the sav-ior's name we the prom-ise claim: that you hear and answer prayer.",
            6: "C. D. What our mouth confess may our faith pos-sess: This we ask for je-sus' sake.",
            7: "D. May our heart a-gree with what we say, May our lives con-form to what we pray; Our faith be strong, our mo-tivates pure- Thy will be done in us to-day"
        },
        chorus: "",
        song_url: `${path_name}418-PrayerResponses.Mp3`,
        author: "Norman Johnson"
    },
    "TellItToJesus": {
        song_num: 419,
        title: "Tell It To Jesus",
        stanzas: {
            1: "Are you weary, are you heavyhearted?Tell it to Jesus, Tell it to Jesus;Are you grieving over joys departed?Tell it to Jesus alone.",
            2: "Do the tears flow down your cheeks unbidden?Tell it to Jesus, Tell it to Jesus;Have you sins that to men's eyes are hidden?Tell it to Jesus alone.",
            3: "Do you fear the gath'ring clouds of sorrow?Tell it to Jesus,Tell it to Jesus;Are you anxious what shall be tomorrow?Tell it to Jesus alone.",
            4: "Are you troubled at the thought of dying?Tell it to Jesus, Tell it to Jesus For Christ's coming kingdom are you sighing?Tell it to Jesus alone.[",
        },
        chorus: "Tell it to Jesus, tell it to Jesus,He is a friend that's well known;You've no other such a friend or brother,Tell it to Jesus alone.",
        song_url: `${path_name}419-TellItToJesus.Mp3`,
        author: "Jeremiah Eames Rankin"
    },
    "InTimesLikeThese": {
        song_num: 420,
        title: "In Times Like These",
        stanzas: {
            1: "Who is on the Lord's side? who will serve the king? who will be His helpers others lives to bring? who will leave the  world's side? who will face the foe? who is on the Lord's side? who for him will go? by thy call of mer-cy,",
            2: "Not for weight of glory not for the crown and palm, En-ter. we the ar-my, Raise the wor-rior -palm; But for the love That claim-eth Lives for whom He died: He whom je-sus nam-eth must be on his side. By thy love con-strain-ing,   ",
            3: "je-sus, Thou hast bought us, Not with gold or gem, But with Thine own life-blood, For thy di-a-dem ,with thy bless-ing fill-ing Each who comes to thee, thou hast made us will-ing , thou hast made us free.By thy grand re-demp-tion,",
            4: "Fierce may be the con-flict, strong may be the foe, but the rang-ing Vic-t'ry is so-cure ,For his truth un-chang-ing makes the tri-umph sure,joy-ful-ly en-list-ing",
        },
        chorus: "",
        song_url: `${path_name}420-InTimesLikeThese.Mp3`,
        author: "Frances R. Havergal"
    },
    "WhoIsOnTheLordSide": {
        song_num: 421,
        title: "Who Is On The Lord Side",
        stanzas: {
            1: "Who is on the Lord's side? Who will serve the King?Who will be His helpers, other lives to bring?Who will leave the world's side? Who will face the foe?Who is on the Lord's side? Who for Him will go?By Thy call of mercy, by Thy grace divine,We are on the Lord's side—Savior, we are Thine!",
            2: "Not for weight of glory, nor for crown and palm,Enter we the army, raise the warrior psalm;  But for love that claimeth lives for whom He died: He whom Jesus saveth marches on His side.By Thy love constraining, by Thy grace divine,We are on the Lord's side—Savior, we are Thine!",
            3: "Jesus, Thou hast bought us, not with gold or gem,But with Thine own lifeblood, for Thy diadem; With Thy blessing filling each who comes to Thee, Thou hast made us willing, Thou hast made us free.By Thy grand redemption, by Thy grace divine, We are on the Lord's side—Savior, we are Thine!",
            4: "Fierce may be the conflict, strong may be the foe,But the King's own army none can overthrow;'Round His standard ranging, vict'ry is secure For His truth unchanging makes the triumph sure.Joyfully enlisting, by Thy grace divine, We are on the Lord's side—Savior, we are Thine!",
            5: "Chosen to be soldiers, in an alien land,Chosen, called, and faithful, for our Captain's band; In the service royal, let us not grow cold, Let us be right loyal, noble, true and bold. Master, wilt Thou keep us, by Thy grace divine, Always on the Lord's side—Savior, always Thine!",
        },
        chorus: "",
        song_url: `${path_name}421-WhoIsOnTheLordSide.Mp3`,
        author: "Frances R. Havergal"
    },
    "TakeTimeToBeHoly": {
        song_num: 422,
        title: "Take Time To Be Holy",
        stanzas: {
            1: " Take time to be holy, speak oft with thy Lord;Abide in Him always, and feed on His Word.Make friends of God's children, help those who are weak,Forgetting in nothing His blessing to seek.",
            2: "Take time to be holy, the world rushes on;Spend much time in secret, with Jesus alone.By looking to Jesus, like Him thou shalt be; Thy friends in thy conduct His likeness shall see.",
            3: "Take time to be holy, let Him be thy Guide;And run not before Him, whatever betide.In joy or in sorrow, still follow the Lord,And, looking to Jesus, still trust in His Word.",
            4: "Take time to be holy, be calm in thy soul,Each thought and each motive beneath His control.Thus led by His Spirit to fountains of love, Thou soon shalt be fitted for service above."
        },
        chorus: "",
        song_url: `${path_name}422-TakeTimeToBeHoly.Mp3`,
        author: "William D. Longstaff"
    },
    "GiveThemAllToJesus": {
        song_num: 423,
        title: "Give Them All To Jesus",
        stanzas: {
            1: "Are you tired of chasing pretty rain-bow? Are you tired of spin-ning round and round? wrap up all the shat-tered dream of your life and at the feet of jesus lay them down .",
            2: "He never said you'd on-ly see sunshine, He never said there'd be no rain; He only promised a heartfull of sing-ing A- bout the ver-y things that once bro't pain ",
            3: ""
        },
        chorus: "Give them all, give them all ,Give them all to jesus. shattered dreams, wounded hearts and broken toys Give them all, give them all,",
        song_url: `${path_name}423-GiveThemAllToJesus.Mp3`,
        author: "Phil Johnson"
    },
    "JesusCallUs": {
        song_num: 424,
        title: "Jesus Call Us",
        stanzas: {
            1: "Jesus calls us o'er the tumult of our life's wild, restless sea;day by day His sweet voice soundeth,saying, Christian, follow me.Jesus calls us from the worship of the vain world's golden store,from each idol that would keep us, saying, Christian, love me more.",
            2: " In our joys and in our sorrows,days of toil and hours of ease, still He calls, in cares and pleasures,Christian, love me more than these.Jesus calls us- by Thy mercies, Savior, may we hear Thy call;give our hearts to Thine obedience,serve and love Thee best of all.",
            3: ""
        },
        chorus: "",
        song_url: `${path_name}424-JesusCallUs.Mp3`,
        author: "Cecil Frances Alexander "
    },
    "OnlyBelieve": {
        song_num: 425,
        title: "Only Believe",
        stanzas: {
            1: " Fear not, little flock, from the cross to the throne,From death into life He went for His own;All power in earth, all power above,Is given to Him for the flock of His love.",
            2: " Fear not, little flock, He goeth ahead,Your Shepherd selecteth the path you must tread;The waters of Marah He'll sweeten for thee,He drank all the bitter in Gethsemane.",
            3: ". Fear not, little flock, whatever your lot,He enters all rooms, “the doors being shut,”He never forsakes; He never is gone,So count on His presence in darkness and dawn."
        },
        chorus: "Refrain:Only believe, only believe; All things are possible, only believe; Only believe, only believe;All things are possible, only believe.",
        song_url: `${path_name}425-OnlyBelieve.Mp3`,
        author: "Paul Rader"
    },
    "YieldNotT0Temption": {
        song_num: 426,
        title: "Yield Not T0 Temption",
        stanzas: {
            1: "Yield not to temptation,For yielding is sin;Each vict'ry will help you, Some other to win; Fight valiantly onward, Evil passions subdue; Look ever to Jesus, He will carry you through.Refrain:Ask the Savior to help you,Comfort, strengthen and keep you He is willing to aid you,He will carry you through.",
            2: "Shun evil companions,Bad language disdain;God's name hold in rev'rence,Nor take it in vain;Be thoughtful and earnest,Kindhearted and true;Look ever to Jesus,He will carry you through. [Refrain]",
            3: "To him that o'ercometh,God giveth a crown;Through faith we will conquer,Though often cast down; He who is our Savior,Our strength will renew;Look ever to Jesus,He will carry you through. [Refrain]"
        },
        chorus: "",
        song_url: `${path_name}426-YieldNotToTempation.Mp3`,
        author: "H. R. Palmer "
    },
    "ReachOutToJesus": {
        song_num: 427,
        title: "Reach Out To Jesus",
        stanzas: {
            1: "is your bur-den heavy as you bear it all a-lone? Does the road you tra-el har-bor dna-ger yet un-known? arr you grow-ing we-y in the strug-gle of it all? je-sus will help you when on his name you call- He is al-ways there hearing every prayer. faithful and true walking by our side in his love we hide  ",
            2: "is the life you're living filled with sorrow and despair? does the future press you with its worry and its care? Are you tired and friend-less, have you almost lost your way? jesus will help you just come to him today he is always there hearing everyprayer. faithful and true , walking by our side in his love we hide ",
            3: ""
        },
        chorus: "",
        song_url: `${path_name}427-ReachOutToJesus.Mp3`,
        author: "Ralph Carmichael"
    },
    "WeAreClimbingJacobLadder": {
        song_num: 428,
        title: "We Are Climbing Jacob's Ladder",
        stanzas: {
            1: " We are climbing Jacob's ladder,We are climbing Jacob's ladder,We are climbing Jacob's ladder,Soldiers of the cross.",
            2: "Ev'ry round goes higher, higher,Ev'ry round goes higher, higher,Ev'ry round goes higher, higher,Soldiers of the cross.",
            3: "Children, do you love my Jesus?Children, do you love my Jesus?Children, do you love my Jesus?Soldiers of the cross.",
            4: "If you love Him, why not serve Him?If you love Him, why not serve Him?If you love Him, why not serve Him?Soldiers of the cross.",
            5: " Rise, shine, give God glory,Rise, shine, give God glory,Rise, shine, give God glory,  Soldiers of the cross.",
        },
        chorus: "",
        song_url: `${path_name}428-WeAreClimbingJacobLadder.Mp3`,
        author: "Norman Johnson"
    },
    "AllDaySong": {
        song_num: 429,
        title: "All Day Song",
        stanzas: {
            1: "Love him in the morn-in' when you see the sun a-ris-in. Love Him in the eve-nin''cause he took you thru the day. And in the in-be-tween when you feel the pressure com-in. re-member that he loves you, and he prom-is-es to stay.",
        },
        chorus: "",
        song_url: `${path_name}429-AllDaySong.Mp3`,
        author: "John Fischer"
    },
    "CountYourBlessings": {
        song_num: 430,
        title: "Count Your Blessings",
        stanzas: {
            1: "When upon life's billows you are tempest tossed,When you are discouraged, thinking all is lost,Count your many blessings, name them one by one,And it will surprise you what the Lord hath done.Refrain:Count your blessings, name them one by one;Count your blessings, see what God hath done;Count your blessings, name them one by one;Count your many blessings, see what God hath done.",
            2: "Are you ever burdened with a load of care?Does the cross seem heavy you are called to bear?Count your many blessings, ev'ry doubt will fly,And you will be singing as the days go by.",
            3: "When you look at others with their lands and gold,Think that Christ has promised you His wealth untold Count your many blessings, money cannot buy Your reward in heaven, nor your home on high.",
            4: "So, amid the conflict, whether great or small,Do not be discouraged, God is over all;Count your many blessings, angels will attend,Help and comfort give you to your journey's end. ",

        },
        chorus: "",
        song_url: `${path_name}430-CountYourBlessings.Mp3`,
        author: "Johnson Oatman, Jr."
    },
    "BecauseIHaveBeenGivenMuch": {
        song_num: 431,
        title: "Because I Have Been Given Much",
        stanzas: {
            1: "Be-cause I have been giv-en much, I too must give, Be-cause of thy great boun-ty ,Lord,Each day I live I shall di-vide my gifts from thee with Ev-'ry broth-er that I see who has the need of help from me. ",
            2: "Be- cause I have been shel-tered, fed,by the good care,I can-not see an-oth-er's lack and I not share o-ver-head that he too may be com-fort-ed ",
            3: "Be-cause love has been lav-ished so up-on me Lord, A wealth I know that Was not ment for me to board, I shall give love to those in need ,shall show that love by,word and deed;Thus My thanks be thanks in-deed."
        },
        chorus: "",
        song_url: `${path_name}431-BecauseIHaveBeenGivenMuch.Mp3`,
        author: "Grace Noll Crowell"
    },
    "GrantUsLordTheGraceOfGiving": {
        song_num: 432,
        title: "Grant Us, Lord, The Grace Of Giving",
        stanzas: {
            1: "Grant us, God, the grace of giving with a spirit large and free,that ourselves and all our living we may offer unto thee.",
        },
        chorus: "",
        song_url: `${path_name}432-GrantUsLordTheGraceOfGiving.Mp3`,
        author: "Robert Murray"
    },
    "LittleIsMuchWhenGodIsInIt": {
        song_num: 433,
        title: "Little Is Much When God Is In It",
        stanzas: {
            1: "In the harvest field now ripened There's a work for all to do; Hark! the voice of God is calling To the harvest calling you. Refrain: Little is much when God is in it Labor not for wealth or fame; There's a crown, and you can win it,If you go in Jesus' name.",
            2: "Does the place you're called to labor Seem too small and little known? It is great if God is in it,And He'll not forget His own.",
            3: "When the conflict here is ended And our race on earth is run, He will say, if we are faithful,Welcome home, My child, well done!",
        },
        chorus: "",
        song_url: `${path_name}433-LittleIsMuchWhenGodIsInIt.Mp3`,
        author: "Kittie L. Suffield ("
    },
    "SomethingForJesus": {
        song_num: 434,
        title: "Something For Jesus",
        stanzas: {
            1: "Savior, Thy dying love Thou gavest me,Nor should I aught withhold,Dear Lord, from Thee:In love my soul would bow, My heart fulfill its vow,Some off'ring bring Thee now,Something for Thee.",
            2: "At the blest mercy seat,Pleading for me, My feeble faith looks up,Jesus, to Thee: Help me the cross to Thy wondrous love declare,Some song to raise, or pray'r,Something for Thee.",
            3: "Give me a faithful heart,Likeness to Thee,That each departing day Henceforth may see Some work of love begun Some deed of kindness done,Some wand'rer sought and won,Something for Thee.",
            4: "All that I am and have,Thy gifts so free,In joy, in grief, thro' life,Dear Lord, for Thee!And when Thy face I see,My ransom'd soul shall be,Thro' all eternity,Something for Thee.",

        },
        chorus: "",
        song_url: `${path_name}434-SomethingForJesus.Mp3`,
        author: "S. Dryden Phelps"
    },
    "WeGiveTheeButThineOwn": {
        song_num: 435,
        title: "We Give Thee But Thine Own",
        stanzas: {
            1: "We give thee but thine own, whate'er the gift may be;all that we have is thine alone,a trust, O Lord, from thee.",
            2: "May we thy bounties thus as stewards true receive and gladly, as thou blessest us,to thee our first fruits give.",
        },
        chorus: "",
        song_url: `${path_name}435-WeGiveButThineOwn.Mp3`,
        author: "William Walsham How"
    },
    "IGiveMyLifeForThee": {
        song_num: 436,
        title: "I Give My Life For Thee",
        stanzas: {
            1: "I gave My life for thee,My precious blood I shed, That thou mightst ransomed be, And quickened from the dead; I gave, I gave My life for thee, What hast thou done for Me ? I gave, I gave My life for thee,What hast thou done for Me ?",
            2: "My Father's house of light,My glory- circled throneI left for earthly night,For wanderings sad and lone;I left, I left it all for thee,Hast thou left aught for Me ?I left, I left it all for thee,Hast thou left aught for Me ?",
            3: "I suffered much for thee,More than thy tongue can tell, Of bitterest agony,To rescue thee from hell; I've borne, I've borne it all for thee, What hast thou borne for Me ?I've borne, I've borne it all for thee,What hast thou borne for Me ?",
            4: "And I have brought to thee,Down from My home above, Salvation full and free,My pardon and My love;I bring, I bring rich gifts to thee, What hast thou brought to Me?I bring, I bring rich gifts to thee, What hast thou brought to Me?",
        },
        chorus: "",
        song_url: `${path_name}436-IGiveMyLifeForThee.Mp3`,
        author: "Frances R. Havergal"
    },
    "TrustTryAndProveMe": {
        song_num: 437,
        title: "Trust, Try And Prove Me",
        stanzas: {
            1: "Bring ye all the tithes into the storehouse,All your money, talents, time and love; Consecrate them all upon the altar,While your Savior from above speaks sweetly, ",
            2: "When my wav'ring faith, in trials, falters,When His guiding hand I cannot see,Then in wondrous love and tender mercy,Through His Word He says to me,My child, just",
            3: "I have yielded Him my life forever,All I am, or have or hope to be;Naught on earth my hold on Him can sever,While I hear Him say to me,My child, just",
        },
        chorus: "Trust Me, try Me, prove Me, saith the Lord of hosts, and see If a blessing, unmeasured blessing, I will not pour out on thee.",
        song_url: `${path_name}437-TrustTryAndProveMe.Mp3`,
        author: "Lida Shivers Leech"
    },
    "SeekYeFirst": {
        song_num: 438,
        title: "Seek Ye First",
        stanzas: {
            1: "Seek ye first the king-dom of God And his righ-teous-ness, And all these things shall be added un-to you-Al-le-lu,al-le-lu-la!",
            2: "Ask and it shall be giv-en un-to you, seek and ye shall find, knocked and it shall be O-pened un-to you -Al- le -lu, la!",
        },
        chorus: "",
        song_url: `${path_name}438-SeekYeFirst.Mp3`,
        author: "Karen Lafferty"
    },
    "IllLiveForHim": {
        song_num: 439,
        title: "I'll Live For Him",
        stanzas: {
            1: "My life, my love I give to Thee,Thou Lamb of God who died for me;O may I ever faithful be,My Savior and my God!Refrain:I'll live for him who died for me,How happy then my life shall be!I'll live for him who died for me,My Savior and my God!",
            2: "I now believe thou dost receive,For Thou hast died That I might live;And now henceforth I'll trust in Thee,My Savior and my God! [Refrain]",
            3: "O Thou who died on Calvary,To save my soul and make me free;I'll consecrate My life to Thee,My Savior and my God! [Refrain]"
        },
        chorus: "",
        song_url: `${path_name}439-IllLiveForHim.Mp3`,
        author: "R. E. Hudson "
    },
    "FollowOn": {
        song_num: 440,
        title: "Follow On",
        stanzas: {
            1: "Down in the valley with my Saviour I would go,where the flowers are blooming and the sweet waters flow,everywhere he leads me I would follow, follow on,walking in his footsteps till the crown be won.Refrain Follow, follow, I would follow Jesus,anywhere, everywhere, I would follow on. Follow, follow, I would follow Jesus.Everywhere he leads me I would follow on.",
            2: " Down in the valley with my Saviour I would go,where the storms are sweeping and the dark waters flow,with his hand to lead me I will never, never fear;danger cannot fright me if my Lord is near. [Refrain]",
            3: " Down in the valley or upon the mountain steep,close beside my Saviour would my soul ever keep.He will lead me safely in the path that he has trod, up to where they gather on the hills of God. [Refrain]"
        },
        chorus: "",
        song_url: `${path_name}440-FllowOn.Mp3`,
        author: "W. O. Cushing"
    },
    "WheneverHeLeadsIllGo": {
        song_num: 441,
        title: "Whenever He Leads I'll Go",
        stanzas: {
            1: "Take up thy cross and Fol-low me, I heard my mas-ter say; I gave My life to ran -some thee- sur-ren-der your all to-day",
            2: "He drew me clos-er to His side, I sought His will to know; And in that will I now a-bide wher-ev-er He leads I'll go.",
            3: "It may be thru the shad-ows dim Or o'erthe storm-y sea:I take my cross and fol-low Him- wher-ev-er He lead-eth me.",
            4: "My heart, My life my all I bring To christ who loves me so; He is my mas-ter, Lord, and king- wher-ev-er He leads l'll go.",
        },
        chorus: "Wher-ev-er He leads I'll go , wher-ev-er He leads I'll go; I'll fol-low my christ who love me so-wher-ever He leads I'll go ",
        song_url: `${path_name}441-WheneverHeLeadsIllGo.Mp3`,
        author: "B. B. McKinney"
    },
    "AFlagToFellow": {
        song_num: 442,
        title: "A Flag To Fellow",
        stanzas: {
            1: " I sought a flag to fol-low A cause for which to stand,I sought a val-lant lead-er who could my love com-mand; I sought a stir-ring chal-lenge some no-ble work to try, To give my life ful-fill-ment, My dreams to sat -is-fy, found them all in jesus, The Life Truth, the way: Beneath  ",
            2: " I sought a ring-ing an-swer for all my doubts in-side,A torch of truth up-lift-ed, my searching step to guide; I sought a word of wis-dom A true au-thor-l-ty , ",
            3: "I sought for sat-is-fac-tion For Years-ing deep with-in, I sought for full de-liv -rance from chains of guilt and sin; I sought for peace and par-don, for free-dom my fears, I sought at hope to cling to be-yound these passing years,"
        },
        chorus: "",
        song_url: `${path_name}422-AFlageTofollow.Mp3`,
        author: "John W. Peterson"
    },
    "OnlyOneLife": {
        song_num: 443,
        title: "Only One Life",
        stanzas: {
            1: "Only one life to offer,Jesus, my Lord and King;Only one tongue to praise Thee,And of Thy mercy sing.Only one heart's devotion,Saviour, O may it be Consecrated alone to Thy matchless glory,Yielded fully to Thee.",
            2: "Only this hour is mine, Lord.May it be used for Thee; May ev'ry passing moment Count for eternity.Souls all about are dying,Dying in sin and shame;Help me bring them the message of Calv'ry's redemption In Thy glorious name.",
            3: "Only one life to offer.Take it, dear Lord, I pray;Nothing from Thee withholding,Thy will I now obey.Thou who hast freely given Thine all in all for me,Claim this life for Thine own To be used, my Saviour,Ev'ry moment for Thee.   Sources and related content"
        },
        chorus: "",
        song_url: `${path_name}443-OnlyOneLife.Mp3`,
        author: "Avis B. Christiansen and Merrill Dunlop"
    },
    "TheMasterHasCome": {
        song_num: 444,
        title: "The Master Has Come",
        stanzas: {
            1: " The Master has come, and He calls us to follow the track of the footprints He leaves on our way; far over the mountain and through the deep hollow, the path leads us on to the mansions of day: the Master has called us, the children who fear Him,who march 'neath Christ's banner, His own little band;we love Him and seek Him, we long to be near Him and rest in the light of His beautiful land.",
            2: "The Master has called us; the road may be dreary,and dangers and sorrows are strewn on the track;but God's Holy Spirit shall comfort the weary;we follow the Savior and cannot turn back;The Master has called us: though doubt and temptation may compass our journey, we cheerfully sing:press onward, look upward,thru much tribulation;the children of Zion must follow their King.",
            3: "The Master has called us, in life's early morning,with spirits as fresh as the dew on the sod: we turn from the world, with its smiles and its scorning, to cast in our lot with the people of God:the Master has called us, His sons and His daughters, We plead for His blessing and trust in His love;and thru the green pastures, beside the still waters, He'll lead us at last to His kingdom above."
        },
        chorus: "",
        song_url: `${path_name}444-TheMasterHasCome.Mp3`,
        author: "Sarah Doudney"
    },
    "HaveThineOwnWayLord": {
        song_num: 445,
        title: "Have Thine Own Way Lord",
        stanzas: {
            1: "Have thine own way, Lord!Have thine own way!Thou art the potter,I am the clay.Mold me and make meafter thy will, while I am waiting, yielded and still.",
            2: "Have thine own way, Lord!Have thine own way!Search me and try me,Savior today!Wash me just now, Lord, wash me just now,as in thy presence humbly I bow.",
            3: "Have thine own way, Lord!Have thine own way!Wounded and weary,help me I pray!Power, all power, surely is thine!Touch me and heal me, Savior divine!",
            4: "Have thine own way, Lord!Have thine own way!Hold o'er my being absolute sway.Fill with thy Spirit till all shall see Christ only, always,living in me!"
        },
        chorus: "",
        song_url: `${path_name}445-HaveThineOwnWayLord.Mp3`,
        author: "Adelaide A. Pollard "
    },
    "IdReatherHaveJesus": {
        song_num: 446,
        title: "I'd Reather Have Jesus",
        stanzas: {
            1: "I'd rather have Jesus than silver or gold;I'd rather be His than have riches untold;I'd rather have Jesus than houses or lands.I'd rather be led by His nail pierced hand",
            2: "I'd rather have Jesus than men's applause;I'd rather be faithful to His dear cause;I'd rather have Jesus than worldwide fame.I'd rather be true to His holy name",
            3: "He's fairer than lilies of rarest bloom;He's sweeter than honey from out the comb;He's all that my hungering spirit needs.I'd rather have Jesus and let Him lead"
        },
        chorus: "Than to be the king of a vast domain Or be held in sin's dread sway.I'd rather have Jesus than anything This world affords today.",
        song_url: `${path_name}446-IdReatherHaveJesus.Mp3`,
        author: "Rhea F. Miller "
    },
    "JesusIMyCrossHaveTaken,": {
        song_num: 447,
        title: "Jesus, I My Cross Have Taken,",
        stanzas: {
            1: "Jesus, I my cross have taken,all to leave and follow you;destitute, despised, forsaken,you on earth once suffered, too.Perish ev'ry fond ambition,all I've ever hoped or known;yet how rich is my condition,God and heav'n are still my own!",
            2: "Let the world despise and leave me;they have left my Savior, too.Human hearts and looks deceive me;you are not, like them, untrue.And, since you have smiled upon me,God of wisdom, love, and might,foes may hate and friends may shun me; show your face, and all is bright.",
            3: "Go, then, earthly fame and treasure!Come, disaster, scorn, and pain!In your service pain is pleasure, with your favor loss is gain.I have called you Abba, Father;you my all in all shall be.Storms may howl, and clouds may gather, all must work for good to me.",
            4: "Haste, my soul, from grace to glory,armed by faith and winged by prayer;all but heav'n is transitory,God's own hand shall guide you there.Soon shall end this earthly story,swift shall pass the pilgrim days,hope soon change to heav'nly glory,faith to sight and prayer to praise.",
        },
        chorus: "",
        song_url: `${path_name}447-JesusIMyCrossHaveTaken.Mp3`,
        author: "Henry Francis Lyte"
    },
    "ShephredOfLove": {
        song_num: 448,
        title: "Shephred Of Love",
        stanzas: {
            1: "Shep-herd Of love, You knew I had lost my way; shep-herd of love, you cared that I'd gone a-stray , you sought and found me, placed a-round me strong arms that car-ried me home; ham me or a-larm me -Never a-gain will I roam! shep-herd of love,sav-ior and Lord and guids,",
            2: "Shep-herd of love, con-tent-ment at last is mine; deep in my heart there's peace and joy di-vine. The fu-ture's bright-er,bur-den's light-er, my cup runs o-ver each day:your grace supplied me now pro-videos me all that I need for the way.shep-herd of love,sav-ior and lord and guide",
        },
        chorus: "",
        song_url: `${path_name}448-ShephredOfLove.Mp3`,
        author: "john W Peterson"
    },
    "TakeMyLifeAndLetItBe": {
        song_num: 449,
        title: "Take My Life And Let It Be",
        stanzas: {
            1: "Take My Life and let it be con-se-cra-ted, Lord to thee; Take my mo-ments and my days- Let them flow in cease-less praise, Let them flow in cease-less praise ",
            2: "take my hands and let them move at the im-pulse of thy love; Take my feast and let them be swift and beau-it -ful for thee; swift and beau-ti-ful for thee",
            3: "Take my voice and let me sing Al-ways, on-ly for Thy king; Take my lips and let be filled with mess-age-es from thee,filled with mess-age-es from thee",
            4: "take my sil-ver and my gold not a mite would I with-hold; take my in-tel-lect and use ev'ry power as thou shalt choose, Ev-ry power as thou choose ",
            5: "Take my will and make it thine- it shall be no long-er mine; take my heart -it is thine own ,it shall be thy royal throne,it shall be thy royal throne",
            6: "Take my love-my Lord, I pour At thy feet it's treas-ure ; Take my-self and I will be Ev-er on-ly all, for thee, Ev-er,on-ly all for thee  ",
        },
        chorus: "",
        song_url: `${path_name}449-TakeMyLifeAndLetItBe.Mp3`,
        author: "Frances R Havergal "
    },
    "LivingForJesus": {
        song_num: 450,
        title: "Living For Jesus",
        stanzas: {
            1: "Liv-ing for jesus a life that is true,striving to please Him in all that I do, yield-ing al-le-giance, glad-heart-ed and free- this is the path-way of blessing for him.",
            2: "Liv-ing for jesus who died in my place, Bearing on cal-v'ry my sin and dis-grace -such love con-strains me to an-swer his call follow His lead-ding and give him my all",
            3: "Living-for jesus thou earth;s list-tie while,my dear-est treasure the light of his smile, seek-ing the lost ones he died to re-deem, bring-ing the wea-ry to find rest in him ."
        },
        chorus: "O Jesus Lord and saviour I give myself to thee, for thou in thine a tone ment didst give thy-self for me. I own no other mas-ter -my heart shall be thy ",
        song_url: `${path_name}450-LivingForJesus.Mp3`,
        author: "Thomas O. Chisholm"
    },

}