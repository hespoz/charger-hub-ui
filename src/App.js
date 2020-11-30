import React, { useState, useEffect } from 'react';
import ChargerHubReport from './components/ChargerHubReport';
import StreetAdapters from './components/StreetAdapters';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const App = () => {

  const [chargerList, setChargerList] = useState([]);

  useEffect(()=>{
      axios.get('http://localhost:8080').then((resp)=> {
          setChargerList(resp && resp.data ? resp.data : []);
      })
  }, []);

  return (
    <div className="App">
      <Grid container>
        <Grid item>
          <ChargerHubReport chargerList={chargerList}/>
        </Grid>
        <Grid item>
          <StreetAdapters chargerList={chargerList} onUpdateChargerList={(newChargerHubList) => {
            setChargerList(newChargerHubList);  
          }}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
