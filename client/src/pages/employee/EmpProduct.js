import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout';
import axios from "axios";
import toast from "react-hot-toast";
import EmpMenu from '../../components/Layout/EmpMenu';
import { Link } from "react-router-dom";



const EmpProduct = () => {
    const [products, setProducts] = useState([]);

    //getall products
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get("/api/v1/product/get-product");
            setProducts(data.products);
        } catch (error) {
            console.log(error);
            toast.error("Someething Went Wrong");
        }
    };

    //lifecycle method
    useEffect(() => {
        getAllProducts();
    }, []);
    return (
        <Layout title={" Employee product"}>
            <div className="row dashboard">
                <div className="col-md-3">
                    <EmpMenu />
                </div>
                <div className="col-md-9 ">
                    <h1 className="text-center">All Products List</h1>
                    <div className="d-flex flex-wrap">
                        {products?.map((p) => (
                            <Link
                                key={p._id}
                                to={`/dashboard/employee/product/${p.slug}`}
                                className="product-link"
                            >
                                <div className="card m-2" style={{ width: "18rem" }}>
                                    <img
                                        src={`/api/v1/product/product-photo/${p._id}`}
                                        className="card-img-top"
                                        alt={p.name}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{p.name}</h5>
                                        <p className="card-text">{p.description.substring(0, 150)}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default EmpProduct