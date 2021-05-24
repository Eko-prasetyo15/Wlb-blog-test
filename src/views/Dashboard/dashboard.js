import React, { useEffect, useState } from "react"
import { loadData } from "../Home.js/action"
import { useDispatch, useSelector } from "react-redux"
import ListTable from "../../component/Dashboard/List"
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from "../../partial/pagination";
import Filter from "../../partial/filter"

const Dashboard = () => {
    const dispatch = useDispatch()

    const stateData = useSelector((state) => state.dataPost.datas)
    const stateTotal = useSelector((state) => state.dataPost.totalData)

    const [updatePage, setUpdatePage] = useState(1)
    const [limit, setLimit] = useState(5)
    const [updateSearch, setUpdateSearch] = useState('')

    const handleSearchChange = (e) => {
        setUpdateSearch(e.target.value);
    }
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

    const pageNumber = pageNum.slice(0, limit).map((item, index) => {
        return (
            <li key={item}
                onClick={(e) => handleClick(e, item)}
                className={`page-item ${updatePage === item ? "active" : ''}`}>
                <a className="page-link" href="">{item}</a>
            </li>
        );
    });

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });

    const classes = useStyles();

    useEffect(() => {
        dispatch(loadData(updatePage, limit))
    }, [dispatch, updatePage, limit])

    const dataNew = stateData && stateData.filter(
        (item) =>
            item.title.toLowerCase().includes(updateSearch) ||
            item.body.toLowerCase().includes(updateSearch) 
    )

    const DataList = dataNew.map((item, index) => {
        return (
            <ListTable
                key={index}
                id={item.id}
                title={item.title}
                body={item.body}
                tableCell={StyledTableCell}
                tableRow={StyledTableRow}
            />
        )
    })
    return (
        <>
            <div>
                <Filter
                onChange={handleSearchChange}
                val={updateSearch}
                />
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">No</StyledTableCell>
                                <StyledTableCell align="left">Title</StyledTableCell>
                                <StyledTableCell align="left">Description</StyledTableCell>
                                <StyledTableCell align="left">Handle</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {DataList}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br></br>
                <Pagination
                    updatePage={updatePage}
                    next={handleNextClick}
                    prev={handlePrevClick}
                    pageNum={pageNumber}
                    limit={limit}
                    onCLick={handleClick}
                    Limitted={pageNum} />
            </div>
        </>
    )
}

export default Dashboard