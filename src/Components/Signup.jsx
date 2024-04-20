import React,{useState} from 'react';
import './signup.css'

const signup = () => {
    const [formData,setFormData]=useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        birthday: '',
        language: '',
        photo: null,
    
    })
    const [errors,setErrors]=useState({})
    
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? e.target.files[0] : value,
        });
        // Clear validation error for the field being edited
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        // Check each field for validation
        if (!formData.firstName.trim()) {
            validationErrors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
            validationErrors.lastName = 'Last name is required';
        }
        if (!formData.username.trim()) {
            validationErrors.username = 'Username is required';
        }
        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            validationErrors.email = 'Please enter a valid email address';
        }
        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long';
        }
        if  (!formData.confirmPassword.trim()) {
            validationErrors. confirmPassword= 'Password is required';
        }
        
        else if(formData.confirmPassword !== formData.confirmPassword) {
            validationErrors.confirmPassword= 'Passwords do not match';
        }
        if (!formData.gender) {
            validationErrors.gender = 'Gender is required';
        }
        if (!formData.birthday) {
            validationErrors.birthday = 'Birthday is required';
        }
        if (!formData.language) {
            validationErrors.language = 'Language is required';
        }
        if (!formData.photo) {
            validationErrors.photo = 'Photo is required';
        }

        // Set errors object with validationErrors
        setErrors(validationErrors);

        // If there are no validation errors, you can proceed with form submission
        if (Object.keys(validationErrors).length === 0) {
            // Process form submission
            console.log('Form submitted:', formData);
        }
    };

    const isValidEmail = (email) => {
        // Basic email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    
  return (
    <div className='container3'>
        <h2 className='title'>Signup</h2>
        <form onSubmit={handleSubmit} className='form'>
            <div className='title'>welcome</div>
            <div className='subtitle'>Let's create youre Account</div>
            <div>
                <label htmlFor='firstname'>FirstName:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <span className='error'>{errors.firstName}</span>}
            </div>
            <div>
                <label htmlFor='secondname'>SecondName:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                 {errors.lastName && <span className='error'>{errors.lastName}</span>}
            </div>
            <div>
                <label htmlFor='username'>username:</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                 {errors.username && <span className='error'>{errors.username}</span>}
            </div>
            <div>
                <label htmlFor='password'>password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && <span className='error'>{errors.password}</span>}
            </div>
            <div>
                <label htmlFor='password'>confirmPassword:</label>
                <input type='password' name='confirmPassword' id="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
               {errors.confirmedPassword && <span className='error'>{errors.confirmedPassword}</span>}
            </div>
            <div>
                <label htmlFor='email'>email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                 {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <div>
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
               <option value="">Select gender</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
               <option value="other">Other</option>
          </select>
                {errors.gender && <span className='error'>{errors.gender}</span>}
      </div>

      <div>
        <label>Birthday:</label>
        <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
        {errors.birthday && <span className='error'>{errors.birthday}</span>}
      </div>
      <div>
        <label>Language:</label>
        <select name="language" value={formData.language} onChange={handleChange}>
          <option value="">Select language</option>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          {/* Add more language options as needed */}
        </select>
        {errors.language && <span className='error'>{errors.language}</span>}
      </div>
      <div>
        <label>Photo:</label>
        <input type="file" name="photo" accept="image/*" onChange={handleChange} />
        {errors.photo && <span className='error'>{errors.photo}</span>}
      </div>
            
            <div className='button-container'><button type='submit' className='button'>signup</button></div>
            
        </form>

      
    </div>
  )
}

export default signup