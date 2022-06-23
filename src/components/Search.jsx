import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import search from '../assets/images/icon/search-icon.svg';

function Search(props) {
    const {onSearchForm, isShow, onCloseSearchform} = props;
    const formRef = useRef(null);
  
    function handleClose ()  {
        onCloseSearchform()
    };

    function handleSearchForm() {
        if(onSearchForm)
        onSearchForm(formRef);
    }

    return (
        <div className="search-model search-display">
            <div className="d-flex align-items-center justify-content-center">
                <div className="overlay"></div>
                <form action="" method="POST" autocomplete="off" className="search-model-form">
                    
                    <div className="input_container">
                        <img src={search} className="input_img"/>
                        <input type="text" id="keywords"  name="keywords_submit" placeholder="Tìm kiếm sản phẩm" className="input" />
                        <div className="search-close-switch">+</div>
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