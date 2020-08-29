import React from 'react'
import { connect } from 'react-redux'
const Alert = ({ alerts }) => (
    alerts.map((alert) =>
        (
            <div key={alert.id} className={`alert alert-${alert.alertType}`} role="alert">
                {alert.message}
            </div>
        ))
)

const mapStateToProps = state => ({
    alerts: state.alert.alerts
})
export default connect(mapStateToProps, null)(Alert)
