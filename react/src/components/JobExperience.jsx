import {useState} from 'react';

function JobExperience({onSubmit}){
    
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        description: "",
        startDateJob: "",
        endDateJob: ""
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
    <div className='form-j'>
      <div className='form-j-h1'>
        <h1>Job Experience</h1>
      </div>
        <form className='form-j' onSubmit={handleData}>
            <div className='label-j'>
                <div className='labelLeft-j'>
                    <label>Company:</label>
                </div>
                <div className='labelRight-j'>
                    <input
                    type="text" 
                    value={formData.company}
                    onChange={handleChange('company')}
                    placeholder='Enter your company'
                    pattern="[A-Za-z ]{1,32}"
                    disabled={isEditing} 
                    />
                </div>
            </div>
            <div className='label-j'>
                <div className='labelLeft-j'>
                    <label>Position:</label>
                </div>
                <div className='labelRight-j'>
                    <input
                        type="text"
                        pattern="[A-Za-z ]{1,32}"
                        onChange={handleChange('position')}
                        placeholder='Enter your position'
                        value = {formData.position}
                        disabled={isEditing} 
                    />
                </div>
            </div>
            <div className='label-j'>
                <div className='labelLeft-j'>
                    <label>Description:</label>
                </div>
                <div className='labelRight-j'>
                    <textarea
                        
                        pattern="[A-Za-z ]{1,200}"
                        onChange={handleChange('description')}
                        placeholder='Enter your description'
                        value = {formData.description}
                        disabled={isEditing} 
                    />
                </div>
            </div>
            <div className='label-j'>
                <div className='labelLeft-j'>
                    <label>Started:</label>
                </div>
                <div className='labelRight-j'>
                    <input
                        type="date" 
                        value={formData.startDateJob}
                        onChange={handleChange('startDateJob')}
                        disabled={isEditing} 
                    />
                </div>
            </div>
            <div className='label-j'>
                <div className='labelLeft-j'>
                    <label>Graduation:</label>
                </div>
                <div className='labelRight-j'>
                    <input
                        type="date" 
                        value={formData.endDateJobs}
                        onChange={handleChange('endDateJob')}
                        disabled={isEditing} 
                    />
                </div>
            </div>            
            <div className='form-button-j'>
        {!isEditing && <button className='form-button-submit-j' type='submit'>Submit</button>}
        {isEditing && <button className='form-button-jdit-j' type='button' onClick={handleEdit}>Edit</button>}
        </div>
        </form>
        
    </div>
    )
}



export{JobExperience};


