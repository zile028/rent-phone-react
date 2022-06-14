import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Edit from "./pages/Edit";
import AddRent from "./pages/AddRent";
import EditDelete from "./pages/EditDelete";
import Home from "./pages/Home";
import {useEffect, useState} from "react";

function App() {
    const [allRents, setAllRents] = useState([]);

    useEffect(() => {
        if (localStorage.hasOwnProperty("rents")) {
            setAllRents(JSON.parse(localStorage.getItem("rents")))
        }
    }, []);

    const addRent = (rent) => {
        // let copyAllRents = [...allRents]
        // copyAllRents.push(rent)
        // setAllRents(copyAllRents)

        let copyAllRents = [...allRents, rent]
        setAllRents(copyAllRents)
        saveToLocalStorage(copyAllRents)
    }

    const deleteRent = (index) => {
        let copyAllRents = [...allRents]
        copyAllRents.splice(index, 1)
        setAllRents(copyAllRents)
        saveToLocalStorage(copyAllRents)
    }

    const editRent = (data) => {
        let copyAllRents = [...allRents]
        let allRentsIndex = null

        allRents.find((el, index) => {
            allRentsIndex = index
            return el.id === data.id
        })

        copyAllRents[allRentsIndex] = data
        setAllRents(copyAllRents)
        saveToLocalStorage(copyAllRents)
    }

    const saveToLocalStorage = (data) => {
        localStorage.setItem("rents", JSON.stringify(data))
    }


    return (
        <div className="container-fluid">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home allRents={allRents}/>}/>
                <Route path="/add_rent" element={<AddRent addRent={addRent}/>}/>
                <Route path="/edit_delete" element={<EditDelete allRents={allRents} deleteRent={deleteRent}/>}/>
                <Route path="/edit/:index" element={<Edit allRents={allRents} editRent={editRent}/>}/>
            </Routes>
        </div>
    );
}

export default App;
