const hotels = [
    {
        id: 1048435,
        name: "Beautiful, best located apartment!",
        title: "Гостевой дом La Piccola Maison",
        city: "Spanish",
        // description: "Son Marimon, this B&B, is located in the municipality of Selva, at the feet of Serra de Tramuntana, recently declared World Heritage Site by UNESCO. It is five minutes away from Lloseta, a village that offers the travellers everything they need: gastronomy, theatre, concerts, shows, historical neighbourhood",
        price: 209,
        rate: 3.5,
        image: "https://a0.muscache.com/im/pictures/16186201/7575dc92_original.jpg?aki_policy=xx_large"
    },
    {
        id: 1233784,
        name: "Sofitel Dubai Jumeirah Beach",
        title: "Дубай, ОАЭ",
        city: "Dubai",
        description: "Porta 33 PENTHOUSE is a recently remodelled Duplex, inserted in the most privileged areas of Porto. It is situated in Rua das Flores, in the historical centre of Porto an area classified as World¹s heritage.",
        price: 3500,
        rate: 8.5,
        image: "https://a0.muscache.com/im/pictures/19755676/c2d3162d_original.jpg?aki_policy=xx_large"
    },
    {
        id: 534069,
        name: "BEST LOCATION OLD TOWN Luxury Loft",
        title: "",
        city: "Paris, France",
        description: "Welcome! Bienvenido! Benvenuti! Bienvenue! Nihao! Your stay starts with a bottle of wine and flowers !!!! My design appartment, (98 sq meters) right in the heart of the old town is available for short or long term stays. It's perfect for one person, or a couple. ",
        price: 450,
        rate: 7.5,
        image: "https://a0.muscache.com/im/pictures/9962983/36f95da5_original.jpg?aki_policy=xx_large"
    },
    {
        id: 3021762,
        name: "Private Family Villa & Pool 66Beach BALI Indonesia",
        title: "",
        city: "Warsaw, Poland",
        description: "Love Villa4 is a traditional Balinese home converted to Villa: sleeps 6+ in 3 large King & Queen bedrooms, 2 bathrooms, kitchen, hi speed internet, cable TV & large open living around divine pool incl sunny deck, 5min walk to amazing 66 beach!",
        price: 153,
        rate: 9.1,
        image: "https://a0.muscache.com/im/pictures/51c82da7-bccc-4ec2-ab44-e5ca6278bd91.jpg?aki_policy=xx_large"
    },
    {
        id: 744971,
        name: "Jumeirah Beach Hotel",
        title: "Дубай, ОАЭ",
        city: "Dubai, UAE",
        description: "This bamboo cottage is a secluded eco retreat down a quiet foot path nestled in the rice fields and only a five minute walk to central Ubud. Open air basket weave bedroom with mini loft, modern elegant bathroom and outdoor living area make this a truly unique Bali experience.",
        price: 4200,
        rate: 9.5,
        image: "https://a0.muscache.com/im/pictures/29099674/7e3509fe_original.jpg?aki_policy=xx_large"
    },
    {
        id: 10947454,
        name: "Rooftop Suite with Superb View",
        city: "Prague, Czech Republic",
        description: "The roof top suite offers the most spectacular views of tropical forest above Ayung River with 4 mountain peaks in distance . Located 2,7 km ( 10 minutes drive ) to the center of town, this suite features a shared pool overlooks the Sayan Ridge.",
        price: 1180,
        rate: 6.3,
        image: "https://a0.muscache.com/im/pictures/13df9c89-2199-4d26-a885-5c6a21b1bff1.jpg?aki_policy=xx_large"
    },
    {
        id: 489668,
        name: "Hotel Dharmas",
        title: "Италия, Рим",
        city: "",
        description: "A Big yurt of 50 m2 in the massif of Wallows in Savoy. Calm down in the middle of nowhere. The view (sight) is 360 ° on baujus mountains (Massif of Bauges).",
        price: 760,
        rate: 5.1,
        image: "https://a0.muscache.com/im/pictures/10356334/a831e142_original.jpg?aki_policy=xx_large"
    },
    {
        id: 4394638,
        name: "Beauty calm *** near the Lake Annecy and mountains",
        title: "",
        city: "",
        description: "In Veyrier du lac, every close friend of the lake: in beautiful villa, comfortable studio 22 m2 , 2 beds (among which 1 seat(sofa) reads convertible 2 people), fully-equipped kitchen, shower, wc, sink,TV. Of May 15th at the end of September access warmed swimming pool.",
        price: 650,
        rate: 4.5,
        image: "https://a0.muscache.com/im/pictures/56181092/46456562_original.jpg?aki_policy=xx_large"
    }
]

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(hotels);
        }, 1500);
    });

    export default {
        fetchAll
    };    