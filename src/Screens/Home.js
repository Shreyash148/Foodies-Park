import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  const [foodItem, setFoodItem] = useState([]);
  const [checked, setChecked] = useState([]);
  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodItem(response);
  }
  const search = async (data) => {
    if (data.search !== "") {
      let response = await fetch(`http://localhost:5000/api/search/${data.search}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      response = await response.json();
      setFoodItem(response);
    }
  }
  const handleFilter = (e) => {
    let all = [...checked];
    if (e.target.checked) {
      all.push(e.target.name);
    } else {
      all = all.filter(ele => ele !== e.target.name);
    }
    console.log(all);
    setChecked(all);
  }
  useEffect(() => {
    if(checked.length===0)
    loadData()
    else{
      const getFiltered = async () => {
        let response = await fetch("http://localhost:5000/api/filter", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            checked
          })
        });
        response = await response.json();
        setFoodItem(response);
      }
      getFiltered();
    }
  }, [checked]);
  return (
    <>
      <Navbar />
      <Carousel search={search} />
      <div className="container">
        <form className='d-flex container'>
          <div className="form-check form-switch mx-2 py-4">
            <input className="form-check-input" type="checkbox" role="switch" id="Veg" name="Veg" onChange={(e) => handleFilter(e)} />
            <label className="form-check-label text-success" htmlFor="Veg"><b>Veg</b></label>
          </div>
          <div className="form-check form-switch mx-2 py-4">
            <input className="form-check-input" type="checkbox" role="switch" id="Non-Veg" name='Non-Veg' onChange={(e) => handleFilter(e)} />
            <label className="form-check-label text-danger" htmlFor="Non-Veg"><b>Non-Veg</b> </label>
          </div>
        </form>
        <div className="row ">
        {foodItem.length!==0?<>
          {foodItem.map((ele) => {
            return <div className="col-3 m-4" key={ele._id}>
              <Card key={ele._id} item={ele} />
            </div>
          })}</>:<div className='text-center' style={{fontSize:"larger"}}><b>No Results Found</b></div>}
        </div>
      </div>
      <Footer />
    </>
  )
}
