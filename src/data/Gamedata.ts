export interface Game {
    id: number;
    name: string;
    desc: string;
    price: number;
    maker: string;
    score: string;
}

const gameData: Game[] = [
    {
        id: 4,
        name: 'Black Myth : Wukong',
        desc: 'Action RPG Game',
        price: 66800,
        maker: 'Game Science',
        score: '★★★★',
    },
    {
        id: 5,
        name: 'Dragon Quest III - HD-2D Remake',
        desc: 'Remake of Great JRPG Game',
        price: 67800,
        maker: 'Square Enix',
        score: '★★★★☆',
    },
    {
        id: 6,
        name: 'Final Fantasy VII Rebirth',
        desc: 'Open World Action RPG Game',
        price: 79800,
        maker: 'Square Enix',
        score: '★★★★★',
    },

];

export default gameData;