import React, { Component } from 'react';

import styled from 'styled-components';


const FilterContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const FilterInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;
class Filter extends Component {

    render() {
        const { filter, onFilterChange } = this.props;
        return (
            <FilterContainer>
                <FilterLabel>
                    <span>Filter contacts by name:</span>
                    <FilterInput
                        onChange={(e) => onFilterChange(e.target.value)}
                        value={filter}
                        type="text"
                    />
                </FilterLabel>
            </FilterContainer>
        );
    }
}

    
  



export default Filter;