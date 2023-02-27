import React, { useEffect, useState } from 'react';

const Product = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchProduct = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/getUsers", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await response.json();
            setData(json);
        } catch (error) {
            setError('Some Error Occurred');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    if (loading) {
        return (
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        );
    }

    return (
        <>
            { data.length === 1 ? (
                <div className="container">
                    { data.fileDocs.map((p) => (
                        <div className="card" key={p._id} style={{ width: '18rem' }}>
                            <img
                                src={p.image}
                                className="card-img-top"
                                alt="Product"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">
                                    {p.category}
                                </p>
                                <a href="/" className="btn btn-primary">
                                    ${p.price}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={{ color: 'red' }}>Nothing to display</p>
            )}
        </>
    );
};

export default Product;
