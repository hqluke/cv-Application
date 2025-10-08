import { useState } from 'react';


function PersonalInformation({onSubmit}){

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(false);  // Show Submit button
  }

  const handleChange = (field) => (e) => {
    let value = e.target.value;
    if (field === 'phone') {
      value = formatPhoneNumber(value);
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };


  const handleData = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setIsEditing(true);
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
      <div className='form-h1'>
        <h1>Personal Information</h1>
      </div>
      {!isEditing &&
        <form onSubmit={handleData}>
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
                    disabled={isEditing} 
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
                        disabled={isEditing} 
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
                        disabled={isEditing} 
                    />
                </div>
            </div>
            <div className='form-button'>
        {!isEditing && <button className='form-button-submit' type='submit'>Submit</button>}
        
        </div>
        </form>
          }
          <div className='form-button'>
          {isEditing && <button className='form-button-edit' type='button' onClick={handleEdit}>Edit</button>}
          </div>
    </div>
  )
}

export{PersonalInformation}