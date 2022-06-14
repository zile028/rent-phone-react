import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom"
import Title from "../components/Title";

function AddRent({addRent}) {
    const navigate = useNavigate()
    const refPhone = useRef();
    const refProvider = useRef();
    const [data, setData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        phone: "",
        provider: "",
        startDate: "",
        endDate: "",
    });

    useEffect(() => {
        let newData = {...data}
        newData.phone = refPhone.current.value
        newData.provider = refProvider.current.value
        setData(newData)
    }, []);

    const onInputHandle = (e) => {
        let newData = {...data}
        newData[e.target.name] = e.target.value
        setData(newData)
    }

    const onSubmitData = (e) => {
        e.preventDefault()
        addRent(data)
        navigate("/")
    }

    return (<div>
        <Title title={"Add"}/>
        <div className="container">
            <div className="row">
                <form className="col-8 offset-2" onSubmit={onSubmitData}>
                    <input type="text" className="form-control mb-2" name="id" placeholder="ID"
                           onInput={onInputHandle}/>
                    <input type="text" className="form-control mb-2" name="firstName" placeholder="First name"
                           onInput={onInputHandle}/>
                    <input type="text" className="form-control mb-2" name="lastName" placeholder="Last name"
                           onInput={onInputHandle}/>
                    <select ref={refPhone} className="form-control mb-2" name="phone" onInput={onInputHandle}>
                        <option value="Samsung">Samsung</option>
                        <option value="Nokia">Nokia</option>
                        <option value="Huawei">Huawei</option>
                    </select>
                    <select ref={refProvider} className="form-control mb-2" name="provider" onInput={onInputHandle}>
                        <option value="MTS">MTS</option>
                        <option value="Telenor">Telenor</option>
                        <option value="OBS">OBS</option>
                        <option value="A1">A1</option>
                    </select>
                    <label htmlFor="start-date">Start date</label>
                    <input id="start-date" type="date" className="form-control mb-2" name="startDate"
                           onInput={onInputHandle}/>
                    <label htmlFor="end-date">End date</label>
                    <input id="end-date" type="date" className="form-control mb-2" name="endDate"
                           onInput={onInputHandle}/>
                    <button className="btn btn-primary">ADD</button>
                </form>
            </div>
        </div>
    </div>);
}

export default AddRent;
