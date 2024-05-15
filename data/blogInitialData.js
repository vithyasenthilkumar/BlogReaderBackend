const blogInitialData = [
    {
        "blogTitle": "The Future of Artificial Intelligence",
        "blogID": "001",
        "blogArticle": "Exploring the potential of artificial intelligence and its impact on various industries. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "John Smith",
        "blogCategory": "Technology"
        },
        {
        "blogTitle": "10 Effective Fitness Tips for Beginners",
        "blogID": "002",
        "blogArticle": "Useful fitness tips to help beginners kick-start their fitness journey and achieve their goals. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Emily Davis",
        "blogCategory": "Fitness"
        },
        {
        "blogTitle": "Fashion Trends: Spring/Summer Collection 2023",
        "blogID": "003",
        "blogArticle": "Highlighting the latest fashion trends and must-have items for the upcoming spring/summer season. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Sophia Adams",
        "blogCategory": "Fashion"
        },
        {
        "blogTitle": "The Rise of Streaming Services",
        "blogID": "004",
        "blogArticle": "Examining the growing popularity of streaming services and their impact on the entertainment industry. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "David Roberts",
        "blogCategory": "Entertainment"
        },
        {
        "blogTitle": "5G Technology: Revolutionizing Communication",
        "blogID": "005",
        "blogArticle": "Exploring the capabilities and potential applications of 5G technology in transforming communication networks. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Olivia Johnson",
        "blogCategory": "Technology"
        },
        {
        "blogTitle": "The Importance of Strength Training for Overall Fitness",
        "blogID": "006",
        "blogArticle": "Highlighting the benefits and importance of incorporating strength training into a fitness routine. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Benjamin Wilson",
        "blogCategory": "Fitness"
        },
        {
        "blogTitle": "Sustainable Fashion: Making Ethical Fashion Choices",
        "blogID": "007",
        "blogArticle": "Guidelines for making sustainable and ethical fashion choices to support the environment and fair trade practices. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Emma Thompson",
        "blogCategory": "Fashion"
        },
        {
        "blogTitle": "Top 10 Must-Watch Movies of the Year",
        "blogID": "008",
        "blogArticle": "A curated list of the top 10 must-watch movies released this year, covering various genres and captivating storytelling. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Lucas Moore",
        "blogCategory": "Entertainment"
        },
        {
        "blogTitle": "The Role of Artificial Intelligence in Healthcare",
        "blogID": "009",
        "blogArticle": "Exploring how artificial intelligence is transforming healthcare with its applications in diagnosis, treatment, and patient care. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Sophie Roberts",
        "blogCategory": "Technology"
        },
        {
        "blogTitle": "Tips for Staying Motivated on Your Fitness Journey",
        "blogID": "010",
        "blogArticle": "Useful tips and strategies to stay motivated and overcome challenges while pursuing your fitness goals. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Daniel Adams",
        "blogCategory": "Fitness"
        },
        {
        "blogTitle": "2023 Fashion Trends: Colors, Patterns, and Styles",
        "blogID": "011",
        "blogArticle": "A comprehensive guide to the latest fashion trends in 2023, including popular colors, patterns, and styles. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Isabella Wilson",
        "blogCategory": "Fashion"
        },
        {
        "blogTitle": "The Impact of Social Media on Entertainment Industry",
        "blogID": "012",
        "blogArticle": "Examining how social media platforms have revolutionized the entertainment industry, influencing content creation and audience engagement. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "William Thompson",
        "blogCategory": "Entertainment"
        },
        {
        "blogTitle": "The Advancements in Artificial Intelligence Research",
        "blogID": "013",
        "blogArticle": "Exploring the latest advancements and breakthroughs in artificial intelligence research, pushing the boundaries of technology. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Sophia Davis",
        "blogCategory": "Technology"
        },
        {
        "blogTitle": "Effective Cardio Workouts for Weight Loss",
        "blogID": "014",
        "blogArticle": "Highlighting a variety of cardio workouts that are effective for weight loss and improving cardiovascular health. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "David Garcia",
        "blogCategory": "Fitness"
        },
        {
        "blogTitle": "Sustainable Fashion Brands Making a Difference",
        "blogID": "015",
        "blogArticle": "Spotlighting sustainable fashion brands that prioritize eco-friendly practices and ethical production. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Olivia Moore",
        "blogCategory": "Fashion"
        },
        {
        "blogTitle": "The Evolution of Virtual Reality in Entertainment",
        "blogID": "016",
        "blogArticle": "Tracing the evolution of virtual reality technology and its impact on the entertainment industry, from gaming to immersive experiences. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Lucas Adams",
        "blogCategory": "Entertainment"
        },
        {
        "blogTitle": "The Applications of Blockchain Technology",
        "blogID": "017",
        "blogArticle": "Exploring the diverse applications of blockchain technology beyond cryptocurrencies, including supply chain management and digital identity. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Emma Johnson",
        "blogCategory": "Technology"
        },
        {
        "blogTitle": "Healthy Eating Tips for a Balanced Fitness Journey",
        "blogID": "018",
        "blogArticle": "Providing practical tips and guidance on adopting a healthy eating approach to support a balanced fitness journey. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Benjamin Wilson",
        "blogCategory": "Fitness"
        },
        {
        "blogTitle": "Exploring Sustainable Fashion Materials",
        "blogID": "019",
        "blogArticle": "Highlighting sustainable fashion materials and their environmental benefits, promoting conscious consumption. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Emily Thompson",
        "blogCategory": "Fashion"
        },
        {
        "blogTitle": "The Impact of Streaming Services on Traditional Media",
        "blogID": "020",
        "blogArticle": "Examining how the rise of streaming services has disrupted traditional media platforms and changed consumer viewing habits. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Daniel Moore",
        "blogCategory": "Entertainment"
        },
        {
        "blogTitle": "The Role of Artificial Intelligence in Customer Service",
        "blogID": "021",
        "blogArticle": "Exploring how artificial intelligence is revolutionizing customer service with chatbots, virtual assistants, and personalized interactions. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Sophia Adams",
        "blogCategory": "Technology"
        },
        {
        "blogTitle": "The Benefits of High-Intensity Interval Training (HIIT)",
        "blogID": "022",
        "blogArticle": "Highlighting the numerous benefits of HIIT workouts, including improved fitness, fat loss, and time efficiency. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "David Roberts",
        "blogCategory": "Fitness"
        },
        {
        "blogTitle": "Sustainable Fashion: Recycling and Upcycling Clothing",
        "blogID": "023",
        "blogArticle": "Exploring the concepts of clothing recycling and upcycling in sustainable fashion, promoting a circular economy. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Olivia Johnson",
        "blogCategory": "Fashion"
        },
        {
        "blogTitle": "The Impact of Social Media Influencers on Entertainment",
        "blogID": "024",
        "blogArticle": "Examining the influence and reach of social media influencers in shaping trends and impacting the entertainment industry. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Lucas Moore",
        "blogCategory": "Entertainment"
        },
        {
        "blogTitle": "The Future of Internet of Things (IoT)",
        "blogID": "025",
        "blogArticle": "Exploring the potential applications and impact of the Internet of Things (IoT) in various industries and everyday life. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Sophie Roberts",
        "blogCategory": "Technology"
        },
        {
        "blogTitle": "Effective Tips for Building Lean Muscle Mass",
        "blogID": "026",
        "blogArticle": "Providing practical tips and strategies for building lean muscle mass through proper nutrition and strength training. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Benjamin Adams",
        "blogCategory": "Fitness"
        },
        {
        "blogTitle": "Sustainable Fashion: Ethical Production and Fair Trade",
        "blogID": "027",
        "blogArticle": "Exploring the importance of ethical production practices and fair trade in the sustainable fashion industry. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Emma Thompson",
        "blogCategory": "Fashion"
        },
        {
        "blogTitle": "The Impact of Virtual Reality in Education",
        "blogID": "028",
        "blogArticle": "Examining how virtual reality is transforming education by providing immersive and interactive learning experiences. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "William Wilson",
        "blogCategory": "Entertainment"
        },
        {
        "blogTitle": "Cybersecurity and the Role of Artificial Intelligence",
        "blogID": "029",
        "blogArticle": "Exploring the intersection of cybersecurity and artificial intelligence, and how AI is used to enhance digital security. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Olivia Moore",
        "blogCategory": "Technology"
        },
        {
        "blogTitle": "The Importance of Proper Form in Strength Training",
        "blogID": "030",
        "blogArticle": "Highlighting the significance of maintaining proper form and technique during strength training exercises for optimal results and injury prevention. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Daniel Garcia",
        "blogCategory": "Fitness"
        },
        {
        "blogTitle": "Sustainable Fashion: Eco-Friendly Fabrics and Materials",
        "blogID": "031",
        "blogArticle": "Exploring eco-friendly fabrics and materials used in sustainable fashion, promoting a greener and more conscious approach to clothing. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Emily Moore",
        "blogCategory": "Fashion"
        },
        {
        "blogTitle": "The Evolution of Live Streaming in the Entertainment Industry",
        "blogID": "032",
        "blogArticle": "Tracing the evolution of live streaming platforms and their impact on the entertainment industry, including concerts, gaming, and live events. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Lucas Adams",
        "blogCategory": "Entertainment"
        },
        {
        "blogTitle": "Artificial Intelligence in Financial Services",
        "blogID": "033",
        "blogArticle": "Exploring the applications of artificial intelligence in the financial services industry, including automated trading, fraud detection, and customer service. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Sophia Davis",
        "blogCategory": "Technology"
        },
        {
        "blogTitle": "The Benefits of Yoga for Mind and Body",
        "blogID": "034",
        "blogArticle": "Highlighting the numerous benefits of practicing yoga, including stress reduction, improved flexibility, and mental well-being. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "David Garcia",
        "blogCategory": "Fitness"
        },
        {
        "blogTitle": "Sustainable Fashion: Slow Fashion Movement",
        "blogID": "035",
        "blogArticle": "Exploring the slow fashion movement and its emphasis on ethical production, timeless style, and reducing waste in the fashion industry. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Olivia Thompson",
        "blogCategory": "Fashion"
        },
        {
        "blogTitle": "The Impact of Augmented Reality in Gaming",
        "blogID": "036",
        "blogArticle": "Examining how augmented reality is transforming the gaming industry by blending virtual elements with the real world, creating immersive experiences. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Lucas Moore",
        "blogCategory": "Entertainment"
        },
        {
        "blogTitle": "Blockchain Technology in Supply Chain Management",
        "blogID": "037",
        "blogArticle": "Exploring how blockchain technology is revolutionizing supply chain management by increasing transparency, efficiency, and traceability. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Emma Johnson",
        "blogCategory": "Technology"
        },
        {
        "blogTitle": "Effective Tips for Injury Prevention in Sports",
        "blogID": "038",
        "blogArticle": "Providing practical tips and strategies for preventing injuries in sports, including proper warm-up, conditioning, and technique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Benjamin Wilson",
        "blogCategory": "Fitness"
        },
        {
        "blogTitle": "Sustainable Fashion: Capsule Wardrobe and Minimalist Style",
        "blogID": "039",
        "blogArticle": "Exploring the concept of a capsule wardrobe and minimalist style as sustainable fashion choices that promote conscious consumption. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea.",
        "blogAuthor": "Emily Thompson",
        "blogCategory": "Fashion"
        }
]

module.exports = blogInitialData