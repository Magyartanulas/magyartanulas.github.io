let chapters = `
ABC + Vowel Harmony$alphabet_vowel-harmony
Phrases$phrases
Verb Intro$verb_intro
This-That & Articles$this_that_articles
Spatial Postpositions$postpositions
Word Building$word_building
Pronouns$pronouns
Counting$counting
Plural + Accusative$accusative_plurals
Definite vs Indefinite$definite_indefinite
Common Adverbs$adverbs
Infinitive Verb Form$infinitive
Negation$negation
Conditional$conditional_mood
Dative + Possession$dative_possession
Interests$interests
Locatives$locatives
Comparisons$comparisons
Coverbs + Telicity$coverbs_telicity
Imperative + Subjunctive$imperative_subjunctive
Noun Case Summary$noun_case_summary
Expressing Need$expressing_need
Word Order (1/2)$word_order
Coverb Separation (2/2)$coverb_separation
`;
chapters=chapters.split('\n');
chapters.pop();
chapters.shift();
let yaml='';
let md='';
for (let i=0;i<chapters.length;i++) {
let elem=chapters[i].split('$');
yaml+=`
- title: ${i+1}. ${elem[0]}
  url: https:/\/magyartanulas.github.io/${elem[1]}/
`;
md+=`${i+1}. ${elem[0]}\n`;
}
console.log(yaml);
console.log(md);
