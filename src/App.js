import { useState } from 'react';
function App() {
  const[formData,setFormData] = useState({first_name:"",last_name:"",email:"",country:"",street_address:"",city:"",state:"",
  zip:"",comments:true,candidates:true,offers:true,mode:""})
  console.log(formData);
  function onChangeHandler(event){
    const {name,value,checked,type} = event.target;
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name]:type === 'checkbox'?checked:value
      }
    })
  }
  return (
    <div className="main">
      <form className="form-content">
        <label className="first-name" htmlFor='first-name'>First name</label>
        <br/>
        <input type='text' className="first" id='first-name' placeholder='shiv' name='first_name'
        onChange={onChangeHandler}/>
        <br/>
        <br/>
        <label className="last-name" htmlFor='last-name'>Last name</label>
        <br/>
        <input type='text' className="last" id='last-name' placeholder='singh' name='last_name'
        onChange={onChangeHandler}/>
        <br/>
        <br/>
        <label className="email" htmlFor='email'>Email</label>
        <br/>
        <input type='email' className="email-input" id='email' placeholder='shiv33852@gmail.com' name='email'
        onChange={onChangeHandler}/>
        <br/>
        <br/>
        <label className="country" htmlFor='country'>Country</label>
        <br/>
        <select className="country-input" name='country' id='country' 
        onChange={onChangeHandler}>
          <option value='India'>India</option>
          <option value='UK'>U.K</option>
          <option value='Canada'>Canada</option>
        </select>
        <br/>
        <br/>
        <label className="street-address" htmlFor='street-address'>Street address</label>
        <br/>
        <input type='text' className="street-address-input" id='street-address' placeholder='sikka kheda' name='street_address'
        onChange={onChangeHandler}/>
        <br/>
        <br/>
        <label className="city" htmlFor='city'>City</label>
        <br/>
        <input type='text' className="city-input" id='city' placeholder='Unnao' name='city'
        onChange={onChangeHandler}/>
        <br/>
        <br/>
        <label className="state" htmlFor='state'>State / Province</label>
        <br/>
        <input type='text' className="state-input" id='state' placeholder='Uttar Pradesh' name='state'
        onChange={onChangeHandler}/>
        <br/>
        <br/>
        <label className="zip" htmlFor='zip'>Zip / Postal code</label>
        <br/>
        <input type='text' className="zip-input" id='zip' placeholder='209821' name='zip'
        onChange={onChangeHandler}/>
        <br/>
        <br/>
        <div className='by-email'>By Email</div>
        <div className='checkbox-container'>
        <input className="by-email-checkbox" type='checkbox' id='comments' name='comments'
        onChange={onChangeHandler}/>
        <label className="by-email-label" htmlFor='comments'>Comments</label>
        </div>
        <p className='by-email-para'>Get notified when someone post a comment on a post</p>
        <div className='checkbox-container'>
        <input className="by-email-checkbox" type='checkbox' id='candidates' name='candidates'
        onChange={onChangeHandler}/>
        <label className="by-email-label" htmlFor='candidates'>Candidates</label>
        </div>
        <p className='by-email-para'>Get notified when someone post a comment on a post</p>
        <div className='checkbox-container'>
        <input className="by-email-checkbox" type='checkbox' id='offers' name='offers'
        onChange={onChangeHandler}/>
        <label className="by-email-label" htmlFor='offers'>Offers</label>
        </div>
        <p className='by-email-para'>Get notified when someone post a comment on a post</p>
        <div className='push-not'>Push Notifications</div>
        <p className='push-para'>These are delivered via sms to your mobile phone</p>
        <input className="push-radio-btn" type='radio' id='everything' name='mode' value='everything'
        onChange={onChangeHandler}/>
        <label className="push-radio-label" htmlFor='everything'>Everything</label>
        <br/>
        <input className="push-radio-btn" type='radio' id='same-as' name='mode' value='same_as'
        onChange={onChangeHandler}/>
        <label className="push-radio-label" htmlFor='same-as'>Same as email</label>
        <br/>
        <input className="push-radio-btn" type='radio' id='no-push' name='mode' value='no_push'
        onChange={onChangeHandler}/>
        <label className="push-radio-label" htmlFor='no-push'>No Push Notifications</label>
        <br/>
        <button className='final-btn'>Save</button>
      </form>
    </div>
  );
}

export default App;
