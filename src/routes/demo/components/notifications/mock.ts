const now = new Date();

export const mockNotifications = [
    {
        name: "Grace Lusk",
        action: "confirmed for",
        event: "Jest Quest",
        message: `"Can I go up early? I have another show at..."`,
        time: new Date(now.getTime() - 5 * 60 * 1000), // 5 минут назад
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        status: "performer confirmed",
    },
    {
        name: "Andy Peters",
        action: "declined for",
        event: "Jest Quest",
        message: "",
        time: new Date(now.getTime() - 21 * 60 * 1000), // 21 минуту назад
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        status: "declined",
    },
    {
        name: "All Performers",
        action: "confirmed for",
        event: "Jest Quest",
        message: "4/4 spots confirmed",
        time: new Date(now.getTime() - 5 * 60 * 1000), // 5 минут назад
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        status: "event is fully booked",
    },
    {
        name: null,
        action: null,
        event: "Jest Quest has been published",
        message: "Ticket sales are now open",
        time: new Date(now.getTime() - 5 * 60 * 1000), // 5 минут назад
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        status: "event is now published",
    },
    {
        name: null,
        action: null,
        event: "Jetpack Comedy is sold out",
        message: "",
        time: new Date(now.getTime() - 24 * 60 * 60 * 1000), // Вчера
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        status: "show sold out",
    },
    {
        name: null,
        action: null,
        event: "The Jetpack Comedy Show just sold out",
        message: "Thursday, 8:30pm",
        time: new Date(now.getTime() - 24 * 60 * 60 * 1000), // Вчера
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        status: "show sold out",
    },
    {
        name: null,
        action: null,
        event: "6 VIP tickets sold for The Black Lady Sketch Show",
        message: "85/100 sold",
        time: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000), // Несколько дней назад
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        status: "ticket sold",
    },
];
