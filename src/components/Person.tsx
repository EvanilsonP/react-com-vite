const getWeekDay = () => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long'} ).format(new Date());
};

export function Person() {
    const data = {
        name: 'Elon Musk',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHMB5ECYwHvgPcVehN-eLB6BGl3Nif2u15A9D1Qv9CA&s',
        roles: ['CEO da Tesla', 'CEO da SpaceX']
    };

    return (
        <div>
            <h1>{data.name} + {getWeekDay()}</h1>
            <img src={data.avatar} alt={data.name} />

            <ul>
                <li>{data.roles[0]}</li>
                <li>{data.roles[1]}</li>
            </ul>
        </div>
    );
}