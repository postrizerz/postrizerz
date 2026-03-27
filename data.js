// ملف data.js
const postersData = [
    // === قسم الأنمي (Anime) ===
    {
        title: "Red Sword Warrior",
        category: "anime",
        price: 220,
        image: "images/anime/1.jpg"
    },
    {
        title: "Blue Aura Fighter",
        category: "anime",
        price: 220,
        image: "images/anime/2.jpg"
    },
    {
        title: "Dragon Warrior",
        category: "anime",
        price: 220,
        image: "images/anime/3.jpg"
    },
    {
        title: "Dark Night Anime",
        category: "anime",
        price: 220,
        image: "images/anime/4.jpg"
    },
    
    // === قسم الأفلام (Movies) ===
    {
        title: "Blade Runner 2049",
        category: "movies",
        price: 220,
        image: "images/movies/1 (2).jpg"
    },
    {
        title: "Batman: Men Are Brave",
        category: "movies",
        price: 220,
        image: "images/movies/1 (3).jpg"
    },
    {
        title: "Marvel Avengers",
        category: "movies",
        price: 220,
        image: "images/movies/2 (2).jpg"
    },
    {
        title: "Stranger Things",
        category: "movies",
        price: 220,
        image: "images/movies/3 (2).jpg"
    },
    {
        title: "Spider-Man: Times Square",
        category: "movies",
        price: 220,
        image: "images/movies/4 (2).jpg"
    },
    {
        title: "Scarface: The Eyes Chico",
        category: "movies",
        price: 220,
        image: "images/movies/4 (3).jpg"
    },
    {
        title: "Into The Spider-Verse",
        category: "movies",
        price: 220,
        image: "images/movies/5 (2).jpg"
    },
    {
        title: "James Bond 007",
        category: "movies",
        price: 220,
        image: "images/movies/7 (2).jpg"
    },
    {
        title: "John Wick Action",
        category: "movies",
        price: 220,
        image: "images/movies/11.jpg"
    },
    {
        title: "The Dark Knight vs Joker",
        category: "movies",
        price: 220,
        image: "images/movies/12 (2).jpg"
    },
    {
        title: "Batman & Joker Minimal",
        category: "movies",
        price: 220,
        image: "images/movies/12.jpg"
    },
    {
        title: "Taxi Driver Classic",
        category: "movies",
        price: 220,
        image: "images/movies/13.jpg"
    },
    {
        title: "Tony Montana Scarface",
        category: "movies",
        price: 220,
        image: "images/movies/16.jpg"
    },
    {
        title: "Spider-Verse Multiverse",
        category: "movies",
        price: 220,
        image: "images/movies/20.jpg"
    },
    {
        title: "American Psycho",
        category: "movies",
        price: 220,
        image: "images/movies/25.jpg"
    },
    {
        title: "Blade Runner Neon",
        category: "movies",
        price: 220,
        image: "images/movies/26.jpg"
    },
    {
        title: "Tyler Durden Fight Club",
        category: "movies",
        price: 220,
        image: "images/movies/30.jpg"
    },
    {
        title: "IT: Pennywise",
        category: "movies",
        price: 220,
        image: "images/movies/32 (2).jpg"
    },
    {
        title: "Joker Card Minimal",
        category: "movies",
        price: 220,
        image: "images/movies/33.jpg"
    },
    {
        title: "Dune: Arrakis",
        category: "movies",
        price: 220,
        image: "images/movies/36.jpg"
    },
    {
        title: "Joker Stairs Dance",
        category: "movies",
        price: 220,
        image: "images/movies/39.jpg"
    },

    // === قسم المسلسلات (Series) ===
    {
        title: "Sherlock Holmes",
        category: "series",
        price: 220,
        image: "images/series/1.jpg"
    },
    {
        title: "Money Heist",
        category: "series",
        price: 220,
        image: "images/series/2.jpg"
    },
    {
        title: "Mr. Robot",
        category: "series",
        price: 220,
        image: "images/series/23.jpg"
    },
    
    // === قسم السيارات (cars) ===
    {
        title: "Neon Muscle Car",
        category: "cars",
        price: 220,
        image: "images/cars/1.jpg"
    },
    {
        title: "Dark Beast",
        category: "cars",
        price: 220,
        image: "images/cars/2.jpg"
    },
    {
        title: "Night Rider",
        category: "cars",
        price: 220,
        image: "images/cars/3 (3).jpg"
    },
    {
        title: "Ferrari Red",
        category: "cars",
        price: 220,
        image: "images/cars/3.jpg"
    },
    {
        title: "Porsche GT",
        category: "cars",
        price: 220,
        image: "images/cars/4.jpg"
    },
    {
        title: "Green Speedster",
        category: "cars",
        price: 220,
        image: "images/cars/5.jpg"
    },
    {
        title: "Porsche Taycan",
        category: "cars",
        price: 220,
        image: "images/cars/6.jpg"
    },
    {
        title: "Retro Synthwave",
        category: "cars",
        price: 220,
        image: "images/cars/7 (3).jpg"
    },
    {
        title: "Red Details",
        category: "cars",
        price: 220,
        image: "images/cars/7.jpg"
    },
    {
        title: "BMW Motorrad",
        category: "cars",
        price: 220,
        image: "images/cars/8 (2).jpg"
    },
    {
        title: "Purple Vibe",
        category: "cars",
        price: 220,
        image: "images/cars/8.jpg"
    },
    {
        title: "Classic Red Sport",
        category: "cars",
        price: 220,
        image: "images/cars/9 (2).jpg"
    },
    {
        title: "Teal Racer",
        category: "cars",
        price: 220,
        image: "images/cars/9.jpg"
    },
    {
        title: "Yellow Supercar",
        category: "cars",
        price: 220,
        image: "images/cars/10.jpg"
    },
    {
        title: "Need Money For Porsche",
        category: "cars",
        price: 220,
        image: "images/cars/11 (2).jpg"
    },
    {
        title: "Pink Porsche Drift",
        category: "cars",
        price: 220,
        image: "images/cars/12 (3).jpg"
    },
// === قسم الجيمنج (Gaming) ===
    {
        title: "GTA IV Wanted",
        category: "gaming",
        price: 220,
        image: "images/gaming/1.jpg"
    },
    {
        title: "GTA V Legacy",
        category: "gaming",
        price: 220,
        image: "images/gaming/2.jpg"
    },
    {
        title: "Red Dead Redemption II",
        category: "gaming",
        price: 220,
        image: "images/gaming/3.jpg"
    },
    {
        title: "Hitman Agent 47",
        category: "gaming",
        price: 220,
        image: "images/gaming/4.jpg"
    },
    {
        title: "Red Dead Outlaw",
        category: "gaming",
        price: 220,
        image: "images/gaming/5.jpg"
    },
    {
        title: "Cyberpunk 2077",
        category: "gaming",
        price: 220,
        image: "images/gaming/6.jpg"
    },
    {
        title: "Call of Duty: Black Ops III",
        category: "gaming",
        price: 220,
        image: "images/gaming/7.jpg"
    },
    // === قسم التحفيز (Motivation) ===
    {
        title: "Discipline Statue",
        category: "motivation",
        price: 220,
        image: "images/motivation/2 (3).jpg"
    },
    {
        title: "Muhammad Ali - Never Give Up",
        category: "motivation",
        price: 220,
        image: "images/motivation/3.jpg"
    },
    {
        title: "Cristiano Ronaldo - Never Give Up",
        category: "motivation",
        price: 220,
        image: "images/motivation/5 (3).jpg"
    },

        // === قسم التحفيز (Motivation) ===
    {
        title: "Money Talks",
        category: "money",
        price: 220,
        image: "images/money/1.jpg"
    },


    // تقدر تنسخ السطر ده وتزود 100 صورة براحتك هنا!
];