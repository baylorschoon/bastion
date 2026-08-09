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
    lessons:[

    /* ======== TIER 1 - NOVICE ======== */
    {
      id:'l1', tier:1, title:'The real question',
      teach:[
        {h:'Where every argument ends up', p:'Nearly every Catholic-Protestant disagreement eventually lands here. Not "is the Bible true" - both sides say yes - but "is the Bible ALONE the rule of faith, and who decides what it means?" Settle this and most other disputes follow from it.'},
        {h:'You are not arguing about the Bible', p:'This matters emotionally as well as logically. Your opponent likely believes you are attacking Scripture. You are not. You are arguing about what ELSE carries authority alongside it. Say that out loud early and the temperature drops.'}
      ],
      questions:[
        {type:'recall', q:'What is the actual point of dispute in the Scripture and Tradition debate?',
          options:['Whether the Bible is true.','Whether Scripture ALONE is the rule of faith, and who has authority to interpret it.','Whether Catholics are allowed to own Bibles.','Whether the Old Testament still applies.'],
          correct:1,
          explain:'Both sides affirm Scripture is inspired and true. The dispute is over sufficiency and interpretive authority.'},
        {type:'tf', q:'Catholics deny that Scripture is inspired and true.', correct:false,
          explain:'The Church affirms the full inspiration and inerrancy of Scripture. Clearing this up early prevents most of the heat in the conversation.'},
        {type:'objection', quote:'"You Catholics do not really believe the Bible."',
          q:'What is the best first move?',
          options:['Argue that Tradition matters more than Scripture.','State plainly that you affirm Scripture is inspired and true, and that the disagreement is about what else carries authority alongside it.','Change the subject to the papacy.','Concede that Catholics treat the Bible as secondary.'],
          correct:1,
          explain:'Naming the real disagreement stops you defending a position you do not hold.'},
        {type:'recall', q:'Why is it strategically useful to settle this topic before others?',
          options:['Because it is the easiest to win.','Because the authority question determines how every other dispute gets settled - if only Scripture counts, arguments from councils and Fathers are inadmissible from the start.','Because Protestants find it boring.','Because it avoids talking about Mary.'],
          correct:1,
          explain:'Authority is the meta-question. Arguing purgatory with someone who rejects all non-biblical authority means you are playing by rules that decide the game in advance.'}
      ]
    },
    {
      id:'l2', tier:1, title:'What sola scriptura claims',
      teach:[
        {h:'The claim itself', p:'Sola scriptura holds that Scripture is the only INFALLIBLE rule of faith. Most careful Protestants do not say tradition is worthless - they say it is fallible and always answerable to the Bible. Attack the careful version, not the sloppy one.'},
        {h:'Two versions you will meet', p:'Sola scriptura is the formal Reformation doctrine above. Solo scriptura is the popular distortion - "just me and my Bible", no creeds, no history. Many people defending the second think they are defending the first. Ask which one they hold before you argue.'}
      ],
      questions:[
        {type:'recall', q:'What does sola scriptura actually claim?',
          options:['That tradition has no value at all.','That Scripture is the only infallible rule of faith, with tradition being fallible and answerable to it.','That only the Gospels are authoritative.','That every Christian must read Greek.'],
          correct:1,
          explain:'The careful formulation concerns infallibility, not usefulness. Arguing against a cruder version wastes the exchange.'},
        {type:'recall', q:'What is the difference between sola scriptura and solo scriptura?',
          options:['They are identical.','Sola scriptura is the formal doctrine making Scripture the only infallible authority; solo scriptura is the popular "just me and my Bible" version that rejects creeds and history entirely.','Solo scriptura is the Catholic position.','Sola scriptura applies only to the Old Testament.'],
          correct:1,
          explain:'Confusing these two is the single most common source of people talking past each other on this topic.'},
        {type:'tf', q:'Before arguing, it is worth asking which version of sola scriptura your opponent actually holds.', correct:true,
          explain:'The two versions need completely different responses. Assuming the wrong one means your best arguments land on nothing.'},
        {type:'objection', quote:'"Creeds and councils are just human traditions with no authority."',
          q:'Which position is this?',
          options:['Formal sola scriptura.','Solo scriptura - the popular distortion, which most confessional Protestants also reject.','The Catholic position.','The Orthodox position.'],
          correct:1,
          explain:'Point this out: their own tradition, Lutheran or Reformed, affirms the ecumenical creeds. They may be arguing against their own confession.'}
      ]
    },
    {
      id:'l3', tier:1, title:'The phrase is not in the Bible',
      teach:[
        {h:'Ask them to prove it', p:'If every doctrine must be proven from Scripture alone, then sola scriptura itself must be proven from Scripture alone. No verse teaches it. This is the strongest opening move in the entire topic, and the burden is genuinely theirs.'},
        {h:'The only "alone" verse', p:'The phrase "faith alone" appears exactly once in Scripture - and it is a denial. "Scripture alone" appears nowhere at all. Neither slogan is biblical language.', refs:[['James',2,24,24]]}
      ],
      questions:[
        {type:'tf', q:'Sola scriptura is explicitly taught somewhere in the Bible.', correct:false,
          explain:'No verse states it. A doctrine demanding that all doctrine come from Scripture alone cannot itself be found in Scripture alone.'},
        {type:'objection', quote:'"Every doctrine must be proven from Scripture."',
          q:'What is the sharpest reply?',
          options:['Agree and try to prove Tradition from Scripture.','Ask them to prove that rule from Scripture. It is their formal principle, so the burden is theirs, and no verse states it.','Argue that Scripture is unreliable.','Point out that Catholics have more books.'],
          correct:1,
          explain:'This is not a debating trick. A rule about which authorities count must itself be justified by some authority.'},
        {type:'verse', q:'Which verse contains the only appearance of the phrase "faith alone" in Scripture?',
          options:['Romans 3:28','James 2:24','Galatians 2:16','Ephesians 2:8'],
          correct:1,
          explain:'James 2:24 - and it uses the phrase to deny it: justified by works, and not by faith only.'},
        {type:'recall', q:'What do Protestants usually reply when told sola scriptura is not in the Bible?',
          options:['They concede immediately.','They argue it is implied by passages describing Scripture as sufficient, or that it follows necessarily from Scripture being God-breathed - which shifts the argument onto those texts.','They deny the Bible exists.','They change to a different topic.'],
          correct:1,
          explain:'Expect the move to 2 Timothy 3:16. Knowing it is coming means you can take that text on directly rather than being surprised.'}
      ]
    },

    /* ======== TIER 2 - APPRENTICE ======== */
    {
      id:'l4', tier:2, title:'Their main text: 2 Timothy 3',
      teach:[
        {h:'Read it slowly', p:'This is the proof-text you will meet most often. Paul says Scripture is inspired and profitable, and that it equips the man of God for every good work. Notice what it does say and what it does not.', refs:[['II Timothy',3,14,17]]},
        {h:'Two problems for their reading', p:'First, "profitable" and "equipping" are not "sufficient by itself" - a tool can equip you fully for a job without being the only tool. Second, the Scripture Timothy knew from infancy was the Old Testament; the New Testament did not yet exist as a collection. Pressed consistently, this verse would prove the Old Testament alone suffices, which no Protestant believes.'}
      ],
      questions:[
        {type:'objection', quote:'"2 Timothy 3:16-17 says Scripture makes the man of God complete - that proves sufficiency."',
          q:'What is the best response?',
          options:['Concede the point; the verse does teach sola scriptura.','The verse says Scripture is inspired and profitable for equipping - not that it is the only rule of faith. And the "scripture" Timothy knew from infancy was the Old Testament, since the New Testament was not yet collected.','Deny that 2 Timothy is inspired.','Argue that Paul was mistaken on this point.'],
          correct:1,
          explain:'Pressed consistently, the verse would prove the Old Testament alone is sufficient - a conclusion no Protestant accepts.'},
        {type:'recall', q:'Which Scriptures had Timothy known "from a child"?',
          options:['The four Gospels.','The Old Testament, since the New Testament was not yet gathered as a collection.','The entire Bible as we have it now.','The letters of Paul.'],
          correct:1,
          explain:'This is the decisive contextual point, and it is not a Catholic invention - it is simple chronology.'},
        {type:'tf', q:'Saying Scripture is "profitable" for teaching is the same as saying it is the only rule of faith.', correct:false,
          explain:'Profitable and sufficient are different claims. The verse asserts the first; sola scriptura needs the second.'},
        {type:'objection', quote:'"Complete and equipped for every good work leaves nothing missing."',
          q:'How do you answer?',
          options:['Agree that nothing else is needed.','Ask what the same logic does to James 1:4, which says patience makes you perfect and entire, wanting nothing - nobody concludes patience is the sole rule of faith.','Say the translation is wrong.','Argue the verse is a later addition.'],
          correct:1,
          explain:'Parallel constructions elsewhere show this phrasing does not carry the exclusive weight the argument needs.'}
      ]
    },
    {
      id:'l5', tier:2, title:'Your main text: 2 Thessalonians 2',
      teach:[
        {h:'The clearest verse you have', p:'Paul tells the Thessalonians to hold the traditions they were taught, whether by word of mouth or by his letter - treating both as binding. Written and oral apostolic teaching stand side by side.', refs:[['II Thessalonians',2,15,15]]},
        {h:'The reply you will get', p:'They will say the oral teaching was later written down, so nothing is lost. Ask how they know that - the claim appears nowhere in Scripture. It is an assumption required to save the theory, not something the text says.'}
      ],
      questions:[
        {type:'objection', quote:'"The Bible alone is the only authority a Christian needs - sola scriptura."',
          q:'What is the strongest Catholic response?',
          options:['Agree - Scripture alone is sufficient and interprets itself.','2 Thessalonians 2:15 tells believers to hold to traditions taught "either by word of mouth or by letter" - Scripture itself points to an authoritative oral Tradition alongside it.','Tradition is just human opinion and should be ignored.','The Church added books to the Bible, so none of it can be trusted.'],
          correct:1,
          explain:'St. Paul explicitly commends both written and orally-delivered tradition, placing them on the same footing.'},
        {type:'verse', q:'Which passage tells believers to hold traditions delivered "by word, or our epistle"?',
          options:['Romans 8:28','2 Thessalonians 2:15','1 Corinthians 13:4','Philippians 4:6'],
          correct:1,
          explain:'2 Thessalonians 2:15 - the single clearest verse placing oral apostolic teaching alongside written.'},
        {type:'objection', quote:'"Whatever Paul taught orally was later written down in the New Testament."',
          q:'What is the problem with this reply?',
          options:['Nothing - it is well established.','Scripture never says this anywhere. It is an assumption needed to rescue the theory, not a claim the text makes - which is awkward for a position that demands biblical proof for doctrines.','It contradicts the Council of Trent.','It proves too much about the Gospels.'],
          correct:1,
          explain:'Turn their own standard on the claim: where is that written? The answer is nowhere.'},
        {type:'tf', q:'2 Thessalonians 2:15 treats oral and written apostolic teaching as equally binding.', correct:true,
          explain:'Paul makes no distinction in authority between the two modes of delivery in that verse.'}
      ]
    },
    {
      id:'l6', tier:2, title:'The pillar of the truth',
      teach:[
        {h:'A title given to the Church', p:'Paul calls the Church - not Scripture - the pillar and ground of the truth. This does not lower Scripture. It identifies who is charged with safeguarding and proclaiming it.', refs:[['I Timothy',3,15,15]]},
        {h:'Why this matters practically', p:'Every text needs an interpreter. The question is never "Scripture or an interpreter" but "which interpreter". Sola scriptura does not remove the interpreter; it relocates authority to the individual reader.'}
      ],
      questions:[
        {type:'verse', q:'Which passage calls the Church "the pillar and ground of the truth"?',
          options:['2 Timothy 3:16','1 Timothy 3:15','John 17:17','2 Peter 1:20'],
          correct:1,
          explain:'1 Timothy 3:15. Paul gives this title to the Church, not to Scripture.'},
        {type:'objection', quote:'"The Bible is the only infallible rule of faith - the Church can and does err."',
          q:'How should a Catholic respond?',
          options:['By admitting the Church has no real authority.','The Bible never lists its own table of contents - it was the Church that discerned the canon; and 1 Timothy 3:15 calls the Church, not Scripture alone, the pillar and foundation of truth.','By saying the Old Testament does not matter.','By avoiding the question entirely.'],
          correct:1,
          explain:'Someone had to authoritatively determine which books belong in the Bible - that was the Church, not a self-evident list within Scripture.'},
        {type:'recall', q:'Why is "Scripture versus an interpreter" a false choice?',
          options:['Because Scripture cannot be read.','Because every text requires interpretation - so the real question is which interpreter carries authority, not whether there is one.','Because only priests may read Scripture.','Because translations always differ.'],
          correct:1,
          explain:'Sola scriptura does not eliminate the interpreter. It makes the individual reader the final court.'},
        {type:'tf', q:'Calling the Church the pillar of truth means Scripture is unreliable.', correct:false,
          explain:'It concerns who safeguards and proclaims the truth, not whether Scripture is trustworthy. The two claims are not in competition.'}
      ]
    },

    /* ======== TIER 3 - SCHOLAR ======== */
    {
      id:'l7', tier:3, title:'Where did the canon come from',
      teach:[
        {h:'No inspired table of contents', p:'Nothing inside Scripture tells you which books belong in Scripture. There is no verse listing the sixty-six or seventy-three. The canon is a judgement made about Scripture, from outside it.'},
        {h:'Why this is the hardest question', p:'If the Church could reliably discern which books are inspired, it exercised real and reliable authority. If it could not, you have no grounds for trusting your own table of contents. There is no third option, and this is why the canon argument is the strongest in the topic.'}
      ],
      questions:[
        {type:'tf', q:'The Bible contains a list stating which books belong in the Bible.', correct:false,
          explain:'No book of Scripture supplies the canon. It was discerned by the Church, with the familiar list appearing in councils at the end of the fourth century.'},
        {type:'recall', q:'Why is the canon argument effective against sola scriptura?',
          options:['Because it proves the Bible is unreliable.','Because accepting the canon means trusting a judgement Scripture itself does not supply - so the Protestant already relies on Church authority while denying it.','Because it shows the deuterocanon is inspired.','Because councils are infallible in all matters.'],
          correct:1,
          explain:'The argument is not that Scripture is untrustworthy. It is that the Protestant stands on an authority he refuses to acknowledge.'},
        {type:'objection', quote:'"The books of the Bible are self-authenticating - believers simply recognise God\'s voice in them."',
          q:'What is the difficulty with this?',
          options:['None; it settles the question.','Sincere believers disagreed for centuries over Hebrews, James, Revelation and 2 Peter. If recognition were self-evident, that dispute should not have happened - and something had to settle it.','It contradicts Romans.','It is a Catholic doctrine.'],
          correct:1,
          explain:'The historical record of genuine disagreement is the problem. Self-authentication does not explain how the dispute was resolved.'},
        {type:'recall', q:'When did the familiar canon lists appear?',
          options:['In the first century, written by the apostles.','At councils toward the end of the fourth century, ratifying books already in widespread use.','At the Council of Trent in the 1500s.','At Vatican II.'],
          correct:1,
          explain:'Late fourth century. Trent later reaffirmed it dogmatically in response to the Reformation, but did not invent it.'}
      ]
    },
    {
      id:'l8', tier:3, title:'Recognised, not invented',
      teach:[
        {h:'Be precise here', p:'The councils did not conjure a canon out of nothing. They ratified books already in widespread liturgical use and settled the disputed cases. "Recognised, not invented" is the accurate phrase - and it is more defensible than a stronger claim.'},
        {h:'The point still stands', p:'Even on the modest framing, a judgement was required, disputes existed, and the Church settled them. That is an exercise of authority. Conceding the modest version costs you nothing and makes your argument harder to dismiss.'}
      ],
      questions:[
        {type:'objection', quote:'"Church councils just invented the canon centuries later to suit themselves."',
          q:'What is the measured response?',
          options:['Agree that the canon is arbitrary.','The councils recognised rather than invented - they ratified books already in widespread liturgical use. But a judgement was still required, and the Church made it.','The canon was fixed by the apostles in writing.','The canon question is unimportant.'],
          correct:1,
          explain:'Recognised, not invented, is the accurate framing - and it still leaves the Protestant needing to explain why he trusts that judgement.'},
        {type:'recall', q:'Which New Testament books were genuinely disputed in the early centuries?',
          options:['None were ever disputed.','Hebrews, James, 2 Peter, Jude and Revelation were among those debated before being settled.','Only the four Gospels.','The letters of Paul.'],
          correct:1,
          explain:'Real, documented disagreement among orthodox Christians - which is precisely why a decision was needed.'},
        {type:'tf', q:'Conceding that councils "recognised" rather than "invented" the canon weakens the Catholic argument.', correct:false,
          explain:'It strengthens it. The modest claim is historically defensible and still requires an authority capable of settling disputes.'},
        {type:'objection', quote:'"Trent invented the Catholic canon in the 1500s."',
          q:'How do you answer?',
          options:['Concede the point.','Trent dogmatically reaffirmed a canon already in use since the late fourth century, in response to the Reformation removing books - it did not create it.','Trent was not a real council.','The canon was different before Trent.'],
          correct:1,
          explain:'The sequence matters: the list long predates Trent, which defined it formally only when it came under challenge.'}
      ]
    },
    {
      id:'l9', tier:3, title:'The deuterocanon',
      teach:[
        {h:'What the dispute is', p:'Catholic Bibles contain seven books Protestant Bibles omit - Tobit, Judith, Wisdom, Sirach, Baruch, and 1-2 Maccabees, plus additions to Esther and Daniel. These were in the Greek Septuagint used widely by the early Church, and in Christian Bibles for centuries.'},
        {h:'Do not stake an argument on them', p:'Practically: when arguing purgatory or prayer for the dead, know the New Testament arguments too. If your whole case rests on 2 Maccabees, your opponent escapes on canon grounds without engaging the substance.'}
      ],
      questions:[
        {type:'recall', q:'How many books do Catholic Bibles contain that Protestant Bibles omit?',
          options:['Three.','Seven, plus additions to Esther and Daniel.','Twelve.','None; the difference is only in ordering.'],
          correct:1,
          explain:'Tobit, Judith, Wisdom, Sirach, Baruch, 1 and 2 Maccabees, plus the Greek portions of Esther and Daniel.'},
        {type:'recall', q:'What is the practical lesson when arguing from 2 Maccabees?',
          options:['Always lead with it.','Have the New Testament arguments ready too, or your opponent dismisses the whole case on canon grounds without engaging the substance.','Never mention it.','Insist they accept the Catholic canon first.'],
          correct:1,
          explain:'Leading with a contested book lets the argument be waved away. Lead with shared ground and bring 2 Maccabees as reinforcement.'},
        {type:'tf', q:'The deuterocanonical books were included in Christian Bibles for centuries before the Reformation.', correct:true,
          explain:'They appear in the Septuagint and in Christian usage long before the sixteenth century removed them from Protestant editions.'},
        {type:'objection', quote:'"The Jews rejected those books, so Christians should too."',
          q:'What is worth noting in reply?',
          options:['Nothing; the point is decisive.','The Jewish canon was itself not finally settled in the first century, the early Church largely used the Greek Septuagint which included them, and the New Testament writers quote the Septuagint frequently.','That Jews have no canon.','That the books were written in Latin.'],
          correct:1,
          explain:'The appeal to a fixed first-century Jewish canon assumes something that was not yet settled at the time.'}
      ]
    },
    {
      id:'l10', tier:3, title:'The self-refutation, formally',
      teach:[
        {h:'State it as an argument', p:'Premise one: sola scriptura says every doctrine binding on Christians must be established from Scripture alone. Premise two: sola scriptura is a doctrine binding on Christians. Premise three: sola scriptura cannot be established from Scripture alone. Conclusion: by its own standard, sola scriptura fails.'},
        {h:'The escape routes', p:'They can deny premise two - saying it is not itself a doctrine but a methodological rule. Then ask what authority establishes the rule. Or they can deny premise three and produce a verse - which returns you to 2 Timothy 3, where you are ready.'}
      ],
      questions:[
        {type:'recall', q:'What is the formal structure of the self-refutation argument?',
          options:['That Scripture contradicts itself.','That sola scriptura requires all binding doctrine be proven from Scripture, is itself binding doctrine, and cannot be proven from Scripture - so it fails its own test.','That Protestants cannot read.','That councils outrank Scripture.'],
          correct:1,
          explain:'Stating it formally makes the escape routes visible, so you can anticipate whichever one they take.'},
        {type:'objection', quote:'"Sola scriptura is not a doctrine, it is a methodological principle about authority."',
          q:'How do you press this?',
          options:['Accept it and move on.','Ask what authority establishes that principle. If Scripture does not, then some extra-biblical authority does - which is the very thing the principle denies.','Say methodology is irrelevant.','Argue that principles cannot be discussed.'],
          correct:1,
          explain:'The move relocates the problem rather than solving it. A rule about authority still needs authorisation.'},
        {type:'tf', q:'In a debate over sola scriptura, the burden of proof is on the Protestant.', correct:true,
          explain:'It is their formal principle. Asking them to establish it is a fair demand on their own terms.'},
        {type:'recall', q:'If an opponent responds by quoting 2 Timothy 3:16, what has happened?',
          options:['You have lost the argument.','They have denied the third premise, which moves the debate onto a text you have already prepared - a good outcome.','The argument is unresolvable.','You should change topics.'],
          correct:1,
          explain:'Anticipating the move is the point. It lands you exactly where your preparation is strongest.'}
      ]
    },

    /* ======== TIER 4 - ADVOCATE ======== */
    {
      id:'l11', tier:4, title:'Mark 7: Jesus against tradition',
      teach:[
        {h:'Their strongest counter-text', p:'Jesus condemns those who make void the word of God by their tradition, using the Corban rule as his example. This is a serious passage and deserves a serious answer.', refs:[['Mark',7,6,13]]},
        {h:'Read the target carefully', p:'What he condemns is human traditions that OVERRIDE God\'s commandment. Catholic teaching condemns exactly the same thing. Sacred Tradition claims to be apostolic in origin, not a human workaround - so the passage does not touch it unless that claim is separately refuted.'}
      ],
      questions:[
        {type:'objection', quote:'"Jesus condemned tradition in Mark 7 - he called it nullifying the word of God."',
          q:'How do you answer?',
          options:['He did, so Catholics should abandon Tradition.','He condemned specific HUMAN traditions that override God\'s commandment - the Corban rule being his example. Catholic teaching condemns the same thing; Sacred Tradition claims apostolic origin, not human invention.','Mark 7 is not part of the true Gospel.','Jesus was only speaking to Pharisees, so it has no application today.'],
          correct:1,
          explain:'Read the passage and the target is clear: traditions that void God\'s command. That is not what Sacred Tradition claims to be.'},
        {type:'recall', q:'What specific practice does Jesus use as his example in Mark 7?',
          options:['Ritual handwashing only.','The Corban rule, by which property pledged to the Temple could be used to avoid supporting one\'s parents - overriding the commandment to honour father and mother.','Sabbath observance.','Dietary laws.'],
          correct:1,
          explain:'Knowing the concrete example lets you show precisely what kind of tradition is condemned: one that cancels a divine command.'},
        {type:'tf', q:'Mark 7 condemns all tradition of every kind.', correct:false,
          explain:'It condemns human traditions that nullify God\'s word. Paul commends apostolic tradition in the same New Testament, so a blanket reading makes Scripture contradict itself.'},
        {type:'objection', quote:'"Any tradition not found in Scripture is a tradition of men."',
          q:'What is the flaw?',
          options:['There is no flaw.','It assumes the conclusion - that only Scripture can convey apostolic teaching - which is the very point in dispute, and 2 Thessalonians 2:15 denies it.','It misquotes Mark.','It ignores the Old Testament.'],
          correct:1,
          explain:'This is question-begging. The premise smuggles in sola scriptura in order to prove it.'}
      ]
    },
    {
      id:'l12', tier:4, title:'Big-T and small-t',
      teach:[
        {h:'Two different things', p:'Sacred Tradition is the apostolic deposit handed on, whether written or oral. Ecclesiastical traditions are customs and disciplines - clerical celibacy, fast rules, liturgical languages - which can and do change. Protestants frequently attack the second while Catholics defend the first.'},
        {h:'Insist on the distinction early', p:'If you let them treat abstinence rules and the Trinity as the same category, the conversation becomes unwinnable and unfair. Naming the distinction is not evasion; it is precision.'}
      ],
      questions:[
        {type:'recall', q:'What does "Sacred Tradition" mean in Catholic teaching?',
          options:['Any old custom passed down in a parish.','The teaching of Christ and the apostles, handed down and faithfully preserved and interpreted by the Church across the centuries.','Whatever the pope personally prefers.','Local folk devotions with no doctrinal content.'],
          correct:1,
          explain:'Sacred Tradition is the living transmission of the apostolic deposit - distinct from small-t traditions like customs, which can change.'},
        {type:'objection', quote:'"The Church changed the rule on eating meat on Fridays, so Tradition clearly changes."',
          q:'What is the response?',
          options:['Concede that doctrine changes.','That is a discipline, not Sacred Tradition. Disciplines are Church regulations that can be adjusted; the apostolic deposit is not.','The rule never changed.','Fasting rules are infallible.'],
          correct:1,
          explain:'Conflating discipline with doctrine is extremely common. Separating them removes most apparent examples of "changing teaching".'},
        {type:'tf', q:'Clerical celibacy is a doctrine that can never change.', correct:false,
          explain:'It is a discipline of the Latin Church, and Eastern Catholic Churches already ordain married men. Knowing this prevents you defending the wrong thing.'},
        {type:'recall', q:'What are the three elements Catholic teaching holds together as the rule of faith?',
          options:['Scripture, reason, and personal experience.','Sacred Scripture, Sacred Tradition, and the Magisterium - none of which stands alone.','The pope, the cardinals, and the bishops.','The Bible, the Catechism, and canon law.'],
          correct:1,
          explain:'Scripture is the written apostolic preaching, Tradition its living transmission, the Magisterium the office guarding both.'}
      ]
    },
    {
      id:'l13', tier:4, title:'Is Scripture clear on its own?',
      teach:[
        {h:'The perspicuity claim', p:'Sola scriptura relies on Scripture being clear enough in essentials for the ordinary reader. Without that, the doctrine is unworkable in practice - an infallible book nobody can reliably interpret settles nothing.'},
        {h:'Scripture on its own difficulty', p:'2 Peter says Paul writes things hard to understand, which the unstable twist to their destruction - and the Ethiopian eunuch, asked whether he understood what he was reading, answers that he cannot unless someone guides him.', refs:[['II Peter',3,15,16]]}
      ],
      questions:[
        {type:'recall', q:'What is perspicuity, and why does sola scriptura need it?',
          options:['The claim that Scripture is inspired.','The claim that Scripture is clear enough in essentials for ordinary readers - without which an infallible text still settles no disputes.','The claim that only scholars may interpret.','The claim that Scripture is complete.'],
          correct:1,
          explain:'Infallibility without clarity is useless in practice. This is the pressure point in the whole system.'},
        {type:'verse', q:'Which passage says some of Paul\'s writings are "hard to be understood"?',
          options:['2 Peter 3:16','1 Corinthians 2:14','Romans 16:25','Hebrews 5:12'],
          correct:0,
          explain:'2 Peter 3:16 - and it adds that the unlearned and unstable wrest them to their own destruction.'},
        {type:'objection', quote:'"Scripture is clear on everything essential to salvation."',
          q:'What is the strongest probe?',
          options:['Agree with them.','Ask who decides which doctrines are essential - that judgement is not supplied by Scripture either, so the same problem reappears one level up.','Say Scripture is unclear everywhere.','Quote the Catechism.'],
          correct:1,
          explain:'The essentials list is itself an extra-biblical judgement. The problem does not go away; it moves.'},
        {type:'tf', q:'The Ethiopian eunuch in Acts said he could not understand the passage without a guide.', correct:true,
          explain:'Acts 8 - and Philip is sent precisely to interpret it for him. A useful and vivid illustration.'}
      ]
    },

    /* ======== TIER 5 - DOCTOR ======== */
    {
      id:'l14', tier:5, title:'The fruit of private judgement',
      teach:[
        {h:'Use the argument carefully', p:'Protestant division is often cited as disproving sola scriptura. Handle it honestly: the frequently-quoted figure of tens of thousands of denominations is inflated and counts independent congregations. Using a bad statistic hands your opponent an easy win.'},
        {h:'The sound version', p:'Drop the numbers and make the structural point. Sincere, intelligent, prayerful readers of the same clear text reached contradictory conclusions on baptism, the Eucharist, church government and salvation itself - within a generation of the Reformation. If Scripture alone were sufficient to settle doctrine, that should not happen.'}
      ],
      questions:[
        {type:'recall', q:'What is wrong with citing "33,000 Protestant denominations"?',
          options:['Nothing; it is well documented.','The figure is inflated and counts independent congregations and national bodies rather than distinct theologies - using it invites an easy rebuttal.','It is too small.','It comes from a Protestant source.'],
          correct:1,
          explain:'Weak statistics discredit a sound argument. Make the structural point instead.'},
        {type:'recall', q:'What is the sound form of the division argument?',
          options:['That Protestants are insincere.','That sincere, capable readers of the same text reached contradictory conclusions on central doctrines almost immediately - which is hard to reconcile with Scripture alone being sufficient to settle them.','That there are too many denominations to count.','That division proves Scripture is false.'],
          correct:1,
          explain:'The argument is about the sufficiency of the method, not the sincerity of the people.'},
        {type:'tf', q:'Luther and Zwingli agreed on the Eucharist.', correct:false,
          explain:'They divided sharply over it at Marburg in 1529, within a decade of the Reformation beginning - both appealing to the same Scripture.'},
        {type:'objection', quote:'"Catholics disagree among themselves too."',
          q:'What is the fair reply?',
          options:['Deny that Catholics disagree.','Concede that Catholics argue plenty - but note there is a principled way to settle a dispute definitively, which is what is at issue. The question is whether the system has a resolution mechanism, not whether people argue.','Say those Catholics are not real Catholics.','Change the subject.'],
          correct:1,
          explain:'Conceding the obvious and reframing to the real question is far stronger than denying something visibly true.'}
      ]
    },
    {
      id:'l15', tier:5, title:'Development of doctrine',
      teach:[
        {h:'The charge', p:'Sophisticated opponents will not just say "that is not in the Bible" - they will say Catholic doctrine EVOLVED, and that development is a euphemism for invention. This is the strongest version of the objection and deserves the strongest answer.'},
        {h:'Development versus corruption', p:'Newman argued that living ideas unfold over time while remaining the same idea, and offered tests to distinguish genuine development from corruption: preservation of type, continuity of principles, and the power to assimilate. The test is not whether a doctrine was stated in AD 100, but whether what emerged is the same seed grown, or a different plant.'}
      ],
      questions:[
        {type:'recall', q:'What is the difference between development and corruption of doctrine?',
          options:['There is none.','Development unfolds what was implicitly present while preserving type and principles; corruption reverses or contradicts what came before. Newman proposed tests to distinguish them.','Development means changing doctrine freely.','Corruption is simply any change at all.'],
          correct:1,
          explain:'Without this distinction every doctrine either must be fully articulated in AD 100 or is illegitimate - a standard the Trinity itself would fail.'},
        {type:'objection', quote:'"Development of doctrine is just a licence to invent whatever you like."',
          q:'What is the sharpest reply?',
          options:['Concede the point.','Apply the standard evenly: the words Trinity, homoousios and hypostatic union are not in Scripture either, and were hammered out over centuries. If development is illegitimate, the Trinity goes too.','Say Newman was wrong.','Argue that nothing ever develops.'],
          correct:1,
          explain:'This is the decisive move at this level. Almost no opponent will abandon Nicaea to win the point.'},
        {type:'tf', q:'The word "Trinity" appears in the Bible.', correct:false,
          explain:'It does not, nor does homoousios. Both were formulated later to protect what Scripture teaches - the same pattern Catholics claim for other doctrines.'},
        {type:'recall', q:'Why is the Trinity the best example to use here?',
          options:['Because it is easy to explain.','Because it is a doctrine your opponent certainly holds, is not stated in Scripture in its developed form, and took centuries of controversy to define - so it shows the principle they must already accept.','Because Protestants reject it.','Because it appears in 1 John 5:7.'],
          correct:1,
          explain:'Arguing from a premise they already accept is far stronger than asking them to grant a new one.'}
      ]
    },
    {
      id:'l16', tier:5, title:'Putting it together',
      teach:[
        {h:'The order of battle', p:'One: refuse the caricature - you affirm Scripture is inspired and true. Two: ask them to establish sola scriptura from Scripture alone, since the burden is theirs. Three: when 2 Timothy 3:16 arrives, answer it. Four: present 2 Thessalonians 2:15 and 1 Timothy 3:15. Five: close with the canon.'},
        {h:'What winning looks like', p:'Not that they convert on the spot. It is that they see the position requires an authority it cannot account for - that they already trust the Church\'s judgement every time they open to the table of contents. Leave them with a question they cannot answer rather than a victory you announce.'}
      ],
      questions:[
        {type:'recall', q:'What is the correct opening move in this debate?',
          options:['Quoting the Catechism.','Affirming that Scripture is inspired and true, then asking them to establish sola scriptura from Scripture alone.','Arguing for the deuterocanon.','Attacking Luther.'],
          correct:1,
          explain:'Refuse the caricature, then place the burden where it belongs. Everything else follows more easily.'},
        {type:'recall', q:'Why is the canon argument saved for last?',
          options:['Because it is weakest.','Because it is the strongest and hardest to escape - it lands best once they have already tried and failed to establish sola scriptura from Scripture.','Because it takes longest to explain.','Because it requires the deuterocanon.'],
          correct:1,
          explain:'Sequence matters. The canon question bites hardest after the earlier ground has been cleared.'},
        {type:'tf', q:'The aim of this argument is to get an immediate concession.', correct:false,
          explain:'The aim is that they see the position depends on an authority it cannot account for. Conversion is not a debating outcome.'},
        {type:'objection', quote:'"Fine - but I still trust my Bible more than your Church."',
          q:'What is the best closing?',
          options:['Declare victory.','Ask gently where the table of contents came from - because trusting that list is already trusting the judgement of the Church, whether or not one calls it that.','Insist they submit to Rome.','Repeat the earlier arguments louder.'],
          correct:1,
          explain:'Ending on a question they carry away is more effective than a conclusion you assert.'}
      ]
    }

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
