import BModal from "../Modal/BModal"
import { Room } from "../Room/Room"
import "./Settlement.scss"


export const Settlement = () => {
    return (
        <div className="settlement">
            <h3 className="settlement-title">Расселение</h3>
            <div className="rooms-wrapper flex flex-wrap">
                <Room title="Комната мальчиков"/>
                <Room title="Комната мальчиков" sex="female"/>
                <Room title="Комната мальчиков"/>
                <Room title="Комната мальчиков"/>
            </div>
                <BModal />
                <Room title="Участники" sex="participants" /> 
        </div>
    )
}