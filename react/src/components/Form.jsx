import { useState } from 'react';


function Form({onSubmit}){

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleChange = (field) => (e) => {
    let value = e.target.value;
    if (field === 'phone') {
      value = formatPhoneNumber(value);
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  }

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '');
    let formattedNumber = '';

    
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
        <form onSubmit={handleSubmit}>
            <div className='label'>
                <div className='labelLeft'>
                    <label>Name:</label>
                </div>
                <div className='labelRight'>
                    <input
                    type="text" 
                    value={formData.name}
                    onChange={handleChange('name')}
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
                        onChange={handleChange('email')}
                        placeholder='Enter your email'
                        value = {formData.email}
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
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        placeholder="XXX-XXX-XXXX"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    />
                </div>
            </div>
        <button type='submit'>Submit</button>

        </form>
    </div>
  )
}

export{Form}