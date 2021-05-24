import React, { useState, useEffect } from "react"
import { loadData } from "./action"
import { useDispatch, useSelector } from "react-redux"
import ListHome from "../../component/Home/List"
import Pagination from "../../partial/pagination"

const Home = () => {
    const dispatch = useDispatch()

    const stateData = useSelector((state) => state.dataPost.datas);
    const stateTotal = useSelector((state) => state.dataPost.totalData)

    const [updatePage, setUpdatePage] = useState(1)
    const [limit, setLimit] = useState(10)

    const handleClick = (e, i) => {
        e.preventDefault()
        setUpdatePage(i)
    }

    const handleNextClick = (e) => {
        e.preventDefault()
        setUpdatePage(updatePage + 1)
    }
    const handlePrevClick = (e) => {
        e.preventDefault()
        setUpdatePage(updatePage - 1)
    }

    let pageNum = []
    for (let i = 1; i <= Math.ceil(stateTotal / limit); i++) {
        pageNum.push(i)
    }

    let Limitted = []
    const pageNumber = pageNum.slice(0, limit).map((item, index) => {
        Limitted.push(index)
        return (
            <li key={item}
                onClick={(e) => handleClick(e, item)}
                className={`page-item ${updatePage === item ? "active" : ''}`}>
                <a className="page-link" href="">{item}</a>
            </li>
        );
    });

    useEffect(() => {
        dispatch(loadData(updatePage, limit))
    }, [updatePage, limit])

    const DataList = stateData.map((item, index) => {
        return (
            <ListHome
                key={index}
                id={item.id} index={index + 1}
                title={item.title}
                body={item.body}
            />
        )
    })
    return (
        <div className="container">
            {DataList}
            <Pagination
                updatePage={updatePage}
                next={handleNextClick}
                prev={handlePrevClick}
                pageNum={pageNumber}
                limit={limit}
                onCLick={handleClick}
                Limitted={pageNum} />
        </div>
    )
}

export default Home