import React, { useEffect } from "react"
import { loadData } from "./action"
import { useDispatch, useSelector } from "react-redux"
import ListHome from "../../component/Home/List"

const Home = () => {
    const dispatch = useDispatch()

    const stateData = useSelector((state) => state.dataPost.datas);

    useEffect(() => {
        dispatch(loadData())
    }, [dispatch])

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
        </div>
    )
}

export default Home