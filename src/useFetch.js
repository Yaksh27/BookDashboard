import { useState, useEffect } from "react";

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=> {
        const abortCont = new AbortController();
            console.log('use effect ran');
            setTimeout(()=>{
                fetch(url, {signal: abortCont.signal})
                .then(res =>{
                   if(!res.ok){
                    throw Error('could not fetch result for that resource');
                    
                   }
                    return res.json();
                })
                .then(data=>{
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err)=>{
                    if (err.name === 'AbortError'){
                        console.log('Fetch Aborted')
                    }
                    else{
                    setError(err.message)
                    setIsLoading(false);
                    }
                    
                })
            },1000)

            return ()=> abortCont.abort();
        
        }, [url]);

        return { data, isLoading, error}
}

export default useFetch;