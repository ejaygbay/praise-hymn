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
    "SoSendIYou": {
        song_num: 501,
        title: "So Send I You",
        stanzas: {
            1: "So send I you to labor unrewarded, To serve unpaid, unloved, unsought, unknown, To bear rebuke, to suffer scorn and scoffing, So send i you, to toil for Me a lone.",
            2: "So send I you to bind the bruised and broken, O'er wand'ring souls to work, to weep, to wake, To bear the burdens of a world a-weary, So send I you, to suffer for My sake.",
            3: "So send I you to loneliness and longing, With heart a-hung'ring for the loved and known, Forsaking home and kindred, friend and dear one, So send I you, to know My love alone.",
            4: "So send I you to leave your life's ambition, To die to dear desire, self-will resign, To labor long, and love where men revile you, So send I you, to lose your life in Mine.",
            5: "So send I you to hearts made hard by hatred, To eyes made blind because they will not see, To spend, tho' it be blood, to spend and spare not, So send I you, to taste of Calvary",

        },
        chorus: "As the Father hath sent Me, So send I you",
        song_url: `${path_name}501-SoSendIYou.mp3`,
        author: "E. Margaret Clarkson"
    },
    "We've a Story to Tell to the Nations": {
        song_num: 502,
        title: "We've a Story to Tell to the Nations",
        stanzas: {
            1: "We've a story to tell to the nations, That shall turn their hearts to the right, A story of truth and mercy, A story of peace and light, A story of peace and light.",
            2: "We've a song to be sung to the nations, That shall lift their hearts to the Lord, A song that shall conquer evil, And shatter the spear and sword, And shatter the spear and sword.",
            3: "We've a message to give to the nations, That the Lord who reigneth above, Hath sent us His Son to save us, And show us that God is love, And show us that God is love.",
            4: "We've a Savior to show to the nations, Who the path of sorrow hath trod, That all of the world's great peoples Might come to the truth of God, Might come to the truth of God."
        },
        chorus: "For the darkness shall turn to dawning, And the dawning to noonday bright, And Christ's great kingdom shall come on earth, The kingdom of love and light.",
        song_url: `${path_name}502-We'veAStoryToTellToTheNations.mp3`,
        author: "H. Ernest Nichol"
    },
    "The Church of God is Debtor": {
        song_num: 503,
        title: "The Church of God is Debtor",
        stanzas: {
            1: "The Church of God is debtor to him who shed his blood, That all earth's teem-ing millions Might be redeemed to God; Is debtor to his mercy, Is debtor to His grace, Is debtor till all creatures shall know his love's embrace.",
            2: "The Church of God is debtor To all men far and near, To tell the name of Jesus Till all the World shall hear; Is debtor to the stranger, To alien, foe and kin, Is debtor till forgiveness shall triumph over sin.",
            3: "The Church of God is debtor O may we not forget Our all to Christ is forfeit if we would pay that debt! We lay our before him To pray, to give, to go: The Church of God is debtor Till all the world shall know!"
        },
        chorus: "",
        song_url: `${path_name}504-TheChurchOfGodIsDebtor.mp3`,
        author: "E. Magaret Clarkson"
    },
    "Go Ye into All the World": {
        song_num: 504,
        title: "Go Ye into All the World",
        stanzas: {
            1: "Far, far away, in death and darkness dwelling, Millions of souls forever may be lost; Who, who will go, salvation's story telling, Looking to Jesus, heeding not the cost? ",
            2: "See o'er the world wide open doors inviting, Soldiers of Christ, arise and enter in! Christians, awake! your forces all uniting, Send forth the gospel, break the chains of sin.",
            3: "Why will ye die?” the voice of God is calling; Why will you die?” re-echo in His name; Jesus has died to save from death appalling, Life and salvation, therefore, go proclaim.",
            4: "God speed the day, when those of every nation Glory to God! triumphantly shall sing; Ransomed, redeemed, rejoicing in salvation, Shout Hallelujah, for the Lord is King."
        },
        chorus: "All pow'r is given unto Me, All pow'r is given unto Me, Go ye into all the world and preach the gospel, And lo, I am with you alway.",
        song_url: `${path_name}504-GoYeIntoAllTheWorld.mp3`,
        author: "James McGranaham"
    },
    "Charles H. Gabriel": {
        song_num: 505,
        title: "Send the Light!",
        stanzas: {
            1: "There's a call comes ringing o'er the restless wave, Send the light! Send the light! There are souls to rescue, there are souls to save, Send the light! Send the light!",
            2: "We have heard the Macedonian call today, Send the light! Send the light! And a golden off'ring at the cross we lay, Send the light! Send the light!",
            3: "Let us pray that grace may everywhere abound, Send the light Send the light And a Christ-like spirit everywhere be found, Send the light! Send the light",
            4: "Let us not grow weary in the work of love, Send the light! Send the light! Let us gather jewels for a crown above, Send the light! Send the light!"
        },
        chorus: "Send the light, the blessed gospel light; Let it shine from shore to shore! Send the light, the blessed gospel light; Let it shine forevermore!",
        song_url: `${path_name}505-SendTheLight!.mp3`,
        author: "Charles H. Gabriel"
    },
    "The Breaking of the Bread": {
        song_num: 506,
        title: "The Breaking of the Bread",
        stanzas: {
            1: "A long the shores of Galilee Our Lord five thou-sand fed, Yet no one was omited there in the breaking of the bread; Today they die in heathen lands, They die in want and dread, For they have been omited in the breaking of the bread.",
            2: "Long years have passed passed, and few have heard That Jesus Christ has bled that they might feed on Him who died to be that Living Bread; To gods of stone and wood they cry, Yet they are never fed, For they have been omited in the breaking of the bread.",
            3: "Great God, who gave Thine only son, Help us now Spirit led To tell the story of THy love To those who ask for bread; Then gladly will we go or send Till this blest has spread And they have been included in breaking of the bread."
        },
        chorus: "Lord, I would gie them the Bread of Life, The Living Water too; My heart cries out, O here am i ready thy will to do!",
        song_url: `${path_name}506-TheBreakingOfTheBread.mp3`,
        author: "Beatrice Bush Bixler"
    },
    "Pass it on": {
        song_num: 507,
        title: "Pass it on",
        stanzas: {
            1: "It only takes a spark to get a fire going, And soon those around can warm up in th its glowing; That's how it is with God's love, once you've experienced it: You spread his love to every-one, you want to pass it on.",
            2: "What a wondrous time is spring when all the trees are budding, The birds begin to sing, the flowers start their blooming; That's how it is with God's love, once you've experienced it: you want to sing, it's fresh like spring, you want to pass it on.",
            3: "I wish for you, my friend, this happiness that i've found you can depend on him, it matters not where you're bound; I'll shout it from the mountain top, i want my world to know: THe Lord of love has come to me, I want to pass it on."
        },
        chorus: "",
        song_url: `${path_name}507-PassItOn.mp3`,
        author: "Kurt Kaiser"
    },
    "O Master, Let Me Walk with Thee": {
        song_num: 508,
        title: "O Master, Let Me Walk withe Thee",
        stanzas: {
            1: "O Master, let me walk with Thee in the lowly paths of service free; Tell me thy secret help me bear the strain of toil, the fret of care.",
            2: "Help me the slow of heart move by some clear, winning word of love; Teach me the way-ward feet to stay and guide them in the home - ward way.",
            3: "Teach me Thy patience! still with thee in closer, dear - er company, in work that keeps faith sweet and strong, in trust that that triumphs over wrong.",
            4: "In hope that sends a shining ray far down the future's broad - `ning way, in peace that only thou canst give, with thee, o master, let me live."
        },
        chorus: "",
        song_url: `${path_name}508-OMasterLetMeWalkWithThee.mp3`,
        author: "Washington Gladden"
    },
    "In Christ There Is No East or West": {
        song_num: 509,
        title: "In Christ THere Is No East or West",
        stanzas: {
            1: "In Christ there is no East or West, in him no south or North, But one great fellowship of love Thru-out the whole wide earth.",
            2: "In him shall true hearts everywhere their high communion find; His service is the golden cord close-binding all man-kind.",
            3: "Join hands then, brothers of the faith, what - e'er your race may be; who serves my father as a son is surely kin to me.",
            4: "In Christ now meet both East and West, In him meet SOuth and North: ALl Christly souls are one in him thru - out the whole wide earth."
        },
        chorus: "",
        song_url: `${path_name}509-InChristThereIsNoEastOrWest.mp3`,
        author: "Vice and Mission"
    },
    "Lord, Speak to Me": {
        song_num: 510,
        title: "Lord, Speak to Me",
        stanzas: {
            1: "Lord, speak to me, that i may speak in living echoes of thy tone; As thou hast sought, so let me seek thy erring children lost and lone.",
            2: "O teach me, LOrd, that i may teach the precious things thou dost impart; And when my words that they may reach the hidden depths of many a heart.",
            3: "O fill me with thy fullness, Lord, until my very heart o'erflows In kindling thought and glowing word, Your love to tell, your praise to show.",
            4: "Oh, use me, Lord, use even me, Just as you will, and when, and where Until your blessed face I see, Your rest, your joy, your glory share.",
        },
        chorus: "",
        song_url: `${path_name}510-LordSpeaktoMe.mp3`,
        author: "Frances R. Havergal"
    },
    "Show a Little Bit of Love and Kindness": {
        song_num: 511,
        title: "Show a Little Bit of Love and Kindness",
        stanzas: {
            1: "Sing a song, (Sing a song,) spread some cheer,(spread some cheer,) There are sad and lonely people everywhere; Be a friend,(Be a friend,) show some love, (show some love,) it will lift them from the dungeons of despair.",
            2: "Offer help, (Offer help,) bring some hope, (bring some hope,) To the fainting and discouraged on life's road; See a need, (See a need,) lend a hand,(lend a hand,) There are many who are crushed beneath their load.",
            3: "Be a light, (Be a light,) show the way, (show the way,) Be a light with-in the night for those astray; Speak a word, (Speak a word,) loving word, (loving word,) That will bring them back to walk the narrow way."
        },
        chorus: "Show a little bit of love and kindness, Never go along with hatred's. blindness, Take a little time to reach for joy, and wear a happy face; Sing a little bit when the days are dreary, Give a little help to a friend who's weary- That's the way to make the world a happy place! place, that's the way to make the world a happy place, a happy place!",
        song_url: `${path_name}511-ShowALittleBitOfLoveAndKindness.mp3`,
        author: "John W. Peterson"
    },
    "With Eternity's Values in View": {
        song_num: 512,
        title: "With Eternity's Values in View",
        stanzas: {
            1: "With eternity's values in view, Lord with eternity's values in view -- May i do each day's work for Jesus with eternity's values in view.",
        },
        chorus: "",
        song_url: `${path_name}512-WithEternity'sValuesInView.mp3`,
        author: "Alfred B. Smith"
    },
    "I'll Go Where You Want Me to Go": {
        song_num: 513,
        title: "I'll Go Where You Want Me to Go",
        stanzas: {
            1: "It may not be on the mountain's height Or over the stormy sea, It may not be at the battle's front My Lord will have need of me; But if by a still, small voice He calls To paths I do not know, I'll answer, dear Lord, with my hand in Thine, I'll go where You want me to go.",
            2: "Perhaps today there are loving words Which Jesus would have me speak, There may be now, in the paths of sin, Some wand'rer whom I should seek; O Savior, if Thou wilt be my Guide, Tho dark and rugged the way, My voice shall echo the message sweet, I'll say what You want me to say.",
            3: "There's surely somewhere a lowly place In earth's harvest fields so wide, Where I may labor thru life's short day For Jesus the Crucified; So, trusting my all unto Thy care-- I know Thou lovest me I'll do Thy will with a heart sincere, I'll be what You want me to be."
        },
        chorus: "I'll go where You want me to go, dear Lord, O'er mountain or plain or sea; I'll say what you want me to say, dear Lord, I'll be what You want me to be.",
        song_url: `${path_name}513-I'llGoWhereYouWantMeToGo.mp3`,
        author: "Charles E. Prior"
    },
    "Who Will Tell Them?": {
        song_num: 514,
        title: "Who Will Tell Them?",
        stanzas: {
            1: "Millions still in every land Grope in sin's dark night: WHo will stretch a helping hand, Lead them to the light? Who will tell them, who will tell them of the Crucified? WHo will tell them, who will tell them for them he died?",
            2: "Millions still have not been told how the savior came; They are yet outside the fold, Lost in sin and shame. Who will tell them, who will tell them of the crucified? Who will tell them, who will tell them for them he died?",
            3: "Millions still have never heard that the Savior lives; They await the glorious word that new life he gives. WHo will tell them, who will tell them -- Lost and dying men-- who will tell them, who will tell them Christ lives again!"
        },
        chorus: "",
        song_url: `${path_name}514-WhoWillTellThem?.mp3`,
        author: "John W. Peterson"
    },
    "Rescue the Perishing": {
        song_num: 515,
        title: "Rescue the Perishing",
        stanzas: {
            1: "Rescue the perishing, Care for the dying, Snatch them in pity from sin and the grave; Weep o'er the erring one, lift up the fallen, Tell them of Jesus the mighty to save.",
            2: "Though they are slighting Him, Still He is waiting, Waiting the penitent child to receive; Plead with them earnestly, plead with them gently; He will forgive if they only believe.",
            3: "Down in the human heart, Crushed by the tempter, Feelings lie buried that grace can restore; Touched by a loving heart, wakened by kindness, Chords that were broken will vibrate once more.",
            4: "Rescue the perishing, Duty demands it; Strength for thy labor the Lord will provide; Back to the narrow way patiently win them; Tell the poor wanderer a Savior has died. "
        },
        chorus: "Rescue the perishing, Care for the dying; Jesus is merciful, Jesus will save.",
        song_url: `${path_name}515-RescueThePerishing.mp3`,
        author: "Fanny J. Crosby"
    },
    "I Love to Tell the Story": {
        song_num: 516,
        title: "I Love to Tell the Story",
        stanzas: {
            1: "I love to tell the story of unseen things above, of Jesus and his glory, of Jesus and his love. I love to tell the story because I know it's true; it satisfies my longings as nothing else can do.",
            2: "I love to tell the story 'tis pleasant to repeat what seems, each time i tell it, more wonderfully sweet; I love to tell the story, for some have never heard the message of salvation from God's own holy word.",
            3: "I love to tell the story, for those who know it best seem hungering and thirsting to hear it like the rest. And when in scenes of glory I sing the new, new song, 'twill be the old, old story that I have loved so long."
        },
        chorus: "I love to tell the story; 'twill be my theme in glory to tell the old, old story of Jesus and his love.",
        song_url: `${path_name}song_num-ILoveToTellTheStory.mp3`,
        author: "Catherine Hankey"
    },
    "Freely, Freely": {
        song_num: 517,
        title: "Freely, Freely",
        stanzas: {
            1: "Good forgave my sin in Jesus' name, i've been born again in Jesus' name; And in Jesus' name i come to you to share his love as he told me to:",
            2: "All pow'r is giv'n in Jesus' name, in earth and heav'n in Jesu' name; And in Jesus' name i come to you to share his pow'r as he told me to:"
        },
        chorus: "He said, Free - ly, free - ly you have received free-ly, free-ly give; Go in my name and, be-cause you be-lieve, Others will know that i live.",
        song_url: `${path_name}517-FreelyFreely.mp3`,
        author: "Carol Owens"
    },
    "It Took A Miracle": {
        song_num: 518,
        title: "It Took A Miracle",
        stanzas: {
            1: "My Father is omnipotent, And that you can't deny; A God of might and miracles-- `Tis wri-ten in the sky.",
            2: "Tho here glory has been shown, we still can't fully see the wonders of his might, his throne--`Till take eternity.",
            3: "And ev-`ry little bird and flow'r Are testimonies too."
        },
        chorus: "It took a miracle to put the stars in place, it took a miracle to hang the world in space; But when he saved my soul, Cleansed and made me whole, it took a miracle of love and grace.",
        song_url: `${path_name}518-ItTookAMiracle.mp3`,
        author: "John W. Peterson"
    },
    "Love Lifted Me": {
        song_num: 519,
        title: "Love Lifted Me",
        stanzas: {
            1: "I was sinking deep in sin, Far from the peaceful shore, Very deeply stained within, Sinking to rise no more; But the Master of the sea Heard my despairing cry, From the waters lifted me– Now safe am I.",
            2: "All my heart to Him I give, Ever to Him I'll cling, In His blessed presence live, Ever His praises sing. Love so mighty and so true Merits my soul's best songs; Faithful, loving service, too, To Him belongs.",
            3: "Souls in danger, look above, Jesus completely saves; He will lift you by His love Out of the angry waves. He's the Master of the sea, Billows His will obey; He your Savior wants to be– Be saved today."
        },
        chorus: "Love lifted me, Love lifted me, When nothing else could help, Love lifted me; Love lifted me, Love lifted me, When nothing else could help, Love lifted me.",
        song_url: `${path_name}519-LoveLiftedMe.mp3`,
        author: "James Rowe"
    },
    "O How I Love Jesus": {
        song_num: 520,
        title: "O How I Love Jesus",
        stanzas: {
            1: "There is a name I love to hear, I love to sing its worth; it sounds like music in my ear, the sweetest name on earth.",
            2: "It tells me of a Savior's love, who died to set me free; it tells me of his precious blood, the sinner's perfect plea.",
            3: "It tells me what my father hath in store for ev-'ry day, And, tho i tread a dark-some path, Yields sun-shine all the way.",
            4: "It tells of one whose loving heart can feel my deepest woe; who in each sorrow bears a part that none can bear below."
        },
        chorus: "O how I love Jesus, O how I love Jesus, O how I love Jesus, because he first loved me!",
        song_url: `${path_name}520-OHowILoveJesus.mp3`,
        author: "Frederick Whitefield"
    },
    "I've Found a Friend": {
        song_num: 521,
        title: "I've Found a Friend",
        stanzas: {
            1: "I've found a Friend, O such a Friend! He loved me ere I knew Him; He drew me with the cords of love, And thus He bound me to Him; And round my heart still closely twine Those ties which naught can sever, For I am His, and He is mine, Forever and forever.",
            2: "I've found a Friend, O such a Friend! He bled, He died to save me; And not alone the gift of life, But His own self He gave me. Naught that I have mine own I call, I'll hold it for the giver; My heart, my strength, my life, my all Are His, and His forever.",
            3: "I've found a friend, O such a friend! All pow'r to him is given to guard me on my onward course and bring me safe to heaven. Th'e - ter - nal glories gleam afar to nerve my faint endeavor: SO now to watch, to work, to war, And then to rest forever.",
            4: "I've found a Friend, O such a Friend! So kind and true and tender, So wise a counsellor and guide, So mighty a defender! From Him who loves me now so well, What power my soul shall sever? Shall life or death, shall earth or hell? No! I am His forever.",
        },
        chorus: "",
        song_url: `${path_name}521-I'veFoundAFriend.mp3`,
        author: "James G. Small"
    },
    "My Savior's Love": {
        song_num: 522,
        title: "My Savior's Love",
        stanzas: {
            1: "I stand amazed in the presence of Jesus the Nazarene, And wonder how he could love me, A sinner condemned, unclean.",
            2: "For me it was in the garden he prayed, 'Not my will, but thine', He had no tears for his own griefs but sweat-drops of blood for mine.",
            3: "He took my sins and my sorrows, He made them his very own; He bore the burden to Calvary and suffered and died alone.",
            4: "When with the ransomed in glory his face i at last shall see, 'Till be my joy thru the ages to sing of his love for me."
        },
        chorus: "How marvelous! how wonderful! And my song shall ever be: How marvelous, how wonderful is my savior's love for me!",
        song_url: `${path_name}522-MySavior'sLove.mp3`,
        author: "Charles H. Gabriel"
    },
    "Saved, Saved!": {
        song_num: 523,
        title: "Saved, Saved!",
        stanzas: {
            1: "I've found a friend who is all to me, His love is ever true; I love to tell how He lifted me, And what His grace can do for you.",
            2: "He saves me from ev'ry sin and harm, Secures my soul each day; I'm leaning strong on His mighty arm– I know He'll guide me all the way.",
            3: "When poor and needy and all alone, In love He said to me, Come unto Me and I'll lead you home To live with Me eternally."
        },
        chorus: "Saved by His pow'r, by His pow'r divine, Saved to new life, to new life sublime! Life now is sweet and my joy is complete, For I'm saved, saved, saved.",
        song_url: `${path_name}523-SavedSaved!.mp3`,
        author: "Jack P. Scholfield"
    },
    "At Calvary": {
        song_num: 524,
        title: "At Calvary",
        stanzas: {
            1: "Years I spent in vanity and pride, Caring not my Lord was crucified, Knowing not it was for me He died on Calvary.",
            2: "By God's Word at last my sin I learned– Then I trembled at the Law I'd spurned, Till my guilty soul imploring turned to Calvary. ",
            3: "Now I've giv'n to Jesus ev'rything, Now I gladly own Him as my King, Now my raptured soul can only sing of Calvary.",
            4: "O the love that drew salvation's plan! O the grace that brought it down to man! O the mighty gulf that God did span at Calvary."
        },
        chorus: "Mercy there was great and grace was free, Pardon there was multiplied to me, There my burdened soul found liberty– At Calvary.",
        song_url: `${path_name}524-AtCalvary.mp3`,
        author: "Daniel B. Towner"
    },
    "Heaven Came Down": {
        song_num: 525,
        title: "Heaven Came Down",
        stanzas: {
            1: "Oh what a wonderful, wonderful day -- Day i will never forget; After i'd wandered in darkness away, Jesus my Savior i met. O what a tender, compassionate friend-- he met the need of my heart; Shadows dispelling, with Joy i am telling, He made all darkness depart!",
            2: "Born of the Spirit with life from above in to God's family divine; justifiefully thru calvary's love, O what a standing is mine! And transaction so quickly was made when a siner i came, Took of the offer of grace he did proffer-- He saved me, O praise his dear bame!",
            3: "Now i've a hope that will surely endure after the passing of time; I have a future in heaven for sure, There in those mansions sub lime. And it's because of that wonderful day when at the cross i believed; Riches eternal and blessings supernal from his precious hand i received.",
        },
        chorus: "Heaven came down and glory filled my soul, filled my soul, when at the cross the savior made me whole; made me whole; sins were washed away and my night was turned to day-- Heaven came down and glory filled my soul! filled my soul! Heaven came down and glory filled my soul!",
        song_url: `${path_name}525-HeavenCameDown.mp3`,
        author: "John W. Peterson"
    },
    "Victory in Jesus": {
        song_num: 526,
        title: "Victory in Jesus",
        stanzas: {
            1: "I heard an old, old story, How a Savior came from glory, How He gave His life on Calvary To save a wretch like me; I heard about His groaning, Of His precious blood's atoning, Then I repented of my sins And won the victory. ",
            2: "I heard about His healing, Of His cleansing pow'r revealing. How He made the lame to walk again And caused the blind to see; And then I cried, Dear Jesus,Come and heal my broken spirit, And somehow Jesus came and bro't To me the victory.",
            3: "I heard about a mansion He has built for me in glory. And I heard about the streets of gold Beyond the crystal sea; About the angels singing And the old redemption story, And some sweet day I'll sing up there The song of victory.",
        },
        chorus: "O victory in Jesus, My Savior, forever. He sought me and bought me With His redeeming blood; He loved me ere I knew Him And all my love is due Him, He plunged me to victory, Beneath the cleansing flood.",
        song_url: `${path_name}526-VictoryInJesus.mp3`,
        author: "Eugene M. Bartlett"
    },
    "Got any Rivers?": {
        song_num: 527,
        title: "Got any Rivers?",
        stanzas: {
            1: "Got any rivers you think are uncrossable? Got any mountains you can't tunnel thru? God specializes in things tho't impossible-- He does the things others can-not do."
        },
        chorus: "",
        song_url: `${path_name}527-GotAnyRivers?.mp3`,
        author: "Oscar Elison"
    },
    "Without Him": {
        song_num: 528,
        title: "Without Him",
        stanzas: {
            1: "Without hime i could do nothing, without him i'd surely fail; Without him i would be drifting like a ship without a sail.",
            2: "Without him i would be dying, without him i'd be enslaved; without him life would be hopeless-- But with Jesus, thank God, i'm saved.",
        },
        chorus: "Jesus, O Jesus! Do you know him today? Do not turn him away! O Jesus, Oh Jesus, without him, how lost i would be.",
        song_url: `${path_name}528-WithoutHim.mp3`,
        author: "Mylon R. Lefevre"
    },
    "No, Not One!": {
        song_num: 529,
        title: "No, Not One!",
        stanzas: {
            1: "There's not a friend like the lowly Jesus– No, not one! no, not one! None else could heal all our soul's diseases– No, not one! no, not one!",
            2: "No friend like Him is so high and holy– No, not one! no, not one! And yet no friend is so meek and lowly– No, not one! no, not one!",
            3: " There's not an hour that He is not near us – No, not one! no, not one! No night so dark but His love can cheer us– No, not one! no, not one!",
            4: "Did ev - er saint find this friend for-sake him? No, not one! no, not one! Or sinner find that he would not take him? No, not one! no, not one!",
            5: "Was e'er a gift like the Savior given? No, not one! no, not one! Will He refuse us a home in heaven? No, not one! no, not one!"
        },
        chorus: "Jesus knows about our struggles, he will guide till the day is done; There's not a friend like the lowly Jesus-- NO, not one! no, not one!",
        song_url: `${path_name}529-NoNotOne!.mp3`,
        author: "Johnson Oatman Jr."
    },
    "He Was There All The Time": {
        song_num: 530,
        title: "He Was There All The Time",
        stanzas: {
            1: "Time after time i went searching for peace in some void-- I was trying to blame all my ills on this world i was in; Surface relationships used me till i was done in and all the while some-one was begging to free me from sin!",
            2: "Never  again will i look for a fake rainbow's end-- Now that i have the answer my life is just starting to rhyme; Sharing each new day with him is a cup of fresh life",
            3: ""
        },
        chorus: "He was there all the time, he was there all the time; Waiting patiently in line, he was there all the time!",
        song_url: `${path_name}530-HeWasThereAllTheTime.mp3`,
        author: "Gary S. Paxton"
    },
    "What a Wonderful Savior": {
        song_num: 531,
        title: "What a Wonderful Savior",
        stanzas: {
            1: "Christ has for sin atonement made– What a wonderful Savior! We are redeemed, the price is paid– What a wonderful Savior!",
            2: "I praise Him for the cleansing blood– What a wonderful Savior! That reconciled my soul to God What a wonderful Savior!",
            3: "He cleansed my heart from all its sin– hat a wonderful Savior! And now He reigns and rules therein– What a wonderful Savior!",
            4: "He gives me overcoming pow'r– What a wonderful Savior! And triumph in each trying hour– What a wonderful Savior! "
        },
        chorus: "What a wonderful Savior is Jesus, my Jesus! What a wonderful Savior is Jesus, my Lord!",
        song_url: `${path_name}531-WhatAWonderfulSavior.mp3`,
        author: "Elisha A. HOFFMAN"
    },
    "He Touched Me": {
        song_num: 532,
        title: "He Touched Me",
        stanzas: {
            1: "Shackled by a heavy burden, neath a load of guilt and shame-- Then the hand of Jesus touched me, And now i am no longer the same.",
            2: "SInce i met this blessed savior, SInce he cleansed and made me whole, I will never cease to praise him-- I'll shout it while eternity rolls."
        },
        chorus: "He touched me, O He touched me, And O the joy that floods my soul! something happened, and now i know he touched me and made me whole.",
        song_url: `${path_name}532-HeTouchedMe.mp3`,
        author: "William J. Gaither"
    },
    "I believe in Miracles": {
        song_num: 533,
        title: "I believe in Miracles",
        stanzas: {
            1: "Creation shows the pow'r of God There's glory all around And those who see must stand in awe For miracles abound.",
            2: "I cannot doubt the work of God It's plain for all to see The miracles that He has wrought Should lead to Calvary.",
            3: "The love of God O pow'r divine 'Tis wonderful to see The miracle of grace performed Within the heart of me."
        },
        chorus: "I believe in miracles I've seen a soul set free Miraculous the change in one Redeemed thru Calvary I've seen the lily push its way Up through the stubborn sod I believe in miracles For I believe in God",
        song_url: `${path_name}533-IBelieveInMiracles.mp3`,
        author: "Carlton C. Buck"
    },
    "Love Found a Way": {
        song_num: 534,
        title: "Love Found a Way",
        stanzas: {
            1: "Wonderful love that rescued me, Sunk deep in sin, Guilty and vile as I could be No hope within; When ev'ry ray of light had fled, O glorious day! Raising my soul from out the dead, Love found a way.",
            2: "Love bro't my Saviour here to die On Calvary, For such a sinful wretch as I, How can it be? Love bridged the gulf 'twixt me and Heav'n, Taught me to pray; I am redeemed, set free, forgiv'n, Love found a way.",
            3: "Love opened wide the gates of light To Heav'n's domain, Where in eternal pow'r and might Jesus shall reign; Love lifted me from depths of woe To endless day, There was no help in earth below, Love found a way."
        },
        chorus: "Love found a way to redeem my soul, Love found a way that could make me whole; Love sent my Lord to the cross of shame, Love found a way, O praise His holy name!",
        song_url: `${path_name}534-LoveFoundAWay.mp3`,
        author: "Avis B. Christiansen"
    },
    "Satisfied": {
        song_num: 535,
        title: "Satisfied",
        stanzas: {
            1: "All my life I had a longing For a drink from some clear spring, That I hoped would quench the burning Of the thirst I felt within.",
            2: "Feeding on the husks around me, Till my strength was almost gone, Longed my soul for something better, Only still to hunger on.",
            3: "Poor I was, and sought for riches, Something that would satisfy, But the dust I gathered round me Only mocked my soul's sad cry."
        },
        chorus: "Hallelujah! I have found Him Whom my soul so long has craved! Jesus satisfies my longings, Through His blood I now am saved.",
        song_url: `${path_name}535-Satisfied.mp3`,
        author: "Clara Tear Williams. "
    },
    "My Tribute": {
        song_num: 536,
        title: "My Tribute",
        stanzas: {
            1: "How can I say thanks For the things You have done for me? Things so undeserved, Yet You gave to prove Your love for me; The voices of a million angels Could not express my gratitude. All that I am and ever hope to be, I owe it all to Thee.",
        },
        chorus: "To God be the glory, To God be the glory, To God be the glory For the things He has done. With His blood He has saved me, With His power He has raised me; To God be the glory For the things He has done. Just let me live my life, Let it pleasing, Lord to Thee, And if I gain any praise, Let it go to Calvary. With His blood He has saved me, With His power He has raised me; To God be the glory For the things He has done.",
        song_url: `${path_name}536-MyTribute.mp3`,
        author: "Adrae Crouch. "
    },
    "New Life!": {
        song_num: 537,
        title: "New Life!",
        stanzas: {
            1: "Gone is the guilt of my sin, Peace is now reigning within; Since I believed, pardon received, Happy, so happy I've been!",
            2: "Brighter the journey each day, Tho there is much to dismay; Heaven awaits - Bright pearly gates, There at the end of the way.",
            3: "Come with your sin-burdened heart, Christ will his cleansing impart; He will forgive - in him you'll live, O how the joy bells will start."
        },
        chorus: "New Life in Christ! Abundant and free! What glories shine, what joys are mine, What wondrous blessings I see! My past with its sin, The searching and strife, Forever gone, there's a bright new dawn! For in Christ I have found New Life!",
        song_url: `${path_name}537-NewLife!.mp3`,
        author: "John W. Peterson. "
    },
    "Now I Belong to Jesus": {
        song_num: 538,
        title: "Now I Belong to Jesus",
        stanzas: {
            1: "Jesus my Lord will love me forever From Him no pow'r of evil can sever He gave His life to ransom my soul Now I belong to Him",
            2: "Once I was lost in sin's degradation Jesus came down to bring me salvation Lifted me up from sorrow and shame Now I belong to Him",
            3: "Joy floods my soul for Jesus has saved me Freed me from sin that long had enslaved me His precious blood He gave to redeem Now I belong to Him"
        },
        chorus: "Now I belong to Jesus Jesus belongs to me Not for the years of time alone But for eternity",
        song_url: `${path_name}538-NowIBelongToJesus.mp3`,
        author: "Norman J. Clayton."
    },
    "I Will Sing of My Redeemer": {
        song_num: 539,
        title: "I Will Sing of My Redeemer",
        stanzas: {
            1: "I will sing of my Redeemer And His wondrous love to me; On the cruel cross He suffered From the curse to set me free.",
            2: "I will tell the wondrous story, How my lost estate to save, In His boundless love and mercy, He the ransom freely gave.",
            3: "I will praise my dear Redeemer, His triumphant pow'r I'll tell, How the victory He giveth Over sin and death and hell.",
            4: " I will sing of my Redeemer, And His heav'nly love to me; He from death to life hath brought me, Son of God, with Him to be."
        },
        chorus: "Sing, oh, sing of my Redeemer, With His blood He purchased me; On the cross He sealed my pardon, Paid the debt and made me free.",
        song_url: `${path_name}531-IWillSingOfMy Redeemer.mp3`,
        author: "Philip P. Bliss. "
    },
    "I Can Do All Things": {
        song_num: 540,
        title: "I Can Do All Things",
        stanzas: {
            1: "I can do all things thru Christ who strengthens me! I can do all things thru Christ who strengthens me! Day by day, hour by hour, I am krpt by his pow'r: I can do all things through Christ who strengthens me!"
        },
        chorus: "",
        song_url: `${path_name}540-ICanDoAllThings.mp3`,
        author: "Homer W. Grimes. "
    },
    "In the Garden": {
        song_num: 541,
        title: "In the Garden",
        stanzas: {
            1: "I come to the garden alone, While the dew is still on the roses; And the voice I hear, falling on my ear, The Son of God discloses.",
            2: "He speaks, and the sound of His voice Is so sweet the birds hush their singing; And the melody that He gave to me Within my heart is ringing.",
            3: "I'd stay in the garden with Him Tho' the night around me be falling; But He bids me go; thro' the voice of woe, His voice to me is calling."
        },
        chorus: "And He walks with me, and He talks with me, And He tells me I am His own,And the joy we share as we tarry there, None other has ever known.",
        song_url: `${path_name}541-InTheGarden.mp3`,
        author: "C. Austin Miles. "
    },
    "Jesus Loves Even Me": {
        song_num: 542,
        title: "Jesus Loves Even Me",
        stanzas: {
            1: "I am so glad that our Father in heaven Tells of His love in the Book He has given; Wonderful things in the Bible I see, This is the dearest, that Jesus loves me.",
            2: "Though I forget Him and wander away, Kindly He follows wherever I stray; Back to His dear loving arms would I flee, When I remember that Jesus loves me.",
            3: "O, if there's only one song I can sing, When in His beauty I see the great King, This shall my song in eternity be: O, what a wonder that Jesus loves me!"
        },
        chorus: "I am so glad that Jesus loves me, Jesus loves me, Jesus loves me; I am so glad that Jesus loves me, Jesus loves even me.",
        song_url: `${path_name}531-JesusLovesEvenMe.mp3`,
        author: "Philip P. Bliss. "
    },
    "Through It All": {
        song_num: 543,
        title: "Through It All",
        stanzas: {
            1: "I've had many tears and sorrows, I've had questions for tomorrow, There've been times I didn't know right from wrong. But in every situation God gave blessed consolation, That my trials only come to make me strong.",
            2: "I've been to lots of places and And you know I've seen a lot of faces, There've been times I've felt so all alone. But in my lonely hours, Yes, those precious lonely hours, Jesus let me know I was His Own.",
            3: "I thank God for the mountains, And I thank Him for the valleys, And I thank Him for the storms He brought me through. For if I'd never had a problem I'd never know that my God could solve them, And I'd never know what faith in God could do!"
        },
        chorus: "Through it all, through it all, I've learned to trust in Jesus And I've learned to trust in God! Through it all, through it all, I've learned to depend upon His Word!",
        song_url: `${path_name}543-ThroughItAll.mp3`,
        author: "Andrae Crouch."
    },
    "Something Beautiful": {
        song_num: 544,
        title: "Something Beautiful",
        stanzas: {
            1: "Something beautiful, something good-- ALl my confusion he understood; All i had to offer him was brokenness and strife, but he made some-thing beautiful of my life."
        },
        chorus: "",
        song_url: `${path_name}544-SomethingBeautiful.mp3`,
        author: "Gloria Gaither. "
    },
    "He Lifted Me": {
        song_num: "545",
        title: "He Lifted Me",
        stanzas: {
            1: "In loving kindness Jesus came My soul in mercy to reclaim, And from the depths of sin and shame Through grace He lifted me.",
            2: "He called me long before I heard, Before my sinful heart was stirred, But when I took Him at His word, Forgiven He lifted me.",
            3: "His brow was pierced with many a thorn, His hands by cruel nails were torn, When from my guilt and grief, forlorn, In love He lifted me.",
            4: "Now on a higher plane I dwell, And with my soul I know 'tis well; Yet how or why, I cannot tell, He should have lifted me."
        },
        chorus: "From sinking sand He lifted me, With tender hand He lifted me, From shades of night to plains of light, O praise His name, He lifted me!",
        song_url: `${path_name}545-HeLiftedME.mp3`,
        author: "Charles H. Gabriel. "
    },
    "I Will Sing Wonderous Story": {
        song_num: 546,
        title: "I Will Sing Wonderous Story",
        stanzas: {
            1: "I will sing the wondrous story Of the Christ who died for me. How He left His home in glory For the cross of Calvary.",
            2: "I was lost, but Jesus found me, Found the sheep that went astray, Threw His loving arms around me, Drew me back into His way.",
            3: "Days of darkness still come o'er me, Sorrow's paths I often tread, But the Savior still is with me; By His hand I'm safely led.",
            4: "He will keep me till the river Rolls its waters at my feet; Then He'll bear me safely over, Where the loved ones I shall meet."
        },
        chorus: "Yes, I'll sing the wondrous story Of the Christ who died for me, Sing it with the saints in glory, Gathered by the crystal sea.",
        song_url: `${path_name}546-IWillSingWonderousStory.mp3`,
        author: "Francis Rowley"
    },
    "No Other Song": {
        song_num: 547,
        title: "No Other Song",
        stanzas: {
            1: "No other song have i but that of Jesus, The son of God who came to seek and save, who paid the price for pardon and redemption ehrn on the cross his life he freely gave.",
            2: "The purple robe, the crown of thorns they gave Him, The cross he stained with his own blood so dear, The empty tomb, the hope of his returning of these i'll sing to every listening ear.",
            3: "No other song have i but that of Jesus, and even when i gain the other shore i'll join me in the great angelic anthem and sing my Savior's praise forevermore."

        },
        chorus: "No other song have i to sing but Jesus, No other theme but Christ and Calvary; In every glad refrain i would be telling the wonders of his mighty love for me.",
        song_url: `${path_name}547-NoOtherSong.mp3`,
        author: "John W. Peterson"
    },
    "Glory to His Name": {
        song_num: 548,
        title: "Glory to His Name",
        stanzas: {
            1: " I am so wondrously saved from sin, Jesus so sweetly abides within; There at the cross where he took me in; Glory to his name!Down at the cross where my Savior died, Down where for cleansing from sin I cried, There to my heart was the blood applied; Glory to his name!",
            2: "I am so wondrously saved from sin, Jesus so sweetly abides within; There at the cross where he took me in; Glory to his name!",
            3: "Oh, precious fountain that saves from sin, I am so glad I have entered in; There Jesus saves me and keeps me clean; Glory to his name!",
            4: "Come to this fountain so rich and sweet, Cast thy poor soul at the Savior's feet; Plunge in today, and be made complete; Glory to his name!"
        },
        chorus: "Glory to his name, Glory to his name; There to my heart was the blood applied; Glory to his name!",
        song_url: `${path_name}548-GloryToHisName.mp3`,
        author: "John H. Stockton"
    },
    "He's Everything to Me": {
        song_num: 549,
        title: "He's Everything to Me",
        stanzas: {
            1: "In the stars his hand-i - work i see, On the wind he speaks with majesty, Tho he ruleth over land and sea, what is that to me? Iwill celebrate Nativity, for it has a place in history; SUre, He came to set his people free-- WHat is that to me? Till by faith i met him face to face And i felt the wonder of his grace Then i knew that he was more than just a God who didn't care that i lived away out there and now he walks beside me day by day, Ever  watching o'er me lest i stray, Helping me to find that narrow way-- He's everything to me. He's everything to me."
        },
        chorus: "",
        song_url: `${path_name}549-He'sEverythingToMe.mp3`,
        author: "Ralph Carmichael"
    },
    "He Lives": {
        song_num: 550,
        title: "He Lives",
        stanzas: {
            1: "I serve a risen Savior He's in the world today. I know that He is living, Whatever men may say. I see His hand of mercy; I hear His voice of cheer; And just the time I need Him He's always near.",
            2: "In all the world around me I see His loving care, And though my heart grows weary, I never will despair; know that He is leading, Through all the stormy blast; The day of His appearing Will come at last.",
            3: "Rejoice, rejoice, O Christian, Lift up your voice and sing Eternal hallelujahs To Jesus Christ the King! The Hope of all who seek Him, The Help of all who find, None other is so loving, So good and kind."
        },
        chorus: "He lives, He lives, Christ Jesus lives today! He walks with me and talks with me along life's narrow way. He lives, He lives, salvation to impart! You ask me how I know He lives? He lives within my heart.",
        song_url: `${path_name}550-HeLives.mp3`,
        author: "Alfred H. Ackley"
    }

}