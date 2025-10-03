// ====================================================================
// ১. ফন্ট ম্যাপিং এবং হেল্পার ডেটা (আপনার দেওয়া সোর্স ফাইল থেকে)
// এই অংশে আপনার সম্পূর্ণ ম্যাপিং ডেটা বসানো হয়েছে।
// ====================================================================

const unicodeToBijoyMap = {
    "অ": "A", "আ": "Av", "ই": "B", "ঈ": "C", "উ": "D", "ঊ": "E", "ঋ": "F", "এ": "G", "ঐ": "H", "ও": "I",
    "ঔ": "J", "ক": "K", "খ": "L", "গ": "M", "ঘ": "N", "ঙ": "O", "চ": "P", "ছ": "Q", "জ": "R", "ঝ": "S", "ঞ": "T",
    "ট": "U", "ঠ": "V", "ড": "W", "ঢ": "X", "ণ": "Y", "ত": "Z", "থ": "_", "দ": "`", "ধ": "a", "ন": "b",
    "প": "c", "ফ": "d", "ব": "e", "ভ": "f", "ম": "g", "য": "h", "র": "i", "ল": "j", "শ": "k", "ষ": "l",
    "স": "m", "হ": "n", "ড়": "o", "ঢ়": "p", "য়": "q", "ৎ": "r", "ং": "s", "ঃ": "t", "ঁ": "u", "ৰ": "v", "ড়": "o",
    "ঢ়": "p", "য়": "q", "র্বৃ": "e„©", "ৱ": "w", "ড়ে": "‡o", "ঢ়ে": "‡p", "য়ে": "‡q", "ড়ৈ": "‰o", "ঢ়ৈ": "‰p",
    "য়ৈ": "‰q", "ড়ি": "wo", "ড়ো": "‡ov", "ঢ়ি": "wp", "য়ো": "‡qv", "য়ি": "wq", "০": "0", "১": "1", "২": "2",
    "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "৳": "৳", "₹": "₹", "া": "v",
    "ি": "w", "ী": "x", "ু": "y", "ূ": "~", "ৃ": "„", "্র": "ª", "্য": "¨", "র্": "©", "ে": "‡", "ৈ": "‰", "ো": "‡v",
    "ৌ": "‡Š", "ৗ": "Š", "্": "&", "।": "|", "॥": "||", "‘": "Ô", "’": "Õ", "“": "Ò", "”": "Ó", "৷": "৷",
    "৥": "৥", "ক্ক": "°", "ক্ট": "±", "ক্ত": "³", "ক্ব": "K¡", "ক্র": "µ", "ক্লি": "wK¬", "ক্ল": "K¬", "ক্ষ": "¶",
    "ক্স": "·", "খ্র": "Lª", "গ্দ": "M&`", "গ্ধ": "»", "গ্ন": "Mœ", "গ্ম": "M¥", "গ্র": "MÖ", "গ্ল": "Mø", "ঙ্ক": "¼",
    "ঙ্খ": "•L", "ঙ্গ": "½", "ঙ্ঘ": "•N", "চ্চ": "”P", "চ্ছ": "”Q", "“ছ": "ÒQ", "জ্জ": "¾", "জ্ঝ": "À", "জ্ঞ": "Á",
    "জ্ব": "R¡", "জ্র": "Rª", "ঞ্চ": "Â", "ঞ্ছ": "Ã", "ঞ্জ": "Ä", "ন্ব": "š^", "ঞ্ঝ": "Å", "ট্ট": "Æ", "ট্ব": "U¡",
    "ট্ম": "U¥", "ট্র": "Uª", "ড্ড": "Ç", "ড্র": "Wª", "ঢ্র": "Xª", "ণ্ট": "È", "ত্ব": "Z¡", "ণ্ঠ": "É", "ণ্ড": "Ð",
    "ণ্ণ": "Yœ", "ত্ত": "Ë", "ত্থ": "Ì", "ত্ন": "Zœ", "ত্ম": "Z¥", "ত্র": "Î", "দ্দ": "Ï", "ঙ্্ম": "•g", "দ্ধ": "×",
    "দ্ব": "Ø", "দ্ভ": "™¢", "দ্ম": "Ù", "দ্র": "`ª", "ধ্ব": "aŸ", "ধ্ম": "a¥", "ন্ত": "šÍ", "ন্থ": "š’", "ক্ম": "´",
    "ন্দ": "›`", "ন্ধ": "Ü", "ন্ন": "bœ", "ন্ম": "b¥", "প্ট": "Þ", "প্ত": "ß", "প্ন": "cœ", "প্প": "à", "প্র": "cÖ",
    "ক্ষ্ণ": "ÿè", "প্ল": "cø", "প্স": "á", "ফ্র": "d«", "ফ্ল": "d¬", "ব্জ": "â", "ব্দ": "ã", "ব্ধ": "ä", "ব্ব": "eŸ",
    "ব্র": "eª", "ব্ল": "eø", "ভ্র": "å", "ম্ন": "gœ", "ম্ফ": "ç", "ম্ব": "¤^", "ম্ভ": "¤¢", "ম্ম": "¤§", "ম্র": "gª",
    "ম্ল": "¤ø", "থ্ব": "_¡", "ল্ক": "é", "ল্গ": "ê", "ল্ট": "ë", "ল্ড": "ì", "ল্প": "í", "ল্ব": "j¦", "ল্ম": "j¥",
    "ল্ল": "jø", "শ্চ": "ð", "দ্দ্ব": "Ï¡", "শ্ন": "kœ", "শ্ব": "k¦", "শ্ম": "k¥", "শ্ল": "kø", "ষ্ক": "®‹", "ষ্ট": "ó",
    "ষ্ঠ": "ô", "ষ্ণ": "ò", "ষ্প": "®ú", "ষ্ফ": "õ", "ষ্ম": "®§", "স্ক": "¯‹", "স্খ": "ö", "স্ট": "÷", "স্ত": "¯Í",
    "স্থ": "¯’", "স্ন": "mœ", "স্প": "¯ú", "স্ফ": "ù", "স্ব": "¯^", "স্ম": "¯§", "স্ল": "¯ø", "হ্ণ": "nè", "হ্ন": "ý",
    "হ্ম": "þ", "হ্ল": "n¬", "হু": "û", "হৃ": "ü", "গু": "¸", "শু": "ï", "ক্ত্র": "³ª", "ক্ন": "Kè", "ক্ষ্ণ": "òœ",
    "ক্ষ্ম": "²", "ক্ষ্র": "ÿ«", "গ্ব": "M&e", "ঘ্ন": "Nœ", "ঘ্র": "Nª", "ঙ্গু": "½y", "জ্জ্ব": "¾¡", "ত্ত্ব": "Ë¡",
    "ত্রু": "Îæ", "দ্রু": "`ªæ", "ভ্রু": "åæ", "শ্রু": "kÖæ", "ম্প": "¤ú", "্র্য": "ª‍¨", "র‌্য": "i¨", "ক্য": "K¨",
    "ল্যু": "j¨y", "ক্লু": "K¬z", "ত্র্য": "Î¨", "স্থ্য": "¯’¨", "দ্য": "`¨", "ভ্য": "f¨", "ল্য": "j¨", "ম্য": "g¨",
    "ন্য": "b¨", "ণ্য": "Y¨", "কার্য": "Kvh©", "র্ষ": "l©", "র্য": "h©", "ব্যু": "ey¨", "হ্ব": "nŸ", "গ্নু": "Mœy",
    "র্ু": "z©", "র্ষূ": "l~©", "র্ষু": "ly©", "–": "-", "ড়ূ": "o~", "ট্ম": "U¥", "য়ু": "qy", "য়ূ": "q~", "স্ম": "¯§", "র‌্য": "i¨", "ত্ত্ব": "Ë¡", "ত্ব": "Z¡",
};

const bijoyToUnicodeMap = {
    "A": "অ", "Av": "আ", "B": "ই", "C": "ঈ", "D": "উ", "E": "ঊ", "F": "ঋ", "G": "এ", "H": "ঐ", "I": "ও", "J": "ঔ",
    "†": "ে", "ˆ": "ৈ", "‡": "ে", "‰": "ৈ", "K": "ক", "L": "খ", "M": "গ", "N": "ঘ", "O": "ঙ", "P": "চ", "Q": "ছ",
    "R": "জ", "S": "ঝ", "T": "ঞ", "U": "ট", "V": "ঠ", "W": "ড", "X": "ঢ", "Y": "ণ", "Z": "ত", "_": "থ", "`": "দ",
    "a": "ধ", "b": "ন", "c": "প", "d": "ফ", "e": "ব", "f": "ভ", "g": "ম", "h": "য", "i": "র", "j": "ল", "k": "শ",
    "l": "ষ", "m": "স", "n": "হ", "o": "ড়", "p": "ঢ়", "q": "য়", "r": "ৎ", "s": "ং", "t": "ঃ", "u": "ঁ", "v": "া",
    "w": "ি", "x": "ী", "y": "ু", "~": "ূ", "„": "ৃ", "‡v": "ো", "z": "ু", "†v": "ো", "†Š": "ৌ", "‡Š": "ৌ", "ª": "্র",
    "¨": "্য", "©": "র্", "Ö": "্র", "Š": "ৗ", "&": "্", "”Q": "”Q", "|": "।", "||": "॥", "Ô": "‘", "Õ": "’", "Ò": "“",
    "Ó": "”", " ": " ", ".": ".", ",": ",", "-": "-", "?": "?", "!": "!", "'": "'", "(": "(", ")": ")", "iæ": "রু",
    "eªæ": "ব্রু", "Zz": "তু", "nŸ": "হ্ব", "°": "ক্ক", "±": "ক্ট", "³": "ক্ত", "K¡": "ক্ব", "µ": "ক্র", "wK¬": "ক্লি",
    "K¬": "ক্ল", "¶": "ক্ষ", "·": "ক্স", "Lª": "খ্র", "M&`": "গ্দ", "»": "গ্ধ", "Mœ": "গ্ন", "M¥": "গ্ম", "MÖ": "গ্র",
    "Mø": "গ্ল", "¼": "ঙ্ক", "•L": "ঙ্খ", "½": "ঙ্গ", "•N": "ঙ্ঘ", "”P": "চ্চ", "¾": "জ্জ", "À": "জ্ঝ", "Á": "জ্ঞ",
    "R¡": "জ্ব", "Rª": "জ্র", "Â": "ঞ্চ", "Ã": "ঞ্ছ", "Ä": "ঞ্জ", "cÖæ": "প্রু", "Å": "ঞ্ঝ", "Æ": "ট্ট", "U¡": "ট্ব",
    "U¥": "ট্ম", "Uª": "ট্র", "Ç": "ড্ড", "Wª": "ড্র", "Xª": "ঢ্র", "È": "ণ্ট", "MÖæ": "গ্রু", "É": "ণ্ঠ", "Ð": "ণ্ড",
    "Yœ": "ণ্ণ", "Ë": "ত্ত", "Ì": "ত্থ", "Zœ": "ত্ন", "Z¥": "ত্ম", "Î": "ত্র", "Ï": "দ্দ", "¯ª": "স্র", "×": "দ্ধ",
    "Ø": "দ্ব", "™¢": "দ্ভ", "Ù": "দ্ম", "`ª": "দ্র", "aŸ": "ধ্ব", "a¥": "ধ্ম", "šÍ": "ন্ত", "š’": "ন্থ", "e„©": "র্বৃ",
    "›`": "ন্দ", "Ü": "ন্ধ", "bœ": "ন্ন", "b¥": "ন্ম", "Þ": "প্ট", "ß": "প্ত", "cœ": "প্ন", "à": "প্প", "cÖ": "প্র",
    "¤œ": "ম্ন", "cø": "প্ল", "á": "প্স", "d«": "ফ্র", "d¬": "ফ্ল", "â": "ব্জ", "ã": "ব্দ", "ä": "ব্ধ", "eŸ": "ব্ব",
    "eª": "ব্র", "´": "ক্ম", "eø": "ব্ল", "å": "ভ্র", "gœ": "ম্ন", "ç": "ম্ফ", "¤^": "ম্ব", "¤¢": "ম্ভ", "¤§": "ম্ম",
    "gª": "ম্র", "¤ø": "ম্ল", "ÿè": "ক্ষ্ণ", "¹": "গ্গ", "é": "ল্ক", "ê": "ল্গ", "ë": "ল্ট", "ì": "ল্ড", "í": "ল্প",
    "j¦": "ল্ব", "j¥": "ল্ম", "jø": "ল্ল", "ð": "শ্চ", "Ï¡": "দ্দ্ব", "kœ": "শ্ন", "k¦": "শ্ব", "k¥": "শ্ম", "kø": "শ্ল",
    "®‹": "ষ্ক", "ó": "ষ্ট", "ô": "ষ্ঠ", "ò": "ষ্ণ", "®ú": "ষ্প", "õ": "ষ্ফ", "®§": "ষ্ম", "¯‹": "স্ক", "ö": "স্খ",
    "÷": "স্ট", "¯Í": "স্ত", "¯’": "স্থ", "mœ": "স্ন", "¯ú": "স্প", "ù": "স্ফ", "¯^": "স্ব", "¯§": "স্ম", "¯ø": "স্ল",
    "nè": "হ্ণ", "ý": "হ্ন", "þ": "হ্ম", "n¬": "হ্ল", "û": "হু", "_¡": "থ্ব", "ü": "হৃ", "¸": "গু", "ï": "শু",
    "³ª": "ক্ত্র", "Kè": "ক্ন", "òœ": "ক্ষ্ণ", "²": "ক্ষ্ম", "ÿ«": "ক্ষ্র", "M&e": "গ্ব", "Nœ": "ঘ্ন", "Nª": "ঘ্র",
    "½y": "ঙ্গু", "¾¡": "জ্জ্ব", "Ë¡": "ত্ত্ব", "Îæ": "ত্রু", "`ªæ": "দ্রু", "åæ": "ভ্রু", "kÖæ": "শ্রু", "šÍ¡": "ন্ত্ব",
    "¤ú": "ম্প", "ª‍¨": "্র্য", "i¨": "র‌্য", "K¨": "ক্য", "j¨y": "ল্যু", "K¬z": "ক্লু", "Î¨": "ত্র্য", "¯’¨": "স্থ্য",
    "`¨": "দ্য", "f¨": "ভ্য", "j¨": "ল্য", "g¨": "ম্য", "b¨": "ন্য", "Y¨": "ণ্য", "ÿ": "ক্ষ", "åƒ": "ভ্রূ", "¯ªƒ": "স্রূ",
    "Z¡": "ত্ব", "Û": "ন্ড", "š¿": "ন্ত্র", "z©": "র্ু", "y¨": "্যু", "©…": "র্ৃ", "z©": "র্ু", "‚©": "র্ূ", "•ÿ": "ঙ্ক্ষ",
    "b¦": "ন্ব", "¯cø": "স্প্ল", "¨~": "্যূ", "z¨": "্যু", "‚¨": "্যূ", "Kz©¨": "র্ক্যু", "K‚©¨": "র্ক্যূ", "¯‘": "স্তু",
    "¯¿": "স্ত্র", "vu": "াঁ", "œ": "্ন", "¼Í": "ঙ্ক্ত", "uv": "াঁ", "›Uª": "ন্ট্র", "n«": "হ্র", "š‘": "ন্তু", "Z…": "তৃ",
    "K…": "কৃ", "P‚": "চূ", "f‚": "ভূ", "iƒ": "রূ", "¦": "্ব", "›U": "ন্ট", "«": "্র", "…": "ৃ", "‚": "ূ", "æ": "ু",
    "Ý": "ন্স", "š^": "ন্ব", "MÖƒ": "গ্রূ", "cÖƒ": "প্রূ", "eªƒ": "ব্রূ", "kÖƒ": "শ্রূ", "_¦": "থ্ব", "˜M": "দ্গ",
    "˜N": "দ্ঘ", "$": "৳", "K¥": "ক্ম", "O¥": "ঙ্্ম", "”T": "চ্ঞ", "Y&X": "ণ্ঢ", "Y¥": "ণ্ম", "Zø": "ত্ল", "Îƒ": "ত্রূ",
    "_ø": "থ্ল", "™£": "দ্ভ্র", "Ú": "ন্ঠ", "šÍ¦": "ন্ত্ব", "fø": "ভ্ল", "¤£": "ম্ভ্র", "î": "ল্ফ", "ñ": "শ্ছ", "®Œ": "ষ্ক্র",
    "¯Œ": "স্ক্র", "—M": "ড়্গ", "aªƒ": "ধ্রূ", "¯úø": "স্প্ল", "¤úø": "ম্প্ল", "•g": "ঙ্্ম", "mø": "স্ল", "¯": "্স", 
    "Zz¨": "ত্যু", "¨~": "্যূ", "o–": "ড়ু", "›Ø": "ন্দ্ব",
};

const manualAnsiReplacements_Fixer = {
    "GZ‡": "G‡Z", "‡ga¨": "g‡a¨", "P&P": "”P", "¨y": "y¨", "©„": "©…", "—": "-", "¯’": "¯’", "”Q": "”Q", "+‡": "+†",
    "+‰": "+ˆ", "vu": "uv", "xu": "ux", "Šu": "uŠ", "`¨y": "`y¨", "Ô‡": "Ô†", "Ò‡": "Ò†", "-‡": "-†", "(‡": "(†",
    "Ô‰": "Ôˆ", "Ò‰": "Òˆ", "-‰": "-ˆ", "(‰": "ˆ", "¶y": "ÿz", "ww¯’Z": "w¯’wZ", "cz©": "c©y", "‡‡": "‡", "††": "†",
    "‰‰": "‰", "ˆˆ": "ˆ", "yy": "y", "~~": "~", "©©": "©", "„„": "„", "&&": "&", "ªª": "ª", "ŠŠ": "Š", "/‡": "/†",
    "/‰": "(ˆ", "=‡": "=†", "=‰": "=ˆ", "[‡": "[†", "[‰": "[ˆ", "{‡": "{†", "{‰": "{ˆ", " ‡": " †", " ‰": " ˆ",
    "&;": "Ê", "&|": "\\", "&~": "E", "&„": "F", "&‡": "G", "&‰": "H", "&b": "œ", "&e": "¦", "&g": "¥", "&I": "I",
    "&I&h": "I¨", "&I&i": "Iª", "&j": "ø", "&Ô": "“", "&Š": "J", "&v": "Av", "&w": "B", "&x": "C", "&y": "D",
    "&Z": "Í", "(A)i": "(A)i", "_&_": "Ì", "_&e": "_¡", "_&h": "_¨", "_&i": "_ª", "_ª": "_ª", "_u_": "Ì",
    "`&`": "Ï", "`&a": "×", "`&e": "Ø", "`&f": "™¢", "`&g": "Ù", "`&h": "`¨", "`&i": "`ª", "`&M": "˜M", "`&N": "˜N",
    "`ª": "`ª", "`ª~": "`ªƒ", "`ªy": "`ªæ", "¯’~": "¯’‚", "¯’„": "¯’…", "¯’y": "¯’z", "¯‹&i": "¯Œ", "¯‹&iæ": "¯Œz",
    "¯‹&j": "¯‹¬", "¯‹~": "¯‹‚", "¯‹„": "¯‹…", "¯‹¬y": "¯‹¬z", "¯‹ª": "¯Œ", "¯‹y": "¯‹z", "¯Í&e": "¯Í¡", "¯Í&i": "¯¿",
    "¯Í~": "¯Í‚", "¯Í„": "¯Í…", "¯Íª": "¯¿", "¯Íy": "¯‘", "¯Œ~": "¯Œ‚", "¯Œ„": "¯Œ„", "¯Œy": "¯Œz", "¯ú&j": "¯úø",
    "˜M&y": "`&¸", "”P~": "”P‚", "”P„": "”P…", "”Py": "”Pz", "”Q&e": "”Q¡", "”Q~": "”Q‚", "”Q„": "”Q…",
    "”Qª": "”Q«", "”Qy": "”Qz", "”T~": "”T‚", "”T„": "”T…", "”Ty": "”Tz", "›`&e": "›Ø", "›`ª~": "›`ªƒ",
    "›`ªy": "›`ªæ", "›U~": "›U‚", "›U„": "›U…", "›Uy": "›Uz", "¤¢&i": "¤£", "¤¢ª": "¤£", "¤ú&i": "¤úª",
    "¤ú&j": "¤úø", "±~": "±‚", "±„": "±…", "±y": "±z", "»~": "»‚", "»„": "»…", "»y": "»z", "×~": "×‚",
    "×„": "×…", "×y": "×z", "÷~": "÷‚", "÷„": "÷…", "÷y": "÷z", "®‹~": "®‹‚", "®‹„": "®‹…", "®‹ª": "®Œ",
    "®‹y": "®‹z", "®Œ~": "®Œ‚", "®Œ„": "®Œ„", "®Œy": "®Œz", "®úª": "®úÖ", "®úª~": "®úÖƒ", "®úªy": "®úÖæ",
    "°~": "°‚", "°„": "°…", "°y": "°z", "µ~": "µ‚", "µ„": "µ…", "µy": "µz", "•ÿ~": "•ÿ‚", "•ÿ„": "•ÿ…",
    "•ÿy": "•ÿz", "¼&l": "•ÿ", "¼~": "¼‚", "¼„": "¼…", "¼«~": "¼«‚", "¼«„": "¼«…", "¼«y": "¼«z", "¼ª": "¼«",
    "¼y": "¼z", "¾&e": "¾¡", "³~": "³‚", "³„": "³…", "³ª": "³«", "³y": "³z", "a&e": "aŸ", "a&g": "a¥", "a&h": "a¨",
    "A&h": "A¨", "a&i": "aª", "A&i": "Aª", "Á~": "Á‚", "À~": "À‚", "ä~": "ä‚", "Ã~": "Ã‚", "å~": "åƒ", "Â‚": "Â‚",
    "Á„": "Á…", "À„": "À…", "ä„": "ä…", "Ã„": "Ã…", "Â…": "Â…", "aª": "aª", "Aª": "Aª", "aª~": "aªƒ", "aªy": "aªæ",
    "Æ~": "Æ‚", "Æ„": "Æ…", "Æy": "Æz", "Av&h": "Av¨", "Av&i": "Avª", "Avª": "Avª", "Áy": "Áz", "Ây": "Âz",
    "äy": "äz", "Ãy": "Ãz", "åy": "åæ", "Àz": "Àz", "b&_": "š’", "b&`": "›`", "b&a": "Ü", "b&b": "bœ", "b&e": "š^",
    "b&g": "b¥", "b&h": "b¨", "B&h": "B¨", "b&i": "bª", "B&i": "Bª", "b&m": "Ý", "b&U": "›U", "b&V": "Ú", "b&W": "Û",
    "b&Z": "šÍ", "b&Z&i": "š¿", "b&Zª": "š¿", "bª": "bª", "Bª": "Bª", "c&b": "cœ", "c&c": "à", "c&h": "c¨",
    "C&h": "C¨", "c&i": "cÖ", "C&i": "Cª", "c&j": "cø", "c&m": "á", "c&U": "Þ", "c&Z": "ß", "ç~": "ç‚", "Ç~": "Ç‚",
    "ç„": "ç…", "Ç„": "Ç…", "cª": "cÖ", "Cª": "Cª", "cª~": "cÖƒ", "cªy": "cÖæ", "cÖ~": "cÖƒ", "cÖy": "cÖæ", "çy": "çz",
    "Çy": "Çz", "d&h": "d¨", "d&i": "d«", "D&i": "Dª", "d&j": "d¬", "d~": "d‚", "ð~": "ð‚", "Ð~": "Ð‚", "d„": "d…",
    "ð„": "ð…", "Ð„": "Ð…", "d«~": "d«‚", "d«„": "d«…", "d«y": "d«z", "d¬~": "d¬‚", "d¬„": "d¬„", "d¬y": "d¬z",
    "dª": "d«", "dy": "dz", "ðy": "ðz", "Ðy": "Ðz", "e&`": "ã", "e&a": "ä", "e&e": "eŸ", "Ë&e": "Ë¡", "e&h": "e¨",
    "e&i": "eª", "E&i": "Eª", "e&j": "eø", "e&R": "â", "é~": "é‚", "É~": "É‚", "È~": "È‚", "ë~": "ë‚", "Ë~": "Ë‚",
    "é„": "é…", "É„": "É…", "È„": "È…", "ë„": "ë…", "Ë„": "Ë…", "eª": "eª", "eª~": "eªƒ", "eªy": "eªæ", "éy": "éz",
    "Éy": "Éz", "Èy": "Èz", "ëy": "ëz", "Ëy": "Ëz", "f&h": "f¨", "F&h": "F¨", "f&i": "å", "F&i": "Fª", "f&j": "fø",
    "f~": "f‚", "f„": "f…", "fª": "å", "Fª": "Fª", "fª~": "åƒ", "fªy": "åæ", "fy": "fz", "g&b": "¤œ", "g&c": "¤ú",
    "g&d": "ç", "g&e": "¤^", "g&f": "¤¢", "g&f&i": "¤£", "g&fª": "¤£", "g&g": "¤§", "g&h": "g¨", "G&h": "G¨",
    "g&i": "¤ª", "G&i": "Î", "g&j": "¤ø", "gª": "¤ª", "Gª": "Gª", "h&h": "h¨", "H&h": "H¨", "h&i": "hª", "H&i": "Hª",
    "hª": "hª", "Hª": "Hª", "i&&I": "I©", "i&_": "_©", "i&`": "`©", "i&a": "a©", "i&A": "A©", "i&Av": "Av©", "i&b": "b©",
    "i&B": "B©", "i&c": "c©", "i&C": "C©", "i&d": "d©", "i&D": "D©", "i&e": "e©", "i&E": "E©", "i&f": "f©", "i&F": "F©",
    "i&g": "g©", "i&G": "G©", "i&h": "h©", "i&H": "H©", "i&i": "iª", "i&I": "I©", "I&i": "Iª", "i&j": "j©", "i&J": "J©",
    "i&k": "k©", "i&K": "K©", "i&l": "l©", "i&L": "L©", "i&m": "m©", "i&M": "M©", "i&n": "n©", "i&N": "N©", "i&o": "o©",
    "i&O": "O©", "i&p": "p©", "i&P": "P©", "i&q": "q©", "i&Q": "Q©", "i&R": "R©", "i&S": "S©", "i&T": "T©", "i&U": "U©",
    "i&V": "V©", "i&W": "W©", "i&X": "X©", "i&Y": "Y©", "i&Z": "Z©", "i~": "iƒ", "î~": "î~", "Î~": "Îƒ", "î„": "î…",
    "iª": "iª", "Iª": "Iª", "îª": "î«", "iy": "iæ", "îy": "îz", "Îy": "Îæ", "j&c": "í", "j&d": "î", "j&d&i": "î«",
    "j&dª": "î«", "j&e": "j¦", "j&g": "j¥", "j&h": "j¨", "J&h": "J¨", "j&i": "jª", "j&j": "jø", "j&K": "é", "j&M": "ê",
    "j&U": "ë", "j&W": "ì", "jª": "jª", "Jª": "Jª", "k&b": "kœ", "K&b": "Kè", "k&e": "k¦", "K&e": "K¡", "k&g": "k¥",
    "K&g": "´", "k&h": "k¨", "K&h": "K¨", "k&i": "kÖ", "K&i": "µ", "K&j": "K¬", "K&K": "°", "K&l": "ÿ", "K&m": "·",
    "k&P": "ð", "k&Q": "ñ", "K&U": "±", "K&Z": "³", "K&Zª": "³«", "K~": "K‚", "K„": "K…", "K¬~": "K¬‚", "K¬„": "K¬…",
    "K¬y": "K¬z", "kª": "kÖ", "Kª": "µ", "kª~": "kÖƒ", "Kª~": "µ’", "kªy": "kÖæ", "Kªy": "µ", "Kè~": "Kè‚", "Kè„": "Kè…",
    "Kèy": "Kèz", "kÖ~": "kÖƒ", "kÖy": "kÖæ", "ky": "ï", "Ky": "Kz", "l&c": "®ú", "l&d": "õ", "l&g": "®§", "l&h": "l¨",
    "L&h": "L¨", "l&i": "lª", "L&i": "Lª", "l&K": "®‹", "l&U": "ó", "l&V": "ô", "l&Y": "ò", "lª": "lª", "Lª": "Lª",
    "Lª~": "Lªƒ", "Lªy": "Lªæ", "m&_": "¯’", "M&`": "º", "M&a": "»", "m&b": "¯œ", "M&b": "Mœ", "m&c": "¯ú", "m&d": "ù",
    "m&e": "¯^", "M&e": "M¦", "m&g": "¯§", "M&g": "M¥", "m&h": "m¨", "M&h": "M¨", "m&i": "¯ª", "M&i": "MÖ", "m&j": "¯ø",
    "M&j": "Mø", "m&K": "¯‹", "m&K&i": "¯Œ", "m&K&iy": "¯Œz", "m&Kª": "¯Œ", "m&Kªy": "¯Œz", "m&L": "ö", "m&U": "÷",
    "m&Z": "¯Í", "mª": "¯ª", "Mª": "MÖ", "Mª~": "MÖƒ", "Mªy": "MÖæ", "MÖ~": "MÖƒ", "MÖy": "MÖæ", "My": "¸", "n&b": "ý",
    "N&b": "Nœ", "n&e": "nŸ", "n&e2": "n¡", "n&g": "þ", "n&h": "n¨", "N&h": "N¨", "n&i": "n«", "N&i": "Nª", "n&j": "n¬",
    "n&Y": "nè", "ñ~": "ñ‚", "n„": "ü", "ñ„": "ñ…", "nª": "n«", "Nª": "Nª", "Nª~": "Nªƒ", "Nªy": "Nªæ", "ny": "û",
    "ñy": "ñz", "O&g": "•g", "o&h": "o¨", "O&h": "O¨", "o&i": "oª", "O&i": "Oª", "O&K": "¼", "O&L": "•L", "o&M": "—M",
    "O&M": "½", "O&N": "•N", "O~": "O‚", "ó~": "ó‚", "ò~": "ò‚", "ô~": "ô‚", "õ~": "õ‚", "O„": "O…", "ó„": "ó…",
    "ò„": "ò…", "ô„": "ô…", "õ„": "õ…", "oª": "oª", "Oª": "Oª", "oy": "o–", "Oy": "Oz", "óy": "óz", "òy": "òz",
    "ôy": "ôz", "õy": "õz", "p&h": "p¨", "P&h": "P¨", "p&i": "pª", "P&i": "Pª", "P&P": "”P", "P&Q": "”Q", "P&T": "”T",
    "P~": "P‚", "P„": "P…", "pª": "pª", "Pª": "Pª", "Puv": "Pvu", "Py": "Pz", "q&h": "q¨", "Q&h": "Q¨", "q&i": "qª",
    "Q&i": "Q«", "Q~": "Q‚", "Q„": "Q…", "qª": "qª", "Qª": "Q«", "Qy": "Qz", "R&e": "R¡", "R&h": "R¨", "R&i": "Rª",
    "R&R": "¾", "R&S": "À", "R&T": "Á", "Rª": "Rª", "rª\t": "rª", "S&h": "S¨", "S&i": "Sª", "S~": "S‚", "š’~": "š’‚",
    "š’„": "š’…", "š’y": "š’z", "S„": "S…", "sª": "sª", "Sª": "Sª", "šÍ&i": "š¿", "šÍ~": "šÍ‚", "šÍ„": "šÍ…", "šÍª": "š¿",
    "šÍy": "š‘", "ß~": "ß‚", "ß„": "ß…", "ßy": "ßz", "Sy": "Sz", "T&h": "T¨", "T&i": "Tª", "T&P": "Â", "T&Q": "Ã",
    "T&R": "Ä", "T&S": "Å", "T~": "T‚", "T„": "T…", "tª": "tª", "Tª": "Tª", "þ~": "þ~", "Þ~": "Þ‚", "þ„": "þ„",
    "Þ„": "Þ…", "þy": "þz", "Þy": "Þz", "Ty": "Tz", "™¢~": "™¢‚", "™¢„": "™¢…", "™¢ª": "™£", "™¢y": "™¢z", "™£~": "™£ƒ",
    "™£y": "™£æ", "U&e": "U¡", "U&g": "U¥", "U&h": "U¨", "U&i": "Uª", "U&U": "Æ", "U~": "U‚", "Ú~": "Ú‚", "ù~": "ù‚",
    "Û~": "Û‚", "Ü~": "Ü‚", "U„": "U…", "Ú„": "Ú…", "ù„": "ù…", "Û„": "Û…", "Ü„": "Ü…", "ù«~": "ù«‚", "Ü«~": "Ü«‚",
    "Ü«„": "Ü«…", "ù«y": "ù«z", "Ü«y": "Ü«z", "Uª": "Uª", "ùª": "ù«", "Üª": "Ü«", "uŠ": "Šu", "ux": "xu", "uy": "yu",
    "Uy": "Uz", "Úy": "Úz", "ùy": "ùz", "Ûy": "Ûz", "Üy": "Üz", "V&h": "V¨", "V&i": "Vª", "V~": "V‚", "V„": "V…",
    "Vª": "Vª", "Vy": "Vz", "W&h": "W¨", "W&i": "Wª", "W&W": "Ç", "W~": "W‚", "W„": "W…", "Wª": "Wª", "Wy": "Wz",
    "X&h": "X¨", "X&i": "Xª", "X~": "X‚", "X„": "X…", "Xª": "Xª", "Xy": "Xz", "Y&b": "Yœ", "ÿ&b": "ÿè", "Y&e": "Y¦",
    "ÿ&g": "²", "Y&h": "Y¨", "Y&i": "Yª", "Y&U": "È", "Y&V": "É", "Y&W": "Ð", "ÿ~": "ÿ‚", "ÿ„": "ÿ…", "Yª": "Yª",
    "ÿè~": "ÿè‚", "ÿè„": "ÿè…", "ÿèy": "ÿèz", "ÿy": "ÿz", "Z&_": "Ì", "Z&b": "Zœ", "Z&e": "Z¡", "Z&g": "Z¥", "Z&h": "Z¨",
    "Z&i": "Î", "Z&Z": "Ë", "Z~": "Z‚", "Z„": "Z…", "Zª": "Î", "Zª~": "Îƒ", "Zªy": "Îæ", "Zy": "Zz",
};

const manualUnicodeReplacements = {
    "র্তু্য": "র্ত্যু", "র্তূ্য": "র্ত্যূ", "র্ভূ্য": "র্ভ্যূ", "র্ভু্য": "র্ভ্যু",
};




// দীর্ঘতম থেকে ছোট ক্রমে কীগুলি সাজান
const sortedUnicodeKeys = Object.keys(unicodeToBijoyMap).sort((a, b) => b.length - a.length);
const sortedBijoyKeys = Object.keys(bijoyToUnicodeMap).sort((a, b) => b.length - a.length);

// কিছু ধ্রুবক
const bengaliConsonants = 'কখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহড়ঢ়য়';
const unicodeIkar = '\u09BF'; 
const unicodeEkar = '\u09C7';
const unicodeOikar = '\u09C8';
const unicodeOkar = '\u09CB';
const unicodeOukar = '\u09CC';
const unicodeAkar = '\u09BE';
const unicodeOuKarPart2 = '\u09D7';
const unicodeHasanta = '\u09CD';
const unicodeRefChar = '\u09B0\u09CD'; 
const unicodeJaPhala = '\u09CD\u09AF';
const unicodeRaPhala = '\u09CD\u09B0';


// ====================================================================
// ২. কোর রূপান্তর ফাংশন
// ====================================================================

function convertUnicodeToBijoy(unicodeInput) {
    let text = unicodeInput;
    // ... (convertUnicodeToBijoy এর সম্পূর্ণ লজিক) ...
    
    // ধাপ ১: ও-কার এবং ঔ-কারকে তাদের উপাদান অংশে বিভক্ত করুন
    const consonantOrConjunct = `(?:(?:[${bengaliConsonants}]${unicodeHasanta})+[${bengaliConsonants}]|[${bengaliConsonants}])`;
    const o_ou_kar_regex = new RegExp(`(${consonantOrConjunct})(${unicodeOkar}|${unicodeOukar})`, 'g');
    text = text.replace(o_ou_kar_regex, (match, base, vowelSign) => {
        if (vowelSign === unicodeOkar) return base + unicodeEkar + unicodeAkar;
        if (vowelSign === unicodeOukar) return base + unicodeEkar + unicodeOuKarPart2;
        return match;
    });

    // ধাপ ২: কার-চিহ্ন (ি, ে, ৈ) আগে আনুন
    const precedingVowelRegex = new RegExp(`(${unicodeRefChar})?(${consonantOrConjunct})((?:${unicodeJaPhala}|${unicodeRaPhala})?)(${unicodeIkar}|${unicodeEkar}|${unicodeOikar})`, 'g');
    text = text.replace(precedingVowelRegex, (match, reph, base, phala, vowel) => {
        return vowel + (reph || '') + base + (phala || '');
    });
            
    // ধাপ ৩: মূল কনভার্সন লুপ
    let bijoyOutput = '';
    let k = 0;
    while (k < text.length) {
        let foundMatch = false;

        if (text.substring(k, k + 2) === unicodeRefChar) {
            let baseCluster = '';
            let clusterLen = 0;
            for (const key of sortedUnicodeKeys) {
                if (key.length > 0 && text.substring(k + 2, k + 2 + key.length) === key) {
                    baseCluster = key;
                    clusterLen = key.length;
                    break;
                }
            }
            
            if (clusterLen > 0) {
                bijoyOutput += unicodeToBijoyMap[baseCluster] + '©';
                k += 2 + clusterLen;
                foundMatch = true;
            }
        }

        if (!foundMatch) {
            for (const key of sortedUnicodeKeys) {
                if (key.length > 0 && text.substring(k, k + key.length) === key) {
                    bijoyOutput += unicodeToBijoyMap[key];
                    k += key.length;
                    foundMatch = true;
                    break;
                }
            }
        }

        if (!foundMatch) {
            bijoyOutput += text[k];
            k++;
        }
    }

    // ধাপ ৪: ম্যানুয়াল আনসি রিপ্লেসমেন্ট প্রয়োগ
    for (const [wrong, correct] of Object.entries(manualAnsiReplacements_Fixer)) {
        if (wrong) {
            const regex = new RegExp(wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            bijoyOutput = bijoyOutput.replace(regex, correct);
        }
    }
    
    // ধাপ ৫: বিশেষ কেস হ্যান্ডলিং (লাইনের শুরু এবং দাড়ির পর)
    bijoyOutput = bijoyOutput.replace(/(^|\s|\|)‡/gm, '$1†');
    bijoyOutput = bijoyOutput.replace(/(^|\s|\|)‰/gm, '$1ˆ');

    return bijoyOutput;
}


function convertBijoyToUnicode(bijoyInput) {
    let text = bijoyInput;
    // ... (convertBijoyToUnicode এর সম্পূর্ণ লজিক) ...

    // ধাপ ১: বিজয় থেকে ইউনিকোড ম্যাপিং
    let unicodeOutput = '';
    let i = 0;
    while (i < text.length) {
        let foundMatch = false;
        for (const key of sortedBijoyKeys) {
            if (text.substring(i, i + key.length) === key) {
                unicodeOutput += bijoyToUnicodeMap[key];
                i += key.length;
                foundMatch = true;
                break;
            }
        }
        if (!foundMatch) {
            unicodeOutput += text[i];
            i++;
        }
    }

    // --- ধাপ ২: ইউনিকোড ডোমেইনে পুনঃক্রম এবং সংমিশ্রণ (পোস্ট-প্রসেসিং) ---

    const unicodeIkar = '\u09BF';
    const unicodeEkar = '\u09C7';
    const unicodeOikar = '\u09C8';
    const unicodeConsonants = '\\u0995-\\u09B9\\u09DC-\\u09DF';
    const unicodeHasanta = '\u09CD';
    const unicodeRef = '\\u09B0' + unicodeHasanta;
    const unicodeVowelSigns = '[\\u09BE-\\u09C4\\u09C7-\\u09C8\\u09CB-\\u09CC\\u09D7]';
    const consonantCluster = `(?:[${unicodeConsonants}](?:${unicodeHasanta}[${unicodeConsonants}])*)`;
    
    // ধাপ ২.১: রেফ (র্) পুনঃক্রম করুন
    const fullClusterWithVowel = `(${consonantCluster}(?:${unicodeVowelSigns})?)`;
    const robustRephReorder = new RegExp(`${fullClusterWithVowel}(${unicodeRef})`, 'g');
    unicodeOutput = unicodeOutput.replace(robustRephReorder, '$2$1');

    // ধাপ ২.২: প্রি-সিডিং কার-চিহ্ন (ি, ে, ৈ) সঠিক স্থানে আনুন 
    const consonantClusterPattern = `(?:${unicodeRef})?(?:[${unicodeConsonants}](?:${unicodeHasanta}[${unicodeConsonants}])*)`;
    const reorderRegex = new RegExp(`([${unicodeIkar}${unicodeEkar}${unicodeOikar}])(${consonantClusterPattern})`, 'g');
    unicodeOutput = unicodeOutput.replace(reorderRegex, '$2$1');

    // ধাপ ২.৩: ও-কার এবং ঔ-কার গঠন করুন
    const unicodeAkar = '\u09BE';
    const unicodeOkar = '\u09CB';
    unicodeOutput = unicodeOutput.replace(new RegExp(`(${unicodeEkar})(${unicodeAkar})`, 'g'), unicodeOkar);

    const unicodeOuKarPart2 = '\u09D7';
    const unicodeOukar = '\u09CC';
    unicodeOutput = unicodeOutput.replace(new RegExp(`(${unicodeEkar})(${unicodeOuKarPart2})`, 'g'), unicodeOukar);

    // ধাপ ৩: ম্যানুয়াল ইউনিকোড রিপ্লেসমেন্ট প্রয়োগ
    for (const [wrong, correct] of Object.entries(manualUnicodeReplacements)) {
        if (wrong) {
            const regex = new RegExp(wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            unicodeOutput = unicodeOutput.replace(regex, correct);
        }
    }

    return unicodeOutput;
}


function fixBrokenBijoy(bijoyInput) {
    let textToFix = bijoyInput;
    // ... (fixBrokenBijoy এর সম্পূর্ণ লজিক) ...

    // ধাপ ১: ভুল ইউনিকোড অক্ষরগুলিকে তাদের আনসি সমতুল্য দিয়ে প্রতিস্থাপন করুন।
    for (const key of sortedUnicodeKeys) {
        if (key.length > 0 && textToFix.includes(key)) {
            const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            textToFix = textToFix.replace(regex, unicodeToBijoyMap[key]);
        }
    }

    // ধাপ ২: ম্যানুয়াল আনসি রিপ্লেসমেন্ট ম্যাপ প্রয়োগ করুন
    for (const [wrong, correct] of Object.entries(manualAnsiReplacements_Fixer)) {
        if (wrong) {
            const regex = new RegExp(wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            textToFix = textToFix.replace(regex, correct);
        }
    }
    
    // ধাপ ৩: বিশেষ কেস হ্যান্ডলিং
    textToFix = textToFix.replace(/(^|\s|\|)‡/gm, '$1†');
    textToFix = textToFix.replace(/(^|\s|\|)‰/gm, '$1ˆ');

    return textToFix;
}


// ====================================================================
// ৩. Office.js ইন্টারেকশন এবং টেবিল হ্যান্ডলিং (উন্নত)
// ====================================================================

Office.onReady(function(info) {
    if (info.host === Office.HostType.Word) {
        document.getElementById('btnUnicodeToBijoy').onclick = () => runConversion(convertUnicodeToBijoy, "ইউনিকোড → বিজয়");
        document.getElementById('btnBijoyToUnicode').onclick = () => runConversion(convertBijoyToUnicode, "বিজয় → ইউনিকোড");
        document.getElementById('btnFixBijoy').onclick = () => runConversion(fixBrokenBijoy, "ভাঙ্গা বিজয় ফিক্স");
        
        // প্রাথমিক বাটন সক্রিয়করণ (HTML এ disabled থাকলে)
        document.getElementById('btnUnicodeToBijoy').disabled = false;
        document.getElementById('btnBijoyToUnicode').disabled = false;
        document.getElementById('btnFixBijoy').disabled = false;
    }
});

/**
 * নির্বাচিত Word ডকুমেন্ট অংশ বা সম্পূর্ণ ডকুমেন্টকে রূপান্তর করে।
 * @param {function} conversionFunction - রূপান্তর ফাংশন।
 * @param {string} operationName - অপারেশনটির নাম (মেসেজের জন্য)।
 * @param {boolean} entireDocument - পুরো ডকুমেন্ট রূপান্তর করতে হবে কিনা। (বর্তমানে অপ্রয়োজনীয়)
 */
async function runConversion(conversionFunction, operationName, entireDocument = false) {
    let messageEl = document.getElementById('message');
    messageEl.style.color = '#3B82F6';
    messageEl.innerText = `${operationName} রূপান্তর চলছে...`;
    
    // বাটন নিষ্ক্রিয় করুন
    document.getElementById('btnUnicodeToBijoy').disabled = true;
    document.getElementById('btnBijoyToUnicode').disabled = true;
    document.getElementById('btnFixBijoy').disabled = true;

    try {
        await Word.run(async (context) => {
            // পুরো ডকুমেন্ট রূপান্তর করার জন্য
            const rangeToConvert = entireDocument ? context.document.body : context.document.getSelection();
            
            // নির্বাচিত রেঞ্জটি লোড করে এটি টেবিলের অংশ কিনা, বা নিজেই টেবিল কিনা তা পরীক্ষা করুন।
            rangeToConvert.load("tables, parentTableOrNullObject, parentContentControlOrNullObject, text");
            await context.sync();
            
            // 1. যদি সিলেকশনটি টেবিল বা টেবিল সেলের অংশ হয়
            if (rangeToConvert.tables.items.length > 0 || rangeToConvert.parentTableOrNullObject.isNullObject === false) {
                await processTableContents(context, rangeToConvert, conversionFunction);
            } 
            // 2. যদি সিলেকশনটি কন্টেন্ট কন্ট্রোল হয়
            else if (rangeToConvert.parentContentControlOrNullObject.isNullObject === false) {
                 await processSimpleRange(context, rangeToConvert.parentContentControlOrNullObject, conversionFunction);
            }
            // 3. সাধারণ টেক্সট সিলেকশন
            else {
                await processSimpleRange(context, rangeToConvert, conversionFunction);
            }

            messageEl.innerText = `সফলভাবে নির্বাচিত অংশ ${operationName} সম্পন্ন হয়েছে!`;
        });
    } catch (error) {
        messageEl.style.color = 'red';
        messageEl.innerText = `ত্রুটি: রূপান্তর ব্যর্থ হয়েছে। ${error.message}.`;
        console.error("Conversion Error:", error);
    } finally {
        // বাটন আবার সক্রিয় করুন
        document.getElementById('btnUnicodeToBijoy').disabled = false;
        document.getElementById('btnBijoyToUnicode').disabled = false;
        document.getElementById('btnFixBijoy').disabled = false;
        setTimeout(() => document.getElementById('message').innerText = "", 5000);
    }
}

/**
 * টেবিল বা টেবিলের নির্বাচিত অংশ (সেল/রো/কলাম) রূপান্তর করে।
 */
async function processTableContents(context, range, conversionFunction) {
    const isFullSelection = range.tables.items.length > 0;
    
    let table = isFullSelection ? range.tables.items[0] : range.parentTableOrNullObject;
    
    // নির্বাচিত সেলের রেঞ্জটি নিতে হবে, বিশেষত যখন একাধিক সেল বা রো সিলেক্ট করা হয়
    const selectedCells = range.cellsOrNullObject;
    
    if (selectedCells && selectedCells.isNullObject === false) {
        selectedCells.load("items");
        await context.sync();
        
        const cellsToConvert = selectedCells.items;
        if (cellsToConvert.length === 0) {
            // যদি নির্বাচিত এলাকাটি একটি খালি টেবিল সেল হয়, তবে পুরো সেলের টেক্সট নিন
            const parentCell = range.parentTableCellOrNullObject;
            if(parentCell.isNullObject === false){
                parentCell.load("text");
                await context.sync();
                const convertedText = conversionFunction(parentCell.text.trim());
                parentCell.insertText(convertedText, Word.InsertLocation.replace);
            }
        } else {
            // একাধিক সেল/রো সিলেক্ট করা হয়েছে
            for (const cell of cellsToConvert) {
                cell.load("text");
                await context.sync();
                const convertedText = conversionFunction(cell.text.trim());
                cell.insertText(convertedText, Word.InsertLocation.replace);
            }
        }
    } 
    else if (isFullSelection) {
        // পুরো টেবিল সিলেক্ট করা হয়েছে
        table.load("rows/cells/text");
        await context.sync();
        
        for (const row of table.rows.items) {
            for (const cell of row.cells.items) {
                const convertedText = conversionFunction(cell.text.trim());
                cell.insertText(convertedText, Word.InsertLocation.replace);
            }
        }
    }
    
    await context.sync();
}

/**
 * সাধারণ টেক্সট বা কন্টেন্ট কন্ট্রোল রূপান্তর করে।
 */
async function processSimpleRange(context, range, conversionFunction) {
    range.load("text");
    await context.sync();
    
    const rangeText = range.text;
    const convertedText = conversionFunction(rangeText);
    
    // রূপান্তরিত টেক্সট মূল রেঞ্জে প্রতিস্থাপন করুন
    range.insertText(convertedText, Word.InsertLocation.replace);
    await context.sync();
}