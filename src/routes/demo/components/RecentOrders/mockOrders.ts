import InstagramIcon from '@/assets/icons/social/instagram.svg'
import FacebookIcon from '@/assets/icons/social/facebook.svg'
import EventbriteIcon from '@/assets/icons/social/eventbrite.svg'
import TwitterIcon from '@/assets/icons/social/twitter.svg'

export const mockOrders = [
    {
        orderId: "#0912",
        dateOfPurchase: "Fri, Jul 26, 2024",
        event: {
            name: "Laugh Riot",
            imageUrl: "https://example.com/images/laugh-riot.png",
        },
        customer: "Melissa Crew",
        noOfTickets: 6,
        salesChannel: {
            name: "Instagram",
            iconUrl: InstagramIcon,
        },
        orderTotal: "$84",
    },
    {
        orderId: "#0122",
        dateOfPurchase: "Fri, Jul 26, 2024",
        event: {
            name: "Mister Vape Festival",
            imageUrl: "https://example.com/images/mister-vape.png",
        },
        customer: "Anthony Brooke",
        noOfTickets: 3,
        salesChannel: {
            name: "Twitter / X",
            iconUrl: TwitterIcon,
        },
        orderTotal: "$72",
    },
    {
        orderId: "#02332",
        dateOfPurchase: "Thu, Jul 25, 2024",
        event: {
            name: "Punchline Parade",
            imageUrl: "https://example.com/images/punchline-parade.png",
        },
        customer: "Kelly Levine",
        noOfTickets: 2,
        salesChannel: {
            name: "Instagram",
            iconUrl: InstagramIcon,
        },
        orderTotal: "$48",
    },
    {
        orderId: "#3231",
        dateOfPurchase: "Thu, Jul 25, 2024",
        event: {
            name: "Jetpack Comedy",
            imageUrl: "https://example.com/images/jetpack-comedy.png",
        },
        customer: "Adam Clarkson",
        noOfTickets: 1,
        salesChannel: {
            name: "Eventbrite",
            iconUrl: EventbriteIcon,
        },
        orderTotal: "$24",
    },
    {
        orderId: "#36321",
        dateOfPurchase: "Thu, Jul 25, 2024",
        event: {
            name: "The Nicole Show",
            imageUrl: "https://example.com/images/the-nicole-show.png",
        },
        customer: "Mark Brunt",
        noOfTickets: 3,
        salesChannel: {
            name: "Facebook",
            iconUrl: FacebookIcon,
        },
        orderTotal: "$72",
    },
    {
        orderId: "#753",
        dateOfPurchase: "Wed, Jul 24, 2024",
        event: {
            name: "HaHa Haven",
            imageUrl: "https://example.com/images/haha-haven.png",
        },
        customer: "Bruce Lane",
        noOfTickets: 5,
        salesChannel: {
            name: "Facebook",
            iconUrl: FacebookIcon,
        },
        orderTotal: "$121",
    },
];
