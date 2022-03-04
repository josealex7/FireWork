import React from 'react';
import './styleslistarAll.css';

const ListFilters = () => {
    return (
        <div className='first-container-filter'>
            <div className='container-title-filter'>
                <h3 className='title-filter'>Filtro de búsqueda</h3>
            </div>
            <div className='container-items-categorias'>
                <h4 className='title-categories-filter'>Categorías</h4>

                <div className="categories-checkbox-filter">
                    <label><input value="one" type="checkbox" id="one" />Front-end Projects</label>
                    <label><input value="two" type="checkbox" id="two" />Back-end Projects</label>
                    <label><input value="three" type="checkbox" id="three" />Data Visualization</label>
                    <label><input value="four" type="checkbox" id="four" />Challenges</label>
                    <label><input value="five" type="checkbox" id="five" />Open Source Community</label>
                    <label><input value="six" type="checkbox" id="six" />Gitter help rooms</label>
                    <label><input value="seven" type="checkbox" id="seven" />Videos</label>
                    <label><input value="eight" type="checkbox" id="eight" />City Meetups</label>
                    <label><input value="nine" type="checkbox" id="nine" />Wiki</label>
                    <label><input value="ten" type="checkbox" id="ten" />Forum</label>
                    <label><input value="eleven" type="checkbox" id="eleven" />Additional Courses</label>
                </div>
            </div>
        </div>
    )
};

export default ListFilters;