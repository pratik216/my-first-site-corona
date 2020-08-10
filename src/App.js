import React, { useEffect, useState } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck'
import axios from 'axios'
import Columns from 'react-columns'

function App() {
  const [Lastest, setLastest] = useState([])
  const [Result, setResult] = useState([])
  const [SearchCountry, setSearchCountry] = useState("")
  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((responseArr) => {
        setLastest(responseArr[0].data);
        setResult(responseArr[1].data);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(Lastest.updated));
  const UpdatedDate = date.toString()
  console.log(UpdatedDate)

  const filtercountry=Result.filter(item=>{
    return  SearchCountry !==""? item.country.includes(SearchCountry):item
  })

  const countries = filtercountry.map((data,i)=> {
    return (
      <Card bg="light"
        text="dark"
        className="text-center"
        style={{ margin: '10px' }} key={i}>
          <Card.Img variant="top" src={data.countryInfo.flag}/>
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Today's case {data.todayCases}</Card.Text>
          <Card.Text>Today's death {data.todayDeaths}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
          <Card.Text>Critical {data.critical}</Card.Text>
        </Card.Body>

      </Card>
    )
  })
  
  var queries=[{
        columns:2,
        query:'min-width:500px'
  },{
          columns:3,
          query:'min-width:1000px'
  }];
  return (
    <div>
      <h1 className="text-center">Covid Live Result</h1>
      <CardDeck>
        <Card bg="secondary" text="white" className="text-center" style={{ margin: '10px' }}>
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <Card.Text>
              {Lastest.cases}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {UpdatedDate}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white" className="text-center" style={{ margin: '10px' }}>
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>
              {Lastest.deaths}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small >Last updated {UpdatedDate}</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="white" className="text-center" style={{ margin: '10px' }}>
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>
              {Lastest.recovered}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small >Last updated {UpdatedDate}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <input type="text" placeholder="Enter Country Name" style={{marginLeft:"10px"}} onChange={e=>setSearchCountry(e.target.value)}/>
      <Columns queries={queries}>
      {countries}
      </Columns>
      
    </div>
  );
}

export default App;
