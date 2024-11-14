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
    "NoOneUnderstandsLikeJesus": {
        song_num: 351,
        title: "No One Understands Like Jesus",
        stanzas: {
            1: "No one understands like Jesus. He's a friend beyond compare; Meet Him at the throne of mercy; He is waiting for you there.",
            2: "No one understands like Jesus; Ev'ry woe He sees and feels; Tenderly He whispers comfort, And the broken heart He heals.",
            3: "No one understands like Jesus When the foes of life assail; You should never be discouraged; Jesus cares and will not fail.",
            4: "No one understands like Jesus When you falter on the way; Tho' you fail Him, sadly fail Him, He will pardon you today."
        },
        chorus: "No one understands like Jesus When the days are dark and grim; No one is so near, so dear as Jesus-- Cast your ev'ry care on Him!",
        song_url: `${path_name}351-NoOneUnderstandsLikeJesus.mp3`,
        author: "John W. Peterson"
    },
    "ComeYeDisconsolate": {
        song_num: 352,
        title: "Come, Ye Disconsolate",
        stanzas: {
            1: "Come, you disconsolate, where'er you languish; come to the mercy seat, fervently kneel. Here bring your wounded hearts, here tell your anguish; earth has no sorrows that heaven cannot heal.",
            2: "Joy of the desolate, light of the straying, hope of the penitent, fadeless and pure! Here speaks the Comforter, in mercy saying, Earth has no sorrows that heaven cannot cure.",
            3: "Here see the bread of life; see waters flowing forth from the throne of God, pure from above. Come to the feast prepared; come, ever knowing earth has no sorrows but heaven can remove."
        },
        chorus: "",
        song_url: `${path_name}352-ComeYeDisconsolate.mp3`,
        author: "Thomas Moore, Thomas Hastings"
    },
    "PeacePerfectPeace": {
        song_num: 353,
        title: "Peace, Perfect Peace",
        stanzas: {
            1: "Peace, perfect peace, in this dark world of sin? The blood of Jesus whispers peace within.",
            2: "Peace, perfect peace, by thronging duties pressed? To do the will of Jesus, this is rest.",
            3: "Peace, perfect peace, death shadowing us and ours? Jesus has vanquished death and all its powers.",
            4: " Peace, perfect peace, our future all unknown? Jesus we know, and he is on the throne.",
            5: "It is enough: earth's struggles soon shall cease, and Jesus call to heaven's perfect peace."
        },
        chorus: "",
        song_url: `${path_name}353-PeacePerfectPeace.mp3`,
        author: "Edward H. Bickersteth"
    },
    "WhereCouldIGo": {
        song_num: 354,
        title: "Where Could I Go?",
        stanzas: {
            1: "Living below in this old sinful world, Hardly a comfort can afford; Striving alone to face temptation sore, Where could I go but to the Lord?",
            2: "Neighbors are kind, I love them ev'ry one, We get along in sweet accord;  my soul needs manna from above, uld I go but to the Lord?",
            3: "Life here is grand with friends I love so dear, Comfort I get from God's own word;  I face the chilling hand of death, uld I go but to the Lord? "
        },
        chorus: "Where could I go? Oh, where could I go Seeking a refuge for my soul? a friend to save me in the end,Where could I go but to the Lord?",
        song_url: `${path_name}354-WhereCouldIGo.mp3`,
        author: "James B Coats"
    },
    "JesusCares": {
        song_num: 355,
        title: "Jesus Cares",
        stanzas: {
            1: "He cares when you're trou-bled and the whole world seems wrong, He cares when the tri - als try to si - lence your song; He cares when you're lone - ly, tho you laugh with the throng-  Je - sus cares.",
            2: "He cares when you stum-ble in the heat of the day, He cares when you're bur-dened and too wea - ry to pray; He cares when you fail Him, when your feet go a - stray- Je - sus cares.",
            3: "He cares when you,re strick-en and your strength starts to wane, He cares when you trem-ble with  fever and pain; He cares when you've strug-gled but the work seems in vain- Je - sus cares."
        },
        chorus: "Yes, Jesus cares, He cares when your heart aches; Take Him your many burdens: Jesus cares.",
        song_url: `${path_name}355-JesusCares.mp3`,
        author: "John W. Peterson"
    },
    "InTheCrossOfChristIGlory": {
        song_num: 356,
        title: "In The Cross Of Christ I Glory",
        stanzas: {
            1: "In the cross of Christ I glory, towering o'er the wrecks of time; all the light of sacred storygathers round its head sublime.",
            2: "When the woes of life o'ertake me, hopes deceive, and fears annoy, never shall the cross forsake me. Lo! it glows with peace and joy.",
            3: "When the sun of bliss is beaming light and love upon my way, from the cross the radiance streamingadds more luster to the day.",
            4: "Bane and blessing, pain and pleasure, by the cross are sanctified; peace is there that knows no measure, joys that through all time abide. ",
            5: "In the cross of Christ I glory, towering o'er the wrecks of time; all the light of sacred story gathers round its head sublime. "
        },
        chorus: "",
        song_url: `${path_name}356-InTheCrossOfChristIGlory.mp3`,
        author: "John Bowring"
    },
    "OTheLoveTheLoveOfJesus": {
        song_num: 357,
        title: "O The Love, The Love Of Jesus!",
        stanzas: {
            1: "O the love, the love of Jesus! Vast, unmeasured, boundless free; Rolling as a mighty ocean In its fullness over me.",
            2: "O the love, the love of Jesus! Binds our hearts in one accord; We, the people of His kingdom, Love and serve the Lord our God., ",
            3: "O the love, the love of Jesus! Daily it becomes more clear; As the years of our sojourning Bring us closer to Him near."
        },
        chorus: "O the love, the love of Jesus! Is the love of God in me.",
        song_url: `${path_name}357-OTheLoveTheLoveOfJesus.mp3`,
        author: "John W. Peterson"
    },
    "GodWillTakeCareOfYou": {
        song_num: 358,
        title: "God Will Take Care Of You",
        stanzas: {
            1: "Be not dismayed whate'er betide, God will take care of you; Beneath his wings of love abide, God will take care of you.",
            2: " Through days of toil when heart doth fail, God will take care of you; When dangers fierce your path assail, God will take care of you.",
            3: "No matter what may be the test, God will take care of you; Lean, weary one, upon his breast, God will take care of you."
        },
        chorus: "God will take care of you, through ev'ry day, o'er all the way; He will take care of you, God will take care of you.",
        song_url: `${path_name}358-GodWillTakeCareOfYou.mp3`,
        author: "Civilla D. Martin"
    },
    "GuideMeOThouGreatJehovah": {
        song_num: 359,
        title: "Guide Me, O Thou Great Jehovah",
        stanzas: {
            1: "Guide me, O my great Redeemer, pilgrim through this barren land; I am weak, but you are mighty; hold me with your powerful hand. Bread of heaven, bread of heaven, feed me now and evermore, feed me now and evermore.",
            2: "Open now the crystal fountain, where the healing waters flow. Let the fire and cloudy pillar lead me all my journey through. Strong Deliverer, strong Deliverer, ever be my strength and shield, ever be my strength and shield.",
            3: "When I tread the verge of Jordan, bid my anxious fears subside. Death of death, and hell's Destruction, land me safe on Canaan's side. Songs of praises, songs of praises I will ever sing to you, I will ever sing to you. "
        },
        chorus: "",
        song_url: `${path_name}339-GuideMeOThouGreatJehovah.mp3`,
        author: "William Williams"
    },
    "HeGivethMoreGrace": {
        song_num: 360,
        title: "He Giveth More Grace",
        stanzas: {
            1: "He giveth more grace as our burdens grow greater, He sendeth more strength as our labors increase; To added afflictions He addeth His mercy, To multiplied trials He multiplies peace.",
            2: "When we have exhausted our store of endurance, When our strength has failed ere the day is half done, When we reach the end of our hoarded resources Our Father's full giving is only begun.",
            3: "Fear not that thy need shall exceed His provision, Our God ever yearns His resources to share; Lean hard on the arm everlasting, availing; The Father both thee and thy load will upbear.",
            4: "His love has no limits, His grace has no measure, His power no boundary known unto men; For out of His infinite riches in Jesus He giveth, and giveth, and giveth again."
        },
        chorus: "",
        song_url: `${path_name}360-HeGivethMoreGrace.mp3`,
        author: "Annie Johnson Flint"
    },
    "EachStepOfTheWay": {
        song_num: 361,
        title: "Each Step Of The Way",
        stanzas: {
            1: "I've been following Jesus each step of the way, Since I heard His call, so tender, yet strong; He has promised to guide me all the way to that home, Where the river of life ever flows.",
            2: "There are times when the road seems rough and steep, And I feel I can't go on; But His love keeps me going, each step of the way, For I know He will lead me home.",
            3: "As I walk in His footsteps, close to His side, I find that His strength is mine; And with every step that I take in His will, I'm more like my Savior Divine."
        },
        chorus: " Each step of the way, I'll walk with my Savior; His hand in mine, I'll never stray. His love is my comfort, His grace my delight; I'll follow each step of the way.",
        song_url: `${path_name}361-EachStepOfTheWay.mp3`,
        author: "Redd Harper"
    },
    "JesusIsWalkingWithMe": {
        song_num: 362,
        title: "Jesus Is Walking With Me",
        stanzas: {
            1: "I've a song that I love to sing, Since I have been redeemed, Of my Redeemer, Savior King, Since I have been redeemed.",
            2: "I am not alone, though my path seems rough, Jesus is walking with me; He will keep me safe through the stormy sea, Jesus is walking with me.",
            3: "I am leaning on His mighty arm, Jesus is walking with me; He will be my guide all the way to the end, Jesus is walking with me."
        },
        chorus: "Jesus is walking with me, He's with me every day, Guiding my steps as I journey along, Jesus is walking with me.",
        song_url: `${path_name}362-JesusIsWalkingWithMe.mp3`,
        author: "John W. Peterson"
    },
    "LeaningOnTheEverlastingArms": {
        song_num: 363,
        title: "Leaning On The Everlasting Arms",
        stanzas: {
            1: "What a fellowship, what a joy divine, leaning on the everlasting arms; what a blessedness, what a peace is mine, leaning on the everlasting arms.",
            2: "O how sweet to walk in this pilgrim way, leaning on the everlasting arms; O how bright the path grows from day to day, leaning on the everlasting arms. ",
            3: "What have I to dread, what have I to fear, leaning on the everlasting arms? I have blessed peace with my Lord so near, leaning on the everlasting arms. "
        },
        chorus: "Leaning, leaning, safe and secure from all alarms; leaning, leaning, leaning on the everlasting arms.",
        song_url: `${path_name}34-LeaningOnTheEverlastingArms.mp3`,
        author: "Elisha A. Hoffman"
    },
    "HeLeadethMe": {
        song_num: 364,
        title: "He Leadeth Me",
        stanzas: {
            1: "He leadeth me: O blessed thought! O words with heavenly comfort fraught! Whate'er I do, where'er I be, still 'tis God's hand that leadeth me.",
            2: "Sometimes mid scenes of deepest gloom, sometimes where Eden's flowers bloom, by waters calm, o'er troubled sea, still 'tis God's hand that leadeth me.",
            3: " Lord, I would clasp thy hand in mine, nor ever murmur nor repine; content, whatever lot I see, since 'tis my God that leadeth me. ",
            4: "And when my task on earth is done, when, by thy grace, the victory's won, e'en death's cold wave I will not flee, since God through Jordan leadeth me."
        },
        chorus: "He leadeth me, he leadeth me; by his own hand he leadeth me: his faithful follower I would be, for by his hand he leadeth me.",
        song_url: `${path_name}364-HeLeadethMe.mp3`,
        author: "Joseph H. Gilmore"
    },
    "SaviorLikeAShepherdLeadUs": {
        song_num: 365,
        title: "Savior, Like A Shepherd Lead Us",
        stanzas: {
            1: "Savior, like a shepherd lead us, Much we need Thy tender care; In Thy pleasant pastures feed us, For our use Thy folds prepare: Blessèd Jesus, blessèd Jesus, Thou hast bought us, Thine we are; Blessèd Jesus, blessèd Jesus, Thou hast bought us, Thine we are.",
            2: "We are Thine, do Thou befriend us, Be the guardian of our way; Keep Thy flock, from sin defend us, Seek us when we go astray: Blessèd Jesus, blessèd Jesus, Hear, O hear us when we pray; Blessèd Jesus, blessèd Jesus, Hear, O hear us when we pray.",
            3: "Thou hast promised to receive us, Poor and sinful though we be; Thou hast mercy to relieve us, Grace to cleanse, and pow'r to free: Blessèd Jesus, blessèd Jesus, Early let us turn to Thee; Blessèd Jesus, blessèd Jesus, Early let us turn to Thee.",
            4: "Early let us seek Thy favor, Early let us do Thy will; Blessed Lord and only Savior, With Thy love our bosoms fill: Blessèd Jesus, blessèd Jesus, Thou hast loved us, love us still; Blessèd Jesus, blessèd Jesus, Thou hast loved us, love us still."
        },
        chorus: "",
        song_url: `${path_name}365-SaviorLikeAShepherdLeadUs.mp3`,
        author: "Dorothy A. Thrupp"
    },
    "TheLord'sMyShepherd": {
        song_num: 366,
        title: "The Lord's My Shepherd",
        stanzas: {
            1: "The LORD's my Shepherd, I'll not want. He makes me down to lie in pastures green; He leadeth me the quiet waters by.",
            2: "My soul He doth restore again; and me to walk doth make within the paths of righteousness, e'en for his own name's sake.",
            3: "Yea, though I walk thro' death's dark vale, yet will I fear no ill; for Thou art with me, and Thy rod and staff me comfort still.",
            4: "My table Thou hast furnishéd in presence of my foes; my head Thou dost with oil anoint, and my cup overflows.",
            5: "Goodness and mercy all my life shall surely follow me: and in God's house forevermore my dwelling place shall be."
        },
        chorus: "",
        song_url: `${path_name}366-TheLordsMyShepherd.mp3`,
        author: "Francis Rous"
    },
    "IfYouWillOnlyLetGodGuideYou": {
        song_num: 367,
        title: "If You Will Only Let God Guide You",
        stanzas: {
            1: "If you but trust in God to guide you and place your confidence in him, you'll find him always there beside you to give you hope and strength within; for those who trust God's changeless love build on the rock that will not move.",
            2: "Only be still and wait his pleasure in cheerful hope with heart content. He fills your needs to fullest measure with what discerning love has sent; doubt not our inmost wants are known to him who chose us for his own.",
            3: "Sing, pray, and keep his ways unswerving, offer your service faithfully, and trust his word; though undeserving, you'll find his promise true to be. God never will forsake in need the soul that trusts in him indeed. "
        },
        chorus: "",
        song_url: `${path_name}367-IfYouWillOnlyLetGodGuideYou.mp3`,
        author: "Georg Neumark"
    },
    "TheKingOfLoveMyShepherdIs": {
        song_num: 368,
        title: "The King Of Love My Shepherd Is",
        stanzas: {
            1: "The King of love my shepherd is, whose goodness faileth never. I nothing lack if I am his, and he is mine forever.",
            2: "Where streams of living water flow, my ransomed soul he leadeth; and where the verdant pastures grow, with food celestial feedeth.",
            3: "Perverse and foolish, oft I strayed, but yet in love he sought me; and on his shoulder gently laid, and home, rejoicing, brought me.",
            4: "In death's dark vale I fear no ill, with thee, dear Lord, beside me; thy rod and staff my comfort still, thy cross before to guide me.",
            5: "Thou spreadst a table in my sight; thy unction grace bestoweth; and oh, what transport of delight from thy pure chalice floweth!",
            6: "And so through all the length of days, thy goodness faileth never; Good Shepherd, may I sing thy praise within thy house forever."

        },
        chorus: "",
        song_url: `${path_name}368-TheKingOfLoveMyShepherdIs.mp3`,
        author: "Henry W. Baker"
    },
    "SurelyGoodnessAndMercy": {
        song_num: 369,
        title: "Surely Goodness And Mercy",
        stanzas: {
            1: "A pilgrim was I, and a-wand'ring, In the cold night of sin I did roam, When Jesus the kind Shepherd found me, And now I am on my way home.",
            2: "He restoreth my soul when I'm weary, He giveth me strength day by day; He leads me beside the still waters, He guards me each step of the way.",
            3: "When I walk through the dark lonesome valley, My Savior will walk with me there; And safely His great hand will lead me To the mansions He's gone to prepare."
        },
        chorus: "Surely goodness and mercy shall follow me All the days, all the days of my life; Surely goodness and mercy shall follow me All the days, all the days of my life. And I shall dwell in the house of the Lord forever, And I shall feast at the table spread for me; Surely goodness and mercy shall follow me All the days, all the days of my life.",
        song_url: `${path_name}369-SurelyGoodnessAndMercy.mp3`,
        author: "John W. Peterson"
    },
    "DayByDay": {
        song_num: 370,
        title: "Day By Day",
        stanzas: {
            1: "Day by day and with each passing moment, trength I find to meet my trials here; rusting in my Father's wise bestowment, 've no cause for worry or for fear. e whose heart is kind beyond all measure ives unto each day what he deems best- ovingly, its part of pain and pleasure, ingling toil with peace and rest. ",
            2: "Ev'ry day the Lord himself is near me, ith a special mercy for each hour; ll my cares he gladly bears and cheers me, e whose name is Counselor and Pow'r. he protection of his child and treasure s a charge that on himself he laid: 'As your days, your strength shall be in measure'- his the pledge to me he made. ",
            3: "Help me then in ev'ry tribulation o to trust your promises, O Lord, hat I lose not faith's sweet consolation ffered me within your holy Word. elp me, Lord, when, toil and trouble meeting, 'er to take, as from a father's hand, ne by one, the days, the moments fleeting, ill I reach the promised land."
        },
        chorus: "",
        song_url: `${path_name}370-DayByDay.mp3`,
        author: "Lina Sandell Berg"
    },
    "GodIsSoGood": {
        song_num: 371,
        title: "God Is So Good",
        stanzas: {
            1: "God is so good, God is so good, God is so good, he's so good to me.",
            2: "He cares for me, He cares for me, He cares for me, he's so good to me.",
            3: "God answers prayer, God answers prayer, God answers prayer, he's so good to me.",
            4: "I praise his name, I praise his name, I praise his name, he's so good to me."
        },
        chorus: "",
        song_url: `${path_name}371-GodIsSoGood.mp3`,
        author: "Paul Makai"
    },
    "TheBranchOfHealing": {
        song_num: 372,
        title: "The Branch Of Healing",
        stanzas: {
            2: "There is a healing branch that grows Where ev'ry 'bitter water' flows; This is our health renewing tree: 'I am the Lord that healeth thee'",
            3: "There is an old appointed way For those who hearken and obey; Above the gate these words we see 'I am the Lord that healeth thee'",
            1: "There is a promise that has stood Since Is rael crossed the parted flood; It stands today for you and me 'I am the Lord that healeth thee'",
            4: "There is agreat physician still Whose hand has all its ancient skill; At His command disease must flee 'I am the Lord that healeth thee'"
        },
        chorus: "",
        song_url: `${path_name}372-TheBranchOfHealing.mp3`,
        author: "Albert B. Simpson"
    },
    "InPleasantPlaces": {
        song_num: 373,
        title: "In Pleasant Places",
        stanzas: {
            1: "Sweet it is to follow the Saior, Sweet to have Him close by my side; Carefully the path way He chooses, He is sauch a wonderful guide.",
            2: "E - ven when the storm clouds are threatning, There's no need to worry or fear; Jesus will be there to protect me, When I call for help He will hear.",
            3: "Now my life in - dead is worth living, Christ has made the diff'rence for me; There's a joy, a glory, a wonder, Ev'ry day His goodness I see",
            4: "Some day He will take me to heaven, Safely I'll be led by His hand; Pleasant are the places a waiting There with-in that beautiful land"
        },
        chorus: "In pleasant places Jesus leads me, Like a shepherd so gentle and kind; In pleasant places by still waters, O what pleasure and blessing I find.",
        song_url: `${path_name}373-InPleasantPlaces.mp3`,
        author: "John W. Peterson"
    },
    "PreciousLordTakeMyHand": {
        song_num: 374,
        title: "Precious Lord, Take My Hand",
        stanzas: {
            1: "Precious Lord, take my hand, Lead me on, help me stand- I am tired, I am weak, I am worn; Thru the storm, thru the night, Lead me on to the light- Take my hand, precious Lord, lead me home.",
            2: "When my way grows dear, Precious Lord, linger near- When my life is almost gone; Hear my cry, hear my call, Hold my hand lest I fall- Take my hand, precious Lord, lead me home."
        },
        chorus: "",
        song_url: `${path_name}374-PreciousLordTakeMyHand.mp3`,
        author: "Thomas A. Dorsey"
    },
    "AllTheWayMySaviorLeadsMe": {
        song_num: 375,
        title: "All The Way My Savior Leads Me",
        stanzas: {
            1: "All the way my Savior leads me- What have I to ask beside? Can I doubt His tender mercy, Who through life has been my guide? Heav'nly peace, divinest comfort, Here by faith in Him to dwell! For I know, whate'er befall me, Jesus doeth all things well; For I know, whate'er befall me, Jesus doeth all things well.",
            2: "All the way my Savior leads me- Cheers each winding path I tread, Gives me grace for ev'ry trial, Feeds me with the living bread. Though my weary steps may falter And my soul athirst may be, Gushing from the rock before me, Lo! a spring of joy I see; Gushing from the rock before me, Lo! A spring of joy I see.",
            3: "All the way my Savior leads me- Oh, the fullness of His love! Perfect rest to me is promised In my Father's house above. When my spirit, clothed immortal, Wings its flight to realms of day, This my song through endless ages: Jesus led me all the way; This my song through endless ages: Jesus led me all the way."
        },
        chorus: "",
        song_url: `${path_name}375-AllTheWayMySaviorLeadsMe.mp3`,
        author: "Fanny J. Crosby"
    },
    "AlmightyFatherStrongToSave": {
        song_num: 376,
        title: "Almighty Father, Strong To Save",
        stanzas: {
            1: "Eternal Father, strong to save, Whose arm does bind the restless wave, Who bids the mighty ocean deep Its own appointed limits keep; O hear us when we cry to Thee For those in peril on the sea.",
            2: "O Savior, whose almighty word The winds and waves submissive heard, Who walked upon the foaming deep, And calm amid the rage did sleep; O hear us when we cry to Thee For those in peril on the sea.",
            3: "O Holy Spirit, who did brood Upon the waters dark and rude, And bid their angry tumult cease, And give for wild confusion peace; O hear us when we cry to Thee For those in peril on the sea.",
            4: "O Trinity of love and pow'r, Your children shield in danger's hour; From rock and tempest, fire, and foe, Protect them where-so-e'er they go; Thus, evermore shall rise to Thee Glad hymns of praise from land and sea."
        },
        chorus: "",
        song_url: `${path_name}376-AlmightyFatherStrongToSave.mp3`,
        author: "William Whiting, Robert Nelson Spencer"
    },
    "JesusSaviorPilotMe": {
        song_num: 377,
        title: "Jesus, Savior, Pilot Me",
        stanzas: {
            1: "Jesus, Savior, pilot me, Over life's tempestuous sea: Unknown waves before me roll, Hiding rocks and treach'rous shoal; Chart and compass come from Thee- Jesus, Savior, pilot me!",
            2: "As a mother stills her child, Thou canst hush the ocean wild; Boist'rous waves obey Thy will When Thou say'st to them, 'Be still!' Wondrous Sov'reign of the sea, Jesus, Savior, pilot me!",
            3: "When at last I near the shore, And the fearful breakers roar 'Twixt me and the peaceful rest- Then, while leaning on Thy breast, May I hear Thee say to me, 'Fear not- I will pilot thee!'"
        },
        chorus: "",
        song_url: `${path_name}377-JesusSaviorPilotMe.mp3`,
        author: "Edward Hopper"
    },
    "BeThouMyVision": {
        song_num: 378,
        title: "Be Thou My Vision",
        stanzas: {
            1: "Be Thou my Vision, O Lord of my heart; be all else but naught to me, save that Thou art; be Thou my best thought in the day and the night, both waking and sleeping, Thy presence my light.",
            2: "Be Thou my Wisdom, be Thou my true Word; be Thou ever with me and I with Thee, Lord; be Thou my great Father, and I Thy true son, be Thou in me dwelling, and I with Thee one.",
            3: "Be Thou my Breastplate, my Sword for the fight; be Thou my whole Armor, be Thou my true Might; be Thou my soul's Shelter, be Thou my strong Tow'r, O raise Thou me heav'nward, great Pow'r of my pow'r.",
            4: "Riches I heed not, nor man's empty praise, be Thou mine inheritance, now and always; be Thou and Thou only the first in my heart, O High King of heaven, my Treasure Thou art.",
            5: "High King of heaven, Thou heaven's bright Sun, O grant me its joys, after vict'ry is won; Great Heart of my own heart, whatever befall, still be Thou my Vision, O Ruler of all."
        },
        chorus: "",
        song_url: `${path_name}378-BeThouMyVision.mp3`,
        author: ""
    },
    "SunOfMySoul": {
        song_num: 379,
        title: "Sun Of My Soul",
        stanzas: {
            1: "Sun of my soul, Thou Savior dear, it is not night if Thou be near; O may no earthborn cloud arise, to hide Thee from Thy servant's eyes.",
            2: "When the soft dews of kindly sleep my weary eyelids gently steep, be my last thought how sweet to rest forever on my Savior's breast.",
            3: "Abide with me from morn till eve, for without Thee I cannot live; abide with me when night is nigh, for without Thee I dare not die.",
            4: "If some poor wand'ring child of Thine has spurned today the voice divine, now, Lord, the gracious work begin; let him no more lie down in sin.",
            5: "Watch by the sick; enrich the poor with blessings from Thy boundless store; be every mourner's sleep tonight like infant's slumbers, pure and light.",
            6: "Come near and bless us when we wake, ere through the world our way we take, till in the ocean of Thy love we lose ourselves in heav'n above."
        },
        chorus: "",
        song_url: `${path_name}379-SunOfMySoul.mp3`,
        author: "John Keble"
    },
    "HigherGround": {
        song_num: 380,
        title: "Higher Ground",
        stanzas: {
            1: "I'm pressing on the upward way,New heights I'm gaining ev'ry day;Still praying as I'm onward bound,“Lord, plant my feet on higher ground.”",
            2: "My heart has no desire to stayWhere doubts arise and fears dismay;Though some may dwell where these abound,My prayer, my aim, is higher ground.",
            3: "I want to live above the world,Though Satan's darts at me are hurled;For faith has caught a joyful sound,The song of saints on higher ground.",
            4: "I want to scale the utmost height,And catch a gleam of glory bright;But still I'll pray till heav'n I've found,“Lord, lead me on to higher ground.”"
        },
        chorus: "Lord, lift me up, and let me standBy faith, on heaven's tableland;A higher plane than I have found,Lord, plant my feet on higher ground.",
        song_url: `${path_name}380-HigherGround.mp3`,
        author: "Johnson Oatman, Jr."
    },
    "LordIWantToBeAChristian": {
        song_num: 381,
        title: "Lord, I Want To Be A Christian",
        stanzas: {
            1: "Lord, I want to be a Christian in my heart, in my heart. Lord, I want to be a Christian in my heart. In my heart, in my heart, Lord, I want to be a Christian in my heart.",
            2: "Lord, I want to be more loving in my heart, in my heart. Lord, I want to be more loving in my heart. In my heart, in my heart, Lord, I want to be more loving in my heart.",
            3: "Lord, I want to be more holy in my heart, in my heart. Lord, I want to be more holy in my heart. In my heart, in my heart, Lord, I want to be more holy in my heart.",
            4: "Lord, I want to be like Jesus in my heart, in my heart. Lord, I want to be like Jesus in my heart. In my heart, in my heart, Lord, I want to be like Jesus in my heart."
        },
        chorus: "",
        song_url: `${path_name}381-LordIWantToBeAChristian.mp3`,
        author: ""
    },
    "INeedTheeEveryHour": {
        song_num: 382,
        title: "I Need Thee Every Hour",
        stanzas: {
            1: "I need Thee ev'ry hour, Most gracious Lord; No tender voice like Thine Can peace afford.",
            2: "I need Thee ev'ry hour, Stay Thou nearby; Temptations lose their pow'r When Thou art nigh.",
            3: "I need Thee ev'ry hour, In joy or pain; Come quickly and abide, Or life is vain.",
            4: "I need Thee ev'ry hour, Teach me Thy will; And Thy rich promises In me fulfill."
        },
        chorus: "I need Thee, oh, I need Thee; Ev'ry hour I need Thee; Oh, bless me now, my Savior, I come to Thee.",
        song_url: `${path_name}382-INeedTheeEveryHour.mp3`,
        author: "Annie S. Hawks"
    },
    "LetTheBeautyOfJesusBeSeenInMe": {
        song_num: 383,
        title: "Let The Beauty Of Jesus Be Seen In Me",
        stanzas: {
            1: "Let the beauty of Jesus be seen in me; All His wonderful passion and purity! O Thou Spirit divine, All my nature refine, Till the beauty of Jesus be seen in me."
        },
        chorus: "",
        song_url: `${path_name}383-LetTheBeautyOfJesusBeSeenInMe.mp3`,
        author: "Albert W. T. Orsborn"
    },
    "IWouldBeLikeJesus": {
        song_num: 384,
        title: "I Would Be Like Jesus",
        stanzas: {
            1: "Earthly pleasures vainly call me; I would be like Jesus; Nothing worldly shall enthrall me, I would be like Jesus.",
            2: "He has broken every fetter, I would be like Jesus; That my soul may serve Him better, I would be like Jesus.",
            3: "All the way from earth to glory, I would be like Jesus; Telling o'er and o'er the story, I would be like Jesus.",
            4: "That in heaven He may meet me, I would be like Jesus; That His words “Well done” may greet me, I would be like Jesus."
        },
        chorus: "Be like Jesus - this my song, In the home and in the throng; Be like Jesus, all day long, I would be like Jesus.",
        song_url: `${path_name}384-IWouldBeLikeJesus.mp3`,
        author: "James Rowe"
    },
    "IAmThineOLord": {
        song_num: 385,
        title: "I Am Thine, O Lord",
        stanzas: {
            1: "I am Thine, O Lord, I have heard Thy voice, And it told Thy love to me; But I long to rise in the arms of faith, And be closer drawn to Thee.",
            2: "Consecrate me now to Thy service, Lord, By the pow'r of grace divine; Let my soul look up with a steadfast hope, And my will be lost in Thine.",
            3: "Oh, the pure delight of a single hour That before Thy throne I spend, When I kneel in prayer, and with Thee, my God, I commune as friend with friend!",
            4: "There are depths of love that I cannot know Till I cross the narrow sea; There are heights of joy that I may not reach Till I rest in peace with Thee."
        },
        chorus: "Draw me nearer, nearer, nearer, blessed Lord, To the cross where Thou hast died; Draw me nearer, nearer, nearer, blessed Lord, To Thy precious, bleeding side.",
        song_url: `${path_name}385-IAmThineOLord.mp3`,
        author: "Fanny J. Crosby"
    },
    "MyJesusILoveThee": {
        song_num: 386,
        title: "My Jesus, I Love Thee",
        stanzas: {
            1: "My Jesus, I love thee, I know thou art mine; for thee all the follies of sin I resign; my gracious Redeemer, my Savior art thou; if ever I loved thee, my Jesus, 'tis now.",
            2: "I love thee because thou hast first loved me and purchased my pardon on Calvary's tree; I love thee for wearing the thorns on thy brow; if ever I loved thee, my Jesus, 'tis now.",
            3: "I'll love thee in life, I will love thee in death, and praise thee as long as thou lendest me breath, and say when the deathdew lies cold on my brow: If ever I loved thee, my Jesus, 'tis now.",
            4: "In mansions of glory and endless delight, I'll ever adore thee in heaven so bright; I'll sing with the glittering crown on my brow: If ever I loved thee, my Jesus, 'tis now. "
        },
        chorus: "",
        song_url: `${path_name}386-MyJesusILoveThee.mp3`,
        author: "William R. Featherstone"
    },
    "NearToThyHeart": {
        song_num: 387,
        title: "Near To Thy Heart",
        stanzas: {
            1: "Near to thy heart, O Christ divine, Leaning like John on thy breast- Till with Thy glory I will shine, Near to Thy heart I'd rest.",
            2: "Near to thy heart O may I be, Hearing Thy sweet words of love, Learning Thy precious will for me, Seeking those things above.",
            3: "Near to thy heart where all is peace, Lost in the light of Thy face, There will my faith and trust increase, There will I grow in grace."
        },
        chorus: "",
        song_url: `${path_name}387-NearToThyHeart.mp3`,
        author: "John W. Peterson"
    },
    "MayTheMindOfChristMySavior": {
        song_num: 388,
        title: "May The Mind Of Christ, My Savior",
        stanzas: {
            1: "May the mind of Christ, my Savior, live in me from day to day, by His love and pow'r controlling all I do and say.",
            2: "May the word of God dwell richly in my heart from hour to hour, so that all may see I triumph only through His pow'r.",
            3: "May the peace of God my Father rule my life in everything, that I may be calm to comfort sick and sorrowing.",
            4: "May the love of Jesus fill me as the waters fill the sea; Him exalting, self abasing: this is victory.",
            5: "May I run the race before me, strong and brave to face the foe, looking only unto Jesus as I onward go. ",
            6: "May His beauty rest upon me as I seek the lost to win, and may they forget the channel, seeing only Him."
        },
        chorus: "",
        song_url: `${path_name}388-MayTheMindOfChristMySavior.mp3`,
        author: "Kate B. Wilkinson"
    },
    "MakeMeABlessing": {
        song_num: 389,
        title: "Make Me A Blessing",
        stanzas: {
            1: "Out in the highways and byways of life, Many are weary and sad; Carry the sunshine where darkness is rife, Making the sorrowing glad.",
            2: "Tell the sweet story of Christ and his love, Tell of his pow'r to forgive; Others will trust him if only you prove True, ev'ry moment you live.",
            3: "Give as 'twas given to you in your need, Love as the Master loved you; Be to the helpless a helper indeed, Unto your mission be true. "
        },
        chorus: "Make me a blessing, Make me a blessing. Out of my life may Jesus shine; Make me a blessing, O Savior, I pray. Make me a blessing to someone today.",
        song_url: `${path_name}389-MakeMeABlessing.mp3`,
        author: "Ira B. Wilson"
    },
    "ChristBeBesideMe": {
        song_num: 390,
        title: "Christ Be Beside Me",
        stanzas: {
            1: "Christ beside me, Christ before me, Christ behind me, King of my heart; Christ within me, Christ below me, Christ above me never to part.",
            2: "Christ on my right hand, Christ on my left hand, Christ all around me shield in the strife; Christ in my sleeping, Christ in my sitting, Christ in my rising light of my life.",
            3: "Christ beside me, Christ before me, Christ behind me, King of my heart; Christ within me, Christ below me, Christ above me never to part."
        },
        chorus: "",
        song_url: `${path_name}390-ChristBeBesideMe.mp3`,
        author: "St, Patrick 2nd"
    },
    "MyDesire": {
        song_num: 391,
        title: "My Desire",
        stanzas: {
            1: "My desire to be like Jesus, My desire- to be like Him! His Spirit fill me, His love o'er-whelm me: In deed and word to be like Him!"
        },
        chorus: "",
        song_url: `${path_name}391-MyDesire.mp3`,
        author: "Lillian Plankenhorn"
    },
    "MoreAboutJesus": {
        song_num: 392,
        title: "More About Jesus",
        stanzas: {
            1: " More about Jesus would I know, More of His grace to others show; More of His saving fullness see, More of His love who died for me.",
            2: "More about Jesus let me learn, More of His holy will discern; Spirit of God, my teacher be, Showing the things of Christ to me.",
            3: " More about Jesus on His throne, Riches in glory all His own; More of His kingdom's sure increase; More of His coming, Prince of peace.",
            4: "More about Jesus in His Word, Holding communion with my Lord; Hearing His voice in ev'ry line, Making each faithful saying mine."
        },
        chorus: "More, more about Jesus, More, more about Jesus; More of His saving fullness see, More of His love who died for me.",
        song_url: `${path_name}392-MoreAboutJesus.mp3`,
        author: "Eliza E. Hewitt"
    },
    "MyFaithLooksUpToThee": {
        song_num: 393,
        title: "My Faith Looks Up To Thee",
        stanzas: {
            1: "My faith looks up to Thee, Thou Lamb of Calvary, Savior divine! Now hear me while I pray, take all my guilt away; O let me from this day be wholly Thine.",
            2: "May Thy rich grace impart strength to my fainting heart, my zeal inspire; as Thou hast died for me, O may my love to Thee pure, warm, and changeless be, a living fire.",
            3: "While life's dark maze I tread, and griefs around me spread, be Thou my Guide; bid darkness turn to day, wipe sorrow's tears away, nor let me ever stray from Thee aside.",
            4: "When ends life's transient dream, when death's cold, sullen stream shall o'er me roll, blest Savior, then in love, fear and distrust remove; O bear me safe above, a ransomed soul."
        },
        chorus: "",
        song_url: `${path_name}393-MyFaithLooksUpToThee.mp3`,
        author: "Ray Palmer"
    },
    "ToBeLikeJesus": {
        song_num: 394,
        title: "To Be Like Jesus",
        stanzas: {
            1: "To be like Jesus, To be like Jesus. All I ask, to be like Him. All thru life's journey from earth to glory, All I ask, to be like Him.",
            2: "To love like Jesus, to love like Jesus. All I ask, to love like Him. All thru life's journey from earth to glory, All I ask, to love like Him.",
            3: "To pray like Jesus, to pray like Jesus. All I ask, to pray like Him. All thru life's journey from earth to glory, All I ask, to pray like Him.",
            4: "To serve like Jesus, to serve like Jesus. All I ask, to serve like Him. All thru life's journey from earth to glory, All I ask, to serve like Him."
        },
        chorus: "",
        song_url: `${path_name}394-ToBeLikeJesus.mp3`,
        author: "Frank Anderson"
    },
    "CloseToThee": {
        song_num: 395,
        title: "Close To Thee",
        stanzas: {
            1: "Thou, my everlasting portion, More than friend or life to me; All along my pilgrim journey, Savior, let me walk with Thee.",
            2: "Not for ease or worldly pleasure, Nor for fame my prayer shall be; Gladly will I toil and suffer, Only let me walk with Thee."
        },
        chorus: "Close to Thee, Close to Thee, Close to Thee, Close to Thee, All along this tedious journey, Savior, let me walk with Thee.",
        song_url: `${path_name}395-CloseToThee.mp3`,
        author: "Fanny J. Crosby"
    },
    "NothingBetween": {
        song_num: 396,
        title: "Nothing Between",
        stanzas: {
            1: " Nothing between my soul and the Savior, Naught of this world's delusive dream: I have renounced all sinful pleasure- Jesus is mine! There's nothing between.",
            2: "Nothing between, like worldly pleasure: Habits of life, though harmless they seem, Must not my heart from Him ever sever- He is my all! There's nothing between.",
            3: "Nothing between, like pride or station: Self or friends shall not intervene; Though it may cost me much tribulation, I am resolved! There's nothing between.",
            4: "Nothing between, e'en many hard trials, Though the whole world against me convene; Watching with prayer and much self denial- Triumph at last, with nothing between! "
        },
        chorus: "Nothing between my soul and the Savior, So that His blessed face may be seen; Nothing preventing the least of His favor: Keep the way clear! Let nothing between.",
        song_url: `${path_name}396-NothingBetween.mp3`,
        author: "Charles A. Tindley"
    },
    "OToBeLikeThee": {
        song_num: 397,
        title: "O To Be Like Thee!",
        stanzas: {
            1: "Oh! to be like Thee, blessed Redeemer, This is my constant longing and prayer; Gladly I'll forfeit all of earth's treasures, Jesus, Thy perfect likeness to wear.",
            2: "Oh! to be like Thee, full of compassion, Loving, forgiving, tender and kind, Helping the helpless, cheering the fainting, Seeking the wand'ring sinner to find.",
            3: "Oh! to be like Thee, lowly in spirit, Holy and harmless, patient and brave; Meekly enduring cruel reproaches, Willing to suffer, others to save.",
            4: "Oh! to be like Thee, Lord, I am coming, Now to receive th' anointing divine; All that I am and have I am bringing, Lord, from this moment all shall be Thine.",
            5: "Oh! to be like Thee, while I am pleading, Pour out Thy Spirit, fill with Thy love, Make me a temple meet for Thy dwelling, Fit me for life and Heaven above."
        },
        chorus: "Oh! to be like Thee, oh! to be like Thee, Blessed Redeemer, pure as Thou art; Come in Thy sweetness, come in Thy fullness; Stamp Thine own image deep on my heart.",
        song_url: `${path_name}397-OToBeLikeThee.mp3`,
        author: "Thomas O. Chisholm"
    },
    "JustACloserWalkWithThee": {
        song_num: 398,
        title: "Just A Closer Walk With Thee",
        stanzas: {
            1: "I am weak but Thou art strong; Jesus, keep me from all wrong; I'll be satisfied as long As I walk, let me walk close to Thee.",
            2: "Thro' this world of toil and snares, If I falter, Lord, who cares? Who with me my burden shares? None but Thee, dear Lord, none but Thee.",
            3: "When my feeble life is o'er, Time for me will be no more; Guide me gently, safely o'er To Thy kingdom shore, to Thy shore."
        },
        chorus: "Just a closer walk with Thee, Grant it, Jesus, is my plea, Daily walking close to Thee, Let it be, dear Lord, let it be.",
        song_url: `${path_name}398-JustACloserWalkWithThee.mp3`,
        author: "N. J"
    },
    "MoreLoveToThee": {
        song_num: 399,
        title: "More Love To Thee",
        stanzas: {
            1: "More love to Thee, O Christ, More love to Thee! Hear Thou the prayer I make On bended knee; This is my earnest plea: More love, O Christ, to Thee, More love to Thee, More love to Thee!",
            2: "Once earthly joy I craved, Sought peace and rest; Now Thee alone I seek, Give what is best; This all my prayer shall be: More love, O Christ, to Thee, More love to Thee, More love to Thee!",
            3: "Then shall my latest breath Whisper Thy praise; This be the parting cry My heart shall raise; This still its prayer shall be: More love, O Christ, to Thee, More love to Thee, More love to Thee!"
        },
        chorus: "",
        song_url: `${path_name}399-MoreLoveToThee.mp3`,
        author: "Elizabeth Prentiss"
    },
    "IWouldBeTrue": {
        song_num: 400,
        title: "I Would Be True",
        stanzas: {
            1: "I would be true, for there are those who trust me; I would be pure, for there are those who care; I would be strong, for there is much to suffer; I would be brave, for there is much to dare, I would be brave, for there is much to dare. ",
            2: "I would be friend of all, the foe, the friendless; I would be giving, and forget the gift; I would be humble, for I know my weakness; I would look up, and laugh and love and lift, I would look up, and laugh and love and lift. "

        },
        chorus: "",
        song_url: `${path_name}400-IWouldBeTrue.mp3`,
        author: "Howard A. Walter"
    }
}