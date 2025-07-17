const books = [
  {
    id: 1,
    image : "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A classic novel set in the Jazz Age.The Great Gatsby, by F. Scott Fitzgerald, is a novel set in the 1920s, exploring themes of wealth, class, and the American Dream through the story of Jay Gatsby's pursuit of his lost love, Daisy Buchanan",
    rating: 4.3,
    category: "Fiction",

  },
  {
    id: 2,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description: "A Brief History of Humankind, by Yuval Noah Harari explores the history of our species, Homo sapiens, from its origins to the present day.",
    rating: 4.8,
    category: "Non-Fiction",
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLipOZbcYPMHO2GZrABKRSOqIfu1txoejVIQ&s"
  },
  {
  id: 14,
  title: "Educated",
  author: "Tara Westover",
  description: "Educated, is a powerful memoir by Tara Westover that recounts her extraordinary journey from a survivalist Mormon upbringing in rural Idaho to earning a PhD from Cambridge University.",
  rating: 4.7,
  category: "Non-Fiction",
  image : "https://m.media-amazon.com/images/I/71-4MkLN5jL._UF1000,1000_QL80_.jpg"
},
{
  id: 15,
  title: "Thinking, Fast and Slow", 
  description: "A psychologist’s deep dive into how we think, decide, and act .Thinking, Fast and Slow, explains the complexities of human decision-making, unveiling two cognitive systems: intuitive System 1 and analytical System 2.",
  author: "Daniel Kahneman",
  rating: 4.6,
  category: "Non-Fiction",
  image : "https://m.media-amazon.com/images/I/71f6DceqZAL.jpg"
},
{
  id: 16,
  title: "Becoming",
  author: "Michelle Obama",
  description: "The inspiring life story of America’s former First Lady, in her own voice. The book explores her personal journey, relationships, career, and experiences navigating public life while balancing family and motherhood.",
  rating: 4.9,
  category: "Non-Fiction",
  image : "https://m.media-amazon.com/images/I/81KGjsBXQ7L._UF1000,1000_QL80_.jpg"
},
{
  id: 17,
  title: "Atomic Habits",
  author: "James Clear",
  description: "Tiny changes that lead to remarkable results — a guide to habit-building.It stresses that focusing on systems rather than goals is key to long-term success. ",
  rating: 4.9,
  category: "Non-Fiction",
  image : "https://m.media-amazon.com/images/I/81F90H7hnML.jpg"
},
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    description: "A sci-fi novel set on a desert planet. The wings can retract and extend, allowing for agile maneuvers in the harsh environment. ",
    rating: 4.6,
    category: "Sci-Fi",
    image : "https://m.media-amazon.com/images/I/81Ua99CURsL.jpg"
  },
{
  id: 5,
  title: "Wings of Fire",
  author: "A. P. J. Abdul Kalam",
  description: "Autobiography of Dr. Kalam. The book  delves into his personal philosophy, emphasizing leadership, teamwork, and the importance of pursuing one's dreams. ",
  rating: 4.7,
  category: "Biography",
  image:"https://m.media-amazon.com/images/I/91a1yz32T3L._UF1000,1000_QL80_.jpg",
},
{
  id: 6,
  title: "Long Walk to Freedom",
  author: "Nelson Mandela",
  description: "The inspiring life story of Nelson Mandela, South Africa's anti-apartheid revolutionary. The book is an autobiography. It follows Mandela's life growing up in apartheid South Africa and fighting against this regime.",
  rating: 4.6,
  category: "Biography",
  image : "https://m.media-amazon.com/images/I/91jMa+ndqrL.jpg"
},
{
  id: 35,
  title: "Steve Jobs",
  author: "Walter Isaacson",
  description: "The biography of Apple’s visionary co-founder based on exclusive interviews The book is based on extensive interviews with Jobs himself, as well as his family, friends, rivals, and colleagues.",
  rating: 4.5,
  category: "Biography",
  image : "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale,dpr_1.5/jackets/9781610694971.jpg"
},
{
  id: 7,
  title: "The Diary of a Young Girl",
  author: "Anne Frank",
  description: "A young girl's diary during World War II — a gripping story of courage It remains a beloved and deeply admired testament to the indestructible nature of the human spirit.",
  rating: 4.9,
  category: "Biography",
  image : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560816565i/48855.jpg"
},

{
  id: 34,
  title: "Goosebumps",
  author: "R.L. Stine",
  description: "A spooky horror book series  The stories are designed to be suspenseful and engaging for young readers, with cliffhangers and surprise twists.",
  rating: 4.1,
  category: "Horror",
  image : "https://m.media-amazon.com/images/I/81GjuycIdBL._UF1000,1000_QL80_.jpg"
},
{
  id: 8,
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  description: "A young girl's view of racial injustice in the Deep South The story unfolds as Scout, Jem, and their friend Dill explore the mysteries of Maycomb, including the Radley house, while grappling with the social issues of the time.",
  rating: 4.8,
  category: "Fiction",
  image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/960px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
},
{
  id: 9,
  title: "1984",
  author: "George Orwell",
  description: " The novel explores themes of surveillance, manipulation, and the dangers of unchecked government power, serving as a cautionary tale about the potential consequences of totalitarianism.",
  rating: 4.6,
  category: "Fiction",
  image : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1327144697i/3744438.jpg"
},
{
  id: 10,
  title: "Pride and Prejudice",
  author: "Jane Austen",
  description: "A classic romance filled with wit, social commentary, and strong characters The novel centers around the Bennet family, particularly the five daughters, and their pursuit of advantageous marriages. .",
  rating: 4.7,
  category: "Fiction",
  image : "https://m.media-amazon.com/images/I/81Scutrtj4L._UF1000,1000_QL80_.jpg"
},
{
  id: 11,
  title: "The Alchemist",
  author: "Paulo Coelho",
  description: "The Alchemist, by Paulo Coelho, is a fable about a young shepherd named Santiago who embarks on a journey to fulfill his recurring dream of finding treasure near the Egyptian pyramids.",
  rating: 4.5,
  category: "Fiction",
  image : "https://m.media-amazon.com/images/I/617lxveUjYL._UF1000,1000_QL80_.jpg"
},
{
  id: 12,
  title: "The Kite Runner",
  author: "Khaled Hosseini",
  description: "A powerful story of friendship, betrayal, and redemption set in Afghanistan The novel explores themes of friendship, betrayal, guilt, redemption, and the enduring power of family and ethnic tensions.",
  rating: 4.8,
  category: "Fiction",
  image : "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1541428344i/17165596.jpg"
},
{
  id: 28,
  title: "The Girl with the Dragon Tattoo",
  author: "Stieg Larsson",
  description: "A journalist and a hacker investigate a decades-old disappearance in a rich family.",
  rating: 4.6,
  category: "Mystery",
  image : "https://rukminim2.flixcart.com/image/704/844/kklhbbk0/book/k/r/4/the-girl-with-the-dragon-tattoo-original-imafzwrpyp5paxng.jpeg?q=90&crop=false"
},
{
  id: 29,
  title: "Gone Girl",
  author: "Gillian Flynn",
  description: "A twisted tale of a missing wife and the secrets that unfold during the investigation, a dark, psychological thriller that explores the complexities of marriage and identity.",
  rating: 4.5,
  category: "Mystery",
  image : "https://m.media-amazon.com/images/I/71+khXHbe5L.jpg"
},
{
  id: 30,
  title: "The Da Vinci Code",
  author: "Dan Brown",
  description: "A symbologist unravels clues hidden in famous artworks to uncover a deep secretThe survivors must unravel the mystery of who the killer is and who will be next before they all perish. .",
  rating: 4.4,
  category: "Mystery",
  image : "https://m.media-amazon.com/images/I/51yCvlBVEQL._UF350,350_QL50_.jpg"
},
{
  id: 31,
  title: "And Then There Were None",
  author: "Agatha Christie",
  description: "Ten strangers are invited to an island… and start dying one by one The survivors must unravel the mystery of who the killer is and who will be next before they all perish.",
  rating: 4.8,
  category: "Mystery",
  image : "https://m.media-amazon.com/images/I/81nChcVy7CL._UF1000,1000_QL80_.jpg"
},
{
  id: 32,
  title: "Sherlock Holmes: The Hound of the Baskervilles",
  author: "Arthur Conan Doyle",
  description: "Holmes investigates a mysterious legend of a demonic hound on the moors.A brilliant consulting detective, is the protagonist of Sir Arthur Conan Doyle's stories",
  rating: 4.7,
  category: "Mystery",
  image : "https://m.media-amazon.com/images/I/91dDv9WOcFL._UF1000,1000_QL80_.jpg"
},
{
  id: 33,
  title: "The Silent Patient",
  author: "Alex Michaelides",
  description:
    "A psychological thriller about a woman’s act of violence against her husband—and the therapist obsessed with uncovering her motive.",
  rating: 4.4,
  category: "Mystery",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZKRYwK-lWX0_AKS3jH4b4HYblz0bIm3RUg&s"
},
{
  id: 36,
  title: "It",
  author: "Stephen King",
  description: ". The story follows Dr. John Montague, a paranormal researcher, who rents Hill House to study its supernatural reputation with a group of guests, including Eleanor Vance, Theodora, and Luke.",
  rating: 4.6,
  category: "Horror",
  image: "https://m.media-amazon.com/images/I/61pjyMrRCSL._UF1000,1000_QL80_.jpg"
},
{
  id: 37,
  title: "The Haunting of Hill House",
  author: "Shirley Jackson",
  description: "A chilling tale of a group investigating a haunted mansion with a dark history.. The story follows Dr. John Montague, a paranormal researcher, who rents Hill House to study its supernatural reputation with a group of guests, including Eleanor Vance, Theodora, and Luke.",
  rating: 4.4,
  category: "Horror",
  image : "https://m.media-amazon.com/images/I/81FMksyikrL._UF1000,1000_QL80_.jpg"
}
];

export default books;
