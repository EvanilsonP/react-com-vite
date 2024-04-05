const getWeekDay = () => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long'} ).format(new Date());
};

type Props = {
    name: string;
    avatar: string;
    roles: string[];
}

export function Person(props: Props) {
    return (
        <div>
            <h1>{props.name} + {getWeekDay()}</h1>
            <img src={props.avatar} alt={props.name} />

            <ul>
                <li>{props.roles[0]}</li>
                <li>{props.roles[1]}</li>
            </ul>
        </div>
    );
}