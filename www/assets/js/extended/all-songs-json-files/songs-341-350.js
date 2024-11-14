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
    "IKnowWhoHoldsTomorrow": {
        song_num: 341,
        title: "I Know Who Holds Tomorrow",
        stanzas: {
            1: "I don't know about tomorrow,I just live from day to day.I don't borrow from its sunshine,For its skies may turn to gray.I don't worry o'er the future,For I know what Jesus said,And today I'll walk beside Him,For He knows what is ahead.",
            2: "Every step is getting brighter,As the golden stairs I climb;Every burden's getting lighter;Every cloud is silver lined.There the sun is always shining,There no tear will dim the eye,At the ending of the rainbow,Where the mountains touch the sky.",
            3: "I don't know about tomorrow,It may bring me poverty;But the one who feeds the sparrow,Is the one who stands by me.And the path that be my portion,May be through the flame or flood,But His presence goes before me,And I'm covered with His blood."
        },
        chorus: "Many things about tomorrow,I don't seem to understand;But I know who holds tomorrow,And I know who holds my hand.",
        song_url: `${path_name}341-IKnowWhoHoldsTomorrow.mp3`,
        author: "Ira F. Stanphill"
    },
    "GodMovesInAMysteriousWay": {
        song_num: 342,
        title: "God Moves In A Mysterious Way",
        stanzas: {
            1: "God moves in a mysterious wayHis wonders to perform;He plants His footsteps in the seaand rides upon the storm.",
            2: "Deep in unfathomable minesof never-failing skill;He treasures up His bright designs,and works His sov'reign will.",
            3: "Ye fearful saints, fresh courage take;the clouds ye so much dreadare big with mercy and shall breakin blessings on your head.",
            4: "Judge not the Lord by feeble sense,but trust Him for His grace; behind a frowning providenceHe hides a smiling face.",
            5: "His purposes will ripen fast,unfolding every hour;the bud may have a bitter taste,but sweet will be the flow'r.",
            6: "Blind unbelief is sure to err, and scan His work in vain; God is His own interpreter, and He will make it plain."
        },
        chorus: "",
        song_url: `${path_name}342-GodMovesInAMysteriousWay.mp3`,
        author: "William Cowper"
    },
    LikeARiverGlorious: {
        song_num: 343,
        title: "Like A River Glorious",
        stanzas: {
            1: "Like a river glorious is God's perfect peace,over all victorious in its bright increase:perfect, yet still flowing fuller every day;perfect, yet still growing deeper all the way.",
            2: "Hidden in the hollow of his mighty hand,where no harm can follow, in his strength we stand.We may trust him fully all for us to do;those who trust him wholly find him wholly true."
        },
        chorus: "Trusting in the Father, hearts are fully blest,finding, as he promised, perfect peace and rest.",
        song_url: `${path_name}343-LikeARiverGlorious.mp3`,
        author: "Frances Ridley Havergal"
    },
    AllYourAnxiety: {
        song_num: 344,
        title: "All Your Anxiety",
        stanzas: {
            1: "Is there a heart o'erbound by sorrow? Is there a life weighed down by care? Come to the cross, each burden bearing; All your anxiety—leave it there.",
            2: "No other friend so swift to help you,No other friend so quick to hear,No other place to leave your burden,No other one to hear your prayer.",
            3: "Come then at once; delay no longer!Heed His entreaty kind and sweet,You need not fear a disappointment;You shall find peace at the mercy seat."
        },
        chorus: "All your anxiety, all your care,Bring to the mercy seat, leave it there,Never a burden He cannot bear,Never a friend like Jesus!",
        song_url: `${path_name}344-AllYourAnxiety.mp3`,
        author: "Edward H. Joy"
    },
    IHaveGotPeaceLikeARiver: {
        song_num: 345,
        title: "I've Got Peace Like A River",
        stanzas: {
            1: "I've got peace like a river,I've got peace like a river,I've got peace like a river in my soul.I've got peace like a river,I've got peace like a river,I've got peace like a river in my soul.",
            2: "I've got love like a river,I've got love like a river,I've got love like a river in my soul.I've got love like a river,I've got love like a river,I've got love like a river in my soul",
            3: "I've got joy like a river,I've got joy like a river,I've got joy like a river in my soul.I've got joy like a river,I've got joy like a river,I've got joy like a river in my soul."
        },
        chorus: "",
        song_url: `${path_name}345-IHaveGotPeaceLikeARiver.mp3`,
        author: "Traditional"
    },
    JesusNeverFails: {
        song_num: 346,
        title: "Jesus Never Fails",
        stanzas: {
            1: "Earthly friends may prove untrue,Doubts and fears assail;One still loves and cares for you,One who will not fail.",
            2: "Tho' the sky be dark and drear, Fierce and strong the gale; Just remember He is near, And He will not fail.",
            3: "In life's dark and bitter hour Love will still prevail; Trust His everlasting pow'r Jesus will not fail."
        },
        chorus: "Jesus never fails, Jesus never fails; Heav'n and earth may pass away, But Jesus never fails.",
        song_url: `${path_name}346-JesusNeverFails.mp3`,
        author: "Arthur A. Luther"
    },
    OLord: {
        song_num: 347,
        title: "O Lord!",
        stanzas: {
            1: "Someone's lonely, Lord—give him friends, Someone's lonely, Lord—give him friends, Someone's lonely, Lord—give him friends, O Lord, give him friends.",
            2: "Someone's fighting, Lord—give him peace,Someone's fighting, Lord—give him peace,Someone's fighting, Lord—give him peace,O Lord, give him peace.",
            3: "Someone's hating, Lord—give him love, Someone's hating, Lord—give him love, Someone's hating, Lord—give him love, O Lord, give him love.",
            4: "Someone's doubting, Lord—give him faith,Someone's doubting, Lord—give him faith,Someone's doubting, Lord—give him faith,O Lord, give him faith.",
            5: "We are living, Lord—help us care,We are living, Lord—help us care,We are living, Lord—help us care,O Lord, help us care."
        },
        chorus: "",
        song_url: `${path_name}347-OLord.mp3`,
        author: "Traditional"
    },
    DoesJesusCare: {
        song_num: 348,
        title: "Does Jesus Care?",
        stanzas: {
            1: "Does Jesus care when my heart is pained Too deeply for mirth or song; As the burdens press, and the cares distress, And the way grows weary and long?",
            2: "Does Jesus care when my way is dark With a nameless dread and fear? As the daylight fades into deep night shades, Does He care enough to be near?",
            3: "Does Jesus care when I've tried and failed To resist some temptation strong; When for my deep grief I find no relief, Though my tears flow all the night long?",
            4: "Does Jesus care when I've said goodbye To the dearest on earth to me,And my sad heart aches till it nearly breaks—Is it aught to Him? does He see?"
        },
        chorus: "O yes, He cares- I know He cares! His heart is touched with my grief; When the days are weary, the long nights dreary, I know my Savior cares.",
        song_url: `${path_name}348-DoesJesusCare.mp3`,
        author: "Frank E. Graeff"
    },
    ThereIsABalmInGilead: {
        song_num: 349,
        title: "There Is a Balm in Gilead",
        stanzas: {
            1: "There is a balm in Gilead to make the wounded whole, there is a balm in Gilead to heal the sin-sick soul.",
            2: "If you cannot preach like Peter, if you cannot pray like Paul, you can tell the love of Jesus and say, 'He died for all.'"
        },
        chorus: "There is a balm in Gileadto make the wounded whole, there is a balm in Gileadto heal the sin-sick soul.",
        song_url: `${path_name}349-ThereIsABalmInGilead.mp3`,
        author: "Traditional"
    },
    WonderfulPeace: {
        song_num: 350,
        title: "Wonderful Peace",
        stanzas: {
            1: "Far away in the depths of my spirit tonight Rolls a melody sweeter than psalm; In celestial-like strains it unceasingly falls O'er my soul like an infinite calm.",
            2: "What a treasure I have in this wonderful peace Buried deep in the heart of my soul, So secure that no power can mine it away While the years of eternity roll.",
            3: "I am resting tonight in this wonderful peace, Resting sweetly in Jesus' control, For I'm kept from all danger by night and by day, And His glory is flooding my soul.",
            4: "And me thinks when I rise to that city of peace Where the Author of peace I shall see, that one strain of the song which the ransomed will sing In that heavenly kingdom shall be:",
            5: "Ah! soul, are you here without comfort and rest, Marching down the rough pathway of time? Make Jesus your friend ere the shadows grow dark O accept this sweet peace so sublime!"
        },
        chorus: "Peace, peace! wonderful peace, Coming down from the Father above, Sweep over my spirit forever, I pray, In fathomless billows of love.",
        song_url: `${path_name}350-WonderfulPeace.mp3`,
        author: "Warren Donald Cornell"
    }
}