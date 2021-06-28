
import './App.css';
import {LeftMenu} from "./components/LeftMenu";
import {Inbox} from "./components/Inbox";
import {Table} from "./components/Table";

import icoDrivers from "./drivers.png"
import icoInbox from "./inbox.png"
import icoLoads from "./loads.png"
import icoStats from "./stats.png"
import icoCustomers from "./customers.png"

function App() {

  const testData = [
    {id: 0, company: 'company0', broker: 'broker0', routeCount: 0, from: 'fromRoute', fromDate: '04/02/2020', to: 'toRoute', toDate: '05/02/2020', milies: 100, rate: 8, email: 'email@1', receivedAt: '01.02.1990'},
    {id: 1, company: 'company1', broker: 'broker1', routeCount: 0, from: 'fromRoute', fromDate: '04/02/2020', to: 'toRoute', toDate: '05/02/2020', milies: 110, rate: 7, email: 'email@2', receivedAt: '01.02.1991'},
    {id: 2, company: 'company2', broker: 'broker2', routeCount: 1, from: 'fromRoute', fromDate: '04/02/2020', to: 'toRoute', toDate: '05/02/2020', milies: 120, rate: 6, email: 'email@33', receivedAt: '01.02.2000'},
    {id: 3, company: 'company3', broker: 'broker3', routeCount: 3, from: 'fromRoute', fromDate: '04/02/2020', to: 'toRoute', toDate: '05/02/2020', milies: 130, rate: 5, email: 'email@44', receivedAt: '01.02.2002'},
    {id: 4, company: 'company4', broker: 'broker4', routeCount: 0, from: 'fromRoute', fromDate: '04/02/2020', to: 'toRoute', toDate: '05/02/2020', milies: 140, rate: 4, email: 'email@5', receivedAt: '01.02.2020'},
    {id: 5, company: 'company5', broker: 'broker5', routeCount: 1, from: 'fromRoute', fromDate: '04/02/2020', to: 'toRoute', toDate: '05/02/2020', milies: 150, rate: 3, email: 'email@66', receivedAt: '01.02.2021'},
    {id: 6, company: 'company6', broker: 'broker6', routeCount: 1, from: 'fromRoute', fromDate: '04/02/2020', to: 'toRoute', toDate: '05/02/2020', milies: 160, rate: 2, email: 'email@7', receivedAt: '01.02.2022'},
    {id: 7, company: 'company7', broker: 'broker7', routeCount: 0, from: 'fromRoute', fromDate: '04/02/2020', to: 'toRoute', toDate: '05/02/2020', milies: 170, rate: 1, email: 'email@88', receivedAt: '01.02.2023'},
  ]

  const leftMenu = [
    {id: 0, title: "Drivers", icon: icoDrivers, news: 0},
    {id: 1, title: "Inbox", icon: icoInbox, news: 0},
    {id: 2, title: "Loads", icon: icoLoads, news: 7},
    {id: 3, title: "Stats", icon: icoStats, news: 0},
    {id: 4, title: "Customers", icon: icoCustomers, news: 0}
  ]

  return (
    <div className="App">
      <LeftMenu data={leftMenu} />
        <Inbox number="251">
          <Table data={testData} />
        </Inbox>
    </div>
  );
}

export default App;
