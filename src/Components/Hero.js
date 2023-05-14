import React, { useState } from "react";
import './Home.css'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import Moment from "react-moment";




export default function Hero() {
   
    const [value, onChange] = useState(new Date());
    const [cycle, cycleValue] = useState("28");

    
    const [cycle1, cycleValue1] = useState("2");
  
  const date = value;
  console.log(cycle);
  const cycleLength = parseInt(cycle);

  const date1 = value;
  console.log(cycle1);
  const cycleLength1 = parseInt(cycle1);


  



  return (
    <>
    <div>
      <div className="head"><h1><b>Why MyMonthly?</b></h1></div>
      <div className="head-body"><p>While menstrual cycles typically occur every 28-30 days, predicting the exact date and duration of one's next period can be difficult for many women. This can cause stress and anxiety, especially for those trying to conceive or avoid pregnancy. Thankfully, period calculator can assist in tracking menstrual cycles and estimating the start of the next cycle. This online tool use algorithms based on the average length of menstrual cycles and the date of the last period to provide an estimate. Period calculator can help women plan activities and prepare for menstruation, making life easier and less stressful.</p></div>

      <div className='text'>
        
      <label for="cycle"><b>Step 1: How long is your menstrual cycle? :</b> </label>
        <select
          onChange={(e) => cycleValue(e.target.value)}
          defaultValue={cycle}
          className="m-2"
        >
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>
      </div>

      <div className='text'>
     
      <label for="cycle1"><b>Step 2: How many days did your period last? : </b></label>
        <select
          onChange={(o) => cycleValue1(o.target.value)}
          defaultValue={cycle1}
          className="m-2"
        >
          <option value1="2">2</option>
          <option value1="3">3</option>
          <option value1="4">4</option>
          <option value1="5">5</option>
          <option value1="6">6</option>
          <option value1="7">7</option>
          <option value1="8">8</option>
          
        </select>
        </div>

      <div className='text1'>
      <p>
        <b>Step 3: When did your last period started?</b>
      </p>
  
      </div>
      
  
      <div className="d-flex justify-content-center ">
        
        <Calendar onChange={onChange} value={value} 
          className="calendar mt-0" />
          
          
      </div>
     
  
      <div className="text-center mt-4 p-2">
        <div className="row">
          <div class="d-flex justify-content-center">
            <div className="col-md-3 m-3 box ">
              <p>Next Period</p>
  
              <Moment format="Do MMMM YYYY" 
                add={{ days: cycleLength - 1 }}>
                {date}
              </Moment>
            </div>
            <div className="col-md-3 m-3 box ">
              <p> Next Period ending date</p>
  
              <Moment
                format="Do MMMM YYYY"
                add={{ days: cycleLength - 1 + cycleLength1 }}
              >
                {date1}
              </Moment>
            </div>
            <div className="col-md-3 m-3 box ">
              <p> Approximate Ovulation Day</p>
  
              <Moment
                format="Do MMMM YYYY"
                add={{ days: cycleLength - 1 + 14 }}
              >
                {date}
              </Moment>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );}
