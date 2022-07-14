import icon from '../../assets/img/notification-icon.svg'

import './style.css'

function NotificationButton() {
    return (
        <>
            <h1>Olá, react!</h1>
            <div className="dsmeta-red-btn">
                <img src={icon} alt="Notificar" />
            </div>
        </>
    )
}

export default NotificationButton
