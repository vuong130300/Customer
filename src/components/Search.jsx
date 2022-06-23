import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import search from '../assets/images/icon/search-icon.svg';

function Search(props) {
    const {onSearchFormShow, showSearchForm, onSearch} = props;
    const [searchTerm, setSearchTerm] = useState();
    const formRef = useRef(null);
    
    function handleSearchFormShow (){
        if(onSearchFormShow)
        onSearchFormShow();
    }

    function handleSearch(e){
        e.preventDefault()
        if(onSearch)
            onSearch(searchTerm);
    }

    return (
        <div className={showSearchForm ? 'search-model search-display': 'search-model' } >
            <div className="d-flex align-items-center justify-content-center">
                <div className="overlay" onClick={handleSearchFormShow}></div>
                <form onSubmit={(e) => handleSearch(e)} autocomplete="off" className="search-model-form">
                    
                    <div className="input_container">
                        <img src={search} className="input_img"/>
                        <input type="text" id="keywords"  name="keywords_submit" placeholder="Tìm kiếm sản phẩm" className="input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <div className="search-close-switch" onClick={handleSearchFormShow}>+</div>
                    </div>
                    <div className="search_seggest">
                        <p>Cụm từ tìm kiếm phổ biến</p>
                    </div>
                    
                    <div id="search_ajax"></div>
                </form>
            </div>
        </div>
    );
}

export default Search;