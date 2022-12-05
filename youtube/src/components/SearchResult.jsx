import React, { useContext, useEffect } from 'react'
import uuid from "react-uuid"
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../context/contextApi';
import { fetchData } from '../utils/api';
import LeftNav from './LeftNav';
import SearchResultVideo from './SearchResultVideo';

const SearchResult = () => {
    const [results, setResults] = useState();
    const { searchQuery } = useParams();
    const { setLoading } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h")
        fetchSearchResult()
    }, [searchQuery])

    const fetchSearchResult = () => {
        setLoading(true);
        fetchData(`search/?q=${searchQuery}`)
            .then((res) => {
                console.log(res);
                setResults(res?.contents);
                setLoading(false)
            })
    }
    return (
        <div className='flex flex-row h-[calc(100%-56px)]'>
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-[#101010]">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {results && results?.map((item) => {
                        if (item.type !== "video") return false;
                        let video = item?.video;
                        return (
                            <SearchResultVideo key={uuid()} video={video} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchResult