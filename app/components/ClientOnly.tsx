'use client';

import React, { useEffect,useState} from "react";

export default function ClinetOnly({children}:{children: React.ReactNode}){
    const [isClient, setIsClient] = useState(false);
    useEffect(()=>{setIsClient(true)}, [])

    return (<>{isClient ?  <div>{children}</div> : null }</>)
}