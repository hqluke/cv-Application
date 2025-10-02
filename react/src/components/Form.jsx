import { useState } from 'react';


function Form(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  function changeName(e){
    setName(e.target.value);
  }

  function changeEmail(e){
    setEmail(e.target.value);
  }

  function changePhone(e){
    const inputValue = e.target.value;
    setPhone(formatPhoneNumber(inputValue));
  }

    const formatPhoneNumber = (value) => {
    // Remove non-digit characters
    const digits = value.replace(/\D/g, '');
    let formattedNumber = '';

    // Apply specific formatting logic (e.g., (XXX) XXX-XXXX)
    if (digits.length > 6) {
      formattedNumber = `${digits.substring(0, 3)}-${digits.substring(3, 6)}-${digits.substring(6, 10)}`;
    } else if (digits.length > 3) {
      formattedNumber = `${digits.substring(0, 3)}-${digits.substring(3, 6)}`;
    } else if (digits.length > 0) {
      formattedNumber = `${digits.substring(0, 3)}`;
    }
    return formattedNumber;
  };
  
  
    return (
    <div className='form'>
        <form>
            <div className='label'>
                <div className='labelLeft'>
                    <label>Name:</label>
                </div>
                <div className='labelRight'>
                    <input
                    type="text" 
                    value={name}
                    onChange={changeName}
                    placeholder='Enter your name'
                    pattern="[A-Za-z ]{1,32}"
                    />
                </div>
            </div>
            <div className='label'>
                <div className='labelLeft'>
                    <label>Email:</label>
                </div>
                <div className='labelRight'>
                    <input
                        type="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        title="Please enter a valid email address."
                        onChange={changeEmail}
                        placeholder='Enter your email'
                    />
                </div>
            </div>
            <div className='label'>
                <div className='labelLeft'>
                    <label>Phone:</label>
                </div>
                <div className='labelRight'>
                    <input
                        type="tel" 
                        value={phone}
                        onChange={changePhone}
                        placeholder="XXX-XXX-XXXX"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
                </div>
            </div>
        <button>Test</button>
        <p>Current value: {name}</p>
        <p>Current value: {email}</p>
        <p>Current value: {phone}</p>
        </form>
    </div>
  )
}

export{Form}