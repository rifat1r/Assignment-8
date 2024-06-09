import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const Chart = ({book}) => {
    const {totalPages} = book;
    return (
        <div>
            <h2 className='text-5xl'>Books: {book.length}</h2>
        </div>
    );
};

export default Chart;