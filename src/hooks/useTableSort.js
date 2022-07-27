import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const initialState = [
    { id: 1, value: 100 },
    { id: 2, value: 200 },
    { id: 3, value: 300 },
    { id: 4, value: 400 },
    { id: 5, value: 500 },
];

const sortOptions = [
    { value: "ascending", label: "By growth"},
    { value: "descending", label: "By decline" }
];

const useTableSort = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const sortOrder = new URLSearchParams(location.search).get("sortBy") ?? "ascending";

    const [expenses, setExpenses] = useState(initialState);

    useEffect(() => {
        if(location.search !== "") {
            return;
        }

        navigate({
            ...location,
            search: `sortBy=ascending`
        })
    },[location, navigate]);

    useEffect(() => {
        setExpenses(prev => [...prev].sort((a,b) => {
           return sortOrder === "ascending" 
           ? a.value - b.value
           : b.value - a.value 
        }))
    },[sortOrder])

    const onSortOrderChange = (order) => {
        navigate({
            ...location,
            search: `sortBy=${order}`
        })
    }
    
    return { sortOptions, onSortOrderChange, sortOrder, expenses }
};

export default useTableSort;