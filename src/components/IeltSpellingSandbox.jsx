import React, { useState } from 'react';

export default function IeltSpellingSandbox() {
 
const DICTIONARY = [
  { word: "abundant", sentence: "The region is famous for its abundant natural resources and fertile soil." },
  { word: "accumulate", sentence: "Over the years, scientists have managed to accumulate data from various climate stations." },
  { word: "adverse", sentence: "Tax increases can have an adverse effect on small business growth." },
  { word: "advocate", sentence: "Many environmentalists advocate for stricter laws against plastic pollution." },
  { word: "ambiguous", sentence: "The wording of the law is highly ambiguous, leading to multiple legal disputes." },
  { word: "autonomous", sentence: "Universities operate as autonomous institutions, free from direct government control." },
  { word: "beneficial", sentence: "A balanced diet and regular exercise are deeply beneficial to long-term health." },
  { word: "bias", sentence: "The researchers took great care to ensure no personal bias influenced the data." },
  { word: "catastrophic", sentence: "The failure of the dam had catastrophic consequences for the local towns." },
  { word: "chronological", sentence: "The history professor asked us to list the events in chronological order." },
  { word: "cognitive", sentence: "Puzzles and reading help maintain cognitive function as people grow older." },
  { word: "coherent", sentence: "The candidate failed to present a coherent strategy for tackling unemployment." },
  { word: "commence", sentence: "The construction of the new railway system is scheduled to commence next month." },
  { word: "compelling", sentence: "The report provided compelling evidence that human activity accelerates global warming." },
  { word: "comprehensive", sentence: "The book offers a comprehensive guide to understanding modern architecture." },
  { word: "conducive", sentence: "A quiet room with minimal distractions is highly conducive to studying." },
  { word: "detrimental", sentence: "Spending excessive hours looking at screens can be detrimental to your eyesight." },
  { word: "deviate", sentence: "You must follow the steps carefully and not deviate from the original plan." },
  { word: "diminish", sentence: "As new technologies emerge, the demand for traditional mail services will diminish." },
  { word: "discrepancy", sentence: "The accountant noticed a huge discrepancy between the bank statement and our receipts." },
  { word: "diverse", sentence: "The city boasts a culturally diverse population with people from all over the world." },
  { word: "drastic", sentence: "The government had to take drastic measures to stabilize the falling economy." },
  { word: "enhance", sentence: "Adding illustrations to the textbook can greatly enhance student engagement." },
  { word: "erroneous", sentence: "The article was retracted because it was based on completely erroneous data." },
  { word: "evaluate", sentence: "It takes time for supervisors to evaluate the performance of each employee." },
  { word: "exacerbate", sentence: "Leaving a dynamic wound untreated will only exacerbate the infection." },
  { word: "feasible", sentence: "Building a bridge across the wide channel is not economically feasible right now." },
  { word: "fluctuate", sentence: "Fuel prices tend to fluctuate wildly depending on global political stability." },
  { word: "formidable", sentence: "The opposing debate team put up a formidable argument that was hard to beat." },
  { word: "hinder", sentence: "A lack of structural funding will severely hinder the progress of the research project." },
  { word: "holistic", sentence: "Doctors are shifting toward a holistic approach that treats the whole mind and body." },
  { word: "imperative", sentence: "It is absolutely imperative that we reduce carbon emissions over the next decade." },
  { word: "incorporate", sentence: "The new design aims to incorporate local cultural elements into the artwork." },
  { word: "inevitable", sentence: "With the rapid rise of automation, some amount of job displacement is inevitable." },
  { word: "infrastructure", sentence: "Developing countries must invest heavily in infrastructure like roads and power grids." },
  { word: "innovative", sentence: "The young tech startup won an award for their innovative eco-friendly packaging." },
  { word: "insignificant", sentence: "The statistical difference between the two test groups was entirely insignificant." },
  { word: "integrate", sentence: "It can take several months for immigrant families to fully integrate into a new society." },
  { word: "jeopardize", sentence: "Failing your final exams could jeopardize your chances of getting into university." },
  { word: "lucrative", sentence: "The software engineer left his job to start a highly lucrative consulting firm." },
  { word: "mitigate", sentence: "Planting native trees helps mitigate the destructive effects of soil erosion." },
  { word: "monotonous", sentence: "Factory workers often complain about the monotonous nature of assembly lines." },
  { word: "negligible", sentence: "The cost difference between the two models is negligible, so buy the better one." },
  { word: "obsolete", sentence: "The invention of streaming services quickly made physical DVDs obsolete." },
  { word: "plausible", sentence: "The detective felt that the suspect's alibi was completely plausible." },
  { word: "profound", sentence: "The invention of the printing press had a profound impact on global literacy." },
  { word: "subsequent", sentence: "The first experiment failed, but subsequent trials yielded positive results." },
  { word: "substantial", sentence: "The company reported a substantial increase in profits after the rebranding." },
  { word: "unprecedented", sentence: "The global pandemic caused an unprecedented disruption to international travel." },
  { word: "vulnerable", sentence: "Without strong digital security, personal data remains vulnerable to hackers." },
  { word: "abstract", sentence: "The concept of beauty is completely abstract and varies across different cultures." },
  { word: "advancement", sentence: "Technological advancement has drastically changed the way modern businesses operate." },
  { word: "advocate", sentence: "Health organizations advocate for a reduction in daily sugar consumption." },
  { word: "aesthetic", sentence: "The architect paid close attention to both the structural safety and the aesthetic appeal of the building." },
  { word: "allocate", sentence: "The local council decided to allocate extra funds to build new public parks." },
  { word: "alteration", sentence: "The dress required a slight alteration around the waist to fit her perfectly." },
  { word: "ambition", sentence: "Her lifelong ambition is to work as a human rights lawyer for the United Nations." },
  { word: "anticipate", sentence: "Economists anticipate a steady recovery in the global market over the next fiscal quarter." },
  { word: "assertion", sentence: "The defense lawyer made a strong assertion regarding his client's innocence." },
  { word: "attain", sentence: "With dedication and hard work, you can easily attain a high band score in IELTS." },
  { word: "attribute", sentence: "Scientists attribute the recent rise in global temperatures to greenhouse gas emissions." },
  { word: "breakthrough", sentence: "Medical researchers have made a major breakthrough in finding a cure for the disease." },
  { word: "coincide", sentence: "The publication of the framework will coincide with the international tech conference." },
  { word: "collaboration", sentence: "The project was a successful collaboration between engineering and design departments." },
  { word: "compensation", sentence: "The airline offered financial compensation to passengers whose flights were delayed." },
  { word: "concession", sentence: "The company made a major concession during negotiations to avoid a worker strike." },
  { word: "demolish", sentence: "The city plans to demolish the old factory and replace it with a modern library." },
  { word: "depletion", sentence: "The rapid depletion of natural gas reserves is a major concern for energy security." },
  { word: "deteriorate", sentence: "If left untreated, a patient's physical condition can deteriorate very quickly." },
  { word: "differentiation", sentence: "Product differentiation is essential if a small business wants to stand out from competitors." },
  { word: "distortion", sentence: "The microphone caused a strange distortion in the speaker's natural voice." },
  { word: "duration", sentence: "Passengers must keep their seatbelts fastened for the entire duration of the flight." },
  { word: "elimination", sentence: "The health campaign targets the complete elimination of malaria from the region." },
  { word: "empirical", sentence: "The theory is fully supported by empirical evidence gathered over a ten-year study." },
  { word: "equivalent", sentence: "Passing this specific exam is considered equivalent to a university degree." },
  { word: "evolution", sentence: "The book traces the historical evolution of human language over thousands of years." },
  { word: "explicit", sentence: "The teacher gave explicit instructions on how to structure the writing essay." },
  { word: "exploitation", sentence: "New laws were introduced to protect vulnerable workers from economic exploitation." },
  { word: "fluctuation", sentence: "The constant fluctuation of the stock market makes it difficult for beginners to invest safely." },
  { word: "foster", sentence: "Group projects at school are designed to foster team spirit and cooperation among students." },
  { word: "hypothesis", sentence: "The researchers set up an experiment to test their initial hypothesis." },
  { word: "implication", sentence: "The discovery of liquid water on Mars has a profound implication for the search for alien life." },
  { word: "incentive", sentence: "The company offers a cash bonus as an incentive for employees to meet their sales targets." },
  { word: "indispensable", sentence: "A reliable internet connection has become indispensable for remote workers today." },
  { word: "infinitesimal", sentence: "The difference in weight between the two chemical samples was completely infinitesimal." },
  { word: "inherent", sentence: "Every investment plan has an inherent level of risk that cannot be entirely removed." },
  { word: "innovation", sentence: "Continuous innovation is necessary for technology companies to stay ahead of the market." },
  { word: "insight", sentence: "The documentary provides a fascinating insight into the daily life of deep-sea creatures." },
  { word: "inspection", sentence: "The aircraft underwent a strict safety inspection before it was cleared to take off." },
  { word: "intensity", sentence: "The solar panels are placed on the roof to capture the full intensity of the sun." },
  { word: "interference", sentence: "Thick concrete walls can cause severe signal interference with your Wi-Fi router." },
  { word: "interpretation", sentence: "Two different historians can look at the same data and reach a different interpretation." },
  { word: "marginal", sentence: "The new manufacturing process resulted in a marginal improvement in overall speed." },
  { word: "notion", sentence: "Many people still cling to the outdated notion that success is measured purely by wealth." },
  { word: "obstacle", sentence: "A lack of local funding proved to be a major obstacle to completing the stadium." },
  { word: "paradox", sentence: "It is a strange paradox that some people feel incredibly lonely in crowded cities." },
  { word: "prevention", sentence: "The government is investing heavily in medical programs focused on disease prevention." },
  { word: "relevance", sentence: "The critic questioned the cultural relevance of the old movie to modern audiences." },
  { word: "supplement", sentence: "He takes vitamin pills to supplement his diet because he does not eat enough vegetables." },
  { word: "transformation", sentence: "The industrial revolution caused a massive economic transformation across the country." },
  { word: "assertion", sentence: "The author's assertion that technology isolates people is supported by recent statistics." },
  { word: "bolster", sentence: "To bolster economic growth, governments must invest heavily in local industries." },
  { word: "contradict", sentence: "The findings of the new study flatly contradict previous theories on the matter." },
  { word: "corroborate", sentence: "Independent researchers were called in to corroborate the initial laboratory results." },
  { word: "counterproductive", sentence: "Imposing overly strict regulations on startups can often be counterproductive to innovation." },
  { word: "criterion", sentence: "Academic merit remains the primary criterion used to award university scholarships." },
  { word: "empirical", sentence: "The research paper relies on empirical evidence rather than purely theoretical speculation." },
  { word: "exemplify", sentence: "High tax rates on luxury items exemplify how governments try to curb excess spending." },
  { word: "fallacy", sentence: "It is a common fallacy to assume that all online information is entirely accurate." },
  { word: "illustrate", sentence: "The case study serves to illustrate the devastating impact of sudden inflation." },
  { word: "justification", sentence: "There is no valid economic justification for cutting public transport budgets." },
  { word: "notion", sentence: "Society must abandon the outdated notion that vocational training is inferior to a university degree." },
  { word: "paramount", sentence: "When designing public infrastructure, ensuring citizen safety is of paramount importance." },
  { word: "prevalent", sentence: "Sedentary lifestyles have become increasingly prevalent among office workers." },
  { word: "ramification", sentence: "The sudden closure of the factory will have a severe financial ramification for the entire town." },
  { word: "rationale", sentence: "The structural rationale behind the tax hike was to fund the new national healthcare system." },
  { word: "salient", sentence: "The presentation highlighted the most salient points of the global market expansion strategy." },
  { word: "spectrum", sentence: "The community center offers a broad spectrum of services for people of all ages." },
  { word: "unsubstantiated", sentence: "The media should not publish unsubstantiated rumors before an official investigation concludes." },
  { word: "validity", sentence: "Scientists have questioned the mathematical validity of the data collection method." },

  // --- WORDS FOR SPEAKING (EXPRESSING OPINIONS, FEELINGS & NUANCE) ---
  { word: "apprehensive", sentence: "I was quite apprehensive before my first job interview, but it went smoothly." },
  { word: "captivating", sentence: "The historical museum featured a captivating exhibition on ancient civilizations." },
  { word: "connoisseur", sentence: "My uncle is a true connoisseur of classical music and collects rare vinyl records." },
  { word: "cumbersome", sentence: "Carrying a huge backpack around the city all day proved to be incredibly cumbersome." },
  { word: "eccentric", sentence: "Our old art teacher had an eccentric personality, but everyone absolutely loved her." },
  { word: "exhilarating", sentence: "Scuba diving among coral reefs was the most exhilarating experience of my life." },
  { word: "fondness", sentence: "I always look back with great fondness on the summers I spent at my grandparents' farm." },
  { word: "frugal", sentence: "As a college student living on a tight budget, I had to adopt a very frugal lifestyle." },
  { word: "glimpse", sentence: "We managed to catch a brief glimpse of the celebrity as she rushed to her car." },
  { word: "indispensable", sentence: "A reliable smartphone has become completely indispensable for navigating a new city." },
  { word: "intricate", sentence: "The traditional outfit was covered in intricate embroidery that took months to stitch." },
  { word: "jovial", sentence: "The street festival had a wonderfully jovial atmosphere with live music and dancing." },
  { word: "memorable", sentence: "Graduation day was a highly memorable milestone that I will cherish forever." },
  { word: "meticulous", sentence: "She is a meticulous planner who organizes every single detail of her trips in advance." },
  { word: "nostalgic", sentence: "Hearing that old song always makes me feel incredibly nostalgic about my childhood." },
  { word: "overwhelming", sentence: "Moving to a massive metropolis alone can feel a bit overwhelming at first." },
  { word: "plethora", sentence: "The local library offers a plethora of books and free digital resources for students." },
  { word: "reminisce", sentence: "My old school friends and I love to sit down and reminisce about our teenage years." },
  { word: "scenically", sentence: "The train ride through the Swiss Alps is scenically stunning and highly recommended." },
  { word: "vividly", sentence: "I still vividly remember my very first flight across the ocean when I was seven." },

  // --- GENERAL TOPIC ADVANCEMENT WORDS ---
  { word: "alleviate", sentence: "Building dynamic public transit options is the best way to alleviate traffic congestion." },
  { word: "catalyst", sentence: "The invention of the smartphone acted as a major catalyst for the app economy." },
  { word: "eradicate", sentence: "Global health initiatives are working tirelessly to completely eradicate polio worldwide." },
  { word: "fluctuate", sentence: "My motivation levels tend to fluctuate depending on how tired I am feeling." },
  { word: "holistic", sentence: "Schools are moving toward a more holistic approach that values art alongside science." },
  { word: "imperative", sentence: "It is absolutely imperative that young people learn basic financial management skills." },
  { word: "lucrative", sentence: "Data science has emerged as a highly lucrative career path over the past decade." },
  { word: "obsolete", sentence: "As digital streaming took over, physical cassette tapes became entirely obsolete." },
  { word: "profound", sentence: "Studying abroad can have a profound impact on a student's personal development." },
  { word: "vulnerable", sentence: "Coastal towns are exceptionally vulnerable to the dangers of rising sea levels." },
    { word: "a", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
  { word: "abandon", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
  { word: "accessible", sentence: "In medicine, breakthroughs in diagnostic imaging and telehealth have made medical care accessible to vulnerable populations living in remote areas." },
  { word: "actively", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
  { word: "acts", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
  { word: "advancement", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
  { word: "advantages", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
  { word: "agricultural", sentence: "In many rural economies, traditional crafts and localized agricultural methods have been entirely supplanted by mechanized machinery." },
  { word: "alleviates", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
  { word: "although", sentence: "In conclusion, although technological disruption poses a genuine risk to traditional ways of living, it remains a paramount tool for human development." },
  { word: "ancient", sentence: "Digital archives and virtual museums now allow global audiences to explore ancient history, ensuring that historic artifacts are protected for subsequent generations." },
  { word: "ancestral", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
  { word: "and", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
  { word: "another", sentence: "On the other hand, the advantages of modern innovation are substantial and cannot be ignored." },
  { word: "archives", sentence: "Digital archives and virtual museums now allow global audiences to explore ancient history, ensuring that historic artifacts are protected for subsequent generations." },
  { word: "argued", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
  { word: "arts", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
  { word: "artifacts", sentence: "Digital archives and virtual museums now allow global audiences to explore ancient history, ensuring that historic artifacts are protected for subsequent generations." },
  { word: "as", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
  { word: "audiences", sentence: "Digital archives and virtual museums now allow global audiences to explore ancient history, ensuring that historic artifacts are protected for subsequent generations." },
  { word: "automated", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
  { word: "automation", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
  { word: "because", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
  { word: "behind", sentence: "The primary rationale behind developing new technologies is to enhance human productivity and mitigate risks." },
  { word: "believe", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
  { word: "beneficial", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
  { word: "breakthroughs", sentence: "In medicine, breakthroughs in diagnostic imaging and telehealth have made medical care accessible to vulnerable populations living in remote areas." },
  { word: "bridges", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
  { word: "brings", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
  { word: "by", sentence: "In many rural economies, traditional crafts and localized agricultural methods have been entirely supplanted by mechanized machinery." },
  { word: "can", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
  { word: "cannot", sentence: "On the other hand, the advantages of modern innovation are substantial and cannot be ignored." },
  { word: "care", sentence: "In medicine, breakthroughs in diagnostic imaging and telehealth have made medical care accessible to vulnerable populations living in remote areas." },
  { word: "careers", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
  { word: "catalyst", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
  { word: "cause", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
  { word: "centers", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
  { word: "centuries-old", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
  { word: "certain", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
  { word: "civilization", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
  { word: "communication", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
  { word: "community", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
  { word: "conclusion", sentence: "In conclusion, although technological disruption poses a genuine risk to traditional ways of living, it remains a paramount tool for human development." },
  { word: "crafts", sentence: "In many rural economies, traditional crafts and localized agricultural methods have been entirely supplanted by mechanized machinery." },
  { word: "critics", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
  { word: "cultural", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage."},
{ word: "culture", sentence: "Furthermore, technology does not inherently destroy culture; rather, it provides an innovative platform to preserve it." },
{ word: "customs", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
{ word: "deeply", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
{ word: "destroy", sentence: "Furthermore, technology does not inherently destroy culture; rather, it provides an innovative platform to preserve it." },
{ word: "destruction", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "developing", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "development", sentence: "In conclusion, although technological disruption poses a genuine risk to traditional ways of living, it remains a paramount tool for human development." },
{ word: "diagnostic", sentence: "In medicine, breakthroughs in diagnostic imaging and telehealth have made medical care accessible to vulnerable populations living in remote areas." },
{ word: "digital", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
{ word: "dilution", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "disruption", sentence: "In conclusion, although technological disruption poses a genuine risk to traditional ways of living, it remains a paramount tool for human development." },
{ word: "do", sentence: "Furthermore, technology does not inherently destroy culture; rather, it provides an innovative platform to preserve it." },
{ word: "document", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
{ word: "does", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
{ word: "due", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "dying", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "economies", sentence: "In many rural economies, traditional crafts and localized agricultural methods have been entirely supplanted by mechanized machinery." },
{ word: "educational", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
{ word: "efficiency", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "embrace", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
{ word: "endangered", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
{ word: "enhance", sentence: "The primary rationale behind developing new technologies is to enhance human productivity and mitigate risks." },
{ word: "ensuring", sentence: "Digital archives and virtual museums now allow global audiences to explore ancient history, ensuring that historic artifacts are protected for subsequent generations." },
{ word: "entirely", sentence: "In many rural economies, traditional crafts and localized agricultural methods have been entirely supplanted by mechanized machinery." },
{ word: "evolution", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "explore", sentence: "Digital archives and virtual museums now allow global audiences to explore ancient history, ensuring that historic artifacts are protected for subsequent generations." },
{ word: "factories", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "family", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
{ word: "for", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "furthermore", sentence: "Furthermore, technology does not inherently destroy culture; rather, it provides an innovative platform to preserve it." },
{ word: "gaps", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
{ word: "generations", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
{ word: "genuine", sentence: "In conclusion, although technological disruption poses a genuine risk to traditional ways of living, it remains a paramount tool for human development." },
{ word: "global", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
{ word: "growth", sentence: "On the one hand, opponents of uninhibited tech growth point out that it makes traditional practices obsolete." },
{ word: "hand", sentence: "On the one hand, opponents of uninhibited tech growth point out that it makes traditional practices obsolete." },
{ word: "hand-weaving", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "hardships", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
{ word: "have", sentence: "In many rural economies, traditional crafts and localized agricultural methods have been entirely supplanted by mechanized machinery." },
{ word: "heritage", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "historic", sentence: "Digital archives and virtual museums now allow global audiences to explore ancient history, ensuring that historic artifacts are protected for subsequent generations." },
{ word: "historical", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
{ word: "history", sentence: "Digital archives and virtual museums now allow global audiences to explore ancient history, ensuring that historic artifacts are protected for subsequent generations." },
{ word: "human", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
{ word: "identity", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
{ word: "ignored", sentence: "On the other hand, the advantages of modern innovation are substantial and cannot be ignored." },
{ word: "imaging", sentence: "In medicine, breakthroughs in diagnostic imaging and telehealth have made medical care accessible to vulnerable populations living in remote areas." },
{ word: "immense", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "implementing", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
{ word: "in", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
{ word: "inherently", sentence: "Furthermore, technology does not inherently destroy culture; rather, it provides an innovative platform to preserve it." },
{ word: "innovation", sentence: "On the other hand, the advantages of modern innovation are substantial and cannot be ignored." },
{ word: "innovative", sentence: "Furthermore, technology does not inherently destroy culture; rather, it provides an innovative platform to preserve it." },
{ word: "instance", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "is", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "it", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "leading", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "living", sentence: "In conclusion, although technological disruption poses a genuine risk to traditional ways of living, it remains a paramount tool for human development." },
{ word: "localized", sentence: "In many rural economies, traditional crafts and localized agricultural methods have been entirely supplanted by mechanized machinery." },
{ word: "loss", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
{ word: "machinery", sentence: "In many rural economies, traditional crafts and localized agricultural methods have been entirely supplanted by mechanized machinery." },
{ word: "made", sentence: "In medicine, breakthroughs in diagnostic imaging and telehealth have made medical care accessible to vulnerable populations living in remote areas." },
{ word: "maintain", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "makes", sentence: "On the one hand, opponents of uninhibited tech growth point out that it makes traditional practices obsolete." },
{ word: "many", sentence: "In many rural economies, traditional crafts and localized agricultural methods have been entirely supplanted by mechanized machinery." },
{ word: "mechanized", sentence: "In many rural economies, traditional crafts and localized agricultural methods have been entirely supplanted by mechanized machinery." },
{ word: "medical", sentence: "In medicine, breakthroughs in diagnostic imaging and telehealth have made medical care accessible to vulnerable populations living in remote areas." },
{ word: "medicine", sentence: "In medicine, breakthroughs in diagnostic imaging and telehealth have made medical care accessible to vulnerable populations living in remote areas." },
{ word: "methods", sentence: "In many rural economies, traditional crafts and localized agricultural methods have been entirely supplanted by mechanized machinery." },
{ word: "mitigate", sentence: "The primary rationale behind developing new technologies is to enhance human productivity and mitigate risks." },
{ word: "modern", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "museums", sentence: "Digital archives and virtual museums now allow global audiences to explore ancient history, ensuring that historic artifacts are protected for subsequent generations." },
{ word: "nations", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "new", sentence: "The primary rationale behind developing new technologies is to enhance human productivity and mitigate risks." },
{ word: "not", sentence: "Furthermore, technology does not inherently destroy culture; rather, it provides an innovative platform to preserve it." },
{ word: "now", sentence: "Digital archives and virtual museums now allow global audiences to explore ancient history, ensuring that historic artifacts are protected for subsequent generations." },
{ word: "obsolete", sentence: "On the one hand, opponents of uninhibited tech growth point out that it makes traditional practices obsolete." },
{ word: "of", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "often", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "on", sentence: "On the one hand, opponents of uninhibited tech growth point out that it makes traditional practices obsolete." },
{ word: "opinion", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
{ word: "opponents", sentence: "On the one hand, opponents of uninhibited tech growth point out that it makes traditional practices obsolete." },
{ word: "out", sentence: "On the one hand, opponents of uninhibited tech growth point out that it makes traditional practices obsolete." },
{ word: "paramount", sentence: "In conclusion, although technological disruption poses a genuine risk to traditional ways of living, it remains a paramount tool for human development." },
{ word: "permanent", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "platform", sentence: "Furthermore, technology does not inherently destroy culture; rather, it provides an innovative platform to preserve it." },
{ word: "point", sentence: "On the one hand, opponents of uninhibited tech growth point out that it makes traditional practices obsolete." },
{ word: "populations", sentence: "In medicine, breakthroughs in diagnostic imaging and telehealth have made medical care accessible to vulnerable populations living in remote areas." },
{ word: "poses", sentence: "In conclusion, although technological disruption poses a genuine risk to traditional ways of living, it remains a paramount tool for human development." },
{ word: "practices", sentence: "On the one hand, opponents of uninhibited tech growth point out that it makes traditional practices obsolete." },
{ word: "preserve", sentence: "Furthermore, technology does not inherently destroy culture; rather, it provides an innovative platform to preserve it." },
{ word: "primary", sentence: "The primary rationale behind developing new technologies is to enhance human productivity and mitigate risks." },
{ word: "productivity", sentence: "The primary rationale behind developing new technologies is to enhance human productivity and mitigate risks." },
{ word: "programs", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
{ word: "protect", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
{ word: "protected", sentence: "Digital archives and virtual museums now allow global audiences to explore ancient history, ensuring that historic artifacts are protected for subsequent generations." },
{ word: "provides", sentence: "Furthermore, technology does not inherently destroy culture; rather, it provides an innovative platform to preserve it." },
{ word: "pursue", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
{ word: "rapid", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "rather", sentence: "Furthermore, technology does not inherently destroy culture; rather, it provides an innovative platform to preserve it." },
{ word: "rationale", sentence: "The primary rationale behind developing new technologies is to enhance human productivity and mitigate risks." },
{ word: "regional", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "remains", sentence: "In conclusion, although technological disruption poses a genuine risk to traditional ways of living, it remains a paramount tool for human development." },
{ word: "remote", sentence: "In medicine, breakthroughs in diagnostic imaging and telehealth have made medical care accessible to vulnerable populations living in remote areas." },
{ word: "risk", sentence: "In conclusion, although technological disruption poses a genuine risk to traditional ways of living, it remains a paramount tool for human development." },
{ word: "risks", sentence: "The primary rationale behind developing new technologies is to enhance human productivity and mitigate risks." },
{ word: "rural", sentence: "In many rural economies, traditional crafts and localized agricultural methods have been entirely supplanted by mechanized machinery." },
{ word: "severe", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
{ word: "shift", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
{ word: "should", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
{ word: "subsequent", sentence: "Digital archives and virtual museums now allow global audiences to explore ancient history, ensuring that historic artifacts are protected for subsequent generations." },
{ word: "substantial", sentence: "On the other hand, the advantages of modern innovation are substantial and cannot be ignored." },
{ word: "supplanted", sentence: "In many rural economies, traditional crafts and localized agricultural methods have been entirely supplanted by mechanized machinery." },
{ word: "tech", sentence: "On the one hand, opponents of uninhibited tech growth point out that it makes traditional practices obsolete." },
{ word: "technologies", sentence: "The primary rationale behind developing new technologies is to enhance human productivity and mitigate risks." },
{ word: "technological", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
{ word: "technology", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "telehealth", sentence: "In medicine, breakthroughs in diagnostic imaging and telehealth have made medical care accessible to vulnerable populations living in remote areas." },
{ word: "textile", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "that", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "the", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "these", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
{ word: "this", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
{ word: "threaten", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
{ word: "to", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "tool", sentence: "In conclusion, although technological disruption poses a genuine risk to traditional ways of living, it remains a paramount tool for human development." },
{ word: "tools", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
{ word: "traditional", sentence: "On the one hand, opponents of uninhibited tech growth point out that it makes traditional practices obsolete." },
{ word: "traditions", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "trades", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
{ word: "uninhibited", sentence: "On the one hand, opponents of uninhibited tech growth point out that it makes traditional practices obsolete." },
{ word: "unprecedented", sentence: "For instance, centuries-old hand-weaving traditions in developing nations are dying out due to the unprecedented efficiency of automated textile factories, leading to a permanent dilution of regional arts." },
{ word: "urban", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." },
{ word: "virtual", sentence: "Digital archives and virtual museums now allow global audiences to explore ancient history, ensuring that historic artifacts are protected for subsequent generations." },
{ word: "vulnerable", sentence: "In medicine, breakthroughs in diagnostic imaging and telehealth have made medical care accessible to vulnerable populations living in remote areas." },
{ word: "ways", sentence: "In conclusion, although technological disruption poses a genuine risk to traditional ways of living, it remains a paramount tool for human development." },
{ word: "whereas", sentence: "It is often argued that the rapid evolution of technology brings immense advantages to modern civilization, whereas critics maintain that it acts as a catalyst for the destruction of cultural heritage." },
{ word: "while", sentence: "While automation does threaten certain ancestral customs, I believe that technological advancement is deeply beneficial because it alleviates structural human hardships and bridges global communication gaps." },
{ word: "with", sentence: "In my opinion, the global community should embrace these tools while implementing educational programs to actively document and protect endangered cultural customs." },
{ word: "younger", sentence: "This shift can cause a severe loss of cultural identity, as younger generations abandon historical family trades to pursue digital careers in urban centers." }
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [result, setResult] = useState(""); 
  
  // Fixed 3: Capitalized setter naming to match standard clean code standards
  const [correctScore, setCorrectScore] = useState(0);
  const [inCorrectScore, setIncorrectScore] = useState(0);
  const [storeIncorrect,setStoreIncorrect] = useState([{}]);

  const handleVoiceSpeak = () => {
    const targetWord = DICTIONARY[currentIndex].word;
    const utterance = new SpeechSynthesisUtterance(targetWord);
    
    // Fixed 1: Standardized the region target to standard British accent layout
    utterance.lang = 'en-GB'; 
    utterance.rate = 0.7; 
    window.speechSynthesis.speak(utterance);
  };

  const handleCheckSpelling = (e) => {
    e.preventDefault();
    const correctWord = DICTIONARY[currentIndex].word;
    
    if (userGuess.trim().toLowerCase() === correctWord) {

      setResult("Correct 🟢"); 
      setStoreIncorrect([...storeIncorrect, correctWord]);
       const utterance = new SpeechSynthesisUtterance("correct");
    
    // Fixed 1: Standardized the region target to standard British accent layout
    utterance.lang = 'en-GB'; 
    utterance.rate = 0.7; 
    window.speechSynthesis.speak(utterance);
      // Fixed 2: Converted to dynamic functional parameter hooks loops
      setCorrectScore((prev) => prev + 1);
    } else {
      setResult(`Incorrect 🔴. The accurate spelling is: "${correctWord}"`);
      setIncorrectScore((prev) => prev + 1);
    }
  };

  const handleNextWord = () => {
    setUserGuess("");
    setResult("");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % DICTIONARY.length);
  };
  return (
    <div style={{ marginTop: '30px', padding: '20px', background: '#fff', borderRadius: '8px', border: '1px solid #eee', maxWidth: '450px' }}>
      <h3>🇬🇧 IELTS Technical Spelling Sandbox</h3>
      <p style={{ fontSize: '13px', color: '#666' }}>Master high-scoring vocabulary strings for your writing and listening bands.</p>

      <div style={{ margin: '20px 0', display: 'flex', gap: '10px' }}>
        <button onClick={handleVoiceSpeak} style={{ padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          🔊 Read Voice Word
        </button>
        
        <button onClick={handleNextWord} style={{ padding: '10px', background: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Next Word ➡️
        </button>
      </div>

      <form onSubmit={handleCheckSpelling}>
        <input 
          type="text"
          placeholder="Type the correct spelling here..."
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          disabled={result !== ""}
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box', marginBottom: '10px' }}
        />
        <button type="submit" disabled={result !== ""} style={{ width: '100%', padding: '10px', background: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Verify Spelling
        </button>
        
        <p style={{ width: '100%', padding: '10px', background: '#28a745', color: '#fff', border: 'none', marginTop: '10px' }}>
          Your correct score is: <strong>{correctScore}</strong>
        </p>
        <p style={{ width: '100%', padding: '10px', background: '#e93110', color: '#fff', border: 'none' }}>
          Your failed score is: <strong>{inCorrectScore}</strong>
        </p>
        <h5>Total Questions: {DICTIONARY.length}</h5>
      </form>

      {result && (
        <div style={{ marginTop: '15px', padding: '10px', background: '#f8f9fa', borderRadius: '4px', borderLeft: '5px solid #28a745', fontWeight: 'bold' }}>
          <p style={{ margin: '0 0 5px 0' }}>{result}</p>
          <p style={{ margin: '0', fontSize: '13px', color: '#555', fontWeight: 'normal' }}>
            <em>meaning: {DICTIONARY[currentIndex].meaning}</em>
            <p>example: {DICTIONARY[currentIndex].example}</p>
          </p>
        </div>
      )}
      <p>your incorrect word is the following</p>
      <p>
        {storeIncorrect.map((sincorect)=>{
            <p>{sincorect}</p>
        })}
      </p>
    </div>
  );
}


