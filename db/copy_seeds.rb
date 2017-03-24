# User.destroy_all
# Notebook.destroy_all
# Note.destroy_all
# Tag.destroy_all
# Tagging.destroy_all
#
# User.create(username: "guest", password: "password")
#
# Notebook.create!([
#   {user_id: 1, title: "guest"},
#   {user_id: 1, title: "Short Stories"},
#   {user_id: 1, title: "Recipes"},
#   {user_id: 1, title: "Parables"}
# ])
#
# Tag.create!([
#   {name: "tag1"},
#   {name: "Todo"},
#   {name: "Parable"},
#   {name: "Recipes"},
#   {name: "Bread"},
#   {name: "Tasty"},
#   {name: "Desert"},
#   {name: "Dinner"},
#   {name: "School"}
# ])
#
# Note.create!([
#   {title: "I’d Rather Be a Happy Turtle", body: "<p>Zhuang Zi was a brilliant philosopher and strategist who lived in ancient China. His abilities were many and several rulers sought his services. One of them, King Wei, sent his courtiers out to Zhuang Zi’s pastoral home to invite him to come to Wei’s court and be the leader’s chief counselor. They found him there fishing by the river bank.Seeing his poor situation, they thought Zhuang Zi would jump at the chance for status and reward. Yet when they made their proposal to him, he said, “Once upon a time there was a sacred turtle, which was happy living his life in the mud. Yet, because he was sacred, the king’s men found him, took him to the royal palace, killed him and used his shell to foresee the future. Now tell me, would that turtle prefer to have given up his life to be honored at the palace, or would he rather be alive and enjoying himself in the mud?”The courtiers responded that, of course, the turtle would be happier in the mud.To which Zhuang Zi replied, “And so you have my answer. Go home and let me be a happy turtle here in the mud.”</p>", user_id: 1, notebook_id: 4, archived: false},
#   {title: "The Beautiful Heart", body: "<p>Before we get to the story while reading it; I would ask that you think of two things: 1. Someone who has shown you love and 2. someone who you have shown love to.<br>\n<br>\nOne day a young man was standing in the middle of the town proclaiming that he had the most beautiful heart in the whole valley.<br>\n<br>\nA large crowd gathered and they all admired his heart for it was perfect. There was not a mark or a flaw in it.<br>\n<br>\nYes, they all agreed it truly was the most beautiful heart they had ever seen. The young man was very proud and boasted more loudly about his beautiful heart. Suddenly, an old man appeared at the front of the crowd and said, \"Why your heart is not nearly as beautiful as mine.\" The crowd and the young man looked at the old man's heart. It was beating strongly, but full of scars, it had places where pieces had been removed and other pieces put in, but they didn't fit quite right and there were several jagged edges. &nbsp;In fact, in some places there were deep gouges where whole pieces were missing.<br>\n<br>\nThe people stared -- how can he say his heart is more beautiful, they thought? The young man looked at the old man's heart and saw its state and laughed. \"You must be joking,\" he said. \"Compare your heart with mine, mine is perfect and yours is a mess of scars and tears.\"<br>\n<br>\n\"Yes,\" said the old man, \"yours is perfect looking but I would never trade with you. You see, every scar represents a person to whom I have given my love - I tear out a piece of my heart and give it to them, and often they give me a piece of their heart which fits into the empty place in my heart, but because the pieces aren't exact, I have some rough edges, which I cherish, because they remind me of the love we shared. Sometimes I have given pieces of my heart away, and the other person hasn't returned a piece of his heart to me.<br>\n<br>\nThese are the empty gouges -- giving love is taking a chance. Although these gouges are painful, they stay open, reminding me of the love I have for these people too, and I hope someday they may return and fill the space I have waiting. So now do you see what true beauty is?\"<br>\n<br>\nThe young man stood silently with tears running down his cheeks. He walked up to the old man, reached into his perfect young and beautiful heart, and ripped a piece out.<br>\n</p>\n<p>He offered it to the old man with trembling hands. The old man took his offering, placed it in his heart and then took a piece from his old scarred heart and placed it in the wound in the young man's heart. It fit, but not perfectly, as there were some jagged edges. The young man looked at his heart, not perfect anymore but more beautiful than ever, since love from the old man's heart flowed into his. They embraced and walked away side by side.</p>", user_id: 1, notebook_id: 4, archived: false},
#   {title: "Good Luck or Bad Luck?", body: "<p>Once upon the time there was an old farmer who had worked his crops for many years. One day his horse ran away. Upon hearing the news, his neighbors came to visit. “Such bad luck,” they said sympathetically.</p>\n<p>“Perhaps,” the farmer replied.</p>\n<p>The next morning the horse returned, bringing with it three other wild horses. “What great luck!” the neighbors exclaimed.</p>\n<p>“Perhaps,” replied the old man.</p>\n<p>The following day, his son tried to ride one of the untamed horses, was thrown, and broke his leg. The neighbors again came to offer their sympathy on his misfortune.</p>\n<p>“Perhaps,” answered the farmer.</p>\n<p>The day after, military officials came to the village to draft young men into the army. Seeing that the son’s leg was broken, they passed him by. The neighbors congratulated the farmer on how well things had turned out.</p>\n<p>“Perhaps,” said the farmer…</p>", user_id: 1, notebook_id: 4, archived: false},
#   {title: "To Do's", body: "<ul>\n  <li>Pick up daughter</li>\n  <li>Work on Full Stack Project</li>\n</ul>", user_id: 1, notebook_id: 1, archived: false},
#   {title: "The Goose and The Golden Egg ", body: "<p>There was once a Countryman who possessed the most wonderful Goose you can imagine, for every day when he visited the nest, the Goose had laid a beautiful, glittering, golden egg.&nbsp;</p>\n<p>The Countryman took the eggs to market and soon began to get rich. But it was not long before he grew impatient with the Goose because she gave him only a single golden egg a day. He was not getting rich fast enough.&nbsp;</p>\n<p>Then one day, after he had finished counting his money, the idea came to him that he could get all the golden eggs at once by killing the Goose and cutting it open. But when the deed was done, not a single golden egg did he find, and his precious Goose was dead. Those who have plenty want more and so lose all they have.</p>", user_id: 1, notebook_id: 2, archived: false},
#   {title: "The Wolf and His Shadow", body: "<p>A Wolf left his lair one evening in fine spirits and an excellent appetite. As he ran, the setting sun cast his shadow far out on the ground, and it looked as if the wolf were a hundred times bigger than he really was.&nbsp;</p>\n<p>\"Why,\" exclaimed the Wolf proudly, \"see how big I am! Fancy me running away from a puny Lion! I'll show him who is fit to be king, he or I.\"&nbsp;</p>\n<p>Just then an immense shadow blotted him out entirely, and the next instant a Lion struck him down with a single blow.</p>", user_id: 1, notebook_id: 2, archived: false},
#   {title: "The Peacock", body: "<p>The Peacock, they say, did not at first have the beautiful feathers in which he now takes so much pride. These, Juno, whose favorite he was, granted to him one day when he begged her for a train of feathers to distinguish him from the other birds. Then, decked in his finery, gleaming with emerald, gold, purple, and azure, he strutted proudly among the birds. All regarded him with envy. Even the most beautiful pheasant could see that his beauty was surpassed.</p>\n<p>Presently the Peacock saw an Eagle soaring high up in the blue sky and felt a desire to fly, as he had been accustomed to do. Lifting his wings he tried to rise from the ground. But the weight of his magnificent train held him down. Instead of flying up to greet the first rays of the morning sun or to bathe in the rosy light among the floating clouds at sunset, he would have to walk the ground more encumbered and oppressed than any common barnyard fowl.</p>", user_id: 1, notebook_id: 2, archived: false},
#   {title: "The Man and The Lion", body: "<p>A Lion and a Man chanced to travel in company through the forest. They soon began to quarrel, for each of them boasted that he and his kind were far superior to the other both in strength and mind.&nbsp;</p>\n<p>Now they reached a clearing in the forest and there stood a statue. It was a representation of Heracles in the act of tearing the jaws of the Nemean Lion.&nbsp;</p>\n<p>\"See,\" said the man, \"that's how strong we are! The King of Beasts is like wax in our hands!\"&nbsp;</p>\n<p>\"Ho!\" laughed the Lion, \"a Man made that statue. It would have been quite a different scene had a Lion made it!\"</p>", user_id: 1, notebook_id: 2, archived: false},
#   {title: "CHEESY GARLICKY BREADSTICKS", body: "<p>Serves 4</p>\n<p>INGREDIENTS</p>\n<ul>\n  <li>1 store-bought thin crust pizza</li>\n  <li>1 cup old white cheddar cheese, grated</li>\n  <li>1 cup old yellow cheddar cheese, grated</li>\n  <li>¼ teaspoon salt</li>\n  <li>½ tablespoon garlic powder</li>\n  <li>½ teaspoon dried oregano</li>\n  <li>½ teaspoon dried basil</li>\n  <li>½ teaspoon dried parsley</li>\n</ul>\n<p>INSTRUCTIONS</p>\n<ol>\n  <li>Toss the two cheeses and the herbs, along with the salt, in a bowl. Blend together.</li>\n  <li>Pile onto pizza crust.</li>\n  <li>Bake according to pizza crust package instructions, or for 10 minutes at 350 degrees.</li>\n  <li>Remove from oven and allow to cool for 2 minutes before slicing.</li>\n</ol>", user_id: 1, notebook_id: 3, archived: false},
#   {title: "Best Ever Creamy Crockpot Cocoa", body: "<p><ins><em>Ingredients</em></ins></p>\n<ul>\n  <li>1 1/2 cups heavy whipping cream</li>\n  <li>(1) 14 ounce can sweetened condensed milk</li>\n  <li>6 cups milk</li>\n  <li>1 1/2 teaspoons vanilla</li>\n  <li>2 cups of chocolate chips (milk chocolate OR semi-sweet)</li>\n</ul>\n<p><ins><em>Instructions</em></ins></p>\n<ol>\n  <li>Pour all the ingredients into a crockpot and whisk together until well combined. Cover and cook on low for 2 hours, stirring occasionally, until mixture is hot and chocolate chips are melted.</li>\n  <li>Whisk well before serving.</li>\n  <li>Garnish as desired (which means MARSHMALLOWS of course!)</li>\n</ol>\n<p><br></p>", user_id: 1, notebook_id: 3, archived: false},
#   {title: "Cinnamon Sugar Pretzel Bites", body: "<p><strong>6 servings</strong>Ingredients</p>\n<ul>\n  <li>1 (1/4 oz) pkg active dry yeast</li>\n  <li>1 cup warm water, 110 degrees</li>\n  <li>2 Tbsp granulated sugar</li>\n  <li>2 Tbsp packed light-brown sugar</li>\n  <li>1 Tbsp vegetable oil</li>\n  <li>1 tsp salt</li>\n  <li>1 1/2 cups bread flour</li>\n  <li>1 to 1 1/4 cups all-purpose flour, plus more for dusting</li>\n  <li>3 cups hot water</li>\n  <li>1/4 cup baking soda</li>\n</ul>\n<p><strong>Coating</strong></p>\n<ul>\n  <li>1/2 cup butter, melted</li>\n  <li>1/2 cup granulated sugar</li>\n  <li>1 Tbsp ground cinnamon</li>\n</ul>\n<p><strong>Cream Cheese Dipping Sauce</strong></p>\n<ul>\n  <li>4 oz cream cheese, softened</li>\n  <li>2 Tbsp butter, softened</li>\n  <li>1 cup powdered sugar</li>\n  <li>1/2 tsp vanilla extract</li>\n  <li>2 Tbsp heavy cream</li>\n</ul>\n<p>Directions</p>\n<ul>\n  <li>For the pretzel bites:</li>\n  <li>In the bowl of an electric stand mixer, combine 1 cup warm water, yeast and 1/2 tsp granulated sugar, whisk to dissolve and allow to rest 10 minutes. Fit mixer with whisk attachment and mix in remaining granulated sugar (1 Tbsp + 2 1/2 tsp), brown sugar, vegetable oil and salt. With mixer set on low speed, slowly add in bread flour and mix until well blended. Switch attachment to the hook attachment and slowly add in all-purpose flour. Knead mixture on low speed until smooth an elastic, adding up to an additional 1/4 cup flour as needed (you want a soft dough and it may seem slightly sticky). Transfer to a lightly buttered bowl, cover with plastic wrap and allow to rest in a warm place until doubled in size (I like to let mine rest in the oven with the light on), 1 1/2 hours.</li>\n  <li>Punch dough down and divide into 6 equal portions. Preheat oven to 425 degrees. Dust tops of dough lightly with flour and cover the ones you aren't currently rolling loosely with plastic wrap (to prevent drying). Roll each portion into a rope about 24 to 28-inches long (you can do this by rolling or the method of pulling on each side and flicking upward like a jump rope while slapping onto the countertop). Cut into bite size pieces (about 1 1/4-inches each). Pour hot water and baking soda into a mixing bowl and whisk to dissolve. Using a slotted spoon, dip several pieces of dough into the water mixture, then lift and allow excess water to drip off, then transfer to a Silpat lined baking sheet. Repeat process working in batches and using two baking sheets, and rewarm water in microwave until hot between batches. Bake in preheated oven 8 - 11 minutes until tops are nicely golden brown. Remove from oven and using a slotted spoon, dip into melted butter, toss to evenly coat then lift and shake off excess. Transfer to a plate and allow to rest 2 minutes (I felt this just gave them time to absorb the butter, rather than having it all end up clumping the cinnamon sugar mixture).</li>\n  <li>Meanwhile in a small mixing bowl, whisk together granulated sugar and cinnamon until well blended. Dip butter coated pretzels into cinnamon sugar and toss to evenly coat. Serve warm with cream cheese dipping sauce (these are best served warm so I'd recommend rewarming them once they've cooled. To do so microwave on a plate for 10 - 20 seconds).</li>\n  <li>For the cream cheese dipping sauce:</li>\n  <li>In a mixing bowl using an electric mixer, whip cream cheese and butter until smooth and fluffy. Stir in powdered sugar and vanilla and mix until combined. Add heavy cream and whip until fluffy, about 2 minutes longer. Store in refrigerator in an airtight container.</li>\n  <li>Recipe Source: Cooking Classy</li>\n</ul>", user_id: 1, notebook_id: 3, archived: false},
#   {title: "Cheesesteaks", body: "<h3>INGREDIENTS:</h3>\n<ul>\n  <li>4 hoagie rolls, sliced (We love the Publix hoagie rolls!)</li>\n  <li>1/2 green pepper, sliced</li>\n  <li>1 large white onion, cut in half and sliced thick</li>\n  <li>8 oz mushrooms, sliced</li>\n  <li>1.25-1.5 lbs beef ribeye steaks (sliced thinly across the grain and then chopped roughly again so they are small pieces)</li>\n  <li>salt &amp; pepper</li>\n  <li>3 1/2 Tbsp salted butter</li>\n  <li>8 slices of cheese (Provolone or Muenster)</li>\n</ul>\n<h3>DIRECTIONS:</h3>\n<ol>\n  <li>Prepare 4 sheets of foil and slice the hoagie rolls and set aside. Preheat oven to 250 degrees.</li>\n  <li>Heat a non-stick skillet with 1 Tbsp butter on medium high heat. Add mushrooms and half of the onions and cook 5-8 minutes or until mushrooms are browned and onions are cooked down. Remove and place on a plate.</li>\n  <li>Wipe the skillet with a paper towel and add 1/2 Tbsp of butter and return to the stove. Cook remaining onions and bell peppers for 5-8 minutes or until peppers start to brown and blister and the onions are cooked down. Add to a separate plate (unless everyone likes peppers/onions/mushrooms then add to the plate with mushrooms &amp; onions).</li>\n  <li>Wipe the skillet again with a paper towel and add 1 Tbsp butter and return to stove again. Season half of the steak with salt &amp; pepper and add to the skillet. Reduce to medium heat and cook for 2-4 minutes. Add in peppers &amp; onions or half of the veggie mixture and cook for 1-2 minutes. Divide the meat &amp; veggies in half as pictured above. Add 4 slices of cheese on top and allow the cheese to melt for 1-2 minutes.</li>\n  <li>Add the cooked meat &amp; veggies and melted cheese to two hoagie rolls. Inside one sheet of foil, roll the hoagie roll tightly and place inside the oven for 10-15 minutes.</li>\n  <li>Repeat the process with the remaining steak &amp; veggies or like I did with the mushrooms and onions – for the last two hoagie rolls. Serve fresh out of the oven with chips or your favorite French fries.</li>\n</ol>\n<p><strong>Notes:</strong> If you have leftovers (if that’s possible), refrigerate inside a zippered plastic bag inside (don’t remove it from the foil). Reheat the cheesesteaks in the foil in a 350 degree oven for 20-25 minutes.</p>", user_id: 1, notebook_id: 3, archived: false},
#   {title: "Skirt Steak Fajitas", body: "<p><ins><em>For the marinade:</em></ins></p>\n<ul>\n  <li>1/3 c. soy sauce</li>\n  <li>1/3 c. fresh squeezed lime juice</li>\n  <li>1/3 c. canola oil</li>\n  <li>3 cloves of garlic, minced</li>\n  <li>2 T. brown sugar</li>\n  <li>1 t. cumin</li>\n  <li>1 t. chile powder</li>\n</ul>\n<p><ins><em>Other ingredients:</em></ins></p>\n<ul>\n  <li>about 2 lb. skirt steak&nbsp;</li>\n  <li>2-3 bell peppers, ends trimmed, cored and seeded, cut into a couple large pieces</li>\n  <li>1 large white onion, peeled and cut into 1/2-3/4-inch slices (keep the slices intact)</li>\n  <li>18 6-inch flour tortillas</li>\n  <li>lime wedges&nbsp;</li>\n</ul>\n<p>toppings of your choice such as, cilantro, salsa, cheese, sour cream &nbsp;&amp; avocados or guacamole</p>\n<p><ins><em>Get the marinade prepared:&nbsp;</em></ins></p>\n<p>Whisk together the marinade ingredients in a small bowl. Reserve about 1/3 cup of marinade for the vegetables. Place the steak in a gallon-sized ziplock bag. Add the remaining marinade. Seal the bag, pressing out any excess air, massage the marinade into the meat a bit. Refrigerate anywhere from 3-10 hours.&nbsp;<br>\n<br>\nAfter meat has finished marinating, remove steak from marinade and wipe off excess marinade with paper towel. (I also cut the steak into a couple of more manageable sized pieces, for easier turning on the grill). brush the vegetables with reserved marinade. Heat your grill to high. Scrape the grill grate clean and oil the grate. Add the steak to the super hot grill and grill, covered about 2 1/2 minutes per side (for medium/medium-rare), or until steak reaches desired doneness. Remove steak to a clean plate and cover with foil &amp; let rest for 10-15 minutes.&nbsp;<br>\n<br>\nAdd the peppers and onions to the grill and grill, turning occasionally until cooked, peppers should take about 5 minutes and onions will take about 10. Remove from grill. Briefly add the tortillas to the grill, a couple at a time and grill until warmed and lightly charred around the edges. Wrap the tortillas in foil to keep warm.<br>\n<br>\nThinly slice the steak, against the grain. Slice the onions in half and separate the rings. Slice the peppers. Serve with the tortillas, lime wedges and toppings of your choice.</p>", user_id: 1, notebook_id: 3, archived: false},
#   {title: "Transcript Rough Draft", body: "<p>Isaac Rodebush&nbsp;</p>\n<p>Janghun Yu&nbsp;</p>\n<p>Jenica Stewart&nbsp;</p>\n<p>Steve Olsen</p>\n<p>Zach McDonald<br>\n</p>\n<p><strong>Rough Draft: Women’s Rights to an Education</strong></p>\n<p><strong>Intro: </strong>&nbsp;&nbsp;<strong>Steve</strong><br>\nThe state of girls’ education in Pakistan is far from optimal. According to UNESCO, a non profit organization that helps children obtain an education, there are 7.261 million children out of school at the primary level, and 58 percent are females according to UNESCO's 2011 report. <del>The Government has started plans to improve the education outcomes, particularly for the participation of girls in primary school.</del> Pakistan’s efforts are linked to its commitment to meet the Education for All (EFA) targets and the Millennium Development Goals (MDGs). The constitutional amendment (Article 25A) makes education a fundamental right for the citizens of Pakistan. The article states “the State shall provide free and compulsory education to all children of the age of five to sixteen years in such manner as may be determined by law.” Despite these goals and laws, the state of education for everyone, especially women, is far less than suitable. (7)</p>\n<p><br>\n<strong>Useful Stats: Isaac Rodebush</strong><br>\nTo share a little more about Pakistan’s education, here are some eye-opening facts about girls' education in the nation:<del>1. In Pakistan, 5.4 million children of primary school age are not in school; 62 percent of them are girls.</del>2. Seven million adolescents in Pakistan are not in school; 54 percent of them are girls.<del>3. Sixty-five percent of girls are enrolled in primary school compared with 79 percent of boys.4. Almost half -- 49 percent -- of girls who begin primary school leave before completing the final grade.</del>5. 62 percent of girls and 5 percent of boys between the ages of 10 and 12 are not in school.6. 71 percent of women in Pakistan have not completed primary school, compared with 41 percent of men.<del>7. In Pakistan, 39 percent of girls are not in school, compared with 30 percent of boys.8. A boy has a 15 percent greater chance of starting primary school in Pakistan than a girl does.9. More than half of all adults in Pakistan have received no education. Only 40 percent of adult women can read and write, compared with 69 percent of men.</del>10. In Pakistan's poorest households, less than half -- 45 percent -- of the girls are enrolled in primary school, and only 18 percent attend lower secondary school. (3)<br>\nAll of these are some pretty unsettling facts. We’ll look at a few of these in more detail still to come… (3)</p>\n<p><br>\n<strong>Issues Facing Education in Pakistan: Janghun</strong> The lack of opportunity for Pakistani women is a great loss for their country. According to a 2012 UNESCO report, literate Pakistani women earned nearly twice as much as those who were illiterate. (6)Even though Pakistan’s government is trying to improve the education system, those plans are far from being optimal. There is still a lot that needs to be done for the education in this country in particular for women. (6)</p>\n<p><br>\n<strong>Financial Issues: Zach</strong><br>\nOne problem is the use of the nation’s financial resources. Nearly 7 times the amount that is spent on education is spent on the Military. Some of this is justified to help rid the nation of dangerous militants as well as to defend the nation’s land while other funds could be used more wisely in creating a national school system. One problem the country faces is the lack of skilled workers who are educated. Other nations, such as the US, have spent a great deal of money educating people who are later able to return funds to the system through taxes received from a better paying job. Pakistan’s education spending is kind of a catch 22 where there is little money to fund education resulting in a large portion of the population being unable to obtain high paying work, meaning that the nation does not have enough skilled laborers and job holders to financially support the education system. (6)</p>\n<p><br>\n<strong>Government Corruption: Jenica</strong><br>\nIn a speech Malala gave her thoughts on the plan that Pakistan has implemented for education, “For many of my sisters, a full course of education is a distant dream. Leaders have one standard for their own children but another standard for their citizens. As parents, they would never be happy with only a basic five or six years of school for their children. Twelve years of school should be every young person’s right. It is time for change.” (5)<br>\nCorruption, along with militant control of some regions, is a major cause of the lack of education for children and young adults, especially for women. Embezzlement and misuse of funds has plagued the nation for years and years. Priorities in politics change with each leader and party which has a large impact on the priority of education. (1)</p>\n<p><br>\n<strong>Taliban and Other Militants:</strong> &nbsp;<strong>Steve</strong>Women like Malala are trying to fight this injustice they are living. It’s not only that the government doesn’t have the economic means &nbsp;to implement a better educational program but that there are groups like the Taliban that are constantly bombing girl’s schools and not letting them have this right. Malala said, “Even if they come to kill me, I will tell them what they are trying to do is wrong, that education is our basic right.\" (4)<br>\nAccording to UNESCO, the national literacy rate is 46 percent, and the literacy rate is 26 percent for girls and 12 percent for women, though this figure includes people who are unable to do much more than sign their own name. In the two regions hit hardest by the Taliban, the North West Frontier Province and Baluchistan, the female literacy rate is between 3 and 8 percent. &nbsp;(4)</p>\n<p><br>\n<strong>Lack of Adequate Technology: &nbsp;Jenica</strong><br>\nWomen in pakistan are to be some of the least educated women in the world. <del>They are second class citizens to the men because of the culture that has developed.</del> Today the education system has been heavily influenced by the world wide web. Allowing many new consumers of internet content to become producers on the internet. &nbsp;The power to perform a Google search to gather research on a new topic is a core part of the modern day education. &nbsp;<em>Internet in Pakistan. (n.d.). Retrieved June 2, 2016</em><br>\nIn 2001 only one 1.3% of the population of pakistan had access to the internet. Today that has grown to 15.9% of the population having internet access in 2016. &nbsp;This leaves a large percentage of the population of pakistan without the ability to be connected to the majority of the world's database of information. The internet provides an avenue for much of the self taught learning that happens outside of public institutions of education. (2)<br>\nEven though the women in pakistan are underprivileged in the realm of public education and women's rights through the growth of the internet in pakistan women may have a greater ability to enable themselves to become independent learners. (2) The effects of this will improve the lives to the family and the children of theirs mothers making phenomenal general change that there parents were never taught or introduced to because of the lack of education that they had received because of discrimination and subject to poverty which often puts these families a difficult situation to pursue any form of education. &nbsp;&nbsp;(2)</p>\n<p><br>\n<strong>Traditions and Local Customs: Zach</strong><br>\nBy tradition, many men and women weren’t raised in a way that puts a focus on the importance of education <del>which trickles down from generation to generation.</del> This also has a great influence on many citizens who simply don’t see a need for much education as they carry on the traditions of previous generations. Unfortunately, many men, according to their customs, don’t value the need for women to obtain an education meaning that even less women, as explained previously, don’t get an opportunity to an education, even if many of the other problems didn’t exist. (8)<br>\nWe have talked about some of the main problems that Pakistan has with education. Now it’s time to talk to hear from everyone on what the future holds for pakistan and how that will affect our own lives…..<br>\n<strong>Group Discussion:</strong><br>\nOpen group discussion on future of Pakistan… &nbsp;how to deal with militants, change women’s rights, corruption, etc..<br>\n<strong>Conclusion: Isaac</strong><br>\nAs you can see, all of these factors combined together to create the problem of taking away a basic right such as education, especially from women.<br>\n</p>\n<p><strong>References</strong></p>\n<p>1. &nbsp;Corruption in Pakistan. (n.d.). Retrieved June 24, 2016, from https://en.wikipedia.org/wiki/Corruption_in_Pakistan</p>\n<p>2. Girls' Education in Pakistan. (n.d.). Retrieved June 27, 2016, from http://campaignforeducation.org/en/campaigns/girls-education/girls-education-in-pakistan</p>\n<p>3. If You're a Girl in Pakistan, What Are Your Chances of Going to School? (n.d.). Retrieved June 27, 2016, from http://abcnews.go.com/International/girl-pakistan-chances-school/story?id=20475108</p>\n<p>4. International Women’s Issues: Girls’ Education in Pakistan. (2011, November 07). Retrieved June 27, 2016, from http://persephonemagazine.com/2011/11/international-womens-issues-girls-education-in-pakistan/</p>\n<p>5. Malala: All Girls Deserve Education Beyond Early Childhood. (n.d.). Retrieved June 27, 2016, from http://time.com/3736611/malala-all-girls-deserve-education-beyond-early-childhood/?iid=sr-link4</p>\n<p>6. Pakistan's educational challenges. (n.d.). Retrieved June 24, 2016, from http://www.cnn.com/2013/10/09/world/asia/infographic-pakistan-education/</p>\n<p>7. Right to Education for Girls in Pakistan: Malala's Struggle Must Continue. (n.d.). Retrieved June 27, 2016, from https://www.opensocietyfoundations.org/voices/right-education-girls-pakistan-malala-s-struggle-must-continue</p>\n<p>8. Women, girls and Malala: Research on gender and education in Pakistan, and beyond - Journalist's Resource. (2014, October 10). Retrieved June 27, 2016, from http://journalistsresource.org/studies/international/human-rights/pakistan-women-equality-education-economic-development-research-roundup<br>\n</p>", user_id: 1, notebook_id: 1, archived: false}
# ])
#
# Tagging.create!([
#   {note_id: 1, tag_id: 1},
#   {note_id: 4, tag_id: 3},
#   {note_id: 3, tag_id: 7},
#   {note_id: 5, tag_id: 7},
#   {note_id: 6, tag_id: 7},
#   {note_id: 11, tag_id: 9},
#   {note_id: 11, tag_id: 10},
#   {note_id: 11, tag_id: 11},
#   {note_id: 12, tag_id: 11},
#   {note_id: 12, tag_id: 12},
#   {note_id: 13, tag_id: 11},
#   {note_id: 13, tag_id: 13},
#   {note_id: 14, tag_id: 11},
#   {note_id: 15, tag_id: 11},
#   {note_id: 15, tag_id: 13},
#   {note_id: 16, tag_id: 14}
# ])
