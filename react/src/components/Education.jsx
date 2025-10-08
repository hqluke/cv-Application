import { useState } from 'react';

function Education({onSubmit}){
    
    const [formData, setFormData] = useState({
        school: "",
        major: "",
        startDate: "",
        endDate: ""
    })
    
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(false);
    }

    const handleChange = (field) => (e) => {
        let value = e.target.value;
        setFormData(prev => ({ ...prev, [field]: value }));
    };


    const handleData = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setIsEditing(true);
    }
    
    
    return(
    <div className='form-e'>
      <div className='form-e-h1'>
        <h1>Education</h1>
      </div>
      {!isEditing && 
        <form className='form-e' onSubmit={handleData}>
            <div className='label-e'>
                <div className='labelLeft-e'>
                    <label>School:</label>
                </div>
                <div className='labelRight-e'>
                    <input
                    type="text" 
                    value={formData.school}
                    onChange={handleChange('school')}
                    placeholder='Enter your school'
                    pattern="[A-Za-z ]{1,32}"
                    disabled={isEditing} 
                    />
                </div>
            </div>
            <div className='label-e'>
                <div className='labelLeft-e'>
                    <label>Major:</label>
                </div>
                <div className='labelRight-e'>
                    <input
                        type="text"
                        pattern="[A-Za-z ]{1,32}"
                        onChange={handleChange('major')}
                        placeholder='Enter your major'
                        value = {formData.major}
                        disabled={isEditing} 
                    />
                </div>
            </div>
            <div className='label-e'>
                <div className='labelLeft-e'>
                    <label>Started:</label>
                </div>
                <div className='labelRight-e'>
                    <input
                        type="date" 
                        value={formData.startDate}
                        onChange={handleChange('startDate')}
                        disabled={isEditing} 
                    />
                </div>
            </div>
            <div className='label-e'>
                <div className='labelLeft-e'>
                    <label>Graduation:</label>
                </div>
                <div className='labelRight-e'>
                    <input
                        type="date" 
                        value={formData.endDate}
                        onChange={handleChange('endDate')}
                        disabled={isEditing} 
                    />
                </div>
            </div>            
            <div className='form-button-e'>
        {!isEditing && <button className='form-button-submit-e' type='submit'>Submit</button>}
        
        </div>
        </form>
        }
        <div className='form-button-e'>
            {isEditing && <button className='form-button-edit-e' type='button' onClick={handleEdit}>Edit</button>}
        </div>
    </div>
    )
}



export{Education};