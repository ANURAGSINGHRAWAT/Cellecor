import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import style from "./login.module.css";
import { Link, json, redirect, useNavigate } from 'react-router-dom';

export default function Login() {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [lemail, setLemail] = useState("")
    const [password, setPassword] = useState("");
    const [lpassword, setLpassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);
    const [action, setAction] = useState("Login");
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const submitForm = async (e) => {
        e.preventDefault();
        if (action === "Login") {
            const newEntry = { email: lemail, password: lpassword };
            console.log(newEntry, "that")
            const validation = Object.values(newEntry).every((val) => val !== "")
            if (validation) {


                const response = await fetch('http://localhost:8080/login', {
                    method: 'post',
                    body: JSON.stringify(newEntry),
                    headers: {
                        'content-type': 'application/JSON'
                    }
                })
                const data = await response.json();

                if (data.error) {
                    console.log(data);

                    setError(data.result)
                    window.alert(data.result)

                    return
                }
                setAllEntry([...allEntry, newEntry])

                if (data.data) {
                    // history.push("/Page");
                    localStorage.setItem("loginData", JSON.stringify(data.data))
                    navigate("/Page");
                }
            }
            else {
                window.alert(error)

            }
        }
        else {
            const newEntry = { name, number, email, password, confirmPassword };
            const validation = Object.values(newEntry).every((val) => val !== "")
            if (validation) {
                if (password.length != confirmPassword.length) {
                    window.alert('pasword are shoud be same')
                    return
                }

                const response = await fetch('http://localhost:8080/demo', {
                    method: 'post',
                    body: JSON.stringify(newEntry),
                    headers: {
                        'content-type': 'application/JSON'
                    }
                })
                const data = await response.json();
                if (data.error) {
                    console.log(data);

                    setError(data.result)
                    window.alert(data.result)

                    return
                }

                setAllEntry([...allEntry, newEntry])
                setAction("Login")
                console.log(data);
            }
            else {
                window.alert('pasword are shoud be same')

            }
        }
    }


    return (
        <>
            <form className={style.form} action="" onSubmit={submitForm}>

                <div className={style.main_login}>
                    <div className={style.head_txt}><h4>{action}</h4></div>
                    {action === "Login" ? <> <div className={style.login_del}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='login email' name='login email' autoComplete='off'
                            value={lemail}
                            onChange={(e) => setLemail(e.target.value)}
                        />
                    </div>
                        <div className={style.login_del}>
                            <label htmlFor="password"> Password  </label>
                            <input type="password" id='login password' name='login password' autoComplete='off'
                                value={lpassword}
                                onChange={(e) => setLpassword(e.target.value)}
                            />
                        </div>
                        <div className={style.forgot}>
                            <p>Forgot Password :</p>

                            <button className={style.btn}>click here!</button>
                        </div> </>
                        : <><div className={style.name_login}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id='text' name='name' autoComplete='off'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="number">Number</label>
                            <input type="text" id='text' name='name' autoComplete='off'
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />

                        </div>


                            <div className={style.login_del}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' name='email' autoComplete='off'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={style.login_del}>
                                <label htmlFor="password"> Password  </label>
                                <input type="password" id='password' name='password' autoComplete='off'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className={style.login_del}>
                                <label htmlFor=" confirm password">Confirm Password  </label>
                                <input type="password" id='password' name='confirm password' autoComplete='off'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div></>}




                    <div className={style.buttns}>
                        <button type='submit' className="btn-primary">submit</button>


                        <p type='button' onClick={() => { setAction("Sign up") }}>Sign up</p>
                        <p type='button' onClick={() => { setAction("Login") }}>Login</p>
                    </div>

                </div>
            </form>
        </>
    );

}       
