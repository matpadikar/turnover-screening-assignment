import Head from "next/head";
import Link from "next/link";

import { useState } from "react";

import { api } from "~/utils/api";
import styles from "./index.module.css";

interface CategoryListProps {
    email: string;
}

const CategoryList = ({email}: CategoryListProps) => {
    const mutation = api.post.updateUserCategories.useMutation();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(15);
    const [selectedCategories, setSelectedCategories] = useState("");

    const category_list = api.get.getCategories.useQuery({ page_no: currentPage });
    const user_details = api.get.getUser.useQuery({ email: email});
    if(!selectedCategories && user_details.data?.selected_categories){
        setSelectedCategories(user_details.data.selected_categories);
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checkboxValue = event.target.checked;
        // Do something based on the checkbox value
        if (checkboxValue) {
            if(!selectedCategories.includes(event.target.name)){
                setSelectedCategories(selectedCategories + event.target.name + ",");
            }
        } else {
            if(selectedCategories.includes(event.target.name)){
                setSelectedCategories(selectedCategories.replace(event.target.name + ",", ""));
            }
        }
    };

    const handleSubmitChanges = () => {
        mutation.mutate({email: email, category: selectedCategories});
    };

    return (
        <div>
            <Head>
                <title>Select Categories</title>
            </Head>
            <div>
                <p>{"Hi, " + (user_details.data ? user_details.data.name : "")}</p>
            </div>
            <h1>Category List</h1>
            <ul className={styles.categoryList}>
                {category_list.data?.map((category) => (
                    <li key={category.id}>
                        <input
                            type="checkbox"
                            id={String(category.id)} name={category.name}
                            checked={selectedCategories.includes(category.name)}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor={String(category.id)}>{category.name}</label>
                    </li>
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
            <button onClick={handleSubmitChanges}>Save Selection</button>
        </div>
    );
};

export default CategoryList;