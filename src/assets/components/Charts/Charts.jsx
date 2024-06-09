import { useLoaderData } from "react-router-dom";
import { getStoredBooksId } from "../../LocalStorage";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Charts = () => {
    const books = useLoaderData();
    const [readBooks, setReadbooks] = useState([]);

    useEffect(() => {
        const storedReadBooksId = getStoredBooksId();
        if (books.length > 0) {
            const readBooksList = [];
            for (const bookId of storedReadBooksId) {
                const book = books.find(book => book.id === bookId);
                if (book) {
                    readBooksList.push(book);
                }
            }
            setReadbooks(readBooksList);
        }
    }, [books]);


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

    return (
        <div>
            <h2>Books: {readBooks.length}</h2>
            <BarChart width={1500} height={500} data={readBooks} >
            <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" shape={<TriangleBar></TriangleBar>} fill="#8884d8" label={{ position: 'top' }} />
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Charts;
