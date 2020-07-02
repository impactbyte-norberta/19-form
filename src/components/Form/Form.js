// ================== Formulir di class compoonent

// import React, { Component } from 'react';

// class Form extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: '',
//             email: '',
//             password: '',
//         };

//         // Line di bawah dibutuhkan ketikan method handleChange menggunakan function biasa
//         // this.handleChange = this.handleChange.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange = (event) => {
//         // Simpan data dari user di state
//         this.setState({ [event.target.name]: event.target.value });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();

//         // handleSubmit untuk mengkonsumi data dari user
//         console.log(this.state.name);
//         console.log(this.state.password);
//         console.log(this.state.email);
//         alert(this.state.email);
//     };

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <input
//                             type='text'
//                             name='name'
//                             id='fullName'
//                             placeholder='Nama Lengkap'
//                             onChange={this.handleChange}
//                             value={this.state.name}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type='email'
//                             name='email'
//                             id='email'
//                             placeholder='Email'
//                             onChange={this.handleChange}
//                             value={this.state.email}
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type='password'
//                             name='password'
//                             id='password'
//                             placeholder='Password'
//                             onChange={this.handleChange}
//                             value={this.state.password}
//                         />
//                     </div>
//                     <input type='submit' />
//                 </form>
//             </div>
//         );
//     }
// }

// export default Form;

// =============== Formulir di function component

import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        alert(name);
        alert(email);
        alert(password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type='text'
                        name='name'
                        id='fullName'
                        placeholder='Nama Lengkap'
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='Email'
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Password'
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />
                </div>
                <input type='submit' />
            </form>
        </div>
    );
}

export default Form;
