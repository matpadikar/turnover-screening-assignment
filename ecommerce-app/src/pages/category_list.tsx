import Head from "next/head";
import Link from "next/link";

import { useState } from "react";

import { api } from "~/utils/api";
import styles from "./index.module.css";

interface CategoryListProps {
    email: string;
}

const CategoryList = ({email}: CategoryListProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(15);

    const category_list = api.get.getCategories.useQuery({ page_no: currentPage });
    const user_details = api.get.getUser.useQuery({ email: email});

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <Head>
                <title>Category List</title>
            </Head>
            <div>
                <p>{"Hi, " + (user_details.data? user_details.data.name : '')}</p>
            </div>
            <h1>Category List</h1>
            <ul className={styles.categoryList}>
                {category_list.data?.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
            <div className={styles.pagination}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? styles.active : ""}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;