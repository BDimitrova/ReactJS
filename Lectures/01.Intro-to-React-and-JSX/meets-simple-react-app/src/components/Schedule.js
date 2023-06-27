import NavTab from "./NavTab";
import TabPanel from "./TabPanel";

function Schedule() {
    return (
        <div className="container">
            <div className="row me-row schedule" id="schedule">
                <h2 className="row-title content-ct">Event Schedule</h2>
                <div className="col-md-12">
                    <NavTab/>                   

                    <TabPanel />
                </div>
            </div>
        </div>
    );
}

export default Schedule;