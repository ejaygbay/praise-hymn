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
    "SoftlyAndTenderly": {
        song_num: 301,
        title: "Softly And Tenderly",
        stanzas: {
            1: "Softly and tenderly Jesus is calling, calling for you and for me; see, on the portals he's waiting and watching, watching for you and for me.",
            2: "Why should we tarry when Jesus is pleading, pleading for you and for me? Why should we linger and heed not his mercies, mercies for you and for me?",
            3: "Time is now fleeting, the moments are passing, passing from you and from me; shadows are gathering, deathbeds are coming, coming for you and for me.",
            4: "O for the wonderful love he has promised, promised for you and for me! Though we have sinned, he has mercy and pardon, pardon for you and for me."
        },
        chorus: "Come home, come home; you who are weary come home; earnestly, tenderly, Jesus is calling, calling, O sinner, come home!",
        song_url: `${path_name}301-SoftlyAndTenderly.mp3`,
        author: "Will L. Thompson"
    },
    "HaveYouAnyRoomForJesus?": {
        song_num: 302,
        title: "Have You Any Room For Jesus?",
        stanzas: {
            1: "Have you any room for Jesus, He who bore your load of sin? As He knocks and asks admission, Sinner, will you let Him in?",
            2: "Room for pleasure, room for business; But for Christ, the Crucified, Not a place that He can enter, In the heart for which He died?",
            3: "Room and time now give to Jesus; Soon will pass God’s day of grace - Soon your heart left cold and silent, And your Savior’s pleading cease. "
        },
        chorus: "Room for Jesus, King of Glory! Hasten now, His Word obey. Swing the heart’s door widely open; Bid Him enter while you may.",
        song_url: `${path_name}302-HaveYouAnyRoomForJesus?.mp3`,
        author: "C. C. Williams"
    },
    "ComeWithYourHeartache": {
        song_num: 303,
        title: "Come With Your Heartache",
        stanzas: {
            1: "Come with your heartache, your sorrow and care, Come to the Savior today; Jesus will comfort- O Why then despair? He will not turn you away.",
            2: "Come with your heartache- the Savior will hear, Come and unburden your soul; Jesus has promised to dry every tear-Hearts, broken hearts, He makes whole",
            3: "Come with your heartache- the world can not heal! Why should you suffer alone? Only the savior your heartache can feel- Jesus cares for His own."

        },
        chorus: "Come with your heartache, O come to Him now- He will not turn you away; Jesus is waiting your burdens to share- Come with your heartache today.",
        song_url: `${path_name}303-ComeWithYourHeartache.mp3`,
        author: "Oswald J. Smith"
    },
    "ForYouIAmPraying": {
        song_num: 304,
        title: "For You I Am Praying",
        stanzas: {
            1: "I have a Savior, He’s pleading in glory, A dear, loving Savior, though earth-friends be few; And now He is watching in tenderness o’er me, But O, that my Savior were your Savior, too!",
            2: "I have a Father; to me He has given A hope for eternity, blessed and true; And soon will He call me to meet Him in heaven, But O, that He’d let me bring you with me, too!",
            3: "I have a robe, ’tis resplendent in whiteness, Awaiting in glory my wondering view; O, when I receive it all shining in brightness, Dear friend, could I see you receiving one, too!",
            4: "When He has found you, tell others the story, That my loving Savior is your Savior, too; Then pray that your Savior may bring them to glory, And prayer will be answered- ’twas answered for you!"
        },
        chorus: "For you I am praying, For you I am praying, For you I am praying, I’m praying for you.",
        song_url: `${path_name}304-ForYouIAmPraying.mp3`,
        author: "S. O'Malley Cluff"
    },
    "AlmostPersuaded": {
        song_num: 305,
        title: "Almost Persuaded",
        stanzas: {
            1: "'Almost persuaded' now to believe; 'Almost persuaded' Christ to receive; Seems now some soul to say, 'Go, Spirit, go Thy way; Some more convenient day On Thee I’ll call.'",
            2: "'Almost persuaded,' come, come today; 'Almost persuaded,' turn not away; Jesus invites you here, Angels are lingering near, Prayers rise from hearts so dear; O wanderer, come.",
            3: "'Almost persuaded,' harvest is past! 'Almost persuaded' doom comes at last! 'Almost' cannot avail; 'Almost' is but to fail! Sad, sad, that bitter wail, 'Almost,' but lost!"
        },
        chorus: "",
        song_url: `${path_name}305-AlmostPersuaded.mp3`,
        author: "Philip P. Bliss"
    },
    "JustAsIAm": {
        song_num: 306,
        title: "Just As I Am",
        stanzas: {
            1: "Just as I am, without one plea, but that thy blood was shed for me, and that thou bidd'st me come to thee, O Lamb of God, I come, I come.",
            2: "Just as I am, and waiting not to rid my soul of one dark blot, to thee, whose blood can cleanse each spot, O Lamb of God, I come, I come.",
            3: "Just as I am, though tossed about with many a conflict, many a doubt, fightings and fears within, without, O Lamb of God, I come, I come.",
            4: "Just as I am, thou wilt receive, wilt welcome, pardon, cleanse, relieve; because thy promise I believe, O Lamb of God, I come, I come. "
        },
        chorus: "",
        song_url: `${path_name}306-JustAsIAm.mp3`,
        author: "Charlotte Elliott"
    },
    "GodFinalCall": {
        song_num: 307,
        title: "God's Final Call",
        stanzas: {
            1: "Some day you'll hear God's final call to you To take His offer of salvation true- This could be it, my friend, if you but knew: God's final call, God's final call.",
            2: "How can you live anther day in sin, Thinking some day with christ you will begin? O will you hear, above the world's loud din, God's final call, God's final call?",
            3: "If you reject God's final call of grace, You'll have no chance your foot-steps to retrace- All hope will then be gone, and doom you'll face: O hear His call! Ohear His call!"
        },
        chorus: "",
        song_url: `${path_name}307-GodFinalCall.mp3`,
        author: "John W. Peterson"
    },
    "AreYouWashedInTheBlood": {
        song_num: 308,
        title: "Are You Washed In The Blood?",
        stanzas: {
            1: "Have you been to Jesus for the cleansing power? Are you washed in the blood of the Lamb? Are you fully trusting in His grace this hour? Ae you washed in the blood of the Lamb?",
            2: "Are you walking daily by the Savior's side? Are you washed in the blood of the Lamb? Do you rest each moment in the Crucified? Are you washed in the blood of the Lamb?",
            3: "When the Bridegroom cometh will your robes be white? Are you washed in the blood of the Lamb? Will your soul be ready for the mansions bright, And be washed in the blood of the Lamb?",
            4: "Lay aside the garments that are stained with sin, And be washed in the blood of the Lamb; There's a fountain flowing for the soul unclean, O be washed in the blood of the Lamb!"
        },
        chorus: "Are you washed in the blood, In the soul cleansing blood of the Lamb? Are your garments spotless? Are they white as snow? Are you washed in the blood of the Lamb?",
        song_url: `${path_name}308-AreYouWashedInTheBlood.mp3`,
        author: "Elisha A. Hoffman"
    },
    "RiseAndBeHealed": {
        song_num: 309,
        title: "Rise And Be Healed",
        stanzas: {
            1: "Has fear and doubt come against your mind? Has your faith been sorely tried? Lift up your eyes- here cometh your help! It is Jesus- for you He has died!",
            2: "If by faith you reach out to Him, He will meet your every need; He will respond to the cry of your heart, He will touch you and set you free!"
        },
        chorus: "Rise and be healed in the name of Jesus- Let faith arise in your soul! Rise and be healed in the name of Jesus- He will make you every whit whole!",
        song_url: `${path_name}309-RiseAndBeHealed.mp3`,
        author: "Milton Bourgeois"
    },
    "PassMeNot": {
        song_num: 310,
        title: "Pass Me Not",
        stanzas: {
            1: "Pass me not, O gentle Savior, Hear my humble cry, While on others Thou art calling, Do not pass me by.",
            2: "Let me at a throne of mercy Find a sweet relief; Kneeling there in deep contrition, Help my unbelief.",
            3: "Trusting only in Thy merit, Would I seek Thy face; Heal my wounded, broken spirit, Save me by Thy grace.",
            4: "Thou the Spring of all my comfort, More than life to me, Whom have I on earth beside Thee? Whom in heav'n but Thee?"
        },
        chorus: "Savior, Savior, Hear my humble cry; While on others Thou art calling, Do not pass me by.",
        song_url: `${path_name}310-PassMeNot.mp3`,
        author: "Fanny J. Crosby"
    },
    "IntoMyHeart": {
        song_num: 311,
        title: "Into My Heart",
        stanzas: {
            1: "Into my heart, into my heart, come into my heart, Lord Jesus; Come in today, come in to stay- Come into my heart, Lord Jesus.",
        },
        chorus: "",
        song_url: `${path_name}311-IntoMyHeart.mp3`,
        author: "Harry D. Clarke"
    },
    "LordImComingHome": {
        song_num: 312,
        title: "Lord, I'm Coming Home",
        stanzas: {
            1: "I've wandered far away from God, Now I'm coming home; The paths of sin too long I've trod, Lord, I'm coming home.",
            2: "I've wasted many precious years, Now I'm coming home; I now repent with bitter tears, Lord, I'm coming home.",
            3: "I've tired of sin and straying, Lord, Now I'm coming home; I'll trust Thy love, believe Thy word, Lord, I'm coming home.",
            4: "My soul is sick, my heart is sore, Now I'm coming home; My strength renew, my hope restore, Lord, I'm coming home"
        },
        chorus: "Coming home, coming home, Nevermore to roam, Open wide Thine arms of love, Lord, I'm coming home.",
        song_url: `${path_name}312-LordImComingHome.mp3`,
        author: "Wm. J. Kirkpatrick"
    },
    "JesusLoverOfMySoul": {
        song_num: 313,
        title: "Jesus, Lover Of My Soul",
        stanzas: {
            1: "Jesus, lover of my soul, let me to thy bosom fly, while the nearer waters roll, while the tempest still is high; hide me, O my Savior, hide, till the storm of life is past; safe into the haven guide, O receive my soul at last!",
            2: "Other refuge have I none; hangs my helpless soul on thee; leave, ah! leave me not alone, still support and comfort me. All my trust on thee is stayed, all my help from thee I bring; cover my defenseless head with the shadow of thy wing.",
            3: "Plenteous grace with thee is found, grace to cover all my sin; let the healing streams abound; make and keep me pure within. Thou of life the fountain art; freely let me take of thee; spring thou up within my heart, rise to all eternity."
        },
        chorus: "",
        song_url: `${path_name}313-JesusLoverOfMySoul.mp3`,
        author: "Charles Wesley"
    },
    "JesusICome": {
        song_num: 314,
        title: "Jesus, I Come",
        stanzas: {
            1: "Out of my bondage, sorrow and night, Jesus, I come, Jesus, I come; Into thy freedom, gladness, and light, Jesus, I come to thee. Out of my sickness into thy health, Out of my want and into thy wealth, Out of my sin and into thyself, Jesus, I come to thee.",
            2: "Out of my shameful failure and loss, Jesus, I come, Jesus, I come; Into the glorious gain of thy cross, Jesus, I come to thee. Out of earth's sorrows into thy balm, Out of life's storms and into thy calm, Out of distress to jubilant psalm, Jesus, I come to thee.",
            3: "Out of unrest and arrogant pride, Jesus, I come, Jesus, I come; Into thy blessed will to abide, Jesus, I come to thee. Out of my self to dwell in thy love, Out of despair into raptures above, Upward for aye on wings like a dove, Jesus, I come to thee.",
            4: "Out of the fear and dread of the tomb, Jesus, I come, Jesus, I come; Into the joy and light of thy home, Jesus, I come to thee. Out of the depths of ruin untold, Into the peace of thy sheltering fold, Ever thy glorious face to behold, Jesus, I come to thee."
        },
        chorus: "",
        song_url: `${path_name}314-JesusICome.mp3`,
        author: "William T. Sleeper"
    },
    "RockOfAges": {
        song_num: 315,
        title: "Rock Of Ages",
        stanzas: {
            1: "Rock of Ages, cleft for me, let me hide myself in thee; let the water and the blood, from thy wounded side which flowed, be of sin the double cure; save from wrath and make me pure. ",
            2: "Not the labors of my hands can fulfill thy law's demands; could my zeal no respite know, could my tears forever flow, all for sin could not atone; thou must save, and thou alone. ",
            3: "Nothing in my hand I bring, simply to the cross I cling; naked, come to thee for dress; helpless, look to thee for grace; foul, I to the fountain fly; wash me, Savior, or I die. ",
            4: "While I draw this fleeting breath, when mine eyes shall close in death, when I soar to worlds unknown, see thee on thy judgment throne, Rock of Ages, cleft for me, let me hide myself in thee."
        },
        chorus: "",
        song_url: `${path_name}315-RockOfAges.mp3`,
        author: "Augustus M. Toplady"
    },
    "OForACloserWalkWithGod": {
        song_num: 316,
        title: "O For A Closer Walk With God",
        stanzas: {
            1: "O for a closer walk with God, a calm and heav'nly frame, a light to shine upon the road that leads me to the Lamb!",
            2: "Where is the blessedness I knew when first I sought the Lord? Where is the soul refreshing view of Jesus and His Word?",
            3: "What peaceful hours I then enjoyed! How sweet their mem'ry still! But they have left an aching void the world can never fill.",
            4: "Return, O holy Dove, return, sweet messenger of rest; I hate the sins that made Thee mourn, and drove Thee from my breast.",
            5: "The dearest idol I have known, whate'er that idol be, help me to tear it from Thy throne and worship only Thee.",
            6: "So shall my walk be close with God, calm and serene my frame; so purer light shall mark the road that leads me to the Lamb."
        },
        chorus: "",
        song_url: `${path_name}316-OForACloserWalkWithGod.mp3`,
        author: "William Cowper"
    },
    "SearchMeOGod": {
        song_num: 317,
        title: "Search Me, O God",
        stanzas: {
            1: "Search me, O God, and know my heart today;Try me, O Savior, know my thoughts, I pray. See if there be some wicked way in me; Cleanse me from ev'ry sin and set me free.",
            2: "I praise thee, Lord, for cleansing me from sin; Fulfill thy Word, and make me pure within. Fill me with fire where once I burned with shame; Grant my desire to magnify thy name.",
            3: "Lord, take my life and make it wholly thine; Fill my poor heart with thy great love divine. Take all my will, my passion, self, and pride; I now surrender; Lord, in me abide."

        },
        chorus: "",
        song_url: `${path_name}317-SearchMeOGod.mp3`,
        author: "J. Edwin Orr"
    },
    "WhiterThanSnow": {
        song_num: 318,
        title: "Whiter Than Snow",
        stanzas: {
            1: "Lord Jesus, I long to be perfectly whole; I want Thee forever to live in my soul, Break down every idol, cast out every foe; Now wash me and I shall be whiter than snow.",
            2: "Lord Jesus, look down from Thy throne in the skies, And help me to make a complete sacrifice; I give up myself, and whatever I know, Now wash me and I shall be whiter than snow.",
            3: "Lord Jesus, for this I most humbly entreat, I wait, blessed Lord, at Thy crucified feet; By faith, for my cleansing I see Thy blood flow, Now wash me and I shall be whiter than snow.",
            4: "Lord Jesus, Thou seeest I patiently wait, Come now, and within me a new heart create; To those who have sought Thee, Thou never saidst 'No,' Now wash me and I shall be whiter than snow."
        },
        chorus: "Whiter than snow, yes, whiter than snow, Now wash me, and I shall be whiter than snow.",
        song_url: `${path_name}318-WhiterThanSnow.mp3`,
        author: "James Nicholson"
    },
    "BlessedAssurance": {
        song_num: 319,
        title: "Blessed Assurance",
        stanzas: {
            1: "Blessed assurance, Jesus is mine! Oh, what a foretaste of glory divine! Heir of salvation, purchase of God, born of his Spirit, washed in his blood.",
            2: "Perfect communion, perfect delight, visions of rapture now burst on my sight. Angels descending bring from above echoes of mercy, whispers of love.",
            3: "Perfect submission, all is at rest. I in my Savior am happy and bless’d, watching and waiting, looking above, filled with his goodness, lost in his love."
        },
        chorus: "This is my story, this is my song, praising my Savior all the day long. This is my story, this is my song, praising my Savior all the day long.",
        song_url: `${path_name}319-BlessedAssurance.mp3`,
        author: "Fanny J. Crosby"
    },
    "TrustAndObey": {
        song_num: 320,
        title: "Trust And Obey",
        stanzas: {
            1: "When we walk with the Lord in the light of his word, what a glory he sheds on our way! hile we do his good will, he abides with us still, and with all who will trust and obey. ",
            2: "Not a burden we bear, not a sorrow we share, but our toil he doth richly repay; not a grief or a loss, not a frown or a cross, but is blest if we trust and obey.",
            3: "But we never can prove the delights of his love until all on the altar we lay; for the favor he shows, for the joy he bestows, are for them who will trust and obey.",
            4: "Then in fellowship sweet we will sit at his feet, or we'll walk by his side in the way; what he says we will do, where he sends we will go; never fear, only trust and obey."
        },
        chorus: "Trust and obey, for there's no other way to be happy in Jesus, but to trust and obey. ",
        song_url: `${path_name}320-TrustAndObey.mp3`,
        author: "John H. Sammis"
    },
    "ItIsWellWithMySoul": {
        song_num: 321,
        title: "It Is Well With My Soul",
        stanzas: {
            1: "When peace like a river attendeth my way, when sorrows like sea billows roll; whatever my lot, thou hast taught me to say, 'It is well, it is well with my soul.'",
            2: "Though Satan should buffet, though trials should come, let this blest assurance control: that Christ has regarded my helpless estate, and has shed his own blood for my soul.",
            3: "y sin oh, the bliss of this glorious thought! my sin, not in part, but the whole, is nailed to the cross, and I bear it no more; praise the Lord, praise the Lord, O my soul!",
            4: "O Lord, haste the day when my faith shall be sight, the clouds be rolled back as a scroll; the trump shall resound and the Lord shall descend; even so, it is well with my soul."
        },
        chorus: "It is well with my soul; it is well, it is well with my soul.",
        song_url: `${path_name}321-ItIsWellWithMySoul.mp3`,
        author: "Horatio G. Spafford"
    },
    "IJustKeepTrustingMyLord": {
        song_num: 322,
        title: "I Just Keep Trusting My Lord",
        stanzas: {
            1: "I just keep trusting my Lord as I walk along, I just keep trusting my Lord and He gives a song; Tho the storm-cloud darken the sky o'er the heav'nly trail, I just keep trusting my Lord- He will never fail! He's a faithful friend, such a faithful friend, I can count on Him to the very end;",
            2: "I just keep trusting my Lord on the narrow way, I just keep trusting my Lord as He leads each day; Tho the road is weary at times and I'm sad and blue, I just keep trusting my Lord- He will see me through! He's a faithful guide, such a faithful guide, He is always there walking by my side;"
        },
        chorus: "",
        song_url: `${path_name}322-IJustKeepTrustingMyLord.mp3`,
        author: "John W. Peterson"
    },
    "TrustingJesus": {
        song_num: 323,
        title: "Trusting Jesus",
        stanzas: {
            1: "Simply trusting every day, Trusting through a stormy way; Even when my faith is small, Trusting Jesus, that is all.",
            2: "Brightly doth His Spirit shine Into this poor heart of mine; While He leads I cannot fall; Trusting Jesus, that is all.",
            3: "Singing if my way is clear, Praying if the path be drear; If in danger for Him call; Trusting Jesus, that is all.",
            4: "Trusting Him while life shall last, Trusting Him till earth be past; Till within the jasper wall, Trusting Jesus, that is all."
        },
        chorus: "Trusting as the moments fly, Trusting as the days go by; Trusting Him whate’er befall, Trusting Jesus, that is all.",
        song_url: `${path_name}323-TrustingJesus.mp3`,
        author: "Edgar Page Stites"
    },
    "TisSoSweetToTrustInJesus": {
        song_num: 324,
        title: "Tis So Sweet To Trust In Jesus",
        stanzas: {
            1: "'Tis so sweet to trust in Jesus, and to take him at his word; just to rest upon his promise, and to know, 'Thus saith the Lord.'",
            2: "O how sweet to trust in Jesus, just to trust his cleansing blood; and in simple faith to plunge me neath the healing, cleansing flood!",
            3: "Yes, 'tis sweet to trust in Jesus, just from sin and self to cease; just from Jesus simply taking life and rest, and joy and peace."
        },
        chorus: "Jesus, Jesus, how I trust him! How I've proved him o'er and o'er! Jesus, Jesus, precious Jesus! O for grace to trust him more! ",
        song_url: `${path_name}324-TisSoSweetToTrustInJesus.mp3`,
        author: "Louisa M. R. Stead"
    },
    "JesusIAmResting": {
        song_num: 325,
        title: "Jesus, I Am Resting",
        stanzas: {
            1: "Jesus, I am resting, resting in the joy of what thou art; I am finding out the greatness of thy loving heart. Thou hast bid me gaze upon thee, as thy beauty fills my soul, for by thy transforming power, thou hast made me whole.",
            2: "O how great thy lovingkindness, vaster, broader than the sea! O how marvelous thy goodness lavished all on me! Yes, I rest in thee, Beloved, know what wealth of grace is thine, know thy certainty of promise and have made it mine.",
            3: "Simply trusting thee, Lord Jesus, I behold thee as thou art, and thy love, so pure, so changeless, satisfies my heart; satisfies its deepest longings, meets, supplies its ev'ry need, compasseth me round with blessings: thine is love indeed. ",
            4: "Ever lift thy face upon me as I work and wait for thee; resting 'neath thy smile, Lord Jesus, earth's dark shadows flee. Brightness of my Father's glory, sunshine of my Father's face, keep me ever trusting, resting, fill me with thy grace."
        },
        chorus: "Jesus, I am resting, resting, in the joy of what thou art; I am finding out the greatness of thy loving heart.",
        song_url: `${path_name}325-JesusIAmResting.mp3`,
        author: "Jean Sophia Pigott"
    },
    // Songs from the previous task that was given
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
    "MyDesire": {
        song_num: 391,
        title: "My Desire",
        stanzas: {
            1: "My desire to be like Jesus, My desire- to be like Him! His Spirit fill me, His love o'er-whelm me: In deed and word to be like Him!"
        },
        chorus: "",
        song_url: `${path_name}391-MyDesire.mp3`,
        author: "Lillian Plankenhorn"
    }
}