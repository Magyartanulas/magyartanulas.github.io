let chapters = `
ABC + Vowel Harmony$alphabet_vowel-harmony
Phrases$phrases
Verb Intro$verb_intro
Articles$articles
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
let choice = confirm('OK = links YAML\nCANCEL = chapters in md');
for (let i=0;i<chapters.length;i++) {
let elem=chapters[i].split('$');
if (choice)
document.write(
`//
- title: ${elem[0]}
  url: ${https://github.com/}//
`
);
}
