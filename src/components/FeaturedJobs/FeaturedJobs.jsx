/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs]=useState([]);
    const [dataLength, setDataLength] =useState(4);

    useEffect(()=> {
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data => setJobs(data))
    },[])

    return (
       <div>
         <div className="text-center">
            <h2 className="text-5xl"> Featuredd jobs  :{jobs.length}</h2>
            <p>Explore thousand of jobs opportunities with all the information yon need its yor feature </p>
        </div>
<div className="grid grid-cols-2 gap-6">
    {
        jobs.slice(0,dataLength).map(job => <Job job={job}></Job>)
    }
</div>
<div className={dataLength == jobs.length && 'hidden'}>
    {/* classname={datalength == jobs.longth ?'hidden': ''  } */}
    <button onClick={()=>setDataLength(jobs.length)} className="btn primary bg-indigo-950 text-white  "> Show All Jobs</button>

</div>
  
       </div>
    );
};

export default FeaturedJobs;