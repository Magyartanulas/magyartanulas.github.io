---
layout: page
title: Coverbs and Telicity
---

## Coverbs
---

Coverbs are those things that add directionality or modify the meaning of the verb. Coverbs are so important that some of the verbs that use them change completely in meaning.

* You can *write down* some words for someone or *write up* words on the board.
* You can tell someone to *shut up* or *shut down* your computer.
* You can *turn on* your phone or *turn around* to see what's behind you.

This is the same deal with Hungarian so it's important to get these right. Here are some that you've seen in the previous sections as well as some more:

| Coverb | Meaning        |
|--------|----------------|
| fel    | up             |
| le     | down           |
| be     | in             |
| ki     | out            |
| át     | through/across |
| ide    | to here        |
| oda    | to there       |
| rá     | onto           |
| össze  | together       |
| haza   | towards home   |
| vissza | back           |
| el     | away           |

* Hazamegyek a családomhoz. - (I'm going home to my family.)
* Rámutatott a terv hibáira. - (He pointed out the flaws of the plan.)
* Bekapcsoltam a számítógépet, aztán lekapcsolt a villany. - (I turned on the computer, then the power turned off.)
* Soha nem fog felnőni! - (He/She'll never grow up!)
* De miért hoztad ide őt? - (But why did you bring him/her here?)
* A vonatablakból nem szabad kihajolni! - (Leaning out of the train window is not allowed (lit. not unrestricted))

**Special case:** Átláttam a szitán. - (I saw past the ruse)

Even though `át-` means through/across, when the noun has `-n` attached, the meaning changes slightly.

`Challenge!`
![háború](https://magyartanulas.github.io/public/showdown.png)

*A kő legyőzi az ollót! (Original image, merging free images together)*

<span class="spoiler">Rock beats scissors!</span>

## Telicity
---

Telicity (lit. end or goal) is a property of a verb that indicates completion. If a verb is telic, it is goal-oriented.

First, let's see it in English.

* He ran around the block *for* half an hour.
* He ran around the block *in* half an hour.

The first example represents a person running within a general time-frame and realing that they ran for half an hour. The second represents a person with the goal of running around the block in half an hour, he has the goal of completing this within a time limit.

The same kind of deal applies in Hungarian, but to a whole lot more verbs. Typically either `meg-` or `el-` will represent telicity but there are exceptions, naturally. Here are some examples:

### Using `meg-`

* **`eszik, megeszik`**

`Eszik` translates to he/she/it eats. Because this isn't telic, this verb can be used when you are in the process of eating or idly eating. `Megeszik` is telic, so now the goal is on eating *all of it*, used when you finish a meal.

* Mit eszel? - (What are you eating?)
* Megette a répát! - (He/she ate the carrot!)

---

* **`lát, meglát`**

`Lát` translates to he/she/it sees. It isn't telic, so this is used when you *happen* to see or notice something. One can intentionally `néz` something, but not for `lát`. So because of this, when `meg-` is added, it makes the verb *even more* spontaneous, to catch a glimpse or sight of something.

* Nem láttad a híres szobrot? - (Have you (not) seen the famous statue?)
* Meglátott egy rókát az erdőben. - (He/she/it caught sight of a fox in the forest.)

---

* **`beszél, megbeszél`**

`Beszél` translates to he/she/it speaks. Being not telic, this is used when you are speaking in general. `Megbeszél` makes the verb telic and is used when the goal is to speak, this changes the verb from speaks to discuss a topic until completion, *to have a talk*.

* Csss! Anyám telefonon beszél. - (Shhh! Mother's speaking on the phone.)
* Majd ezt megbeszélem vele. - (I'll discuss this with him sometime later.)

---

* **`hív, meghív`**

`Hív` translates to he/she/it calls. It can be used either to contact someone (e.g. via telephone), call someone by name or just call for something in general. `Meghív` now has the purpose of calling, so the meaning changes from calling to *invite*.

* Hívom a rendőrséget. - (I'm calling the police.)
* Kit akarsz meghívni? - (Who do you want to invite?)

### Listening

The `kapitány` and the `rabszolgák` are talking, try to work out what they're saying! From Family guy Season 5, Episode 16

<audio controls><source src="https://magyartanulas.github.io/public/ship.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>

<script type = "text/javascript">

function check_reveal(button) {
    
    var hun = document.getElementById("transcript");
    var eng = document.getElementById("translation");
    var none = document.getElementById("none");
 
    if (button === 'transcript') {
        
        if (hun.style.display === "none" && eng.style.display === "none") {
            none.style.display = "none";
            hun.style.display = "block";
        }else if (hun.style.display === "none" && eng.style.display === "block") {
            none.style.display = "none";
            eng.style.display = "none";
            hun.style.display = "block";
        }
    }else if (button === 'translation')
 
        if (eng.style.display === "none" && hun.style.display === "none") {
            none.style.display = "none";
            eng.style.display = "block";
        }else if (eng.style.display === "none" && hun.style.display === "block") {
            none.style.display = "none";
            hun.style.display = "none";
            eng.style.display = "block";
        }
}

function clearAll() {

    var hun = document.getElementById("transcript");
    var eng = document.getElementById("translation");
    hun.style.display = "none";
    eng.style.display = "none";
    none.style.display = "block";
}

</script>

<span>
<button type="button" onclick="check_reveal('transcript')">Transcript</button>
<button type="button" onclick="check_reveal('translation')">Translation</button>
<button type="button" onclick="clearAll()">Clear</button>
</span>

<div id = "transcript" style ="display:none">
Rabszolga: Ott vagyunk már?<br/>
Kapitány: Nem.<br/>
Rabszolga: Ott vagyunk már?<br/>
Kapitány: Nem!<br/>
Rabszolga: Ott vagyunk már?<br/>
Kapitány: Istenemre mondom megfordítom ezt a hajót!<br/>
Rabszolgák egyszerre: Az jó! Ja. Abból tanulnánk. Bizony lenne bajunk.<br/>
Kapitány: Na jól van, ti akartátok...Na, álljunk csak meg!<br/>
</div>

<div id = "translation" style ="display:none">
Rabszolga: Are we there yet?<br/>
Kapitány: No.<br/>
Rabszolga: Are we there yet?<br/>
Kapitány: No!<br/>
Rabszolga: Are we there yet?<br/>
Kapitány: I swear to God, I will turn this ship around!<br/>
Rabszolgák egyszerre: That's good! Yeah. We would learn from that. We would surely have trouble.<br/>
Kapitány: Well alright, you guys wanted it...Hey hold on!<br/>
</div>

<div id = "none" style ="display:block">
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>

### Using `el-`

* **`olvas, elolvas`**

`Olvas` translates to he/she/it reads. This can be used when you are leisurely reading, but `elolvas` means that the goal is to read the book in its entirety, to *peruse* it.

* Szeretek olvasni fantasy könyveket. - (I like to read fantasy books.)
* Elolvasta három könyvet tegnap éjszaka! - (He/she read three books last night!)

---

* **`megy, elmegy`**

`Megy` is the general verb for he/she/it goes, and is a useful verb for going in general. `Elmegy` can be used with the intention of going, to *leave*.

* Megyünk az állatkertbe. - (We're going to the zoo.)
* Hívj, ha elmentek. - (Call me when they leave.)

---

* **`mesél, elmesél`**

`Mesél` is the verb for when he/she/it tells a story or recounts. Naturally, `elmesél` means that the goal is on telling the story in its entirety.

* Nagypapa éppen mesél egy történet. - (Grandpa is telling a story.)
* Ezek a vésetek egy történetet mesélnek el. - (These carvings tell a story.)

`Challenge!`
![nyelvek](https://magyartanulas.github.io/public/peace.png)

*Aki megtanul egy új nyelvet, megszerez egy új lelket. (Free image by GDJ, fetched from pixabay.com)*

<span class="spoiler">He/she who learns a new language, acquires a new soul.</span>

* Quote in English - Charlemagne, paraphrased.

The topic of telicity is quite hard to wrap the head around, you may want to download this [pdf.](https://www.glossa-journal.org/articles/10.5334/gjgl.52/galley/88/download/) if it helps explain.

You are encouraged to review the previous sections to see more examples of telicity.

---

### Yet to Learn

* The [instrumental case](https://magyartanulas.github.io/noun_case_summary/), as seen in `vele`
* The [imperative and subjunctive form](https://magyartanulas.github.io/imperative_subjunctive/), as seen in `álljunk`
