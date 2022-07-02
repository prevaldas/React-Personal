import { useEffect, useState } from "react";
import axios from "axios";

function PageViews () {

        const [visit, setVisit] = useState("");
        const getVisits = () => {
            axios.get("https://api.countapi.xyz/hit/evaldascoding.online/22c16527-aa35-4553-9c52-b616aace5ddd")
            .then(res => {
                console.log(res);
                setVisit(res.data.value);
            });
} 
    useEffect(() => {
        getVisits()
    },[]);

    return<div>
<h5 className="visit-h5" >Visits: { visit }</h5>
    </div>
}
export default PageViews;