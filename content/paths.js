/* =========================================================
   BASTION CONTENT

   PATHS -> UNITS -> { teach[], questions[] }

   Every unit starts with teaching cards, then drills.

   Teaching card:
     { h:'Heading', p:'Body text', refs:[['John',6,53,58]] }
     `refs` are RENDERED FROM THE BUNDLED BIBLE at runtime -
     never write verse wording by hand, only the reference.

   Question types:
     objection : an objection is quoted, pick the best response
     recall    : know-your-faith factual recall
     verse     : identify which passage supports a claim
     tf        : true/false with an explanation

   Only the Protestant path is populated. The others are declared
   so the picker and progress model are real, and are marked
   ready:false until their content is written.
   ========================================================= */
window.PATHS = [
{
  id:'protestant',
  name:'Evangelical Protestant',
  icon:'📕',
  blurb:'Sola scriptura, sola fide, Bible-first',
  ready:true,
  units:[

  /* ---------------- UNIT 1 ---------------- */
  {
    id:'scripture', title:'Scripture & Tradition', icon:'📖',
    teach:[
      {h:'The question underneath', p:'Nearly every Catholic-Protestant argument eventually lands here. Not "is the Bible true" - both sides say yes - but "is the Bible ALONE the rule of faith, and who decides what it means?" Settle this and most other disputes follow.'},
      {h:'What sola scriptura claims', p:'Sola scriptura holds that Scripture is the only infallible rule of faith. Tradition and Church authority may be useful, but they are fallible and always answerable to the Bible. It is one of the five solas of the Reformation.'},
      {h:'The first problem: it is self-refuting', p:'If every doctrine must be proven from Scripture alone, then sola scriptura itself must be proven from Scripture alone. But no verse teaches it. This is the single most important move in this unit - do not let it pass quickly.'},
      {h:'The verse they will cite', p:'2 Timothy 3:16-17 is the usual proof-text. Read it carefully: Paul says Scripture is inspired and profitable, and equips the man of God. But "profitable" and "equipping" are not "sufficient by itself." Note also that when Paul wrote this, the New Testament did not yet exist as a collection - the "scripture" Timothy knew from childhood was the Old Testament.', refs:[['II Timothy',3,14,17]]},
      {h:'Scripture points beyond itself', p:'Paul explicitly tells the Thessalonians to hold to what was delivered both by letter AND by word of mouth, treating them as equally binding. This is the clearest single verse against sola scriptura.', refs:[['II Thessalonians',2,15,15]]},
      {h:'The Church is called the pillar of truth', p:'Paul gives that title not to Scripture but to the Church. This does not diminish Scripture - it locates the authority that safeguards and interprets it.', refs:[['I Timothy',3,15,15]]},
      {h:'The canon problem', p:'The Bible contains no inspired table of contents. Nothing inside Scripture tells you which books belong in Scripture. Someone had to discern that - and it was the Church, over centuries, settling the canon in councils at the end of the fourth century. If the Church could get that judgement right, it had real authority. If it could not, you cannot trust your own table of contents.'},
      {h:'Big-T and small-t tradition', p:'Catholics distinguish Sacred Tradition - the apostolic deposit handed on, whether written or oral - from mere customs and disciplines, which can and do change. Protestants often attack the second while Catholics are defending the first. Insist on the distinction early or you will talk past each other.'},
      {h:'Where Jesus rejects tradition', p:'Mark 7 is the strongest counter-text: Jesus condemns traditions that nullify God\'s commandment. Notice what he condemns - human traditions that override God\'s word, not apostolic teaching handed on. The Catholic position agrees with him.', refs:[['Mark',7,6,9]]},
      {h:'Three legs, not two', p:'The Catholic claim is that Scripture, Sacred Tradition, and the Magisterium hold together and none stands alone. Scripture is the written form of the apostolic preaching; Tradition is its living transmission; the Magisterium is the office that guards both. Remove any leg and the stool falls.'},
      {h:'How to argue this', p:'Do not start by defending Tradition. Start by asking them to prove sola scriptura from Scripture. The burden is theirs - it is their formal principle. Only once that is on the table should you present 2 Thessalonians 2:15, 1 Timothy 3:15, and the canon problem.'}
    ],
    questions:[
      {type:'objection', quote:'"The Bible alone is the only authority a Christian needs - sola scriptura."',
        q:'What is the strongest Catholic response?',
        options:[
          'Agree - Scripture alone is sufficient and interprets itself.',
          '2 Thessalonians 2:15 tells believers to hold to traditions taught "either by word of mouth or by letter" - Scripture itself points to an authoritative oral Tradition alongside it.',
          'Tradition is just human opinion and should be ignored.',
          'The Church added books to the Bible, so none of it can be trusted.'],
        correct:1,
        explain:'Sola scriptura is nowhere taught in Scripture itself. St. Paul explicitly commends both written and orally-delivered tradition (2 Thess 2:15).'},
      {type:'tf', q:'Sola scriptura is explicitly taught somewhere in the Bible.', correct:false,
        explain:'No verse states it. This is the self-refutation problem: a doctrine demanding that all doctrine come from Scripture alone cannot itself be found in Scripture alone.'},
      {type:'verse', q:'Which passage calls the Church "the pillar and ground of the truth"?',
        options:['2 Timothy 3:16','1 Timothy 3:15','John 17:17','2 Peter 1:20'],
        correct:1,
        explain:'1 Timothy 3:15. Paul gives this title to the Church, not to Scripture - which does not lower Scripture, but identifies who safeguards it.'},
      {type:'objection', quote:'"2 Timothy 3:16-17 says Scripture makes the man of God complete - that proves sufficiency."',
        q:'What is the best response?',
        options:[
          'Concede the point; the verse does teach sola scriptura.',
          'The verse says Scripture is inspired and profitable for equipping - not that it is the only rule of faith. And the "scripture" Timothy knew from infancy was the Old Testament, since the New Testament was not yet collected.',
          'Deny that 2 Timothy is inspired.',
          'Argue that Paul was mistaken on this point.'],
        correct:1,
        explain:'"Profitable" and "equipping" are not "sufficient alone." Pressed consistently, the verse would prove the Old Testament alone is sufficient - which no Protestant holds.'},
      {type:'recall', q:'What does "Sacred Tradition" mean in Catholic teaching?',
        options:[
          'Any old custom passed down in a parish.',
          'The teaching of Christ and the apostles, handed down (not necessarily in writing) and faithfully preserved and interpreted by the Church across the centuries.',
          'Whatever the pope personally prefers.',
          'Local folk devotions with no doctrinal content.'],
        correct:1,
        explain:'Sacred Tradition is the living transmission of the apostolic deposit of faith - distinct from small "t" traditions like customs or disciplines, which can and do change.'},
      {type:'objection', quote:'"Jesus condemned tradition in Mark 7 - he called it nullifying the word of God."',
        q:'How do you answer?',
        options:[
          'He did, so Catholics should abandon Tradition.',
          'He condemned specific HUMAN traditions that override God\'s commandment - the Corban rule being his example. Catholic teaching condemns exactly the same thing; Sacred Tradition is apostolic, not a human workaround.',
          'Mark 7 is not part of the true Gospel.',
          'Jesus was only speaking to Pharisees, so it has no application today.'],
        correct:1,
        explain:'Read the passage and the target is clear: traditions that void God\'s command. That is not what Sacred Tradition claims to be.'},
      {type:'objection', quote:'"The Bible is the only infallible rule of faith - the Church can and does err."',
        q:'How should a Catholic respond?',
        options:[
          'By admitting the Church has no real authority.',
          'The Bible never lists its own table of contents - it was the Church\'s authority that discerned the canon; 1 Timothy 3:15 calls the Church, not Scripture alone, "the pillar and foundation of truth."',
          'By saying the Old Testament doesn\'t matter.',
          'By avoiding the question entirely.'],
        correct:1,
        explain:'Someone had to authoritatively determine which books belong in the Bible - that was the Church, guided by the Spirit, not a self-evident list within Scripture.'},
      {type:'tf', q:'The Bible contains a list stating which books belong in the Bible.', correct:false,
        explain:'No book of Scripture supplies the canon. It was discerned by the Church, with the list we now use appearing in councils at the end of the fourth century.'},
      {type:'objection', quote:'"Catholics don\'t really read the Bible."',
        q:'What\'s a fair response?',
        options:[
          'That\'s basically true, so there\'s nothing to say.',
          'The Mass itself is saturated with Scripture - readings cycle through most of the Bible over a 3-year Sunday and 2-year weekday lectionary, and Vatican II strongly urged Catholics toward personal Scripture reading.',
          'Catholics only need the Catechism, not the Bible.',
          'Bible reading is a Protestant invention Catholics should avoid.'],
        correct:1,
        explain:'The claim is a common stereotype, but the liturgy and official Church teaching place heavy emphasis on regular exposure to and study of Scripture.'},
      {type:'objection', quote:'"Faith alone" and "Scripture alone" are core biblical phrases.',
        q:'What is true about these exact phrases in the Bible?',
        options:[
          'Both phrases appear word-for-word multiple times.',
          'Neither phrase appears anywhere in Scripture - in fact James 2:24 explicitly states "a person is justified by works and not by faith alone."',
          'Only "faith alone" appears, not "scripture alone."',
          'They appear only in the Old Testament.'],
        correct:1,
        explain:'James 2:24 is the only verse in the Bible that uses the phrase "faith alone" - and it explicitly denies it as sufficient by itself.'},
      {type:'verse', q:'Which passage tells believers to hold traditions delivered "by word of mouth, or our epistle"?',
        options:['Romans 8:28','2 Thessalonians 2:15','1 Corinthians 13:4','Philippians 4:6'],
        correct:1,
        explain:'2 Thessalonians 2:15 - the clearest single verse placing oral apostolic teaching alongside written.'},
      {type:'recall', q:'What are the three elements Catholic teaching holds together as the rule of faith?',
        options:[
          'Scripture, reason, and personal experience.',
          'Sacred Scripture, Sacred Tradition, and the Magisterium - none of which stands alone.',
          'The pope, the cardinals, and the bishops.',
          'The Bible, the Catechism, and canon law.'],
        correct:1,
        explain:'Scripture is the written apostolic preaching, Tradition its living transmission, the Magisterium the office guarding both. Remove one and the structure fails.'},
      {type:'tf', q:'In a debate over sola scriptura, the burden of proof is on the Protestant.', correct:true,
        explain:'It is their formal principle. Asking them to establish it from Scripture alone is the strongest opening move - and it is a fair demand on their own terms.'},
      {type:'objection', quote:'"Church councils just invented the canon centuries later to suit themselves."',
        q:'What is the measured response?',
        options:[
          'Agree that the canon is arbitrary.',
          'The councils recognised rather than invented - they ratified books already in widespread liturgical use. But the point stands that a judgement was required, and the Church made it. If that judgement was reliable, the Church had genuine authority.',
          'The canon was fixed by the apostles in writing.',
          'The canon question is unimportant.'],
        correct:1,
        explain:'"Recognised, not invented" is the accurate framing - and it still leaves the Protestant needing to explain why they trust that judgement while denying the authority behind it.'},
      {type:'recall', q:'Why is the canon argument effective against sola scriptura?',
        options:[
          'Because it proves the Bible is unreliable.',
          'Because accepting the canon means trusting a judgement Scripture itself does not supply - so the Protestant already relies on Church authority while denying it.',
          'Because it shows the deuterocanon is inspired.',
          'Because councils are infallible in all matters.'],
        correct:1,
        explain:'The argument is not that Scripture is untrustworthy. It is that the Protestant is standing on an authority he refuses to acknowledge.'}
    ]
  },

  /* ---------------- UNIT 2 ---------------- */
  {
    id:'faith-works', title:'Faith & Works', icon:'⚖️',
    teach:[
      {h:'What is actually disputed', p:'Not whether we are saved by grace - Catholics and Protestants both say yes. The dispute is over what justification IS, and whether works have any part in it. Getting this framing right prevents most of the heat.'},
      {h:'What the Church actually teaches', p:'Salvation is a free gift of grace that cannot be earned. Nobody can merit the beginning of salvation. Trent said this explicitly. If your opponent thinks Catholics believe they buy heaven with good deeds, correct that before anything else - you are not defending what they are attacking.'},
      {h:'The one verse with the phrase', p:'James 2:24 is the only place in Scripture where "faith alone" appears - and it denies it. This is not a proof-text trick; it is the plain sense of an extended argument running from verse 14 to 26.', refs:[['James',2,14,26]]},
      {h:'The Protestant answer to James', p:'They will say James means justification before MEN, while Paul means before God. Have your reply ready: James uses Abraham offering Isaac as his example, and says faith was "made perfect" by works. That is not a demonstration to onlookers - Genesis 22 had no audience.'},
      {h:'Reading Ephesians 2 to the end', p:'Ephesians 2:8-9 is their strongest text and Catholics should quote it happily - salvation is grace, not earned. But do not stop at verse 9. Verse 10 says we are created for good works, prepared beforehand. Paul excludes works as a CAUSE of salvation, not as its fruit.', refs:[['Ephesians',2,8,10]]},
      {h:'What "works of the law" means', p:'When Paul excludes "works of the law" in Romans, the context is the Mosaic covenant markers - circumcision especially - that divided Jew from Gentile. He is not condemning love of neighbour. Romans 2 says the doers of the law will be justified, which no reading of Paul can simply delete.', refs:[['Romans',3,27,28]]},
      {h:'Faith working through love', p:'Galatians 5:6 is the synthesis: what counts is faith working through love. Not faith alone, not works alone - living faith that acts. This single verse holds Paul and James together.', refs:[['Galatians',5,6,6]]},
      {h:'Can salvation be lost', p:'Catholic teaching says yes, through unrepented grave sin. Paul feared being disqualified himself, and told the Philippians to work out their salvation with fear and trembling. Neither statement makes sense under absolute eternal security.', refs:[['I Corinthians',9,27,27],['Philippians',2,12,13]]},
      {h:'Imputed versus infused', p:'The technical heart of the dispute. Protestants generally hold that Christ\'s righteousness is imputed - credited to your account while you remain inwardly unchanged. Catholics hold it is infused - actually poured into the soul, really making you righteous. Knowing this distinction lets you name what is being argued instead of trading verses.'},
      {h:'How to argue this', p:'Open by agreeing loudly that salvation is unearned grace. That disarms the caricature and forces the real question: does grace merely cover us, or actually transform us? Then take them to James 2 and Galatians 5:6, and ask what "faith working through love" can mean if works are irrelevant.'}
    ],
    questions:[
      {type:'objection', quote:'"We are saved by faith alone, not works - sola fide."',
        q:'What does James 2:24 say directly on this?',
        options:[
          '"Faith alone saves, apart from any works."',
          '"You see that a person is justified by works and not by faith alone."',
          'James never discusses justification.',
          '"Works alone save, faith is optional."'],
        correct:1,
        explain:'James 2:24 is the most direct biblical rebuttal of "faith alone" as a formula, teaching that living faith and works of love are inseparable.'},
      {type:'tf', q:'The Catholic Church teaches that salvation can be earned by good works.', correct:false,
        explain:'It teaches the opposite. Nobody can merit the beginning of salvation; it is a free gift of grace. Correct this caricature before defending anything else.'},
      {type:'objection', quote:'"Ephesians 2:8-9 says we\'re saved by grace through faith, not works, so it must be faith alone."',
        q:'What\'s the Catholic clarification?',
        options:[
          'The Catholic Church actually denies salvation is a gift of grace.',
          'The Church fully agrees salvation is unearned grace received through faith - the "works" Paul excludes are works attempting to earn salvation on our own apart from grace, not the works of love that flowing faith naturally produces (Gal 5:6).',
          'Ephesians 2:8-9 doesn\'t exist in the Catholic Bible.',
          'Paul is only talking about Old Testament animal sacrifices.'],
        correct:1,
        explain:'Catholic teaching agrees salvation cannot be earned - but distinguishes "dead works" done to merit salvation apart from grace, from the good works that living, grace-filled faith produces.'},
      {type:'verse', q:'Which verse immediately follows Ephesians 2:8-9 and says we are created for good works?',
        options:['Ephesians 2:10','Ephesians 3:1','Galatians 2:16','Romans 6:23'],
        correct:0,
        explain:'Ephesians 2:10. Stopping at verse 9 is the most common misuse of this passage - verse 10 supplies Paul\'s own balance.'},
      {type:'objection', quote:'"James means justification before men - being shown to be righteous, not becoming righteous."',
        q:'What is the strongest counter?',
        options:[
          'Concede; that reading is correct.',
          'James\' example is Abraham offering Isaac - an act with no human audience at all. And he says faith was "made perfect" by works, which is language of completion, not display.',
          'James contradicts Paul and should be ignored.',
          'James was not an apostle.'],
        correct:1,
        explain:'Genesis 22 had no onlookers to be justified before. The "before men" reading cannot carry James\' own chosen example.'},
      {type:'objection', quote:'"Once saved, always saved - salvation can\'t be lost."',
        q:'What does Catholic teaching hold, with Scripture support?',
        options:[
          'Salvation, once received, can never be forfeited under any circumstance.',
          'A believer can fall from grace through serious (mortal) sin - St. Paul himself warns "I discipline my body... lest I myself should be disqualified" (1 Cor 9:27), and urges believers to "work out your salvation with fear and trembling" (Phil 2:12).',
          'Salvation is guaranteed the moment someone is baptized as an infant, regardless of later choices.',
          'The Bible never mentions the possibility of falling away.'],
        correct:1,
        explain:'Multiple NT passages (1 Cor 9:27, Phil 2:12, Hebrews 6:4-6, 10:26-29) warn believers of the real possibility of forfeiting salvation through unrepented serious sin.'},
      {type:'recall', q:'What is the difference between imputed and infused righteousness?',
        options:[
          'They are two words for the same thing.',
          'Imputed means Christ\'s righteousness is credited to your account while you remain inwardly unchanged; infused means grace actually transforms the soul, really making you righteous.',
          'Imputed is Catholic, infused is Protestant.',
          'Infused righteousness means you save yourself.'],
        correct:1,
        explain:'This is the technical core of the whole dispute. Naming it moves the argument from trading verses to the actual question.'},
      {type:'recall', q:'Is faith necessary for salvation according to Catholic teaching?',
        options:[
          'No - works alone save.',
          'Yes - faith is the foundation and beginning of salvation, but it must be a living faith expressed through love and good works, not mere intellectual belief.',
          'Faith is optional for Catholics.',
          'Only faith in the saints, not in Christ, is required.'],
        correct:1,
        explain:'Catholic teaching (echoing James and Paul together) holds faith as essential - but "faith working through love" (Gal 5:6), not faith as bare assent alone.'},
      {type:'objection', quote:'"Romans 3:28 says we are justified by faith apart from works of the law, proving faith alone."',
        q:'What do "works of the law" most directly refer to in context?',
        options:[
          'All good deeds and acts of love whatsoever.',
          'Primarily the Mosaic ceremonial/legal works - circumcision, dietary laws, sabbath regulations - that distinguished Jew from Gentile, not good works or love in general.',
          'Nothing - Paul is speaking figuratively with no real referent.',
          'Only works done by priests in the Temple.'],
        correct:1,
        explain:'In Romans, "works of the law" is closely tied to the Mosaic Law/covenant boundary markers (circumcision especially), not a rejection of good works altogether.'},
      {type:'verse', q:'Which verse says that what counts is "faith that worketh by charity"?',
        options:['Galatians 5:6','Romans 1:17','James 1:22','Hebrews 11:1'],
        correct:0,
        explain:'Galatians 5:6 - the single clearest synthesis of Paul and James, and the verse to reach for when accused of works-righteousness.'},
      {type:'objection', quote:'"Abraham was justified by faith alone (Romans 4)."',
        q:'How does James 2 nuance this?',
        options:[
          'James 2 agrees Abraham had faith alone with no works at all.',
          'James 2:21-22 says Abraham "was justified by works" when he offered Isaac, showing that his faith and his works operated together - "faith was completed by his works" - not against each other.',
          'James never mentions Abraham.',
          'James contradicts Paul with no possible harmony.'],
        correct:1,
        explain:'Paul (justification\'s beginning, by grace through faith, apart from earning it) and James (justification\'s living fruit, faith completed in action) are describing two sides of the same process.'},
      {type:'tf', q:'Catholics and Protestants both affirm that salvation begins with unearned grace.', correct:true,
        explain:'True, and saying so early defuses the caricature. The real dispute is whether grace merely covers the sinner or actually transforms him.'},
      {type:'recall', q:'What is the best opening move when accused of believing in works-righteousness?',
        options:[
          'Defend the merit of good works immediately.',
          'Agree emphatically that salvation is unearned grace - which removes the caricature and forces the real question about whether grace transforms.',
          'Quote the Council of Trent at length.',
          'Change the subject to the papacy.'],
        correct:1,
        explain:'You cannot defend a position they are not actually attacking. Clear the misunderstanding first, then argue the real point.'}
    ]
  },

  /* ---------------- UNIT 3 ---------------- */
  {
    id:'papacy', title:'The Papacy', icon:'🔑',
    teach:[
      {h:'What is claimed', p:'Not that the pope is sinless or always right. The claim is narrower: that Peter held a unique office among the apostles, that the office continues in the bishops of Rome, and that when the pope defines doctrine for the whole Church he is protected from error.'},
      {h:'The keys', p:'Matthew 16 is the foundation. Jesus renames Simon "Rock", promises to build his Church on him, and hands him the keys of the kingdom. Renaming in Scripture always signals a change of role and mission.', refs:[['Matthew',16,15,19]]},
      {h:'Why the keys matter', p:'The imagery is not invented. Isaiah 22 describes a royal steward given "the key of the house of David" - an office with authority to open and shut, held by one man, and passed on to a successor when its holder falls. Jesus is using recognised language for a prime-ministerial office.', refs:[['Isaiah',22,20,22]]},
      {h:'The "rock is his faith" objection', p:'They will say the rock is Peter\'s confession, not Peter. Answer with the grammar: Jesus addresses Simon directly - "you are Rock, and on this rock" - and the entire verse is second-person. The natural reading identifies the man he just renamed.'},
      {h:'Binding and loosing is shared - the keys are not', p:'Matthew 18:18 gives binding and loosing to all the apostles, and they will press this. It is true, and it is not a problem: only Peter individually receives the keys. Shared authority and a unique office are not mutually exclusive.', refs:[['Matthew',18,18,18]]},
      {h:'Feed my sheep', p:'After the Resurrection, Jesus singles Peter out three times and commissions him to feed the flock. Note that the flock is Christ\'s, not Peter\'s - the office is stewardship, not ownership.', refs:[['John',21,15,17]]},
      {h:'What infallibility is not', p:'It does not mean the pope cannot sin, cannot be wrong in interviews, or can change doctrine at will. It applies to formal definitions on faith and morals for the whole Church, and has been used a handful of times in two thousand years. Most objections here are aimed at a claim the Church never made.'},
      {h:'The early evidence', p:'Clement of Rome writes to Corinth around AD 96 and intervenes in their affairs with evident authority. Irenaeus around AD 180 lists the Roman bishops in succession from Peter. That is well before any medieval invention.'},
      {h:'How to argue this', p:'Lead with Isaiah 22 - most opponents have never connected it to Matthew 16, and it reframes the keys from a vague metaphor into a recognised office. Then narrow infallibility to what it actually claims before defending it.'}
    ],
    questions:[
      {type:'objection', quote:'"There\'s no biblical basis for the papacy - Peter was never a \'first pope.\'"',
        q:'What key passage grounds papal authority?',
        options:[
          'Genesis 1:1',
          'Matthew 16:18-19 - Jesus renames Simon "Peter" (Rock) and gives him "the keys of the kingdom," language echoing Isaiah 22:22, where keys symbolize a prime-ministerial office over the king\'s house.',
          'Revelation 22:1',
          'There is no such passage; the papacy is purely a later invention.'],
        correct:1,
        explain:'The keys imagery deliberately recalls Isaiah 22:15-22, an OT royal-steward office with authority to bind and loose - strong evidence Jesus is establishing a similar office for Peter.'},
      {type:'verse', q:'Which Old Testament passage supplies the "keys" imagery behind Matthew 16:19?',
        options:['Isaiah 22:20-22','Psalm 118:22','Daniel 7:13','Ezekiel 34:23'],
        correct:0,
        explain:'Isaiah 22:20-22 - a royal steward given the key of the house of David, an office held by one man and passed to a successor.'},
      {type:'objection', quote:'"\'Rock\' in Matthew 16:18 refers to Peter\'s faith or confession, not to Peter himself."',
        q:'What\'s the strongest response?',
        options:[
          'This reading is impossible to dispute and settles the matter against Peter.',
          'The most natural reading of the Greek wordplay - "You are Petros, and on this petra I will build..." - identifies Peter himself as the rock, a reading shared by the overwhelming majority of the early Church Fathers.',
          'The word "rock" doesn\'t appear anywhere in that verse.',
          'Peter denied Jesus, so the title couldn\'t apply to him at all.'],
        correct:1,
        explain:'While some later fathers offered alternate readings, the dominant patristic and grammatical reading takes Peter himself as the rock Christ names him.'},
      {type:'tf', q:'Papal infallibility means the pope cannot commit sin.', correct:false,
        explain:'It concerns formal definitions of doctrine on faith and morals, not personal holiness. Popes have sinned, and the Church has never claimed otherwise.'},
      {type:'objection', quote:'"The papacy is a medieval invention with no early evidence."',
        q:'What early evidence counters this?',
        options:[
          'None exists before the year 1000.',
          'Clement of Rome, writing around AD 96, already intervenes authoritatively in the Corinthian church\'s affairs from Rome; St. Irenaeus (c. 180) lists an unbroken succession of Roman bishops back to Peter.',
          'The first pope was elected in the 1500s.',
          'Early Christians had no bishops of Rome at all.'],
        correct:1,
        explain:'Clement\'s letter (1 Clement) and Irenaeus\'s Against Heresies both show Rome exercising and being recognized for a distinct authority within the first two centuries.'},
      {type:'recall', q:'What does "apostolic succession" mean?',
        options:[
          'Choosing a favorite apostle to follow.',
          'The unbroken transmission of teaching authority from the apostles to their successors (bishops) through ordination, generation after generation.',
          'A modern committee that votes on doctrine.',
          'The order in which the apostles died.'],
        correct:1,
        explain:'Apostolic succession is the historical and sacramental chain of ordination connecting today\'s bishops back to the apostles themselves.'},
      {type:'objection', quote:'"Papal infallibility means the pope can never sin or be wrong about anything."',
        q:'What does infallibility actually mean?',
        options:[
          'The pope is sinless and incapable of any error.',
          'A narrow protection: when the pope formally defines a doctrine on faith or morals for the whole Church (ex cathedra), the Holy Spirit prevents that specific definition from being in error - it says nothing about personal holiness or opinions on other matters.',
          'Everything a pope has ever said in an interview is infallible teaching.',
          'Infallibility means popes can change any doctrine at will.'],
        correct:1,
        explain:'Ex cathedra definitions are rare (used only a handful of times in history) - infallibility is not a blanket claim about the pope\'s personal conduct or every statement.'},
      {type:'objection', quote:'"All the apostles received binding/loosing authority (Matt 18:18), so Peter wasn\'t unique."',
        q:'What distinguishes Peter\'s role?',
        options:[
          'Nothing distinguishes him; the objection is fully correct.',
          'True, all the apostles share in binding and loosing - but only Peter individually receives "the keys," a singular steward\'s office (echoing Isaiah 22:22) that marks a unique headship among the Twelve.',
          'Peter actually received less authority than the others.',
          'The keys were symbolic only and given to no one in particular.'],
        correct:1,
        explain:'Shared apostolic authority and Peter\'s unique, individually-addressed office (the keys) are both present in the text - they aren\'t mutually exclusive.'},
      {type:'verse', q:'Where does the risen Christ three times commission Peter to feed his flock?',
        options:['John 21:15-17','Luke 24:36-43','Acts 2:14','Matthew 28:19'],
        correct:0,
        explain:'John 21:15-17. Note the flock is Christ\'s - the office is stewardship, not ownership.'}
    ]
  },

  /* ---------------- UNIT 4 ---------------- */
  {
    id:'mary', title:'Mary', icon:'🌹',
    teach:[
      {h:'Start with the distinction', p:'Catholic theology separates latria - worship due to God alone - from dulia, the honour given to saints, and hyperdulia, the special honour given to Mary. Nearly every Marian objection collapses once this distinction is on the table, so put it there first.'},
      {h:'Mother of God is about Jesus', p:'The title Theotokos was defined at Ephesus in 431 to protect Christ\'s divinity, not to elevate Mary. If Jesus is God, and Mary is his mother, then she is the mother of God. Denying the title splits Christ into two persons - which is precisely what the council rejected.'},
      {h:'Full of grace', p:'Gabriel greets Mary with a title, not a name. The Greek form suggests a completed and enduring state of grace. This is the textual seed of the Immaculate Conception, though the doctrine developed over centuries.', refs:[['Luke',1,26,33]]},
      {h:'What the Immaculate Conception is', p:'A frequent confusion: it refers to MARY\'S conception by her own parents, preserved from original sin - not the virgin birth of Christ. Correct this whenever it comes up; many objections are aimed at the wrong doctrine.'},
      {h:'The brothers of the Lord', p:'The Greek adelphoi covered wider kinship, and neither Hebrew nor Aramaic had a separate word for cousin. Worth noting: Luther, Calvin and Zwingli all affirmed Mary\'s perpetual virginity. This is not a late Catholic peculiarity.'},
      {h:'One mediator', p:'1 Timothy 2:5 will be quoted at you. Read the surrounding verses - Paul urges intercessory prayer immediately before it. Asking Mary to pray for you is the same act as asking a friend to pray for you; it relies on Christ\'s mediation rather than competing with it.', refs:[['I Timothy',2,1,5]]},
      {h:'The New Eve', p:'The earliest Fathers - Justin Martyr, Irenaeus - read Mary as the New Eve alongside Christ as the New Adam. Where Eve\'s disobedience brought death, Mary\'s obedience bore life. This typology underlies much later Marian doctrine.'},
      {h:'How to argue this', p:'Never begin by defending a specific Marian doctrine. Begin with latria and dulia. If your opponent thinks honour equals worship, every argument you make will sound like idolatry to them no matter how good it is.'}
    ],
    questions:[
      {type:'objection', quote:'"Catholics worship Mary."',
        q:'How does Catholic teaching actually distinguish this?',
        options:[
          'Catholics openly admit they worship Mary as divine.',
          'Catholic theology distinguishes latria (worship due to God alone) from hyperdulia (special honor given uniquely to Mary) and dulia (honor given to other saints) - Mary is deeply honored, never worshipped as God.',
          'There is no distinction; all honor given is identical to worship of God.',
          'Mary is considered a fourth person of the Trinity.'],
        correct:1,
        explain:'This latria/dulia distinction, formalized since the early councils, is central to understanding Catholic devotion to Mary and the saints.'},
      {type:'tf', q:'The Immaculate Conception refers to the virgin birth of Jesus.', correct:false,
        explain:'It refers to Mary\'s own conception by her parents, preserved from original sin. This is one of the most common confusions in the whole debate.'},
      {type:'objection', quote:'"Calling Mary \'Mother of God\' makes her divine or greater than God."',
        q:'What is the actual point of that title?',
        options:[
          'It means Mary existed before God and created Him.',
          'The title (Theotokos, "God-bearer") is really a statement about Jesus - since Jesus is truly God, and Mary is truly his mother, she is rightly called Mother of God; it was defined at the Council of Ephesus (431) precisely to protect Christ\'s divinity.',
          'It means Mary is a goddess.',
          'Catholics invented the title in the last century.'],
        correct:1,
        explain:'The title was defined against Nestorius, who wanted to split Christ into two persons - "Mother of God" safeguards that Jesus, one Person, is fully God from the moment of his conception.'},
      {type:'objection', quote:'"The Bible mentions Jesus\' brothers, so Mary couldn\'t have remained a virgin."',
        q:'What\'s the linguistic/historical response?',
        options:[
          'The Bible clearly uses a unique word for "half-sibling" that rules out any other meaning.',
          'The Greek word used, "adelphoi," was commonly applied in Scripture to wider kin - cousins and close relatives - since Hebrew and Aramaic had no separate word for "cousin"; the perpetual virginity of Mary was also the near-universal belief of the early Church, including many early Reformers.',
          'Jesus definitely had full biological siblings and the Church has always taught this.',
          'This issue was never discussed until modern times.'],
        correct:1,
        explain:'Even Martin Luther, Calvin, and Zwingli affirmed Mary\'s perpetual virginity - the "brothers" language reflects normal ancient Semitic usage for extended family.'},
      {type:'objection', quote:'"The Immaculate Conception isn\'t in the Bible."',
        q:'What text is often cited in its support?',
        options:[
          'Genesis 3:15 only, with no other support anywhere.',
          'Luke 1:28, where the angel Gabriel greets Mary as "full of grace" (Greek: kecharitomene) - a unique perfect-tense form suggesting a completed, permanent state of grace, consistent with being preserved from sin from the moment of conception.',
          'This doctrine has zero textual grounding of any kind.',
          'Matthew 1:1, the genealogy of Jesus.'],
        correct:1,
        explain:'While not a proof-text in isolation, kecharitomene combined with the "New Eve" theology of the early Fathers forms the biblical/theological basis later formally defined in 1854.'},
      {type:'recall', q:'What does the "Immaculate Conception" actually refer to?',
        options:[
          'The virgin birth of Jesus.',
          'Mary herself being conceived without the stain of original sin - a common point of confusion, since it is NOT about Jesus\' conception or birth.',
          'Mary\'s conception of Jesus without pain.',
          'A yearly feast about Christmas.'],
        correct:1,
        explain:'A very common mix-up: the Immaculate Conception is about Mary\'s own conception (by her parents), not the virgin birth of Christ.'},
      {type:'objection', quote:'"Praying to Mary replaces Jesus as the one mediator between God and man (1 Tim 2:5)."',
        q:'How do Catholics reconcile this?',
        options:[
          'By admitting Mary functions as a second, competing mediator to Christ.',
          'Asking Mary (or any saint) to pray for you is asking for intercession - the same as asking a living friend to pray for you - which relies on Christ\'s unique mediation rather than replacing it; Revelation depicts the saints in heaven actively presenting the prayers of believers to God (Rev 5:8).',
          'By denying 1 Timothy 2:5 is part of the Bible.',
          'By teaching that Mary is a co-equal mediator with Christ.'],
        correct:1,
        explain:'"Intercessory" prayer to Mary and the saints is asking them to pray *with and for* us to Christ - a participation in, not a replacement of, his unique mediation.'},
      {type:'recall', q:'Which early Fathers developed the "New Eve" typology for Mary?',
        options:[
          'Aquinas and Bonaventure in the 13th century.',
          'Justin Martyr and Irenaeus, in the second century.',
          'Augustine and Jerome only.',
          'No Father ever used this typology.'],
        correct:1,
        explain:'Justin and Irenaeus paired Mary as New Eve with Christ as New Adam - obedience undoing disobedience. This is very early, not a medieval development.'},
      {type:'tf', q:'Luther, Calvin and Zwingli all rejected Mary\'s perpetual virginity.', correct:false,
        explain:'All three affirmed it. It is a useful fact - the doctrine is not a Catholic peculiarity but a shared inheritance the later Reformation dropped.'}
    ]
  },

  /* ---------------- UNIT 5 ---------------- */
  {
    id:'eucharist', title:'The Eucharist', icon:'🍞',
    teach:[
      {h:'The claim', p:'That the bread and wine become the actual Body and Blood of Christ, while the appearances - taste, texture, chemistry - remain. Not a symbol, and not a physical change you could detect in a laboratory.'},
      {h:'John 6 is the ground', p:'Read the whole discourse. Jesus states the claim, the crowd objects that it is literal, and instead of softening it he intensifies - shifting to a more graphic word for eating. This is the opposite of what someone speaking metaphorically does when misunderstood.', refs:[['John',6,48,58]]},
      {h:'He lets them walk away', p:'Verse 66: many disciples leave over this teaching. Jesus does not call them back or explain that he meant it symbolically. He turns to the Twelve and asks whether they will go too. Nowhere else does Jesus permit a departure over a misunderstanding.', refs:[['John',6,60,68]]},
      {h:'The words of institution', p:'At the Last Supper the language is stark and unqualified across three Gospels and Paul. "This is my body" - not "this represents".', refs:[['Matthew',26,26,28]]},
      {h:'Paul treats it as real', p:'1 Corinthians 11 warns that receiving unworthily makes one guilty of the body and blood of the Lord, and links it to sickness and death in the community. That is an extraordinary warning about a mere symbol.', refs:[['I Corinthians',11,27,29]]},
      {h:'The cannibalism objection', p:'The change is at the level of substance, received sacramentally under the appearance of bread. It is not the consumption of flesh in the ordinary sense, and the accusation was already being answered in the second century.'},
      {h:'Sacrifice without repetition', p:'Hebrews says Christ died once for all, and Catholics agree. The Mass does not repeat Calvary; it makes the one sacrifice sacramentally present. Nothing is added to it and it is not done again.'},
      {h:'The early witness', p:'Ignatius of Antioch, writing around AD 110 and a disciple of John, calls the Eucharist the flesh of our Saviour and identifies those who deny it as separated from the Church. That is first-generation testimony.'},
      {h:'How to argue this', p:'Make them read John 6 in full, out loud if possible. The structure of the passage - objection, intensification, departure, no correction - does the work. Then ask why Paul thought unworthy reception could make someone sick.'}
    ],
    questions:[
      {type:'objection', quote:'"The Eucharist is just a symbol - Jesus was speaking figuratively at the Last Supper."',
        q:'What does John 6 suggest about how literally to take Jesus?',
        options:[
          'Jesus immediately clarified he was speaking only symbolically.',
          'In John 6:53-58 Jesus repeats the "eat my flesh, drink my blood" language with escalating intensity - so much that many disciples left him over it (v.66) - and he lets them walk away rather than soften or explain it as merely symbolic.',
          'John 6 never mentions eating flesh or drinking blood.',
          'The crowd fully understood and accepted it as a metaphor with no confusion.'],
        correct:1,
        explain:'If Jesus meant it symbolically, the natural moment to clarify was when disciples were leaving over the literal reading - yet he doubles down instead (John 6:53-58).'},
      {type:'tf', q:'When disciples left over the Bread of Life discourse, Jesus called them back and explained he spoke symbolically.', correct:false,
        explain:'He let them go and asked the Twelve if they would leave too. Nowhere else does Jesus allow disciples to depart over a simple misunderstanding.'},
      {type:'objection', quote:'"Belief in the Real Presence amounts to cannibalism."',
        q:'How does transubstantiation address this?',
        options:[
          'Catholics agree it is a form of cannibalism but accept it anyway.',
          'The Church teaches the substance changes into Christ\'s Body and Blood while the appearances (taste, texture, look) remain bread and wine - this is a sacramental, non-biological change, nothing like ordinary eating of flesh.',
          'There is no real change of any kind, so the objection is meaningless.',
          'Catholics only believe this happens once a year.'],
        correct:1,
        explain:'Transubstantiation is a change at the level of substance, received sacramentally under the appearance of bread and wine - categorically different from consuming ordinary flesh.'},
      {type:'recall', q:'What does "transubstantiation" mean?',
        options:[
          'A purely symbolic ceremony with no real change.',
          'The change of the whole substance of bread and wine into the substance of Christ\'s Body and Blood at the consecration, while the outward appearances remain unchanged.',
          'The transformation of the priest into Christ.',
          'A blessing said only over water.'],
        correct:1,
        explain:'This is the technical Catholic term (formalized using Aristotelian philosophical language) for what happens to the bread and wine at Mass.'},
      {type:'verse', q:'Which passage warns that receiving unworthily makes one "guilty of the body and blood of the Lord"?',
        options:['1 Corinthians 11:27','John 6:35','Hebrews 9:28','Luke 22:19'],
        correct:0,
        explain:'1 Corinthians 11:27 - an extraordinarily severe warning if the elements were only a symbol.'},
      {type:'objection', quote:'"Paul still calls it \'bread\' after the blessing (1 Cor 11:26-28), proving it stays ordinary bread."',
        q:'What tension does this create for a purely symbolic reading?',
        options:[
          'None - Paul clearly means it is only ordinary bread throughout.',
          'Paul also warns that whoever eats "in an unworthy manner will be guilty concerning the body and blood of the Lord" (11:27) - an oddly serious warning if it were merely ordinary bread and wine.',
          '1 Corinthians never discusses the Lord\'s Supper.',
          'Paul says eating it unworthily has no consequences at all.'],
        correct:1,
        explain:'Retaining the word "bread" doesn\'t settle the question - Catholic theology also still calls it "bread" descriptively even while affirming a real substantial change (much as we might call a photo "you").'},
      {type:'objection', quote:'"Belief in the Real Presence developed later - the early Church didn\'t hold it."',
        q:'What early evidence counters this?',
        options:[
          'No Church writing before the year 1000 discusses the Eucharist at all.',
          'St. Ignatius of Antioch, writing around AD 110 (a disciple of the apostle John), condemned those who denied the Eucharist is "the flesh of our Savior Jesus Christ" as heretics - showing the belief was present from the earliest post-apostolic generation.',
          'The Real Presence was formally invented at Vatican II.',
          'Early Christians uniformly rejected any idea of Christ\'s presence in the bread and wine.'],
        correct:1,
        explain:'Ignatius\'s letters (c. AD 107-110) are some of the earliest Christian writings outside the NT and already assume belief in a real, not merely symbolic, presence.'},
      {type:'objection', quote:'"Calling the Mass a \'sacrifice\' contradicts Hebrews 9:26-28, which says Christ died once for all."',
        q:'How is the Mass understood as a sacrifice without contradicting Hebrews?',
        options:[
          'The Mass literally re-crucifies Christ over and over.',
          'The Mass doesn\'t repeat Calvary; it re-presents (makes sacramentally present) Christ\'s one, unrepeatable sacrifice in an unbloody manner, uniting the Church at every Mass to that single historical event rather than adding a new one.',
          'Catholics agree the Mass is unrelated to Christ\'s death in any way.',
          'Hebrews actually supports repeated crucifixions.'],
        correct:1,
        explain:'Catholic teaching is careful: Calvary happened once, historically and definitively - the Mass makes that one sacrifice sacramentally present, it does not multiply it.'},
      {type:'tf', q:'Catholic teaching holds that the Mass repeats the sacrifice of Calvary.', correct:false,
        explain:'It re-presents the one sacrifice, making it sacramentally present. Calvary happened once and is never repeated - Catholics affirm Hebrews here rather than contradicting it.'}
    ]
  },

  /* ---------------- UNIT 6 ---------------- */
  {
    id:'purgatory', title:'Purgatory', icon:'🔥',
    teach:[
      {h:'What it is and is not', p:'Purgatory is a final purification for those who die in God\'s friendship but are not yet fully cleansed. Everyone there is going to heaven. It is not a second chance, not a middle destination, and not a milder hell.'},
      {h:'The underlying logic', p:'Revelation says nothing unclean enters heaven. Most people do not die perfectly sanctified. Something must bridge that gap. Purgatory is the name for that bridge - and framed this way, many Protestants find they already believe in something like it.', refs:[['Revelation',21,27,27]]},
      {h:'The New Testament argument', p:'1 Corinthians 3 describes a judgement where a man\'s work is tested by fire - he suffers loss, yet he himself is saved "as through fire". Saved, but through something painful and purifying afterwards.', refs:[['I Corinthians',3,11,15]]},
      {h:'Sins forgiven in the age to come', p:'Jesus says a certain sin will not be forgiven "in this world, nor in the world to come". The phrasing implies some forgiveness does occur in the age to come - otherwise the qualification is empty.', refs:[['Matthew',12,32,32]]},
      {h:'Second Maccabees', p:'The clearest text commends prayer and sacrifice for the dead so they might be freed from sin. Protestants reject the book, so know the New Testament arguments too - but this text shows the practice was normal Jewish piety before Christ.', refs:[['II Maccabees',12,43,46]]},
      {h:'When they reject the deuterocanon', p:'Do not get stuck there. Concede the disagreement and move to 1 Corinthians 3 and Matthew 12:32, which use only books they accept. Then note that the burden shifts: they must explain what happens to the imperfectly sanctified.'},
      {h:'It does not diminish Christ', p:'The most serious objection is that purgatory implies the Cross was insufficient. The answer: purgatory is the application of Christ\'s work, not a supplement to it - the same grace that justifies also sanctifies, and that sanctification is completed rather than abandoned at death.'},
      {h:'The archaeological witness', p:'Catacomb inscriptions and early liturgies from the second and third centuries show Christians praying for the dead as ordinary practice. Whatever they believed, it was not that the dead were beyond help.'},
      {h:'How to argue this', p:'Ask what happens to a genuine believer who dies with unrepented venial sin or a disordered attachment. Both alternatives - entering heaven unclean, or being condemned - are unacceptable to them. That pressure is what purgatory relieves.'}
    ],
    questions:[
      {type:'objection', quote:'"Purgatory isn\'t in the Bible at all."',
        q:'What passages are typically cited in support?',
        options:[
          'No biblical text is ever cited by Catholics on this topic.',
          '2 Maccabees 12:46 speaks of prayer for the dead "that they might be freed from sin," and 1 Corinthians 3:15 describes someone "saved, but only as through fire" - both suggesting a purification process after death.',
          'Genesis 1 describes purgatory directly.',
          'The book of Revelation names purgatory explicitly by name.'],
        correct:1,
        explain:'Neither passage uses the word "purgatory," but both point toward some form of post-death purification, which the Church later articulated more fully as doctrine.'},
      {type:'tf', q:'Purgatory is a second chance for those who died in mortal sin.', correct:false,
        explain:'Everyone in purgatory is already destined for heaven. It concerns final purification, not a change of eternal destiny.'},
      {type:'objection', quote:'"2 Maccabees isn\'t Scripture for Protestants, so that source doesn\'t count."',
        q:'What New Testament-only argument still supports the idea?',
        options:[
          'There is no NT-only argument available.',
          '1 Corinthians 3:12-15 (being "saved... as through fire") and Matthew 12:32 (sins "not forgiven... in this age or the age to come," implying some sins ARE addressed in the age to come) both independently point to purification after death, using only texts Protestants also accept.',
          'The New Testament explicitly forbids the idea of purgatory.',
          'Only the Book of Enoch supports this idea.'],
        correct:1,
        explain:'Even setting 2 Maccabees aside, 1 Cor 3:12-15 and Matt 12:32 give independent NT grounds for some kind of after-death purification.'},
      {type:'recall', q:'What is purgatory according to Catholic teaching?',
        options:[
          'A second chance at salvation for those who died in serious sin.',
          'A final purification for those who die in God\'s friendship but are not yet perfectly cleansed - preparing them for the full joy of heaven. It is not a second hell, nor an alternative path for the damned.',
          'An eternal place of punishment identical to hell.',
          'A myth with no relation to salvation at all.'],
        correct:1,
        explain:'Purgatory concerns only those already assured of heaven - it\'s about final purification, not a chance to change one\'s eternal destiny.'},
      {type:'verse', q:'Which passage describes a man whose work is burned, yet "he himself shall be saved, yet so as by fire"?',
        options:['1 Corinthians 3:15','2 Peter 3:10','Malachi 3:2','Jude 23'],
        correct:0,
        explain:'1 Corinthians 3:15 - the central New Testament text, and one Protestants accept as canonical.'},
      {type:'objection', quote:'"Purgatory implies Christ\'s sacrifice wasn\'t enough to fully save us."',
        q:'How does Catholic teaching answer this?',
        options:[
          'By agreeing Christ\'s sacrifice needs to be supplemented by human merit.',
          'Purgatory doesn\'t add anything to Christ\'s atoning work - it is the application and completion, by that same grace, of the purification a soul still needs, similar to how a believer is progressively sanctified during earthly life.',
          'By denying that Christ\'s sacrifice matters for salvation.',
          'By teaching Christ\'s sacrifice only applies to some believers.'],
        correct:1,
        explain:'Purgatory is understood as the completion of sanctification (already begun by grace in this life), not a separate means of earning salvation apart from Christ.'},
      {type:'objection', quote:'"Revelation 21:27 says nothing unclean enters heaven - so there\'s no room for \'later\' purification."',
        q:'How is this verse actually used by Catholic apologists?',
        options:[
          'It is generally avoided since it contradicts purgatory.',
          'It\'s used as supporting evidence: since nothing unclean can enter heaven, yet few Christians die perfectly sanctified, some final cleansing after death is needed before entering God\'s presence - exactly what purgatory describes.',
          'It proves everyone goes straight to hell.',
          'It has nothing to do with the afterlife.'],
        correct:1,
        explain:'Rev 21:27 is often flipped into a supporting argument: the verse\'s high bar for entering heaven is precisely why some final purification seems necessary for most believers.'},
      {type:'objection', quote:'"Praying for the dead is pointless and unbiblical."',
        q:'What historical/textual evidence counters this?',
        options:[
          'No ancient Christian ever prayed for the dead.',
          '2 Maccabees 12:46 explicitly commends prayer for the dead, and early Christian catacomb inscriptions and liturgies from the 2nd-3rd centuries show the practice was widespread from very early on.',
          'Prayer for the dead was invented in the 1900s.',
          'The Bible explicitly forbids all prayer for deceased persons.'],
        correct:1,
        explain:'Archaeological and textual evidence (catacomb inscriptions, early liturgical texts) shows prayer for the deceased was a normal, early, and widespread Christian practice.'},
      {type:'recall', q:'What is the strongest question to put to someone who rejects purgatory?',
        options:[
          'Why do you reject 2 Maccabees?',
          'What happens to a true believer who dies with unrepented venial sin - does he enter heaven unclean, or is he condemned? Both answers are unacceptable, which is the gap purgatory fills.',
          'Why do you not pray for the dead?',
          'How can you deny the Church Fathers?'],
        correct:1,
        explain:'This forces the dilemma using only premises they already hold. Arguing from 2 Maccabees first lets them escape on canon grounds.'}
    ]
  },

  /* ---------------- UNIT 7 ---------------- */
  {
    id:'saints', title:'Saints & Communion', icon:'✨',
    teach:[
      {h:'What asking a saint actually is', p:'It is a request for intercession - the same act as asking a friend to pray for you. Not worship, and not treating the saint as a source of grace independent of God. Establish this before anything else.'},
      {h:'The necromancy objection', p:'Deuteronomy forbids conjuring the dead for hidden knowledge or power. Asking someone alive in Christ to pray for you is a different act entirely. Note the key premise: the saints are not dead. Christ said God is the God of the living.'},
      {h:'Saints present prayers in Revelation', p:'John sees the elders holding golden bowls of incense which are the prayers of the saints, and later the martyrs under the altar crying out to God about events on earth. Both show heavenly awareness of and involvement in earthly affairs.', refs:[['Revelation',5,8,8],['Revelation',6,9,10]]},
      {h:'How can they hear so many prayers', p:'Not by independent omniscience. In the beatific vision the saints see in and through God, who is present to every time and place. Their knowledge is participated, not divine in itself. This preserves the Creator-creature distinction.'},
      {h:'The prayer of a righteous man', p:'James says the prayer of a righteous man avails much. If the prayers of the righteous on earth are powerful, the prayers of the righteous already perfected in heaven are not less so.', refs:[['James',5,16,16]]},
      {h:'The cloud of witnesses', p:'Hebrews 12 pictures believers surrounded by a great cloud of witnesses as they run the race. The image is of an aware, present assembly, not an absent one.', refs:[['Hebrews',12,1,1]]},
      {h:'Statues and relics', p:'The same latria/dulia distinction applies. Honour passes through the image to the person represented - as kissing a photograph honours the person, not the paper. And Acts records God working healings through cloths that had touched Paul, which is the biblical precedent for relics.', refs:[['Acts',19,11,12]]},
      {h:'The communion of saints', p:'The Church Militant on earth, the Church Suffering in purgatory, and the Church Triumphant in heaven are one body in Christ, interceding for one another. Death does not sever membership of the Body.'},
      {h:'How to argue this', p:'Ask directly: do you ask other Christians to pray for you? Almost always yes. Then ask what changes when a Christian dies - are they less alive in Christ, or more? The objection usually rests on an unstated assumption that death ends membership in the Body.'}
    ],
    questions:[
      {type:'objection', quote:'"Praying to saints is necromancy - talking to the dead is forbidden (Deut 18:11)."',
        q:'What\'s the key distinction?',
        options:[
          'There is no distinction; both practices are identical.',
          'Necromancy involves conjuring spirits to extract hidden knowledge or power; asking a saint in heaven to intercede is fundamentally different - it\'s a request for prayer, and Scripture depicts saints in heaven aware of and presenting the prayers of the faithful (Revelation 5:8, 6:9-10).',
          'Deuteronomy 18:11 actually endorses necromancy.',
          'Catholics agree they are practicing necromancy but see nothing wrong with it.'],
        correct:1,
        explain:'Necromancy seeks secret knowledge/power from the dead through forbidden occult means; intercessory prayer simply asks a soul in Christ\'s presence to pray for you, as Revelation depicts happening.'},
      {type:'tf', q:'Catholic teaching holds that saints in heaven possess independent omniscience.', correct:false,
        explain:'They see in and through God, who is present to all times and places. Their knowledge is participated, never a divine power of their own.'},
      {type:'objection', quote:'"Saints in heaven can\'t possibly hear millions of prayers at once - only God is omniscient."',
        q:'How do Catholics explain this without claiming saints are divine?',
        options:[
          'By claiming saints possess independent, God-like omniscience.',
          'The saints don\'t have independent omniscience - in the beatific vision, they see all things in and through God, who is present to every time and place; their awareness is a participation in God\'s knowledge, not a separate divine power of their own.',
          'Saints actually can\'t hear any prayers at all.',
          'Only Mary, not other saints, can hear prayers.'],
        correct:1,
        explain:'This distinction - participated knowledge "in God" rather than independent omniscience - keeps the practice from implying the saints are themselves divine.'},
      {type:'objection', quote:'"Statues and relics are just idolatry."',
        q:'How does Catholic teaching distinguish this from idol worship?',
        options:[
          'It doesn\'t - Catholics admit they worship statues.',
          'The same latria/dulia distinction used with Mary applies here: a statue or relic is a physical reminder that aids devotion, not an object of worship itself; the honor given passes through the image to the person it represents - similar to kissing a photo of a deceased loved one.',
          'Statues are worshipped as gods in Catholic teaching.',
          'Relics are magical objects with power independent of God.'],
        correct:1,
        explain:'Catholic teaching consistently distinguishes the honor (dulia) given through an image from the worship (latria) reserved for God alone.'},
      {type:'recall', q:'What is the "communion of saints"?',
        options:[
          'A club only for canonized saints.',
          'The spiritual union of all the faithful - those on earth (Church Militant), those being purified (Church Suffering), and those in heaven (Church Triumphant) - bound together in Christ\'s one Body, interceding for one another.',
          'A yearly Church holiday.',
          'A term for the college of cardinals.'],
        correct:1,
        explain:'This doctrine (in the Apostles\' Creed) describes the ongoing spiritual bond and mutual intercession among believers across the boundary of death.'},
      {type:'verse', q:'Which passage shows elders in heaven holding golden bowls of incense that are "the prayers of saints"?',
        options:['Revelation 5:8','Revelation 20:4','Hebrews 9:24','1 Peter 2:5'],
        correct:0,
        explain:'Revelation 5:8 - heavenly figures actively presenting the prayers of believers on earth.'},
      {type:'objection', quote:'"The Bible never shows anyone asking a deceased saint to pray for them."',
        q:'What passage is often cited against this claim?',
        options:[
          'No passage is ever cited; the objection stands unanswered.',
          'In Luke 16:19-31, even the rich man in Hades asks Abraham to act on behalf of his brothers, showing such requests across the divide were conceivable to a first-century audience; 2 Maccabees 15:14 depicts the deceased prophet Jeremiah interceding for the living.',
          'The Bible explicitly condemns anyone who asks a saint to pray for them.',
          'Only angels, never deceased humans, are ever shown interceding.'],
        correct:1,
        explain:'While not a perfect parallel, Luke 16 shows the concept of the dead being aware of and able to act toward the living was culturally intelligible in a biblical context.'},
      {type:'objection', quote:'"Miracles tied to relics - like Paul\'s handkerchiefs healing people (Acts 19:11-12) - prove nothing about Catholic practice."',
        q:'How is this passage actually used by Catholic apologists?',
        options:[
          'It is usually ignored since it undermines the point.',
          'It\'s used as direct biblical precedent: God worked healing through physical objects (handkerchiefs, aprons) associated with a holy apostle - supporting the Catholic practice of venerating relics as channels of grace rather than magic objects with power of their own.',
          'It proves relics have no biblical basis whatsoever.',
          'It shows the early Church rejected physical objects entirely.'],
        correct:1,
        explain:'Acts 19:11-12 is a clear NT example of God using physical objects connected to a holy person as instruments of grace - the same logic underlying relic veneration.'},
      {type:'recall', q:'What unstated assumption usually underlies the objection to asking saints for prayer?',
        options:[
          'That prayer is ineffective in general.',
          'That death ends membership in the Body of Christ - so the saints are gone rather than more fully alive in Christ.',
          'That only priests may pray.',
          'That Revelation is not canonical.'],
        correct:1,
        explain:'Surfacing this assumption is the decisive move. Most opponents already ask living Christians to pray for them; the question is what they think death changes.'}
    ]
  }

  ]
},

/* =========================================================
   PATHS NOT YET WRITTEN
   Declared so the picker, routing and progress model are real.
   ========================================================= */
{
  id:'reformed', name:'Reformed / Calvinist', icon:'⚜️',
  blurb:'TULIP, covenant theology, divine sovereignty',
  ready:false, units:[]
},
{
  id:'orthodox', name:'Eastern Orthodox', icon:'☦️',
  blurb:'Fathers and councils - but no pope',
  ready:false, units:[]
},
{
  id:'atheist', name:'Secular Atheist', icon:'🔬',
  blurb:'Evidence, the problem of evil, church history',
  ready:false, units:[]
},
{
  id:'islam', name:'Islam', icon:'☪️',
  blurb:'Tawhid, the Incarnation, the crucifixion',
  ready:false, units:[]
}
];
