import React, {useEffect, useRef, useState} from "react";
import Title from "../components/Title";
import {useNavigate, useParams} from "react-router-dom";

function Edit({allRents, editRent}) {
    const navigate = useNavigate()
    const params = useParams()
    const refFirstName = useRef();
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
        setData(allRents[params.index])
        refFirstName.current.focus()
    }, []);


    const onInputHandle = (e) => {
        let newData = {...data}
        newData[e.target.name] = e.target.value
        setData(newData)
    }

    const onSubmitData = (e) => {
        e.preventDefault()
        editRent(data)
        navigate("/")
    }

    return (<div>
        <Title title={"Edit"}/>
        <div className="container">
            <div className="row">
                <form className="col-8 offset-2" onSubmit={onSubmitData}>
                    <input type="text" className="form-control mb-2" name="id" placeholder="ID"
                           onInput={onInputHandle} value={data.id}/>
                    <input ref={refFirstName} type="text" className="form-control mb-2" name="firstName"
                           placeholder="First name"
                           onInput={onInputHandle} value={data.firstName}/>
                    <input type="text" className="form-control mb-2" name="lastName" placeholder="Last name"
                           onInput={onInputHandle} value={data.lastName}/>
                    <select className="form-control mb-2" name="phone" onInput={onInputHandle}
                            value={data.phone}>
                        <option value="Samsung">Samsung</option>
                        <option value="Nokia">Nokia</option>
                        <option value="Huawei">Huawei</option>
                    </select>
                    <select className="form-control mb-2" name="provider" onInput={onInputHandle}
                            value={data.provider}>
                        <option value="MTS">MTS</option>
                        <option value="Telenor">Telenor</option>
                        <option value="OBS">OBS</option>
                        <option value="A1">A1</option>
                    </select>
                    <label htmlFor="start-date">Start date</label>
                    <input id="start-date" type="date" className="form-control mb-2" name="startDate"
                           onInput={onInputHandle} value={data.startDate}/>
                    <label htmlFor="end-date">End date</label>
                    <input id="end-date" type="date" className="form-control mb-2" name="endDate"
                           onInput={onInputHandle} value={data.endDate}/>
                    <button className="btn btn-primary">SAVE</button>
                </form>
            </div>
        </div>
    </div>);
}

export default Edit;
