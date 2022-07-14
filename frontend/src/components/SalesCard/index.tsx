import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import NotificationButton from '../NotificationButton';

import './style.css';

function SalesCard() {
    return (
        <>
            <div className="dsmeta-card">
                    <div className="dsmeta-container">
                        <h2 className="dsmeta-sales-tittle">Vendas</h2>
                        <div className="dsmeta-form-control-container">
                            <DatePicker
                                selected={new Date()}
                                onChange={(date: Date) => {}}
                                className="dsmeta-input"
                                dateFormat="dd/MM/yyyy"
                            />
                            
                        </div>
                        <div className="dsmeta-form-control-container">
                            <DatePicker
                                selected={new Date()}
                                onChange={(date: Date) => {}}
                                className="dsmeta-input"
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>

                        <div>
                            <table className="dsmeta-sales-table">
                                <thead>
                                    <tr>
                                        <th className="show992">ID</th>
                                        <th className="show576">Data</th>
                                        <th>Vendedor</th>
                                        <th className="show992">Visitas</th>
                                        <th className="show992">Vendas</th>
                                        <th>Total</th>
                                        <th>Notificar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="show992">#346</td>
                                        <td className="show576">08/07/2022</td>
                                        <td>Anakin</td>
                                        <td className="show992">15</td>
                                        <td className="show992">11</td>
                                        <td>R$5530.00</td>
                                        <td>
                                               <NotificationButton />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="show992">#121</td>
                                        <td className="show576">08/07/2022</td>
                                        <td>Luke</td>
                                        <td className="show992">10</td>
                                        <td className="show992">08</td>
                                        <td>R$3900.00</td>
                                        <td>
                                                    <NotificationButton />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="show992">#298</td>
                                        <td className="show576">08/07/2022</td>
                                        <td>Padme</td>
                                        <td className="show992">15</td>
                                        <td className="show992">10</td>
                                        <td>R$5685.00</td>
                                        <td>
                                                <NotificationButton />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SalesCard