# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# User.create(username: "guest", password: "password")

text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

# 4.times do |i|
#   Notebook.create(user_id: 1, title: "test#{i}")
# end
#
# 25.times do |i|
#   Note.create(title: "test#{i}", body: text, user_id: 1, notebook_id: (rand(4) + 1))
# end


Notebook.create(user_id: 1, title: "Parables");

Note.create(title: "The Beautiful Heart", body:
"<p>Before we get to the story while reading it; I would ask that you think of two things: 1. Someone who has shown you love and 2. someone who you have shown love to.&nbsp;</p>\n<p>One day a young man was standing in the middle of the town proclaiming that he had the most beautiful heart in the whole valley.&nbsp;</p>\n<p>A large crowd gathered and they all admired his heart for it was perfect. There was not a mark or a flaw in it.&nbsp;</p>\n<p>Yes, they all agreed it truly was the most beautiful heart they had ever seen. The young man was very proud and boasted more loudly about his beautiful heart. Suddenly, an old man appeared at the front of the crowd and said, \"Why your heart is not nearly as beautiful as mine.\" The crowd and the young man looked at the old man's heart. It was beating strongly, but full of scars, it had places where pieces had been removed and other pieces put in, but they didn't fit quite right and there were several jagged edges. In fact, in some places there were deep gouges where whole pieces were missing.&nbsp;</p>\n<p>The people stared -- how can he say his heart is more beautiful, they thought? The young man looked at the old man's heart and saw its state and laughed. \"You must be joking,\" he said. \"Compare your heart with mine, mine is perfect and yours is a mess of scars and tears.\"&nbsp;</p>\n<p>\"Yes,\" said the old man, \"yours is perfect looking but I would never trade with you. You see, every scar represents a person to whom I have given my love - I tear out a piece of my heart and give it to them, and often they give me a piece of their heart which fits into the empty place in my heart, but because the pieces aren't exact, I have some rough edges, which I cherish, because they remind me of the love we shared. Sometimes I have given pieces of my heart away, and the other person hasn't returned a piece of his heart to me.&nbsp;</p>\n<p>These are the empty gouges -- giving love is taking a chance. Although these gouges are painful, they stay open, reminding me of the love I have for these people too, and I hope someday they may return and fill the space I have waiting. So now do you see what true beauty is?\"&nbsp;</p>\n<p>The young man stood silently with tears running down his cheeks. He walked up to the old man, reached into his perfect young and beautiful heart, and ripped a piece out.&nbsp;</p>\n<p>He offered it to the old man with trembling hands. The old man took his offering, placed it in his heart and then took a piece from his old scarred heart and placed it in the wound in the young man's heart. It fit, but not perfectly, as there were some jagged edges. The young man looked at his heart, not perfect anymore but more beautiful than ever, since love from the old man's heart flowed into his. They embraced and walked away side by side.</p>",
# "Before we get to the story while reading it; I would ask that you think of two things: 1. Someone who has shown you love and 2. someone who you have shown love to.\n
# One day a young man was standing in the middle of the town proclaiming that he had the most beautiful heart in the whole valley.
#
# A large crowd gathered and they all admired his heart for it was perfect. There was not a mark or a flaw in it.
#
# Yes, they all agreed it truly was the most beautiful heart they had ever seen. The young man was very proud and boasted more loudly about his beautiful heart. Suddenly, an old man appeared at the front of the crowd and said, \"Why your heart is not nearly as beautiful as mine.\" The crowd and the young man looked at the old man's heart. It was beating strongly, but full of scars, it had places where pieces had been removed and other pieces put in, but they didn't fit quite right and there were several jagged edges.  In fact, in some places there were deep gouges where whole pieces were missing.
#
# The people stared -- how can he say his heart is more beautiful, they thought? The young man looked at the old man's heart and saw its state and laughed. \"You must be joking,\" he said. \"Compare your heart with mine, mine is perfect and yours is a mess of scars and tears.\"
#
# \"Yes,\" said the old man, \"yours is perfect looking but I would never trade with you. You see, every scar represents a person to whom I have given my love - I tear out a piece of my heart and give it to them, and often they give me a piece of their heart which fits into the empty place in my heart, but because the pieces aren't exact, I have some rough edges, which I cherish, because they remind me of the love we shared. Sometimes I have given pieces of my heart away, and the other person hasn't returned a piece of his heart to me.
#
# These are the empty gouges -- giving love is taking a chance. Although these gouges are painful, they stay open, reminding me of the love I have for these people too, and I hope someday they may return and fill the space I have waiting. So now do you see what true beauty is?\"
#
# The young man stood silently with tears running down his cheeks. He walked up to the old man, reached into his perfect young and beautiful heart, and ripped a piece out.
# He offered it to the old man with trembling hands. The old man took his offering, placed it in his heart and then took a piece from his old scarred heart and placed it in the wound in the young man's heart. It fit, but not perfectly, as there were some jagged edges. The young man looked at his heart, not perfect anymore but more beautiful than ever, since love from the old man's heart flowed into his. They embraced and walked away side by side.",
user_id: 1, notebook_id: 1);
