import React, {useCallback, useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../hooks/useTelegram";
const Forms = () => {
    const [country, setCountry]=useState('');
    const [street, setStreet]=useState('');
    const [subject, setSubject]=useState('physical');
    const {tg} = useTelegram()
    const onSendData=useCallback(()=>{
        const data={
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data))
    }, [])
    useEffect(()=>{
        tg.onEvent('mainButtonClicked', onSendData())
        return()=>{
            tg.offEvent('mainButtonClicked', onSendData())
        }
    })
    useEffect(()=>{
        tg.MainButton.setParams({
            text: "Upload data"
        })
    }, [])
    useEffect(()=>{
        if(!city||!country){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city])
    const onChangeCountry=(e)=>{
        setCountry(e.target.value)
    }
    const onChangeSubject=(e)=>{
        setSubject(e.target.value)
    }
    const onChangeStreet=(e)=>{
        setStreet(e.target.value)
    }
    return (
        <div>
            <div className="form">
                <h3>Input your data</h3>
                <input type="text" value={country} onChange={onChangeCountry} className="input" placeholder={'Country'}/>
                <input type="text" value={street} onChange={onChangeStreet} className="input" placeholder={'Street'}/>
                <select value={subject} onChange={onChangeSubject} className="select">
                    <option value="physical">Physical person</option>
                    <option value="legal">legal person</option>
                </select>
            </div>
        </div>

    );
};

export default Forms;