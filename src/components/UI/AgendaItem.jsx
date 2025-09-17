import { styles } from '../../styles/style';

const AgendaItem = ({ time, title, ...rest }) => {
    return (
        <>
            <div {...rest}>
                <div style={{ ...styles.agendaTime, color: 'white' }}>{time}</div>
                <div style={{ ...styles.agendaTitle, color: 'white' }}>{title}</div>
            </div>
        </>
    );
};

export default AgendaItem;